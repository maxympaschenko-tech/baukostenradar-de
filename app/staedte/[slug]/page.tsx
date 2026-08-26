import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRegion, regions, services } from "@/lib/pricing";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function priceRange(low: number, high: number) {
  return Math.round(low) === Math.round(high) ? euro(low) : `${euro(low)} - ${euro(high)}`;
}

export function generateStaticParams() {
  return regions.filter((region) => region.value !== "de").map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region || region.value === "de") return {};

  return {
    title: `Handwerker Kosten ${region.label} 2026`,
    description: `Modellierte Richtwerte für Renovierungs- und Handwerkerkosten in ${region.label}, basierend auf aktuellen bundesweiten Preisbändern 2026.`,
    alternates: { canonical: `/staedte/${region.slug}` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const region = getRegion(slug);
  if (!region || region.value === "de") notFound();

  const percent = Math.round((region.factor - 1) * 100);

  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Regionale Einordnung 2026</span>
          <h1>Handwerker Kosten in {region.label}</h1>
          <p>
            BauKostenRadar wendet für {region.label} derzeit einen Modellfaktor von {percent >= 0 ? "+" : ""}{percent} %
            auf bundesweite Richtwerte an. Die Werte dienen nur zur Budgetorientierung.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="cityServiceGrid">
            {services.map((service) => {
              const item = service.priceItems[0];
              return (
                <article key={service.slug} className="cityServiceCard">
                  <span className="serviceIcon" aria-hidden="true">{service.icon}</span>
                  <div>
                    <h2>{service.shortTitle}</h2>
                    <span>{item.name}</span>
                    <strong>{priceRange(item.low * region.factor, item.high * region.factor)}</strong>
                    <small>{item.unit}, modelliert für {region.label}</small>
                    <Link className="textLink" href={`/kosten/${service.slug}/${region.slug}`}>
                      {service.shortTitle}-Preise in {region.label} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="notice cityNotice">
            Die Stadtwerte sind keine lokal erhobenen Festpreise. Sie entstehen aus bundesweiten
            Richtwerten plus regionalem Modellfaktor. Für ein konkretes Projekt sollten mehrere lokale Angebote verglichen werden.
          </div>
        </div>
      </section>
    </>
  );
}
