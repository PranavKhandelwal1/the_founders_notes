#!/usr/bin/env node
/* The Founders Notes: build script.

   What it does (you never need to run it by hand: GitHub does it every time you push):
   1. Reads data/config.js, data/content.js and data/stories.js.
   2. Checks them for mistakes (missing photos, duplicate addresses, missing fields).
   3. Opens the site in a pretend browser once per address and saves the finished page:
        /                      home
        /stories/              all stories
        /stories/<name>/       one page per story
        /tag/<topic>/          one page per topic with 2+ stories
        /country/<country>/    one page per country with 2+ stories
        /about/  /get-featured/  /services/  /contact/
   4. Writes sitemap.xml and robots.txt, and copies everything else into dist/.
   The folder dist/ is what gets published. If anything is wrong, the build stops with a plain message,
   and the live site stays exactly as it was. */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { JSDOM, ResourceLoader, VirtualConsole } = require('jsdom');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'dist');
const problems = [];
const warnings = [];
const fail = msg => problems.push(msg);

/* ---------- 1. Read the data files ---------- */
const ctx = vm.createContext({});
for (const f of ['data/config.js', 'data/content.js', 'data/stories.js']) {
  try { vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { console.error(`\nCannot read ${f}: ${e.message}\nThis is usually a missing comma, quote or bracket near the place named above.`); process.exit(1); }
}
const CONFIG = vm.runInContext('CONFIG', ctx);
const STORIES = vm.runInContext('STORIES', ctx);

let SITE = String(CONFIG.siteUrl || '').trim().replace(/\/+$/, '');
if (!SITE || /^\[/.test(SITE)) { warnings.push('siteUrl is empty in data/config.js, so addresses in the sitemap use https://example.com. Set it to your real address.'); SITE = 'https://example.com'; }
const ORIGIN = new URL(SITE).origin;

/* ---------- 2. Check the stories ---------- */
const need = ['id', 'headline', 'summary', 'business', 'owner', 'location', 'body'];
const seenIds = new Set();
STORIES.forEach((s, i) => {
  const who = `Story ${s.id || '#' + (i + 1)} (${s.owner || s.business || 'unnamed'})`;
  need.forEach(k => { if (!s[k] || (Array.isArray(s[k]) && !s[k].length)) fail(`${who}: "${k}" is missing.`); });
  if (s.id && seenIds.has(s.id)) fail(`${who}: id "${s.id}" is used twice. Every story needs its own id.`);
  seenIds.add(s.id);
  const imgs = [s.image, ...(Array.isArray(s.body) ? s.body.filter(p => p && p.img).map(p => p.img) : [])].filter(Boolean);
  imgs.forEach(p => { if (!/^https?:/.test(p) && !fs.existsSync(path.join(ROOT, String(p).replace(/^\//, '')))) fail(`${who}: the photo "${p}" was not found. Check the file name and capital letters (images/Name.jpg and images/name.jpg are different on the live site).`); });
  if (s.image && !s.imageAlt) warnings.push(`${who}: add "imageAlt" (a short description of the photo). It helps Google Images and screen readers.`);
  if (s.summary && s.summary.length > 200) warnings.push(`${who}: the summary is ${s.summary.length} characters. Google shows about 160, so put the key point first.`);
  if (!s.published) warnings.push(`${who}: no "published" date. Adding one helps search engines (for example published: "2026-11-09").`);
});

/* ---------- 3. A pretend browser that serves files from this folder ---------- */
class Loader extends ResourceLoader {
  fetch(url) {
    const u = new URL(url);
    if (u.origin === ORIGIN) {
      const file = path.join(ROOT, decodeURIComponent(u.pathname));
      if (/\.css$/i.test(file)) return Promise.resolve(Buffer.from(''));      // styles are not needed to build the HTML
      if (fs.existsSync(file) && fs.statSync(file).isFile()) return Promise.resolve(fs.readFileSync(file));
      return Promise.reject(new Error('not found: ' + u.pathname));
    }
    return Promise.resolve(Buffer.from(''));                                   // fonts and other outside files are skipped
  }
}
const template = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

async function render(routePath) {
  const errors = [];
  const vc = new VirtualConsole();
  vc.on('jsdomError', e => { if (!/Not implemented/.test(e.message)) errors.push(e.message); });
  const dom = new JSDOM(template, {
    url: ORIGIN + routePath, runScripts: 'dangerously', resources: new Loader(), pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(w) {
      w.scrollTo = () => { };
      w.Element.prototype.scrollIntoView = () => { };
      w.matchMedia = w.matchMedia || (() => ({ matches: false, addListener() { }, removeListener() { }, addEventListener() { }, removeEventListener() { } }));
    }
  });
  await new Promise(res => dom.window.addEventListener('load', res));
  await new Promise(res => setTimeout(res, 20));
  if (errors.length) throw new Error(`The page ${routePath} produced errors:\n  ` + errors.join('\n  '));
  return dom;
}

function finish(dom, routePath) {
  const doc = dom.window.document;
  const isStory = routePath.startsWith('/stories/') && routePath !== '/stories/';
  doc.querySelectorAll('.pg-off, section[hidden], .toast').forEach(e => e.remove());   // other pages' sections are not part of this page
  if (isStory) doc.getElementById('homeView').innerHTML = '';
  return dom.serialize();
}

const outFile = routePath => path.join(OUT, routePath === '/' ? 'index.html' : routePath.replace(/^\//, ''), routePath === '/' ? '' : 'index.html');

(async () => {
  /* ---------- 4. Work out every address, then build each page ---------- */
  const first = await render('/');
  const routes = first.window.allRoutes();
  first.window.close();
  const dupes = routes.filter((r, i) => routes.indexOf(r) !== i);
  dupes.forEach(r => fail(`Two pages would share the address ${r}. Give one of the stories a different "slug" (for example slug: "veena-pillai-karate").`));
  if (problems.length) return report();

  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  const pages = {};
  for (const r of routes) {
    try {
      const dom = await render(r);
      const doc = dom.window.document;
      const title = doc.title || '', desc = (doc.querySelector('meta[name="description"]') || {}).content || '';
      if (!title) fail(`${r}: no page title.`);
      if (desc.length < 50) warnings.push(`${r}: the search description is very short.`);
      if (title.length > 70) warnings.push(`${r}: the title is ${title.length} characters (Google shows about 60): "${title}"`);
      if (!doc.querySelector('link[rel="canonical"]')) fail(`${r}: no canonical link.`);
      pages[r] = finish(dom, r);
      const h1s = (pages[r].match(/<h1[\s>]/g) || []).length;
      if (h1s !== 1) warnings.push(`${r}: has ${h1s} main headings (h1). One is ideal.`);
      dom.window.close();
    } catch (e) { fail(e.message); }
  }
  if (problems.length) return report();

  /* ---------- 5. Copy the files the site needs ---------- */
  for (const d of ['css', 'js', 'data', 'images', 'assets']) fs.cpSync(path.join(ROOT, d), path.join(OUT, d), { recursive: true });
  for (const f of ['privacy.html', '404.html', '.nojekyll', 'CNAME', 'favicon.ico']) if (fs.existsSync(path.join(ROOT, f))) fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
  for (const [r, html] of Object.entries(pages)) { const f = outFile(r); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, html); }

  /* ---------- 6. Sitemap and robots.txt ---------- */
  const urls = [...routes, '/privacy.html'];
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map(u => `  <url><loc>${SITE}${u}</loc></url>`).join('\n') + '\n</urlset>\n';
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

  /* ---------- 7. Check every internal link ---------- */
  const known = new Set(routes);
  for (const [r, html] of Object.entries(pages)) {
    for (const m of html.matchAll(/<a [^>]*href="(\/[^"]*)"/g)) {
      const p = m[1].split('#')[0].split('?')[0];
      if (!p || p.startsWith('//')) continue;
      if (p.endsWith('/') ? !known.has(p) : !fs.existsSync(path.join(OUT, p))) fail(`${r}: a link goes to ${m[1]} but no such page exists.`);
    }
  }
  report(routes);
})().catch(e => { console.error('\nBuild failed:', e.message); process.exit(1); });

function report(routes) {
  warnings.forEach(w => console.log('  note: ' + w));
  if (problems.length) {
    console.error('\nThe site was NOT built, so the live site stays as it is. Please fix:\n');
    problems.forEach(p => console.error('  - ' + p));
    console.error('');
    process.exit(1);
  }
  console.log(`\nBuilt ${routes.length} pages into dist/ (${SITE}).`);
}
