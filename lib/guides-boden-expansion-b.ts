import type { Guide } from "@/lib/guides";

function baseRelated(itemSlug: string, label: string) {
  return [
    { label: `${label} Preisdetail`, href: `/kosten/bodenleger/leistung/${itemSlug}` },
    { label: "Bodenleger Kosten", href: "/kosten/bodenleger" },
    { label: "Bodenlegerkosten-Rechner", href: `/rechner/handwerkerkosten?gewerk=bodenleger&leistung=${itemSlug}` },
  ];
}

export const bodenExpansionGuidesB: Guide[] = [
  {
    slug: "bodenbelag-entfernen-kosten-pro-qm",
    title: "Bodenbelag entfernen Kosten pro m² 2026",
    h1: "Alten Bodenbelag entfernen und entsorgen: Kosten 2026 pro m²",
    description: "Alten Bodenbelag entfernen Kosten 2026: aktueller Richtwert von 5-20 €/m² inklusive Entsorgung, Kostentreiber und Beispielbudgets.",
    eyebrow: "Bodenrückbau 2026",
    intro: "Vor einer Neuverlegung muss der vorhandene Belag häufig vollständig entfernt werden. Der Aufwand hängt stark davon ab, ob Teppich, Vinyl, Laminat oder verklebte Altbeläge zurückgebaut werden.",
    keyFact: "Alten Bodenbelag entfernen und entsorgen etwa 5-20 €/m²",
    sections: [
      {
        heading: "Was kostet das Entfernen alter Bodenbeläge pro m²?",
        paragraphs: [
          "Die aktuelle BauKostenRadar-Datenbasis führt für das Entfernen und Entsorgen alter Bodenbeläge etwa 5 bis 20 Euro pro Quadratmeter.",
          "Für 50 m² ergibt sich daraus rechnerisch eine Orientierung von etwa 250 bis 1.000 Euro.",
        ],
        table: { headers: ["Fläche", "Budgetorientierung"], rows: [
          { cells: ["30 m²", "150-600 €"] },
          { cells: ["50 m²", "250-1.000 €"] },
          { cells: ["100 m²", "500-2.000 €"] },
        ] },
      },
      {
        heading: "Welche Faktoren verändern den Rückbaupreis?",
        paragraphs: ["Besonders die Art der Befestigung entscheidet darüber, ob der Altbelag schnell aufgenommen werden kann oder aufwendig gelöst werden muss."],
        bullets: ["Lose oder schwimmende Verlegung", "Vollflächige Verklebung", "Mehrere Altbelagsschichten", "Kleber- und Spachtelreste", "Entsorgungsmenge und Materialart", "Zugang, Geschoss und Transportweg"],
      },
      {
        heading: "Rückbau und Untergrundvorbereitung getrennt prüfen",
        paragraphs: [
          "Nach dem Entfernen kann der Untergrund zusätzliche Arbeiten benötigen. Spachteln, Schleifen und Ausgleichen sind deshalb nicht automatisch Bestandteil des Rückbaupreises.",
          "Für einen sauberen Angebotsvergleich sollten Rückbau, Entsorgung und anschließende Untergrundvorbereitung einzeln ausgewiesen sein.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Bodenbelag entfernen pro m² 2026?", answer: "BauKostenRadar führt aktuell etwa 5 bis 20 Euro pro Quadratmeter inklusive Entsorgung." },
      { question: "Was kostet der Rückbau bei 50 m²?", answer: "Rechnerisch etwa 250 bis 1.000 Euro." },
      { question: "Ist das Ausgleichen des Bodens enthalten?", answer: "Nicht automatisch. Untergrund vorbereiten und ausgleichen wird als separate Preisposition geführt." },
    ],
    related: [
      ...baseRelated("alten-bodenbelag-entfernen-entsorgen", "Bodenbelag entfernen"),
      { label: "Untergrund vorbereiten Kosten", href: "/ratgeber/boden-vorbereiten-ausgleichen-kosten-pro-qm" },
      { label: "Boden sanieren Kosten", href: "/ratgeber/boden-sanieren-kosten-pro-qm" },
    ],
  },
  {
    slug: "boden-vorbereiten-ausgleichen-kosten-pro-qm",
    title: "Boden vorbereiten und ausgleichen Kosten pro m² 2026",
    h1: "Untergrund vorbereiten und ausgleichen: Kosten 2026 pro m²",
    description: "Boden vorbereiten und ausgleichen Kosten 2026: aktueller Richtwert von 12-50 €/m², Spachteln, Unebenheiten und Beispielbudgets.",
    eyebrow: "Untergrund 2026",
    intro: "Ein ebener und tragfähiger Untergrund ist Voraussetzung für viele neue Bodenbeläge. Der Aufwand reicht von leichtem Spachteln bis zu umfangreicherem Ausgleich bei Schäden und deutlichen Unebenheiten.",
    keyFact: "Untergrund vorbereiten und ausgleichen etwa 12-50 €/m²",
    sections: [
      {
        heading: "Was kostet Untergrund vorbereiten und ausgleichen pro m²?",
        paragraphs: [
          "BauKostenRadar führt aktuell etwa 12 bis 50 Euro pro Quadratmeter für Untergrundvorbereitung und Ausgleich.",
          "Bei 50 m² ergibt sich damit rechnerisch eine Budgetorientierung von etwa 600 bis 2.500 Euro.",
        ],
        table: { headers: ["Fläche", "Budgetorientierung"], rows: [
          { cells: ["30 m²", "360-1.500 €"] },
          { cells: ["50 m²", "600-2.500 €"] },
          { cells: ["100 m²", "1.200-5.000 €"] },
        ] },
      },
      {
        heading: "Was beeinflusst die Kosten?",
        paragraphs: ["Je schlechter der Bestand, desto größer der Material- und Zeitbedarf für einen verlegefertigen Untergrund."],
        bullets: ["Tiefe und Anzahl der Unebenheiten", "Risse und lose Bereiche", "Kleberreste", "Notwendige Grundierung", "Spachtelmasse und Schichtdicke", "Trocknungs- und Schleifaufwand"],
      },
      {
        heading: "Warum die Vorbereitung vor Vinyl und Parkett wichtig ist",
        paragraphs: [
          "Besonders Klebe-Vinyl und vollflächig verklebtes Parkett benötigen einen sehr gleichmäßigen Untergrund. Fehler im Bodenaufbau können sich später im Belag abzeichnen.",
          "Bei Angeboten sollte deshalb klar sein, ob der Untergrund bereits als verlegefertig angenommen wird oder zusätzliche Ausgleichsarbeiten einkalkuliert sind.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Boden ausgleichen pro m² 2026?", answer: "BauKostenRadar führt für Untergrund vorbereiten und ausgleichen aktuell etwa 12 bis 50 Euro pro Quadratmeter." },
      { question: "Was kosten 50 m² Untergrundvorbereitung?", answer: "Rechnerisch etwa 600 bis 2.500 Euro." },
      { question: "Ist alter Bodenbelag entfernen enthalten?", answer: "Nicht automatisch. Der Rückbau und die Entsorgung alter Bodenbeläge werden separat geführt." },
    ],
    related: [
      ...baseRelated("untergrund-vorbereiten-ausgleichen", "Untergrund vorbereiten"),
      { label: "Bodenbelag entfernen Kosten", href: "/ratgeber/bodenbelag-entfernen-kosten-pro-qm" },
      { label: "Klebe-Vinyl Arbeitskosten", href: "/ratgeber/klebe-vinyl-verlegen-kosten-pro-qm" },
    ],
  },
];
