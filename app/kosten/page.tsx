import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Handwerker Kosten 2026 - Preisspiegel Deutschland",
  description: "Aktuelle Richtwerte für Maler, Fliesenleger, Elektriker, Badsanierung, Dachsanierung und Bodenarbeiten in Deutschland.",
  alternates: { canonical: "/kosten" },
};

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CostsPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Preisspiegel Deutschland</span>
          <h1>Handwerker Kosten 2026</h1>
          <p>Aktuelle Richtwerte für häufige Renovierungs- und Sanierungsarbeiten, strukturiert nach Leistung und Einheit.</p>
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
                      <strong>{euro(item.low)} - {euro(item.high)}</strong>
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
