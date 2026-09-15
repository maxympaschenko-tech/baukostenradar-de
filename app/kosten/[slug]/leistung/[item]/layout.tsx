import type { Metadata } from "next";
import Link from "next/link";
import { getPriceItem } from "@/lib/price-slug";
import { getService, services } from "@/lib/pricing";
import { getRelatedServices } from "@/lib/related-services";
import { socialMetadata } from "@/lib/social-metadata";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function priceRange(low: number, high: number) {
  return low === high ? euro(low) : `${euro(low)} - ${euro(high)}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; item: string }>;
}): Promise<Metadata> {
  const { slug, item: itemSlug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const item = getPriceItem(service, itemSlug);
  if (!item) return {};

  const title = `${item.name} Preis 2026`;
  const description = `${item.name}: konkreter Preis-Richtwert ${priceRange(item.low, item.high)} ${item.unit}. Preisdetail mit Rechner, Beispielmengen, Stadtmodell, Kostentreibern, Angebotscheck und Quelle.`;
  const sharedMetadata = socialMetadata({
    title,
    description,
    url: `/kosten/${service.slug}/leistung/${itemSlug}`,
  });

  return {
    ...sharedMetadata,
    title: {
      default: title,
      template: "%s – Preis & Rechner | BauKostenRadar",
    },
  };
}

export default async function PriceItemLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string; item: string }>;
}>) {
  const { slug, item: itemSlug } = await params;
  const service = getService(slug);
  const item = service ? getPriceItem(service, itemSlug) : undefined;

  if (!service || !item) return children;

  const relatedServices = getRelatedServices(service.slug, services);

  return (
    <>
      {children}
      {relatedServices.length > 0 ? (
        <section className="section sectionTight" aria-labelledby="related-trades-heading">
          <div className="shell">
            <div className="contentCard">
              <span className="eyebrow">Verwandte Gewerke</span>
              <h2 id="related-trades-heading">Welche Arbeiten gehören häufig zum selben Projekt?</h2>
              <p>
                Bei {service.shortTitle}-Projekten greifen mehrere Gewerke oft direkt ineinander. Die folgenden
                Preisbereiche helfen, angrenzende Arbeiten früh im Gesamtbudget zu berücksichtigen.
              </p>
              <div className="sourceList">
                {relatedServices.map((relatedService) => (
                  <Link key={relatedService.slug} href={`/kosten/${relatedService.slug}`}>
                    <strong>{relatedService.shortTitle} Kosten 2026</strong>
                    <span>{relatedService.description}</span>
                  </Link>
                ))}
              </div>
              <Link className="textLink" href="/kosten">Alle Handwerkerpreise ansehen →</Link>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
