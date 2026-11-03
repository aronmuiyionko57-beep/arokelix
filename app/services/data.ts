import {
  Globe, Code2, ShoppingCart, Smartphone, Palette,
  TrendingUp, Settings, Lightbulb, type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  label: string;
  icon: LucideIcon;
  tagline: string;
  problems: string[];
  deliverables: string[];
  bestFor: string;
};

export const services: Service[] = [
  {
    slug: "websites-web-applications",
    title: "Websites & Web Applications",
    label: "Web",
    icon: Globe,
    tagline: "Corporate websites, landing pages, portals and custom web applications designed around business goals.",
    problems: [
      "Your current site looks dated or doesn't reflect the quality of your business.",
      "Visitors arrive but don't know what to do next.",
      "The site is slow, hard to update, or falls apart on phones.",
    ],
    deliverables: [
      "Page structure and content plan built around your goals",
      "Responsive design for mobile, tablet and desktop",
      "A fast build with SEO foundations: titles, metadata, sitemap",
      "Contact and enquiry forms that deliver straight to your inbox",
      "Domain, deployment and a clear handover",
    ],
    bestFor: "Companies launching or replacing a corporate website, and teams that need a client portal or web application.",
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    label: "Software",
    icon: Code2,
    tagline: "Business software and internal systems built around specific operational requirements.",
    problems: [
      "Work lives in spreadsheets, chat threads and paper.",
      "Off-the-shelf tools don't match how your team actually operates.",
      "The same information is typed into several places.",
    ],
    deliverables: [
      "A requirements session and a written scope before any code",
      "System and data design around your real workflow",
      "Secure sign-in and role-based access where needed",
      "Testing with your team before launch",
      "Documentation and handover so you aren't locked in",
    ],
    bestFor: "Businesses outgrowing spreadsheets, and teams with a process no existing product fits.",
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    label: "Retail",
    icon: ShoppingCart,
    tagline: "Online stores and commerce systems designed for sales, payments and growth.",
    problems: [
      "You sell only through DMs, calls or social media, and orders get lost.",
      "Stock, orders and payments are tracked by hand.",
      "Shoppers leave before they complete an order.",
    ],
    deliverables: [
      "Product catalogue and category structure",
      "Cart, wishlist and product comparison features",
      "Multi-currency pricing where you sell locally and abroad",
      "An ordering flow that fits your market, from checkout to WhatsApp ordering",
      "Mobile-first design, since most shoppers are on phones",
    ],
    bestFor: "Retailers and brands moving from social-media selling to a store they own.",
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    label: "Mobile",
    icon: Smartphone,
    tagline: "Modern mobile applications designed for customers, teams and business operations.",
    problems: [
      "Customers or staff need access on the go, not at a desk.",
      "Field work is recorded on paper and re-typed later.",
      "A website alone can't deliver the experience you want.",
    ],
    deliverables: [
      "Scoping and user flows before design starts",
      "Interface design for the devices your users actually have",
      "Build and testing on real devices",
      "Support through release",
    ],
    bestFor: "Businesses with a clear mobile use case, such as customer ordering or field-team tools.",
  },
  {
    slug: "branding-creative",
    title: "Branding & Creative",
    label: "Creative",
    icon: Palette,
    tagline: "Brand identities, visual systems and digital creative assets.",
    problems: [
      "Your brand looks different on every platform.",
      "You look like every competitor in your category.",
      "You have no consistent assets for the website, social media or print.",
    ],
    deliverables: [
      "Logo and visual identity",
      "Colour, typography and usage guidelines",
      "Social media and digital creative assets",
      "Files prepared for web and print",
    ],
    bestFor: "New businesses establishing an identity, and established ones whose brand no longer matches their quality.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    label: "Growth",
    icon: TrendingUp,
    tagline: "Digital campaigns, content systems, SEO and online growth solutions.",
    problems: [
      "People can't find you when they search.",
      "You post and advertise without knowing what works.",
      "Traffic arrives but doesn't turn into enquiries.",
    ],
    deliverables: [
      "Audience and channel plan",
      "SEO foundations: page titles, metadata, sitemap and structured data",
      "Content planning and campaign setup",
      "Analytics and conversion tracking so results are measurable",
      "Regular reporting in plain language",
    ],
    bestFor: "Businesses that already have a website and want it to bring in enquiries.",
  },
  {
    slug: "automation-business-systems",
    title: "Automation & Business Systems",
    label: "Automation",
    icon: Settings,
    tagline: "Digital workflows and automation that improve efficiency and reduce repetitive work.",
    problems: [
      "Staff copy the same data between tools every day.",
      "Enquiries and orders wait for someone to notice them.",
      "Reports take hours to put together.",
    ],
    deliverables: [
      "A review of your current workflow to find what to automate",
      "Automated notifications, forms and approvals",
      "Connections between the tools you already use",
      "Simple dashboards and reports",
      "Documentation so your team can run it",
    ],
    bestFor: "Teams losing hours to repetitive admin who want it handled without a full custom system.",
  },
  {
    slug: "it-digital-consulting",
    title: "IT / Digital Consulting",
    label: "Strategy",
    icon: Lightbulb,
    tagline: "Technology strategy and digital transformation support for businesses.",
    problems: [
      "You aren't sure which technology your business actually needs.",
      "You've been quoted wildly different prices and can't judge them.",
      "Past projects didn't deliver what was promised.",
    ],
    deliverables: [
      "A review of your current tools, site and processes",
      "A prioritised digital roadmap",
      "Clear recommendations on what to build, buy or skip",
      "Support while you brief or manage other vendors",
    ],
    bestFor: "Owners and managers planning a digital investment who want an independent view first.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}