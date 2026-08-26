import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RenovationCalculator } from "@/components/renovation-calculator";
import { getService, priceSources, regions, services } from "@/lib/pricing";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/kosten/${service.slug}` },
  };
}

export default async function CostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const sourceKeys = [...new Set(service.priceItems.map((item) => item.sourceKey))];

  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Preisstand August 2026</span>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
          <div className="heroFacts">
            <span><strong>{service.priceItems.length}</strong> Preispositionen</span>
            <span><strong>{sourceKeys.length}</strong> geprüfte Quellen</span>
            <span><strong>Deutschland</strong> bundesweite Richtwerte</span>
          </div>
        </div>
      </section>

      <div className="shell contentGrid">
        <div>
          <section className="contentCard">
            <div className="cardHeaderRow">
              <div>
                <span className="eyebrow">Preistabelle</span>
                <h2>{service.shortTitle}: typische Kosten 2026</h2>
              </div>
            </div>

            <div className="priceTableWrap">
              <table className="priceTable">
                <thead>
                  <tr>
                    <th>Leistung</th>
                    <th>Preisspanne</th>
                    <th>Einheit</th>
                  </tr>
                </thead>
                <tbody>
                  {service.priceItems.map((item) => (
                    <tr key={item.name}>
                      <td>
                        <strong>{item.name}</strong>
                        {item.note ? <small>{item.note}</small> : null}
                      </td>
                      <td><strong>{euro(item.low)} - {euro(item.high)}</strong></td>
                      <td>{item.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="tableNote">
              Die Werte sind unverbindliche Orientierungswerte. Je nach Region, Objektzustand,
              Material, Zugänglichkeit und Auftragsgröße können konkrete Angebote niedriger oder höher ausfallen.
            </p>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Regionale Unterschiede</span>
            <h2>Wie stark kann der Standort den Preis verändern?</h2>
            <p>
              Für die erste Kalkulation nutzt BauKostenRadar regionale Modellfaktoren. Sie sind keine
              verbindlichen Aufschläge, sondern helfen dabei, typische Unterschiede zwischen Städten grob abzubilden.
            </p>
            <div className="regionChips">
              {regions.filter((region) => region.value !== "de").map((region) => (
                <span key={region.value}>
                  {region.label} <strong>{region.factor >= 1 ? "+" : ""}{Math.round((region.factor - 1) * 100)} %</strong>
                </span>
              ))}
            </div>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Datenbasis</span>
            <h2>Quellen und Aktualität</h2>
            <p>
              Wir veröffentlichen keine versteckten Fantasiewerte. Jede Preisposition ist einer öffentlich
              nachvollziehbaren Quelle zugeordnet. Die Werte werden als Richtwerte übernommen und für BauKostenRadar strukturiert.
            </p>
            <div className="sourceList">
              {sourceKeys.map((key) => {
                const source = priceSources[key];
                return (
                  <a key={key} href={source.url} target="_blank" rel="noreferrer">
                    <strong>{source.name}</strong>
                    <span>Geprüft: {source.checkedAt}</span>
                  </a>
                );
              })}
            </div>
            <Link className="textLink" href="/methodik">Methodik von BauKostenRadar ansehen →</Link>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Budget</span>
            <h2>Gesamte Renovierung kalkulieren</h2>
            <p>
              Einzelpreise helfen beim Vergleich. Für das Gesamtbudget sind Fläche, Sanierungsumfang,
              Qualitätsniveau und Region entscheidend. Dafür ist der Renovierungskosten-Rechner gedacht.
            </p>
            <Link className="primaryButton" href="/rechner/renovierungskosten">
              Renovierungskosten berechnen
            </Link>
          </section>
        </div>

        <aside className="sidebarSticky">
          <RenovationCalculator compact />
        </aside>
      </div>
    </>
  );
}
