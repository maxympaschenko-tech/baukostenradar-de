import type { Metadata } from "next";
import Link from "next/link";
import { priceSources } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

const sourcesDescription =
  "Quellenverzeichnis von BauKostenRadar: öffentlich nachvollziehbare Preisquellen, Prüfdatum, Auswahlkriterien und transparente Einordnung der Richtwerte.";

export const metadata: Metadata = {
  title: "Quellen für Bau- und Handwerkerpreise 2026",
  description: sourcesDescription,
  alternates: { canonical: "/quellen" },
};

const sources = Array.from(
  new Map(
    Object.values(priceSources).map((source) => [source.url, source]),
  ).values(),
).sort((a, b) => a.name.localeCompare(b.name, "de"));

export default function SourcesPage() {
  const base = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${base}/quellen`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Quellen", item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Quellen für Bau- und Handwerkerpreise",
      description: sourcesDescription,
      isPartOf: { "@id": `${base}/#website` },
      publisher: { "@id": `${base}/#organization` },
      inLanguage: "de-DE",
      mainEntity: {
        "@type": "ItemList",
        "@id": `${canonicalUrl}#sources`,
        name: "Aktuell verwendete Quellen",
        numberOfItems: sources.length,
        itemListElement: sources.map((source, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "WebPage",
            name: source.name,
            url: source.url,
          },
        })),
      },
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="contentHero">
        <div className="shell">
          <nav className="visibleBreadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Quellen</span>
          </nav>
          <span className="eyebrow">Transparente Datenbasis</span>
          <h1>Quellen für Bau- und Handwerkerpreise</h1>
          <p>
            BauKostenRadar strukturiert öffentlich nachvollziehbare Preisangaben aus deutschen Fachportalen,
            Verbraucherinformationen und spezialisierten Kostenratgebern. Hier finden Sie das zentrale
            Quellenverzeichnis unserer Preis-Datenbank.
          </p>
          <div className="heroFacts">
            <span><strong>{sources.length}</strong> unterschiedliche Quellen</span>
            <span><strong>2026</strong> aktueller Prüfstand</span>
            <span><strong>Offen</strong> verlinkte Originalquellen</span>
          </div>
        </div>
      </section>

      <div className="shell articleShell">
        <section className="contentCard proseCard guideSummary">
          <span className="eyebrow">So arbeiten wir</span>
          <h2>Was eine Quelle bei BauKostenRadar bedeutet</h2>
          <ul className="summaryFacts">
            <li><strong>Nachvollziehbar:</strong> Preispositionen werden einer öffentlich erreichbaren Quelle zugeordnet.</li>
            <li><strong>Geprüft:</strong> Wir dokumentieren, wann eine Quelle zuletzt für unsere Datenbasis kontrolliert wurde.</li>
            <li><strong>Keine Preisgarantie:</strong> Veröffentlicht werden Richtwerte zur Budgetplanung, keine verbindlichen Angebote.</li>
          </ul>
          <p className="tableNote">
            Die Nennung oder Verlinkung einer Quelle bedeutet keine geschäftliche Partnerschaft, Empfehlung oder
            Vergütung durch den jeweiligen Anbieter.
          </p>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Quellenverzeichnis</span>
          <h2>Aktuell verwendete Quellen</h2>
          <p>
            Die Liste wird aus derselben Datenbasis erzeugt, die auch unsere Kosten- und Detailseiten verwenden.
            Dadurch bleibt nachvollziehbar, welche externen Quellen tatsächlich im Portal hinterlegt sind.
          </p>
          <div className="sourceList">
            {sources.map((source) => (
              <a href={source.url} key={source.url} target="_blank" rel="noreferrer">
                <strong>{source.name}</strong>
                <span>Zuletzt geprüft: {source.checkedAt} · Originalquelle öffnen →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Qualität & Einordnung</span>
          <h2>Wie wir Preisangaben übernehmen</h2>
          <p>
            Wir übernehmen keine einzelne Zahl als allgemeingültigen Marktpreis. Entscheidend sind Einheit,
            Leistungsumfang und Kontext der Originalquelle. Wo zwei Quellen unterschiedliche Leistungen beschreiben,
            werden die Werte nicht künstlich zu einer gemeinsamen Spanne zusammengezogen.
          </p>
          <ul className="guideBullets">
            <li>Einheiten wie m², Stunde, Stück oder komplettes Projekt bleiben getrennt.</li>
            <li>Modellierte Regionalwerte werden als Modell gekennzeichnet und nicht als lokal erhobene Preise ausgegeben.</li>
            <li>Interne Modellbänder werden von extern verankerten Preisangaben klar unterschieden.</li>
            <li>Hinweise und Korrekturen können über die Kontaktmöglichkeiten des Portals gemeldet werden.</li>
          </ul>
          <div className="heroActions">
            <Link className="primaryButton" href="/methodik">Methodik ansehen</Link>
            <Link className="ghostButton" href="/kosten">Alle Preisbereiche</Link>
          </div>
        </section>
      </div>
    </>
  );
}
