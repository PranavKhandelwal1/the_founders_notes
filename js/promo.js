/* The Founders Notes: "Free website review" card and its "Free Audit" tab on the left edge.
   Shown on the home page and the Stories pages only. The card opens by itself 9 seconds after arrival (or after the
   reader has scrolled halfway down and stayed a few seconds), once per visit, and only after the cookie banner has been
   answered. When it is closed, a small "Free Audit" tab stays on the left edge and reopens it. Closing hides the
   automatic popup for 7 days (30 days after a click on the button) but never removes the tab.
   The choice is kept in this browser only (localStorage "fn-promo"). */
(function () {
  if (/jsdom/i.test(navigator.userAgent)) return;          // never run while the site is being built
  var KEY = 'fn-promo', SEEN = 'fn-promo-seen', DAY = 864e5, WAIT = 9000, MIN_SCROLL_WAIT = 5000;
  var mem = {}, started = Date.now(), card = null;

  function get(store, k) { try { return window[store].getItem(k); } catch (_) { return mem[store + k] || null; } }
  function set(store, k, v) { try { window[store].setItem(k, v); } catch (_) { mem[store + k] = v; } }

  function quiet() { var until = parseInt(get('localStorage', KEY), 10); return until && Date.now() < until; }
  function eligible() {
    var p = ''; try { p = curPage; } catch (_) { }
    return p === 'home' || p === 'stories';
  }
  function snooze(days) { set('localStorage', KEY, String(Date.now() + days * DAY)); }
  function track2(name) { try { if (typeof track === 'function') track(name); } catch (_) { } }

  // the supplied promotional banner, shown whole (images/free-website-audit-banner-*.webp); it carries the headline and the three benefits
  var IMG = '<div class="promo-img"><img src="/images/free-website-audit-banner-800.webp" srcset="/images/free-website-audit-banner-800.webp 800w, /images/free-website-audit-banner-1200.webp 1200w" sizes="(max-width: 560px) 100vw, 380px" width="800" height="533" alt="Free website audit. Is your website doing your business justice? Get a free, friendly review of your website with practical suggestions to make it clearer, more inviting, and more effective. Free website review, practical suggestions, no obligation." decoding="async"></div>';

  var tab = null;

  function removeEl(e) { if (e && e.parentNode) e.parentNode.removeChild(e); }

  function makeTab() {
    var t = document.createElement('button');
    t.type = 'button'; t.className = 'promo-tab'; t.textContent = 'Free Audit';
    t.setAttribute('aria-label', 'Free website audit: open the offer'); t.setAttribute('aria-expanded', 'false');
    t.addEventListener('click', function () { track2('promo_tab_open'); openCard(true); });
    return t;
  }
  function showTab() { if (tab) return; tab = makeTab(); document.body.appendChild(tab); requestAnimationFrame(function () { requestAnimationFrame(function () { if (tab) tab.classList.add('on'); }); }); }
  function hideTab() { var t = tab; tab = null; removeEl(t); }

  function closeCard(days, returnFocus) {
    snooze(days);
    if (!card) return;
    var c = card; card = null;
    c.classList.remove('on');
    setTimeout(function () { removeEl(c); }, 350);
    showTab();
    if (returnFocus && tab) tab.focus();
  }

  function build() {
    var msg = "I'd like a free website review. My website or Instagram link: ";
    var href = '/contact/?type=' + encodeURIComponent('Free website audit') + '&prefill=' + encodeURIComponent(msg);
    var el = document.createElement('aside');
    el.className = 'promo';
    el.tabIndex = -1;
    el.setAttribute('role', 'complementary');
    el.setAttribute('aria-label', 'Free website review');
    el.innerHTML =
      '<button type="button" class="promo-x" aria-label="Close this offer"><svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>' +
      IMG +
      '<div class="promo-body"><a class="btn btn-cta promo-cta" href="' + href + '">Get My Free Website Review <span aria-hidden="true">&rarr;</span></a></div>';
    el.querySelector('.promo-x').addEventListener('click', function () { track2('promo_close'); closeCard(7, true); });
    el.querySelector('.promo-cta').addEventListener('click', function () { track2('promo_click'); snooze(30); });
    return el;
  }

  function openCard(manual) {
    if (card) return;
    hideTab();
    card = build();
    document.body.appendChild(card);
    if (!manual) { set('sessionStorage', SEEN, '1'); track2('promo_view'); }
    requestAnimationFrame(function () { requestAnimationFrame(function () { if (card) { card.classList.add('on'); if (manual) card.focus(); } }); });
  }

  window.addEventListener('load', function () { setTimeout(function () { new Image().src = '/images/free-website-audit-banner-800.webp'; }, 1500); });   // warm the cache so the card never opens with an empty picture
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && card) closeCard(7, true); });

  // one light check per second: add or remove the tab, open the card when it is time, and
  // clear everything away if the reader moves to a page where the offer doesn't belong
  var tick = setInterval(function () {
    if (!eligible()) { hideTab(); if (card) { removeEl(card); card = null; } return; }
    if (document.querySelector('.fn-consent')) return;                       // wait for the cookie choice first
    if (!card) showTab();
    if (card || document.hidden || quiet() || get('sessionStorage', SEEN)) return;
    var t = Date.now() - started, h = document.documentElement, scrolled = (window.scrollY + window.innerHeight) / Math.max(h.scrollHeight, 1);
    if (t >= WAIT || (t >= MIN_SCROLL_WAIT && scrolled >= .5)) openCard(false);
  }, 1000);
})();
