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
    slug: "how-long-does-a-website-take-to-build",
    title: "How long does a website take to build?",
    description:
      "There is no single answer, but four things decide the timeline. Knowing them helps you plan and avoid delays.",
    category: "Websites",
    date: "2026-11-04",
    sections: [
      {
        heading: "It depends on four things",
        paragraphs: [
          "The size of the site, how ready your content is, which features you need, and how quickly you give feedback. A simple company site with a few pages is a very different job from an online store with hundreds of products.",
        ],
      },
      {
        heading: "Content is usually the slowest part",
        paragraphs: [
          "Text, photos and product details often take longer to prepare than the design or code. If you have them ready before the project starts, you remove the most common cause of delay.",
        ],
      },
      {
        heading: "Ask for milestones, not just a date",
        paragraphs: [
          "A single launch date tells you little. Ask your developer to break the work into stages, such as design approved, pages built and testing complete, so you can see progress and spot problems early.",
        ],
      },
      {
        heading: "How to keep a project moving",
        paragraphs: [
          "Name one person on your side who can make decisions, answer questions quickly and collect feedback from everyone else. Projects slow down most when feedback arrives from many people at different times.",
        ],
      },
    ],
  },
  {
    slug: "website-launch-checklist",
    title: "A simple checklist before your website goes live",
    description:
      "Ten minutes of checking before launch can prevent the small mistakes that cost you customers.",
    category: "Websites",
    date: "2026-11-04",
    sections: [
      {
        heading: "Check the basics first",
        paragraphs: [
          "Read every page for spelling mistakes and make sure your phone number, email address and business hours are correct. Wrong contact details are the most expensive small error a website can have.",
        ],
      },
      {
        heading: "Test it on a phone",
        paragraphs: [
          "Many visitors will use a phone. Open the site on one, tap every button and menu, and check that text is readable and images load quickly.",
        ],
      },
      {
        heading: "Send yourself a test enquiry",
        paragraphs: [
          "Fill in your contact form and any order or booking forms and make sure the message actually reaches you. A form that silently fails means lost customers you will never hear about.",
        ],
      },
      {
        heading: "Make sure people can find you",
        paragraphs: [
          "Each page should have a clear title and short description, because these are what appear in search results. Ask your developer to confirm the site is set up so search engines can read it.",
        ],
      },
      {
        heading: "Confirm you own everything",
        paragraphs: [
          "Check that the domain name, hosting and website files are registered in your name or your company's name, and keep the login details somewhere safe.",
        ],
      },
    ],
  },
  {
    slug: "how-to-write-a-software-project-brief",
    title: "How to write a brief for a software project",
    description:
      "A clear one-page brief helps any developer give you a better quote and build the right thing.",
    category: "Software",
    date: "2026-11-04",
    sections: [
      {
        heading: "Describe the problem, not the solution",
        paragraphs: [
          "Start with what is going wrong today, for example orders being lost or reports taking hours. A developer who understands the problem can often suggest a simpler answer than the one you had in mind.",
        ],
      },
      {
        heading: "Say who will use it",
        paragraphs: [
          "List the types of people who will use the system, such as staff, managers or customers, and what each one needs to do. This shapes the whole design.",
        ],
      },
      {
        heading: "Separate must-haves from nice-to-haves",
        paragraphs: [
          "Write two lists. The first holds what the system cannot launch without. The second holds ideas for later. This keeps the first version focused and affordable.",
        ],
      },
      {
        heading: "Mention your limits",
        paragraphs: [
          "Share your budget range, your deadline and any tools you already use that the new system must work with. Honest limits lead to realistic proposals.",
        ],
      },
      {
        heading: "Define what success looks like",
        paragraphs: [
          "Decide how you will know the project worked, for example fewer manual steps, faster reports or fewer mistakes. It gives you and the developer a shared target.",
        ],
      },
    ],
  },
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