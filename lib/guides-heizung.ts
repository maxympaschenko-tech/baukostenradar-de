import type { Guide } from "@/lib/guides";

export const heizungGuides: Guide[] = [
  {
    slug: "heizung-erneuern-kosten",
    title: "Heizung erneuern Kosten 2026",
    h1: "Heizung erneuern Kosten 2026: Wärmeerzeuger, Heizflächen und Optimierung",
    description: "Heizung erneuern Kosten 2026: aktuelle Richtwerte für Wärmeerzeuger, Heizkörper, Fußbodenheizung, hydraulischen Abgleich und Heizungspumpe vergleichen.",
    eyebrow: "Heizung erneuern 2026",
    intro: "Beim Erneuern einer Heizung entscheidet nicht nur der Wärmeerzeuger über das Budget. Heizflächen, Verteilung, hydraulischer Abgleich, Pumpe und notwendige Anpassungen im Bestand können einen erheblichen Teil der Kosten ausmachen. BauKostenRadar trennt diese Preisblöcke deshalb bewusst.",
    keyFact: "Heizkörper ab etwa 300-700 € pro Standardtausch, Fußbodenheizung im Altbau etwa 80-150 €/m², hydraulischer Abgleich etwa 650-1.250 €",
    sections: [
      {
        heading: "Welche Kostenblöcke gehören zur Heizungserneuerung?",
        paragraphs: [
          "Für den reinen Austausch eines Standardflachheizkörpers inklusive Montage führt die aktuelle Datenbasis etwa 300 bis 700 Euro. Eine Fußbodenheizung im Altbau nachzurüsten liegt bei etwa 80 bis 150 Euro pro Quadratmeter, während ein hydraulischer Abgleich im Einfamilienhaus mit etwa 650 bis 1.250 Euro geführt wird.",
          "Beim Wechsel des Wärmeerzeugers kommen eigene Projektkosten hinzu. Eine Wärmepumpe im Altbau inklusive Einbau und Anpassungen wird im separaten Wärmepumpen-Katalog mit etwa 30.000 bis 55.000 Euro vor Förderung geführt. Deshalb sollten Wärmeerzeuger und Wärmeverteilung im Angebot getrennt erkennbar sein.",
        ],
        table: {
          headers: ["Heizungsbaustein", "Richtwert 2026"],
          rows: [
            { cells: ["Standardflachheizkörper austauschen inkl. Montage", "300-700 € pro Heizkörper"], href: "/kosten/heizung/leistung/standardflachheizkoerper-austauschen-inkl-montage" },
            { cells: ["Fußbodenheizung im Altbau nachrüsten", "80-150 €/m²"], href: "/kosten/heizung/leistung/fussbodenheizung-im-altbau-nachruesten" },
            { cells: ["Hydraulischer Abgleich Einfamilienhaus", "650-1.250 €"], href: "/kosten/heizung/leistung/hydraulischer-abgleich-einfamilienhaus" },
            { cells: ["Heizungspumpe gegen Hocheffizienzpumpe tauschen", "300-400 €"], href: "/kosten/heizung/leistung/heizungspumpe-gegen-hocheffizienzpumpe-tauschen" },
            { cells: ["Wärmepumpe im Altbau inkl. Einbau und Anpassungen", "30.000-55.000 € vor Förderung"], href: "/kosten/waermepumpe/leistung/waermepumpe-im-altbau-inkl-einbau-und-anpassungen" },
          ],
        },
      },
      {
        heading: "Wärmeerzeuger und Wärmeverteilung getrennt planen",
        paragraphs: [
          "Ein neuer Wärmeerzeuger kann zusätzliche Arbeiten an Heizkörpern, Fußbodenheizung, Hydraulik oder Elektrik auslösen. Besonders bei niedrigen Vorlauftemperaturen ist entscheidend, ob vorhandene Heizflächen ausreichend dimensioniert sind.",
          "Für einen belastbaren Angebotsvergleich sollte daher klar sein, welche Bauteile bleiben, welche ersetzt werden und welche Optimierungsarbeiten bereits enthalten sind.",
        ],
        bullets: [
          "Wärmeerzeuger inklusive Montage und Inbetriebnahme",
          "Heizkörper oder Flächenheizung",
          "Rohrnetz und Heizkreisverteiler",
          "hydraulischer Abgleich",
          "Umwälzpumpe und hydraulische Komponenten",
          "Demontage und Entsorgung alter Bauteile",
          "Elektro- und Nebenarbeiten",
        ],
      },
      {
        heading: "Welche Heizungsmaßnahme passt zum Projekt?",
        paragraphs: [
          "Wer nur einzelne Heizkörper ersetzt, braucht einen anderen Kostenrahmen als bei einer flächigen Fußbodenheizung oder einem vollständigen Wärmeerzeugerwechsel. Die Heizung sollte deshalb als System geplant werden, nicht als Sammlung unabhängiger Einzelpreise.",
          "Für Bestandsgebäude lohnt es sich, Heizlast, Vorlauftemperatur und hydraulischen Zustand vor größeren Investitionen prüfen zu lassen. Die Richtwerte auf BauKostenRadar dienen dabei als Budgetorientierung und ersetzen kein objektspezifisches Fachangebot.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Heizung erneuern 2026?", answer: "Das hängt stark vom Umfang ab. BauKostenRadar führt einzelne Heizkörper ab etwa 300 bis 700 Euro, Fußbodenheizung im Altbau mit etwa 80 bis 150 Euro pro Quadratmeter und eine Wärmepumpe im Altbau inklusive Einbau und Anpassungen mit etwa 30.000 bis 55.000 Euro vor Förderung." },
      { question: "Was kostet ein hydraulischer Abgleich im Einfamilienhaus?", answer: "Die aktuelle Heizung-Datenbasis führt etwa 650 bis 1.250 Euro pro Einfamilienhaus." },
      { question: "Was kostet eine neue Heizungspumpe?", answer: "Für den Tausch gegen eine Hocheffizienzpumpe führt BauKostenRadar etwa 300 bis 400 Euro als Richtwert." },
    ],
    related: [
      { label: "Heizung Preisverzeichnis", href: "/kosten/heizung" },
      { label: "Heizkörper austauschen Kosten", href: "/ratgeber/heizkoerper-austauschen-kosten" },
      { label: "Fußbodenheizung Kosten", href: "/ratgeber/fussbodenheizung-kosten" },
      { label: "Hydraulischer Abgleich Kosten", href: "/ratgeber/hydraulischer-abgleich-kosten" },
      { label: "Heizungspumpe tauschen Kosten", href: "/ratgeber/heizungspumpe-tauschen-kosten" },
      { label: "Gasheizung austauschen Kosten", href: "/ratgeber/gasheizung-austauschen-kosten" },
      { label: "Heizkörper montieren Kosten", href: "/ratgeber/heizkoerper-montieren-kosten" },
      { label: "Heizungswartung Kosten", href: "/ratgeber/heizungswartung-kosten" },
      { label: "Heizung in Berlin", href: "/kosten/heizung/berlin" },
      { label: "Heizungskosten berechnen", href: "/rechner/handwerkerkosten?gewerk=heizung&leistung=standardflachheizkoerper-austauschen-inkl-montage" },
    ],
  },
  {
    slug: "heizkoerper-austauschen-kosten",
    title: "Heizkörper austauschen Kosten 2026",
    h1: "Heizkörper austauschen Kosten 2026: Standard, Bad, Niedertemperatur und Design",
    description: "Heizkörper austauschen Kosten 2026: aktuelle Richtwerte inklusive Montage für Standard-, Bad-, Niedertemperatur- und Designheizkörper vergleichen.",
    eyebrow: "Heizkörper 2026",
    intro: "Beim Heizkörpertausch bestimmen Bauart, Größe, Anschlusslage und notwendige Anpassungen am Rohrnetz den tatsächlichen Aufwand. Die aktuelle Heizung-Datenbasis trennt Standardflachheizkörper, Badheizkörper, Niedertemperatur- und Designheizkörper.",
    keyFact: "Standardflachheizkörper austauschen inklusive Montage etwa 300-700 € pro Heizkörper",
    sections: [
      {
        heading: "Was kostet ein neuer Heizkörper inklusive Austausch?",
        paragraphs: [
          "Für einen Standardflachheizkörper inklusive Austausch und Montage führt BauKostenRadar etwa 300 bis 700 Euro. Badheizkörper liegen bei etwa 350 bis 800 Euro, Niedertemperaturheizkörper bei etwa 400 bis 900 Euro und Designheizkörper bei etwa 500 bis 1.200 Euro.",
          "Die Spannen sind Stückpreise für die jeweilige hinterlegte Leistung. Größere Umbauten am Rohrnetz, neue Leitungswege oder zusätzliche hydraulische Arbeiten müssen im Angebot separat geprüft werden.",
        ],
        table: {
          headers: ["Heizkörper", "Richtwert 2026"],
          rows: [
            { cells: ["Standardflachheizkörper", "300-700 €"], href: "/kosten/heizung/leistung/standardflachheizkoerper-austauschen-inkl-montage" },
            { cells: ["Badheizkörper", "350-800 €"], href: "/kosten/heizung/leistung/badheizkoerper-austauschen-inkl-montage" },
            { cells: ["Niedertemperaturheizkörper", "400-900 €"], href: "/kosten/heizung/leistung/niedertemperaturheizkoerper-austauschen-inkl-montage" },
            { cells: ["Designheizkörper", "500-1.200 €"], href: "/kosten/heizung/leistung/designheizkoerper-austauschen-inkl-montage" },
          ],
        },
      },
      {
        heading: "Welche Faktoren verändern den Heizkörperpreis?",
        paragraphs: ["Ein 1:1-Tausch an vorhandenen Anschlüssen ist meist einfacher als ein Wechsel von Bauart, Abmessung oder Anschlussposition."],
        bullets: [
          "Heizkörpergröße und Wärmeleistung",
          "Bauart und Oberfläche",
          "vorhandene oder zu ändernde Anschlüsse",
          "Thermostatventil und Rücklaufverschraubung",
          "Entleerung, Befüllung und Entlüftung der Anlage",
          "Demontage und Entsorgung des Altgeräts",
          "hydraulische Optimierung nach mehreren Änderungen",
        ],
      },
      {
        heading: "Niedertemperaturheizkörper bei Wärmepumpe einordnen",
        paragraphs: [
          "Niedertemperaturheizkörper können bei Systemen mit niedriger Vorlauftemperatur relevant sein. Ob sie im konkreten Gebäude ausreichen, hängt aber von Heizlast, Heizkörpergröße und Systemtemperaturen ab.",
          "Wer mehrere Heizkörper gleichzeitig ersetzt, sollte deshalb nicht nur Stückpreise vergleichen, sondern die Wärmeverteilung als Gesamtsystem prüfen lassen.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Heizkörper austauschen 2026?", answer: "Für einen Standardflachheizkörper inklusive Montage führt BauKostenRadar etwa 300 bis 700 Euro pro Heizkörper." },
      { question: "Was kostet ein Niedertemperaturheizkörper?", answer: "Die aktuelle Datenbasis führt für den Austausch inklusive Montage etwa 400 bis 900 Euro pro Heizkörper." },
      { question: "Sind Rohrumbauten im Heizkörperpreis enthalten?", answer: "Nicht automatisch. Größere Änderungen an Leitungswegen oder Anschlüssen sollten im Fachangebot separat ausgewiesen werden." },
    ],
    related: [
      { label: "Standardflachheizkörper Preisdetail", href: "/kosten/heizung/leistung/standardflachheizkoerper-austauschen-inkl-montage" },
      { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
      { label: "Heizkörper montieren Kosten", href: "/ratgeber/heizkoerper-montieren-kosten" },
      { label: "Thermostat installieren Kosten", href: "/ratgeber/thermostat-installieren-kosten" },
      { label: "Hydraulischer Abgleich Kosten", href: "/ratgeber/hydraulischer-abgleich-kosten" },
      { label: "Heizung Preisverzeichnis", href: "/kosten/heizung" },
      { label: "Heizkörper berechnen", href: "/rechner/handwerkerkosten?gewerk=heizung&leistung=standardflachheizkoerper-austauschen-inkl-montage" },
    ],
  },
  {
    slug: "fussbodenheizung-kosten",
    title: "Fußbodenheizung Kosten 2026",
    h1: "Fußbodenheizung Kosten 2026: Nasssystem, Dünnschicht, Trockenbau und Altbau",
    description: "Fußbodenheizung Kosten 2026 pro m²: Nasssystem, Dünnschichtsystem, Trockenbausystem und Altbau-Nachrüstung mit Heizkreisverteiler vergleichen.",
    eyebrow: "Fußbodenheizung 2026",
    intro: "Die Kosten einer Fußbodenheizung hängen stark vom System und vom vorhandenen Bodenaufbau ab. Im Neubau und bei umfassendem Neuaufbau sind andere Lösungen sinnvoll als bei einer Nachrüstung im Bestand mit begrenzter Aufbauhöhe.",
    keyFact: "Fußbodenheizung je nach System etwa 30-150 €/m²; Altbau-Nachrüstung etwa 80-150 €/m²",
    sections: [
      {
        heading: "Was kostet Fußbodenheizung pro m² 2026?",
        paragraphs: [
          "BauKostenRadar führt für ein Nasssystem etwa 40 bis 105 Euro pro Quadratmeter, für ein Dünnschichtsystem etwa 30 bis 85 Euro und für ein Trockenbausystem etwa 55 bis 115 Euro. Für die Nachrüstung im Altbau liegt die aktuelle Orientierung bei etwa 80 bis 150 Euro pro Quadratmeter.",
          "Ein Heizkreisverteiler wird separat mit etwa 300 bis 1.200 Euro geführt. Estrich, Bodenbelag, Rückbau und weitere Nebenarbeiten können je nach Projekt zusätzliche Kostenblöcke sein.",
        ],
        table: {
          headers: ["System", "Richtwert 2026"],
          rows: [
            { cells: ["Nasssystem", "40-105 €/m²"], href: "/kosten/heizung/leistung/fussbodenheizung-nasssystem-verlegen" },
            { cells: ["Dünnschichtsystem", "30-85 €/m²"], href: "/kosten/heizung/leistung/fussbodenheizung-duennschichtsystem-verlegen" },
            { cells: ["Trockenbausystem", "55-115 €/m²"], href: "/kosten/heizung/leistung/fussbodenheizung-trockenbausystem-verlegen" },
            { cells: ["Altbau nachrüsten", "80-150 €/m²"], href: "/kosten/heizung/leistung/fussbodenheizung-im-altbau-nachruesten" },
            { cells: ["Heizkreisverteiler", "300-1.200 €"], href: "/kosten/heizung/leistung/heizkreisverteiler-fuer-fussbodenheizung" },
          ],
        },
      },
      {
        heading: "Welches Fußbodenheizungssystem passt zum Bestand?",
        paragraphs: ["Aufbauhöhe, Untergrund, bestehender Estrich und gewünschter Bodenbelag entscheiden wesentlich darüber, welches System technisch sinnvoll ist."],
        bullets: [
          "verfügbare Aufbauhöhe",
          "Neubau oder Bestand",
          "bestehender Estrich und notwendiger Rückbau",
          "Trocken- oder Nassbauweise",
          "Heizkreisanzahl und Verteiler",
          "Dämmung unter dem Heizsystem",
          "späterer Bodenbelag und zulässiger Wärmedurchlasswiderstand",
        ],
      },
      {
        heading: "100-m²-Beispiel und Systempreis nicht vermischen",
        paragraphs: [
          "Auf BauKostenRadar existiert bereits ein separates Szenario für 100 m² Fußbodenheizung. Diese Seite hier vergleicht dagegen die aktuellen Systempreise pro Quadratmeter und die Altbau-Nachrüstung.",
          "Für ein konkretes Projekt sollte immer geprüft werden, welche Nebenarbeiten im Quadratmeterpreis enthalten sind. Zwei Angebote sind nur dann vergleichbar, wenn Bodenaufbau, Verteiler, Regelung und Rückbau ähnlich abgegrenzt sind.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Fußbodenheizung pro m² 2026?", answer: "Je nach System führt BauKostenRadar etwa 30 bis 115 Euro pro Quadratmeter; die Altbau-Nachrüstung liegt bei etwa 80 bis 150 Euro pro Quadratmeter." },
      { question: "Was kostet Fußbodenheizung im Altbau?", answer: "Die aktuelle Heizung-Datenbasis führt etwa 80 bis 150 Euro pro Quadratmeter für die Nachrüstung im Altbau." },
      { question: "Ist der Heizkreisverteiler enthalten?", answer: "Nicht automatisch. BauKostenRadar führt den Heizkreisverteiler als eigene Position mit etwa 300 bis 1.200 Euro." },
    ],
    related: [
      { label: "Altbau-Nachrüstung Preisdetail", href: "/kosten/heizung/leistung/fussbodenheizung-im-altbau-nachruesten" },
      { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
      { label: "Fußbodenheizung 100 m² Kosten", href: "/ratgeber/fussbodenheizung-100-qm-kosten" },
      { label: "Hydraulischer Abgleich Kosten", href: "/ratgeber/hydraulischer-abgleich-kosten" },
      { label: "Heizung Preisverzeichnis", href: "/kosten/heizung" },
      { label: "Heizung in Berlin", href: "/kosten/heizung/berlin" },
      { label: "Fußbodenheizung berechnen", href: "/rechner/handwerkerkosten?gewerk=heizung&leistung=fussbodenheizung-im-altbau-nachruesten" },
    ],
  },
  {
    slug: "hydraulischer-abgleich-kosten",
    title: "Hydraulischer Abgleich Kosten 2026",
    h1: "Hydraulischer Abgleich Kosten 2026: Einfamilienhaus und Paket mit Heizungspumpe",
    description: "Hydraulischer Abgleich Kosten 2026: Richtwert für ein Einfamilienhaus, Paket mit Hocheffizienzpumpe, Leistungsumfang und Angebotsvergleich.",
    eyebrow: "Hydraulischer Abgleich 2026",
    intro: "Ein hydraulischer Abgleich stimmt Volumenströme und Heizflächen so aufeinander ab, dass die Wärme im System passend verteilt wird. Die Kosten hängen von Anlagengröße, vorhandenen Ventilen und dem notwendigen Einstell- und Dokumentationsaufwand ab.",
    keyFact: "Hydraulischer Abgleich im Einfamilienhaus etwa 650-1.250 € in der aktuellen Heizung-Datenbasis",
    sections: [
      {
        heading: "Was kostet ein hydraulischer Abgleich 2026?",
        paragraphs: [
          "Für einen hydraulischen Abgleich im Einfamilienhaus führt BauKostenRadar etwa 650 bis 1.250 Euro. Eine dokumentierte Paketposition aus Hocheffizienzpumpe plus hydraulischem Abgleich liegt bei etwa 1.325 Euro.",
          "Die Paketposition ist nicht einfach mit dem Einzelpreis zu addieren, sondern beschreibt einen eigenen Leistungsumfang. Für einen Angebotsvergleich sollte daher geprüft werden, welche Ventile, Berechnungen, Einstellungen und Pumpenarbeiten tatsächlich enthalten sind.",
        ],
        table: {
          headers: ["Leistung", "Richtwert 2026"],
          rows: [
            { cells: ["Hydraulischer Abgleich Einfamilienhaus", "650-1.250 €"], href: "/kosten/heizung/leistung/hydraulischer-abgleich-einfamilienhaus" },
            { cells: ["Heizungspumpe plus hydraulischer Abgleich", "ca. 1.325 €"], href: "/kosten/heizung/leistung/heizungspumpe-plus-hydraulischer-abgleich" },
          ],
        },
      },
      {
        heading: "Was sollte im Angebot für den Abgleich stehen?",
        paragraphs: ["Der reine Begriff hydraulischer Abgleich sagt noch nicht, welche Vorarbeiten und Komponenten enthalten sind. Der Leistungsumfang sollte deshalb konkret beschrieben sein."],
        bullets: [
          "Erfassung von Heizflächen und Anlagenparametern",
          "Berechnung oder Ermittlung der erforderlichen Volumenströme",
          "Prüfung vorhandener Thermostatventile",
          "Einstellung der Heizkörper oder Heizkreise",
          "Anpassung von Pumpen- und Regelparametern",
          "Dokumentation der Einstellungen",
          "separat ausgewiesene Material- oder Pumpenkosten",
        ],
      },
      {
        heading: "Abgleich und Pumpentausch als getrennte Entscheidungen",
        paragraphs: [
          "Ein Pumpentausch und ein hydraulischer Abgleich können technisch zusammenpassen, sind aber unterschiedliche Leistungen. Deshalb führt BauKostenRadar sowohl Einzelpositionen als auch eine Paketposition.",
          "Wer mehrere Heizkörper oder die Wärmeverteilung verändert, sollte prüfen lassen, ob eine neue hydraulische Einstellung des Systems sinnvoll ist.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet ein hydraulischer Abgleich 2026?", answer: "BauKostenRadar führt etwa 650 bis 1.250 Euro für ein Einfamilienhaus als aktuellen Richtwert." },
      { question: "Was kostet Heizungspumpe plus hydraulischer Abgleich?", answer: "Die aktuelle Datenbasis enthält eine Paketposition von etwa 1.325 Euro." },
      { question: "Ist eine neue Heizungspumpe im hydraulischen Abgleich enthalten?", answer: "Nicht automatisch. Der reine Abgleich und der Pumpentausch sind getrennte Leistungen; es existiert zusätzlich eine eigene Paketposition für beides zusammen." },
    ],
    related: [
      { label: "Hydraulischer Abgleich Preisdetail", href: "/kosten/heizung/leistung/hydraulischer-abgleich-einfamilienhaus" },
      { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
      { label: "Heizungspumpe tauschen Kosten", href: "/ratgeber/heizungspumpe-tauschen-kosten" },
      { label: "Heizkörper austauschen Kosten", href: "/ratgeber/heizkoerper-austauschen-kosten" },
      { label: "Fußbodenheizung Kosten", href: "/ratgeber/fussbodenheizung-kosten" },
      { label: "Heizung Preisverzeichnis", href: "/kosten/heizung" },
      { label: "Abgleich berechnen", href: "/rechner/handwerkerkosten?gewerk=heizung&leistung=hydraulischer-abgleich-einfamilienhaus" },
    ],
  },
  {
    slug: "heizungspumpe-tauschen-kosten",
    title: "Heizungspumpe tauschen Kosten 2026",
    h1: "Heizungspumpe tauschen Kosten 2026: Hocheffizienzpumpe und hydraulischer Abgleich",
    description: "Heizungspumpe tauschen Kosten 2026: Richtwert für Hocheffizienzpumpe, Paket mit hydraulischem Abgleich und wichtige Punkte für den Angebotsvergleich.",
    eyebrow: "Heizungspumpe 2026",
    intro: "Die Heizungspumpe bewegt das Heizwasser durch das System. Beim Austausch sollte nicht nur der Pumpenpreis betrachtet werden, sondern auch Montage, elektrische Anbindung, Einstellung und die hydraulische Situation der Heizungsanlage.",
    keyFact: "Heizungspumpe gegen Hocheffizienzpumpe tauschen etwa 300-400 € in der aktuellen Datenbasis",
    sections: [
      {
        heading: "Was kostet eine neue Heizungspumpe 2026?",
        paragraphs: [
          "Für den Tausch einer Heizungspumpe gegen eine Hocheffizienzpumpe führt BauKostenRadar etwa 300 bis 400 Euro. Ein Paket aus Heizungspumpe plus hydraulischem Abgleich ist mit etwa 1.325 Euro als eigene Preisposition hinterlegt.",
          "Ein Schlamm- oder Magnetabscheider inklusive Installation liegt ebenfalls bei etwa 300 bis 400 Euro, beschreibt aber eine andere hydraulische Komponente und sollte nicht mit dem Pumpentausch gleichgesetzt werden.",
        ],
        table: {
          headers: ["Leistung", "Richtwert 2026"],
          rows: [
            { cells: ["Hocheffizienzpumpe tauschen", "300-400 €"], href: "/kosten/heizung/leistung/heizungspumpe-gegen-hocheffizienzpumpe-tauschen" },
            { cells: ["Pumpe plus hydraulischer Abgleich", "ca. 1.325 €"], href: "/kosten/heizung/leistung/heizungspumpe-plus-hydraulischer-abgleich" },
            { cells: ["Schlamm- oder Magnetabscheider inkl. Installation", "300-400 €"], href: "/kosten/heizung/leistung/schlamm-oder-magnetabscheider-inkl-installation" },
          ],
        },
      },
      {
        heading: "Welche Arbeiten gehören zum Pumpentausch?",
        paragraphs: ["Der konkrete Aufwand hängt davon ab, wie gut die vorhandene Pumpe zugänglich ist und ob Anschlüsse, Absperrungen oder elektrische Komponenten angepasst werden müssen."],
        bullets: [
          "Demontage der alten Umwälzpumpe",
          "passende Dimensionierung der neuen Pumpe",
          "Montage und Dichtheitskontrolle",
          "elektrischer Anschluss",
          "Einstellung der Förderkennlinie",
          "Entlüftung und Funktionskontrolle",
          "Abgrenzung zu hydraulischem Abgleich und weiteren Komponenten",
        ],
      },
      {
        heading: "Pumpe, Abgleich und Abscheider nicht als eine Position lesen",
        paragraphs: [
          "Die drei Preispositionen beschreiben unterschiedliche Leistungen. Ein Angebot sollte deshalb klar ausweisen, ob nur die Pumpe ersetzt wird oder zusätzlich ein hydraulischer Abgleich beziehungsweise ein Abscheider enthalten ist.",
          "Bei älteren Anlagen kann eine Systemprüfung helfen, unnötige Doppelarbeiten zu vermeiden und die neue Pumpe passend einzustellen.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Heizungspumpe tauschen 2026?", answer: "BauKostenRadar führt etwa 300 bis 400 Euro für den Tausch gegen eine Hocheffizienzpumpe." },
      { question: "Was kostet eine Heizungspumpe mit hydraulischem Abgleich?", answer: "Die aktuelle Datenbasis enthält dafür eine separate Paketposition von etwa 1.325 Euro." },
      { question: "Ist ein Schlammabscheider beim Pumpentausch enthalten?", answer: "Nicht automatisch. BauKostenRadar führt Schlamm- oder Magnetabscheider inklusive Installation als eigene Position." },
    ],
    related: [
      { label: "Heizungspumpe Preisdetail", href: "/kosten/heizung/leistung/heizungspumpe-gegen-hocheffizienzpumpe-tauschen" },
      { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
      { label: "Hydraulischer Abgleich Kosten", href: "/ratgeber/hydraulischer-abgleich-kosten" },
      { label: "Heizkörper austauschen Kosten", href: "/ratgeber/heizkoerper-austauschen-kosten" },
      { label: "Heizungswartung Kosten", href: "/ratgeber/heizungswartung-kosten" },
      { label: "Heizung Preisverzeichnis", href: "/kosten/heizung" },
      { label: "Heizungspumpe berechnen", href: "/rechner/handwerkerkosten?gewerk=heizung&leistung=heizungspumpe-gegen-hocheffizienzpumpe-tauschen" },
    ],
  },
];
