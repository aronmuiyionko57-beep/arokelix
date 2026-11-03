import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";
import { services } from "./services/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/about",
    "/solutions",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/lab",
    "/work",
    "/work/okoa",
    "/work/tenseiark",
    "/contact",
  ];
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    priority: p === "" ? 1 : p.startsWith("/services/") ? 0.7 : 0.8,
  }));
}