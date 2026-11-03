import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { services } from "./services/data";
import { articles } from "./insights/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/about",
    "/solutions",
    "/services",
    "/lab",
    "/work",
    "/work/okoa",
    "/work/tenseiark",
    "/insights",
    "/contact",
  ];

  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p}`,
      lastModified: now,
    })),
    ...services.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
    })),
    ...articles.map((a) => ({
      url: `${SITE_URL}/insights/${a.slug}`,
      lastModified: new Date(a.date),
    })),
  ];
}