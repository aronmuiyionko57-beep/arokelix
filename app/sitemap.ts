import { MetadataRoute } from "next";
import { services } from "./services/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://arokelix-xi.vercel.app";

  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/solutions`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), priority: 0.9 },
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
    { url: `${base}/lab`, lastModified: new Date(), priority: 0.5 },
    { url: `${base}/work`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/work/tenseiark`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.9 },
  ];
}