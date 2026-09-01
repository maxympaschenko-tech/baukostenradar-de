import type { Guide } from "@/lib/guides";

export const bauschuttEntsorgenGuide: Guide = {
  slug: "bauschutt-entsorgen-kosten",
  title: "Bauschutt entsorgen Kosten 2026",
  h1: "Bauschutt entsorgen: Kosten 2026 für m³, Container und Sack",
  description: "Bauschutt entsorgen Kosten 2026: Richtwerte pro m³ sowie für 5-m³-Bauschuttcontainer, 5-m³-Baumischabfallcontainer und 1-m³-Kombisack.",
  eyebrow: "Bauschutt & Bauabfall 2026",
  intro: "Bei Abriss- und Sanierungsarbeiten hängt die Entsorgung stark davon ab, ob sortenreiner Bauschutt oder gemischter Bauabfall anfällt und ob Deponiepreis, Container, Transport und Miete bereits enthalten sind. Deshalb sollten Angebote nicht allein nach dem nominellen Behältervolumen verglichen werden.",
  keyFact: "Bauschutt etwa 30-60 €/m³; 5-m³-Container komplett etwa 350-600 €",
  sections: [
    {
      heading: "Was kostet Bauschutt entsorgen 2026?",
      paragraphs: [
        "Die aktuelle BauKostenRadar-Datenbasis führt für sortenreinen Bauschutt etwa 30 bis 60 Euro pro Kubikmeter als Entsorgungsrichtwert. Transport und Container können dabei separat anfallen.",
        "Für einen kompletten 5-m³-Bauschuttcontainer inklusive typischer Miete, Transport und Entsorgung liegt die Orientierung bei etwa 350 bis 600 Euro. Ein 5-m³-Baumischabfallcontainer liegt mit etwa 380 bis 650 Euro etwas höher.",
      ],
      table: {
        headers: ["Entsorgungsformat", "Richtwert 2026"],
        rows: [
          { cells: ["Bauschutt, sortenrein", "30-60 €/m³"], href: "/kosten/abriss-entsorgung/leistung/bauschutt-entsorgen" },
          { cells: ["Bauschuttcontainer 5 m³ komplett", "350-600 €"], href: "/kosten/abriss-entsorgung/leistung/bauschuttcontainer-5-kubikmeter-komplett" },
          { cells: ["Baumischabfallcontainer 5 m³ komplett", "380-650 €"], href: "/kosten/abriss-entsorgung/leistung/baumischabfallcontainer-5-kubikmeter-komplett" },
          { cells: ["Bauabfall-Kombisack 1 m³", "80-100 €"], href: "/kosten/abriss-entsorgung/leistung/bauabfall-kombisack-1-kubikmeter" },
        ],
      },
    },
    {
      heading: "Bauschutt und Baumischabfall nicht verwechseln",
      paragraphs: [
        "Sortenreiner mineralischer Bauschutt wie Beton, Ziegel oder Fliesen lässt sich meist günstiger entsorgen als gemischter Bauabfall. Holz, Kunststoffe, Gipskarton oder Dämmstoffe können die Abfallklasse und damit den Preis verändern.",
        "Vor der Bestellung sollte deshalb geklärt werden, welche Materialien in den Behälter dürfen, welche Gewichtsgrenzen gelten und ob Zuschläge für Fehlbefüllung möglich sind.",
      ],
      bullets: ["Abfallart und Sortenreinheit", "Containergröße und Stellzeit", "Transportentfernung", "Gewicht und Deponiegebühren", "Zufahrt und Stellfläche", "Zuschläge bei Fehlbefüllung"],
    },
    {
      heading: "Container oder Kombisack: welches Format passt?",
      paragraphs: [
        "Ein Kombisack kann für kleinere Mengen sinnvoll sein, während Container bei größeren Rückbauarbeiten logistisch einfacher sind. Entscheidend ist nicht nur das Volumen, sondern auch das zulässige Gewicht.",
        "Für sehr große Mengen führt BauKostenRadar zusätzlich einen eigenen 30-m³-Bauschuttcontainer-Ratgeber. Dieser sollte nicht als Preismaßstab für 5-m³-Container verwendet werden.",
      ],
    },
  ],
  faqs: [
    { question: "Was kostet Bauschutt entsorgen pro m³ 2026?", answer: "BauKostenRadar führt etwa 30 bis 60 Euro pro Kubikmeter für sortenreinen Bauschutt als Entsorgungsrichtwert; Transport und Container können zusätzlich anfallen." },
    { question: "Was kostet ein 5-m³-Bauschuttcontainer komplett?", answer: "Die aktuelle Orientierung liegt bei etwa 350 bis 600 Euro inklusive typischer Miete, Transport und Entsorgung." },
    { question: "Ist Baumischabfall teurer als Bauschutt?", answer: "In der aktuellen Datenbasis liegt ein 5-m³-Baumischabfallcontainer mit etwa 380 bis 650 Euro etwas höher als ein vergleichbarer Bauschuttcontainer." },
    { question: "Was kostet ein 1-m³-Bauabfallsack?", answer: "Für einen Bauabfall-Kombisack mit etwa 1 m³ führt BauKostenRadar rund 80 bis 100 Euro als Orientierung." },
  ],
  related: [
    { label: "Bauschutt entsorgen Preisdetail", href: "/kosten/abriss-entsorgung/leistung/bauschutt-entsorgen" },
    { label: "5-m³-Bauschuttcontainer Preisdetail", href: "/kosten/abriss-entsorgung/leistung/bauschuttcontainer-5-kubikmeter-komplett" },
    { label: "5-m³-Baumischabfallcontainer Preisdetail", href: "/kosten/abriss-entsorgung/leistung/baumischabfallcontainer-5-kubikmeter-komplett" },
    { label: "1-m³-Bauabfall-Kombisack Preisdetail", href: "/kosten/abriss-entsorgung/leistung/bauabfall-kombisack-1-kubikmeter" },
    { label: "30-m³-Bauschuttcontainer Kosten", href: "/ratgeber/bauschuttcontainer-30-m3-kosten" },
    { label: "Haus abreißen Kosten", href: "/ratgeber/haus-abreissen-kosten" },
    { label: "Abriss & Entsorgung Preise", href: "/kosten/abriss-entsorgung" },
    { label: "Bauschutt entsorgen berechnen", href: "/rechner/handwerkerkosten?gewerk=abriss-entsorgung&leistung=bauschutt-entsorgen" },
  ],
};
