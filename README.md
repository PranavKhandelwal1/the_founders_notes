# Founders’ Notes

A small, fast website that publishes free success stories about independent founders. No build step, no server, no dependencies: it is plain HTML, CSS and JavaScript.

**Preview:** double-click `index.html`.

## Folder map

```
founders-notes/
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
└── docs/               HOW-TO.md (full guide), FOUNDER-TOOLKIT.md (templates, checklist), outreach-tracker.csv, MIGRATION-PLAN.md
```

## Most common jobs

- **Add a story:** `data/stories.js`, then put the photo in `images/`. Steps are in `docs/HOW-TO.md`, section 2.
- **Change your details:** `data/config.js`.
- **Go live:** upload the whole folder to Netlify, Cloudflare Pages or GitHub Pages (`docs/HOW-TO.md`, section 4).

Load order in `index.html`: `data/config.js`, `data/content.js`, `data/stories.js`, `js/features.js`, then `js/app.js`. Keep that order.
# the_founders_notes
# the_founders_notes
