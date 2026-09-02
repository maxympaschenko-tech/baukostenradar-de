import type { Guide } from "./guides";

export const sockeldaemmungGuide: Guide = {
  slug: "sockeldaemmung-kosten",
  title: "Sockeldämmung Kosten 2026",
  h1: "Sockeldämmung Kosten 2026: pro Meter und Einfamilienhaus",
  description: "Sockeldämmung Kosten 2026: etwa 60-120 €/lfd. Meter für die Spritzwasser- und Übergangszone sowie 2.500-5.000 € für ein typisches Einfamilienhaus inklusive üblicher Erdarbeiten am Sockelübergang.",
  eyebrow: "Sockeldämmung 2026",
  intro: "Die Sockeldämmung schützt und dämmt den besonders beanspruchten Übergang zwischen Erdreich und Fassade. In dieser Spritzwasserzone müssen Dämmstoff, Abdichtung und Anschlüsse zur Fassadendämmung zusammenpassen. Die BauKostenRadar-Datenbasis enthält dafür sowohl einen laufenden Meterpreis als auch eine Projektorientierung für ein Einfamilienhaus.",
  keyFact: "Sockeldämmung etwa 60-120 €/lfd. Meter; Einfamilienhaus komplett etwa 2.500-5.000 €.",
  sections: [
    {
      heading: "Was kostet Sockeldämmung 2026?",
      paragraphs: [
        "Für die Dämmung der Spritzwasser- und Übergangszone zwischen Erdreich und Fassade liegt die aktuelle BauKostenRadar-Orientierung bei etwa 60 bis 120 Euro pro laufendem Meter.",
        "Für ein typisches Einfamilienhaus enthält die hinterlegte Blauarbeit-Quelle zusätzlich eine Projektorientierung von etwa 2.500 bis 5.000 Euro. Diese Komplettposition ist inklusive typischer Erdarbeiten am Sockelübergang formuliert; der konkrete Leistungsumfang eines Angebots sollte trotzdem einzeln geprüft werden.",
      ],
      table: {
        headers: ["Sockeldämmung", "Richtwert 2026"],
        rows: [
          { cells: ["Spritzwasser- und Übergangszone", "60-120 €/lfd. Meter"], href: "/kosten/daemmung/leistung/sockeldaemmung" },
          { cells: ["Einfamilienhaus komplett", "2.500-5.000 € pro Haus"], href: "/kosten/daemmung/leistung/sockeldaemmung-einfamilienhaus-komplett" },
        ],
      },
    },
    {
      heading: "Warum der Sockel anders kalkuliert wird als die Fassade",
      paragraphs: ["Der Fassadensockel liegt im Feuchte- und Spritzwasserbereich und hat andere Anforderungen als die darüberliegende WDVS-Fläche. Deshalb sollte der Sockel im Angebot als eigener Leistungsbereich erkennbar sein."],
      bullets: [
        "Höhe und Länge des zu dämmenden Sockelbereichs",
        "Zustand von Putz, Abdichtung und vorhandenem Sockelaufbau",
        "notwendige Erdarbeiten am Übergang zum Gelände",
        "Anschlüsse an Fassadendämmung, Türen und bodentiefe Fenster",
        "geeigneter feuchtebeständiger Dämmstoff für den Sockelbereich",
        "Oberflächen- und Schutzschicht im sichtbaren Bereich",
      ],
    },
    {
      heading: "Angebote für Sockeldämmung richtig vergleichen",
      paragraphs: [
        "Vergleichen Sie nicht nur den laufenden Meterpreis. Im Angebot sollte klar sein, welche Sockelhöhe angesetzt wird und ob Freilegen, Untergrundvorbereitung, Dämmung, Abdichtungsanschlüsse und Wiederherstellung des Geländes enthalten sind.",
        "Bei einer gleichzeitigen Fassadendämmung lohnt sich eine getrennte Ausweisung von WDVS-Fläche und Sockel. So bleibt nachvollziehbar, welche Kosten auf die normale Fassadenfläche und welche auf den technisch anspruchsvolleren Übergangsbereich entfallen.",
      ],
    },
  ],
  faqs: [
    { question: "Was kostet Sockeldämmung pro Meter?", answer: "Die aktuelle BauKostenRadar-Orientierung liegt bei etwa 60 bis 120 Euro pro laufendem Meter." },
    { question: "Was kostet Sockeldämmung bei einem Einfamilienhaus?", answer: "Die hinterlegte Projektorientierung liegt bei etwa 2.500 bis 5.000 Euro pro Haus inklusive typischer Erdarbeiten am Sockelübergang." },
    { question: "Ist Sockeldämmung im WDVS-Preis enthalten?", answer: "Das ist vom Angebot abhängig. Da der Sockel andere Anforderungen hat, sollte der Leistungsumfang separat ausgewiesen und geprüft werden." },
  ],
  related: [
    { label: "Sockeldämmung Preisdetail", href: "/kosten/daemmung/leistung/sockeldaemmung" },
    { label: "Sockeldämmung Einfamilienhaus Preisdetail", href: "/kosten/daemmung/leistung/sockeldaemmung-einfamilienhaus-komplett" },
    { label: "Fassadendämmung Kosten", href: "/ratgeber/fassadendaemmung-kosten-pro-qm" },
    { label: "Dämmung Kosten pro m²", href: "/ratgeber/daemmung-kosten-pro-qm" },
    { label: "Dämmung Preisübersicht", href: "/kosten/daemmung" },
    { label: "Sockeldämmung berechnen", href: "/rechner/handwerkerkosten?gewerk=daemmung&leistung=sockeldaemmung" },
  ],
};
