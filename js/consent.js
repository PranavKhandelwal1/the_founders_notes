/* The Founders Notes: cookie choice.
   Google Tag Manager is NOT loaded until the visitor presses "Accept".
   The choice is remembered in this browser only (localStorage "fn-consent").
   To change the container, edit GTM_ID below. */
(function () {
  if (/jsdom/i.test(navigator.userAgent)) return;   // the build step pre-renders pages with jsdom: never bake the banner into the HTML
  var GTM_ID = 'GTM-WFWWCKLM', KEY = 'fn-consent';
  var get = function () { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  var set = function (v) { try { localStorage.setItem(KEY, v); } catch (e) { } };
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }

  function loadGTM() {
    if (window.__gtmLoaded) return; window.__gtmLoaded = true;
    gtag('consent', 'default', { ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', analytics_storage: 'granted' });
    dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    var s = document.createElement('script'); s.async = true;
    s.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    document.head.appendChild(s);
  }

  var css = '.fn-consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:520px;padding:18px 20px;border-radius:20px;background:var(--card,#fff);color:var(--ink,#252A33);border:1px solid var(--line,#E2E5EA);box-shadow:0 18px 40px -18px rgba(12,15,20,.45);font:400 .95rem/1.5 var(--f-body,Georgia,serif)}' +
    '.fn-consent p{margin:0 0 .9rem}.fn-consent a{color:inherit;text-decoration:underline}' +
    '.fn-consent div{display:flex;gap:.6rem;flex-wrap:wrap}' +
    '.fn-consent button{min-height:44px;padding:0 1.3rem;border-radius:999px;border:1.5px solid var(--head,#0C0F14);background:transparent;color:var(--head,#0C0F14);font:600 .75rem/1 var(--f-mono,monospace);letter-spacing:.1em;text-transform:uppercase;cursor:pointer}' +
    '.fn-consent button.yes{background:var(--btn,#1B2427);border-color:var(--btn,#1B2427);color:var(--btn-ink,#fff)}' +
    '@media(min-width:640px){.fn-consent{left:24px;right:auto;bottom:24px}}';

  function banner() {
    if (document.getElementById('fnConsent')) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var b = document.createElement('div'); b.id = 'fnConsent'; b.className = 'fn-consent'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-label', 'Cookie choice');
    b.innerHTML = '<p>May I use Google Tag Manager to understand how this site is used? It is off unless you accept. See the <a href="/privacy.html">privacy page</a>.</p><div><button type="button" class="yes">Accept</button><button type="button" class="no">Decline</button></div>';
    b.querySelector('.yes').onclick = function () { set('granted'); loadGTM(); b.remove(); };
    b.querySelector('.no').onclick = function () { set('denied'); b.remove(); };
    document.body.appendChild(b); b.querySelector('.yes').focus({ preventScroll: true });
  }

  function init() {
    if (get() === 'granted') loadGTM(); else if (get() !== 'denied') banner();
    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('[data-cookie-settings]'); if (!a) return;
      e.preventDefault(); try { localStorage.removeItem(KEY); } catch (_) { } banner();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
