/* ============================================================================
   POLICY PAGES: editorial policy, submission guidelines, terms, sponsored content.

   Plain sentences in quotes. Keep the quotes and the commas.
   {owner}, {brand}, {email} and {reply} are filled in from data/config.js.
   "updated" is the date shown at the top of the page (and used in the sitemap): change it whenever you edit the text.

   These pages describe how the site works TODAY. If your practice changes (for example you start accepting sponsors),
   change the text here first, so the site never says something that is not true.
   ============================================================================ */

const POLICIES = {

  "editorial-policy": {
    title: "Editorial policy",
    updated: "2026-11-25",
    intro: "{brand} is an independent digital publication. This page explains who runs it, how stories are chosen and written, and what happens when something needs correcting.",
    sections: [
      { h: "Who runs this publication",
        p: ["{brand} is run by {owner}, who writes, edits and publishes every story. It is a small, independent publication with one editor, not a newsroom, and it is not owned by or affiliated with any of the businesses it features."] },
      { h: "What we publish",
        p: ["Stories about the people behind independent businesses: founders, yoga teachers and wellness professionals, creatives, small-business owners and people whose work grew out of a personal turning point. Stories are sorted into five categories: Entrepreneurship, Yoga & Wellness, Small Businesses, Creatives and Personal Journeys."] },
      { h: "How stories are chosen",
        p: ["I look for real, active businesses with a founder who has something honest to say about how they started and what a normal week looks like.", "I do not rank, rate or compare the people I feature, and a story is never an endorsement of a business, a method or a result. Nobody can pay to be chosen."] },
      { h: "How a story is made",
        ul: ["We talk by video, or the founder answers written questions or sends voice notes.",
             "I write the story from what the founder has told me, in plain language.",
             "The founder reads the full draft first and can change or remove anything.",
             "Nothing is published until the founder has said yes in writing. This includes photos."] },
      { h: "Accuracy",
        p: ["Facts about a business, such as its history, what it offers and how it started, come from the founder and are presented as the founder's account. I do not invent quotes, numbers, achievements or credentials, and I only publish what the founder has told me or approved.", "A pull quote is always a sentence the founder has said or approved."] },
      { h: "Photos and images",
        p: ["Photos show the real founder or business and are supplied or approved by the founder. Every image has a short description for readers who use screen readers."] },
      { h: "Independence and money",
        p: ["Being featured is free, and nobody pays to be featured or to change what a story says. I also work as a web developer, and that work is separate from editorial. The full explanation is on the sponsored content and commercial relationships page."] },
      { h: "Corrections and removal",
        p: ["If a story contains a mistake, or a founder changes their mind, write to {email} and I will correct it or take it down promptly. Every story page ends with a note and an email link for exactly this.", "Founders can ask for changes or removal at any time, for any reason."] },
      { h: "Contact",
        p: ["Questions about this policy, or concerns about a story, can go to {email}. I reply {reply}."] }
    ],
    related: ["submission-guidelines", "sponsored-content", "terms"]
  },

  "submission-guidelines": {
    title: "Submission guidelines",
    updated: "2026-11-25",
    intro: "Everything to know before you apply to be featured on {brand}. Being featured is free, and nothing is published without your written approval.",
    sections: [
      { h: "Who can apply",
        ul: ["Founders and owners of real, active, independent businesses, anywhere in the world.",
             "Yoga and wellness teachers, studio owners and practitioners.",
             "Small-business owners and independent creatives, such as photographers, makers, designers and writers.",
             "People whose work grew out of a personal turning point, such as a career change, a recovery or becoming a parent."] },
      { h: "What you will be asked",
        p: ["The application has 15 short questions and takes about 10 to 15 minutes. Your answers are saved on your device while you write, so you can leave and come back."],
        ul: ["About you: your name, business, website, Instagram, location and email.",
             "Your journey: how you started, your first year, your customers, what you do differently, a moment you are proud of, what is hard and what advice you would give.",
             "Photo and permissions: an optional photo, and your permission to edit and publish the story after you have approved it."] },
      { h: "Photos",
        p: ["Upload a clear, well-lit photo of yourself or your work as a JPG, PNG or WebP file of up to 5 MB. Only send photos you own or have the right to share, and only include other people, such as students or clients, if they have agreed. If the upload does not work, I will ask you to email it."] },
      { h: "Be accurate",
        p: ["Rough numbers are fine. Please only tell me what is true, and do not claim qualifications, awards or results you do not have. I may ask you to confirm details before anything is written."] },
      { h: "What happens next",
        ol: ["I read every application myself and reply {reply}.",
             "I may suggest a short video chat, or ask for written answers or voice notes if you prefer.",
             "I write the story and send you the full draft.",
             "You change anything you like. It goes live only after you have approved it in writing."] },
      { h: "What I may not be able to feature",
        p: ["I cannot feature businesses that are not yet operating, accounts I cannot tell are real, or submissions that read as advertising rather than a story. I may also decline when a story is not a fit for the publication right now. Payment cannot change that decision."] },
      { h: "After it is published",
        p: ["You can ask for changes or removal at any time. You will find a badge and quote cards for sharing on your story page, under \"Your founder kit\"."] },
      { h: "Languages",
        p: ["You can take part in English or in your own language. I can publish a translated version of your story alongside the English one."] }
    ],
    cta: { text: "Ready to apply?", label: "Apply to be featured", href: "/submit-story/" },
    related: ["editorial-policy", "sponsored-content", "terms"]
  },

  "sponsored-content": {
    title: "Sponsored content and commercial relationships",
    updated: "2026-11-25",
    intro: "Readers should know who pays for what they read. This page explains how {brand} is funded, what is separate from the editorial work, and how any paid or commercial content would be labelled.",
    sections: [
      { h: "Stories cannot be bought",
        p: ["Every story on {brand} is editorial. Nobody has paid to be featured, and no story is sponsored or written on behalf of a brand. Payment cannot buy a story, change what a story says, or improve how it is presented."] },
      { h: "If that ever changes",
        p: ["If I ever publish sponsored or paid content, it will be labelled \"Sponsored\" at the top of the page, kept apart from editorial stories, and never presented as an independent feature. I would update this page before publishing it."] },
      { h: "Links and affiliates",
        p: ["Links to a founder's website, Instagram or booking page are there for readers and are not paid placements. I do not currently use affiliate links. If I start to, they will be marked as such."] },
      { h: "My own commercial work",
        p: ["I, {owner}, also work as an independent web developer and offer website design, booking systems and related services through this site. This is a real commercial relationship, so you should know about it.",
           "It is kept separate from editorial. A founder is never required or expected to buy anything to be featured, and whether a founder says yes or no to a service has no effect on their story. I may offer featured founders a free website review, which carries no obligation."] },
      { h: "Disclosure when the two meet",
        p: ["If a featured founder later becomes a client, the story stays as it is, and I will say so on their story page."] },
      { h: "Concerns",
        p: ["If you think a page does not follow this policy, write to {email}. I will look at it and reply {reply}."] }
    ],
    related: ["editorial-policy", "submission-guidelines", "terms"]
  },

  "terms": {
    title: "Terms and conditions",
    updated: "2026-11-25",
    intro: "These terms cover using the {brand} website and being featured on it. They are written in plain language. By using the site you agree to them.",
    sections: [
      { h: "Who we are",
        p: ["{brand} is published by {owner}, an individual based in India. You can reach me at {email}."] },
      { h: "Using the website",
        p: ["You are welcome to read the stories and share links to them. Please do not misuse the site, try to interfere with how it works, or send forms with false information, spam or unlawful content."] },
      { h: "Being featured",
        p: ["When you apply, you confirm that what you tell me is true and that you have the right to share the photos and words you send. You give me permission to edit your answers into a story and to publish it on this website, together with the photos you approve, only after you have approved the final version in writing.",
           "I may also share your story and tag your business on social media such as Instagram to point readers to it. You keep ownership of your own words, photos and business name, and you can share your story anywhere you like.",
           "You can ask for changes or removal at any time by writing to {email}. I will act on a request promptly."] },
      { h: "Our content",
        p: ["The stories, layout and original text on this site are published by {brand}. You may quote short passages with a clear credit and a link to the story. Please do not republish a whole story or use the site's design or text commercially without asking first."] },
      { h: "Accuracy and advice",
        p: ["Stories are the founders' own accounts, written with their approval. I take care to present them accurately, but I do not verify every claim, and a story is not a recommendation or endorsement. Nothing on this site is medical, legal, financial or professional advice, including stories about health, yoga or wellness practice."] },
      { h: "Links to other websites",
        p: ["Stories link to founders' websites, Instagram pages and other sites. I do not control those sites and am not responsible for what they contain."] },
      { h: "Website and other services",
        p: ["Website design and related services offered through this site are agreed separately, in writing, with each client. These terms do not form a contract for those services."] },
      { h: "Limits of responsibility",
        p: ["The site is provided as it is. As far as the law allows, I am not liable for loss that results from using the site or relying on its content. Nothing here limits any right you have that cannot be limited by law."] },
      { h: "Privacy",
        p: ["How your information is used is explained in the [privacy policy](/privacy.html)."] },
      { h: "Changes and governing law",
        p: ["I may update these terms, and the date at the top of this page will change when I do. These terms are governed by the laws of India."] }
    ],
    related: ["editorial-policy", "sponsored-content", "submission-guidelines"]
  }
};
