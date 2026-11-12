/* The Founders Notes: rendering code. Content lives in /data, so you should not need to edit this file. */

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const mailto = subject => 'mailto:' + CONFIG.email + (subject ? '?subject=' + encodeURIComponent(subject) : '');
const instaUrl = () => 'https://instagram.com/' + CONFIG.instagram.replace(/[@\[\]\s]/g, '');
const isSet = v => !!v && !/^\[/.test(String(v).trim());
const waUrl = () => isSet(CONFIG.whatsapp) ? 'https://wa.me/' + CONFIG.whatsapp.replace(/\D/g, '') + '?text=' + encodeURIComponent('Hi, I found you through ' + CONFIG.brand) : mailto('WhatsApp enquiry');
const calUrl = () => isSet(CONFIG.calendly) ? CONFIG.calendly : mailto('Book a call');
const igUrl = () => isSet(CONFIG.instagram) ? instaUrl() : '/contact/';
const external = u => /^https?:/.test(u);
const BASE_TITLE = CONFIG.brand + ' — Free stories for independent founders';
const N = () => document.createElement('div');   // a throw-away element, so code can run on pages that do not contain every section

/* ---------- Addresses: every page has its own real URL ---------- */
const slugify = t => String(t).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const storySlug = s => (s.slug && slugify(s.slug)) || slugify(s.owner) || ('story-' + s.id);
const storyPath = s => '/stories/' + storySlug(s) + '/';
const asset = p => /^(https?:|\/|data:)/.test(p) ? p : '/' + String(p).replace(/^\.\//, '');
const PAGES = { home: '/', stories: '/stories/', about: '/about/', mission: '/mission/', 'get-featured': '/get-featured/', services: '/services/', contact: '/contact/' };
const tally = pick => { const m = new Map(); STORIES.forEach(s => [].concat(pick(s)).filter(Boolean).forEach(k => m.set(k, (m.get(k) || 0) + 1))); return m; };
/* A topic or country gets its own page once at least two stories share it */
const topicNames = () => [...tally(s => Array.isArray(s.tags) ? s.tags : [])].filter(([, n]) => n >= 2).sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0])).map(([k]) => k);
const placeNames = () => [...tally(s => String(s.location || '').split(',').pop().trim())].filter(([, n]) => n >= 2).sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0])).map(([k]) => k);
const tagPath = t => '/tag/' + slugify(t) + '/';
const countryPath = c => '/country/' + slugify(c) + '/';
function parseRoute(path) {
  let p = String(path || '/').replace(/index\.html$/, '').replace(/\/+/g, '/');
  if (!p.endsWith('/')) p += '/';
  for (const [page, url] of Object.entries(PAGES)) if (url === p) return { page, path: p };
  let m;
  if ((m = p.match(/^\/stories\/([^/]+)\/$/))) { const s = STORIES.find(x => storySlug(x) === decodeURIComponent(m[1])); if (s) return { page: 'story', story: s, path: p }; }
  if ((m = p.match(/^\/tag\/([^/]+)\/$/))) { const t = topicNames().find(x => slugify(x) === m[1]); if (t) return { page: 'stories', tag: t, path: p }; }
  if ((m = p.match(/^\/country\/([^/]+)\/$/))) { const c = placeNames().find(x => slugify(x) === m[1]); if (c) return { page: 'stories', country: c, path: p }; }
  return { page: 'home', path: '/', unknown: true };
}
/* Every address the build has to create a page for */
function allRoutes() { return [...Object.values(PAGES), ...STORIES.map(storyPath), ...topicNames().map(tagPath), ...placeNames().map(countryPath)]; }
/* Old links such as /#story-2 or /#about still work: they are sent to the new address */
function legacyRedirect() {
  if (!/^\/(index\.html)?$/.test(location.pathname)) return;
  const h = decodeURIComponent(location.hash.slice(1)); if (!h) return;
  let to = null, m;
  if ((m = h.match(/^story-(.+)$/))) { const s = STORIES.find(x => x.id === m[1]); if (s) to = storyPath(s); }
  else if ((m = h.match(/^tag-(.+)$/))) to = topicNames().includes(m[1]) ? tagPath(m[1]) : PAGES.stories;
  else if ((m = h.match(/^country-(.+)$/))) to = placeNames().includes(m[1]) ? countryPath(m[1]) : PAGES.stories;
  else to = { stories: '/stories/', about: '/about/', 'get-featured': '/get-featured/', faq: '/get-featured/#faq', services: '/services/', 'get-in-touch': '/contact/', contact: '/contact/', principles: '/about/#principles', voices: '/about/#voices' }[h] || null;
  if (to) location.replace(to);
}


/* ---------- Cover art: neutral placeholder shown when a story has no photo ---------- */
const COVERS = {
  paper: { art: "none", color: "#E9E7E1", accent: "#1F2A2A", shape: "#1F2A2A", ink: "#C9C5BB", inkLight: "#1F2A2A", inkDark: "#E9E7E1" }
};

function initialsOf(s) {
  if (s.initials) return s.initials;
  return s.business.split(/\s+/).filter(w => /^[A-Za-z]/.test(w)).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}
const hashStr = str => { let x = 0; for (const ch of String(str)) x = (x * 31 + ch.charCodeAt(0)) >>> 0; return x; };
const coverKey = s => COVERS[s.cover] ? s.cover : Object.keys(COVERS)[hashStr(s.id) % Object.keys(COVERS).length];
const coverOf = s => COVERS[coverKey(s)];
/* second pattern for every other story that shares a colour (counted from the oldest, so adding new stories never changes old covers) */
const coverVariant = s => STORIES.slice(STORIES.indexOf(s._orig || s) + 1).filter(x => coverKey(x) === coverKey(s)).length % 2;
function art(s, align = 'xMidYMid', ty = 375) {
  const c = coverOf(s);
  const sh = c.shape, ac = c.accent;
  const variant = coverVariant(s);
  const ln = `fill="none" stroke="${sh}" stroke-opacity=".3" stroke-width="1.5"`;
  let g = '';
  const fam = c.art || 'rings';
  if (fam === 'none') {
    g = '';
  } else if (fam === 'rings') {
    if (variant === 0) {
      let p = ''; for (let r = 50; r <= 260; r += 52) p += `<circle cx="450" cy="180" r="${r}"/>`;
      g = `<g ${ln}>${p}</g><circle cx="450" cy="180" r="20" fill="${ac}"/>`;
    } else {
      g = `<g ${ln}><path d="M290 250A130 130 0 0 1 550 250"/><path d="M0 250H600"/><path d="M340 280H500M370 308H470M400 336H440"/></g><circle cx="420" cy="170" r="20" fill="${ac}"/>`;
    }
  } else if (fam === 'lines') {
    if (variant === 0) {
      let p = ''; for (let i = 0; i < 9; i++) p += `<path d="M${260 + i * 42} -10L${60 + i * 42} 460"/>`;
      g = `<g ${ln}>${p}</g><path d="M${260 + 4 * 42} -10L${60 + 4 * 42} 460" stroke="${ac}" stroke-width="5" fill="none"/>`;
    } else {
      let p = ''; const wave = y => `<path d="M230 ${y}Q320 ${y - 34} 410 ${y}T590 ${y}"/>`;
      for (let i = 0; i < 6; i++) p += wave(90 + i * 46);
      g = `<g ${ln}>${p}</g><path d="M230 182Q320 148 410 182T590 182" stroke="${ac}" stroke-width="4" fill="none"/>`;
    }
  } else if (fam === 'petals') {
    if (variant === 0) {
      g = `<g ${ln}><circle cx="370" cy="140" r="105"/><circle cx="465" cy="190" r="105"/><circle cx="395" cy="250" r="105"/></g><circle cx="430" cy="190" r="18" fill="${ac}"/>`;
    } else {
      let p = ''; for (let i = 0; i < 8; i++) p += `<path d="M${320 + i * 38} -10C${260 + i * 38} 110 ${390 + i * 38} 190 ${330 + i * 38} 340"/>`;
      g = `<g ${ln}>${p}</g><path d="M${320 + 3 * 38} -10C${260 + 3 * 38} 110 ${390 + 3 * 38} 190 ${330 + 3 * 38} 340" stroke="${ac}" stroke-width="4" fill="none"/>`;
    }
  } else {
    let p = '', a = '';
    if (variant === 0) {
      for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) {
        const x = 290 + k * 76, y = 40 + r * 76, rot = ((r + k) % 4) * 90;
        const d = `<path d="M0 0H70A70 70 0 0 1 0 70Z" transform="translate(${x} ${y}) rotate(${rot} 35 35)"`;
        if (r === 1 && k === 2) a = d + ` fill="${ac}"/>`; else p += d + `/>`;
      }
    } else {
      for (let r = 0; r < 2; r++) for (let k = 0; k < 4; k++) {
        const x = 290 + k * 78 + (r ? 39 : 0), y = 120 + r * 70;
        const d = `<path d="M${x} ${y}a35 35 0 0 1 70 0z"`;
        if (r === 1 && k === 1) a = d + ` fill="${ac}"/>`; else p += d + `/>`;
      }
    }
    g = `<g ${ln}>${p}</g>${a}`;
  }
  return `<svg viewBox="0 0 600 450" preserveAspectRatio="${align} slice" aria-hidden="true" focusable="false"><rect width="600" height="450" fill="${c.color}"/>${g}<text x="40" y="${ty}" font-family="'Newsreader',Georgia,serif" font-weight="400" font-size="170" letter-spacing="-6" fill="${c.ink}">${esc(initialsOf(s))}</text></svg>`;
}

/* Cover picture: the person's photo fills the banner. If the file is missing, a plain neutral block with their initials shows instead. */
const media = (s, align, ty) => art(s, align, ty) + (s.image ? `<img src="${esc(asset(s.image))}" alt="${esc(s.imageAlt || s.owner)}" style="object-position:${esc(s.imagePos || 'center 25%')}" loading="lazy" onerror="this.remove()">` : '');
const igHref = v => /^https?:/.test(v) ? v : 'https://instagram.com/' + String(v).replace(/[@\s]/g, '');

/* ---------- Shared pieces ---------- */
const catVars = s => { const c = coverOf(s); return `--cat:${c.accent};--cat-ink:light-dark(${c.inkLight},${c.inkDark})`; };
const tagsOf = s => Array.isArray(s.tags) ? s.tags : [];
const labelHtml = s => `<p class="label">${tagsOf(s).length ? `<span class="cat-name">${esc(tagsOf(s).slice(0, 2).join(' \u00b7 '))}</span>` : ''}${s.sample ? '<span class="sample">Sample</span>' : ''}</p>`;
const tagsHtml = s => tagsOf(s).length ? `<ul class="tags" aria-label="Tags">${tagsOf(s).map(t => topicNames().includes(t) ? `<li><a href="${tagPath(t)}">${esc(t)}</a></li>` : `<li>${esc(t)}</li>`).join('')}</ul>` : '';

const numHtml = s => `<span class="num mono">#${STORIES.length - STORIES.indexOf(s._orig || s)}</span>`;

function cardHtml(s) {
  return `<article class="card" style="${catVars(s)}">
<div class="cover" style="background:${coverOf(s).color}">${media(s)}${numHtml(s)}</div>
<div class="card-body">
  ${labelHtml(s)}
  <h3><a href="${storyPath(s)}">${esc(s.headline)}</a></h3>
  <p class="summary">${esc(s.summary)}</p>
  <p class="biz mono">${esc(s.business)}</p>
</div>
  </article>`;
}
const inviteHtml = () => `<article class="card invite">
  <div class="card-body">
<span class="mono">For business owners</span>
<h3>Teach or run a studio? Get featured for free.</h3>
<p>A short chat, a draft you approve, and a story that's yours to share.</p>
<a class="btn btn-cta" href="/get-featured/">Get featured</a>
  </div>
</article>`;

/* ---------- Home: search, lead, grid ---------- */
let query = '', fTag = '', fCountry = '';
function initSearch() {
  ($('#q') || N()).addEventListener('input', e => { query = e.target.value; renderStories(true); });
}
function renderStories(announce) {
  const q = query.trim().toLowerCase();
  const list = STORIES.filter(s =>
    (!fTag || tagsOf(s).includes(fTag)) && (!fCountry || countryOf(s) === fCountry) &&
    (!q || [s.headline, s.summary, s.business, s.owner, s.location, s.offers, tagsOf(s).join(' ')].join(' ').toLowerCase().includes(q)));
  const shown = curPage === 'home' ? list.slice(0, 4) : list;   // the home page shows only the latest few
  const [lead, ...rest] = shown;
  ($('#lead') || N()).innerHTML = lead ? `<article class="lead" style="${catVars(lead)}">
  <div class="cover">${media(lead, 'xMinYMid')}${numHtml(lead)}</div>
  <div class="lead-body">
    <span class="mono feat-label">${q ? 'Best match' : 'Featured story'}</span>
    ${labelHtml(lead)}
    <h2>${esc(lead.headline)}</h2>
    <p class="summary">${esc(lead.summary)}</p>
    <p class="byline mono"><span>${esc(lead.owner)}</span><span>${esc(lead.location)}</span><span>${esc(lead.readTime)}</span></p>
    <a class="btn btn-dark" href="${storyPath(lead)}">Read the story</a>
  </div>
</article>` : `<p class="empty">No stories match${query ? ' &ldquo;' + esc(query) + '&rdquo;' : ' those filters'}. Try another word, or choose &ldquo;All&rdquo;.</p>`;
  ($('#grid') || N()).innerHTML = rest.map(cardHtml).join('') + inviteHtml();
  ($('#seeAll') || N()).innerHTML = curPage === 'home' && list.length > shown.length ? `<a class="btn btn-line" href="/stories/">See all ${list.length} stories</a>` : '';
  if (announce) ($('#live') || N()).textContent = `Showing ${list.length} ${list.length === 1 ? 'story' : 'stories'}.`;
}

/* ---------- Story page ---------- */
function showStory(s, opts = {}) {
  const orig = s._orig || s;
  const others = STORIES.filter(x => x !== orig);
  const shared = x => tagsOf(x).filter(t => tagsOf(orig).includes(t)).length * 2 + (countryOf(x) && countryOf(x) === countryOf(orig) ? 1 : 0);
  const more = others.map(x => [x, shared(x)]).sort((a, b) => b[1] - a[1]).map(p => p[0]).slice(0, 3);
  const paras = s.body.map(p => typeof p === 'string' ? `<p>${esc(p)}</p>`
    : p.q ? `<div class="qa"><h3>${esc(p.q)}</h3><p>${esc(p.a)}</p></div>`
    : `<figure><img src="${esc(asset(p.img))}" alt="${esc(p.alt || '')}" loading="lazy" onerror="this.closest('figure').hidden=true">${p.caption ? `<figcaption>${esc(p.caption)}</figcaption>` : ''}</figure>`);
  const pq = `<blockquote class="pull"><p>${esc('\u201C' + s.pullQuote + '\u201D')}</p><cite class="mono">${esc(s.owner)}, ${esc(s.business)}</cite></blockquote>`;
  const at = Math.min(Math.max(s.pullAfter || 2, 1), paras.length);
  paras.splice(at, 0, pq);
  const fact = (k, v) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`;
  ($('#storyView') || N()).innerHTML = `
  <div class="wrap story" style="${catVars(s)}">
<nav class="crumbs mono" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/stories/">Stories</a><span aria-hidden="true">/</span><span aria-current="page">${esc(s.owner)}</span></nav>
<header class="story-head">
  ${s.sample || s.series ? `<p class="label">${s.series ? `<span class="cat-name">${esc(s.series)}</span>` : ''}${s.sample ? '<span class="sample">Sample</span>' : ''}</p>` : ''}
  <h1 tabindex="-1" id="storyTitle">${esc(s.headline)}</h1>
  <p class="dek">${esc(s.summary)}</p>
  <p class="mono" style="color:var(--muted);margin-top:1.2rem">${[s.author ? 'By ' + esc(s.author) : '', esc(s.readTime), s.published ? esc(new Date(s.published + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })) : ''].filter(Boolean).join(' &middot; ')}</p>
  ${tagsHtml(s)}
</header>
<div class="story-grid">
  <div>
    <div class="cover">${media(s)}${numHtml(s)}</div>
    <div class="article">
      ${paras.join('')}
      ${s.sample ? '<p class="end-note">This is a sample story with an invented person, business and place, shown to demonstrate the format.</p>' : ''}
      <p class="end-note correction">Something not right, or want to change a detail? <a href="${esc(mailto('Correction request: ' + s.business) + '&body=' + encodeURIComponent('Hello,\n\nI would like to request a change to the story about ' + s.business + ' (' + storyUrl(s) + ').\n\nWhat should change:\n\n'))}">Request a correction</a>. Founders can ask for changes or removal at any time.</p>
    </div>
  </div>
  <aside class="side" aria-label="Story sidebar">
    <div class="box">
      <h2>Business facts</h2>
      <dl class="facts">
        ${fact('Business', s.business)}${fact('Owner', s.owner)}${fact('Location', s.location)}${fact('Founded', s.founded)}${fact('Offers', s.offers)}${s.instagram ? `<div><dt>Instagram</dt><dd><a class="ig-link" href="${esc(igHref(s.instagram))}" target="_blank" rel="noopener" aria-label="${esc(s.business)} on Instagram" title="Instagram">${ICONS.insta}</a></dd></div>` : ''}
      </dl>
    </div>
    <div class="box cta-box">
      <h2>Want a website that tells your story like this?</h2>
      <p>I design and build simple, clear websites for studios, teachers and independent class businesses. Tell me about yours.</p>
      <a class="btn btn-cta" href="${esc(mailto('Website enquiry (after reading ' + s.business + ')'))}">Get in touch</a>
    </div>
  </aside>
</div>
<section class="more" aria-labelledby="moreTitle">
  <h2 id="moreTitle">More stories</h2>
  <div class="grid">${more.map(cardHtml).join('')}</div>
</section>
  </div>`;
  $('#homeView').hidden = true;
  $('#storyView').hidden = false;
  document.body.dataset.page = 'story';
  if (!opts.initial) { window.scrollTo(0, 0); $('#storyTitle').focus({ preventScroll: true }); }
  enhanceStory(s);
}

/* ---------- Static sections ---------- */
function renderHero() {
  if (!$('#heroVisual')) return;
  const picks = STORIES.slice(0, 3);
  ($('#heroVisual') || N()).innerHTML = picks.map((s, i) =>
    `<a class="hv" href="${storyPath(s)}" style="background:${coverOf(s).color}">${media(s, 'xMinYMid', i === 0 ? 375 : 282)}${numHtml(s)}<span class="hv-cap"><span class="mono">${esc(tagsOf(s)[0] || 'Story')}${s.sample ? ' &middot; Sample' : ''}</span><strong>${esc(s.business)}</strong></span></a>`
  ).join('');
}
const ICONS = {
  mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  chat: '<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.9A8 8 0 1 1 21 12z"/></svg>',
  insta: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8"/></svg>',
  cal: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>'
};
function renderContact() {
  const rows = [
    ['mail', 'Email us', mailto('Hello from the website')],
    ['chat', 'Message on WhatsApp', waUrl()],
    ['insta', 'Follow on Instagram', igUrl()],
    ['cal', 'Book a 20-minute call', calUrl()],
    ['globe', 'Read the stories', '/stories/']
  ];
  ($('#chatList') || N()).innerHTML = rows.map(([ic, name, url]) =>
    `<li><a class="crow" href="${esc(url)}"${external(url) ? ' target="_blank" rel="noopener"' : ''}><span class="ci" aria-hidden="true">${ICONS[ic]}</span><span class="ct"><strong>${esc(name)}</strong></span><span class="go" aria-hidden="true">&rarr;</span></a></li>`
  ).join('');
  ($('#footCats') || N()).innerHTML = STORIES.slice(0, 4).map(s => `<li><a href="${storyPath(s)}">${esc(s.business)}</a></li>`).join('');
}
const header = $('#siteHeader'), menuBtn = $('#menuBtn');
function setMenu(open) {
  header.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
menuBtn.addEventListener('click', () => setMenu(!header.classList.contains('open')));
$('#navLinks').addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
/* ---------- Send a message: posts to a form service and emails you; every failure still ends with a working way to email ---------- */
const msgForm = $('#msgForm') || document.createElement('form'), msgNote = $('#msgNote') || N(), msgBtn = $('button[type="submit"]', msgForm) || document.createElement('button');
const msgUrl = () => (CONFIG.formEndpoint && CONFIG.formEndpoint.trim()) || (isSet(CONFIG.formAccessKey) ? 'https://api.web3forms.com/submit' : 'https://formsubmit.co/ajax/' + CONFIG.email);
/* Extra fields when a Web3Forms access key is set (see data/config.js). Empty otherwise. */
const formExtras = (subject, replyTo) => isSet(CONFIG.formAccessKey) ? { access_key: CONFIG.formAccessKey.trim(), subject, from_name: CONFIG.brand + ' website', replyto: replyTo } : {};
const reasonNote = err => err && err.message ? '<br><small>Reason: ' + esc(String(err.message).slice(0, 160)) + '</small>' : '';
const setNote = (kind, html) => { msgNote.className = 'note' + (kind ? ' ' + kind : ''); msgNote.innerHTML = html; };
const gmailUrl = (subject, body) => 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(CONFIG.email) + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body || '');
const fallbackLinks = (subject, body) => '<a href="' + esc(gmailUrl(subject, body)) + '" target="_blank" rel="noopener">Open in Gmail</a>, <a href="' + esc(mailto(subject) + '&body=' + encodeURIComponent(body)) + '">open your email app</a>, or write to <strong>' + esc(CONFIG.email) + '</strong>.';
const openMail = (subject, body) => { const a = document.createElement('a'); a.href = mailto(subject) + '&body=' + encodeURIComponent(body); a.className = 'sr-only'; document.body.appendChild(a); a.click(); a.remove(); };
msgForm.addEventListener('submit', async e => {
  e.preventDefault();
  if (!msgForm.checkValidity()) { msgForm.reportValidity(); return; }
  const n = $('#mName').value.trim(), em = $('#mEmail').value.trim(), biz = $('#mBiz').value.trim(), msg = $('#mMsg').value.trim();
  if ($('#mHoney').value) { msgForm.reset(); return; }   // spam trap: real people leave this empty
  const subject = 'Message from ' + n + ' via ' + CONFIG.brand;
  const body = 'Name: ' + n + '\nEmail: ' + em + (biz ? '\nBusiness: ' + biz : '') + '\n\n' + msg;
  if (location.protocol === 'file:') {   // opened straight from a file: browsers block the form service, so open email directly
    openMail(subject, body);
    setNote('', 'Your email app should open with the message ready. If it did not: ' + fallbackLinks(subject, body));
    return;
  }
  const label = msgBtn.textContent;
  msgBtn.disabled = true; msgBtn.textContent = 'Sending\u2026'; setNote('', 'Sending your message\u2026');
  try {
    const res = await fetch(msgUrl(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(Object.assign({ name: n, email: em, business: biz, message: msg, _replyto: em, _subject: subject, _template: 'table', _captcha: 'false', _honey: '' }, formExtras(subject, em)))
    });
    let out = {}; try { out = await res.json(); } catch (_) { }
    if (!res.ok || out.success === false || out.success === 'false') throw new Error(out.message || 'Request failed (' + res.status + ')');
    setNote('ok', 'Thank you. Your message has been sent, and we will reply to ' + esc(em) + '.');
    msgForm.reset();
  } catch (err) {
    console.warn('Contact form was not delivered:', err && err.message);
    openMail(subject, body);
    setNote('err', 'That did not send directly, so your email app should open with the message ready. If it did not: ' + fallbackLinks(subject, body) + reasonNote(err));
  } finally {
    msgBtn.disabled = false; msgBtn.textContent = label;
  }
});

/* ---------- Email links: if no email app opens, offer Gmail and a copy button ---------- */
const copyText = async t => {
  try { await navigator.clipboard.writeText(t); }
  catch (_) { const a = document.createElement('textarea'); a.value = t; a.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(a); a.select(); try { document.execCommand('copy'); } catch (__) { } a.remove(); }
};
const toast = document.createElement('div');
toast.className = 'toast'; toast.setAttribute('role', 'status'); toast.hidden = true;
document.body.appendChild(toast);
let toastTimer, windowBlurred = false;
window.addEventListener('blur', () => { windowBlurred = true; });
function showMailToast(href) {
  let subject = '', body = '';
  try { const u = new URL(href); subject = u.searchParams.get('subject') || ''; body = u.searchParams.get('body') || ''; } catch (_) { }
  toast.innerHTML = '<p>No email app opened? Write to <strong>' + esc(CONFIG.email) + '</strong></p><div class="toast-actions"><a class="mono" href="' + esc(gmailUrl(subject, body)) + '" target="_blank" rel="noopener">Open Gmail</a><button class="mono" type="button" id="toastCopy">Copy address</button><button class="mono" type="button" id="toastClose" aria-label="Close">Close</button></div>';
  toast.hidden = false;
  $('#toastCopy').addEventListener('click', async () => { await copyText(CONFIG.email); ($('#toastCopy') || N()).textContent = 'Copied'; });
  $('#toastClose').addEventListener('click', () => { toast.hidden = true; });
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.hidden = true; }, 12000);
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="mailto:"]');
  if (!a || a.closest('#msgNote') || a.closest('.toast')) return;
  windowBlurred = false;
  setTimeout(() => { if (!windowBlurred && document.visibilityState === 'visible') showMailToast(a.href); }, 1400);
});
function renderStatic() {
  renderContact();
  renderHero();
  ($('#heroEyebrow') || N()).textContent = HERO.eyebrow;
  ($('#heroTitle') || N()).textContent = HERO.title;
  ($('#heroTitleEm') || N()).textContent = HERO.titleEm;
  ($('#heroChecks') || N()).innerHTML = HERO.checks.map(c => `<li>${esc(c)}</li>`).join('');
  ($('#heroIntro') || N()).textContent = HERO.intro;
  ($('#keyfacts') || N()).innerHTML = HERO.facts.map(f => `<div><strong>${esc(f.big.replace('{count}', STORIES.length).replace('{countries}', siteStats().countries).replace('{disciplines}', siteStats().disciplines))}</strong><span class="mono">${esc(f.label)}</span></div>`).join('');
  ($('#trust') || N()).innerHTML = TRUST.map((t, i) => `<div><span class="mono">0${i + 1}</span><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`).join('');
  ($('#steps') || N()).innerHTML = STEPS.map(t => `<li><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></li>`).join('');
  ($('#serviceGrid') || N()).innerHTML = SERVICES.map((t, i) => `<div class="service"><span class="mono">0${i + 1}</span><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`).join('');
}
function applyConfig() {
  $$('[data-brand]').forEach(e => e.textContent = CONFIG.brand);
  $$('[data-owner]').forEach(e => e.textContent = CONFIG.owner);
  $$('[data-email]').forEach(e => e.textContent = CONFIG.email);
  $$('[data-wa-text]').forEach(e => e.textContent = 'WhatsApp ' + CONFIG.whatsapp);
  $$('[data-ig-text]').forEach(e => e.textContent = 'Instagram ' + CONFIG.instagram);
  $$('[data-mail-link]').forEach(e => e.href = mailto(e.dataset.subject || ''));
  const setLink = (sel, url) => $$(sel).forEach(e => { e.href = url; if (external(url)) { e.target = '_blank'; e.rel = 'noopener'; } });
  setLink('[data-wa-link]', waUrl());
  setLink('[data-insta-link]', igUrl());
  setLink('[data-cal-link]', calUrl());
  ($('#footTag') || N()).textContent = CONFIG.tagline;
  ($('#year') || N()).textContent = new Date().getFullYear();
}

/* ---------- Theme toggle (light / dark, remembers your choice) ---------- */
const ICON_SUN = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const ICON_MOON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
const currentTheme = () => document.documentElement.getAttribute('data-theme') || 'light';
function paintToggle() {
  const t = currentTheme(), next = t === 'dark' ? 'light' : 'dark', b = $('#themeToggle');
  b.innerHTML = t === 'dark' ? ICON_SUN : ICON_MOON;
  b.setAttribute('aria-label', 'Switch to ' + next + ' mode');
  b.title = 'Switch to ' + next + ' mode';
}
$('#themeToggle').addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) { }
  paintToggle();
});
paintToggle();

/* ---------- Floating buttons ---------- */
/* The theme toggle is always visible. "Book a call" steps aside where the same option is already on screen. */
const fabCall = $('.fab-call'), fabHide = new Set();
const paintFab = () => fabCall.classList.toggle('away', fabHide.size > 0);
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => { es.forEach(x => x.isIntersecting ? fabHide.add(x.target) : fabHide.delete(x.target)); paintFab(); }, { threshold: 0.15 });
  [$('#get-in-touch'), $('footer')].forEach(el => el && io.observe(el));
}

/* ---------- Copy email ---------- */
($('#copyBtn') || N()).addEventListener('click', async () => {
  const out = $('#copied') || N();
  try { await navigator.clipboard.writeText(CONFIG.email); }
  catch (e) {
    const t = document.createElement('textarea'); t.value = CONFIG.email; t.style.position = 'fixed'; t.style.opacity = '0';
    document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); } catch (_) { }
    t.remove();
  }
  const btn = $('#copyBtn') || N(), label = btn.textContent;
  out.textContent = 'Email address copied.';
  btn.textContent = 'Copied';
  setTimeout(() => { out.textContent = ''; btn.textContent = label; }, 2000);
});

/* ---------- Whole story cards are clickable, on the home page and the reading page ---------- */
document.addEventListener('click', e => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  if (e.target.closest('a, button, input, textarea')) return;
  const box = e.target.closest('.card, .lead');
  const link = box && $('a[href^="/stories/"]', box);
  if (link) { e.preventDefault(); location.href = link.getAttribute('href'); }
});

/* ---------- Pages: every page is a real address (/about/, /stories/name/ ...) ---------- */
let curPage = 'home';
const PAGE_H1 = { stories: 'All founder stories', about: 'About The Founders Notes', mission: 'Our mission: why The Founders Notes exists', 'get-featured': 'Get featured on The Founders Notes for free', services: 'Website design for yoga and wellness studios', contact: 'Contact The Founders Notes' };
function showPage(r) {
  const p = r.page; curPage = p;
  $$('[data-pages]').forEach(el => el.classList.toggle('pg-off', !el.dataset.pages.split(' ').includes(p)));
  document.body.dataset.page = p;
  $$('.nav-links a:not(.btn)').forEach(l => {
    let on = false;
    try { on = p !== 'home' && new URL(l.getAttribute('href'), location.href).pathname === PAGES[p]; } catch (_) { }
    if (on) l.setAttribute('aria-current', 'page'); else l.removeAttribute('aria-current');
  });
  const title = r.tag ? r.tag + ' founders' : r.country ? 'Founders in ' + r.country : p === 'stories' ? 'All stories' : 'Latest stories';
  ($('#storiesTitle') || N()).textContent = title;
  const n = STORIES.filter(s => (!r.tag || tagsOf(s).includes(r.tag)) && (!r.country || countryOf(s) === r.country)).length;
  ($('#storiesIntro') || N()).textContent = r.tag ? `${n} ${n === 1 ? 'story' : 'stories'} about ${r.tag.toLowerCase()} founders and teachers.` : r.country ? `${n} ${n === 1 ? 'story' : 'stories'} from independent founders in ${r.country}.` : '';
  let h1 = $('#pageH1');
  if (p === 'home') { if (h1) h1.remove(); }
  else {
    if (!h1) { h1 = document.createElement('h1'); h1.id = 'pageH1'; h1.className = 'sr-only'; const hv = $('#homeView'); hv.insertBefore(h1, hv.firstChild); }
    h1.textContent = r.tag ? r.tag + ' founders: stories and journeys' : r.country ? 'Independent founders in ' + r.country : PAGE_H1[p];
  }
}
function route() {
  const r = parseRoute(location.pathname);
  if (r.story) { showStory(r.story, { initial: true }); setStoryMeta(r.story); return; }
  fTag = r.tag || ''; fCountry = r.country || '';
  $('#homeView').hidden = false;
  $('#storyView').hidden = true;
  showPage(r);
  renderFilters(); renderStories();
  setPageMeta(r);
  const pf = new URLSearchParams(location.search).get('prefill'), m = $('#mMsg');
  if (pf && m) m.value = pf;
}

legacyRedirect();
{ const r0 = parseRoute(location.pathname); curPage = r0.story ? 'home' : r0.page; fTag = r0.tag || ''; fCountry = r0.country || ''; }
applyConfig();
initSearch();
renderStories();
renderStatic();
initFeatures();
applyConfig(); // second pass for elements created by renderStatic
route();
