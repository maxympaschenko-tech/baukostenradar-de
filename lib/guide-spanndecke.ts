import type { Guide } from "@/lib/guides";

export const spanndeckeGuide: Guide = {
  slug: "spanndecke-kosten-pro-qm",
  title: "Spanndecke Kosten pro m² 2026",
  h1: "Spanndecke montieren: Kosten 2026 pro m²",
  description: "Spanndecke Kosten 2026: aktueller Richtwert von 120-130 €/m² inklusive Montage, Zusatzkosten für Licht, Design und schwierige Raumgeometrie.",
  eyebrow: "Spanndecke 2026",
  intro: "Spanndecken werden unterhalb der vorhandenen Decke montiert und können Oberflächen schnell optisch erneuern. Der aktuelle BauKostenRadar-Richtwert bezieht sich auf eine typische Spanndecke inklusive Montage; Licht-, Design- und Akustikvarianten können darüber liegen.",
  keyFact: "Spanndecke etwa 120-130 €/m² inklusive Montage",
  sections: [
    {
      heading: "Was kostet eine Spanndecke pro m²?",
      paragraphs: [
        "Die aktuelle BauKostenRadar-Datenbasis führt für eine typische Spanndecke etwa 120 bis 130 Euro pro Quadratmeter inklusive Montage.",
        "Für 20 m² ergibt sich daraus rechnerisch eine Orientierung von etwa 2.400 bis 2.600 Euro. Sonderausstattung und zusätzliche Elektroarbeiten sind nicht automatisch enthalten.",
      ],
      table: { headers: ["Deckenfläche", "Budgetorientierung"], rows: [
        { cells: ["10 m²", "1.200-1.300 €"] },
        { cells: ["20 m²", "2.400-2.600 €"] },
        { cells: ["40 m²", "4.800-5.200 €"] },
      ] },
    },
    {
      heading: "Welche Faktoren erhöhen den Preis?",
      paragraphs: ["Der Quadratmeterwert ist eine Orientierung für eine typische Ausführung. Komplexere Gestaltung kann den Gesamtpreis deutlich verändern."],
      bullets: ["Integrierte Spots und Lichtlinien", "Mehrfarbige oder bedruckte Flächen", "Akustik- oder Designvarianten", "Viele Ecken und Ausschnitte", "Große Raumhöhen", "Zusätzliche Elektroarbeiten"],
    },
    {
      heading: "Spanndecke oder abgehängte Trockenbaudecke?",
      paragraphs: [
        "Eine klassische abgehängte Trockenbaudecke wird in der aktuellen Datenbasis separat geführt und hat einen anderen Aufbau sowie andere Folgearbeiten.",
        "Vergleichen Sie deshalb nicht nur den Quadratmeterpreis, sondern auch Oberfläche, Beleuchtung, Installationsraum und notwendige Malerarbeiten.",
      ],
    },
  ],
  faqs: [
    { question: "Was kostet eine Spanndecke pro m² 2026?", answer: "BauKostenRadar führt aktuell etwa 120 bis 130 Euro pro Quadratmeter inklusive Montage als Orientierung." },
    { question: "Was kostet eine Spanndecke für 20 m²?", answer: "Rechnerisch etwa 2.400 bis 2.600 Euro auf Basis der aktuellen Standardspanne." },
    { question: "Sind Spots und Beleuchtung enthalten?", answer: "Nicht automatisch. Licht-, Design- und Akustikvarianten können zusätzliche Kosten verursachen." },
  ],
  related: [
    { label: "Spanndecke Preisdetail", href: "/kosten/trockenbau/leistung/spanndecke" },
    { label: "Trockenbau Kosten", href: "/kosten/trockenbau" },
    { label: "Decke abhängen Kosten", href: "/ratgeber/decke-abhaengen-kosten-pro-qm" },
    { label: "Trockenbau Kosten pro m²", href: "/ratgeber/trockenbau-kosten-pro-qm" },
    { label: "Spanndecke berechnen", href: "/rechner/handwerkerkosten?gewerk=trockenbau&leistung=spanndecke" },
  ],
};
