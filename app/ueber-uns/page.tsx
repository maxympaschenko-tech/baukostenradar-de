import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über BauKostenRadar",
  description: "Wer BauKostenRadar betreibt, wie Preisangaben recherchiert werden und nach welchen Grundsätzen Richtwerte, Quellen und Modelle veröffentlicht werden.",
  alternates: { canonical: "/ueber-uns" },
};

export default function AboutPage() {
  const priceCount = services.reduce((sum, service) => sum + service.priceItems.length, 0);
  const base = siteConfig.url.replace(/\/$/, "");
  const canonicalUrl = `${base}/ueber-uns`;
  const organizationId = `${base}/#organization`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Über BauKostenRadar", item: canonicalUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${canonicalUrl}#about`,
      url: canonicalUrl,
      name: "Über BauKostenRadar",
      description: metadata.description,
      isPartOf: { "@id": `${base}/#website` },
      about: { "@id": organizationId },
      mainEntity: { "@id": organizationId },
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
            <span aria-current="page">Über BauKostenRadar</span>
          </nav>
          <span className="eyebrow">Über das Projekt</span>
          <h1>Über BauKostenRadar</h1>
          <p>
            BauKostenRadar ist ein unabhängiges Preisportal für Renovierungs-, Sanierungs- und Handwerkerkosten in Deutschland.
          </p>
        </div>
      </section>

      <div className="shell articleShell">
        <section className="contentCard proseCard">
          <h2>Wer BauKostenRadar betreibt</h2>
          <p>
            BauKostenRadar wird von <strong>{siteConfig.operator.name}</strong> betrieben. Die Kontaktdaten des
            Verantwortlichen finden Sie im <Link className="textLink" href="/impressum">Impressum</Link> und auf der
            <Link className="textLink" href="/kontakt"> Kontaktseite</Link>.
          </p>
          <p>
            Ziel des Projekts ist es, typische Handwerker- und Sanierungskosten nicht in langen, schwer vergleichbaren
            Artikeln zu verstecken, sondern als strukturierte Preispositionen mit Einheit, Preisspanne, Quelle und
            Prüfdatum zugänglich zu machen.
          </p>
        </section>

        <section className="contentCard proseCard">
          <h2>Wie wir Preise veröffentlichen</h2>
          <p>
            Aktuell enthält die Datenbasis {services.length} Kostenbereiche mit insgesamt {priceCount} strukturierten
            Preispositionen. Für jede Position wird eine öffentlich nachvollziehbare Quelle hinterlegt. Quellen und
            Prüfdatum sind auf den jeweiligen Kostenseiten sichtbar.
          </p>
          <p>
            Wir unterscheiden ausdrücklich zwischen veröffentlichten Richtwerten aus Quellen und eigenen Modellen.
            Regionale Stadtfaktoren sind beispielsweise Modellwerte zur groben Einordnung und werden nicht als lokal
            beobachtete Marktaufschläge dargestellt.
          </p>
          <div className="heroActions">
            <Link className="primaryButton" href="/methodik">Methodik ansehen</Link>
            <Link className="ghostButton" href="/quellen">Alle Quellen ansehen</Link>
          </div>
        </section>

        <section className="contentCard proseCard">
          <h2>Redaktionelle Grundsätze</h2>
          <p>
            <strong>Nachvollziehbarkeit:</strong> Preisangaben sollen einer sichtbaren Datenquelle zugeordnet sein.
          </p>
          <p>
            <strong>Transparenz:</strong> Modellierte Werte werden als Modell gekennzeichnet und nicht als gemessener
            lokaler Marktpreis ausgegeben.
          </p>
          <p>
            <strong>Aktualität:</strong> Datenstände und Prüfzeitpunkte werden angegeben. Veraltete oder semantisch
            nicht passende Preisbereiche werden korrigiert, sobald bessere Daten verfügbar sind.
          </p>
          <p>
            <strong>Keine Preisgarantie:</strong> BauKostenRadar veröffentlicht Orientierungswerte. Ein tatsächliches
            Handwerkerangebot kann je nach Objekt, Material, Region, Auslastung und Leistungsumfang deutlich abweichen.
          </p>
        </section>

        <section className="contentCard proseCard">
          <h2>Finanzierung und redaktionelle Unabhängigkeit</h2>
          <p>
            BauKostenRadar soll sich künftig unter anderem durch klar erkennbare Werbung finanzieren. Werbeanzeigen
            haben keinen Einfluss darauf, welche Preiswerte, Quellen, Kostenbereiche oder Modellfaktoren veröffentlicht
            werden. Redaktionelle Inhalte und Kostendaten werden unabhängig von Werbekunden erstellt und gepflegt.
          </p>
          <p>
            Sollte BauKostenRadar später bezahlte Kooperationen, Affiliate-Links oder gesponserte Platzierungen nutzen,
            werden diese als solche kenntlich gemacht. Eine kommerzielle Zusammenarbeit ändert nicht die auf der
            <Link className="textLink" href="/methodik"> Methodik-Seite</Link> beschriebenen Regeln für die Preisdaten.
          </p>
        </section>

        <section className="contentCard proseCard">
          <h2>Fehler oder bessere Quelle gefunden?</h2>
          <p>
            Hinweise auf veraltete Werte, fehlerhafte Zuordnungen oder aktuellere belastbare Quellen sind ausdrücklich
            willkommen. Nennen Sie bitte die betroffene URL, Preisposition und möglichst die Quelle.
          </p>
          <a className="primaryButton" href={`mailto:${siteConfig.email}`}>Datenhinweis senden</a>
        </section>
      </div>
    </>
  );
}
