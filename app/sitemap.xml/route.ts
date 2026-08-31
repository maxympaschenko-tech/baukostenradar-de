import { allGuides } from "@/lib/all-guides";
import { priceItemSlug } from "@/lib/price-slug";
import { priceSources, regions, services, type PriceItem, type Service } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type SitemapEntry = {
  url: string;
  lastModified?: string;
};

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function exactCheckedAtToIso(value: string) {
  const match = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(value.trim());
  if (!match) return undefined;

  const [, day, month, year] = match;
  return `${year}-${month}-${day}`;
}

function priceItemLastModified(item: PriceItem) {
  return exactCheckedAtToIso(priceSources[item.sourceKey].checkedAt);
}

function latestDate(values: Array<string | undefined>) {
  return values.reduce<string | undefined>((latest, value) => {
    if (!value || (latest && value <= latest)) return latest;
    return value;
  }, undefined);
}

function serviceLastModified(service: Service) {
  return latestDate(service.priceItems.map(priceItemLastModified));
}

function buildEntries(): SitemapEntry[] {
  const base = siteConfig.url.replace(/\/$/, "");
  const cities = regions.filter((region) => region.value !== "de");
  const catalogLastModified = latestDate(
    services.flatMap((service) => service.priceItems.map(priceItemLastModified)),
  );

  return [
    { url: base, lastModified: catalogLastModified },
    { url: `${base}/kosten`, lastModified: catalogLastModified },
    { url: `${base}/rechner` },
    { url: `${base}/ratgeber` },
    { url: `${base}/rechner/renovierungskosten` },
    { url: `${base}/rechner/badsanierungskosten` },
    { url: `${base}/rechner/handwerkerkosten`, lastModified: catalogLastModified },
    { url: `${base}/staedte` },
    { url: `${base}/ueber-uns`, lastModified: catalogLastModified },
    { url: `${base}/quellen`, lastModified: catalogLastModified },
    { url: `${base}/methodik` },
    { url: `${base}/kontakt` },
    ...allGuides.map((guide) => ({
      url: `${base}/ratgeber/${guide.slug}`,
    })),
    ...services.map((service) => ({
      url: `${base}/kosten/${service.slug}`,
      lastModified: serviceLastModified(service),
    })),
    ...services.flatMap((service) =>
      service.priceItems.map((item) => ({
        url: `${base}/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`,
        lastModified: priceItemLastModified(item),
      })),
    ),
    ...cities.map((region) => ({
      url: `${base}/staedte/${region.slug}`,
      lastModified: catalogLastModified,
    })),
    ...services.flatMap((service) =>
      cities.map((region) => ({
        url: `${base}/kosten/${service.slug}/${region.slug}`,
        lastModified: serviceLastModified(service),
      })),
    ),
  ];
}

export async function GET() {
  const entries = buildEntries();
  const body = entries
    .map((entry) => {
      const lastModified = entry.lastModified
        ? `<lastmod>${escapeXml(entry.lastModified)}</lastmod>`
        : "";
      return `<url><loc>${escapeXml(entry.url)}</loc>${lastModified}</url>`;
    })
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
