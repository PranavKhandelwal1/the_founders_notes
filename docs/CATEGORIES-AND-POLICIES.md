# Categories and policy pages

**Give a story a category.** In `data/stories.js` each story has `category: "..."`. Use exactly one of: Entrepreneurship, Yoga & Wellness, Small Businesses, Creatives, Personal Journeys. A typo stops the build with a clear message. A missing category prints a note.

**Add a category.** Add one entry to `data/categories.js`. It gets a page at `/category/<slug>/`, a place in the filter bar, the home page tiles, the footer and the sitemap automatically.

**Thin pages stay out of search.** A category or tag page with fewer than 2 stories shows `noindex` and is left out of the sitemap. It indexes itself automatically when a second story is added. The page still works for visitors.

**Edit policy text.** `data/policies.js` holds the Editorial policy, Submission guidelines, Terms and Sponsored content pages. Change the `updated` date when you edit. These describe current practice, so edit the text before you change the practice.

**Edit the Get featured page.** The lists and cards are in the `GF` block at the bottom of `data/content.js`.
