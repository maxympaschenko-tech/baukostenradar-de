import type { Metadata } from "next";
import Link from "next/link";
import { RenovationCalculator } from "@/components/renovation-calculator";

export const metadata: Metadata = {
  title: "Renovierungskosten Rechner 2026",
  description: "Renovierungskosten 2026 nach Wohnfläche, Sanierungsumfang, Standard und Region kalkulieren. Mit Richtwerten pro m² und weiterführenden Ratgebern.",
  alternates: { canonical: "/rechner/renovierungskosten" },
};

export default function RenovationCalculatorPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <nav className="visibleBreadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">›</span>
            <Link href="/rechner">Kostenrechner</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Renovierungskosten</span>
          </nav>
          <span className="eyebrow">Kostenloser Rechner</span>
          <h1>Renovierungskosten Rechner 2026</h1>
          <p>
            Ermitteln Sie eine erste Kostenspanne für Ihr Renovierungsprojekt und sehen Sie,
            wie sich Arbeits-, Material- und Reservenkosten zusammensetzen.
          </p>
        </div>
      </section>
      <div className="shell articleShell">
        <RenovationCalculator />

        <section className="contentCard proseCard">
          <span className="eyebrow">Richtwerte verstehen</span>
          <h2>Wie ordnet man das Ergebnis ein?</h2>
          <p>
            Der Rechner arbeitet mit vier Renovierungsstufen. Die Wohnfläche wird mit dem jeweiligen
            Quadratmeterband sowie dem gewählten Qualitäts- und Regionalfaktor kombiniert. Das Ergebnis ist eine
            Budgetorientierung und kein verbindlicher Angebotspreis.
          </p>
          <div className="sourceList">
            <Link href="/ratgeber/sanierungskosten-pro-qm">
              <strong>Sanierungskosten pro m² 2026</strong>
              <span>Alle vier Kostenstufen mit Beispielen vergleichen</span>
            </Link>
            <Link href="/ratgeber/kernsanierung-kosten">
              <strong>Kernsanierung Kosten 2026</strong>
              <span>1.500 bis 3.500 €/m² und konkrete Flächenbeispiele</span>
            </Link>
            <Link href="/ratgeber/renovierungskosten-100-qm">
              <strong>Renovierungskosten 100 m²</strong>
              <span>Budgetspannen für 100 m² nach Sanierungsumfang</span>
            </Link>
            <Link href="/ratgeber/sanierungskosten-einfamilienhaus">
              <strong>Sanierungskosten Einfamilienhaus</strong>
              <span>Gebäudehülle, Haustechnik und Innenausbau getrennt einordnen</span>
            </Link>
            <Link href="/ratgeber/altbausanierung-kosten">
              <strong>Altbausanierung Kosten 2026</strong>
              <span>Umfangreiche Sanierung und Kernsanierung einordnen</span>
            </Link>
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Einzelgewerke</span>
          <h2>Vom Gesamtbudget zu konkreten Arbeiten</h2>
          <p>
            Für eine genauere Planung sollten große Einzelgewerke zusätzlich separat geprüft werden. Dafür stehen
            der Handwerkerkosten-Rechner und die einzelnen Preisbereiche mit Quellen und regionalen Vergleichen zur Verfügung.
          </p>
          <div className="heroActions">
            <Link className="primaryButton" href="/rechner/handwerkerkosten">Handwerkerkosten berechnen</Link>
            <Link className="ghostButton" href="/kosten">Alle Preisbereiche ansehen</Link>
            <Link className="ghostButton" href="/methodik">Methodik & Quellen</Link>
          </div>
        </section>
      </div>
    </>
  );
}
