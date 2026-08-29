import type { Metadata } from "next";
import Link from "next/link";
import { getActivePriceSources } from "@/lib/active-price-sources";
import { siteConfig } from "@/lib/site";

const methodologyDescription =
  "So sammelt, prüft und strukturiert BauKostenRadar Handwerker- und Renovierungspreise, Modellbänder und regionale Richtwerte für Deutschland.";

export const metadata: Metadata = {
  title: "Methodik: Preisquellen, Modelle & Regionalfaktoren",
  description: methodologyDescription,
  alternates: { canonical: "/methodik" },
};

export default function MethodologyPage() {
  const sourceCount = getActivePriceSources().length;
  const base = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${base}/methodik`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Methodik", item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: "Methodik, Preisquellen und Kostenmodelle",
      description: methodologyDescription,
      isPartOf: { "@id": `${base}/#website` },
      publisher: { "@id": `${base}/#organization` },
      inLanguage: "de-DE",
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
            <span aria-current="page">Methodik</span>
          </nav>
          <span className="eyebrow">Transparenz</span>
          <h1>Methodik, Preisquellen und Kostenmodelle</h1>
          <p>So entstehen die Richtwerte, Rechner und regionalen Einordnungen auf BauKostenRadar.</p>
          <div className="heroFacts">
            <span><strong>{sourceCount}</strong> unterschiedliche Quellen</span>
            <span><strong>2026</strong> aktueller Datenstand</span>
            <span><strong>Getrennt</strong> Quellenwerte und Modellwerte</span>
          </div>
        </div>
      </section>

      <div className="shell articleShell">
        <section className="contentCard proseCard">
          <h2>1. Was unsere Preise bedeuten</h2>
          <p>
            BauKostenRadar veröffentlicht unverbindliche Orientierungswerte. Sie sollen helfen,
            ein Budget vorzubereiten und Angebote besser einzuordnen. Ein Richtwert ist kein Angebot
            und kein Festpreis. Objektzustand, Region, Material, Zugänglichkeit und Auftragsgröße können
            den tatsächlichen Preis deutlich verändern.
          </p>
        </section>

        <section className="contentCard proseCard">
          <h2>2. Wie wir Daten auswählen</h2>
          <p>
            Wir bevorzugen aktuelle deutsche Preisübersichten mit klarer Einheit, nachvollziehbarem
            Datenstand und konkreter Preisspanne. Werte werden nicht als einzelne Durchschnittszahl
            übernommen, wenn die Quelle selbst eine Bandbreite nennt.
          </p>
        </section>

        <section className="contentCard proseCard">
          <h2>3. Quellen im aktuellen Datenstand</h2>
          <p>
            Das zentrale Quellenverzeichnis wird direkt aus derselben Preis-Datenbank erzeugt, die auch
            unsere Kosten- und Detailseiten verwenden. Aufgeführt werden nur Quellen, die aktuell mindestens
            einer veröffentlichten Preisposition zugeordnet sind.
          </p>
          <div className="heroActions">
            <Link className="primaryButton" href="/quellen">Alle {sourceCount} Quellen ansehen</Link>
            <Link className="ghostButton" href="/kosten">Preisbereiche öffnen</Link>
          </div>
        </section>

        <section className="contentCard proseCard">
          <h2>4. Regionale Faktoren</h2>
          <p>
            Regionale Faktoren im Rechner sind ein Modell zur ersten Einordnung. Sie stellen keinen
            pauschalen Marktaufschlag für jede einzelne Leistung dar. Verschiedene Gewerke reagieren
            unterschiedlich auf Lohnniveau, Nachfrage, Anfahrt und lokale Materialkosten. Deshalb werden
            Stadtfaktoren später schrittweise durch gewerkspezifische lokale Daten ersetzt.
          </p>
        </section>

        <section className="contentCard proseCard">
          <h2>5. Renovierungskosten-Rechner</h2>
          <p>
            Der Gesamtrechner arbeitet mit Kostenbändern pro Quadratmeter für unterschiedliche
            Renovierungsumfänge und wendet Qualitäts- und Regionalfaktoren an. Die Aufteilung in Arbeit,
            Material und Reserve ist eine Modellierung für die Budgetplanung und keine Aussage über ein
            konkretes Handwerkerangebot.
          </p>
        </section>

        <section className="contentCard proseCard">
          <h2>6. Fehler oder aktuellere Daten gefunden?</h2>
          <p>
            Hinweise zu veralteten Preisen, fehlerhaften Einheiten oder besseren Primärquellen sind willkommen.
            Schreiben Sie mit der betroffenen URL und Quelle an <a className="textLink" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </section>
      </div>
    </>
  );
}
