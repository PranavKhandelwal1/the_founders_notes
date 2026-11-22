/* ============================================================================
   PAGE TEXT: the home page intro, services, "Get featured" steps and trust points.
   Plain sentences in quotes. Keep the quotes and the commas.
   ============================================================================ */

/* Services page: the six service cards. "type" must match an option in the Contact form's dropdown.
   "art" picks the little illustration (see SVC_ART below). Keep the quotes and the commas. */
const SERVICES = [
  { title: "Website Design & Development", type: "Website design & development", art: "site", cta: "Discuss your website", main: true,
    text: "A beautiful, fast website that explains what you do and makes it easy for people to get in touch.",
    who: "Teachers, studios and independent businesses that are starting out, or have outgrown an Instagram page." },
  { title: "Booking & Appointment Systems", type: "Booking system", art: "book", cta: "Ask about booking", main: true,
    text: "Let clients book classes, sessions or retreat places online, with fewer messages and less admin for you.",
    who: "Studios, practitioners and coaches who take bookings by message or email today." },
  { title: "Website Redesign", type: "Website redesign", art: "redesign", cta: "Ask about a redesign",
    text: "Refresh a dated or confusing website so it looks professional and works well on every screen.",
    who: "Businesses whose website no longer feels like them." },
  { title: "SEO & Website Visibility", type: "SEO", art: "seo", cta: "Ask about SEO",
    text: "Practical fundamentals that help the right people find you on Google.",
    who: "Local and independent businesses that want to be found." },
  { title: "Website Maintenance", type: "Website maintenance", art: "care", cta: "Ask about maintenance",
    text: "Your website kept updated and working, while you focus on your clients.",
    who: "Owners who would rather not worry about the technical side." },
  { title: "Custom Digital Solutions", type: "Other", art: "custom", cta: "Share your idea",
    text: "Something made around the way you work, when a template or off-the-shelf tool does not fit.",
    who: "Businesses with a specific idea, workflow or need." }
];

/* The little illustrations on the service cards (simple drawings in the site's own colours). */
const SVC_ART = {
  site: '<svg viewBox="0 0 320 180" aria-hidden="true"><rect x="52" y="22" width="216" height="136" rx="10" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M52 44h216" stroke="var(--line)" stroke-width="2"/><circle cx="68" cy="33" r="3.5" fill="var(--line)"/><circle cx="80" cy="33" r="3.5" fill="var(--line)"/><circle cx="92" cy="33" r="3.5" fill="var(--line)"/><rect x="72" y="62" width="96" height="10" rx="5" fill="var(--head)"/><rect x="72" y="80" width="72" height="10" rx="5" fill="var(--head)"/><rect x="72" y="102" width="108" height="5" rx="2.5" fill="var(--line)"/><rect x="72" y="113" width="90" height="5" rx="2.5" fill="var(--line)"/><rect x="72" y="130" width="46" height="14" rx="7" fill="var(--accent)"/><rect x="188" y="62" width="64" height="82" rx="8" fill="var(--soft)"/><path d="M188 132c14-20 28-24 40-12 10 9 18 6 24-2v16a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8z" fill="var(--accent)" opacity=".4"/><circle cx="222" cy="86" r="9" fill="var(--on-dark)"/></svg>',
  book: '<svg viewBox="0 0 320 180" aria-hidden="true"><rect x="70" y="26" width="180" height="132" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><path d="M70 58h180" stroke="var(--line)" stroke-width="2"/><rect x="104" y="16" width="8" height="20" rx="4" fill="var(--head)"/><rect x="208" y="16" width="8" height="20" rx="4" fill="var(--head)"/><g fill="var(--line)"><circle cx="100" cy="82" r="5"/><circle cx="130" cy="82" r="5"/><circle cx="160" cy="82" r="5"/><circle cx="190" cy="82" r="5"/><circle cx="220" cy="82" r="5"/><circle cx="100" cy="108" r="5"/><circle cx="130" cy="108" r="5"/><circle cx="190" cy="108" r="5"/><circle cx="220" cy="108" r="5"/><circle cx="100" cy="134" r="5"/><circle cx="130" cy="134" r="5"/><circle cx="160" cy="134" r="5"/><circle cx="220" cy="134" r="5"/></g><circle cx="160" cy="108" r="12" fill="var(--accent)"/><path d="M154 108l4.5 4.5 8-9" fill="none" stroke="var(--card)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="190" cy="134" r="12" fill="none" stroke="var(--accent)" stroke-width="2"/></svg>',
  redesign: '<svg viewBox="0 0 320 180" aria-hidden="true"><rect x="40" y="34" width="106" height="112" rx="9" fill="var(--card)" stroke="var(--line)" stroke-width="2" stroke-dasharray="5 5"/><rect x="54" y="50" width="78" height="7" rx="3.5" fill="var(--line)"/><rect x="54" y="64" width="50" height="7" rx="3.5" fill="var(--line)"/><rect x="54" y="84" width="78" height="30" rx="4" fill="var(--line)" opacity=".6"/><rect x="54" y="124" width="40" height="8" rx="4" fill="var(--line)"/><path d="M158 90h22m-8-9l9 9-9 9" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="194" y="34" width="106" height="112" rx="9" fill="var(--card)" stroke="var(--head)" stroke-width="2"/><rect x="208" y="50" width="78" height="9" rx="4.5" fill="var(--head)"/><rect x="208" y="66" width="52" height="9" rx="4.5" fill="var(--head)"/><rect x="208" y="86" width="78" height="30" rx="6" fill="var(--soft)"/><path d="M208 112c10-14 20-17 28-8 8 8 14 5 18-1v10h-46z" fill="var(--accent)" opacity=".45"/><rect x="208" y="124" width="40" height="12" rx="6" fill="var(--accent)"/></svg>',
  seo: '<svg viewBox="0 0 320 180" aria-hidden="true"><rect x="40" y="30" width="170" height="34" rx="17" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><circle cx="60" cy="47" r="7" fill="none" stroke="var(--accent)" stroke-width="2.4"/><path d="M65 52l6 6" stroke="var(--accent)" stroke-width="2.4" stroke-linecap="round"/><rect x="82" y="43" width="84" height="8" rx="4" fill="var(--line)"/><g><rect x="40" y="82" width="240" height="26" rx="8" fill="var(--card)" stroke="var(--accent)" stroke-width="2"/><rect x="54" y="91" width="90" height="8" rx="4" fill="var(--head)"/><rect x="154" y="93" width="70" height="4" rx="2" fill="var(--line)"/><path d="M262 90l6 8 6-8" fill="none" stroke="var(--accent)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></g><rect x="40" y="118" width="240" height="22" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><rect x="54" y="125" width="70" height="8" rx="4" fill="var(--line)"/><rect x="40" y="148" width="240" height="18" rx="8" fill="var(--card)" stroke="var(--line)" stroke-width="2" opacity=".7"/></svg>',
  care: '<svg viewBox="0 0 320 180" aria-hidden="true"><rect x="62" y="28" width="196" height="124" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="2"/><rect x="82" y="50" width="86" height="9" rx="4.5" fill="var(--head)"/><rect x="82" y="68" width="116" height="6" rx="3" fill="var(--line)"/><rect x="82" y="80" width="98" height="6" rx="3" fill="var(--line)"/><circle cx="214" cy="106" r="30" fill="var(--soft)" stroke="var(--accent)" stroke-width="2.4"/><path d="M200 107l10 10 18-21" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="82" y="112" width="60" height="22" rx="11" fill="none" stroke="var(--line)" stroke-width="2"/><circle cx="94" cy="123" r="5" fill="var(--accent)"/><rect x="104" y="120" width="28" height="6" rx="3" fill="var(--line)"/></svg>',
  custom: '<svg viewBox="0 0 320 180" aria-hidden="true"><path d="M92 44h52a10 10 0 0 1 10 10v14a14 14 0 1 0 0 30v14a10 10 0 0 1-10 10H92a10 10 0 0 1-10-10V54a10 10 0 0 1 10-10z" fill="var(--card)" stroke="var(--head)" stroke-width="2"/><path d="M176 96h52a10 10 0 0 1 10 10v28a10 10 0 0 1-10 10h-52a10 10 0 0 1-10-10v-12a14 14 0 1 0 0-30z" fill="var(--soft)" stroke="var(--accent)" stroke-width="2"/><circle cx="214" cy="52" r="20" fill="none" stroke="var(--line)" stroke-width="2" stroke-dasharray="4 5"/><path d="M214 42v20m-10-10h20" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/></svg>'
};

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
  { title: "Design", text: "I design how your website will look and feel, then share it with you. You tell me what to change, and we refine it together." },
  { title: "Development", text: "Once you are happy with the design, I build it, and test it carefully on phones, tablets and computers." },
  { title: "Launch", text: "We go live together. Nothing is published until you are happy, and I am here to help afterwards." }
];

/* Questions people ask before they write. Prices and timelines are agreed with you in conversation, so none are promised here. */
const SERVICE_FAQ = [
  { q: "How much does a website cost?", a: "It depends on what your business needs, so there is no single price. After we talk, you receive a clear proposal with the scope, features, timeline and cost, and we agree it together before any work begins." },
  { q: "How long does it take?", a: "It depends on the size of the project and how quickly we can agree the words and photos. Your proposal includes a timeline that suits you." },
  { q: "Do I need to provide content?", a: "You know your business best, so I will ask for your words and photos. If you are unsure what to write, I can help you shape it." },
  { q: "Can you help with hosting and domains?", a: "Yes. I can help you choose and set up hosting and a domain name, and explain each step in plain language." },
  { q: "Can you integrate bookings and payments?", a: "Yes. Bookings can be set up on your website, and connected to online payments where that suits your business. We will look at the options in our first conversation." },
  { q: "Will my website be mobile-friendly?", a: "Yes. Every website is designed mobile-first, because most visitors will find you on their phone." },
  { q: "Can I edit the website myself?", a: "If you would like to, tell me at the start and we will plan the website so that is possible. Otherwise, I am happy to make changes for you." },
  { q: "Do you work internationally?", a: "Yes. Everything is done online, so we can work together wherever you are. We talk by video, at a time that suits your time zone." },
  { q: "Do you offer maintenance?", a: "Yes. I can keep your website updated and running smoothly, make small edits and help if something goes wrong. It is optional." },
  { q: "What happens after launch?", a: "I do not disappear. I check that everything works as it should, answer your questions, and can continue to support you through optional maintenance." },
  { q: "Can you redesign my current website?", a: "Yes. We keep what works, and improve the look, the wording and how easy it is to use, especially on a phone." },
  { q: "Do I have to buy anything to be featured?", a: "No. Being featured is always free and never depends on any service." }
];

/* Real work you have done. Add real projects only. The portfolio section stays hidden while this list is empty.
   Fields: name, url, image (desktop screenshot), mobile (optional phone screenshot), text, services (list), tag (for example "My own project"). */
const WORK = [
  { name: "The Founders Notes", url: "/", tag: "My own project", image: "images/site-desktop.webp", mobile: "images/site-mobile.webp",
    text: "This publication: an editorial website for independent founders' stories, with search, topic pages, application forms and clear search-engine foundations.",
    services: ["Website design & development", "Enquiry & application forms", "SEO foundations"] }
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
