import type { Guide } from "@/lib/guides";

export const scenarioGuides: Guide[] = [
  {
    slug: "dach-150-qm-kosten",
    title: "Dach 150 m² Kosten 2026",
    h1: "Dach mit 150 m² sanieren: Kosten 2026 im Beispiel",
    description: "Was kostet die Sanierung eines 150-m²-Dachs 2026? Beispielbudgets für Neueindeckung und Dachsanierung mit Aufsparrendämmung plus wichtige Zusatzkosten.",
    eyebrow: "150 m² Dachfläche",
    intro: "Bei 150 m² Dachfläche lässt sich aus den dokumentierten Quadratmeterpreisen eine konkrete erste Budgetspanne ableiten. Entscheidend ist, ob nur neu eingedeckt wird oder ob die Sanierung gleichzeitig eine Aufsparrendämmung umfasst.",
    keyFact: "150 m² ergeben etwa 18.000-37.500 € für Neueindeckung oder 37.500-67.500 € mit Aufsparrendämmung",
    sections: [
      {
        heading: "Was kostet ein Dach mit 150 m²?",
        paragraphs: [
          "Für die Neueindeckung inklusive Lattung liegt die BauKostenRadar-Datenbasis bei 120 bis 250 Euro pro Quadratmeter Dachfläche. Bei 150 m² ergibt sich daraus rein rechnerisch eine Spanne von 18.000 bis 37.500 Euro.",
          "Für eine Dachsanierung inklusive Aufsparrendämmung liegt der Richtwert bei 250 bis 450 Euro pro Quadratmeter. Bei 150 m² entspricht das etwa 37.500 bis 67.500 Euro.",
        ],
        table: {
          headers: ["Variante", "Richtwert", "150 m² Beispiel"],
          rows: [
            { cells: ["Neueindeckung inkl. Lattung", "120-250 €/m²", "18.000-37.500 €"], href: "/kosten/dachsanierung" },
            { cells: ["Dachsanierung inkl. Aufsparrendämmung", "250-450 €/m²", "37.500-67.500 €"], href: "/kosten/dachsanierung" },
          ],
        },
      },
      {
        heading: "Welche Zusatzkosten kommen bei 150 m² dazu?",
        paragraphs: [
          "Die reine Multiplikation der Dachfläche bildet nicht automatisch alle Nebenarbeiten ab. Gerüst, Dachrinnen oder Reparaturen am Dachstuhl sollten separat geprüft werden.",
        ],
        bullets: [
          "Gerüst: in der Datenbasis etwa 8-15 €/m² Gerüstfläche",
          "Dachrinne aus Zink: etwa 30-60 € pro laufendem Meter",
          "Rückbau und Entsorgung bei aufwendigem Altbestand",
          "Reparaturen an Sparren, Schalung oder Anschlüssen",
          "Dachfenster, Gauben oder komplizierte Dachgeometrie",
        ],
      },
      {
        heading: "Warum 150 m² Dachfläche nicht 150 m² Wohnfläche sind",
        paragraphs: [
          "Dachfläche und Wohnfläche sind unterschiedliche Größen. Dachneigung, Überstände und Gebäudegeometrie sorgen dafür, dass die zu bearbeitende Dachfläche größer oder kleiner als die Wohnfläche sein kann.",
          "Für die Kalkulation sollte deshalb die tatsächliche Dachfläche verwendet werden. Ist diese noch unbekannt, eignet sich der 150-m²-Wert nur als Szenario und nicht als Ersatz für ein Aufmaß.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet ein 150 m² Dach neu einzudecken?", answer: "Bei 120 bis 250 Euro pro Quadratmeter ergibt sich für 150 m² eine rechnerische Orientierung von etwa 18.000 bis 37.500 Euro." },
      { question: "Was kostet ein 150 m² Dach mit Aufsparrendämmung?", answer: "Bei 250 bis 450 Euro pro Quadratmeter ergibt sich für 150 m² eine Orientierung von etwa 37.500 bis 67.500 Euro." },
      { question: "Ist das Gerüst im 150-m²-Beispiel enthalten?", answer: "Nein. Das Beispiel multipliziert nur die dokumentierten Quadratmeterwerte der jeweiligen Dachleistung. Gerüst und weitere Zusatzarbeiten sollten separat geprüft werden." },
      { question: "Kann man von der Wohnfläche auf die Dachfläche schließen?", answer: "Nicht zuverlässig. Dachneigung, Form und Überstände verändern die tatsächliche Dachfläche. Für eine genauere Kalkulation ist ein Aufmaß besser." },
    ],
    related: [
      { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
      { label: "Dachsanierung Kosten 2026", href: "/kosten/dachsanierung" },
      { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
      { label: "Handwerkerkosten berechnen", href: "/rechner/handwerkerkosten" },
    ],
  },
  {
    slug: "20-fenster-austauschen-kosten",
    title: "20 Fenster austauschen Kosten 2026",
    h1: "20 Fenster austauschen: Kosten 2026 mit Einbau",
    description: "Was kosten 20 neue Fenster 2026? Beispielbudgets für Zwei- und Dreifachverglasung inklusive dokumentierter Einbaukosten pro Fenster.",
    eyebrow: "20 Fenster austauschen",
    intro: "Bei einer größeren Fenstersanierung lässt sich die Stückzahl direkt mit den dokumentierten Fenster- und Montagepreisen kombinieren. Für 20 Standardfenster entsteht dadurch eine deutlich greifbarere Budgetspanne als mit einem einzelnen Stückpreis.",
    keyFact: "20 Standardfenster inklusive Einbau ergeben etwa 11.000-20.000 € bei Zweifach- oder 14.000-24.000 € bei Dreifachverglasung",
    sections: [
      {
        heading: "Was kosten 20 Fenster inklusive Einbau?",
        paragraphs: [
          "Ein Standardfenster mit Zweifachverglasung liegt in der Datenbasis bei etwa 400 bis 700 Euro ohne Einbau. Für die Montage kommen etwa 150 bis 300 Euro pro Fenster hinzu. Zusammen ergibt das etwa 550 bis 1.000 Euro pro Fenster.",
          "Bei 20 Fenstern ergibt sich damit eine rechnerische Orientierung von etwa 11.000 bis 20.000 Euro. Dreifachverglasung liegt inklusive Montage bei etwa 700 bis 1.200 Euro pro Fenster und damit bei rund 14.000 bis 24.000 Euro für 20 Stück.",
        ],
        table: {
          headers: ["Variante", "Pro Fenster inkl. Einbau", "20 Fenster"],
          rows: [
            { cells: ["2-fach Verglasung", "550-1.000 €", "11.000-20.000 €"], href: "/kosten/fenster" },
            { cells: ["3-fach Verglasung", "700-1.200 €", "14.000-24.000 €"], href: "/kosten/fenster" },
          ],
        },
      },
      {
        heading: "Wann wird ein 20-Fenster-Projekt teurer?",
        paragraphs: [
          "Die Rechnung verwendet Standardgrößen aus der Datenbasis. Große Elemente, Sonderformen oder zusätzliche Arbeiten an Laibungen und Rollläden können den Gesamtpreis erhöhen.",
        ],
        bullets: [
          "Große Fensterflächen, Hebe-Schiebe-Türen oder Sonderformen",
          "Materialwahl für Rahmen und besondere Oberflächen",
          "Zusätzliche Rollläden oder Sonnenschutzsysteme",
          "Aufwendige Demontage und Entsorgung alter Elemente",
          "Nacharbeiten an Putz, Laibungen und Innenanschlüssen",
        ],
      },
      {
        heading: "Zweifach oder Dreifachverglasung bei 20 Fenstern?",
        paragraphs: [
          "Der Preisunterschied wächst mit der Stückzahl. Im Modell liegen 20 dreifach verglaste Standardfenster inklusive Einbau grob 3.000 bis 4.000 Euro über der vergleichbaren Zweifachvariante, wenn jeweils dieselben Randbedingungen gelten.",
          "Welche Verglasung technisch und energetisch sinnvoll ist, hängt vom Gebäude und dem Gesamtkonzept ab. Die Kostenseite allein sollte diese Entscheidung nicht bestimmen.",
        ],
      },
    ],
    faqs: [
      { question: "Was kosten 20 neue Fenster mit Einbau?", answer: "Bei Standardfenstern mit Zweifachverglasung ergibt die Datenbasis etwa 11.000 bis 20.000 Euro für 20 Stück inklusive Einbau. Dreifachverglasung liegt rechnerisch bei etwa 14.000 bis 24.000 Euro." },
      { question: "Wie hoch sind die Einbaukosten bei 20 Fenstern?", answer: "Bei 150 bis 300 Euro Einbaukosten pro Fenster ergeben sich für 20 Fenster etwa 3.000 bis 6.000 Euro reine Montageorientierung." },
      { question: "Sind Rollläden in den Beispielkosten enthalten?", answer: "Nein. Die Rechnung kombiniert Fensterpreis und dokumentierten Fenstereinbau. Rollläden, Sonnenschutz und besondere Anschlussarbeiten sind zusätzliche Positionen." },
      { question: "Gilt das Beispiel für jede Fenstergröße?", answer: "Nein. Die zugrunde liegenden Fensterpreise beziehen sich auf eine Standardgröße von ungefähr 1,3 mal 1,3 Metern. Größere oder spezielle Elemente können deutlich teurer sein." },
    ],
    related: [
      { label: "Fenster austauschen Kosten Haus", href: "/ratgeber/fenster-austauschen-kosten-haus" },
      { label: "Fenster Kosten 2026", href: "/kosten/fenster" },
      { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
      { label: "Handwerkerkosten berechnen", href: "/rechner/handwerkerkosten" },
    ],
  },
  {
    slug: "elektrik-erneuern-100-qm-kosten",
    title: "Elektrik erneuern 100 m² Kosten 2026",
    h1: "Elektrik bei 100 m² erneuern: Kosten 2026 realistisch einordnen",
    description: "Was kostet neue Elektrik bei 100 m²? Projektorientierte Richtwerte 2026 für komplette Neuinstallation, Sicherungskasten, Steckdosen und Elektrikerstunden.",
    eyebrow: "Elektrik auf 100 m²",
    intro: "Bei Elektroarbeiten ist die Wohnfläche nur ein grober Kontext. Die BauKostenRadar-Datenbasis dokumentiert für eine komplette Neuinstallation einen Projektpreis und keine feste Quadratmeterpauschale. Deshalb wird für 100 m² bewusst kein künstlicher Preis pro Quadratmeter erfunden.",
    keyFact: "Für eine komplette Neuinstallation liegt die dokumentierte Projektspanne bei etwa 8.000-15.000 €",
    sections: [
      {
        heading: "Was kostet neue Elektrik bei 100 m²?",
        paragraphs: [
          "Für eine komplette Elektro-Neuinstallation liegt die BauKostenRadar-Datenbasis bei etwa 8.000 bis 15.000 Euro pro Projekt. Dieser Richtwert kann als erste Orientierung für eine 100-m²-Wohnung oder ein vergleichbares Projekt dienen, ist aber ausdrücklich kein flächenbezogener Festpreis.",
          "Entscheidend sind unter anderem Anzahl der Stromkreise, Steckdosen, Schalter, Leitungswege, Zustand der Verteilung und gewünschte Ausstattung. Zwei Objekte mit 100 m² können daher deutlich unterschiedliche Elektrobudgets haben.",
        ],
        table: {
          headers: ["Position", "Richtwert 2026"],
          rows: [
            { cells: ["Komplette Neuinstallation", "8.000-15.000 € pro Projekt"], href: "/kosten/elektriker" },
            { cells: ["Sicherungskasten erneuern", "800-2.500 €"], href: "/kosten/elektriker" },
            { cells: ["Steckdose installieren", "80-150 € pro Stück"], href: "/kosten/elektriker" },
            { cells: ["Elektriker Stundensatz", "50-85 €/h"], href: "/kosten/elektriker" },
          ],
        },
      },
      {
        heading: "Warum wir keinen Preis pro m² angeben",
        paragraphs: [
          "Eine Quadratmeterpauschale würde eine Genauigkeit vortäuschen, die die zugrunde liegende Quelle nicht liefert. Bei Elektrik bestimmen Nutzung, Grundriss und Ausstattungsdichte den Aufwand stärker als die reine Wohnfläche.",
          "100 m² helfen deshalb nur bei der Einordnung der Projektgröße. Für eine belastbarere Planung sollten die Anzahl der Räume, Steckdosen, Stromkreise und technischen Sonderwünsche zusätzlich erfasst werden.",
        ],
      },
      {
        heading: "Was treibt die Kosten bei 100 m²?",
        paragraphs: [
          "Besonders im Altbau können Rückbau, neue Leitungswege und eine alte Unterverteilung den Aufwand erhöhen.",
        ],
        bullets: [
          "Vollständige Erneuerung alter Leitungen",
          "Neue oder größere Sicherungsverteilung",
          "Hohe Anzahl an Steckdosen und Schaltstellen",
          "Netzwerk, Smart Home oder zusätzliche Datenleitungen",
          "Aufwendige Schlitz- und Wiederherstellungsarbeiten",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Elektrik erneuern bei 100 m²?", answer: "Die BauKostenRadar-Datenbasis nennt für eine komplette Neuinstallation etwa 8.000 bis 15.000 Euro pro Projekt. Für 100 m² ist das eine Orientierung, aber kein garantierter Flächenpreis." },
      { question: "Was kostet neue Elektrik pro m²?", answer: "Unsere aktuelle Quelle liefert keinen belastbaren Quadratmeterpreis für die komplette Elektroinstallation. Deshalb veröffentlicht BauKostenRadar bewusst keinen künstlich umgerechneten €/m²-Wert." },
      { question: "Ist ein neuer Sicherungskasten enthalten?", answer: "Das hängt vom konkreten Angebot ab. In der Datenbasis wird das Erneuern eines Sicherungskastens separat mit etwa 800 bis 2.500 Euro ausgewiesen." },
      { question: "Warum kann ein 100-m²-Altbau teurer sein?", answer: "Alte Leitungen, schwierige Leitungswege, Rückbau und Wiederherstellung von Wänden sowie eine veraltete Verteilung können den Arbeitsaufwand deutlich erhöhen." },
    ],
    related: [
      { label: "Elektrik erneuern Altbau", href: "/ratgeber/elektrik-erneuern-altbau" },
      { label: "Elektriker Kosten 2026", href: "/kosten/elektriker" },
      { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
      { label: "Handwerker-Stundensätze", href: "/ratgeber/handwerker-stundensaetze" },
    ],
  },
  {
    slug: "bad-10-qm-sanieren-kosten",
    title: "Bad 10 m² sanieren Kosten 2026",
    h1: "Bad mit 10 m² sanieren: Kosten 2026 im Vergleich",
    description: "Was kostet eine Badsanierung bei 10 m²? Vergleich von Quadratmeter-Richtwert und dokumentierter Komplettspanne plus typische Kostenblöcke.",
    eyebrow: "10 m² Badezimmer",
    intro: "Bei einem 10-m²-Bad gibt es zwei sinnvolle Wege zur ersten Orientierung: einen dokumentierten Quadratmeter-Richtwert für vollständige Badarbeiten und eine separate Komplettspanne pro Bad. Beide Werte stammen aus unterschiedlichen Quellen und sollten nicht addiert werden.",
    keyFact: "10 m² ergeben über den Quadratmeter-Richtwert etwa 10.000-25.000 €, die separate Komplettspanne liegt bei 12.000-32.000 € pro Bad",
    sections: [
      {
        heading: "Was kostet ein 10-m²-Bad komplett?",
        paragraphs: [
          "Der dokumentierte Richtwert von 1.000 bis 2.500 Euro pro Quadratmeter ergibt bei 10 m² rechnerisch etwa 10.000 bis 25.000 Euro. Eine andere Quelle nennt für eine komplette Badsanierung unabhängig von der Fläche etwa 12.000 bis 32.000 Euro pro Bad.",
          "Diese beiden Spannen sind alternative Orientierungsmethoden. Sie werden nicht zusammengerechnet. Für ein konkretes 10-m²-Bad ist deshalb eine grobe Planungszone von rund 10.000 bis 32.000 Euro nachvollziehbar, bevor Ausstattung und Objektzustand genauer bekannt sind.",
        ],
        table: {
          headers: ["Orientierung", "Ausgangswert", "10 m² / Projekt"],
          rows: [
            { cells: ["Quadratmeter-Methode", "1.000-2.500 €/m²", "10.000-25.000 €"], href: "/kosten/badsanierung" },
            { cells: ["Komplettsanierung pro Bad", "12.000-32.000 €", "12.000-32.000 €"], href: "/kosten/badsanierung" },
          ],
        },
      },
      {
        heading: "Welche Kostenblöcke sind bei 10 m² wichtig?",
        paragraphs: [
          "Ein größeres Bad wird nicht automatisch proportional teurer. Viele Kosten entstehen durch feste Projektbestandteile wie Demontage, Anschlüsse und Sanitärobjekte.",
        ],
        bullets: [
          "Demontage und Entsorgung des Altbads",
          "Sanitärinstallation und Leitungsanpassungen",
          "Abdichtung und Fliesenarbeiten",
          "Sanitärobjekte, Armaturen und Möbel",
          "Elektroarbeiten, Beleuchtung und gegebenenfalls Lüftung",
        ],
      },
      {
        heading: "Warum Ausstattung bei 10 m² stark ins Gewicht fällt",
        paragraphs: [
          "Zehn Quadratmeter bieten mehr Platz für große Dusche, Badewanne, Doppelwaschtisch oder zusätzliche Möbel. Dadurch kann die Ausstattung einen größeren Teil des Budgets ausmachen als bei einem kleinen Bad.",
          "Für die erste Planung sollte deshalb zwischen baulichen Grundkosten und frei wählbarer Ausstattung unterschieden werden.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet ein 10 m² Bad komplett zu sanieren?", answer: "Über den dokumentierten Quadratmeter-Richtwert ergeben sich etwa 10.000 bis 25.000 Euro. Eine separate Quelle nennt 12.000 bis 32.000 Euro pro komplette Badsanierung. Beide Werte sind alternative Orientierungen und werden nicht addiert." },
      { question: "Sind 20.000 Euro für ein 10-m²-Bad realistisch?", answer: "Ja. 20.000 Euro liegen innerhalb beider dokumentierten Orientierungsbereiche. Die tatsächlichen Kosten hängen stark von Leitungen, Fliesen, Sanitärobjekten und Ausstattung ab." },
      { question: "Wird ein 10-m²-Bad doppelt so teuer wie ein 5-m²-Bad?", answer: "Nicht zwingend. Viele Projektkosten sind nicht linear von der Fläche abhängig. Ausstattung, Leitungsführung und Anzahl der Objekte spielen ebenfalls eine große Rolle." },
      { question: "Welche Reserve sollte man einplanen?", answer: "Bei Bestandsbädern kann eine Reserve für unbekannte Untergründe, Leitungen oder Feuchteschäden sinnvoll sein. Die Höhe sollte an den Zustand des Bads angepasst werden." },
    ],
    related: [
      { label: "Bad komplett sanieren Kosten", href: "/ratgeber/bad-komplett-sanieren-kosten" },
      { label: "Badsanierung Kosten 2026", href: "/kosten/badsanierung" },
      { label: "Badsanierungskosten-Rechner", href: "/rechner/badsanierungskosten" },
      { label: "Sanitär Kosten 2026", href: "/kosten/sanitaer" },
    ],
  },
  {
    slug: "fussbodenheizung-100-qm-kosten",
    title: "Fußbodenheizung 100 m² Kosten 2026",
    h1: "Fußbodenheizung bei 100 m² nachrüsten: Kosten 2026",
    description: "Was kostet das Nachrüsten einer Fußbodenheizung bei 100 m²? Rechenbeispiel auf Basis von 50-100 €/m² plus wichtige mögliche Zusatzkosten.",
    eyebrow: "100 m² Fußbodenheizung",
    intro: "Für das Nachrüsten einer Fußbodenheizung dokumentiert die BauKostenRadar-Datenbasis einen Richtwert von 50 bis 100 Euro pro Quadratmeter. Bei 100 m² lässt sich daraus eine klare erste Größenordnung ableiten.",
    keyFact: "100 m² Fußbodenheizung nachrüsten ergeben rechnerisch etwa 5.000-10.000 €",
    sections: [
      {
        heading: "Was kostet Fußbodenheizung bei 100 m²?",
        paragraphs: [
          "Bei einem Richtwert von 50 bis 100 Euro pro Quadratmeter ergeben 100 m² rechnerisch etwa 5.000 bis 10.000 Euro für das Nachrüsten der Fußbodenheizung.",
          "Dieser Wert beschreibt die dokumentierte Leistungsposition. Notwendige Änderungen am Bodenaufbau, Estrich, Bodenbelag oder Wärmeerzeuger können je nach Projekt zusätzliche Kosten verursachen.",
        ],
        table: {
          headers: ["Fläche", "Richtwert", "Rechenbeispiel"],
          rows: [
            { cells: ["100 m²", "50-100 €/m²", "5.000-10.000 €"], href: "/kosten/heizung" },
            { cells: ["80 m²", "50-100 €/m²", "4.000-8.000 €"], href: "/kosten/heizung" },
            { cells: ["120 m²", "50-100 €/m²", "6.000-12.000 €"], href: "/kosten/heizung" },
          ],
        },
      },
      {
        heading: "Welche Zusatzkosten sind bei 100 m² möglich?",
        paragraphs: [
          "Bei einer Nachrüstung entscheidet der vorhandene Bodenaufbau darüber, ob die dokumentierte Heizungsposition bereits den größten Kostenblock abbildet oder ob weitere Gewerke notwendig werden.",
        ],
        bullets: [
          "Rückbau vorhandener Bodenbeläge",
          "Anpassung oder Erneuerung des Estrichs",
          "Neuer Bodenbelag nach den Heizungsarbeiten",
          "Hydraulische Anpassung und Regelung",
          "Änderungen am bestehenden Wärmeerzeuger oder Heizkreisverteiler",
        ],
      },
      {
        heading: "100 m² als sinnvolle Planungsgröße",
        paragraphs: [
          "Im Gegensatz zur kompletten Elektroinstallation ist die Fußbodenheizung in der Datenbasis tatsächlich als Quadratmeterposition erfasst. Deshalb lässt sich die Fläche hier direkt und transparent multiplizieren.",
          "Für eine genauere Gesamtplanung sollte anschließend geprüft werden, welche Boden- und Heizungsarbeiten zusätzlich erforderlich sind.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Fußbodenheizung nachrüsten bei 100 m²?", answer: "Bei 50 bis 100 Euro pro Quadratmeter ergibt die BauKostenRadar-Datenbasis für 100 m² eine rechnerische Orientierung von etwa 5.000 bis 10.000 Euro." },
      { question: "Ist der neue Bodenbelag in den 5.000 bis 10.000 Euro enthalten?", answer: "Nicht automatisch. Der Wert bezieht sich auf die dokumentierte Position Fußbodenheizung nachrüsten. Rückbau, Estrich oder neuer Bodenbelag können zusätzliche Kosten verursachen." },
      { question: "Was kosten 80 m² Fußbodenheizung?", answer: "Bei derselben Datenbasis ergeben 80 m² rechnerisch etwa 4.000 bis 8.000 Euro." },
      { question: "Was kosten 120 m² Fußbodenheizung?", answer: "Bei 50 bis 100 Euro pro Quadratmeter ergeben 120 m² etwa 6.000 bis 12.000 Euro als erste Orientierung." },
    ],
    related: [
      { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
      { label: "Heizung Kosten 2026", href: "/kosten/heizung" },
      { label: "Handwerkerkosten berechnen", href: "/rechner/handwerkerkosten" },
      { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
    ],
  },
];
