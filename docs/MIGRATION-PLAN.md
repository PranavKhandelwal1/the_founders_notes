# Plan: give every story its own page (Eleventy)

**Why:** stories live at `#story-1`, drawn by JavaScript, so Google sees one page and WhatsApp/Instagram previews are generic. Own URLs fix search, sharing and link previews.

**Result:** same design, same free hosting. Each story becomes `/stories/<slug>/` with its own title, description, share image and structured data.

## Steps (about 1 to 2 days)

1. **Pick the domain first.** Needed for canonical links, the sitemap and `og:image`. Replace `YOUR-DOMAIN.com` in `sitemap.xml` and `robots.txt`.
2. **Set up Eleventy** (`npm init -y && npm i -D @11ty/eleventy`). Keep `css/`, `assets/`, `images/` as pass-through copies.
3. **Convert stories to markdown.** One file per story in `stories/`, with the current fields as front matter (`title`, `business`, `owner`, `location`, `founded`, `tags`, `image`, `instagram`, `pullQuote`) and the paragraphs as the body. A small one-off script can convert `data/stories.js`.
4. **Templates:** `story.njk` (the current story view), `index.njk` (hero, grid, about, services, contact; reuse today's HTML), and a tag page per discipline.
5. **Per-story head tags:** `<title>`, meta description, `og:title`, `og:description`, `og:image` (the founder photo), canonical URL, and Article JSON-LD.
6. **Auto sitemap** listing every story page.
7. **Keep old links working:** a few lines of JS that redirect `#story-N` to the new URL.
8. **Deploy** to Netlify, Cloudflare Pages or GitHub Pages (build command `npx @11ty/eleventy`, output `_site`).
9. **Check:** every story opens at its own URL, previews look right when pasted into WhatsApp, and Search Console accepts the sitemap.

## Adding a story afterwards

Copy `stories/_template.md`, fill it in, drop the photo in `images/`, push. No commas or quotes to break.
