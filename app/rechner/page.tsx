import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Baukosten Rechner 2026",
  description: "Kostenrechner für Renovierung und Handwerkerarbeiten in Deutschland. Gesamtbudget, Badsanierung oder einzelne Leistungen schnell kalkulieren.",
  alternates: { canonical: "/rechner" },
};

export default function CalculatorDirectoryPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <nav className="visibleBreadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Kostenrechner</span>
          </nav>
          <span className="eyebrow">BauKostenRadar Rechner</span>
          <h1>Kostenrechner für Renovierung und Handwerk</h1>
          <p>Gesamtbudget, Badsanierung oder einzelne Handwerkerleistungen mit transparenten Preisbändern kalkulieren.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell directoryGrid">
          <article className="directoryCard">
            <div className="directoryCardTop">
              <span className="serviceIcon" aria-hidden="true">∑</span>
              <div>
                <h2>Renovierungskosten-Rechner</h2>
                <p>Gesamtbudget nach Wohnfläche, Umfang, Qualitätsstandard und Region schätzen.</p>
              </div>
            </div>
            <Link className="primaryButton" href="/rechner/renovierungskosten">Renovierung berechnen</Link>
          </article>

          <article className="directoryCard">
            <div className="directoryCardTop">
              <span className="serviceIcon" aria-hidden="true">◫</span>
              <div>
                <h2>Badsanierungskosten-Rechner</h2>
                <p>Komplette Badsanierung nach Badgröße und Region mit transparentem m²-Richtwert schätzen.</p>
              </div>
            </div>
            <Link className="primaryButton" href="/rechner/badsanierungskosten">Badsanierung berechnen</Link>
          </article>

          <article className="directoryCard">
            <div className="directoryCardTop">
              <span className="serviceIcon" aria-hidden="true">€</span>
              <div>
                <h2>Handwerkerkosten-Rechner</h2>
                <p>Einzelne Arbeiten nach Gewerk, Preisposition, Menge und Region kalkulieren.</p>
              </div>
            </div>
            <Link className="primaryButton" href="/rechner/handwerkerkosten">Handwerkerkosten berechnen</Link>
          </article>
        </div>
      </section>
    </>
  );
}
