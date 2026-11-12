/* ============================================================================
   PAGE TEXT: the home page intro, services, "Get featured" steps and trust points.
   Plain sentences in quotes. Keep the quotes and the commas.
   ============================================================================ */

const SERVICES = [
  { title: "Website building", text: "A clear, fast, mobile-friendly site built around the questions your customers actually ask you." },
  { title: "Website redesign", text: "A tidy-up for a site that has fallen out of date, keeping what works and fixing what doesn't." },
  { title: "SEO", text: "Sensible page titles, structure and local-search basics, so people nearby can find you." },
  { title: "Booking and enquiry setup", text: "Simple ways for customers to book a class, a private session or a retreat place, or send an enquiry, without message tag." },
  { title: "Instagram-to-website link pages", text: "One tidy page for your Instagram bio that points to your timetable, menu or booking." },
  { title: "Hosting and maintenance", text: "Your site kept online, updated and backed up, so you can get on with running your business." }
];
const STEPS = [
  { title: "A 20-minute chat", text: "Book a time that suits your time zone. We talk by video about how you started, who you serve and what a normal week looks like." },
  { title: "You approve the draft", text: "I write the story and send it to you. Change anything you like. Nothing goes live until you say yes in writing." },
  { title: "We publish and tag you", text: "Your story goes up on the site and I tag your business on Instagram, so your customers can find it." }
];
const TRUST = [
  { title: "Story first (free)", text: "Your story is written and published at no cost to you." },
  { title: "You approve everything", text: "You read the full draft first. Nothing is published without your written approval." },
  { title: "Your story stays yours", text: "Share it anywhere you like, and ask for changes or removal at any time." }
];

/* Hero intro and the four facts under it. Use {count} for the number of stories. */
const HERO = {
  eyebrow: "Free stories for independent founders",
  title: "Every founder has a story.",
  titleEm: "We tell it properly.",
  intro: "I write warm, plain-spoken stories about the people behind yoga and Pilates studios, martial arts and fitness classes, retreats and online practices, wherever in the world they are. It costs nothing to be featured, and nothing goes live without your written approval.",
  checks: ["Free to be featured", "You approve every word", "Founders welcome worldwide"],
  facts: [
    { big: "{count}", label: "Stories" },
    { big: "{countries}", label: "Countries" },
    { big: "{disciplines}", label: "Disciplines" }
  ]
};

/* "Is this for me?" questions, shown as open-and-close answers in the Get featured area. */
const FAQ = [
  { q: "Who do you feature?", a: "Independent founders who run movement and wellness businesses: yoga and Pilates teachers, martial arts and fitness instructors, studio owners, retreat hosts and online practices. Anywhere in the world, from a one-person home studio to a school with several locations." },
  { q: "What do I need to do?", a: "Take a 20-minute video chat (or send written answers or voice notes on WhatsApp if that suits you better), share a few photos you are happy to have published, and read the draft. That is all." },
  { q: "Does it really cost nothing?", a: "Yes. Being featured is free, and it never depends on buying anything. I also build websites, but that is a separate offer, and you can say no to it and still be featured." },
  { q: "Can I change the story or have it removed?", a: "Yes, any time. You read the full draft first, and nothing is published until you say yes in writing. After it is live, email me and I will correct or remove it promptly." },
  { q: "What do I get once it is published?", a: "A story page you can share, a \u201CFeatured in\u201D badge to put on your website or Instagram bio, and ready-made quote cards for Instagram. They are on your story page, under Your founder kit." },
  { q: "I am not comfortable on video, or English is my second language. Can I still take part?", a: "Yes. We can do it by written questions or voice notes, in your own language if you like. I can publish a translated version of your story alongside the English one." },
  { q: "How do you choose who to feature?", a: "I look for real, active businesses with a founder who has something honest to say about how they started and what a normal week looks like. I do not rank or rate anyone." }
];

/* How the publication works. Shown under the "Editorial principles" heading. */
const PRINCIPLES = [
  { title: "Free and independent", text: "Nobody pays to be featured, and I do not take payment to change what a story says." },
  { title: "You approve every word", text: "Every draft goes to the founder first. Nothing goes live without written approval, including photos." },
  { title: "Real people, real businesses", text: "Stories are about real founders and their real work. I never invent quotes, and I only publish what you have told me or approved." },
  { title: "Corrections and removal", text: "If something is wrong or you change your mind, email me. I will fix it or take it down promptly." }
];

/* Website packages. Add a price (for example "From \u20B912,000") and it shows on the card. Leave price empty to show "Ask for a quote". */
const PACKAGES = [
  { title: "Link-in-bio page", price: "", text: "One tidy page for your Instagram bio.", items: ["Timetable, menu or booking links", "Fast on a phone", "Your colours and logo"] },
  { title: "Studio starter site", price: "", text: "A small, clear website for a studio or teacher.", items: ["Home, classes, about and contact", "Booking or enquiry setup", "Local search basics"] },
  { title: "Care plan", price: "", text: "Your site kept online and up to date.", items: ["Hosting and backups", "Small edits each month", "Quick help when something breaks"] }
];

/* Free mini website audit, offered to founders you have featured. */
const AUDIT = {
  title: "Free mini website audit for featured founders",
  text: "Send me your website or Instagram link page and I will check ten things: speed on a phone, clarity, booking, contact details, local search basics and more. You get a short written note, with no obligation."
};

/* What featured founders say. Add real quotes only, with their permission. The section stays hidden while this list is empty.
   Example: { quote: "It was an easy, friendly process.", name: "Founder name", business: "Business name" } */
const TESTIMONIALS = [];

/* Search engine titles and descriptions for each page. Titles: aim for under 60 characters. Descriptions: 140 to 160.
   Story pages build their own from the story (name, business, place and summary). */
const SEO = {
  home: {
    title: "The Founders Notes: free stories about independent wellness founders",
    description: "Free, founder-approved stories about independent yoga, Pilates, martial arts and wellness business owners around the world. Read their journeys or get featured."
  },
  stories: {
    title: "Founder stories: yoga, Pilates and wellness | The Founders Notes",
    description: "Read how independent yoga teachers, studio owners and wellness founders started, what was hard, and what a normal week looks like. Every story is approved by the founder."
  },
  about: {
    title: "About The Founders Notes | Free stories for independent founders",
    description: "The Founders Notes is a small, independent publication that writes warm, plain-spoken stories about founders. Learn how it works and what we stand for."
  },
  mission: {
    title: "Our mission: free founder stories for wellness | The Founders Notes",
    description: "Why The Founders Notes exists: free, founder-approved stories for independent yoga, Pilates and fitness founders, who they are for, and where the publication is heading."
  },
  "get-featured": {
    title: "Get featured for free | The Founders Notes",
    description: "How to share your story with The Founders Notes: a 20-minute chat, a draft you approve, and a free story page with a badge and quote cards. Common questions answered."
  },
  services: {
    title: "Website design for yoga and wellness studios | The Founders Notes",
    description: "Simple, clear websites for studios, teachers and independent class businesses: link-in-bio pages, starter sites and care plans. Ask for a quote or a free mini audit."
  },
  contact: {
    title: "Contact The Founders Notes | Book a call or send a message",
    description: "Book a 20-minute call, send a message, or write by email or WhatsApp to share your story, nominate a founder or ask about a website."
  }
};
