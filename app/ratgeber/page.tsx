import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Ratgeber zu Sanierungs- und Handwerkerkosten 2026",
  description: "Ratgeber zu Sanierungskosten, Handwerker-Stundensätzen, Altbausanierung und Wohnungsrenovierung mit Richtwerten, Beispielen und Rechnern.",
  alternates: { canonical: "/ratgeber" },
};

export default function GuidesPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Baukosten-Ratgeber</span>
          <h1>Sanierung und Handwerkerkosten verständlich erklärt</h1>
          <p>
            Praxisnahe Richtwerte, Rechenbeispiele und Einordnung für typische Kostenfragen rund um Renovierung,
            Sanierung und Handwerkerleistungen in Deutschland.
          </p>
          <div className="heroFacts">
            <span><strong>{guides.length}</strong> ausführliche Ratgeber</span>
            <span><strong>2026</strong> aktueller Datenstand</span>
            <span><strong>Transparent</strong> Modellwerte klar gekennzeichnet</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="directoryGrid">
            {guides.map((guide) => (
              <article className="directoryCard" key={guide.slug}>
                <span className="eyebrow">{guide.eyebrow}</span>
                <h2>{guide.title}</h2>
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

      <section className="section sectionAlt">
        <div className="shell twoColumn">
          <div>
            <span className="eyebrow">Direkt rechnen</span>
            <h2>Vom Ratgeber zur eigenen Kostenspanne</h2>
            <p>
              Die Ratgeber erklären die Größenordnung. Mit den Rechnern kannst du Fläche, Umfang, Region oder
              konkrete Einzelarbeiten direkt für dein eigenes Szenario anpassen.
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
