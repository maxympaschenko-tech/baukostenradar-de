import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RenovationCalculator } from "@/components/renovation-calculator";
import { getService, priceSources, regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

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
  const leadPrice = service.priceItems[0];
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 5);
  const canonicalUrl = `${siteConfig.url.replace(/\/$/, "")}/kosten/${service.slug}`;
  const requestUrl = `/angebot?leistung=${encodeURIComponent(service.slug)}`;

  const faqs = [
    {
      question: `Was kostet ${service.shortTitle} 2026?`,
      answer: `Ein typischer Richtwert für „${leadPrice.name}“ liegt 2026 bei ${priceRange(leadPrice.low, leadPrice.high)} ${leadPrice.unit}. Weitere Positionen und Einheiten finden Sie in der Preistabelle auf dieser Seite.`,
    },
    {
      question: `Warum unterscheiden sich die Preise für ${service.shortTitle} so stark?`,
      answer: "Region, Objektzustand, Materialqualität, Zugänglichkeit, Auftragsgröße und notwendige Vorarbeiten beeinflussen den Endpreis. Deshalb sind die veröffentlichten Werte Orientierungsbereiche und kein verbindliches Angebot.",
    },
    {
      question: `Sind die ${service.shortTitle}-Preise bei BauKostenRadar aktuell?`,
      answer: "Ja. Die auf dieser Seite verwendeten Quellen wurden zuletzt im August 2026 geprüft. Jede Preisposition ist einer öffentlich nachvollziehbaren Quelle zugeordnet.",
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Handwerker Kosten", item: `${siteConfig.url.replace(/\/$/, "")}/kosten` },
        { "@type": "ListItem", position: 3, name: service.shortTitle, item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
                      <td><strong>{priceRange(item.low, item.high)}</strong></td>
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
            <Link className="textLink" href="/rechner/handwerkerkosten">Eigene Menge im Handwerkerkosten-Rechner kalkulieren →</Link>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Projektanfrage</span>
            <h2>{service.shortTitle}-Projekt geplant?</h2>
            <p>
              Übernehmen Sie den Kostenbereich direkt in die Projektanfrage und ergänzen Sie dort Standort, Budget,
              Zeitraum und eine kurze Beschreibung des Vorhabens.
            </p>
            <Link className="primaryButton" href={requestUrl}>Projekt anfragen</Link>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Regionale Unterschiede</span>
            <h2>{service.shortTitle}-Kosten nach Stadt vergleichen</h2>
            <p>
              Für die erste Kalkulation nutzt BauKostenRadar regionale Modellfaktoren. Die verlinkten Stadtseiten
              zeigen die vollständige Preistabelle mit bundesweitem Ausgangswert und regionaler Modellierung nebeneinander.
            </p>
            <div className="regionChips">
              {regions.filter((region) => region.value !== "de").map((region) => (
                <Link className="regionChip" key={region.value} href={`/kosten/${service.slug}/${region.slug}`}>
                  {region.label} <strong>{region.factor >= 1 ? "+" : ""}{Math.round((region.factor - 1) * 100)} %</strong>
                </Link>
              ))}
            </div>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Häufige Fragen</span>
            <h2>FAQ zu {service.shortTitle}-Kosten</h2>
            <div className="faqList">
              {faqs.map((faq) => (
                <div key={faq.question} className="faqItem">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
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
            <p className="tableNote">
              Fehler oder aktuellere Quelle gefunden? Schreiben Sie an {" "}
              <a className="textLink" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Weitere Gewerke</span>
            <h2>Weitere Handwerkerkosten vergleichen</h2>
            <div className="sourceList">
              {relatedServices.map((item) => (
                <Link key={item.slug} href={`/kosten/${item.slug}`}>
                  <strong>{item.shortTitle} Kosten 2026</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </div>
            <Link className="textLink" href="/kosten">Alle Handwerkerpreise ansehen →</Link>
          </section>

          <section className="contentCard">
            <span className="eyebrow">Budget</span>
            <h2>Vom Einzelpreis zum Gesamtbudget</h2>
            <p>
              Für einzelne Arbeiten nutzen Sie den Handwerkerkosten-Rechner. Für eine komplette Renovierung sind zusätzlich
              Wohnfläche, Sanierungsumfang, Qualitätsniveau und Region entscheidend.
            </p>
            <div className="heroActions">
              <Link className="primaryButton" href="/rechner/handwerkerkosten">Handwerkerkosten berechnen</Link>
              <Link className="ghostButton" href="/rechner/renovierungskosten">Renovierung kalkulieren</Link>
              <Link className="secondaryButton" href={requestUrl}>Projekt anfragen</Link>
            </div>
          </section>
        </div>

        <aside className="sidebarSticky">
          <RenovationCalculator compact />
        </aside>
      </div>
    </>
  );
}
