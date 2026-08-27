import { allGuides } from "@/lib/all-guides";
import { priceItemSlug } from "@/lib/price-slug";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const contentUpdatedAt = "2026-08-27T00:00:00+02:00";

type SitemapEntry = {
  url: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildEntries(): SitemapEntry[] {
  const base = siteConfig.url.replace(/\/$/, "");
  const cities = regions.filter((region) => region.value !== "de");

  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/kosten`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/rechner`, changeFrequency: "weekly", priority: 0.92 },
    { url: `${base}/ratgeber`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/rechner/renovierungskosten`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/rechner/badsanierungskosten`, changeFrequency: "weekly", priority: 0.91 },
    { url: `${base}/rechner/handwerkerkosten`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/staedte`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/ueber-uns`, changeFrequency: "monthly", priority: 0.72 },
    { url: `${base}/quellen`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/methodik`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/kontakt`, changeFrequency: "monthly", priority: 0.5 },
    ...allGuides.map((guide) => ({
      url: `${base}/ratgeber/${guide.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.86,
    })),
    ...services.map((service) => ({
      url: `${base}/kosten/${service.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...services.flatMap((service) =>
      service.priceItems.map((item) => ({
        url: `${base}/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`,
        changeFrequency: "weekly" as const,
        priority: 0.82,
      })),
    ),
    ...cities.map((region) => ({
      url: `${base}/staedte/${region.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...services.flatMap((service) =>
      cities.map((region) => ({
        url: `${base}/kosten/${service.slug}/${region.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })),
    ),
  ];
}

export async function GET() {
  const entries = buildEntries();
  const body = entries
    .map(
      (entry) =>
        `<url><loc>${escapeXml(entry.url)}</loc><lastmod>${contentUpdatedAt}</lastmod><changefreq>${entry.changeFrequency}</changefreq><priority>${entry.priority}</priority></url>`,
    )
    .join("");
  const commit = process.env.NEXT_PUBLIC_GIT_SHA ?? "unknown";
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<!-- build:${escapeXml(commit)} -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>\n`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0",
      "CDN-Cache-Control": "no-store",
      "X-BauKostenRadar-Commit": commit,
    },
  });
}
