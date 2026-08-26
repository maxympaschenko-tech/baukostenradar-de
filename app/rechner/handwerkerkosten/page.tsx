import type { Metadata } from "next";
import Link from "next/link";
import { TradeCostCalculator } from "@/components/trade-cost-calculator";
import { services } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Handwerkerkosten Rechner 2026",
  description: "Handwerkerkosten online berechnen: Gewerk, Leistung, Menge und Region auswählen und sofort eine unverbindliche Kostenspanne erhalten.",
  alternates: { canonical: "/rechner/handwerkerkosten" },
};

export default function HandwerkerCostCalculatorPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <nav className="visibleBreadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">›</span>
            <Link href="/rechner">Kostenrechner</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Handwerkerkosten</span>
          </nav>
          <span className="eyebrow">Kostenrechner Deutschland</span>
          <h1>Handwerkerkosten Rechner 2026</h1>
          <p>
            Berechnen Sie typische Kosten einzelner Arbeiten auf Basis der strukturierten Preisbänder von BauKostenRadar.
            Wählen Sie Leistung, Menge und Region und erhalten Sie sofort eine grobe Kostenspanne.
          </p>
        </div>
      </section>

      <div className="shell articleShell">
        <TradeCostCalculator />

        <section className="contentCard proseCard">
          <span className="eyebrow">Datenbasis</span>
          <h2>Welche Leistungen sind enthalten?</h2>
          <p>
            Der Rechner greift direkt auf die Preispositionen aus unserem Preisspiegel zu. Dadurch werden dieselben
            Richtwerte in Kostenartikeln, Stadtseiten und Rechnern verwendet.
          </p>
          <div className="regionChips">
            {services.map((service) => (
              <Link className="regionChip" key={service.slug} href={`/kosten/${service.slug}`}>
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Ratgeber</span>
          <h2>Handwerkerpreise besser einordnen</h2>
          <p>
            Einzelpreise sind leichter zu bewerten, wenn Stundensätze, Projektumfang und das Gesamtbudget getrennt
            betrachtet werden. Diese Ratgeber ergänzen die Rechnerwerte mit Beispielen und Hintergründen.
          </p>
          <div className="sourceList">
            <Link href="/ratgeber/handwerker-stundensaetze">
              <strong>Handwerker-Stundensätze 2026</strong>
              <span>Stundensätze ausgewählter Gewerke vergleichen</span>
            </Link>
            <Link href="/ratgeber/sanierungskosten-pro-qm">
              <strong>Sanierungskosten pro m² 2026</strong>
              <span>Einzelarbeiten in das Gesamtbudget einordnen</span>
            </Link>
            <Link href="/ratgeber/altbausanierung-kosten">
              <strong>Altbausanierung Kosten 2026</strong>
              <span>Technische Gewerke im Bestand richtig priorisieren</span>
            </Link>
          </div>
        </section>

        <section className="contentCard proseCard">
          <span className="eyebrow">Hinweis</span>
          <h2>Warum ist das Ergebnis nur eine Orientierung?</h2>
          <p>
            Konkrete Handwerkerangebote hängen unter anderem von Objektzustand, Mindestauftragswert, Material,
            Zugänglichkeit, Anfahrt, Auslastung und notwendigen Vorarbeiten ab. Der Rechner ist deshalb für eine erste
            Budgetplanung gedacht und ersetzt kein Angebot eines Fachbetriebs.
          </p>
          <Link className="textLink" href="/methodik">Methodik und Quellen ansehen →</Link>
        </section>
      </div>
    </>
  );
}
