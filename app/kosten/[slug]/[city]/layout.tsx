import type { Metadata } from "next";
import Link from "next/link";
import { getRegion, getService, services } from "@/lib/pricing";
import { getRelatedServices } from "@/lib/related-services";
import { socialMetadata } from "@/lib/social-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city } = await params;
  const service = getService(slug);
  const region = getRegion(city);
  if (!service || !region || region.value === "de") return {};

  const title = `${service.shortTitle} Kosten ${region.label} 2026`;
  const description = `${service.shortTitle}-Kosten in ${region.label}: modellierte Richtwerte 2026 mit regional angepasster Preistabelle, Quellen und Erklärung des Standortfaktors.`;

  return socialMetadata({
    title,
    description,
    url: `/kosten/${service.slug}/${region.slug}`,
  });
}

export default async function LocalServiceCostLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string; city: string }>;
}>) {
  const { slug, city } = await params;
  const service = getService(slug);
  const region = getRegion(city);

  if (!service || !region || region.value === "de") return children;

  const relatedServices = getRelatedServices(service.slug, services);

  return (
    <>
      {children}
      {relatedServices.length > 0 ? (
        <section className="section sectionTight" aria-labelledby="local-related-trades-heading">
          <div className="shell">
            <div className="contentCard">
              <span className="eyebrow">Verwandte Gewerke in {region.label}</span>
              <h2 id="local-related-trades-heading">Welche Arbeiten gehören häufig zum selben Projekt?</h2>
              <p>
                Für ein realistisches Gesamtbudget lohnt sich neben {service.shortTitle} auch der Blick auf angrenzende
                Gewerke. Die folgenden Seiten verwenden für {region.label} dasselbe transparente Regionalmodell.
              </p>
              <div className="sourceList">
                {relatedServices.map((relatedService) => (
                  <Link key={relatedService.slug} href={`/kosten/${relatedService.slug}/${region.slug}`}>
                    <strong>{relatedService.shortTitle} Kosten {region.label} 2026</strong>
                    <span>{relatedService.description}</span>
                  </Link>
                ))}
              </div>
              <Link className="textLink" href={`/staedte/${region.slug}`}>
                Alle Handwerkerkosten in {region.label} ansehen →
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
