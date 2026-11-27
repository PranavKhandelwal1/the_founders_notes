/* ============================================================================
   CATEGORIES: the five sections of the publication.

   Every story has ONE primary category: add  category: "Yoga & Wellness"  to the story in data/stories.js
   (the name must match one of the names below exactly). Tags are still free-form and show on the story page.

   To add a sixth category later, add one more entry here. It gets its own page at /category/<slug>/, a place in the
   navigation and the sitemap automatically. A category with fewer than 2 stories stays visible to visitors but asks
   search engines not to index it yet, so the site never publishes thin pages.
   ============================================================================ */

const CATEGORIES = [
  {
    slug: "entrepreneurship",
    name: "Entrepreneurship",
    blurb: "Founders building something of their own: why they started, what it took, and how it grew.",
    title: "Entrepreneurship: founder stories",
    description: "Founder stories about starting and growing an independent business: the first steps, the hard weeks and what the founders would tell someone starting out.",
    intro: "Stories about people who set out to build a business of their own. How it began, what the first year looked like, what was harder than expected, and what they would tell someone starting today.",
    empty: "No entrepreneurship stories are published yet."
  },
  {
    slug: "yoga-wellness",
    name: "Yoga & Wellness",
    blurb: "Teachers, practitioners and studio owners in yoga, movement and wellbeing.",
    title: "Yoga & Wellness: founder stories",
    description: "Stories from yoga teachers, studio owners and wellness practitioners around the world: how they found their practice and built their work around it.",
    intro: "Stories from the people who teach and practise yoga, movement, meditation and wellbeing for a living. How they found their practice, how they started teaching, and what a normal week looks like.",
    empty: "No yoga and wellness stories are published yet."
  },
  {
    slug: "small-businesses",
    name: "Small Businesses",
    blurb: "Independent studios, shops and local businesses, and the people who keep them going.",
    title: "Small Businesses: founder stories",
    description: "Stories from the people behind independent studios, shops and local businesses: the community they serve, the work behind the scenes and what keeps them going.",
    intro: "Stories about independent businesses and the communities they serve. The people behind the counter or the studio door, what they do differently, and why they keep going.",
    empty: "No small business stories are published yet."
  },
  {
    slug: "creatives",
    name: "Creatives",
    blurb: "Photographers, makers, designers, writers and other creative people who work for themselves.",
    title: "Creatives: founder stories",
    description: "Stories from photographers, makers, designers, writers and other independent creatives: how they turned their craft into work and what they have learned.",
    intro: "Stories from independent creative people: photographers, makers, designers, writers and artists who turned a craft into a living, and what they learned along the way.",
    empty: "No creative stories are published yet."
  },
  {
    slug: "personal-journeys",
    name: "Personal Journeys",
    blurb: "Stories where a life change, a setback or a turning point led to the work.",
    title: "Personal Journeys: founder stories",
    description: "Founder stories shaped by a turning point: recovery, a career change, motherhood or a new direction, and how it led to the work the founders do today.",
    intro: "Stories where a turning point led to the work: a recovery, a career change, becoming a parent, or simply a new direction. Told in the founders' own words and approved by them.",
    empty: "No personal journey stories are published yet."
  }
];
