# How the site is built (read this once)

You still only edit `data/stories.js` (and put photos in `images/`), then push to GitHub. GitHub then builds the site automatically:

- every story gets its own page: `/stories/<name>/` (name comes from the business or owner; add `slug: "my-name"` to a story to choose it)
- topics and countries with 2 or more stories get their own page
- `sitemap.xml` and `robots.txt` are generated for you
- if something is wrong (missing photo, missing field, repeated id) the build stops and the live site stays as it was. Open the **Actions** tab, click the red run, and read the plain message.

## One-time setup
1. GitHub repo, Settings, Pages: set **Source** to **GitHub Actions**. Keep the custom domain thefoundersnotes.com.
2. Upload all files from this folder (including the hidden `.github` folder; if it won't upload, use Add file, Create new file, and name it `.github/workflows/deploy.yml`, then paste the contents).
3. Open the Actions tab and wait for the green tick (about 1 to 2 minutes).

## Adding a story
Add it to `data/stories.js` with `published: "2026-11-09"`, `imageAlt: "short photo description"`, a summary under 160 characters, and push. Notes in the Actions log are suggestions, not errors.

## Previewing on your computer (optional)
Install Node.js, then in this folder: `npm install` and `npm run preview`, and open http://localhost:8080. Double-clicking index.html no longer works because pages now use real addresses.

## After going live: things only you can do
1. Google Search Console: add thefoundersnotes.com (Domain), verify through your domain provider, then submit `https://thefoundersnotes.com/sitemap.xml`.
2. Ask each featured founder to link to their story page from their website or Instagram bio (the "Featured in" badge on each story has the code).
3. Publish a new story regularly; Google favours sites that keep growing.
4. Check Search Console after a few weeks for pages that are not indexed.

## Search title and description per story (optional, recommended)
Each story can carry two extra lines in `data/stories.js`:
- `seoTitle`: what Google shows as the blue title. Keep it under about 60 characters: name, what they do, place. ("The Founders Notes" is added automatically when it fits.)
- `metaDescription`: the grey text under it, 120 to 155 characters.
The headline and summary on the page itself are not changed. If these lines are missing, the build creates a title and description from the story as before.
