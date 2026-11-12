/* The Founders Notes: small script for the static pages (privacy.html, 404.html).
   Fills in the name, email link and year from data/config.js. */
(function () {
  var all = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
  all('[data-brand]').forEach(function (e) { e.textContent = CONFIG.brand; });
  all('[data-owner]').forEach(function (e) { e.textContent = CONFIG.owner; });
  all('[data-email-link]').forEach(function (a) { a.href = 'mailto:' + CONFIG.email; });
  all('#year').forEach(function (e) { e.textContent = new Date().getFullYear(); });
})();
