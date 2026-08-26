import type { Metadata } from "next";
import Link from "next/link";
import { allGuides } from "@/lib/all-guides";

export const metadata: Metadata = {
  title: "Ratgeber zu Sanierung, Renovierung & Handwerkerkosten 2026",
  description: "Ratgeber zu Sanierungskosten, Dach, Fenster, Elektrik, Heizung, Türen, Estrich, Maurerarbeiten, Treppen, Küchenrenovierung und konkreten Projektgrößen mit Richtwerten und Beispielbudgets.",
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
    title: "Türen, Estrich, Mauern, Treppen und Küche konkret kalkulieren",
    description: "Weitere typische Renovierungsszenarien mit klarer Rechenbasis statt pauschaler Durchschnittswerte.",
    slugs: [
      "6-innentueren-austauschen-kosten",
      "estrich-100-qm-kosten",
      "innenwand-mauern-kosten",
      "14-treppenstufen-renovieren-kosten",
      "kueche-10-qm-renovieren-kosten",
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
  return (
    <>
      <section className="contentHero">
        <div className="shell">
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

      {guideGroups.map((group, index) => {
        const groupGuides = group.slugs.map(guideBySlug).filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

        return (
          <section className={`section${index % 2 === 1 ? " sectionAlt" : ""}`} key={group.title}>
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
            <Link className="ghostButton" href="/kosten">Alle Preisbereiche</Link>
          </div>
        </div>
      </section>
    </>
  );
}
