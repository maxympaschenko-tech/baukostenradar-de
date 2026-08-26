import type { MetadataRoute } from "next";
import { priceItemSlug } from "@/lib/price-slug";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

const contentUpdatedAt = new Date("2026-08-26T00:00:00+02:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const cities = regions.filter((region) => region.value !== "de");

  return [
    {
      url: base,
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/kosten`,
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${base}/rechner`,
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${base}/rechner/renovierungskosten`,
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/rechner/badsanierungskosten`,
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.91,
    },
    {
      url: `${base}/rechner/handwerkerkosten`,
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/staedte`,
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${base}/ueber-uns`,
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${base}/methodik`,
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/kontakt`,
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...services.map((service) => ({
      url: `${base}/kosten/${service.slug}`,
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...services.flatMap((service) =>
      service.priceItems.map((item) => ({
        url: `${base}/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`,
        lastModified: contentUpdatedAt,
        changeFrequency: "weekly" as const,
        priority: 0.82,
      })),
    ),
    ...cities.map((region) => ({
      url: `${base}/staedte/${region.slug}`,
      lastModified: contentUpdatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...services.flatMap((service) =>
      cities.map((region) => ({
        url: `${base}/kosten/${service.slug}/${region.slug}`,
        lastModified: contentUpdatedAt,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })),
    ),
  ];
}
