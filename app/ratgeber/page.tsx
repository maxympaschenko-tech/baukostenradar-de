import type { Metadata } from "next";
import Link from "next/link";
import { allGuides } from "@/lib/all-guides";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ratgeber zu Sanierung, Renovierung & Handwerkerkosten 2026",
  description: "Ratgeber zu Sanierungskosten, Dach, Fenster, Elektrik, Heizung, Türen, Estrich, Abriss, Entsorgung, Maurerarbeiten, Treppen, Küchenrenovierung und konkreten Projektgrößen mit Richtwerten und Beispielbudgets.",
  alternates: { canonical: "/ratgeber" },
};

const guideGroups = [
  {
    eyebrow: "Sanierungskosten",
    title: "Haus und Bestand sanieren",
    description: "Richtwerte pro Quadratmeter, Kernsanierung, Altbau und Einfamilienhaus als Gesamtprojekt einordnen.",
    slugs: [
      "sanierungskosten-pro-qm",
      "haus-sanieren-kosten",
      "kernsanierung-kosten",
      "sanierungskosten-einfamilienhaus",
      "altbausanierung-kosten",
    ],
  },
  {
    eyebrow: "Konkrete Gewerke",
    title: "Große Einzelmaßnahmen realistisch kalkulieren",
    description: "Kosten für Dach, Fenster, Elektrik, Heizung und komplette Badsanierung mit konkreten 2026-Richtwerten und Beispielbudgets.",
    slugs: [
      "dach-sanieren-kosten-pro-qm",
      "fenster-austauschen-kosten-haus",
      "elektrik-erneuern-altbau",
      "heizung-erneuern-kosten",
      "bad-komplett-sanieren-kosten",
    ],
  },
  {
    eyebrow: "Konkrete Projektgrößen",
    title: "Kosten für typische Flächen und Stückzahlen",
    description: "Konkrete Rechenbeispiele für 150 m² Dach, 20 Fenster, 100 m² Elektrik, ein 10-m²-Bad und 100 m² Fußbodenheizung.",
    slugs: [
      "dach-150-qm-kosten",
      "20-fenster-austauschen-kosten",
      "elektrik-erneuern-100-qm-kosten",
      "bad-10-qm-sanieren-kosten",
      "fussbodenheizung-100-qm-kosten",
    ],
  },
  {
    eyebrow: "Innenausbau & Modernisierung",
    title: "Türen, Mauern, Treppen und Küche konkret kalkulieren",
    description: "Typische Innenausbau-Projekte mit aktuellen Stück- und Projektpreisen, klarer Rechenbasis und direktem Weg zum Kostenrechner.",
    slugs: [
      "6-innentueren-austauschen-kosten",
      "innentuer-einbauen-kosten",
      "haustuer-einbauen-kosten",
      "haustuer-rc2-kosten",
      "innenwand-mauern-kosten",
      "14-treppenstufen-renovieren-kosten",
      "kueche-10-qm-renovieren-kosten",
    ],
  },
  {
    eyebrow: "Estrich & Bodenaufbau",
    title: "Estricharten, Ausgleich und Reparatur vergleichen",
    description: "Aktuelle 2026-Richtwerte für Zementestrich, Fließestrich, Trockenestrich und Schnellestrich sowie Bodenausgleich und Rissreparatur.",
    slugs: [
      "estrich-100-qm-kosten",
      "zementestrich-kosten-pro-qm",
      "fliessestrich-kosten-pro-qm",
      "trockenestrich-kosten-pro-qm",
      "schnellestrich-kosten-pro-qm",
      "bodenausgleich-kosten-pro-qm",
      "estrich-rissreparatur-kosten",
    ],
  },
  {
    eyebrow: "Abriss & Entsorgung",
    title: "Rückbau, Hausabriss und Entsorgung kalkulieren",
    description: "Kosten für kompletten Hausabriss, Abbruch pro Kubikmeter, Innenabbruch, Industriehallen-Abbruch und Bauschuttcontainer mit sauberer Abgrenzung der Leistungen.",
    slugs: [
      "haus-abreissen-kosten",
      "abbruch-kosten-pro-m3",
      "innenabbruch-einfamilienhaus-kosten",
      "industriehalle-abbrechen-kosten-pro-qm",
      "bauschuttcontainer-30-m3-kosten",
    ],
  },
  {
    eyebrow: "Renovierung nach Wohnfläche",
    title: "Budgets für konkrete Wohnflächen",
    description: "Beispielrechnungen für Wohnungen und Häuser mit 100, 150 oder 200 m² sowie allgemeine Hausbudgets.",
    slugs: [
      "wohnung-renovieren-kosten",
      "renovierungskosten-haus",
      "renovierungskosten-100-qm",
      "haus-renovieren-150-qm-kosten",
      "haus-renovieren-200-qm-kosten",
    ],
  },
  {
    eyebrow: "Planung & Kostenstruktur",
    title: "Sanierung richtig planen und Preise verstehen",
    description: "Reihenfolge, Arbeits- und Materialkosten sowie Handwerker-Stundensätze verständlich erklärt.",
    slugs: [
      "sanierung-reihenfolge",
      "arbeitskosten-materialkosten",
      "handwerker-stundensaetze",
    ],
  },
] as const;

function guideBySlug(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}

export default function GuidesPage() {
  const base = siteConfig.url.replace(/\/$/, "");
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Ratgeber", item: `${base}/ratgeber` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Baukosten-Ratgeber 2026",
      url: `${base}/ratgeber`,
      description: metadata.description,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: allGuides.length,
        itemListElement: allGuides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.title,
          url: `${base}/ratgeber/${guide.slug}`,
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
            <span aria-current="page">Ratgeber</span>
          </nav>
          <span className="eyebrow">Baukosten-Ratgeber</span>
          <h1>Sanierung, Renovierung und Handwerkerkosten verständlich erklärt</h1>
          <p>
            Praxisnahe Richtwerte, Rechenbeispiele und Einordnung für typische Kosten- und Planungsfragen rund um
            Renovierung, Sanierung und Handwerkerleistungen in Deutschland.
          </p>
          <div className="heroFacts">
            <span><strong>{allGuides.length}</strong> ausführliche Ratgeber</span>
            <span><strong>{guideGroups.length}</strong> Themenbereiche</span>
            <span><strong>2026</strong> aktueller Datenstand</span>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell">
          <div className="premiumSectionHeading">
            <div>
              <span className="eyebrow">So nutzt du BauKostenRadar</span>
              <h2>Vom Thema zum belastbaren Budget</h2>
              <p>Die Ratgeber erklären die Kostenlogik. Danach geht es direkt zu Einzelpreisen, Rechnern und regionalen Modellwerten.</p>
            </div>
          </div>
          <div className="stepsList">
            <div><strong>1</strong><span><b>Ratgeber wählen</b><small>Projektumfang, typische Kostenblöcke und Fallstricke verstehen.</small></span></div>
            <div><strong>2</strong><span><b>Einzelpreise prüfen</b><small>Passende Gewerke und konkrete Preispositionen vergleichen.</small></span></div>
            <div><strong>3</strong><span><b>Eigene Menge rechnen</b><small>Fläche, Stückzahl, Umfang und Qualitätsniveau im Rechner anpassen.</small></span></div>
            <div><strong>4</strong><span><b>Region einordnen</b><small>Modellierte Richtwerte für deutsche Großstädte als Budgethilfe nutzen.</small></span></div>
          </div>
          <div className="heroActions">
            <Link className="primaryButton" href="/kosten">Alle Handwerkerpreise</Link>
            <Link className="ghostButton" href="/rechner">Alle Rechner</Link>
            <Link className="ghostButton" href="/staedte">Städte vergleichen</Link>
          </div>
        </div>
      </section>

      {guideGroups.map((group, index) => {
        const groupGuides = group.slugs.map(guideBySlug).filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

        return (
          <section className={`section${index % 2 === 0 ? "" : " sectionAlt"}`} key={group.title}>
            <div className="shell">
              <div className="premiumSectionHeading">
                <div>
                  <span className="eyebrow">{group.eyebrow}</span>
                  <h2>{group.title}</h2>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="directoryGrid">
                {groupGuides.map((guide) => (
                  <article className="directoryCard" key={guide.slug}>
                    <span className="eyebrow">{guide.eyebrow}</span>
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                    <div className="miniPrice">
                      <span>Wichtigster Richtwert</span>
                      <strong>{guide.keyFact}</strong>
                    </div>
                    <Link className="textLink" href={`/ratgeber/${guide.slug}`}>Ratgeber lesen →</Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section sectionAlt">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">Direkt rechnen</span>
            <h2>Vom Ratgeber zur eigenen Kostenspanne</h2>
            <p>
              Die Ratgeber erklären die Größenordnung. Mit den Rechnern können Sie Fläche, Umfang, Region oder
              konkrete Einzelarbeiten direkt für Ihr eigenes Szenario anpassen.
            </p>
          </div>
          <div className="heroActions">
            <Link className="primaryButton" href="/rechner/renovierungskosten">Renovierung berechnen</Link>
            <Link className="ghostButton" href="/rechner/handwerkerkosten">Handwerkerkosten berechnen</Link>
            <Link className="ghostButton" href="/methodik">Methodik verstehen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
