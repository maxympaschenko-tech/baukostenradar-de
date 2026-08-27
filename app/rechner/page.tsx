import type { Metadata } from "next";
import Link from "next/link";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Baukosten Rechner 2026 - Renovierung & Handwerker",
  description: "Kostenrechner 2026 für Renovierung, Badsanierung und Handwerkerarbeiten in Deutschland. Mit Preisbändern, Regionalfaktoren, Einzelpreisen und Methodik.",
  alternates: { canonical: "/rechner" },
};

const calculators = [
  {
    href: "/rechner/renovierungskosten",
    icon: "∑",
    title: "Renovierungskosten-Rechner",
    description: "Gesamtbudget nach Wohnfläche, Umfang, Qualitätsstandard und Region schätzen.",
    fact: "4 Sanierungsstufen",
    action: "Renovierung berechnen",
  },
  {
    href: "/rechner/badsanierungskosten",
    icon: "◫",
    title: "Badsanierungskosten-Rechner",
    description: "Komplette Badsanierung nach Badgröße und Region mit transparentem m²-Richtwert schätzen.",
    fact: "1.000 - 2.500 €/m² Basis",
    action: "Badsanierung berechnen",
  },
  {
    href: "/rechner/handwerkerkosten",
    icon: "€",
    title: "Handwerkerkosten-Rechner",
    description: "Einzelne Arbeiten nach Gewerk, Preisposition, Menge und Region kalkulieren.",
    fact: `${services.reduce((sum, service) => sum + service.priceItems.length, 0)} Preispositionen`,
    action: "Handwerkerkosten berechnen",
  },
] as const;

export default function CalculatorDirectoryPage() {
  const base = siteConfig.url.replace(/\/$/, "");
  const priceCount = services.reduce((sum, service) => sum + service.priceItems.length, 0);
  const cityCount = regions.filter((region) => region.value !== "de").length;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: base },
        { "@type": "ListItem", position: 2, name: "Kostenrechner", item: `${base}/rechner` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "BauKostenRadar Kostenrechner 2026",
      url: `${base}/rechner`,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: calculators.length,
        itemListElement: calculators.map((calculator, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: calculator.title,
          url: `${base}${calculator.href}`,
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
            <span aria-current="page">Kostenrechner</span>
          </nav>
          <span className="eyebrow">BauKostenRadar Rechner</span>
          <h1>Kostenrechner für Renovierung und Handwerk 2026</h1>
          <p>Gesamtbudget, Badsanierung oder einzelne Handwerkerleistungen mit transparenten Preisbändern und regionaler Einordnung kalkulieren.</p>
          <div className="heroFacts">
            <span><strong>{calculators.length}</strong> Rechner</span>
            <span><strong>{priceCount}</strong> Preispositionen</span>
            <span><strong>{cityCount}</strong> Städte im Regionalmodell</span>
          </div>
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell">
          <div className="premiumSectionHeading">
            <div>
              <span className="eyebrow">Welcher Rechner passt?</span>
              <h2>Vom groben Budget zur konkreten Einzelarbeit</h2>
              <p>Je genauer der Projektumfang bekannt ist, desto gezielter lässt sich der passende Rechner einsetzen.</p>
            </div>
          </div>
          <div className="stepsList">
            <div><strong>1</strong><span><b>Gesamtprojekt</b><small>Wohnfläche und Sanierungsumfang mit dem Renovierungskosten-Rechner einordnen.</small></span></div>
            <div><strong>2</strong><span><b>Bad separat prüfen</b><small>Für eine komplette Badsanierung den spezialisierten Bad-Rechner nutzen.</small></span></div>
            <div><strong>3</strong><span><b>Einzelarbeiten kalkulieren</b><small>Konkrete Gewerke, Leistungen und Mengen im Handwerkerkosten-Rechner berechnen.</small></span></div>
            <div><strong>4</strong><span><b>Preis und Region prüfen</b><small>Ergebnis mit Einzelpreis, Quelle, Ratgeber und Stadtseite abgleichen.</small></span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell directoryGrid">
          {calculators.map((calculator) => (
            <article className="directoryCard" key={calculator.href}>
              <div className="directoryCardTop">
                <span className="serviceIcon" aria-hidden="true">{calculator.icon}</span>
                <div>
                  <h2>{calculator.title}</h2>
                  <p>{calculator.description}</p>
                </div>
              </div>
              <div className="miniPrice">
                <span>Datenbasis</span>
                <strong>{calculator.fact}</strong>
              </div>
              <Link className="primaryButton" href={calculator.href}>{calculator.action}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section sectionAlt">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">Ergebnis richtig nutzen</span>
            <h2>Rechnerwerte sind Budgetorientierung, keine Angebote</h2>
            <p>
              Die Rechner verwenden dieselben Preisbänder und Regionalfaktoren wie die Kosten- und Stadtseiten.
              Objektzustand, Material, Zugänglichkeit, Vorarbeiten und konkrete Fachbetriebe können reale Angebote verändern.
            </p>
          </div>
          <div className="heroActions">
            <Link className="primaryButton" href="/kosten">Alle Handwerkerpreise</Link>
            <Link className="ghostButton" href="/ratgeber">Ratgeber lesen</Link>
            <Link className="ghostButton" href="/staedte">Städte vergleichen</Link>
            <Link className="ghostButton" href="/methodik">Methodik verstehen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
