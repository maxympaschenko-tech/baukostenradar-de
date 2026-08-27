import type { Guide, GuideTable } from "@/lib/guides";

type ComparisonGuideConfig = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  intro: string;
  keyFact: string;
  priceHeading: string;
  priceParagraphs: string[];
  table: GuideTable;
  factorsHeading: string;
  factorsIntro: string;
  factors: string[];
  compareHeading: string;
  compareParagraphs: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
};

function createComparisonGuide(config: ComparisonGuideConfig): Guide {
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
        table: config.table,
      },
      {
        heading: config.factorsHeading,
        paragraphs: [config.factorsIntro],
        bullets: config.factors,
      },
      {
        heading: config.compareHeading,
        paragraphs: config.compareParagraphs,
      },
    ],
    faqs: config.faqs,
    related: config.related,
  };
}

const configs: ComparisonGuideConfig[] = [
  {
    slug: "fenster-2-fach-oder-3-fach-verglasung-kosten",
    title: "2-fach oder 3-fach Verglasung Kosten 2026",
    h1: "2-fach oder 3-fach Verglasung: Kosten 2026 im Vergleich",
    description: "2-fach oder 3-fach Verglasung 2026: Fensterpreise inklusive Einbau vergleichen, Beispielbudgets und wichtige Kostenfaktoren für die Fenstersanierung.",
    eyebrow: "Fenstervergleich 2026",
    intro: "Bei neuen Fenstern wird häufig zuerst zwischen Zwei- und Dreifachverglasung entschieden. Für einen fairen Kostenvergleich müssen Fensterpreis und Montage gemeinsam betrachtet werden, weil beide Varianten dieselbe Einbauleistung benötigen.",
    keyFact: "Standardfenster inklusive Einbau etwa 550-1.000 € mit 2-fach oder 700-1.200 € mit 3-fach Verglasung",
    priceHeading: "Was kosten 2-fach und 3-fach verglaste Fenster inklusive Einbau?",
    priceParagraphs: [
      "In der BauKostenRadar-Datenbasis liegt ein Standardfenster mit Zweifachverglasung bei etwa 400 bis 700 Euro ohne Einbau. Dreifachverglasung liegt bei etwa 550 bis 900 Euro. Für den Fenstereinbau sind zusätzlich etwa 150 bis 300 Euro pro Fenster hinterlegt.",
      "Rechnerisch ergibt das etwa 550 bis 1.000 Euro pro zweifach verglastem Standardfenster inklusive Einbau und etwa 700 bis 1.200 Euro bei Dreifachverglasung. Die Addition dient als Budgetorientierung und ersetzt kein konkretes Angebot.",
    ],
    table: {
      headers: ["Variante", "1 Fenster inkl. Einbau", "10 Fenster", "20 Fenster"],
      rows: [
        { cells: ["2-fach Verglasung", "550-1.000 €", "5.500-10.000 €", "11.000-20.000 €"] },
        { cells: ["3-fach Verglasung", "700-1.200 €", "7.000-12.000 €", "14.000-24.000 €"] },
      ],
    },
    factorsHeading: "Was beeinflusst den Preis zusätzlich?",
    factorsIntro: "Verglasung ist nur ein Kostenblock. Rahmen, Größe und Einbausituation können den Endpreis stärker verändern als der reine Unterschied zwischen zwei und drei Scheiben.",
    factors: [
      "Fenstergröße und Sonderformen",
      "Rahmenmaterial und Oberflächen",
      "Demontage und Entsorgung alter Fenster",
      "Laibungen, Anschlussfugen und Putzarbeiten",
      "Rollläden, Sonnenschutz und Fensterbänke",
      "Zugänglichkeit und Gerüstbedarf",
    ],
    compareHeading: "Nicht nur den Mehrpreis der Verglasung vergleichen",
    compareParagraphs: [
      "Die energetisch passende Verglasung hängt vom Gebäude, den übrigen Bauteilen und dem Sanierungskonzept ab. Der günstigere Fensterpreis allein sollte deshalb nicht die technische Entscheidung bestimmen.",
      "Für Angebote sollten Uw-Wert, Rahmen, Glasaufbau, Montageart und Nebenarbeiten möglichst gleich beschrieben sein. Erst dann ist der Preisvergleich belastbar.",
    ],
    faqs: [
      { question: "Was kostet ein Fenster mit 2-fach Verglasung inklusive Einbau 2026?", answer: "Aus den getrennten BauKostenRadar-Richtwerten für Standardfenster und Einbau ergeben sich rechnerisch etwa 550 bis 1.000 Euro pro Fenster." },
      { question: "Was kostet ein Fenster mit 3-fach Verglasung inklusive Einbau 2026?", answer: "Rechnerisch ergeben sich aus den hinterlegten Preispositionen etwa 700 bis 1.200 Euro pro Standardfenster inklusive Einbau." },
      { question: "Was kosten 20 Fenster im Vergleich?", answer: "Für 20 Standardfenster ergeben sich ungefähr 11.000 bis 20.000 Euro mit Zweifachverglasung und etwa 14.000 bis 24.000 Euro mit Dreifachverglasung, jeweils inklusive der dokumentierten Einbauposition." },
    ],
    related: [
      { label: "Fenster 2-fach Verglasung Kosten", href: "/ratgeber/fenster-2-fach-verglasung-kosten" },
      { label: "Fenster 3-fach Verglasung Kosten", href: "/ratgeber/fenster-3-fach-verglasung-kosten" },
      { label: "20 Fenster austauschen Kosten", href: "/ratgeber/20-fenster-austauschen-kosten" },
      { label: "Fenster austauschen Kosten Haus", href: "/ratgeber/fenster-austauschen-kosten-haus" },
      { label: "Fenster Kosten 2026", href: "/kosten/fenster" },
    ],
  },
  {
    slug: "daemmung-aufsparren-oder-zwischensparren-kosten",
    title: "Aufsparren- oder Zwischensparrendämmung Kosten 2026",
    h1: "Aufsparren- oder Zwischensparrendämmung: Kosten 2026 im Vergleich",
    description: "Aufsparren- und Zwischensparrendämmung 2026 vergleichen: Richtwerte pro m², 150-m²-Beispiel, Leistungsumfang und wichtige Kostentreiber.",
    eyebrow: "Dachdämmung Vergleich 2026",
    intro: "Aufsparren- und Zwischensparrendämmung liegen an unterschiedlichen Stellen des Dachaufbaus und haben einen unterschiedlichen Eingriff in den Bestand. Ein reiner Quadratmetervergleich zeigt deshalb nur die Budgetdimension, nicht die technisch beste Lösung.",
    keyFact: "Aufsparrendämmung etwa 100-180 €/m², Zwischensparrendämmung etwa 60-120 €/m² in der BauKostenRadar-Datenbasis",
    priceHeading: "Wie unterscheiden sich die Kosten pro m²?",
    priceParagraphs: [
      "BauKostenRadar führt für Dachdämmung auf den Sparren etwa 100 bis 180 Euro pro Quadratmeter Dachfläche. Für Zwischensparrendämmung liegt der Richtwert bei etwa 60 bis 120 Euro pro Quadratmeter.",
      "Bei 150 m² Dachfläche ergeben sich rechnerisch rund 15.000 bis 27.000 Euro für die Aufsparren-Position und etwa 9.000 bis 18.000 Euro für die Zwischensparren-Position. Zusätzliche Dacharbeiten dürfen nicht automatisch als enthalten angenommen werden.",
    ],
    table: {
      headers: ["Dämmverfahren", "Richtwert", "150 m² Beispiel"],
      rows: [
        { cells: ["Aufsparrendämmung", "100-180 €/m²", "15.000-27.000 €"] },
        { cells: ["Zwischensparrendämmung", "60-120 €/m²", "9.000-18.000 €"] },
      ],
    },
    factorsHeading: "Warum unterscheiden sich die Budgets?",
    factorsIntro: "Die Verfahren greifen unterschiedlich stark in Dachhaut und Innenausbau ein. Der tatsächliche Projektpreis hängt deshalb vom bestehenden Dachaufbau ab.",
    factors: [
      "Zustand und Zugänglichkeit des Dachs",
      "Dämmstärke und gewünschter Aufbau",
      "Neueindeckung oder vorhandene Dachdeckung",
      "Innenbekleidung bei Arbeiten von innen",
      "Dachfenster, Gauben und viele Anschlüsse",
      "Gerüst und Baustellenlogistik",
    ],
    compareHeading: "Die Verfahren sind technisch nicht austauschbar",
    compareParagraphs: [
      "Eine Aufsparrendämmung wird häufig dann interessant, wenn die Dachdeckung ohnehin geöffnet oder erneuert wird. Eine Zwischensparrendämmung kann bei einem intakten Dach einen anderen Sanierungsweg ermöglichen.",
      "Vergleichen Sie deshalb nicht nur Euro pro Quadratmeter, sondern den vollständigen Dachaufbau, Wärmebrücken, Luftdichtheit und alle notwendigen Folgearbeiten.",
    ],
    faqs: [
      { question: "Was kostet Aufsparrendämmung pro m² 2026?", answer: "BauKostenRadar führt etwa 100 bis 180 Euro pro Quadratmeter Dachfläche als Richtwert." },
      { question: "Was kostet Zwischensparrendämmung pro m² 2026?", answer: "BauKostenRadar führt etwa 60 bis 120 Euro pro Quadratmeter als Richtwert." },
      { question: "Ist Zwischensparrendämmung immer günstiger?", answer: "Der hinterlegte Quadratmeter-Richtwert liegt niedriger. Ob das Gesamtprojekt günstiger ist, hängt aber von Dachzustand, Innenausbau, Anschlüssen und dem vollständigen Leistungsumfang ab." },
    ],
    related: [
      { label: "Aufsparrendämmung Kosten", href: "/ratgeber/aufsparrendaemmung-kosten-pro-qm" },
      { label: "Zwischensparrendämmung Kosten", href: "/ratgeber/zwischensparrendaemmung-kosten-pro-qm" },
      { label: "Dachsanierung mit Aufsparrendämmung", href: "/ratgeber/dachsanierung-aufsparrendaemmung-kosten-pro-qm" },
      { label: "Dämmung Kosten 2026", href: "/kosten/daemmung" },
      { label: "Dach sanieren Kosten", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    ],
  },
  {
    slug: "estrich-zement-oder-anhydrit-kosten",
    title: "Zementestrich oder Anhydritestrich Kosten 2026",
    h1: "Zementestrich oder Anhydritestrich: Kosten 2026 im Vergleich",
    description: "Zementestrich und Anhydritestrich 2026 vergleichen: Kosten pro m², 100-m²-Beispiel, Einsatzbereiche, Aufbau und wichtige Preisfaktoren.",
    eyebrow: "Estrichvergleich 2026",
    intro: "Zementestrich und Calciumsulfat- beziehungsweise Anhydritestrich liegen preislich nah beieinander, unterscheiden sich aber in Verarbeitung und Einsatzbereich. Für die Budgetplanung lohnt sich deshalb ein Vergleich bei identischer Fläche.",
    keyFact: "Zementestrich komplett etwa 25-50 €/m², Anhydritestrich etwa 28-55 €/m² in der BauKostenRadar-Datenbasis",
    priceHeading: "Was kosten Zementestrich und Anhydritestrich pro m²?",
    priceParagraphs: [
      "Für Zementestrich komplett führt BauKostenRadar etwa 25 bis 50 Euro pro Quadratmeter. Die hinterlegte Position beschreibt den kompletten Aufbau mit Dämmung, Randstreifen und Einbau. Calciumsulfat- beziehungsweise Anhydritestrich liegt bei etwa 28 bis 55 Euro pro Quadratmeter.",
      "Bei 100 m² ergeben sich damit ungefähr 2.500 bis 5.000 Euro für die Zementestrich-Position und 2.800 bis 5.500 Euro für Anhydritestrich. Vor dem Angebotsvergleich muss geprüft werden, ob beide Positionen tatsächlich denselben Aufbau enthalten.",
    ],
    table: {
      headers: ["Estrichart", "Richtwert", "100 m² Beispiel"],
      rows: [
        { cells: ["Zementestrich komplett", "25-50 €/m²", "2.500-5.000 €"] },
        { cells: ["Anhydritestrich", "28-55 €/m²", "2.800-5.500 €"] },
      ],
    },
    factorsHeading: "Was verändert den Estrichpreis?",
    factorsIntro: "Die Materialart allein erklärt den Endpreis nicht. Aufbauhöhe, Untergrund und Baustellenlogistik können für beide Varianten relevant sein.",
    factors: [
      "Estrichdicke und erforderlicher Aufbau",
      "Dämmung und Randstreifen",
      "Fußbodenheizung",
      "Untergrundvorbereitung",
      "Pump- und Förderwege",
      "Flächengröße und viele kleine Räume",
    ],
    compareHeading: "Preis und technische Eignung getrennt bewerten",
    compareParagraphs: [
      "Die kleine Differenz der Richtwerte sollte nicht überbewertet werden. Feuchtebeanspruchung, gewünschte Trocknung, Fußbodenheizung und der geplante Bodenbelag können die Materialwahl stärker bestimmen als der reine Quadratmeterpreis.",
      "Bei Angeboten sollte deshalb neben der Estrichart auch Aufbau, Dicke, Dämmung, Nachbehandlung und Belegreife beschrieben sein.",
    ],
    faqs: [
      { question: "Was kostet Zementestrich pro m² 2026?", answer: "BauKostenRadar führt für den kompletten Zementestrich-Aufbau etwa 25 bis 50 Euro pro Quadratmeter als Richtwert." },
      { question: "Was kostet Anhydritestrich pro m² 2026?", answer: "Für Calciumsulfat- beziehungsweise Anhydritestrich führt BauKostenRadar etwa 28 bis 55 Euro pro Quadratmeter." },
      { question: "Was ist bei 100 m² günstiger?", answer: "Rechnerisch liegt Zementestrich bei etwa 2.500 bis 5.000 Euro und Anhydritestrich bei etwa 2.800 bis 5.500 Euro. Der konkrete Aufbau und die technische Eignung sind für die Entscheidung wichtiger als die kleine rechnerische Differenz." },
    ],
    related: [
      { label: "Zementestrich Kosten", href: "/ratgeber/zementestrich-kosten-pro-qm" },
      { label: "Anhydritestrich Kosten", href: "/ratgeber/anhydritestrich-kosten-pro-qm" },
      { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
      { label: "Estrich Kosten 2026", href: "/kosten/estrich" },
      { label: "Fußbodenheizung 100 m² Kosten", href: "/ratgeber/fussbodenheizung-100-qm-kosten" },
    ],
  },
  {
    slug: "bodenleger-parkett-oder-vinyl-kosten",
    title: "Parkett oder Vinyl Kosten 2026",
    h1: "Parkett oder Vinyl: Kosten 2026 pro m² im Vergleich",
    description: "Parkett oder Vinyl 2026: Kosten pro m² inklusive Material vergleichen, 80-m²-Beispiel, Untergrund, Verlegung und wichtige Preisfaktoren.",
    eyebrow: "Bodenbelag Vergleich 2026",
    intro: "Parkett und Klick-Vinyl unterscheiden sich deutlich beim Materialpreis und bei der möglichen Aufarbeitung. Für die erste Budgetplanung lassen sich die dokumentierten Komplettpositionen pro Quadratmeter direkt gegenüberstellen.",
    keyFact: "Parkett verlegen inkl. Material etwa 70-160 €/m², Klick-Vinyl inkl. Material etwa 35-65 €/m²",
    priceHeading: "Was kosten Parkett und Vinyl inklusive Material?",
    priceParagraphs: [
      "BauKostenRadar führt für Parkett verlegen inklusive Material etwa 70 bis 160 Euro pro Quadratmeter. Klick-Vinyl inklusive Material liegt bei etwa 35 bis 65 Euro pro Quadratmeter.",
      "Für 80 m² ergibt sich damit eine Budgetorientierung von ungefähr 5.600 bis 12.800 Euro für Parkett und etwa 2.800 bis 5.200 Euro für Klick-Vinyl. Untergrundarbeiten und Rückbau alter Beläge können zusätzlich anfallen.",
    ],
    table: {
      headers: ["Belag", "Richtwert inkl. Material", "80 m² Beispiel"],
      rows: [
        { cells: ["Parkett", "70-160 €/m²", "5.600-12.800 €"] },
        { cells: ["Klick-Vinyl", "35-65 €/m²", "2.800-5.200 €"] },
      ],
    },
    factorsHeading: "Welche Kostenblöcke kommen zum Bodenbelag?",
    factorsIntro: "Ein sauberer, ebener Untergrund kann die Verlegung vereinfachen. Bei Sanierungen entstehen dagegen häufig zusätzliche Arbeiten vor dem neuen Belag.",
    factors: [
      "Rückbau und Entsorgung des Altbelags",
      "Ausgleich oder Spachtelung des Untergrunds",
      "Materialqualität und Dekor beziehungsweise Holzart",
      "Sockelleisten und Übergangsprofile",
      "Viele Zuschnitte und kleine Räume",
      "Verkleben oder schwimmende Verlegung",
    ],
    compareHeading: "Anschaffungspreis ist nicht der einzige Unterschied",
    compareParagraphs: [
      "Parkett liegt in der aktuellen Datenbasis deutlich höher, kann je nach Produkt später abgeschliffen und aufgearbeitet werden. Klick-Vinyl hat einen niedrigeren Einstiegspreis, ist aber ein anderer Bodenaufbau mit anderen Materialeigenschaften.",
      "Vergleichen Sie Angebote nur dann direkt, wenn Untergrundvorbereitung, Sockelleisten, Übergänge und Materialqualität ähnlich enthalten sind.",
    ],
    faqs: [
      { question: "Was kostet Parkett verlegen inklusive Material 2026?", answer: "BauKostenRadar führt etwa 70 bis 160 Euro pro Quadratmeter als Richtwert." },
      { question: "Was kostet Klick-Vinyl inklusive Material 2026?", answer: "BauKostenRadar führt etwa 35 bis 65 Euro pro Quadratmeter als Richtwert." },
      { question: "Was kosten 80 m² Parkett oder Vinyl?", answer: "Rechnerisch ergeben sich etwa 5.600 bis 12.800 Euro für Parkett und ungefähr 2.800 bis 5.200 Euro für Klick-Vinyl, jeweils auf Basis der hinterlegten Position inklusive Material." },
    ],
    related: [
      { label: "Parkett verlegen Kosten", href: "/ratgeber/parkett-verlegen-kosten-pro-qm" },
      { label: "Vinylboden verlegen Kosten", href: "/ratgeber/vinylboden-verlegen-kosten-pro-qm" },
      { label: "Bodenleger Kosten pro m²", href: "/ratgeber/bodenleger-kosten-pro-qm" },
      { label: "Boden Kosten 2026", href: "/kosten/bodenleger" },
      { label: "Bodensanierung Kosten", href: "/ratgeber/boden-sanieren-kosten-pro-qm" },
    ],
  },
  {
    slug: "fassade-wdvs-oder-vhf-kosten",
    title: "WDVS oder VHF Kosten 2026",
    h1: "WDVS oder vorgehängte hinterlüftete Fassade: Kosten 2026 im Vergleich",
    description: "WDVS und vorgehängte hinterlüftete Fassade 2026 vergleichen: Richtwerte pro m², 150-m²-Beispiel, Aufbau, Dämmung und Preisfaktoren.",
    eyebrow: "Fassadensystem Vergleich 2026",
    intro: "WDVS und vorgehängte hinterlüftete Fassaden sind unterschiedliche Fassadensysteme. Der Kostenvergleich zeigt die Größenordnung, darf aber nicht so gelesen werden, als hätten beide Varianten automatisch denselben Schichten- und Leistungsumfang.",
    keyFact: "Fassadendämmung WDVS etwa 100-200 €/m², vorgehängte hinterlüftete Fassade etwa 250-350 €/m²",
    priceHeading: "Wie unterscheiden sich WDVS und VHF beim Preis?",
    priceParagraphs: [
      "Für Fassadendämmung mit WDVS führt BauKostenRadar etwa 100 bis 200 Euro pro Quadratmeter. Eine vorgehängte hinterlüftete Fassade liegt in der Datenbasis bei etwa 250 bis 350 Euro pro Quadratmeter; die hinterlegte Position nennt Dämmung und Montage.",
      "Bei 150 m² Fassadenfläche ergeben sich rechnerisch etwa 15.000 bis 30.000 Euro für die WDVS-Position und ungefähr 37.500 bis 52.500 Euro für die VHF-Position. Gerüst, Untergrund und Details müssen im konkreten Angebot geprüft werden.",
    ],
    table: {
      headers: ["Fassadensystem", "Richtwert", "150 m² Beispiel"],
      rows: [
        { cells: ["WDVS", "100-200 €/m²", "15.000-30.000 €"] },
        { cells: ["Vorgehängte hinterlüftete Fassade", "250-350 €/m²", "37.500-52.500 €"] },
      ],
    },
    factorsHeading: "Welche Faktoren verändern die Fassadenkosten?",
    factorsIntro: "Bei beiden Systemen können Untergrund, Gebäudehöhe und Anschlussdetails einen erheblichen Teil der Arbeitskosten bestimmen.",
    factors: [
      "Dämmstoff und Dämmstärke",
      "Untergrund und notwendige Vorarbeiten",
      "Bekleidungsmaterial bei VHF",
      "Fensterlaibungen, Sockel und Gebäudeecken",
      "Gerüst und Gebäudehöhe",
      "Brandschutz- und Detailanforderungen",
    ],
    compareHeading: "Nur vollständige Fassadenaufbauten vergleichen",
    compareParagraphs: [
      "Der höhere Richtwert einer VHF spiegelt einen anderen konstruktiven Aufbau wider. Ein sinnvoller Angebotsvergleich sollte deshalb Dämmstoff, Unterkonstruktion, Bekleidung beziehungsweise Putzsystem und alle Anschlussdetails erfassen.",
      "Für die technische Entscheidung spielen neben Kosten auch Feuchteschutz, Gestaltung, Wartung und der vorhandene Wandaufbau eine Rolle.",
    ],
    faqs: [
      { question: "Was kostet WDVS pro m² 2026?", answer: "BauKostenRadar führt für Fassadendämmung mit WDVS etwa 100 bis 200 Euro pro Quadratmeter als Richtwert." },
      { question: "Was kostet eine vorgehängte hinterlüftete Fassade pro m² 2026?", answer: "BauKostenRadar führt etwa 250 bis 350 Euro pro Quadratmeter. Die hinterlegte Preisposition nennt Dämmung und Montage." },
      { question: "Was kosten 150 m² Fassade im Vergleich?", answer: "Rechnerisch liegen 150 m² bei etwa 15.000 bis 30.000 Euro für WDVS und rund 37.500 bis 52.500 Euro für die VHF-Position. Der konkrete Leistungsumfang muss jeweils separat geprüft werden." },
    ],
    related: [
      { label: "Fassadendämmung Kosten", href: "/ratgeber/fassadendaemmung-kosten-pro-qm" },
      { label: "Vorgehängte hinterlüftete Fassade Kosten", href: "/ratgeber/vorgehaengte-hinterlueftete-fassade-kosten-pro-qm" },
      { label: "Fassade sanieren Kosten", href: "/ratgeber/fassade-sanieren-kosten" },
      { label: "Fassade Kosten 2026", href: "/kosten/fassade" },
      { label: "Dämmung Kosten 2026", href: "/kosten/daemmung" },
    ],
  },
  {
    slug: "heizung-waermepumpe-oder-gasheizung-kosten",
    title: "Wärmepumpe oder Gasheizung Kosten 2026",
    h1: "Wärmepumpe oder Gasheizung: Anschaffungskosten 2026 im Vergleich",
    description: "Wärmepumpe oder Gasheizung 2026: dokumentierte Anschaffungskosten vergleichen, Leistungsumfang, Förderung, Gebäudeeignung und wichtige Zusatzkosten.",
    eyebrow: "Heizsystem Vergleich 2026",
    intro: "Beim Vergleich von Wärmepumpe und Gasheizung muss klar zwischen Investitionskosten und späteren Betriebskosten unterschieden werden. Die BauKostenRadar-Datenbasis erlaubt hier einen Vergleich der dokumentierten Anschaffungs- beziehungsweise Austauschpositionen, nicht der Lebenszykluskosten.",
    keyFact: "Gasheizung austauschen etwa 6.000-12.000 €, Luft-Wasser-Wärmepumpe komplett etwa 25.000-45.000 € vor Förderung",
    priceHeading: "Wie hoch sind die dokumentierten Investitionskosten?",
    priceParagraphs: [
      "Für Gasheizung austauschen führt BauKostenRadar etwa 6.000 bis 12.000 Euro pauschal als Richtwert. Für eine komplette Luft-Wasser-Wärmepumpe liegt die hinterlegte Spanne bei etwa 25.000 bis 45.000 Euro pro Anlage vor Förderung.",
      "Die Positionen haben nicht automatisch denselben Leistungsumfang. Bei einer Wärmepumpe können Anpassungen an Heizflächen, Hydraulik oder Elektrik relevant sein. Bei jeder Heizungsentscheidung müssen außerdem die aktuell geltenden technischen und rechtlichen Rahmenbedingungen separat geprüft werden.",
    ],
    table: {
      headers: ["Heizsystem", "BauKostenRadar-Richtwert", "Einordnung"],
      rows: [
        { cells: ["Gasheizung austauschen", "6.000-12.000 €", "pauschale Austauschposition"] },
        { cells: ["Luft-Wasser-Wärmepumpe komplett", "25.000-45.000 €", "pro Anlage vor Förderung"] },
      ],
    },
    factorsHeading: "Was gehört in einen fairen Heizungsvergleich?",
    factorsIntro: "Ein niedrigerer Anschaffungspreis beantwortet nicht automatisch die Frage nach dem passenden Heizsystem. Gebäude und vorhandene Wärmeverteilung beeinflussen Aufwand und Eignung.",
    factors: [
      "Heizlast und energetischer Zustand des Gebäudes",
      "Vorhandene Heizkörper oder Fußbodenheizung",
      "Warmwasserbereitung und Speicher",
      "Hydraulische Anpassungen und Rohrnetz",
      "Elektroanschluss und Aufstellort",
      "Aktuelle Förderung und rechtliche Rahmenbedingungen",
    ],
    compareHeading: "Investition nicht mit Gesamtkosten verwechseln",
    compareParagraphs: [
      "Die Tabelle vergleicht ausschließlich die in der BauKostenRadar-Datenbasis hinterlegten Investitionspositionen. Strom- oder Gaskosten, Wartung, mögliche CO2-Kosten, Förderung und Nutzungsdauer sind darin nicht zu einem künstlichen Gesamtwert zusammengerechnet.",
      "Für eine konkrete Entscheidung sollte deshalb neben mehreren Fachangeboten auch die Gebäudeeignung betrachtet werden. Förderbedingungen und gesetzliche Vorgaben können sich ändern und sollten projektbezogen aktuell geprüft werden.",
    ],
    faqs: [
      { question: "Was kostet eine Luft-Wasser-Wärmepumpe 2026?", answer: "BauKostenRadar führt für eine komplette Luft-Wasser-Wärmepumpe etwa 25.000 bis 45.000 Euro pro Anlage vor Förderung als Richtwert." },
      { question: "Was kostet Gasheizung austauschen 2026?", answer: "BauKostenRadar führt etwa 6.000 bis 12.000 Euro pauschal als Richtwert für die hinterlegte Austauschposition." },
      { question: "Ist die Wärmepumpe damit immer teurer?", answer: "Die dokumentierte Investitionsspanne liegt höher. Daraus lässt sich aber keine Aussage über Förderung, Betriebskosten, Lebenszykluskosten oder die technische Eignung für ein konkretes Gebäude ableiten." },
    ],
    related: [
      { label: "Luft-Wasser-Wärmepumpe Kosten", href: "/ratgeber/luft-wasser-waermepumpe-kosten" },
      { label: "Gasheizung austauschen Kosten", href: "/ratgeber/gasheizung-austauschen-kosten" },
      { label: "Wärmepumpe Kosten 2026", href: "/ratgeber/waermepumpe-kosten-2026" },
      { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
      { label: "Heizung Kosten 2026", href: "/kosten/heizung" },
    ],
  },
];

export const comparisonGuides: Guide[] = configs.map(createComparisonGuide);
