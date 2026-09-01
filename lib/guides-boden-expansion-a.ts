import type { Guide } from "@/lib/guides";

function baseRelated(itemSlug: string, label: string) {
  return [
    { label: `${label} Preisdetail`, href: `/kosten/bodenleger/leistung/${itemSlug}` },
    { label: "Bodenleger Kosten", href: "/kosten/bodenleger" },
    { label: "Bodenlegerkosten-Rechner", href: `/rechner/handwerkerkosten?gewerk=bodenleger&leistung=${itemSlug}` },
  ];
}

export const bodenExpansionGuidesA: Guide[] = [
  {
    slug: "bodenleger-stundensatz",
    title: "Bodenleger Stundensatz 2026",
    h1: "Bodenleger Stundensatz 2026: Kosten pro Arbeitsstunde",
    description: "Bodenleger Stundensatz 2026: aktueller Richtwert von 40-60 €/h, typische Einsatzfälle, Nebenkosten und Vergleich mit Quadratmeterpreisen.",
    eyebrow: "Bodenleger 2026",
    intro: "Bei Reparaturen, kleinen Flächen oder schwer kalkulierbaren Vorarbeiten rechnen Bodenleger teilweise nach Zeit ab. Für größere Verlegeflächen sind Quadratmeterpreise meist besser vergleichbar.",
    keyFact: "Bodenleger etwa 40-60 € pro Stunde",
    sections: [
      {
        heading: "Was kostet ein Bodenleger pro Stunde?",
        paragraphs: [
          "Die aktuelle BauKostenRadar-Datenbasis führt für einen Bodenleger etwa 40 bis 60 Euro pro Stunde als Richtwert.",
          "Der Verrechnungssatz ist nicht mit dem Stundenlohn gleichzusetzen: Fahrzeug, Werkzeug, Verwaltung, Versicherungen und betriebliche Gemeinkosten sind darin mitfinanziert.",
        ],
      },
      {
        heading: "Wann wird nach Stunden abgerechnet?",
        paragraphs: ["Zeitabrechnung ist vor allem dort üblich, wo der tatsächliche Aufwand vor Beginn nur schwer exakt feststeht."],
        bullets: ["Kleine Reparaturen und Nacharbeiten", "Untergrundprüfung und lokale Ausbesserungen", "Komplizierte Zuschnitte", "Demontage einzelner Bereiche", "Arbeiten mit unklarem Bestandszustand"],
      },
      {
        heading: "Stundensatz oder Preis pro m² vergleichen",
        paragraphs: [
          "Für Vinyl, Laminat und Parkett sind flächenbezogene Angebote meist transparenter. BauKostenRadar führt deshalb zusätzlich konkrete Quadratmeterpositionen für Verlegung, Rückbau und Untergrundvorbereitung.",
          "Bei Angeboten sollten Anfahrt, Mindestberechnung, Material und Entsorgung getrennt vom reinen Stundensatz geprüft werden.",
        ],
      },
    ],
    faqs: [
      { question: "Wie hoch ist der Bodenleger-Stundensatz 2026?", answer: "BauKostenRadar führt aktuell etwa 40 bis 60 Euro pro Stunde als Orientierung." },
      { question: "Ist Material im Stundensatz enthalten?", answer: "Normalerweise nicht automatisch. Material und Verbrauchsmittel sollten im Angebot separat ausgewiesen werden." },
      { question: "Sind Quadratmeterpreise besser vergleichbar?", answer: "Bei klar definierten größeren Flächen häufig ja, weil der Leistungsumfang leichter zwischen mehreren Angeboten verglichen werden kann." },
    ],
    related: [
      ...baseRelated("bodenleger-stundensatz", "Bodenleger Stundensatz"),
      { label: "Vinylboden verlegen Kosten", href: "/ratgeber/vinylboden-verlegen-kosten-pro-qm" },
      { label: "Boden sanieren Kosten", href: "/ratgeber/boden-sanieren-kosten-pro-qm" },
    ],
  },
  {
    slug: "klick-vinyl-verlegen-kosten-pro-qm",
    title: "Klick-Vinyl verlegen Kosten pro m² 2026",
    h1: "Klick-Vinyl verlegen: Arbeitskosten 2026 pro m²",
    description: "Klick-Vinyl verlegen Kosten 2026: 12-20 €/m² reine Verlegearbeit, Beispielbudgets, Untergrund und Abgrenzung zu Materialkosten.",
    eyebrow: "Klick-Vinyl 2026",
    intro: "Klick-Vinyl wird schwimmend verlegt und ist bei geeignetem Untergrund vergleichsweise schnell montiert. Der aktuelle Richtwert bezieht sich ausdrücklich auf die reine Verlegearbeit ohne Bodenmaterial.",
    keyFact: "Klick-Vinyl verlegen etwa 12-20 €/m² Arbeit",
    sections: [
      {
        heading: "Was kostet Klick-Vinyl verlegen pro m²?",
        paragraphs: [
          "BauKostenRadar führt aktuell etwa 12 bis 20 Euro pro Quadratmeter für die reine Verlegearbeit.",
          "Für 50 m² ergeben sich damit rechnerisch etwa 600 bis 1.000 Euro Arbeitskosten, bevor Material, Sockelleisten oder Untergrundarbeiten hinzukommen.",
        ],
        table: { headers: ["Fläche", "Arbeitskosten"], rows: [
          { cells: ["30 m²", "360-600 €"] },
          { cells: ["50 m²", "600-1.000 €"] },
          { cells: ["100 m²", "1.200-2.000 €"] },
        ] },
      },
      {
        heading: "Welche Zusatzkosten sind häufig?",
        paragraphs: ["Entscheidend ist, ob der vorhandene Boden bereits verlegefertig ist."],
        bullets: ["Alten Bodenbelag entfernen", "Untergrund spachteln oder ausgleichen", "Trittschalldämmung", "Sockelleisten", "Türblätter kürzen", "Viele Ecken und Zuschnitte"],
      },
      {
        heading: "Arbeitskosten und Komplettpreis unterscheiden",
        paragraphs: [
          "Die Position Klick-Vinyl verlegen enthält kein neues Vinylmaterial. Für einen Komplettpreis inklusive Material führt BauKostenRadar separat die Position Vinylboden Klick inklusive Material.",
          "Beim Angebotsvergleich sollten deshalb nur Positionen mit identischem Leistungsumfang gegenübergestellt werden.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Klick-Vinyl verlegen 2026?", answer: "Für die reine Verlegearbeit führt BauKostenRadar aktuell etwa 12 bis 20 Euro pro Quadratmeter." },
      { question: "Was kosten 50 m² Klick-Vinyl an Arbeitslohn?", answer: "Rechnerisch etwa 600 bis 1.000 Euro für die Verlegung." },
      { question: "Ist das Vinylmaterial enthalten?", answer: "Nein. Dieser Richtwert beschreibt ausdrücklich die reine Verlegearbeit." },
    ],
    related: [
      ...baseRelated("klick-vinyl-verlegen", "Klick-Vinyl verlegen"),
      { label: "Vinylboden inklusive Material", href: "/ratgeber/vinylboden-verlegen-kosten-pro-qm" },
      { label: "Untergrund vorbereiten Kosten", href: "/ratgeber/boden-vorbereiten-ausgleichen-kosten-pro-qm" },
    ],
  },
  {
    slug: "klebe-vinyl-verlegen-kosten-pro-qm",
    title: "Klebe-Vinyl verlegen Kosten pro m² 2026",
    h1: "Klebe-Vinyl verlegen: Arbeitskosten 2026 pro m²",
    description: "Klebe-Vinyl verlegen Kosten 2026: 10-30 €/m² reine Verlegearbeit, Untergrundanforderungen, Beispielbudgets und Vergleich mit Klick-Vinyl.",
    eyebrow: "Klebe-Vinyl 2026",
    intro: "Klebe-Vinyl wird vollflächig auf dem vorbereiteten Untergrund verklebt. Unebenheiten zeichnen sich leichter ab als bei schwimmender Verlegung, deshalb ist die Untergrundqualität für das Gesamtbudget besonders wichtig.",
    keyFact: "Klebe-Vinyl verlegen etwa 10-30 €/m² Arbeit",
    sections: [
      {
        heading: "Was kostet Klebe-Vinyl verlegen pro m²?",
        paragraphs: [
          "Die aktuelle BauKostenRadar-Datenbasis führt für Klebe-Vinyl etwa 10 bis 30 Euro pro Quadratmeter reine Verlegearbeit.",
          "Bei 50 m² entspricht das rechnerisch etwa 500 bis 1.500 Euro Arbeitskosten ohne neues Vinylmaterial und ohne zusätzliche Untergrundarbeiten.",
        ],
        table: { headers: ["Fläche", "Arbeitskosten"], rows: [
          { cells: ["30 m²", "300-900 €"] },
          { cells: ["50 m²", "500-1.500 €"] },
          { cells: ["100 m²", "1.000-3.000 €"] },
        ] },
      },
      {
        heading: "Warum ist der Untergrund so wichtig?",
        paragraphs: ["Bei verklebtem Vinyl muss die Fläche besonders eben, tragfähig und sauber sein."],
        bullets: ["Spachteln und Ausgleichen", "Altbelag und Kleberreste entfernen", "Grundierung", "Feuchte und Tragfähigkeit prüfen", "Trocknungszeiten einhalten", "Saubere Anschlussdetails"],
      },
      {
        heading: "Klebe-Vinyl oder Klick-Vinyl?",
        paragraphs: [
          "Klick-Vinyl liegt in der aktuellen Datenbasis bei etwa 12 bis 20 Euro pro Quadratmeter reine Verlegearbeit. Klebe-Vinyl hat mit 10 bis 30 Euro eine breitere Spanne.",
          "Der niedrigere reine Verlegepreis bedeutet nicht automatisch ein günstigeres Gesamtprojekt, wenn umfangreiche Untergrundvorbereitung nötig ist.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Klebe-Vinyl verlegen 2026?", answer: "BauKostenRadar führt aktuell etwa 10 bis 30 Euro pro Quadratmeter reine Verlegearbeit." },
      { question: "Was kosten 50 m² Klebe-Vinyl an Arbeitslohn?", answer: "Rechnerisch etwa 500 bis 1.500 Euro." },
      { question: "Sind Spachtelarbeiten enthalten?", answer: "Nicht automatisch. Untergrund vorbereiten und ausgleichen wird als eigene Preisposition geführt." },
    ],
    related: [
      ...baseRelated("klebe-vinyl-verlegen", "Klebe-Vinyl verlegen"),
      { label: "Klick-Vinyl Arbeitskosten", href: "/ratgeber/klick-vinyl-verlegen-kosten-pro-qm" },
      { label: "Untergrund vorbereiten Kosten", href: "/ratgeber/boden-vorbereiten-ausgleichen-kosten-pro-qm" },
    ],
  },
];
