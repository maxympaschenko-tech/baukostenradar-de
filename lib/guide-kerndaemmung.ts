import type { Guide } from "./guides";

export const kerndaemmungGuide: Guide = {
  slug: "kerndaemmung-kosten-pro-qm",
  title: "Kerndämmung Kosten pro m² 2026",
  h1: "Kerndämmung Kosten 2026: Einblasdämmung der zweischaligen Fassade",
  description: "Kerndämmung Kosten 2026: Blauarbeit nennt etwa 15-30 €/m² für Einblasdämmung einer geeigneten zweischaligen Fassade, co2online etwa 25-60 €/m² für Dämmstoff und Montage. Beide Richtwerte werden getrennt eingeordnet.",
  eyebrow: "Kerndämmung & Einblasdämmung 2026",
  intro: "Eine Kerndämmung nutzt den vorhandenen Hohlraum einer zweischaligen Außenwand und wird häufig als Einblasdämmung ausgeführt. Weil Quellen den Leistungsumfang unterschiedlich abgrenzen, zeigt BauKostenRadar die hinterlegten 2026-Richtwerte getrennt statt daraus einen künstlichen Mittelwert zu bilden.",
  keyFact: "Blauarbeit: etwa 15-30 €/m² Fassadenfläche. co2online: etwa 25-60 €/m² für Dämmstoff und Montage bei geeigneter zweischaliger Außenwand.",
  sections: [
    {
      heading: "Was kostet Kerndämmung pro m² 2026?",
      paragraphs: [
        "In der BauKostenRadar-Datenbasis liegen zwei aktuelle Richtwert-Spannen für Kerndämmung beziehungsweise Einblasdämmung der Fassade vor. Blauarbeit nennt etwa 15 bis 30 Euro pro Quadratmeter Fassadenfläche für geeignetes zweischaliges Mauerwerk mit nutzbarer Hohlschicht.",
        "co2online wird im Fassaden-Katalog mit etwa 25 bis 60 Euro pro Quadratmeter für Dämmstoff und Montage bei einer geeigneten zweischaligen Außenwand geführt. Die Spannen werden bewusst nicht zusammengezogen, weil Quelle, Leistungsabgrenzung, Hohlraum und Baustellensituation den ausgewiesenen Preis beeinflussen können.",
      ],
      table: {
        headers: ["Datenquelle / Leistungsbild", "Richtwert 2026"],
        rows: [
          { cells: ["Blauarbeit: Kerndämmung / Einblasdämmung Fassade", "15-30 €/m²"], href: "/kosten/daemmung/leistung/kerndaemmung-einblasdaemmung-fassade" },
          { cells: ["co2online: Kerndämmung, Dämmstoff + Montage", "25-60 €/m²"], href: "/kosten/fassade/leistung/kerndaemmung-einblasdaemmung-fassade" },
        ],
      },
    },
    {
      heading: "Wann ist eine Kerndämmung überhaupt möglich?",
      paragraphs: ["Der günstige Quadratmeterpreis gilt nicht für jede Fassade. Voraussetzung ist eine geeignete zweischalige Konstruktion mit ausreichend breitem, zugänglichem und technisch nutzbarem Hohlraum. Vor der Ausführung sollte der Wandaufbau geprüft werden."],
      bullets: [
        "zweischaliges Außenmauerwerk mit nutzbarer Hohlschicht",
        "ausreichende und möglichst gleichmäßige Hohlraumbreite",
        "keine ungeklärten Feuchte- oder Schlagregenprobleme",
        "geeigneter Einblasdämmstoff für Wandaufbau und Exposition",
        "Bohrbild, Zugänglichkeit und Fassadenhöhe",
        "saubere Kontrolle der Hohlraumfüllung und Verschluss der Einblasöffnungen",
      ],
    },
    {
      heading: "Warum zwei Preisbereiche sinnvoll sind",
      paragraphs: [
        "Richtwerte aus unterschiedlichen Quellen können verschiedene typische Gebäude, Dämmstoffe, Mindestaufträge und enthaltene Nebenleistungen abbilden. Deshalb ist eine transparente Quellen-Trennung belastbarer als ein scheinbar genauer Durchschnittspreis.",
        "Für ein konkretes Angebot sollten Fassadenfläche, Hohlraumprüfung, Dämmstoff, Einblasarbeiten, Bohrungen, Verschlussarbeiten, Anfahrt und gegebenenfalls Gerüst eindeutig beschrieben sein. Erst dann sind Angebote wirklich vergleichbar.",
      ],
    },
  ],
  faqs: [
    { question: "Was kostet Kerndämmung pro Quadratmeter?", answer: "Die hinterlegten 2026-Quellen nennen unterschiedliche Spannen: Blauarbeit etwa 15-30 €/m² und co2online etwa 25-60 €/m². BauKostenRadar weist beide getrennt aus, weil der Leistungsumfang unterschiedlich abgegrenzt sein kann." },
    { question: "Ist Kerndämmung dasselbe wie Einblasdämmung?", answer: "Kerndämmung bezeichnet die Dämmung des Hohlraums einer zweischaligen Außenwand; häufig wird sie durch Einblasen eines geeigneten Dämmstoffs ausgeführt." },
    { question: "Kann jede Fassade per Kerndämmung gedämmt werden?", answer: "Nein. Die Außenwand muss zweischalig aufgebaut sein und einen technisch geeigneten Hohlraum besitzen. Der Bestand sollte vor der Ausführung geprüft werden." },
  ],
  related: [
    { label: "Kerndämmung Preisdetail Dämmung", href: "/kosten/daemmung/leistung/kerndaemmung-einblasdaemmung-fassade" },
    { label: "Kerndämmung Preisdetail Fassade", href: "/kosten/fassade/leistung/kerndaemmung-einblasdaemmung-fassade" },
    { label: "Fassadendämmung Kosten", href: "/ratgeber/fassadendaemmung-kosten-pro-qm" },
    { label: "Dämmung Kosten pro m²", href: "/ratgeber/daemmung-kosten-pro-qm" },
    { label: "Fassade Kostenübersicht", href: "/kosten/fassade" },
    { label: "Kerndämmung berechnen", href: "/rechner/handwerkerkosten?gewerk=daemmung&leistung=kerndaemmung-einblasdaemmung-fassade" },
  ],
};
