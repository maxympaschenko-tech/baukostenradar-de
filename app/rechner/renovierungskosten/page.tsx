import type { Metadata } from "next";
import { RenovationCalculator } from "@/components/renovation-calculator";

export const metadata: Metadata = {
  title: "Renovierungskosten Rechner",
  description: "Renovierungskosten nach Wohnfläche, Zustand, Standard und Region kalkulieren.",
  alternates: { canonical: "/rechner/renovierungskosten" },
};

export default function RenovationCalculatorPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Kostenloser Rechner</span>
          <h1>Renovierungskosten Rechner</h1>
          <p>
            Ermitteln Sie eine erste Kostenspanne für Ihr Renovierungsprojekt und sehen Sie,
            wie sich Arbeits-, Material- und Reservenkosten zusammensetzen.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell" style={{ maxWidth: 900 }}>
          <RenovationCalculator />
        </div>
      </section>
    </>
  );
}
