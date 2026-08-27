import type { Guide } from "@/lib/guides";

type Config = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  intro: string;
  keyFact: string;
  priceHeading: string;
  priceParagraphs: string[];
  table?: { headers: string[]; rows: Array<{ cells: string[]; href?: string }> };
  factors: string[];
  compareHeading: string;
  compareParagraphs: string[];
  faqs: Array<{ question: string; answer: string }>;
  serviceSlug: string;
  itemSlug: string;
  itemLabel: string;
  serviceLabel: string;
  related: Array<{ label: string; href: string }>;
};

function createGuide(config: Config): Guide {
  return {
    slug: config.slug,
    title: config.title,
    h1: config.h1,
    description: config.description,
    eyebrow: config.eyebrow,
    intro: config.intro,
    keyFact: config.keyFact,
    sections: [
      {
        heading: config.priceHeading,
        paragraphs: config.priceParagraphs,
        ...(config.table ? { table: config.table } : {}),
      },
      {
        heading: "Welche Faktoren verändern den Preis?",
        paragraphs: ["Der Richtwert ist eine Budgetorientierung. Der konkrete Angebotspreis hängt vom Bestand, Leistungsumfang, Material und der Baustellensituation ab."],
        bullets: config.factors,
      },
      {
        heading: config.compareHeading,
        paragraphs: config.compareParagraphs,
      },
    ],
    faqs: config.faqs,
    related: [
      { label: `${config.itemLabel} Preisdetail`, href: `/kosten/${config.serviceSlug}/leistung/${config.itemSlug}` },
      { label: `${config.serviceLabel} Kosten`, href: `/kosten/${config.serviceSlug}` },
      ...config.related,
      { label: "Handwerkerkosten-Rechner", href: `/rechner/handwerkerkosten?gewerk=${config.serviceSlug}&leistung=${config.itemSlug}` },
    ],
  };
}

const configs: Config[] = [
  {
    slug: "innentuer-einbauen-kosten",
    title: "Innentür einbauen Kosten 2026",
    h1: "Innentür mit Zarge einbauen: Kosten 2026 inklusive Montage",
    description: "Innentür einbauen Kosten 2026: aktueller Richtwert von 320-950 € pro Tür inklusive Zarge und Montage, Kostentreiber und Angebotsvergleich.",
    eyebrow: "Innentür 2026",
    intro: "Beim Einbau einer Innentür sind Türblatt, Zarge und Montage gemeinsam entscheidend. BauKostenRadar führt die aktuelle Preisposition deshalb als Komplettorientierung pro Tür.",
    keyFact: "Innentür mit Zarge inklusive Montage etwa 320-950 € pro Tür",
    priceHeading: "Was kostet eine Innentür mit Zarge und Montage?",
    priceParagraphs: [
      "Die aktuelle BauKostenRadar-Datenbasis führt für eine Innentür mit Zarge inklusive Montage etwa 320 bis 950 Euro pro Tür.",
      "Für sechs Türen ergibt sich daraus rechnerisch eine Orientierung von etwa 1.920 bis 5.700 Euro. Sondermaße und zusätzliche Nacharbeiten können außerhalb dieser Spanne liegen.",
    ],
    table: { headers: ["Anzahl", "Budgetorientierung"], rows: [
      { cells: ["1 Tür", "320-950 €"] },
      { cells: ["3 Türen", "960-2.850 €"] },
      { cells: ["6 Türen", "1.920-5.700 €"], href: "/ratgeber/6-innentueren-austauschen-kosten" },
    ] },
    factors: ["Türblatt und Oberflächenqualität", "Zarge und Wandstärke", "Standardmaß oder Sondermaß", "Beschläge und Glasausschnitte", "Zustand der vorhandenen Öffnung", "Demontage, Entsorgung und Nacharbeiten"],
    compareHeading: "Stückpreis und Stundensatz nicht doppelt rechnen",
    compareParagraphs: [
      "Für Türen- und Fensterbauer führt BauKostenRadar zusätzlich etwa 55 bis 95 Euro pro Stunde als Orientierung. Dieser Stundensatz darf nicht pauschal auf den Stückpreis aufgeschlagen werden, weil die Innentür-Position bereits die Montage umfasst.",
      "Vergleichen Sie Angebote nach identischem Leistungsumfang und prüfen Sie besonders Demontage, Entsorgung und Putz- oder Malernacharbeiten.",
    ],
    faqs: [
      { question: "Was kostet eine Innentür mit Zarge und Einbau 2026?", answer: "BauKostenRadar führt aktuell etwa 320 bis 950 Euro pro Tür inklusive Zarge und Montage." },
      { question: "Was kosten sechs Innentüren?", answer: "Rechnerisch ergeben sich etwa 1.920 bis 5.700 Euro für sechs Türen." },
      { question: "Ist die Montage enthalten?", answer: "Ja. Die aktuelle Preisposition ist ausdrücklich als Innentür mit Zarge inklusive Montage beschrieben." },
    ],
    serviceSlug: "tueren",
    itemSlug: "innentuer-mit-zarge-inkl-montage",
    itemLabel: "Innentür mit Zarge",
    serviceLabel: "Türen",
    related: [
      { label: "6 Innentüren austauschen Kosten", href: "/ratgeber/6-innentueren-austauschen-kosten" },
      { label: "Haustür einbauen Kosten", href: "/ratgeber/haustuer-einbauen-kosten" },
    ],
  },
  {
    slug: "zementestrich-kosten-pro-qm",
    title: "Zementestrich Kosten pro m² 2026",
    h1: "Zementestrich verlegen: Kosten 2026 pro m²",
    description: "Zementestrich Kosten 2026 pro m²: aktueller Richtwert von 30-55 €/m² inklusive Material, Beispielbudgets und wichtige Zusatzarbeiten.",
    eyebrow: "Zementestrich 2026",
    intro: "Zementestrich gehört zu den verbreiteten Nassestrichen. Untergrundausgleich, Reparaturen oder besondere Bodenaufbauten müssen im konkreten Angebot separat geprüft werden.",
    keyFact: "Zementestrich verlegen etwa 30-55 €/m² inklusive Material",
    priceHeading: "Was kostet Zementestrich pro m²?",
    priceParagraphs: [
      "Die aktuelle BauKostenRadar-Datenbasis führt für Zementestrich verlegen etwa 30 bis 55 Euro pro Quadratmeter inklusive Material.",
      "Bei 100 m² ergibt sich daraus rechnerisch eine Orientierung von etwa 3.000 bis 5.500 Euro.",
    ],
    table: { headers: ["Fläche", "Budgetorientierung"], rows: [
      { cells: ["50 m²", "1.500-2.750 €"] },
      { cells: ["100 m²", "3.000-5.500 €"], href: "/ratgeber/estrich-100-qm-kosten" },
      { cells: ["150 m²", "4.500-8.250 €"] },
    ] },
    factors: ["Untergrund und notwendiger Ausgleich", "Aufbauhöhe und Anschlüsse", "Flächengröße und Teilflächen", "Dämmung oder Fußbodenheizung", "Trocknung und Bauablauf", "Zusätzliche Reparaturen am Bestand"],
    compareHeading: "Zementestrich mit anderen Estricharten vergleichen",
    compareParagraphs: [
      "Fließestrich liegt aktuell bei etwa 40 bis 70 Euro pro Quadratmeter, Trockenestrich bei 45 bis 80 Euro und Schnellestrich bei 60 bis 110 Euro.",
      "Verarbeitung, Bauablauf und notwendige Belegreife können für das konkrete Projekt wichtiger sein als der niedrigste Quadratmeterpreis.",
    ],
    faqs: [
      { question: "Was kostet Zementestrich pro m² 2026?", answer: "BauKostenRadar führt aktuell etwa 30 bis 55 Euro pro Quadratmeter inklusive Material." },
      { question: "Was kosten 100 m² Zementestrich?", answer: "Rechnerisch ergeben sich etwa 3.000 bis 5.500 Euro." },
      { question: "Ist Bodenausgleich enthalten?", answer: "Nicht automatisch. BauKostenRadar führt Bodenausgleich 5-20 mm separat mit etwa 18 bis 38 Euro pro Quadratmeter inklusive Material." },
    ],
    serviceSlug: "estrich",
    itemSlug: "zementestrich-verlegen",
    itemLabel: "Zementestrich",
    serviceLabel: "Estrich",
    related: [
      { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
      { label: "Fließestrich Kosten", href: "/ratgeber/fliessestrich-kosten-pro-qm" },
      { label: "Trockenestrich Kosten", href: "/ratgeber/trockenestrich-kosten-pro-qm" },
    ],
  },
  {
    slug: "fliessestrich-kosten-pro-qm",
    title: "Fließestrich Kosten pro m² 2026",
    h1: "Fließestrich verlegen: Kosten 2026 pro m²",
    description: "Fließestrich Kosten 2026 pro m²: aktueller Richtwert von 40-70 €/m² inklusive Material, Beispielbudgets, Bodenaufbau und Angebotsvergleich.",
    eyebrow: "Fließestrich 2026",
    intro: "Fließestrich wird in fließfähiger Konsistenz eingebracht und verteilt sich großflächig. Für den Preisvergleich sollten Aufbauhöhe, Untergrund und der weitere Bodenaufbau eindeutig beschrieben sein.",
    keyFact: "Fließestrich verlegen etwa 40-70 €/m² inklusive Material",
    priceHeading: "Was kostet Fließestrich pro m²?",
    priceParagraphs: [
      "Die aktuelle BauKostenRadar-Datenbasis führt für Fließestrich verlegen etwa 40 bis 70 Euro pro Quadratmeter inklusive Material.",
      "Bei 100 m² ergibt sich daraus rechnerisch eine Budgetorientierung von etwa 4.000 bis 7.000 Euro.",
    ],
    table: { headers: ["Fläche", "Budgetorientierung"], rows: [
      { cells: ["50 m²", "2.000-3.500 €"] },
      { cells: ["100 m²", "4.000-7.000 €"] },
      { cells: ["150 m²", "6.000-10.500 €"] },
    ] },
    factors: ["Flächengröße und Raumaufteilung", "Aufbauhöhe", "Untergrund und Ausgleich", "Dämm- und Trennschichten", "Fußbodenheizung", "Pump- und Förderweg"],
    compareHeading: "Fließestrich und Zementestrich nicht nur nach Preis auswählen",
    compareParagraphs: [
      "Zementestrich liegt aktuell bei etwa 30 bis 55 Euro pro Quadratmeter inklusive Material und damit unter der Fließestrich-Spanne.",
      "Für die Auswahl sollten Bauablauf, Untergrund und technische Anforderungen gemeinsam mit dem Fachbetrieb bewertet werden.",
    ],
    faqs: [
      { question: "Was kostet Fließestrich pro m² 2026?", answer: "BauKostenRadar führt aktuell etwa 40 bis 70 Euro pro Quadratmeter inklusive Material." },
      { question: "Was kosten 100 m² Fließestrich?", answer: "Rechnerisch ergeben sich etwa 4.000 bis 7.000 Euro." },
      { question: "Welche Preisposition verwendet BauKostenRadar?", answer: "Die aktuelle Katalogposition heißt Fließestrich verlegen und wird direkt im Kostenrechner verwendet." },
    ],
    serviceSlug: "estrich",
    itemSlug: "fliessestrich-verlegen",
    itemLabel: "Fließestrich",
    serviceLabel: "Estrich",
    related: [
      { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
      { label: "Zementestrich Kosten", href: "/ratgeber/zementestrich-kosten-pro-qm" },
      { label: "Trockenestrich Kosten", href: "/ratgeber/trockenestrich-kosten-pro-qm" },
    ],
  },
  {
    slug: "trockenestrich-kosten-pro-qm",
    title: "Trockenestrich Kosten pro m² 2026",
    h1: "Trockenestrich verlegen: Kosten 2026 pro m²",
    description: "Trockenestrich Kosten 2026 pro m²: aktueller Richtwert von 45-80 €/m² inklusive Material, Beispielbudgets und Kostentreiber.",
    eyebrow: "Trockenestrich 2026",
    intro: "Trockenestrich benötigt keine klassische Trocknungsphase wie Nassestrich. Besonders im Bestand können Gewicht, Aufbauhöhe und ein notwendiger Niveauausgleich für die Kalkulation entscheidend sein.",
    keyFact: "Trockenestrich verlegen etwa 45-80 €/m² inklusive Material",
    priceHeading: "Was kostet Trockenestrich pro m²?",
    priceParagraphs: [
      "Die aktuelle BauKostenRadar-Datenbasis führt für Trockenestrich verlegen etwa 45 bis 80 Euro pro Quadratmeter inklusive Material.",
      "Bei 100 m² ergibt sich daraus eine Budgetorientierung von etwa 4.500 bis 8.000 Euro.",
    ],
    table: { headers: ["Fläche", "Budgetorientierung"], rows: [
      { cells: ["50 m²", "2.250-4.000 €"] },
      { cells: ["100 m²", "4.500-8.000 €"] },
      { cells: ["150 m²", "6.750-12.000 €"] },
    ] },
    factors: ["Plattensystem und Aufbau", "Untergrundebenheit", "Ausgleichsschüttung oder Bodenausgleich", "Dämmung und Trittschall", "Viele Anschlüsse und Zuschnitte", "Geschosslage und Materialtransport"],
    compareHeading: "Trockenestrich und Nassestrich unterscheiden",
    compareParagraphs: [
      "Trockenestrich liegt in der aktuellen Datenbasis über Zementestrich, kann aber bei einem trockenen Aufbau oder engem Terminplan interessant sein.",
      "Angebote sollten klar ausweisen, ob Ausgleich, Dämmung und weitere Schichten bereits enthalten sind.",
    ],
    faqs: [
      { question: "Was kostet Trockenestrich pro m² 2026?", answer: "BauKostenRadar führt aktuell etwa 45 bis 80 Euro pro Quadratmeter inklusive Material." },
      { question: "Was kosten 100 m² Trockenestrich?", answer: "Rechnerisch ergeben sich etwa 4.500 bis 8.000 Euro." },
      { question: "Ist Bodenausgleich enthalten?", answer: "Nicht automatisch. Ein notwendiger Ausgleich sollte im konkreten Angebot separat oder eindeutig als enthalten ausgewiesen sein." },
    ],
    serviceSlug: "estrich",
    itemSlug: "trockenestrich-verlegen",
    itemLabel: "Trockenestrich",
    serviceLabel: "Estrich",
    related: [
      { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
      { label: "Zementestrich Kosten", href: "/ratgeber/zementestrich-kosten-pro-qm" },
      { label: "Schnellestrich Kosten", href: "/ratgeber/schnellestrich-kosten-pro-qm" },
    ],
  },
  {
    slug: "schnellestrich-kosten-pro-qm",
    title: "Schnellestrich Kosten pro m² 2026",
    h1: "Schnellestrich: Kosten 2026 pro m² und Belegreife",
    description: "Schnellestrich Kosten 2026 pro m²: aktueller Richtwert von 60-110 €/m², typische Belegreife von 1-3 Tagen und wichtige Preisfaktoren.",
    eyebrow: "Schnellestrich 2026",
    intro: "Schnellestrich ist teurer als die Standardvarianten, kann dafür den Bauablauf beschleunigen. Die aktuelle Preisposition nennt eine typische Belegreife von etwa ein bis drei Tagen.",
    keyFact: "Schnellestrich etwa 60-110 €/m², typische Belegreife laut Datenquelle 1-3 Tage",
    priceHeading: "Was kostet Schnellestrich pro m²?",
    priceParagraphs: [
      "BauKostenRadar führt für Schnellestrich aktuell etwa 60 bis 110 Euro pro Quadratmeter inklusive Material.",
      "Bei 100 m² ergibt sich daraus rechnerisch eine Orientierung von etwa 6.000 bis 11.000 Euro.",
    ],
    table: { headers: ["Fläche", "Budgetorientierung"], rows: [
      { cells: ["50 m²", "3.000-5.500 €"] },
      { cells: ["100 m²", "6.000-11.000 €"] },
      { cells: ["150 m²", "9.000-16.500 €"] },
    ] },
    factors: ["Schnellbindendes System", "Schichtdicke", "Untergrund", "Flächengröße", "Baustellenklima", "Anforderungen an den nachfolgenden Bodenbelag"],
    compareHeading: "Mehrpreis gegen Bauzeit abwägen",
    compareParagraphs: [
      "Zementestrich liegt aktuell bei etwa 30 bis 55 Euro, Fließestrich bei 40 bis 70 Euro und Trockenestrich bei 45 bis 80 Euro pro Quadratmeter.",
      "Ob sich der Mehrpreis lohnt, hängt davon ab, wie wichtig eine kurze Bauzeit und frühe Belegreife für das Gesamtprojekt sind.",
    ],
    faqs: [
      { question: "Was kostet Schnellestrich pro m² 2026?", answer: "BauKostenRadar führt aktuell etwa 60 bis 110 Euro pro Quadratmeter inklusive Material." },
      { question: "Was kosten 100 m² Schnellestrich?", answer: "Rechnerisch ergeben sich etwa 6.000 bis 11.000 Euro." },
      { question: "Wann ist Schnellestrich belegreif?", answer: "Die hinterlegte Datenquelle nennt typischerweise etwa ein bis drei Tage. Die tatsächliche Belegreife muss für das eingesetzte System fachgerecht geprüft werden." },
    ],
    serviceSlug: "estrich",
    itemSlug: "schnellestrich",
    itemLabel: "Schnellestrich",
    serviceLabel: "Estrich",
    related: [
      { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
      { label: "Zementestrich Kosten", href: "/ratgeber/zementestrich-kosten-pro-qm" },
      { label: "Trockenestrich Kosten", href: "/ratgeber/trockenestrich-kosten-pro-qm" },
    ],
  },
  {
    slug: "bodenausgleich-kosten-pro-qm",
    title: "Bodenausgleich Kosten pro m² 2026",
    h1: "Bodenausgleich 5-20 mm: Kosten 2026 pro m²",
    description: "Bodenausgleich Kosten 2026 pro m²: aktueller Richtwert von 18-38 €/m² inklusive Material für 5-20 mm Ausgleich und wichtige Kostentreiber.",
    eyebrow: "Bodenausgleich 2026",
    intro: "Ein ebener Untergrund ist für viele Bodenaufbauten entscheidend. BauKostenRadar führt den Bodenausgleich von 5 bis 20 Millimetern deshalb als eigene Preisposition.",
    keyFact: "Bodenausgleich 5-20 mm etwa 18-38 €/m² inklusive Material",
    priceHeading: "Was kostet Bodenausgleich pro m²?",
    priceParagraphs: [
      "Die aktuelle BauKostenRadar-Datenbasis führt für Bodenausgleich mit 5 bis 20 Millimetern etwa 18 bis 38 Euro pro Quadratmeter inklusive Material.",
      "Bei 100 m² ergibt sich daraus eine Orientierung von etwa 1.800 bis 3.800 Euro, sofern die Fläche und Ausgleichsstärke zur Preisposition passen.",
    ],
    table: { headers: ["Fläche", "Budgetorientierung"], rows: [
      { cells: ["50 m²", "900-1.900 €"] },
      { cells: ["100 m²", "1.800-3.800 €"] },
      { cells: ["150 m²", "2.700-5.700 €"] },
    ] },
    factors: ["Höhenunterschiede", "Benötigte Ausgleichsstärke", "Untergrundfestigkeit", "Grundierung und Vorarbeiten", "Teilflächen", "Anschlusshöhen an Türen und Treppen"],
    compareHeading: "Ausgleich nicht mit neuem Estrich verwechseln",
    compareParagraphs: [
      "Bodenausgleich korrigiert Unebenheiten in einem begrenzten Bereich und ist nicht automatisch ein vollständiger neuer Estrichaufbau.",
      "Bei größeren Schäden sollte fachlich geprüft werden, ob Ausgleich noch sinnvoll ist oder ein anderer Bodenaufbau notwendig wird.",
    ],
    faqs: [
      { question: "Was kostet Bodenausgleich pro m² 2026?", answer: "BauKostenRadar führt für 5 bis 20 Millimeter Ausgleich etwa 18 bis 38 Euro pro Quadratmeter inklusive Material." },
      { question: "Was kosten 100 m² Bodenausgleich?", answer: "Rechnerisch ergeben sich etwa 1.800 bis 3.800 Euro." },
      { question: "Ist Bodenausgleich dasselbe wie Estrich?", answer: "Nein. Die BauKostenRadar-Datenbasis führt Bodenausgleich als eigene Leistung neben den Estricharten." },
    ],
    serviceSlug: "estrich",
    itemSlug: "bodenausgleich-5-20-mm",
    itemLabel: "Bodenausgleich 5-20 mm",
    serviceLabel: "Estrich",
    related: [
      { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
      { label: "Zementestrich Kosten", href: "/ratgeber/zementestrich-kosten-pro-qm" },
    ],
  },
  {
    slug: "estrich-rissreparatur-kosten",
    title: "Estrich Rissreparatur Kosten 2026",
    h1: "Estrich-Rissreparatur: Kosten 2026 pro laufendem Meter",
    description: "Estrich-Rissreparatur Kosten 2026: aktueller Richtwert von 35-85 € pro laufendem Meter, Beispielbudgets, Schadensumfang und Angebotsvergleich.",
    eyebrow: "Estrichreparatur 2026",
    intro: "Risse im Estrich sollten vor dem neuen Bodenbelag fachlich bewertet werden. BauKostenRadar führt die Rissreparatur als eigene Leistung pro laufendem Meter.",
    keyFact: "Estrich-Rissreparatur etwa 35-85 € pro laufendem Meter",
    priceHeading: "Was kostet eine Estrich-Rissreparatur?",
    priceParagraphs: [
      "Die aktuelle BauKostenRadar-Datenbasis führt für Estrich-Rissreparatur etwa 35 bis 85 Euro pro laufendem Meter.",
      "Bei zehn Metern zu reparierender Risslänge ergibt sich daraus rechnerisch eine Orientierung von etwa 350 bis 850 Euro.",
    ],
    table: { headers: ["Risslänge", "Budgetorientierung"], rows: [
      { cells: ["5 lfd. m", "175-425 €"] },
      { cells: ["10 lfd. m", "350-850 €"] },
      { cells: ["20 lfd. m", "700-1.700 €"] },
    ] },
    factors: ["Rissbreite und Rissverlauf", "Zustand und Tragfähigkeit", "Vorbereitung des Risses", "Reparatursystem", "Viele kurze Risse", "Nachfolgender Bodenbelag"],
    compareHeading: "Reparatur oder neuer Estrich?",
    compareParagraphs: [
      "Eine lokale Rissreparatur ist nicht mit einer vollständigen Estricherneuerung gleichzusetzen. Bei großflächigen Schäden kann ein anderer Sanierungsweg erforderlich sein.",
      "Vor der Kalkulation sollte deshalb geklärt werden, ob der vorhandene Estrich grundsätzlich erhalten werden kann.",
    ],
    faqs: [
      { question: "Was kostet Estrich-Rissreparatur 2026?", answer: "BauKostenRadar führt aktuell etwa 35 bis 85 Euro pro laufendem Meter." },
      { question: "Was kosten 10 Meter Estrichrisse?", answer: "Rechnerisch ergeben sich etwa 350 bis 850 Euro." },
      { question: "Wann ist ein neuer Estrich statt Reparatur nötig?", answer: "Das lässt sich nicht allein anhand des Preises entscheiden. Bei größeren oder konstruktiven Schäden sollte der Zustand fachlich beurteilt werden." },
    ],
    serviceSlug: "estrich",
    itemSlug: "estrich-rissreparatur",
    itemLabel: "Estrich-Rissreparatur",
    serviceLabel: "Estrich",
    related: [
      { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
      { label: "Bodenausgleich Kosten", href: "/ratgeber/bodenausgleich-kosten-pro-qm" },
    ],
  },
];

export const currentCatalogGuides = configs.map(createGuide);
