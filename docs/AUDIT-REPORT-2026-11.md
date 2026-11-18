# The Founders Notes: audit and improvement report (18 November 2026)

Nothing here has been deployed. The design (colours, fonts, layout, photos) and all story text are unchanged.

## 1. What the site is
Static site, no framework. `node build.js` (jsdom) pre-renders 36 pages into `dist/` with a sitemap. GitHub Actions publishes `dist/` to GitHub Pages on every push to `main`; a failed build stops the publish. Only dependency: jsdom (build time).

## 2. Bugs found and what was done
| # | Problem | Status |
|---|---|---|
| 1 | Privacy page "run by ." and no publisher details | Fixed: Pranav Khandelwal, Bhilwara, Rajasthan, India, hello@thefoundersnotes.com, written into the page (also visible without JavaScript) |
| 2 | Google Tag Manager loaded for every visitor without consent | Fixed: loads only after Accept (`js/consent.js`); "Cookie settings" link in footer; privacy text updated |
| 3 | Wrong "Founded" on Onda ("Onda Yoga Studio") and Kamla ("Kamla Yoga Studio"); blank on Queeny and Elena | Onda set to 2017 (your value). Rule added: the row shows only a real year, otherwise it is hidden (Kamla, Queeny, Elena now hidden) |
| 4 | Services text "without message tag" | Fixed: "without long message chains" (tell me if you meant another sentence) |
| 5 | Second inbox not receiving | Fixed in code: second key set in `data/config.js` (`formAccessKeyExtra`). Needs one real test |
| 6 | No conversion events | Fixed: 9 events queued (section 5); build the tags in Tag Manager |
| 7 | 9 titles over 60 characters | Fixed: longest is now 58 |
| 8 | 4 descriptions over 160 characters, 404 description 29 characters | Fixed |
| 9 | Sitemap had no dates | Fixed: stories use their published date; home and stories list use the newest; others carry none on purpose |
| 10 | First pictures lazy-loaded | Fixed: the first three images load immediately |
| 11 | Duplicate unused `francesca-kelly.jpeg` | Removed (byte-identical to the Carossino file) |
| 12 | Floating buttons outside page landmarks | Fixed |
| 13 | Image weight 2.4 MB | NOT changed (see section 7) |
| 14 | Newsletter tool, services portfolio and prices | Skipped at your request |

## 3. SEO
38 HTML files: title, description, canonical, one h1 and JSON-LD on every page; 404 is noindex. Titles at most 58 characters; descriptions 70 to 160. Story summaries of 220 to 295 characters are reported by the build and trimmed by Google; I did not edit story text.

## 4. Accessibility
axe-core (WCAG 2.1 AA and best practice), 9 key pages, light and dark mode: 0 violations. Still worth a manual keyboard pass of the apply form and a screen-reader check of the cookie notice.

## 5. Conversion events
`application_submit` (has_photo), `contact_submit`, `nomination_submit`, `newsletter_signup`, `enquiry_click` (label = package), `book_call_click`, `whatsapp_click`, `email_click`, `apply_click`. They contain no names, emails or message text, and reach Google only if the visitor accepted cookies.

## 6. Form and email testing (fake Web3Forms server, no real emails)
Contact, nomination, newsletter and apply: two copies sent with both keys, one with one key, and still counted as sent when the second copy failed. Apply showed its confirmation. Forms ignore a submit made in the first 3 seconds (spam protection). Real delivery, the photo attachment and the removal of the "honey" line need one real test after you publish.

## 7. Performance
Page weight: home 0.9 MB, stories 1.4 MB, story page 0.95 MB, services 0.25 MB. Layout shift 0.000 to 0.004. Images total 2.4 MB (six files over 150 KB). Compressing them saves about 30% but changes your story photos, so I left them as they are. Say the word and I will do it.

## 8. Files changed
`data/content.js` (titles, descriptions, services wording), `data/stories.js` (Onda founded year only), `data/config.js` (second key), `js/app.js`, `js/features.js`, `js/consent.js` (new), `index.html`, `privacy.html`, `404.html`, `build.js`, `images/francesca-kelly.jpeg` (removed), `docs/AUDIT-REPORT-2026-11.md`.

## 9. Deployment
1. Replace your project folder with the zip contents.
2. `npm install`, then `node build.js`, and look at `dist/` locally (home, a story, services, privacy).
3. Commit and push to `main`; GitHub Actions publishes.
4. Send one real application (with a photo) and one contact message; check both inboxes.
5. In Search Console, resubmit `sitemap.xml`.

## 10. Remaining
- A real delivery test of both inboxes.
- Kamla's founding year (the row is hidden until `founded` is a year); years for Queeny and Elena.
- Tag Manager tags for the events.
- Newsletter tool, real portfolio and prices (skipped).
- Optional image compression.
