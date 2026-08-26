import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Handwerker Kosten 2026 - Preise & Vergleich",
  description: "Aktuelle Handwerkerpreise 2026 für Renovierung, Sanierung, Haustechnik, Fenster, Fassade, Garten und weitere Gewerke in Deutschland.",
  alternates: { canonical: "/kosten" },
};

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

export default function CostsPage() {
  const priceCount = services.reduce((sum, service) => sum + service.priceItems.length, 0);

  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Preisspiegel Deutschland - Stand August 2026</span>
          <h1>Handwerker Kosten 2026</h1>
          <p>{services.length} Kostenbereiche mit {priceCount} aktuellen Preispositionen für Renovierung, Sanierung und Haustechnik.</p>
          <div className="heroFacts">
            <span><strong>{services.length}</strong> Gewerke</span>
            <span><strong>{priceCount}</strong> Preispositionen</span>
            <span><strong>2026</strong> aktuelle Richtwerte</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="directoryGrid">
            {services.map((service) => (
              <article className="directoryCard" key={service.slug}>
                <div className="directoryCardTop">
                  <span className="serviceIcon" aria-hidden="true">{service.icon}</span>
                  <div>
                    <h2>{service.shortTitle}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="directoryPrices">
                  {service.priceItems.slice(0, 3).map((item) => (
                    <div key={item.name}>
                      <span>{item.name}</span>
                      <strong>{priceRange(item.low, item.high)}</strong>
                      <small>{item.unit}</small>
                    </div>
                  ))}
                </div>
                <Link className="primaryButton" href={`/kosten/${service.slug}`}>Alle {service.shortTitle}-Preise</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
