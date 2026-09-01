import type { Guide } from "./guides";

export const pooltechnikGuide: Guide = {
  slug: "pooltechnik-kosten",
  title: "Pooltechnik Kosten 2026",
  h1: "Pooltechnik: Kosten 2026 für Filteranlage, Pumpe und Verrohrung",
  description: "Pooltechnik Kosten 2026: Filteranlage etwa 400-2.500 €, Poolpumpe 200-1.500 € und Verrohrung mit Skimmer und Düsen etwa 300-1.200 €.",
  eyebrow: "Pooltechnik 2026",
  intro: "Filteranlage, Umwälzpumpe und Verrohrung bilden das technische Grundsystem eines Pools. Für einen belastbaren Angebotsvergleich sollten diese Komponenten getrennt vom Beckenpreis betrachtet werden, weil Dimensionierung und Ausführung den Technikpreis deutlich verändern können.",
  keyFact: "Filteranlage etwa 400-2.500 €, Poolpumpe 200-1.500 €, Verrohrung mit Skimmer und Düsen etwa 300-1.200 €.",
  sections: [
    {
      heading: "Was kostet Pooltechnik 2026?",
      paragraphs: [
        "Aroundhome nennt für eine Filteranlage eine Orientierung von etwa 400 bis 2.500 Euro. Eine Poolpumpe liegt etwa bei 200 bis 1.500 Euro.",
        "Für Verrohrung, Skimmer und Düsen wird als Projektposition etwa 300 bis 1.200 Euro angesetzt. Diese Technikblöcke sollten im Angebot nachvollziehbar getrennt sein.",
      ],
      table: {
        headers: ["Pooltechnik", "Richtwert 2026"],
        rows: [
          { cells: ["Filteranlage", "400-2.500 €"], href: "/kosten/poolbau/leistung/filteranlage" },
          { cells: ["Poolpumpe", "200-1.500 €"], href: "/kosten/poolbau/leistung/poolpumpe" },
          { cells: ["Verrohrung, Skimmer und Düsen", "300-1.200 €"], href: "/kosten/poolbau/leistung/verrohrung-skimmer-und-duesen" },
        ],
      },
    },
    {
      heading: "Welche Faktoren beeinflussen die Technik?",
      paragraphs: ["Die Technik muss zum Beckenvolumen und zur gewünschten Nutzung passen. Ein niedriger Einzelpreis ist deshalb nur sinnvoll vergleichbar, wenn Leistung und Lieferumfang ähnlich sind."],
      bullets: [
        "Beckenvolumen und erforderliche Umwälzleistung",
        "Filtertyp und Dimensionierung der Filteranlage",
        "Leistung und Effizienz der Poolpumpe",
        "Rohrdurchmesser und Leitungslängen",
        "Anzahl und Position von Skimmern und Einlaufdüsen",
        "Zugänglichkeit des Technikraums und Montageaufwand",
      ],
    },
    {
      heading: "Pooltechnik und Beckenpreis getrennt kalkulieren",
      paragraphs: [
        "Bei Komplettangeboten kann Technik bereits enthalten sein. Bei Becken-, Bausatz- oder Rohbauangeboten muss sie dagegen häufig separat ergänzt werden. Doppelzählungen lassen sich vermeiden, wenn Filteranlage, Pumpe und Verrohrung im Leistungsverzeichnis einzeln erkennbar sind.",
        "Für die Gesamtplanung gehören außerdem Erdarbeiten, Beckenbau und spätere Betriebskosten in getrennte Budgetblöcke.",
      ],
    },
  ],
  faqs: [
    { question: "Was kostet eine Filteranlage für den Pool?", answer: "Als aktuelle Orientierung nennt Aroundhome etwa 400 bis 2.500 Euro pro Anlage." },
    { question: "Was kostet eine Poolpumpe?", answer: "Für eine Poolpumpe liegt die aktuelle Orientierung bei etwa 200 bis 1.500 Euro." },
    { question: "Was kosten Verrohrung, Skimmer und Düsen?", answer: "Als Projektposition werden etwa 300 bis 1.200 Euro genannt." },
  ],
  related: [
    { label: "Pool bauen Kosten", href: "/ratgeber/pool-bauen-kosten" },
    { label: "Pool-Erdarbeiten Kosten", href: "/ratgeber/pool-erdarbeiten-kosten" },
    { label: "Pool-Betriebskosten", href: "/ratgeber/pool-betriebskosten" },
    { label: "Filteranlage Preisdetail", href: "/kosten/poolbau/leistung/filteranlage" },
    { label: "Pooltechnik Preisübersicht", href: "/kosten/poolbau" },
    { label: "Filteranlage berechnen", href: "/rechner/handwerkerkosten?gewerk=poolbau&leistung=filteranlage" },
  ],
};
