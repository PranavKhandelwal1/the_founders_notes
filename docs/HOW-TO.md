# How to launch and run Founders’ Notes

The project is a small folder of plain files. You edit text files in any plain-text editor (VS Code, Notepad, TextEdit set to plain text) and preview by double-clicking `index.html`, which opens in your browser. Fonts load from the internet, so be online.

**Where things live**

| I want to change... | Open this file |
| --- | --- |
| My name, email, WhatsApp, Instagram, Calendly | `data/config.js` |
| The home page headline, services, steps, trust points | `data/content.js` |
| Add or edit a story | `data/stories.js` |
| A founder's photo | `images/` (and the `image` line in the story) |
| About text, portrait, logo, floating buttons | `index.html` |
| Colours, fonts, spacing | `css/styles.css` |
| How the site works (you rarely need this) | `js/app.js` |
| Logo files for social profiles | `assets/logos/` |

---

## 1. Fill in your details (10 minutes)

Open `data/config.js`:

```js
const CONFIG = {
  brand: "Founders’ Notes",
  owner: "Pranav Khandelwal",             // shown in "By ..." on every story and in the footer
  email: "foundersnotes09@gmail.com",
  instagram: "@the.founders_notes",       // your handle, with the @
  whatsapp: "+919928490213",              // with country code
  calendly: "[CALENDLY LINK]",            // e.g. "https://calendly.com/yourname/20min"
  formEndpoint: "",                       // optional: your own form service URL (leave empty to use FormSubmit)
  tagline: "Free success stories about independent founders, from anywhere in the world."
};
```

Check these values before you go live (only `calendly` is still a placeholder):

- **`owner`**: your name. It appears in the About section, footer and story bylines.
- **`instagram`**: your handle, with the @. The Instagram links go to `instagram.com/yourhandle`.
- **`whatsapp`**: your number with the country code. The WhatsApp links open a chat with a pre-written "Hi, I found you through Founders’ Notes" message.
- **`calendly`**: your booking link. To get one: create a free Calendly account, make an event called "20-minute chat", and copy its link. Every "Book a call" button on the site opens it in a new tab, and Calendly shows each visitor times in their own time zone, which suits a worldwide audience.

Until the Calendly link and Instagram handle are set, their buttons just scroll to the Get in touch section. Until the WhatsApp number is set, its link opens an email instead.

**Your email on a public site:** a personal Gmail address on a public page can attract spam. If that becomes a problem, create a dedicated address (for example `hello@yourdomain.com`) and put it in `data/config.js`.

**Other text to personalise** (all plain sentences, easy to find):

1. `HERO` in `data/content.js`: the main headline, intro and three tick points on the home page.
2. The About section, in `index.html`: search the file for `Hello, I'm` and edit the three short paragraphs so they sound like you. The left panel shows your logo. If you would rather show your photo, see "Your portrait" below.
3. `SERVICES`, `STEPS` and `TRUST`, also in `data/content.js`: the service cards, the three "Get featured" steps and the three trust points.

**Icons instead of numbers:** the site never prints your email address or phone number on the page. Email, WhatsApp, Instagram and Book a call appear as icons that open the right app. The values still come from `data/config.js`.

**The byline:** every story page says "By Pranav Khandelwal" (from `owner` in `data/config.js`). To credit someone else on one story, add `author: "Name",` to that story.

**Your logo:** your FN logo is built into the site as a vector (it stays sharp at any size and turns white in dark mode). It is defined once, in `index.html`, in the `<symbol id="fn-logo">` block right after `<body id="top">`, and shown in the header and footer and as the browser-tab icon. To change it later, replace the `d="..."` path inside that `<symbol>` block. Two standalone copies, `assets/logos/logo.svg` (dark) and `assets/logos/logo-white.svg` (white), are included for your social profiles and documents. The original artwork is in `assets/brand/`.

**Light and dark:** the site always opens in light mode. Visitors can switch to dark with the moon/sun button in the header, and the site remembers their choice.

**Floating buttons:** three buttons (Email, WhatsApp and Book a call) float at the bottom-right of the screen once a visitor scrolls past the top. They use the same email, WhatsApp number and Calendly link as everything else, and they step out of the way in the Get in touch section and the footer, where those options are already on screen. To remove them, delete the `<div class="fab" id="fab">` block near the end of `index.html`.

**Colours:** the main buttons are now the same deep charcoal as your logo (they turn light in dark mode), with a deep green accent for small details. The colours are variables at the top of `css/styles.css` (`--cta`, `--accent`, `--btn`). Change them there to restyle the whole site.

**Your portrait:** put a photo (for example `portrait.jpg`) in the `images` folder. In `index.html`, find `<figure class="portrait"` and replace everything from `<svg` to `</svg>`, plus the `<figcaption>` line, with:

```html
<img src="images/portrait.jpg" alt="Your name" style="width:100%;height:100%;object-fit:cover">
```

---

## 2. How to add a story

Stories live in `data/stories.js`.

1. Open `data/stories.js` and find the line `const STORIES = [`.
2. Paste the template below on the line directly after it. **The newest story is always shown first and big, in any position you paste it.** The site orders stories by `id` (give each new story the next number: 3, then 4...) or, if you prefer, by an optional `published: "2026-10-27"` date. The top story becomes the big "Featured story" and the oldest story is `#1`, so existing numbers never change.
3. Fill in each field, save, refresh the page, and click your story to check it.

```js
  {
    id: "3",                          // the next number: higher = newer, so it appears first
    tags: ["Pilates", "Instructor"],  // short labels shown on the story: use the type of founder, e.g. Yoga, Pilates, Karate, Studio owner
    sample: false,                    // false = a real story (hides the "Sample" label)
    headline: "A clear, specific headline",
    summary: "One or two sentences that make someone want to read on.",
    business: "Business Name",
    owner: "Owner Name",
    location: "Town, Country",
    founded: "2020",
    offers: "Their main services, separated by commas",
    instagram: "https://www.instagram.com/theirhandle/",   // or "@theirhandle". Shown as an Instagram icon
    readTime: "4 min read",
    initials: "BN",                   // optional: two letters on the generated cover art
    image: "images/owner-name.jpg",          // the founder's photo: it becomes the story banner (see "Adding pictures")
    imageAlt: "Owner Name at the studio",    // describes the photo
    imagePos: "center 25%",                  // optional: which part of the photo stays visible when cropped (e.g. "center top")
    body: [
      "Paragraph one.",
      "Paragraph two.",
      { img: "images/business-name-studio.jpg", alt: "The studio at sunrise", caption: "Optional caption" },
      "Paragraph three.",
      "Paragraph four."
    ],
    pullQuote: "A short sentence the owner really said.",
    pullAfter: 2                      // the quote appears after the 2nd item in body
  },
```

### Adding the founder's photo (the story banner)

Every story uses the founder's photo as its banner: on the home page, in the "Featured story" block, on the story cards, and at the top of the story page. The story number (`#1`, `#2`...) sits in the top-left corner of the photo. There is no coloured artwork any more. If a photo is missing, a plain neutral block with the founder's initials shows instead.

1. Put the photo in the `images` folder. Use JPG or WebP, under 300 KB (resize big phone photos first with a free tool such as Squoosh). Name it in lowercase with hyphens, e.g. `patricia-thielemann.jpg`.
2. In the story, set `image: "images/patricia-thielemann.jpg",` and `imageAlt: "Patricia Thielemann teaching yoga",`. The two sample stories already point at `images/patricia-thielemann.jpg` and `images/veena-pillai.jpg`, so you can simply save the photos with those names.
3. Cards crop photos to 4:3 and the story page to 16:9. A portrait photo is cropped from the top area by default, which keeps faces in view. If a face is cut off, add `imagePos: "center top"` (or `"center 10%"`) to that story.
4. **Extra pictures inside the article:** inside `body`, add a line like this between two paragraphs. It is not in quotes, because it is not a paragraph:

```js
{ img: "images/patricia-class.jpg", alt: "Patricia teaching a morning class", caption: "A morning class in Berlin" },
```

   `alt` describes the picture for screen readers and `caption` is optional. Keep the comma at the end. Pictures count as items in `body` when you use `pullAfter`.
5. Only use photos the founder gave you or that you took yourself, and ask for their approval of the photos along with the text.
6. Upload the whole project folder (section 4), including `images`.

**Rules that avoid breaking the page**

- Every story is wrapped in `{ ... }` and **ends with a comma** after the closing brace.
- Every piece of text sits inside double quotes. If the text itself contains a double quote, write it as `\"` or use a single quote instead. Apostrophes are fine.
- Keep each paragraph on one line. Do not press Enter inside the quotes.
- If the page goes blank after an edit, press F12 in your browser and open the Console tab. It names the line with the mistake, which is almost always a missing comma or quote.

**Automatic things you don't have to do:** the category counts on the filter buttons, the cover artwork (made from the category colour and the initials), the "More stories" list under each story, the hero collage, and the search all update by themselves.

**Removing the sample stories:** delete each complete `{ ... },` block, from its opening `{` to its closing `},`. Keep at least one story. Once your stories are real, also update the footer note: search for `The stories shown on this site are samples` and reword it, for example "Every story is published with the owner's written approval."

The sample stories use invented US and UK places. Since you are working worldwide, your real stories can be from anywhere. Just write the town and country in `location`.

---

## 2b. New features (added November 2026)

**Pages.** Each menu button opens its own short page: Home (intro and the latest 4 stories), Stories (all stories, search and filters), About (about, principles, testimonials), Get featured (steps and FAQ, plus the nominate form), Services (audit and packages) and Contact (message form and newsletter). Each section in `index.html` has a `data-pages` label saying which pages show it, for example `data-pages="home contact"`. Change the label to move a section to another page. The number of stories on the home page is set in `renderStories` in `js/app.js` (`list.slice(0, 4)`).

**Settings in `data/config.js`**
- `siteUrl`: your live address, once you have one (for example `"https://foundersnotes.com"`). It switches on proper share links, canonical link and preview images for every story.
- `newsletterEndpoint`: optional Mailchimp, Buttondown or Formspree URL. Leave empty and each sign-up is emailed to you.
- `analytics`: set `domain` to turn on Plausible analytics (privacy-friendly, no cookies). Then update `privacy.html` to say so.

- `formAccessKey`: optional. If the contact forms do not send, get a free key at web3forms.com (enter foundersnotes09@gmail.com, the key arrives by email) and paste it here. The forms then use Web3Forms instead of FormSubmit.

**Text in `data/content.js`**: `FAQ`, `PRINCIPLES`, `PACKAGES` (add a `price` to show it), `AUDIT` and `TESTIMONIALS` (real quotes only, with permission; the section stays hidden while empty).

**Optional story fields in `data/stories.js`**
- `website`, `booking`: extra buttons in the "Visit" box at the end of the story.
- `video`: a YouTube link or an mp4 path. `audio`: an mp3 path.
- `cardPos`: which part of the photo stays visible on the quote cards, for example `"center 10%"`. Leave it out to reuse `imagePos`.
- `series`: a small label above the headline, such as "Q&A" or "First-year lessons".
- `published`: a date, shown on the story.
- `translations`: a translated version, for example:
  ```js
  translations: { de: { label: "Deutsch", headline: "...", summary: "...", body: ["...", "..."], pullQuote: "..." } },
  ```
- Q&A paragraphs in `body`: `{ q: "Question?", a: "Answer." }`.

**On every story page, automatically:** an "at a glance" strip, a "Listen to this story" button, share buttons, a "Visit / Follow" box, related stories by discipline and country, and a founder kit with quote cards (square and Instagram story), a "Featured in" badge code and a ready caption.

**On the home page:** discipline and country filters. Filtered links you can share: `#tag-Yoga`, `#country-India`. Also an FAQ, a nominate-a-founder form, editorial principles, packages, the free audit offer and a newsletter sign-up.

See `docs/FOUNDER-TOOLKIT.md` for outreach templates, the approval record, and the audit checklist.

---

## 3. How to get real stories (and do it properly)

**Finding founders.** Because you work remotely, you can feature anyone, anywhere. Find yoga and Pilates teachers, studio owners, martial arts and fitness instructors, and other independent founders on Instagram and Google Maps. Message them with something short like:

> Hi [name], I'm [your name]. I run Founders’ Notes, a small publication that writes free stories about independent founders. I'd love to feature [business]. It's a 20-minute video chat, you approve everything before it goes live, and it costs nothing. Here's a link to book a time: [your Calendly link]

**The 20-minute chat (on video, booked through Calendly). Questions to ask:**

1. How did you start, and why this business?
2. What did your first year look like?
3. Who are your regular customers, and what do they say about you?
4. What do you do differently from others near you?
5. What is a moment you're proud of?
6. What is hard about running it?
7. What would you like people to know before they visit or book?
8. What is your Instagram handle, location, and what year did you start?

**Writing it.** Four short paragraphs in plain, warm language. Use only what the owner told you. Keep quotes word for word. Do not invent numbers, awards, results or "best in town" claims. For yoga, fitness and beauty, avoid health promises such as "cures" or "guaranteed results".

**Written approval (important).** Send the full draft before publishing. Do not publish until the owner replies in writing, by email or message, something like "I approve this story for publication on Founders’ Notes." Save that message. Ask separately for permission to use their name, location and Instagram handle. If you change anything after they approve, send it again.

**Publishing.** Add the story (section 2), upload the site (section 4), send the owner the link and tag them on Instagram. If an owner later asks you to remove or change their story, do it promptly.

**The website offer.** The site stays story-first: the website services appear in their own Services section, and the About section does not push them. Keep it low pressure: publish the story first, and mention a website only when it fits the conversation. The stories work because they feel independent and genuine.

---

## 4. Put the site online

1. Upload the whole project folder as it is: `index.html` must stay at the top, next to the `css`, `js`, `data`, `images` and `assets` folders.
2. Pick a host. Free options that work well for a static site include Netlify (drag and drop the folder), Cloudflare Pages and GitHub Pages. Any ordinary web host also works: upload the folder contents. You can leave out `docs`, `README.md` and `assets/brand`.
3. Buy a domain from a registrar such as Cloudflare, Namecheap or Porkbun. A `.com` is best for a worldwide audience. Connect it to your host using the host's "custom domain" steps.
4. Check the name before you commit: domain, Instagram handle, your local business register, and a trademark search (for example USPTO, UK IPO or your country's equivalent). "Founders’ Notes" is a fairly natural phrase, so make sure no one near your market already uses it.
5. When you edit later, upload the changed files over the old ones (usually just `data/stories.js` and a new photo in `images`).

**How the contact options work**

- **Email, WhatsApp and Instagram** open the visitor's own app or the website.
- **Book a call** opens your Calendly page.
- **The "Send a message" form** posts the visitor's message to the free FormSubmit service, which emails it to your `CONFIG` email address. **One-time setup:** after the site is online, send yourself a test message through the form. FormSubmit emails you an activation link. Click it once, and every later message arrives in your inbox. Check spam if you do not see it. If the form cannot send (for example the page is opened from a file on your computer, or the visitor is offline), the visitor's email app opens with the message already written, so nothing is lost. If you prefer another service (Formspree, Web3Forms), paste its URL into `formEndpoint` in `data/config.js`.

---

## 5. Before you go live: checklist

- [ ] `calendly` replaced in `data/config.js` (the other values are already set)
- [ ] Hero text, About text and portrait updated
- [ ] Sample stories removed, or still clearly labelled "Sample"
- [ ] Footer note reworded if the stories are real
- [ ] Written approval saved for every real story
- [ ] Tested: email, WhatsApp and Instagram icons, Book a call, and the "Send a message" form (activate FormSubmit by clicking the link in the first email)
- [ ] Looked at it on your phone, in light mode and dark mode (the moon/sun button in the header)
- [ ] Clicked each filter button, used the search box, and opened at least one story

**A note on privacy and rules.** Publishing names, places and Instagram handles is personal information, so keep your approval messages as a record. If you later add analytics, a newsletter or a form that stores data, add a privacy policy page. Rules differ by country (for example GDPR in the UK and EU). This is general guidance, not legal advice. If you're unsure, ask a local adviser.
