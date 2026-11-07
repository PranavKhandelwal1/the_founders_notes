# Founder toolkit

Everything here is for you to copy, not code. Save it somewhere handy (a doc or notes app).

## 1. Outreach tracker
Open `outreach-tracker.csv` in Google Sheets or Excel. One row per founder. Suggested statuses: **Found, Messaged, Replied, Call booked, Call done, Draft sent, Approved, Published, Declined.** Plan two follow-ups (about 4 days and 10 days after the first message), then stop.

## 2. Message templates

**First message**
> Hi [name], I'm Pranav. I run Founders' Notes, a small publication that writes free stories about independent founders. I'd love to feature [business]. It's a 20-minute video chat (or written answers or voice notes if you prefer), you approve everything before it goes live, and it costs nothing. Here's a link to book a time: [Calendly link]

**Follow-up**
> Hi [name], just a gentle nudge in case my message got buried. No pressure at all. If a story about [business] would be useful to you, I'd be glad to write it.

**After they book**
> Thanks [name]. To make our chat easy, think about how [business] began, the hardest part of the first year, and what a normal week looks like. You don't need to prepare anything else.

**Sending the draft**
> Here's your draft. Please change anything you like, including photos and quotes. Nothing is published until you reply "approved" in writing. Take as long as you need.

**After approval (go live)**
> Your story is live: [link]. On the page, under "Your founder kit", you'll find a "Featured in" badge for your website and Instagram bio, and quote cards you can post. I'll tag you on Instagram too. If you'd like, I'd love one line about how the experience was, and I'm happy to give you a free mini website audit.

**Testimonial request**
> Would you be happy to share one or two sentences about taking part? I'll only publish it with your OK.

## 3. Approval record (one folder per story)
For every story keep: the founder's "approved" message (screenshot or email), photo permission, and the final text as published. Name the folder with the story number. This is how you back up the promise on the site.

## 4. Story template (use the same shape every time)
1. How it began
2. The hard part
3. What a normal week looks like
4. What changed along the way
5. Advice for someone starting out
6. Pull quote (a sentence they actually said)

For short Q&A posts, use `body` items like `{ q: "What was your first year like?", a: "..." }` in `data/stories.js`.

## 5. Free mini website audit: the ten checks
1. Loads quickly on a phone
2. Readable text size and contrast
3. Clear first line: what you do and where
4. Timetable or services easy to find
5. A booking or enquiry route that works
6. Contact details and location visible
7. Page titles and descriptions make sense
8. Instagram bio link goes somewhere useful
9. Google Business or map listing matches the site
10. Footer has current details and a privacy line

Send three short notes: what works, the top three fixes, and one optional next step. No hard sell.

## 6. Publishing rhythm
Aim for one story a week, or one story plus one short Q&A every two weeks. Use `published: "2026-11-02"` on each story so dates show. Repost each story as three Instagram posts: the quote card, a photo with one line, and a "read the story" post.

## 7. Round-ups for search
Once you have a few stories in one discipline or country, publish a round-up such as "Yoga teachers building studios in India". Use the same tags so the filter links (`#tag-Yoga`, `#country-India`) work.

## 8. Back up and protect
- Keep the project in a private Git repository (GitHub is free) so a bad edit never costs you your stories.
- When you have a domain, create a dedicated address such as hello@yourdomain.com and put it in `data/config.js`.
- After every deploy, send yourself a test message from the contact form. The first time, FormSubmit sends an activation email to your inbox. Click it or messages won't arrive.
- If spam grows, switch the form to a service with a captcha (Formspree or Web3Forms with Turnstile) and put its URL in `formEndpoint`.
