import { allGuides } from "@/lib/all-guides";
import { priceItemSlug } from "@/lib/price-slug";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type SitemapEntry = {
  url: string;
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
    { url: base },
    { url: `${base}/kosten` },
    { url: `${base}/rechner` },
    { url: `${base}/ratgeber` },
    { url: `${base}/rechner/renovierungskosten` },
    { url: `${base}/rechner/badsanierungskosten` },
    { url: `${base}/rechner/handwerkerkosten` },
    { url: `${base}/staedte` },
    { url: `${base}/ueber-uns` },
    { url: `${base}/quellen` },
    { url: `${base}/methodik` },
    { url: `${base}/kontakt` },
    ...allGuides.map((guide) => ({
      url: `${base}/ratgeber/${guide.slug}`,
    })),
    ...services.map((service) => ({
      url: `${base}/kosten/${service.slug}`,
    })),
    ...services.flatMap((service) =>
      service.priceItems.map((item) => ({
        url: `${base}/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`,
      })),
    ),
    ...cities.map((region) => ({
      url: `${base}/staedte/${region.slug}`,
    })),
    ...services.flatMap((service) =>
      cities.map((region) => ({
        url: `${base}/kosten/${service.slug}/${region.slug}`,
      })),
    ),
  ];
}

export async function GET() {
  const entries = buildEntries();
  const body = entries
    .map((entry) => `<url><loc>${escapeXml(entry.url)}</loc></url>`)
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
