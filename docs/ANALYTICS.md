# Analytics events

The site pushes events to `window.dataLayer`. Google Tag Manager (container in `data/config.js`) loads **only after a visitor accepts cookies**, so nothing is measured before consent. No event contains a name, email or message text.

| What to measure | Event name | Parameters |
|---|---|---|
| Get featured clicks (any link to /get-featured/ or /submit-story/) | `get_featured_click` | `placement` (header, footer, story_end, home_band, get_featured_hero...), `destination` |
| Application form completed | `application_submit` | `has_photo` |
| Newsletter subscription | `newsletter_signup` | none |
| Founder website click | `founder_website_click` | `placement`, `story` |
| Instagram click | `instagram_click` | `placement`, `story` |
| Article share | `article_share` | `method` (whatsapp, x, linkedin, facebook, email, copy_link, native), `story`, `placement` |
| Also tracked (existing) | `apply_click`, `book_call_click`, `whatsapp_click`, `email_click`, `contact_submit`, `nomination_submit` | |

## Set up in Google Tag Manager (once)
1. Variables: create *Data Layer Variables* for `placement`, `story`, `method`, `destination`.
2. Triggers: one *Custom Event* trigger per event name above.
3. Tags: one *GA4 Event* tag per trigger, using the same event name and passing the variables as parameters.
4. In GA4, mark `application_submit` and `newsletter_signup` as key events (conversions).
5. Preview with GTM's Tag Assistant: accept cookies, then click a share button and watch `article_share` fire.

To track a new link, add `data-track="your_event_name"` (and optionally `data-loc="where"`) to the `<a>` or `<button>`. No JavaScript needed.
