/* ============================================================================
   PAGE TEXT: the home page intro, services, "Get featured" steps and trust points.
   Plain sentences in quotes. Keep the quotes and the commas.
   ============================================================================ */

/* Services page. Each service says what it is, who needs it, the problem it solves and what you receive.
   "type" must match an option in the Contact form's dropdown. Keep the quotes and the commas. */
const SERVICES = [
  { title: "Website design & development", type: "Website design & development", main: true,
    what: "A custom website designed around your business and built to load quickly on any phone.",
    who: "Teachers, studios and independent businesses that are starting out online, or that rely on an Instagram page alone.",
    problem: "People can't easily see what you offer, who you are or how to reach you, so interested visitors drift away.",
    gets: ["A clear, mobile-friendly website with the pages you need, such as your offers, about and contact", "A design that suits your style and brand", "Basic search setup, so people nearby can find you", "Help getting it live"] },
  { title: "Booking & appointment systems", type: "Booking system", main: true,
    what: "A simple way for customers to book a class, session, appointment or retreat place on your website.",
    who: "Anyone who takes bookings through messages, DMs and emails today.",
    problem: "Booking by message is slow, easy to lose track of, and takes time away from your work.",
    gets: ["Online booking set up around how you actually work", "Booking and enquiry forms that email you", "Booking linked from your website and Instagram", "A short walkthrough of how to use it"] },
  { title: "Website redesign", type: "Website redesign",
    what: "A clearer, more modern look and structure for an existing website, keeping what already works.",
    who: "Businesses whose site looks dated, is awkward on a phone, or no longer feels like them.",
    problem: "Visitors get confused, or leave before they trust you enough to get in touch.",
    gets: ["A fresh design that keeps your best content", "Simpler navigation and wording", "A layout that works well on phones"] },
  { title: "SEO", type: "SEO",
    what: "Practical changes that help search engines understand your website and show it to people looking for what you offer.",
    who: "Local and independent businesses that want to be found when people search nearby.",
    problem: "You have a good website, but few people find it.",
    gets: ["Clear page titles and descriptions", "A sensible page structure", "Local-search basics, such as your business details and location"] },
  { title: "Website maintenance", type: "Website maintenance",
    what: "Your website kept online, up to date and working, so you don't have to think about it.",
    who: "Owners who have no time, or no wish, to look after the technical side.",
    problem: "Small things break or go out of date, and nobody has time to fix them.",
    gets: ["Hosting and updates looked after", "Small edits, such as a new timetable", "Help when something goes wrong"] },
  { title: "Custom digital solutions", type: "Other",
    what: "Something made for the way your business works, when an off-the-shelf tool doesn't quite fit.",
    who: "Businesses with a specific need, such as a tidy link page for an Instagram bio or a class timetable.",
    problem: "Standard tools are either too much or not enough, and you end up working around them.",
    gets: ["A conversation about what you need", "A simple solution built for it", "Everything explained in plain language"] }
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
  { title: "Link-in-bio page", text: "One tidy page for your Instagram bio.", items: ["Timetable, menu or booking links", "Fast on a phone", "Your colours and logo"] },
  { title: "Studio starter site", popular: true, text: "A small, clear website for a studio or teacher.", items: ["Home, classes, about and contact", "Booking or enquiry setup", "Local search basics"] },
  { title: "Care plan", text: "Your site kept online and up to date.", items: ["Hosting and backups", "Small edits each month", "Quick help when something breaks"] }
];

/* Who the packages are for (one line above the packages). */
const SERVICES_FOR = "Made for yoga and Pilates studios, martial arts schools, fitness teachers and retreat hosts, including people who have no website yet.";

/* How working together goes. */
const SERVICE_STEPS = [
  { title: "Discovery", text: "We start with a friendly conversation about your business, your customers and what you want your website to do. No jargon, no pressure." },
  { title: "Design", text: "I design how your website will look and feel, then share it with you. You tell me what to change." },
  { title: "Development", text: "Once you are happy with the design, I build it, and check that it works well on phones, tablets and computers." },
  { title: "Launch", text: "We go live together. Nothing is published until you are happy, and I'm there to help afterwards." }
];

/* Questions people ask before they write. Prices and timelines are agreed with you in conversation, so none are promised here. */
const SERVICE_FAQ = [
  { q: "How much does a website cost?", a: "It depends on what you need, so there is no one price. Tell me about your business and I'll give you a clear quote, and we agree the cost before any work begins." },
  { q: "How long does a website take?", a: "It depends on the size of the project and how quickly we agree the words and photos. After our first conversation, I'll give you a timeline that suits you." },
  { q: "Do you work internationally?", a: "Yes. Everything is done online, so we can work together wherever you are. We talk by video, in a time that suits your time zone." },
  { q: "Can you redesign my existing website?", a: "Yes. We keep what works, and improve the look, the wording and how easy it is to use, especially on a phone." },
  { q: "Do you offer booking systems?", a: "Yes. I can set up a simple way for customers to book classes, sessions, appointments or retreat places online, and to send you an enquiry." },
  { q: "Will my website be mobile-friendly?", a: "Yes. Every website is designed to work well on phones, tablets and computers, because most visitors will find you on their phone." },
  { q: "Do you provide ongoing maintenance?", a: "Yes. I can keep your website online and up to date, make small edits for you, and help if something goes wrong. It's optional." },
  { q: "Do I have to buy anything to be featured?", a: "No. Being featured is always free and never depends on any service." }
];

/* Real work you have done for founders. Add real projects only. The section stays hidden while this list is empty.
   Example: { name: "Business name", url: "https://example.com", image: "images/example.jpg", text: "What you built and what changed." } */
const WORK = [];

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
    title: "The Founders Notes | Free stories of independent founders",
    description: "Free, founder-approved stories about independent yoga, Pilates, martial arts and wellness business owners around the world. Read their journeys or get featured."
  },
  stories: {
    title: "Founder stories: yoga, Pilates, wellness | Founders Notes",
    description: "Read how independent yoga teachers, studio owners and wellness founders started, what was hard, and what a normal week looks like. Founder-approved."
  },
  about: {
    title: "About The Founders Notes | Stories of independent founders",
    description: "The Founders Notes is a free publication of real, founder-approved stories about independent businesses. Meet Pranav Khandelwal, the person behind it."
  },
  mission: {
    title: "Our mission: free founder stories | The Founders Notes",
    description: "Why The Founders Notes exists: free, founder-approved stories for independent yoga, Pilates and fitness founders, who they are for and where it is heading."
  },
  "get-featured": {
    title: "Get featured for free | The Founders Notes",
    description: "How to share your story with The Founders Notes: a 20-minute chat, a draft you approve, and a free story page with a badge and quote cards. Your questions answered."
  },
  "submit-story": {
    title: "Apply to be featured | The Founders Notes",
    description: "Apply to be featured on The Founders Notes for free: answer a few questions, add a photo if you like, and approve the final story before it goes live."
  },
  services: {
    title: "Website design & booking systems | The Founders Notes",
    description: "Clear, mobile-friendly websites and simple online booking for yoga teachers, studios, wellness businesses and coaches. Start your project or book a free call."
  },
  contact: {
    title: "Contact The Founders Notes | Book a call or send a message",
    description: "Share your founder story, ask about a website, booking system or redesign, or book a free 20-minute call. Send a message, or write by email, WhatsApp or Instagram."
  }
};
