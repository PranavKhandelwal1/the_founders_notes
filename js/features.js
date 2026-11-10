/* Founders’ Notes: extra features.
   Filters, story tools (listen, share, quote cards, badge, translations, video/audio), FAQ, nominations,
   packages, audit offer, testimonials, newsletter, analytics, link-preview tags.
   Loaded BEFORE app.js; app.js calls initFeatures() and enhanceStory(). Content lives in /data. */

const PAGE_LOADED = Date.now();
const slugOf = t => slugify(t);
const countryOf = s => String(s.location || '').split(',').pop().trim();
const discOf = s => (Array.isArray(s.tags) && s.tags[0]) || '';
/* Full web addresses (for sharing, link previews and search engines) */
const siteBase = () => isSet(CONFIG.siteUrl) ? CONFIG.siteUrl.replace(/\/+$/, '') : location.origin;
const absUrl = p => /^https?:/.test(p) ? p : siteBase() + (String(p).startsWith('/') ? p : '/' + p);
const storyUrl = s => siteBase() + storyPath(s);

/* ---------- Site-wide numbers for the hero ---------- */
function siteStats() {
  return {
    countries: new Set(STORIES.map(countryOf).filter(Boolean)).size,
    disciplines: new Set(STORIES.map(discOf).filter(Boolean)).size
  };
}

/* ---------- Browse by topic and country: each choice is a real page ---------- */
function renderFilters() {
  const box = $('#filters');
  if (!box) return;
  const topics = topicNames().slice(0, 8), pages = placeNames();
  // every country is listed; a country with 2+ stories opens its own page, a country with one story opens that story
  const places = [...tally(countryOf)].sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0])).map(([k]) => k);
  const target = c => pages.includes(c) ? countryPath(c) : storyPath(STORIES.find(s => countryOf(s) === c));
  if (!topics.length && !places.length) { box.hidden = true; return; }
  box.hidden = false;
  box.innerHTML = `<nav class="chips" aria-label="Browse stories by topic"><a class="chip${!fTag && !fCountry ? ' on' : ''}" href="/stories/">All</a>${topics.map(t =>
    `<a class="chip${fTag === t ? ' on' : ''}" href="${tagPath(t)}"${fTag === t ? ' aria-current="page"' : ''}>${esc(t)}</a>`).join('')}</nav>` +
    (places.length ? `<label class="sr-only" for="fCountry">Country</label><select id="fCountry" class="select"><option value="/stories/">All countries</option>${places.map(c =>
      `<option value="${target(c)}"${c === fCountry ? ' selected' : ''}>${esc(c)}</option>`).join('')}</select>` : '');
}

/* ---------- Search tags, link previews and structured data (one set per page) ---------- */
function setTag(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!value) { if (el) el.remove(); return; }
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute('content', value);
}
function setCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!url) { if (el) el.remove(); return; }
  if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el); }
  el.href = url;
}
function ldSet(id, data) {
  let el = document.getElementById(id);
  if (!data) { if (el) el.remove(); return; }
  if (!el) { el = document.createElement('script'); el.type = 'application/ld+json'; el.id = id; document.head.appendChild(el); }
  el.textContent = JSON.stringify(data);
}
const clip = (t, n) => { t = String(t).replace(/\s+/g, ' ').trim(); return t.length <= n ? t : t.slice(0, n - 1).replace(/\s+\S*$/, '') + '…'; };
function applyMeta(m) {
  document.title = m.title;
  setTag('name', 'description', m.description);
  setTag('property', 'og:type', m.type || 'website');
  setTag('property', 'og:site_name', CONFIG.brand);
  setTag('property', 'og:title', m.title);
  setTag('property', 'og:description', m.description);
  setTag('property', 'og:url', siteBase() + m.path);
  setTag('property', 'og:image', absUrl(m.image || 'assets/og-image.jpg'));
  setTag('name', 'twitter:card', 'summary_large_image');
  setCanonical(siteBase() + m.path);
}
const crumbLd = items => ({ '@type': 'BreadcrumbList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it[0], item: siteBase() + it[1] })) });
const orgLd = () => ({
  '@type': 'Organization', '@id': siteBase() + '/#organization', name: CONFIG.brand, url: siteBase() + '/',
  logo: absUrl('assets/brand/monogram.png'), description: CONFIG.tagline,
  founder: { '@type': 'Person', name: CONFIG.owner },
  ...(isSet(CONFIG.instagram) ? { sameAs: [instaUrl()] } : {})
});
const itemListLd = list => ({ '@type': 'ItemList', itemListElement: list.map((s, i) => ({ '@type': 'ListItem', position: i + 1, url: storyUrl(s), name: s.headline })) });
const PAGE_NAMES = { stories: 'Stories', about: 'About', 'get-featured': 'Get featured', services: 'Services', contact: 'Contact' };

/* Home, list and information pages */
function setPageMeta(r) {
  stopListen();
  const brand = CONFIG.brand, seo = (typeof SEO !== 'undefined' && SEO[r.page]) || {};
  const subset = STORIES.filter(s => (!r.tag || tagsOf(s).includes(r.tag)) && (!r.country || countryOf(s) === r.country));
  let title = seo.title || BASE_TITLE, description = seo.description || '', crumbs = [['Home', '/']];
  if (r.tag) {
    const places = [...new Set(subset.map(countryOf).filter(Boolean))];
    title = `${r.tag} founders: ${subset.length} stories | ${brand}`;
    description = clip(`Read ${subset.length} stories about ${r.tag.toLowerCase()} founders and teachers${places.length ? ' from ' + places.slice(0, 3).join(', ') : ''}: how they started, what was hard and what a normal week looks like.`, 160);
    crumbs.push(['Stories', '/stories/'], [r.tag + ' founders', r.path]);
  } else if (r.country) {
    const topics = [...new Set(subset.flatMap(tagsOf))].slice(0, 3);
    title = `Independent founders in ${r.country}: ${subset.length} stories | ${brand}`;
    description = clip(`Read ${subset.length} stories from independent founders in ${r.country}${topics.length ? ', including ' + topics.join(', ').toLowerCase() : ''}: how they started and what a normal week looks like.`, 160);
    crumbs.push(['Stories', '/stories/'], ['Founders in ' + r.country, r.path]);
  } else if (r.page !== 'home') crumbs.push([PAGE_NAMES[r.page], r.path]);
  applyMeta({ title, description, path: r.path });
  const graph = [];
  if (r.page === 'home') graph.push(orgLd(), { '@type': 'WebSite', '@id': siteBase() + '/#website', name: brand, url: siteBase() + '/', publisher: { '@id': siteBase() + '/#organization' } });
  else graph.push(crumbLd(crumbs));
  if (r.page === 'stories') graph.push({ '@type': 'CollectionPage', name: title, description, url: siteBase() + r.path, mainEntity: itemListLd(subset) });
  if (r.page === 'about') graph.push({ '@type': 'AboutPage', name: title, description, url: siteBase() + r.path });
  if (r.page === 'contact') graph.push({ '@type': 'ContactPage', name: title, description, url: siteBase() + r.path });
  if (r.page === 'services') graph.push({ '@type': 'Service', name: 'Website design for yoga and wellness studios', provider: { '@id': siteBase() + '/#organization' }, areaServed: 'Worldwide', description });
  if (r.page === 'get-featured') graph.push({ '@type': 'FAQPage', mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
  ldSet('ld-page', { '@context': 'https://schema.org', '@graph': graph });
}

/* One story */
function setStoryMeta(sh) {
  const s = sh._orig || sh;
  const overlap = s.business.toLowerCase().includes(s.owner.toLowerCase().split(' ')[0]);   // "Queeny Cobelli Yoga" already holds the name
  const options = [overlap ? `${s.business}: founder story` : `${s.owner}, founder of ${s.business}`, `${s.owner}: founder story`].map(t => `${t} | ${CONFIG.brand}`);
  const title = options.find(t => t.length <= 62) || options[options.length - 1];
  const description = clip(sh.summary, 160), path = storyPath(s), img = s.image ? absUrl(asset(s.image)) : '';
  applyMeta({ title, description, path, type: 'article', image: s.image ? asset(s.image) : '' });
  const article = {
    '@type': 'Article', headline: clip(sh.headline, 110), description: sh.summary, url: siteBase() + path,
    mainEntityOfPage: siteBase() + path, inLanguage: sh._lang || 'en',
    author: { '@type': 'Person', name: s.author || CONFIG.owner },
    publisher: { '@id': siteBase() + '/#organization' },
    about: { '@type': 'Person', name: s.owner, ...(s.instagram ? { sameAs: [igHref(s.instagram)] } : {}) }
  };
  if (img) article.image = img;
  if (s.published) { article.datePublished = s.published; article.dateModified = s.published; }
  ldSet('ld-page', { '@context': 'https://schema.org', '@graph': [orgLd(), article, crumbLd([['Home', '/'], ['Stories', '/stories/'], [s.owner, path]])] });
}

/* ---------- Listen to a story (the browser's own text-to-speech) ---------- */
const LISTEN_LABEL = 'Listen to this story', STOP_LABEL = 'Stop listening';
const IC = {
  listen: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.9A8 8 0 1 1 21 12z"/><path d="M9.2 8.6c-.5.9-.2 2.2.9 3.5 1.1 1.4 2.5 2.2 3.6 2.2.7 0 1.2-.4 1.4-.9l-1.6-1-.8.7c-.7-.3-1.5-1-1.9-1.8l.7-.8-.9-1.6c-.5.2-1.1.5-1.4 1.5z"/></svg>',
  link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/></svg>',
  share: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.6l6.8-4M8.6 13.4l6.8 4"/></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>'
};
const iconBtn = (act, icon, label, extra = '') => `<button type="button" class="icon-btn" data-act="${act}" aria-label="${esc(label)}" title="${esc(label)}"${extra}>${IC[icon]}</button>`;
function paintListen(b, on) {
  b.innerHTML = on ? IC.stop : IC.listen;
  b.setAttribute('aria-label', on ? STOP_LABEL : LISTEN_LABEL); b.title = on ? STOP_LABEL : LISTEN_LABEL;
  b.setAttribute('aria-pressed', String(on)); b.classList.toggle('on', on);
}
function stopListen() {
  try { if (window.speechSynthesis) speechSynthesis.cancel(); } catch (_) { }
  $$('[data-act="listen"]').forEach(b => paintListen(b, false));
}
function toggleListen(btn) {
  if (!window.speechSynthesis) return;
  if (btn.getAttribute('aria-pressed') === 'true' || speechSynthesis.speaking || speechSynthesis.pending) { stopListen(); return; }
  const parts = $$('.article h3, .article p', $('#storyView')).map(e => e.textContent.trim()).filter(Boolean);
  const lang = ($('.article', $('#storyView')) || {}).lang || 'en';
  paintListen(btn, true);
  parts.forEach((t, i) => {
    const u = new SpeechSynthesisUtterance(t);
    u.lang = lang;
    if (i === parts.length - 1) u.onend = () => stopListen();
    speechSynthesis.speak(u);
  });
}
window.addEventListener('pagehide', stopListen);

/* ---------- Quote cards (1080 x 1080 and 1080 x 1920) drawn in the browser ---------- */
function wrapLines(ctx, text, maxW) {
  const words = text.split(/\s+/), lines = []; let line = '';
  words.forEach(w => {
    const test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; } else line = test;
  });
  if (line) lines.push(line);
  return lines;
}
const loadImg = src => new Promise(res => { const i = new Image(); i.crossOrigin = 'anonymous'; i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
const toBlobP = c => new Promise((res, rej) => { try { c.toBlob(b => b ? res(b) : rej(new Error('blob')), 'image/png'); } catch (e) { rej(e); } });
/* "center 25%" style focus point -> [0..1, 0..1] */
function focusOf(pos) {
  const named = { left: 0, top: 0, center: .5, right: 1, bottom: 1 };
  const [a = 'center', b = '25%'] = String(pos || 'center 25%').split(/\s+/);
  const v = t => t in named ? named[t] : parseFloat(t) / 100;
  const px = v(a), py = v(b);
  return [isFinite(px) ? px : .5, isFinite(py) ? py : .25];
}
/* style: 'photo' (founder photo on top, dark text panel below) or 'text' (plain light card). Falls back to text if the photo cannot be used. */
async function makeCard(sh, w, h, safeTop, safeBottom, style) {
  const s = sh._orig || sh;
  try { await document.fonts.load('italic 400 60px Newsreader'); await document.fonts.load('500 24px "IBM Plex Mono"'); } catch (_) { }
  const img = style === 'photo' && s.image ? await loadImg(asset(s.image)) : null;
  const draw = pic => {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const x = c.getContext('2d'), pad = 96, mono = '500 26px "IBM Plex Mono", monospace';
    const T = pic ? { bg: '#0C0F14', ink: '#FFFFFF', muted: '#B7C0CC', accent: '#9FD0C0' } : { bg: '#F5F6F8', ink: '#0C0F14', muted: '#5F6775', accent: '#2F5D4E' };
    const ls = v => { if ('letterSpacing' in x) x.letterSpacing = v; };
    x.fillStyle = T.bg; x.fillRect(0, 0, w, h); x.textBaseline = 'alphabetic';
    const blockH = pic ? 190 : 230;
    const divider = h - safeBottom - blockH + (pic ? 0 : 16);
    let qTop;
    if (pic) {
      const photoH = Math.round(h * (h > w ? .5 : .46));
      const sc = Math.max(w / pic.naturalWidth, photoH / pic.naturalHeight), dw = pic.naturalWidth * sc, dh = pic.naturalHeight * sc;
      const [fx, fy] = focusOf(s.cardPos || s.imagePos);
      x.save(); x.beginPath(); x.rect(0, 0, w, photoH); x.clip();
      x.drawImage(pic, (w - dw) * fx, (photoH - dh) * fy, dw, dh); x.restore();
      const g = x.createLinearGradient(0, photoH - 140, 0, photoH + 6);
      g.addColorStop(0, 'rgba(12,15,20,0)'); g.addColorStop(1, 'rgba(12,15,20,1)');
      x.fillStyle = g; x.fillRect(0, photoH - 140, w, 146);
      x.font = '500 28px "IBM Plex Mono", monospace'; ls('3px');
      const tw = x.measureText(CONFIG.brand.toUpperCase()).width;
      x.fillStyle = 'rgba(12,15,20,.78)'; x.fillRect(pad - 24, safeTop - 12, tw + 48, 76);
      x.fillStyle = '#FFFFFF'; x.fillText(CONFIG.brand.toUpperCase(), pad, safeTop + 38); ls('0px');
      qTop = photoH + 36;
    } else {
      x.fillStyle = T.accent; x.fillRect(pad, safeTop, 72, 6);
      x.fillStyle = T.ink; x.font = '500 28px "IBM Plex Mono", monospace'; ls('3px');
      x.fillText(CONFIG.brand.toUpperCase(), pad, safeTop + 56); ls('0px');
      qTop = safeTop + 150;
    }
    const quote = '\u201C' + (sh.pullQuote || sh.headline) + '\u201D', maxW = w - pad * 2, avail = divider - qTop - (pic ? 36 : 40);
    let size = pic ? 66 : 88, lines;
    for (; size >= 32; size -= 2) {
      x.font = `italic 400 ${size}px Newsreader, Georgia, serif`;
      lines = wrapLines(x, quote, maxW);
      if (lines.length * size * 1.2 <= avail) break;
    }
    x.fillStyle = T.ink;
    lines.forEach((l, i) => x.fillText(l, pad, qTop + size + i * size * 1.2));
    x.fillStyle = pic ? 'rgba(255,255,255,.28)' : T.ink; x.fillRect(pad, divider, w - pad * 2, 2);
    const n = divider + (pic ? 62 : 70);
    x.fillStyle = T.ink; x.font = '400 46px Newsreader, Georgia, serif'; x.fillText(s.owner, pad, n);
    x.fillStyle = T.muted; x.font = mono; x.fillText([s.business, s.location].filter(Boolean).join('  \u00B7  ').slice(0, 60), pad, n + (pic ? 48 : 50));
    x.fillStyle = T.accent; x.fillText('Read the story' + (isSet(CONFIG.instagram) ? '  \u00B7  ' + CONFIG.instagram : ''), pad, n + (pic ? 94 : 100));
    return c;
  };
  if (img) { try { return await toBlobP(draw(img)); } catch (_) { /* photo blocked (for example when opened from a file): use the text card */ } }
  return toBlobP(draw(null));
}
let cardStyle = 'photo';
function download(blob, name) {
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 3000);
}

/* ---------- Story page extras ---------- */
let curStory = null;
const yearsIn = s => {
  const f = parseInt(s.founded, 10); if (!f) return '';
  const y = new Date().getFullYear() - f;
  return y >= 1 ? y + (y === 1 ? ' year' : ' years') : 'Started ' + f;
};
const videoHtml = v => {
  const yt = String(v).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/);
  if (yt) return `<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/${esc(yt[1])}" title="Video" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>`;
  return `<video class="embed-video" controls preload="none" src="${esc(asset(v))}"></video>`;
};
function badgeCode(s) {
  const badge = absUrl('assets/badge/featured-badge.svg');
  return `<a href="${storyUrl(s)}" target="_blank" rel="noopener"><img src="${badge}" alt="Featured in ${CONFIG.brand}" width="180" height="60"></a>`;
}
function enhanceStory(sh) {
  const s = sh._orig || sh, root = $('#storyView');
  curStory = sh; stopListen();
  const grid = $('.story-grid', root), article = $('.article', root), head = $('.story-head', root), side = $('.side', root);
  if (!grid || !article) return;
  if (sh._lang) article.lang = sh._lang;

  /* at a glance */
  const offers = String(s.offers || '').split(',').map(t => t.trim()).filter(Boolean);
  const glance = [['Discipline', discOf(s)], ['Based in', s.location], ['In business', yearsIn(s)], ['Offers', offers.length ? offers.length + (offers.length === 1 ? ' service' : ' services') : '']].filter(g => g[1]);
  if (glance.length) grid.insertAdjacentHTML('beforebegin', `<dl class="glance" aria-label="At a glance">${glance.map(g => `<div><dt class="mono">${esc(g[0])}</dt><dd>${esc(g[1])}</dd></div>`).join('')}</dl>`);

  /* tools: language, listen, share */
  const langs = s.translations ? Object.entries(s.translations) : [];
  const langBar = langs.length ? `<div class="langs" role="group" aria-label="Language">
    <button type="button" class="chip${sh._lang ? '' : ' on'}" data-act="lang" data-lang="">English</button>
    ${langs.map(([code, t]) => `<button type="button" class="chip${sh._lang === code ? ' on' : ''}" data-act="lang" data-lang="${esc(code)}" lang="${esc(code)}">${esc(t.label || code)}</button>`).join('')}</div>` : '';
  const shareText = encodeURIComponent((sh.headline || s.business) + ' ' + storyUrl(s));
  head.insertAdjacentHTML('beforeend', `${langBar}<div class="tools" aria-label="Story tools">
    ${window.speechSynthesis ? iconBtn('listen', 'listen', LISTEN_LABEL, ' aria-pressed="false"') : ''}
    ${window.speechSynthesis ? '<span class="tools-sep" aria-hidden="true"></span>' : ''}
    <a class="icon-btn" href="https://wa.me/?text=${shareText}" target="_blank" rel="noopener" aria-label="Share on WhatsApp" title="Share on WhatsApp">${IC.whatsapp}</a>
    ${iconBtn('copylink', 'link', 'Copy link')}
    ${navigator.share ? iconBtn('share', 'share', 'Share') : ''}
    <span class="sr-only" id="toolNote" role="status" aria-live="polite"></span></div>`);

  /* founder's own audio / video */
  const mediaBits = (s.video ? videoHtml(s.video) : '') + (s.audio ? `<audio class="embed-audio" controls preload="none" src="${esc(asset(s.audio))}"></audio>` : '');
  if (mediaBits) article.insertAdjacentHTML('afterbegin', `<div class="founder-media">${mediaBits}</div>`);

  /* visit / follow / book */
  const btns = [];
  if (s.instagram) btns.push(`<a class="btn btn-cta" href="${esc(igHref(s.instagram))}" target="_blank" rel="noopener">Follow on Instagram</a>`);
  if (s.website) btns.push(`<a class="btn btn-line" href="${esc(s.website)}" target="_blank" rel="noopener">Visit website</a>`);
  if (s.booking) btns.push(`<a class="btn btn-line" href="${esc(s.booking)}" target="_blank" rel="noopener">Book with ${esc(s.owner.split(' ')[0])}</a>`);
  btns.push(`<a class="btn btn-line" href="/stories/">Read more stories</a>`);
  article.insertAdjacentHTML('beforeend', `<aside class="visit" aria-label="Visit ${esc(s.business)}"><span class="mono kicker-s">Support independent founders</span><h2>Visit ${esc(s.business)}</h2><p>${esc(s.location || '')}${s.offers ? ' &middot; ' + esc(offers.slice(0, 3).join(', ')) : ''}</p><div class="visit-btns">${btns.join('')}</div></aside>`);

  /* founder kit */
  if (side) {
    side.insertAdjacentHTML('beforeend', `<div class="box kit"><h2>Your founder kit</h2>
      <p>Featured here? Share your story with these.</p>
      ${s.image ? `<div class="card-style" role="group" aria-label="Quote card style"><button type="button" class="chip${cardStyle === 'photo' ? ' on' : ''}" data-act="cardstyle" data-style="photo" aria-pressed="${cardStyle === 'photo'}">With photo</button><button type="button" class="chip${cardStyle === 'text' ? ' on' : ''}" data-act="cardstyle" data-style="text" aria-pressed="${cardStyle === 'text'}">Text only</button></div>` : ''}
      <div class="kit-btns">
        <button type="button" class="btn btn-line btn-sm" data-act="card-square">Quote card (square)</button>
        <button type="button" class="btn btn-line btn-sm" data-act="card-story">Quote card (Instagram story)</button>
        <button type="button" class="btn btn-line btn-sm" data-act="badge">Copy badge code</button>
        <button type="button" class="btn btn-line btn-sm" data-act="caption">Copy caption</button>
      </div>
      <p class="kit-badge"><img src="/assets/badge/featured-badge.svg" alt="Featured in ${esc(CONFIG.brand)} badge" width="150" height="50"></p></div>`);
    const cta = $('.cta-box', side);
    if (cta) cta.insertAdjacentHTML('beforeend', `<p class="audit-line"><a href="/contact/" data-prefill="I was featured in ${esc(CONFIG.brand)} and would like the free mini website audit. My website or Instagram link: ">Featured here? Ask for your free mini website audit.</a></p>`);
  }
}

/* ---------- Click handling for the buttons above ---------- */
const flash = (btn, text) => {
  clearTimeout(btn._t);
  if (btn.classList.contains('icon-btn')) {   /* icon buttons show a tick, and say what happened for screen readers */
    if (!btn.dataset.html) { btn.dataset.html = btn.innerHTML; btn.dataset.label = btn.getAttribute('aria-label'); }
    btn.innerHTML = IC.check; btn.classList.add('done'); btn.title = text;
    const n = $('#toolNote'); if (n) n.textContent = text;
    btn._t = setTimeout(() => { btn.innerHTML = btn.dataset.html; btn.classList.remove('done'); btn.title = btn.dataset.label; delete btn.dataset.html; if (n) n.textContent = ''; }, 1800);
    return;
  }
  const old = btn.dataset.old || btn.textContent; btn.dataset.old = old; btn.textContent = text;
  btn._t = setTimeout(() => { btn.textContent = old; }, 1800);
};
document.addEventListener('click', async e => {
  const pre = e.target.closest('[data-prefill]');
  if (pre) {
    e.preventDefault();
    const m = $('#mMsg');
    if (m) { m.value = pre.dataset.prefill; m.focus(); const g = $('#get-in-touch'); if (g) g.scrollIntoView({ behavior: 'smooth' }); }
    else location.href = '/contact/?prefill=' + encodeURIComponent(pre.dataset.prefill);
    return;
  }
  const b = e.target.closest('[data-act]');
  if (!b || !curStory) return;
  const sh = curStory, s = sh._orig || sh, act = b.dataset.act;
  if (act === 'listen') toggleListen(b);
  else if (act === 'copylink') { await copyText(storyUrl(s)); flash(b, 'Link copied'); }
  else if (act === 'share') { try { await navigator.share({ title: sh.headline, url: storyUrl(s) }); } catch (_) { } }
  else if (act === 'badge') { await copyText(badgeCode(s)); flash(b, 'Code copied'); }
  else if (act === 'caption') { await copyText(`I'm featured in ${CONFIG.brand}! Read my story: ${storyUrl(s)}`); flash(b, 'Caption copied'); }
  else if (act === 'card-square' || act === 'card-story') {
    const story = act === 'card-story';
    flash(b, 'Making…');
    const blob = await makeCard(sh, 1080, story ? 1920 : 1080, story ? 250 : 96, story ? 340 : 96, s.image && cardStyle === 'photo' ? 'photo' : 'text');
    if (blob) download(blob, slugOf(s.business) + (story ? '-story-card.png' : '-quote-card.png'));
    flash(b, 'Downloaded');
  }
  else if (act === 'cardstyle') {
    cardStyle = b.dataset.style;
    $$('[data-act="cardstyle"]').forEach(x => { const on = x.dataset.style === cardStyle; x.classList.toggle('on', on); x.setAttribute('aria-pressed', String(on)); });
  }
  else if (act === 'lang') {
    const code = b.dataset.lang, t = code && s.translations[code];
    showStory(t ? Object.assign({}, s, t, { _orig: s, _lang: code }) : s);
  }
});

/* ---------- Form helper (nominations, newsletter) ---------- */
function wireForm(form, build) {
  const note = $('.note', form), btn = $('button[type="submit"]', form);
  const say = (kind, html) => { note.className = 'note' + (kind ? ' ' + kind : ''); note.innerHTML = html; };
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if ($('[name="_hp"]', form).value || Date.now() - PAGE_LOADED < 3000) { form.reset(); return; }
    const { subject, fields, body, replyTo, endpoint } = build();
    if (location.protocol === 'file:') {
      openMail(subject, body);
      say('', 'Your email app should open with the message ready. If it did not: ' + fallbackLinks(subject, body));
      return;
    }
    const label = btn.textContent; btn.disabled = true; btn.textContent = 'Sending…'; say('', 'Sending…');
    try {
      const res = await fetch(endpoint || msgUrl(), {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(Object.assign({}, fields, { _replyto: replyTo, _subject: subject, _template: 'table', _captcha: 'false', _honey: '' }, endpoint ? {} : formExtras(subject, replyTo)))
      });
      let out = {}; try { out = await res.json(); } catch (_) { }
      if (!res.ok || out.success === false || out.success === 'false') throw new Error(out.message || 'Request failed (' + res.status + ')');
      say('ok', form.dataset.thanks || 'Thank you, that has been sent.');
      form.reset();
    } catch (err) {
      console.warn('Form was not delivered:', err && err.message);
      openMail(subject, body);
      say('err', 'That did not send directly, so your email app should open with the message ready. If it did not: ' + fallbackLinks(subject, body) + reasonNote(err));
    } finally { btn.disabled = false; btn.textContent = label; }
  });
}

/* ---------- Static sections ---------- */
function renderExtras() {
  const fl = $('#faqList');
  if (fl) fl.innerHTML = FAQ.map(f => `<details class="faq-item"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('');
  const pg = $('#principlesGrid');
  if (pg) pg.innerHTML = PRINCIPLES.map((t, i) => `<div><span class="mono">0${i + 1}</span><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`).join('');
  const vs = $('#voices');
  if (vs) {
    vs.hidden = !TESTIMONIALS.length;
    $('#voicesGrid').innerHTML = TESTIMONIALS.map(t => `<figure class="voice"><blockquote><p>“${esc(t.quote)}”</p></blockquote><figcaption class="mono">${esc(t.name)}${t.business ? ', ' + esc(t.business) : ''}</figcaption></figure>`).join('');
  }
  const pk = $('#packages');
  if (pk) pk.innerHTML = PACKAGES.map(p => `<article class="pack"><h3>${esc(p.title)}</h3><p class="price mono">${esc(p.price || 'Ask for a quote')}</p><p>${esc(p.text)}</p><ul>${p.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul><a class="btn btn-line" href="${esc(mailto('Package enquiry: ' + p.title))}">Ask about this</a></article>`).join('');
  const au = $('#audit');
  if (au) au.innerHTML = `<div class="audit"><div><h3>${esc(AUDIT.title)}</h3><p>${esc(AUDIT.text)}</p></div><a class="btn btn-cta" href="/contact/" data-prefill="I'd like the free mini website audit. My website or Instagram link: ">Ask for my audit</a></div>`;

  const nom = $('#nominateForm');
  if (nom) wireForm(nom, () => {
    const v = id => $(id, nom).value.trim();
    const fields = { your_name: v('#nName'), your_email: v('#nEmail'), founder: v('#nFounder'), founder_link: v('#nLink'), why: v('#nWhy') };
    return {
      subject: 'Founder nomination: ' + fields.founder, replyTo: fields.your_email, fields,
      body: `Nominated by: ${fields.your_name} (${fields.your_email})\nFounder: ${fields.founder}\nInstagram or website: ${fields.founder_link}\n\nWhy: ${fields.why}`
    };
  });
  const nl = $('#newsletterForm');
  if (nl) wireForm(nl, () => {
    const em = $('#nlEmail', nl).value.trim();
    return { subject: 'Newsletter sign-up', replyTo: em, fields: { email: em, consent: 'Agreed to receive the newsletter' }, body: 'Please add me to the newsletter: ' + em, endpoint: (CONFIG.newsletterEndpoint || '').trim() };
  });
}

/* ---------- Analytics (off until you set CONFIG.analytics.domain) ---------- */
function initAnalytics() {
  const a = CONFIG.analytics;
  if (!a || !a.domain) return;
  const s = document.createElement('script');
  s.defer = true; s.dataset.domain = a.domain; s.src = a.src || 'https://plausible.io/js/script.hash.js';
  document.head.appendChild(s);
}

function initFeatures() {
  renderFilters();
  renderExtras();
  initAnalytics();
  const sel = $('#filters');
  if (sel) sel.addEventListener('change', e => { if (e.target.id === 'fCountry') location.href = e.target.value; });
}