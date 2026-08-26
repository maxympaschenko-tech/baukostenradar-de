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
            <Link href="/ratgeber/wohnung-renovieren-kosten">
              <strong>Wohnung renovieren: Kosten 2026</strong>
              <span>Beispiele für 60, 80 und 100 m²</span>
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
