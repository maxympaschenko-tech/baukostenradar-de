export type GuideTable = {
  headers: string[];
  rows: Array<{ cells: string[]; href?: string }>;
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: GuideTable;
};

export type Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  intro: string;
  keyFact: string;
  sections: GuideSection[];
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
};

export const guides: Guide[] = [
  {
    slug: "sanierungskosten-pro-qm",
    title: "Sanierungskosten pro m² 2026",
    h1: "Sanierungskosten pro m² 2026: Richtwerte nach Umfang",
    description: "Was kostet eine Sanierung pro Quadratmeter? Richtwerte 2026 von leichter Renovierung bis Kernsanierung, mit Rechenbeispielen und Methodik.",
    eyebrow: "Sanierungskosten 2026",
    intro: "Die Kosten pro Quadratmeter hängen vor allem davon ab, ob nur Oberflächen erneuert werden oder ob Technik, Gebäudehülle und Grundriss betroffen sind. BauKostenRadar trennt deshalb vier Sanierungsstufen und zeigt die Spannen als Budgetorientierung.",
    keyFact: "65 bis 3.500 € pro m² je nach Umfang",
    sections: [
      {
        heading: "Sanierungskosten pro m² im Überblick",
        paragraphs: [
          "Für eine belastbare erste Planung ist der Sanierungsumfang wichtiger als ein einzelner Durchschnittswert. Die folgenden Bänder werden auch im Renovierungskosten-Rechner verwendet.",
          "Leichte Renovierung und Kernsanierung sind durch externe Marktangaben verankert. Die mittleren Stufen sind BauKostenRadar-Modellbänder, die den großen Abstand zwischen kosmetischer Renovierung und vollständiger Kernsanierung sinnvoll aufteilen.",
        ],
        table: {
          headers: ["Umfang", "Richtwert 2026", "Typische Arbeiten"],
          rows: [
            { cells: ["Leichte Renovierung", "65 - 180 €/m²", "Maler, Boden, kleinere Ausbesserungen"] },
            { cells: ["Normale Renovierung", "250 - 650 €/m²", "Mehrere Gewerke, Oberflächen, Teilmodernisierung"] },
            { cells: ["Umfangreiche Sanierung", "650 - 1.500 €/m²", "Technik, Bad, Fenster, größere Eingriffe"] },
            { cells: ["Kernsanierung", "1.500 - 3.500 €/m²", "Gebäudehülle, Technik und Innenausbau umfassend"] },
          ],
        },
      },
      {
        heading: "Beispiel: Was bedeutet das für 80 m²?",
        paragraphs: [
          "Bei 80 m² Wohnfläche ergeben sich vor regionaler und qualitativer Anpassung sehr unterschiedliche Budgets. Genau deshalb sollte vor der Planung zuerst der Umfang festgelegt werden.",
        ],
        table: {
          headers: ["Umfang", "80 m² Beispiel"],
          rows: [
            { cells: ["Leicht", "5.200 - 14.400 €"] },
            { cells: ["Normal", "20.000 - 52.000 €"] },
            { cells: ["Umfangreich", "52.000 - 120.000 €"] },
            { cells: ["Kernsanierung", "120.000 - 280.000 €"] },
          ],
        },
      },
      {
        heading: "Welche Faktoren verändern den Quadratmeterpreis?",
        paragraphs: [
          "Der Quadratmeterwert ist nur eine Verdichtung vieler Einzelpositionen. Zwei Wohnungen mit gleicher Fläche können deshalb deutlich unterschiedliche Endkosten haben.",
        ],
        bullets: [
          "Zustand von Elektrik, Leitungen, Heizung und Gebäudehülle",
          "Material- und Ausstattungsstandard",
          "Region, Auslastung und Anfahrt der Fachbetriebe",
          "Abriss, Entsorgung und notwendige Vorarbeiten",
          "Grundrissänderungen und statische Eingriffe",
          "Reserve für ungeplante Arbeiten im Bestand",
        ],
      },
      {
        heading: "So nutzen Sie den Richtwert sinnvoll",
        paragraphs: [
          "Nutzen Sie den Quadratmeterpreis zuerst für die Budgetgröße und zerlegen Sie das Projekt danach in einzelne Gewerke. Für Bad, Elektrik, Boden, Dach, Fenster oder Heizung stehen auf BauKostenRadar eigene Preisverzeichnisse zur Verfügung.",
          "Der Renovierungskosten-Rechner berücksichtigt zusätzlich Qualitätsstandard und Region. Dadurch lässt sich die erste Spanne besser an das konkrete Vorhaben anpassen, ohne einen verbindlichen Angebotspreis vorzutäuschen.",
        ],
      },
    ],
    faqs: [
      { question: "Wie viel kostet eine Sanierung pro m² 2026?", answer: "Je nach Umfang reicht die Orientierung bei BauKostenRadar von etwa 65 bis 180 €/m² für leichte Renovierungen bis etwa 1.500 bis 3.500 €/m² für eine Kernsanierung." },
      { question: "Sind 1.000 €/m² für eine Sanierung realistisch?", answer: "Ja. 1.000 €/m² liegt innerhalb des Modellbands für eine umfangreiche Sanierung. Ob dieser Wert passt, hängt von Technik, Gebäudezustand, Material und Region ab." },
      { question: "Was ist in Sanierungskosten pro m² enthalten?", answer: "Das hängt vom gewählten Umfang ab. Ein Quadratmeter-Richtwert ist eine Budgethilfe und keine feste Leistungsbeschreibung. Einzelne Gewerke sollten deshalb separat geprüft werden." },
      { question: "Wie hoch sollte die Reserve bei einer Sanierung sein?", answer: "Das BauKostenRadar-Modell berücksichtigt für die erste Kalkulation 10 Prozent Reserve. Bei älteren Gebäuden kann je nach Unsicherheit eine höhere individuelle Reserve sinnvoll sein." },
    ],
    related: [
      { label: "Renovierungskosten berechnen", href: "/rechner/renovierungskosten" },
      { label: "Alle Handwerkerpreise", href: "/kosten" },
      { label: "Badsanierung Kosten", href: "/kosten/badsanierung" },
      { label: "Dachsanierung Kosten", href: "/kosten/dachsanierung" },
    ],
  },
  {
    slug: "handwerker-stundensaetze",
    title: "Handwerker Stundensätze 2026",
    h1: "Handwerker-Stundensätze 2026: Was kostet eine Arbeitsstunde?",
    description: "Aktuelle Handwerker-Stundensätze 2026 für Elektriker, Sanitär, Trockenbau und Gartenpflege. Mit Erklärung, was im Stundensatz steckt.",
    eyebrow: "Handwerkerpreise 2026",
    intro: "Ein Handwerker-Stundensatz ist nicht mit dem Nettolohn des Mitarbeiters gleichzusetzen. Im verrechneten Preis stecken unter anderem Lohnnebenkosten, Betrieb, Fahrzeug, Werkzeug, Verwaltung und unternehmerisches Risiko.",
    keyFact: "Typisch etwa 35 bis 90 € pro Stunde in unserer Datenbasis",
    sections: [
      {
        heading: "Stundensätze ausgewählter Gewerke 2026",
        paragraphs: [
          "Die Tabelle zeigt öffentlich dokumentierte Preisbereiche aus der BauKostenRadar-Datenbasis. Sie ist keine pauschale Preisvorgabe für jeden Betrieb, sondern eine Orientierung für die Budgetplanung.",
        ],
        table: {
          headers: ["Gewerk", "Richtwert 2026", "Preisdetail"],
          rows: [
            { cells: ["Elektriker", "50 - 85 €/h", "Elektriker Stundensatz"], href: "/kosten/elektriker" },
            { cells: ["Sanitärinstallateur", "60 - 90 €/h", "Sanitärinstallateur Stundensatz"], href: "/kosten/sanitaer" },
            { cells: ["Trockenbauer", "35 - 60 €/h", "Trockenbauer Stundensatz"], href: "/kosten/trockenbau" },
            { cells: ["Gartenpflege", "35 - 60 €/h", "Gartenpflege"], href: "/kosten/garten" },
          ],
        },
      },
      {
        heading: "Warum kostet eine Handwerkerstunde mehr als der Stundenlohn?",
        paragraphs: [
          "Der Rechnungsbetrag finanziert nicht nur die direkte Arbeitszeit auf der Baustelle. Ein Fachbetrieb muss auch unproduktive Zeiten, Organisation und laufende Betriebskosten tragen.",
        ],
        bullets: [
          "Bruttolohn und Arbeitgeberanteile",
          "Fahrzeug, Kraftstoff und Anfahrt",
          "Werkzeug, Maschinen und Verbrauchsmaterial",
          "Büro, Disposition, Buchhaltung und Versicherungen",
          "Fortbildung, Ausfallzeiten und Gewährleistungsrisiken",
          "Betriebliche Marge und Investitionen",
        ],
      },
      {
        heading: "Stundensatz oder Pauschalpreis: Was ist besser?",
        paragraphs: [
          "Für klar definierte Standardarbeiten ist ein Pauschalpreis oft leichter vergleichbar. Bei Fehlersuche, Reparaturen oder schwer vorhersehbaren Bestandsarbeiten wird dagegen häufig nach Zeit abgerechnet.",
          "Vergleichen Sie deshalb nicht nur den Stundenpreis. Entscheidend sind auch Anfahrt, Mindestberechnung, Materialaufschläge, Anzahl der eingesetzten Personen und der geschätzte Zeitbedarf.",
        ],
      },
      {
        heading: "So vergleichen Sie Angebote sinnvoll",
        paragraphs: [
          "Bitten Sie bei mehreren Angeboten um eine möglichst ähnliche Leistungsbeschreibung. Ein niedriger Stundenpreis kann durch mehr berechnete Stunden oder zusätzliche Nebenkosten relativiert werden.",
          "Für viele Arbeiten zeigt BauKostenRadar neben Stundenpreisen auch Stück-, Quadratmeter- oder Projektpreise. Diese Werte sind häufig besser geeignet, um ein komplettes Vorhaben zu vergleichen.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet eine Handwerkerstunde 2026?", answer: "In der aktuellen BauKostenRadar-Datenbasis liegen ausgewählte Gewerke grob zwischen 35 und 90 Euro pro Stunde. Der konkrete Satz hängt stark von Gewerk, Region und Betrieb ab." },
      { question: "Ist die Anfahrt im Stundensatz enthalten?", answer: "Nicht zwingend. Viele Betriebe rechnen Anfahrt, Fahrzeug oder eine Servicepauschale separat ab. Das sollte vor Auftragserteilung geklärt werden." },
      { question: "Warum sind Meisterstunden teurer?", answer: "Qualifikation, Verantwortung und betriebliche Kosten können zu höheren Verrechnungssätzen führen. Für viele Arbeiten ist aber nicht zwingend jede Stunde eine Meisterstunde." },
      { question: "Wie kann ich Handwerkerkosten besser vergleichen?", answer: "Vergleichen Sie möglichst identische Leistungsumfänge und berücksichtigen Sie neben dem Stundensatz auch Material, Anfahrt, Mindestzeiten und die geschätzte Arbeitsdauer." },
    ],
    related: [
      { label: "Handwerkerkosten-Rechner", href: "/rechner/handwerkerkosten" },
      { label: "Elektriker Kosten", href: "/kosten/elektriker" },
      { label: "Sanitär Kosten", href: "/kosten/sanitaer" },
      { label: "Trockenbau Kosten", href: "/kosten/trockenbau" },
    ],
  },
  {
    slug: "altbausanierung-kosten",
    title: "Altbausanierung Kosten 2026",
    h1: "Altbausanierung Kosten 2026: Budget, Gewerke und Beispiele",
    description: "Altbausanierung Kosten 2026 richtig einschätzen: Richtwerte pro m², Beispielbudgets und die teuersten Gewerke bei einer umfassenden Sanierung.",
    eyebrow: "Altbau sanieren",
    intro: "Bei einem Altbau entscheidet weniger das Baujahr allein als der technische Zustand. Eine Wohnung mit erneuerter Elektrik und Heizung kann deutlich günstiger zu sanieren sein als ein ähnlich altes Objekt mit Feuchte, veralteten Leitungen und sanierungsbedürftiger Gebäudehülle.",
    keyFact: "Bei umfassender Sanierung modelliert BauKostenRadar 650 bis 3.500 €/m²",
    sections: [
      {
        heading: "Welche Kostenstufe passt zu einem Altbau?",
        paragraphs: [
          "Für Altbauten sind vor allem die beiden oberen Stufen des Renovierungsmodells relevant, wenn mehrere technische Gewerke gleichzeitig erneuert werden. Eine reine optische Renovierung kann natürlich deutlich darunter liegen.",
        ],
        table: {
          headers: ["Zustand / Umfang", "Richtwert", "Einordnung"],
          rows: [
            { cells: ["Optische Renovierung", "65 - 180 €/m²", "Oberflächen, Boden, Malerarbeiten"] },
            { cells: ["Teilmodernisierung", "250 - 650 €/m²", "Mehrere Gewerke, aber keine vollständige technische Erneuerung"] },
            { cells: ["Umfangreiche Altbausanierung", "650 - 1.500 €/m²", "Technik, Bad, Fenster und Innenausbau in größerem Umfang"] },
            { cells: ["Kernsanierung", "1.500 - 3.500 €/m²", "Sehr umfassende Erneuerung von Technik, Hülle und Ausbau"] },
          ],
        },
      },
      {
        heading: "Beispielbudget für 100 m² Altbau",
        paragraphs: [
          "Bei 100 m² ergeben die Modellbänder sehr unterschiedliche Gesamtbudgets. Vor dem Kauf oder vor Beginn der Planung sollte deshalb geprüft werden, welche Gewerke tatsächlich fällig sind.",
        ],
        table: {
          headers: ["Sanierungsumfang", "100 m² Beispiel"],
          rows: [
            { cells: ["Teilmodernisierung", "25.000 - 65.000 €"] },
            { cells: ["Umfangreiche Sanierung", "65.000 - 150.000 €"] },
            { cells: ["Kernsanierung", "150.000 - 350.000 €"] },
          ],
        },
      },
      {
        heading: "Diese Gewerke treiben Altbaukosten besonders",
        paragraphs: [
          "Große Budgets entstehen meist nicht durch einen einzelnen neuen Boden oder Anstrich, sondern durch mehrere technische und bauliche Maßnahmen gleichzeitig.",
        ],
        bullets: [
          "Elektroinstallation und Sicherungsverteilung",
          "Sanitärleitungen und komplette Bäder",
          "Heizung und gegebenenfalls Wärmeverteilung",
          "Fenster und energetische Maßnahmen",
          "Dach, Dämmung und Fassade",
          "Bodenaufbau, Trockenbau und notwendige Ausgleichsarbeiten",
        ],
      },
      {
        heading: "Vor der Sanierung: Zustand statt Baujahr prüfen",
        paragraphs: [
          "Ein seriöses Budget beginnt mit einer Bestandsaufnahme. Besonders wichtig sind Feuchte, Dach, Fenster, Leitungen, Elektroverteilung und Heizung. Erst danach lässt sich entscheiden, ob eine Teilmodernisierung oder eine Kernsanierung realistisch ist.",
          "Auf BauKostenRadar können Sie die wichtigsten Gewerke einzeln öffnen und die dort dokumentierten Preispositionen mit dem Gesamtmodell kombinieren.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet eine Altbausanierung pro m²?", answer: "Für eine umfangreiche Sanierung verwendet BauKostenRadar ein Modellband von 650 bis 1.500 €/m². Eine Kernsanierung wird mit etwa 1.500 bis 3.500 €/m² eingeordnet." },
      { question: "Was kostet die Sanierung eines 100-m²-Altbaus?", answer: "Je nach Umfang reicht die Modellorientierung bei 100 m² von etwa 25.000 bis 65.000 Euro für eine Teilmodernisierung bis etwa 150.000 bis 350.000 Euro für eine Kernsanierung." },
      { question: "Welche Altbauarbeiten sind oft besonders teuer?", answer: "Hohe Kosten entstehen häufig bei Elektro, Sanitär, Heizung, Dach, Fenstern, Dämmung und mehreren gleichzeitig notwendigen Innenausbauarbeiten." },
      { question: "Wie viel Reserve sollte ich beim Altbau einplanen?", answer: "Das allgemeine BauKostenRadar-Modell enthält 10 Prozent Reserve. Bei unsicherem Bestand können individuell höhere Reserven sinnvoll sein." },
    ],
    related: [
      { label: "Sanierungskosten pro m²", href: "/ratgeber/sanierungskosten-pro-qm" },
      { label: "Renovierungskosten-Rechner", href: "/rechner/renovierungskosten" },
      { label: "Elektriker Kosten", href: "/kosten/elektriker" },
      { label: "Fenster Kosten", href: "/kosten/fenster" },
      { label: "Dachsanierung Kosten", href: "/kosten/dachsanierung" },
    ],
  },
  {
    slug: "wohnung-renovieren-kosten",
    title: "Wohnung renovieren Kosten 2026",
    h1: "Wohnung renovieren: Kosten 2026 für 60, 80 und 100 m²",
    description: "Was kostet es, eine Wohnung zu renovieren? Beispiele für 60, 80 und 100 m², typische Kostenblöcke und Richtwerte 2026.",
    eyebrow: "Wohnung renovieren",
    intro: "Bei einer Wohnungsrenovierung reicht die Spanne von Maler- und Bodenarbeiten bis zur umfassenden Erneuerung von Bad, Elektrik und Innenausbau. Die Wohnfläche allein reicht deshalb nicht, um ein realistisches Budget zu bestimmen.",
    keyFact: "Leichte Renovierung: 65 bis 180 €/m², normale Renovierung: 250 bis 650 €/m²",
    sections: [
      {
        heading: "Renovierungskosten nach Wohnungsgröße",
        paragraphs: [
          "Die Beispiele zeigen zwei typische Planungsstufen: eine leichte Renovierung für Oberflächen und eine normale Renovierung mit mehreren Gewerken. Region und Qualitätsstandard sind noch nicht eingerechnet.",
        ],
        table: {
          headers: ["Wohnfläche", "Leichte Renovierung", "Normale Renovierung"],
          rows: [
            { cells: ["60 m²", "3.900 - 10.800 €", "15.000 - 39.000 €"] },
            { cells: ["80 m²", "5.200 - 14.400 €", "20.000 - 52.000 €"] },
            { cells: ["100 m²", "6.500 - 18.000 €", "25.000 - 65.000 €"] },
          ],
        },
      },
      {
        heading: "Was gehört zu einer leichten Wohnungsrenovierung?",
        paragraphs: [
          "Eine leichte Renovierung konzentriert sich meist auf sichtbare Oberflächen und Arbeiten ohne große Eingriffe in die Haustechnik.",
        ],
        bullets: [
          "Wände und Decken streichen oder tapezieren",
          "Laminat, Vinyl oder Aufarbeitung vorhandener Böden",
          "Kleinere Trockenbau- und Ausbesserungsarbeiten",
          "Austausch einzelner Schalter, Steckdosen oder Sanitärobjekte",
          "Kosmetische Maßnahmen vor Einzug oder Vermietung",
        ],
      },
      {
        heading: "Wann wird die Renovierung deutlich teurer?",
        paragraphs: [
          "Sobald Bad, Elektroinstallation, Leitungen, Fenster oder umfangreicher Bodenaufbau dazukommen, verschiebt sich das Projekt in Richtung normaler oder umfangreicher Sanierung.",
          "Besonders ein komplettes Bad ist kein kleiner Nebenposten: In der BauKostenRadar-Datenbasis liegt eine komplette Badsanierung als Orientierung im fünfstelligen Bereich.",
        ],
      },
      {
        heading: "Budget Schritt für Schritt aufbauen",
        paragraphs: [
          "Beginnen Sie mit der Wohnfläche und dem Renovierungsumfang. Prüfen Sie danach die größten Einzelgewerke und ergänzen Sie regionale Unterschiede. So entsteht ein deutlich belastbareres Budget als mit einer einzigen Pauschalzahl.",
          "Der Renovierungskosten-Rechner kombiniert Fläche, Umfang, Standard und Region. Für konkrete Einzelarbeiten steht zusätzlich der Handwerkerkosten-Rechner zur Verfügung.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet es, eine 60-m²-Wohnung zu renovieren?", answer: "Für eine leichte Renovierung ergibt das BauKostenRadar-Modell etwa 3.900 bis 10.800 Euro. Für eine normale Renovierung mit mehreren Gewerken etwa 15.000 bis 39.000 Euro, jeweils vor regionaler und qualitativer Anpassung." },
      { question: "Was kostet eine 80-m²-Wohnung komplett zu renovieren?", answer: "Das hängt vom Umfang ab. Eine leichte Renovierung liegt im Modell bei etwa 5.200 bis 14.400 Euro, eine normale Renovierung bei etwa 20.000 bis 52.000 Euro. Eine umfangreiche Sanierung kann deutlich höher liegen." },
      { question: "Welche Arbeiten sind bei einer Wohnungsrenovierung am teuersten?", answer: "Hohe Einzelposten entstehen häufig durch komplette Bäder, Elektroarbeiten, größere Bodenarbeiten, Fenster sowie technische Erneuerungen." },
      { question: "Wie kann ich Renovierungskosten genauer berechnen?", answer: "Nutzen Sie Fläche und Umfang als Basis und ergänzen Sie Qualitätsstandard, Region und die wichtigsten Einzelgewerke. Der BauKostenRadar-Rechner bildet genau diese Schritte ab." },
    ],
    related: [
      { label: "Renovierungskosten-Rechner", href: "/rechner/renovierungskosten" },
      { label: "Handwerkerkosten-Rechner", href: "/rechner/handwerkerkosten" },
      { label: "Maler Kosten", href: "/kosten/maler" },
      { label: "Boden Kosten", href: "/kosten/bodenleger" },
      { label: "Badsanierung Kosten", href: "/kosten/badsanierung" },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
