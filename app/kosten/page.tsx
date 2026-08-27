import type { Metadata } from "next";
import Link from "next/link";
import { priceItemSlug } from "@/lib/price-slug";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Handwerker Kosten 2026 - Preise, Gewerke & Vergleich",
  description: "Handwerkerkosten 2026 in Deutschland vergleichen: aktuelle Richtwerte nach Gewerk, Preispositionen, Stadtfaktoren, Quellen und Rechner für Renovierung und Sanierung.",
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
  const cityCount = regions.filter((region) => region.value !== "de").length;
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Handwerker Kosten", item: `${baseUrl}/kosten` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Handwerkerkosten 2026 nach Gewerk",
      numberOfItems: services.length,
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: `${baseUrl}/kosten/${service.slug}`,
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
          <nav className="visibleBreadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Handwerker Kosten</span>
          </nav>
          <span className="eyebrow">Preisspiegel Deutschland - Stand August 2026</span>
          <h1>Handwerker Kosten 2026</h1>
          <p>
            Richtwerte für Renovierung, Sanierung, Haustechnik und Ausbau in Deutschland. Vergleiche einzelne
            Leistungen, komplette Gewerke und regionale Modellwerte für große Städte.
          </p>
          <div className="heroFacts">
            <span><strong>{services.length}</strong> Gewerke</span>
            <span><strong>{priceCount}</strong> Preispositionen</span>
            <span><strong>{cityCount}</strong> Städte im Regionalvergleich</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">Schnellstart</span>
            <h2>Handwerkerpreise richtig einordnen</h2>
            <p>
              Ein einzelner Quadratmeter- oder Stundenpreis reicht selten für ein belastbares Projektbudget.
              Entscheidend sind Leistungsumfang, Material, Objektzustand, Vorarbeiten und Region.
            </p>
            <p>
              Deshalb führt BauKostenRadar von der groben Gewerkübersicht bis zur einzelnen Preisposition und
              ergänzt Rechner, Quellen, Stadtmodelle und konkrete Sanierungsbeispiele.
            </p>
            <div className="heroActions">
              <Link className="primaryButton" href="/rechner/handwerkerkosten">Handwerkerkosten berechnen</Link>
              <Link className="ghostButton" href="/rechner/renovierungskosten">Renovierung kalkulieren</Link>
            </div>
          </div>

          <div className="contentCard proseCard">
            <span className="eyebrow">So nutzt du die Preise</span>
            <div className="stepsList">
              <div>
                <strong>1</strong>
                <span>Gewerk auswählen und typische Leistungen vergleichen.</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Passende Einheit und Projektmenge für die eigene Kalkulation prüfen.</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Regionale Einordnung nutzen und mehrere vergleichbare Angebote einholen.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell">
          <div className="sectionHeading">
            <span className="eyebrow">Alle Gewerke</span>
            <h2>Handwerkerpreise nach Bereich</h2>
            <p>
              Jede Gewerkseite enthält die vollständige Preistabelle, Quellen, regionale Modellwerte,
              weiterführende Ratgeber und passende Rechner.
            </p>
          </div>

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
                      <Link className="priceItemLink" href={`/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`}>
                        {item.name}
                      </Link>
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

      <section className="section">
        <div className="shell">
          <div className="sectionHeading">
            <span className="eyebrow">Direkter Vergleich</span>
            <h2>Typischer Startwert je Gewerk</h2>
            <p>
              Für einen schnellen Überblick zeigt die Tabelle jeweils die erste repräsentative Preisposition aus
              unserer Datenbasis. Unterschiedliche Einheiten dürfen nicht direkt miteinander verrechnet werden.
            </p>
          </div>

          <div className="priceTableWrap">
            <table className="priceTable">
              <thead>
                <tr>
                  <th>Gewerk</th>
                  <th>Beispielleistung</th>
                  <th>Richtwert 2026</th>
                  <th>Einheit</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => {
                  const item = service.priceItems[0];
                  return (
                    <tr key={service.slug}>
                      <td>
                        <Link className="priceItemLink" href={`/kosten/${service.slug}`}>
                          {service.shortTitle}
                        </Link>
                      </td>
                      <td>
                        <Link className="textLink" href={`/kosten/${service.slug}/leistung/${priceItemSlug(item.name)}`}>
                          {item.name}
                        </Link>
                      </td>
                      <td><strong>{priceRange(item.low, item.high)}</strong></td>
                      <td>{item.unit}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">Regionale Unterschiede</span>
            <h2>Warum Handwerkerkosten je Stadt abweichen</h2>
            <p>
              Lohnniveau, Auslastung, Anfahrtswege und lokale Nachfrage können Preise beeinflussen. BauKostenRadar
              nutzt für acht Großstädte transparente Modellfaktoren, damit bundesweite Richtwerte regional eingeordnet werden können.
            </p>
            <p>
              Die Stadtwerte sind ausdrücklich keine lokal erhobenen Festpreise. Sie dienen der Budgetorientierung
              vor dem Vergleich konkreter Angebote.
            </p>
            <div className="heroActions">
              <Link className="primaryButton" href="/staedte">Städte vergleichen</Link>
              <Link className="ghostButton" href="/methodik">Methodik ansehen</Link>
            </div>
          </div>

          <div className="dataPanel">
            <span className="eyebrow">Datenbasis</span>
            <strong className="bigMetric">{priceCount}</strong>
            <p>Preispositionen werden aktuell in {services.length} Gewerken strukturiert.</p>
            <div className="metricGrid">
              <div>
                <strong>{services.length}</strong>
                <span>Gewerke</span>
              </div>
              <div>
                <strong>{cityCount}</strong>
                <span>Städte</span>
              </div>
              <div>
                <strong>2026</strong>
                <span>Preisstand</span>
              </div>
              <div>
                <strong>offen</strong>
                <span>Quellen nachvollziehbar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">Datenqualität</span>
            <h2>Richtwerte statt Preisversprechen</h2>
            <p>
              BauKostenRadar veröffentlicht keine verbindlichen Angebote. Die Werte dienen der ersten Planung und
              werden auf den Detailseiten mit Quelle und Prüfdatum dokumentiert.
            </p>
            <p>
              Für reale Projekte sollten Leistungsbeschreibungen möglichst identisch sein, damit mehrere Angebote
              sinnvoll miteinander verglichen werden können.
            </p>
          </div>
          <div className="contentCard proseCard">
            <h2>Weiterführende Planung</h2>
            <div className="sourceList">
              <Link href="/ratgeber/handwerker-stundensaetze">
                <strong>Handwerker-Stundensätze 2026</strong>
                <span>Stundenpreise ausgewählter Gewerke verstehen.</span>
              </Link>
              <Link href="/ratgeber/sanierungskosten-pro-qm">
                <strong>Sanierungskosten pro m² 2026</strong>
                <span>Vom Einzelgewerk zum Gesamtbudget wechseln.</span>
              </Link>
              <Link href="/quellen">
                <strong>Quellenverzeichnis</strong>
                <span>Verwendete Preisquellen und Prüfstände nachvollziehen.</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
