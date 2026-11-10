# Founders’ Notes

A small, fast website that publishes free success stories about independent founders. Plain HTML, CSS and JavaScript. A small build (`build.js`, run automatically by GitHub on every push) creates a real page for every story, plus the sitemap.

**Preview:** `npm install` then `npm run preview`, and open http://localhost:8080 (see `docs/SEO-AND-BUILD.md`).

## Folder map

```
founders-notes/
├── build.js            builds one real page per story, sitemap, robots.txt
├── package.json        build tools
├── .github/workflows/  deploy.yml, publishes the site automatically
├── index.html          the page structure (About text, portrait, logo, footer)
├── README.md           this file
├── data/               everything you edit day to day
│   ├── config.js         your name, email, WhatsApp, Instagram, Calendly
│   ├── content.js        home page text, services, steps, trust points
│   └── stories.js        all stories (newest first, automatically)
├── images/             founders' photos, one per story (see images/README.txt)
├── css/styles.css      all styling and colours
├── css/features.css    styling for the newer features
├── js/app.js           the code that draws the page
├── js/features.js      filters, story tools, quote cards, forms (loaded before app.js)
├── assets/
│   ├── favicon.svg       browser-tab icon
│   ├── logos/            logo.svg (dark), logo-white.svg
│   └── brand/            original wordmark and monogram artwork
└── docs/               HOW-TO.md (full guide), FOUNDER-TOOLKIT.md (templates, checklist), outreach-tracker.csv, SEO-AND-BUILD.md
```

## Most common jobs

- **Add a story:** `data/stories.js`, then put the photo in `images/`. Steps are in `docs/HOW-TO.md`, section 2.
- **Change your details:** `data/config.js`.
- **Go live:** push to GitHub; it publishes automatically (`docs/SEO-AND-BUILD.md`).

Load order in `index.html`: `data/config.js`, `data/content.js`, `data/stories.js`, `js/features.js`, then `js/app.js`. Keep that order.
