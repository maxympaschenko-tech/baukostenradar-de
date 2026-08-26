import type { Metadata } from "next";
import { priceSources } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Methodik und Datenquellen",
  description: "So sammelt, prüft und strukturiert BauKostenRadar Handwerker- und Renovierungspreise für Deutschland.",
  alternates: { canonical: "/methodik" },
};

export default function MethodologyPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Transparenz</span>
          <h1>Methodik und Datenquellen</h1>
          <p>So entstehen die Richtwerte, Rechner und regionalen Einordnungen auf BauKostenRadar.</p>
        </div>
      </section>

      <div className="shell articleShell">
        <section className="contentCard proseCard">
          <h2>1. Was unsere Preise bedeuten</h2>
          <p>
            BauKostenRadar veröffentlicht unverbindliche Orientierungswerte. Sie sollen helfen,
            ein Budget vorzubereiten und Angebote besser einzuordnen. Ein Richtwert ist kein Angebot
            und kein Festpreis. Objektzustand, Region, Material, Zugänglichkeit und Auftragsgröße können
            den tatsächlichen Preis deutlich verändern.
          </p>
        </section>

        <section className="contentCard proseCard">
          <h2>2. Wie wir Daten auswählen</h2>
          <p>
            Wir bevorzugen aktuelle deutsche Preisübersichten mit klarer Einheit, nachvollziehbarem
            Datenstand und konkreter Preisspanne. Werte werden nicht als einzelne Durchschnittszahl
            übernommen, wenn die Quelle selbst eine Bandbreite nennt.
          </p>
        </section>

        <section className="contentCard proseCard">
          <h2>3. Quellen im aktuellen Datenstand</h2>
          <div className="sourceList">
            {Object.entries(priceSources).map(([key, source]) => (
              <a key={key} href={source.url} target="_blank" rel="noreferrer">
                <strong>{source.name}</strong>
                <span>Geprüft: {source.checkedAt}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="contentCard proseCard">
          <h2>4. Regionale Faktoren</h2>
          <p>
            Regionale Faktoren im Rechner sind ein Modell zur ersten Einordnung. Sie stellen keinen
            pauschalen Marktaufschlag für jede einzelne Leistung dar. Verschiedene Gewerke reagieren
            unterschiedlich auf Lohnniveau, Nachfrage, Anfahrt und lokale Materialkosten. Deshalb werden
            Stadtfaktoren später schrittweise durch gewerkspezifische lokale Daten ersetzt.
          </p>
        </section>

        <section className="contentCard proseCard">
          <h2>5. Renovierungskosten-Rechner</h2>
          <p>
            Der Gesamtrechner arbeitet mit Kostenbändern pro Quadratmeter für unterschiedliche
            Renovierungsumfänge und wendet Qualitäts- und Regionalfaktoren an. Die Aufteilung in Arbeit,
            Material und Reserve ist eine Modellierung für die Budgetplanung und keine Aussage über ein
            konkretes Handwerkerangebot.
          </p>
        </section>
      </div>
    </>
  );
}
