export type Section = { heading: string; paragraphs: string[] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // YYYY-MM-DD
  sections: Section[];
};

export const articles: Article[] = [
  {
    slug: "prepare-before-hiring-a-web-developer",
    title: "What to prepare before you hire a web developer",
    description:
      "A short checklist that saves time and money before you brief any web developer or agency.",
    category: "Websites",
    date: "2026-11-04",
    sections: [
      {
        heading: "Start with the goal, not the design",
        paragraphs: [
          "Before you talk about colours or layouts, write down what the website must do for your business. Bring in enquiries? Sell products? Build trust with new customers? One clear goal makes every later decision easier.",
          "A developer who understands the goal can suggest the right structure. One who only hears 'make it look modern' can only guess.",
        ],
      },
      {
        heading: "Gather what you already have",
        paragraphs: [
          "Collect your logo, brand colours, photos, product lists and any text you already use on social media or printed material. Having these ready can shorten the project noticeably.",
          "If you don't have photos or text yet, say so early. Content is often the slowest part of a website, and it is better to plan for it than to discover it halfway through.",
        ],
      },
      {
        heading: "Know who will use the site",
        paragraphs: [
          "Think about who your customers are and how they will visit: on a phone or a computer, in a hurry or while comparing options. Tell your developer about them in plain words.",
        ],
      },
      {
        heading: "Decide who owns what",
        paragraphs: [
          "Your domain name, hosting account and website files should be in your name or your company's name. Ask for this in writing before work begins, so you are never locked out of something you paid for.",
        ],
      },
      {
        heading: "Agree the scope before the price",
        paragraphs: [
          "Ask for a written list of what is included: number of pages, features, revisions and support after launch. A price only means something when you know what it covers.",
        ],
      },
    ],
  },
  {
    slug: "website-or-social-media-page",
    title: "Website or social media page: what does your business actually need?",
    description:
      "Social media is great for reach, but a website does a different job. Here is how to decide where to invest first.",
    category: "Strategy",
    date: "2026-11-04",
    sections: [
      {
        heading: "What social media does well",
        paragraphs: [
          "Social platforms are fast to set up and good for reaching people who already spend time there. They suit showing new products, sharing updates and starting conversations.",
        ],
      },
      {
        heading: "Where it falls short",
        paragraphs: [
          "You don't own your audience on a platform. Rules, reach and features can change without notice. Information is also hard to organise, so customers often have to scroll or message to find simple answers such as prices or opening hours.",
          "People searching on Google for a service are also more likely to find a website than a social profile.",
        ],
      },
      {
        heading: "When a website pays off",
        paragraphs: [
          "A website gives you one place you control: your services, your work, your contact details and a way for customers to order or enquire at any hour. It also makes a new business look established to people who have never heard of it.",
        ],
      },
      {
        heading: "A simple way to decide",
        paragraphs: [
          "If customers regularly ask the same questions, if orders get lost in messages, or if people say they could not find you online, a website will help. Many businesses do best using both: social media to be seen, and a website to turn interest into orders.",
        ],
      },
    ],
  },
  {
    slug: "is-your-business-ready-for-custom-software",
    title: "Is your business ready for custom software?",
    description:
      "Custom software is not for every business. Here are the signs it is worth it, and when a simpler tool is enough.",
    category: "Software",
    date: "2026-11-04",
    sections: [
      {
        heading: "Signs it may be time",
        paragraphs: [
          "Your team copies the same information into several places. Work lives in spreadsheets that only one person understands. Off-the-shelf tools almost fit, but force you to change how you work.",
        ],
      },
      {
        heading: "When an existing tool is enough",
        paragraphs: [
          "If a ready-made product does most of what you need at a fair price, use it. Custom software makes sense when your process is a real advantage, or when no existing tool fits it.",
        ],
      },
      {
        heading: "Write down your process first",
        paragraphs: [
          "Before talking to any developer, describe step by step how the work happens today: who does what, with which information, in what order. This document is often the most valuable part of the project.",
        ],
      },
      {
        heading: "Start small",
        paragraphs: [
          "Choose the one process that costs you the most time and build that first. A small system that works and gets used is worth more than a large one that never launches. You can add more once the first part has proved itself.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function readingTime(article: Article) {
  const words = article.sections
    .flatMap((s) => [s.heading, ...s.paragraphs])
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}