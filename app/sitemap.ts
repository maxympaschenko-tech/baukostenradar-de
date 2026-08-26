import type { MetadataRoute } from "next";
import { priceItemSlug } from "@/lib/price-slug";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();
  const cities = regions.filter((region) => region.value !== "de");

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/kosten`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/rechner`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${base}/rechner/renovierungskosten`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/rechner/handwerkerkosten`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/angebot`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${base}/staedte`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/methodik`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...services.map((service) => ({
      url: `${base}/kosten/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...services.flatMap((service) =>
      service.priceItems.map((item) => ({
        url: `${base}/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.82,
      })),
    ),
    ...cities.map((region) => ({
      url: `${base}/staedte/${region.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...services.flatMap((service) =>
      cities.map((region) => ({
        url: `${base}/kosten/${service.slug}/${region.slug}`,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })),
    ),
  ];
}
