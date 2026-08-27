import type { Guide } from "@/lib/guides";

export const demolitionGuides: Guide[] = [
  {
    slug: "haus-abreissen-kosten",
    title: "Haus abreißen Kosten 2026",
    h1: "Haus abreißen: Kosten 2026 inklusive Entsorgung",
    description: "Was kostet es, ein Einfamilienhaus abzureißen? Richtwerte 2026 für Komplettabriss, Abbruch nach umbautem Raum und Innenabbruch mit Kostentreibern.",
    eyebrow: "Hausabriss 2026",
    intro: "Beim Abriss eines Einfamilienhauses bestimmen nicht nur Größe und Bauweise den Preis. Trennung der Baustoffe, Entsorgung, Baustellenzugang und mögliche problematische Materialien können den Aufwand stark verändern. BauKostenRadar trennt deshalb Komplettabriss, Volumenrichtwert und Innenabbruch als unterschiedliche Kalkulationsansätze.",
    keyFact: "Einfamilienhaus komplett abreißen etwa 8.500-32.000 € inklusive Entsorgung",
    sections: [
      {
        heading: "Was kostet der Abriss eines Einfamilienhauses?",
        paragraphs: [
          "Für den kompletten Abriss eines Einfamilienhauses führt die aktuelle BauKostenRadar-Datenbasis etwa 8.500 bis 32.000 Euro pro Haus inklusive Entsorgung. Die große Spanne zeigt, wie stark Objektgröße, Bauweise und Entsorgungsaufwand den Endpreis beeinflussen.",
          "Als zweiten Orientierungswert enthält die Datenbasis etwa 15 bis 45 Euro pro Kubikmeter umbauten Raum. Dieser Volumenwert ist ein alternativer Kalkulationsansatz und sollte nicht zusätzlich auf den Komplettpreis aufgeschlagen werden.",
        ],
        table: {
          headers: ["Leistung", "Richtwert 2026"],
          rows: [
            { cells: ["Einfamilienhaus komplett abreißen", "8.500-32.000 € pro Haus inkl. Entsorgung"], href: "/kosten/abriss-entsorgung/leistung/einfamilienhaus-komplett-abreissen" },
            { cells: ["Abbruch nach umbautem Raum", "15-45 €/m³ umbauter Raum"], href: "/kosten/abriss-entsorgung/leistung/abbruch-nach-umbautem-raum" },
            { cells: ["Innenabbruch Einfamilienhaus", "8.000-28.000 € pro Haus"], href: "/kosten/abriss-entsorgung/leistung/innenabbruch-einfamilienhaus" },
          ],
        },
      },
      {
        heading: "Welche Faktoren treiben die Abrisskosten?",
        paragraphs: [
          "Zwei Häuser mit ähnlicher Wohnfläche können beim Rückbau sehr unterschiedliche Angebote erhalten. Entscheidend ist, wie aufwendig das Gebäude zerlegt werden kann und welche Stoffströme getrennt abgefahren werden müssen.",
        ],
        bullets: [
          "Gebäudevolumen, Geschosszahl und Bauweise",
          "Zugänglichkeit für Bagger, Container und Abtransport",
          "Anteil schwerer mineralischer Baustoffe und anderer Abfallarten",
          "Notwendige Trennung, Sortierung und Entsorgung",
          "Problematische oder besonders zu behandelnde Materialien",
          "Sicherungs-, Vorbereitungs- und Nebenarbeiten auf dem Grundstück",
        ],
      },
      {
        heading: "Komplettabriss oder Innenabbruch?",
        paragraphs: [
          "Ein Innenabbruch ist kein kleiner Komplettabriss. Dabei bleibt die äußere beziehungsweise ein definierter Teil der Gebäudestruktur bestehen, während Innenausbau und ausgewählte Bauteile zurückgebaut werden. BauKostenRadar führt dafür separat etwa 8.000 bis 28.000 Euro pro Haus.",
          "Wenn das Gebäude erhalten und anschließend umfassend saniert werden soll, ist der Innenabbruch daher der passendere Vergleich. Soll das Gebäude vollständig verschwinden, ist der Komplettabriss die relevantere Preisposition.",
        ],
      },
      {
        heading: "So vergleichen Sie Abrissangebote",
        paragraphs: [
          "Achten Sie darauf, dass Angebote denselben Leistungsumfang abbilden. Rückbau, Sortierung, Container, Abtransport und Entsorgung sollten eindeutig als enthalten oder zusätzlich ausgewiesen sein.",
          "Für eine belastbare Budgetplanung sollten außerdem Leistungen klar getrennt werden, die erst nach dem Abriss folgen, zum Beispiel Erdarbeiten, neue Bodenplatte oder Neubauarbeiten.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet es, ein Einfamilienhaus 2026 abzureißen?", answer: "Die aktuelle BauKostenRadar-Datenbasis führt für einen kompletten Einfamilienhaus-Abriss etwa 8.500 bis 32.000 Euro pro Haus inklusive Entsorgung." },
      { question: "Was kostet Hausabriss pro m³?", answer: "Als alternative Orientierung führt BauKostenRadar etwa 15 bis 45 Euro pro Kubikmeter umbauten Raum. Ob Entsorgung im konkreten Angebot enthalten ist, sollte separat geprüft werden." },
      { question: "Ist die Entsorgung im Komplettabriss enthalten?", answer: "Bei der BauKostenRadar-Position für den kompletten Einfamilienhaus-Abriss ist die Entsorgung ausdrücklich enthalten. Bei anderen Abrisspositionen sollte der Leistungsumfang separat geprüft werden." },
      { question: "Ist Innenabbruch günstiger als kompletter Hausabriss?", answer: "Nicht pauschal. Die Datenbasis führt Innenabbruch eines Einfamilienhauses mit etwa 8.000 bis 28.000 Euro pro Haus und Komplettabriss mit etwa 8.500 bis 32.000 Euro inklusive Entsorgung. Es handelt sich um unterschiedliche Leistungen." },
    ],
    related: [
      { label: "Abriss & Entsorgung Kosten", href: "/kosten/abriss-entsorgung" },
      { label: "Abbruchkosten pro m³", href: "/ratgeber/abbruch-kosten-pro-m3" },
      { label: "Innenabbruch Einfamilienhaus Kosten", href: "/ratgeber/innenabbruch-einfamilienhaus-kosten" },
      { label: "Industriehalle abbrechen Kosten", href: "/ratgeber/industriehalle-abbrechen-kosten-pro-qm" },
      { label: "30 m³ Bauschuttcontainer Kosten", href: "/ratgeber/bauschuttcontainer-30-m3-kosten" },
      { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
      { label: "Abrisskosten berechnen", href: "/rechner/handwerkerkosten?gewerk=abriss-entsorgung&leistung=einfamilienhaus-komplett-abreissen&menge=1" },
    ],
  },
  {
    slug: "abbruch-kosten-pro-m3",
    title: "Abbruchkosten pro m³ 2026",
    h1: "Abbruchkosten 2026: Preis pro m³ umbauter Raum",
    description: "Abbruchkosten 2026 pro m³ umbauter Raum: Richtwert von 15-45 €/m³, Beispielbudgets, Leistungsumfang und wichtige Kostentreiber.",
    eyebrow: "Abbruch pro m³ 2026",
    intro: "Bei vollständigen Gebäudeabbrüchen kann der umbaute Raum als erste Rechengröße dienen. BauKostenRadar führt dafür eine eigene Preisposition pro Kubikmeter. Wichtig ist die Abgrenzung zur Wohnfläche: gerechnet wird das Gebäudevolumen, nicht die nutzbare Quadratmeterfläche.",
    keyFact: "Abbruch nach umbautem Raum etwa 15-45 €/m³",
    sections: [
      {
        heading: "Was kostet Abbruch pro m³?",
        paragraphs: [
          "Die aktuelle BauKostenRadar-Datenbasis führt für Abbruch nach umbautem Raum etwa 15 bis 45 Euro pro Kubikmeter.",
          "Bei 500 m³ umbautem Raum ergibt sich daraus rechnerisch eine erste Orientierung von etwa 7.500 bis 22.500 Euro. Ob Entsorgung, Sortierung oder weitere Nebenleistungen enthalten sind, muss im konkreten Angebot geprüft werden.",
        ],
        table: {
          headers: ["Umbauter Raum", "Budgetorientierung"],
          rows: [
            { cells: ["300 m³", "4.500-13.500 €"] },
            { cells: ["500 m³", "7.500-22.500 €"] },
            { cells: ["800 m³", "12.000-36.000 €"] },
          ],
        },
      },
      {
        heading: "Welche Faktoren verändern den Preis pro Kubikmeter?",
        paragraphs: [
          "Der Volumenwert verdichtet viele einzelne Arbeitsschritte. Je aufwendiger Rückbau, Sortierung und Abtransport sind, desto weniger aussagekräftig ist ein einzelner Durchschnittswert ohne Objektprüfung.",
        ],
        bullets: [
          "Massive oder leichte Bauweise",
          "Keller, Nebengebäude und besondere Konstruktionen",
          "Zugänglichkeit für Abbruchtechnik",
          "Materialtrennung und Entsorgungswege",
          "Schadstoffverdacht oder besonders zu behandelnde Baustoffe",
          "Sicherungsmaßnahmen und Nähe zu Nachbargebäuden",
        ],
      },
      {
        heading: "Umbauten Raum nicht mit Wohnfläche verwechseln",
        paragraphs: [
          "Kubikmeter umbauter Raum und Quadratmeter Wohnfläche sind unterschiedliche Größen. Für eine Volumenrechnung werden Gebäudeabmessungen und Höhen benötigt, nicht nur die Wohnfläche.",
          "Wenn bereits ein konkreter Komplettpreis für den Abriss eines Einfamilienhauses vorliegt, sollte die m³-Rechnung als Plausibilitätscheck genutzt und nicht zusätzlich zum Projektpreis addiert werden.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Abbruch pro m³ 2026?", answer: "BauKostenRadar führt aktuell etwa 15 bis 45 Euro pro Kubikmeter umbauten Raum." },
      { question: "Was kosten 500 m³ Abbruch?", answer: "Mit dem Richtwert ergeben sich rechnerisch etwa 7.500 bis 22.500 Euro." },
      { question: "Ist Entsorgung im m³-Richtwert enthalten?", answer: "Die aktuelle BauKostenRadar-Preisposition nennt den Abbruch pro Kubikmeter, weist Entsorgung aber nicht ausdrücklich als enthalten aus. Das sollte im Angebot separat geprüft werden." },
      { question: "Ist Wohnfläche dasselbe wie umbauter Raum?", answer: "Nein. Wohnfläche wird in Quadratmetern angegeben, umbauter Raum in Kubikmetern und berücksichtigt das Gebäudevolumen." },
    ],
    related: [
      { label: "Abbruch nach umbautem Raum Preisdetail", href: "/kosten/abriss-entsorgung/leistung/abbruch-nach-umbautem-raum" },
      { label: "Haus abreißen Kosten", href: "/ratgeber/haus-abreissen-kosten" },
      { label: "Innenabbruch Einfamilienhaus Kosten", href: "/ratgeber/innenabbruch-einfamilienhaus-kosten" },
      { label: "Industriehalle abbrechen Kosten", href: "/ratgeber/industriehalle-abbrechen-kosten-pro-qm" },
      { label: "Abriss & Entsorgung Kosten", href: "/kosten/abriss-entsorgung" },
      { label: "Abbruch berechnen", href: "/rechner/handwerkerkosten?gewerk=abriss-entsorgung&leistung=abbruch-nach-umbautem-raum" },
    ],
  },
  {
    slug: "innenabbruch-einfamilienhaus-kosten",
    title: "Innenabbruch Einfamilienhaus Kosten 2026",
    h1: "Innenabbruch im Einfamilienhaus: Kosten 2026",
    description: "Innenabbruch Einfamilienhaus 2026: Richtwert von 8.000-28.000 € pro Haus, typische Kostenfaktoren und Abgrenzung zum Komplettabriss.",
    eyebrow: "Innenabbruch 2026",
    intro: "Ein Innenabbruch wird häufig vor einer umfassenden Sanierung benötigt, wenn Oberflächen, Einbauten und ausgewählte nicht mehr benötigte Bauteile zurückgebaut werden. Für ein Einfamilienhaus führt BauKostenRadar dafür einen eigenen Projektwert, der nicht mit einem vollständigen Gebäudeabriss verwechselt werden sollte.",
    keyFact: "Innenabbruch Einfamilienhaus etwa 8.000-28.000 € pro Haus",
    sections: [
      {
        heading: "Was kostet Innenabbruch in einem Einfamilienhaus?",
        paragraphs: [
          "Die aktuelle BauKostenRadar-Datenbasis führt für den Innenabbruch eines Einfamilienhauses etwa 8.000 bis 28.000 Euro pro Haus. Der Wert dient als Projektorientierung und ist keine pauschale Zusage für eine bestimmte Wohnfläche.",
          "Der tatsächliche Aufwand hängt stark davon ab, was entfernt werden soll und was im Gebäude erhalten bleibt. Entsorgung und weitere Nebenleistungen sollten im Angebot eindeutig als enthalten oder zusätzlich ausgewiesen sein.",
        ],
        table: {
          headers: ["Vergleich", "Richtwert 2026"],
          rows: [
            { cells: ["Innenabbruch Einfamilienhaus", "8.000-28.000 € pro Haus"], href: "/kosten/abriss-entsorgung/leistung/innenabbruch-einfamilienhaus" },
            { cells: ["Kompletter Einfamilienhaus-Abriss", "8.500-32.000 € inkl. Entsorgung"], href: "/kosten/abriss-entsorgung/leistung/einfamilienhaus-komplett-abreissen" },
          ],
        },
      },
      {
        heading: "Was beeinflusst die Kosten beim Innenabbruch?",
        paragraphs: [
          "Nicht die Wohnfläche allein entscheidet über das Budget. Ein Gebäude mit vielen schweren Belägen, Einbauten und getrennt zu entsorgenden Materialien kann deutlich aufwendiger sein als ein bereits weitgehend leerer Rohbauzustand.",
        ],
        bullets: [
          "Umfang der auszubauenden Bauteile und Oberflächen",
          "Materialarten und notwendige Trennung der Abfälle",
          "Geschosse, Laufwege und Zugang für Abtransport",
          "Schutz der Bauteile, die erhalten bleiben sollen",
          "Container, Transport und Entsorgungswege",
          "Zusätzliche Vorarbeiten vor der eigentlichen Sanierung",
        ],
      },
      {
        heading: "Innenabbruch sinnvoll in die Sanierung einordnen",
        paragraphs: [
          "Bei einer Kernsanierung sollte der Rückbau vor den neuen Ausbaugewerken geplant werden. Erst nach dem Freilegen lässt sich bei vielen Bestandsgebäuden zuverlässig beurteilen, welche zusätzlichen Arbeiten an Leitungen, Untergründen oder Konstruktionen nötig werden.",
          "Für das Gesamtbudget sollten Innenabbruch und die anschließenden Gewerke getrennt kalkuliert werden. So bleibt sichtbar, welcher Anteil auf Rückbau und welcher auf den eigentlichen Neuaufbau entfällt.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Innenabbruch in einem Einfamilienhaus?", answer: "BauKostenRadar führt aktuell etwa 8.000 bis 28.000 Euro pro Einfamilienhaus als Projektorientierung." },
      { question: "Ist Innenabbruch dasselbe wie Hausabriss?", answer: "Nein. Beim Innenabbruch wird nur ein definierter Teil des Gebäudeinneren zurückgebaut. Beim Komplettabriss wird das gesamte Gebäude entfernt." },
      { question: "Ist Entsorgung im Richtwert enthalten?", answer: "Die aktuelle BauKostenRadar-Preisposition weist Entsorgung beim Innenabbruch nicht ausdrücklich als enthalten aus. Deshalb sollte dieser Punkt im konkreten Angebot separat geprüft werden." },
    ],
    related: [
      { label: "Innenabbruch Preisdetail", href: "/kosten/abriss-entsorgung/leistung/innenabbruch-einfamilienhaus" },
      { label: "Haus abreißen Kosten", href: "/ratgeber/haus-abreissen-kosten" },
      { label: "Abbruchkosten pro m³", href: "/ratgeber/abbruch-kosten-pro-m3" },
      { label: "30 m³ Bauschuttcontainer Kosten", href: "/ratgeber/bauschuttcontainer-30-m3-kosten" },
      { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
      { label: "Sanierung Reihenfolge", href: "/ratgeber/sanierung-reihenfolge" },
      { label: "Innenabbruch berechnen", href: "/rechner/handwerkerkosten?gewerk=abriss-entsorgung&leistung=innenabbruch-einfamilienhaus&menge=1" },
    ],
  },
  {
    slug: "industriehalle-abbrechen-kosten-pro-qm",
    title: "Industriehalle abbrechen Kosten pro m² 2026",
    h1: "Industriehalle abbrechen: Kosten 2026 pro m² inklusive Entsorgung",
    description: "Industriehalle abbrechen Kosten 2026 pro m²: Richtwert von 25-85 €/m² inklusive Entsorgung, Beispielbudgets und wichtige Kostentreiber.",
    eyebrow: "Industrieabbruch 2026",
    intro: "Beim Abbruch einer Industriehalle beeinflussen Konstruktion, Hallenhöhe, Baustellenzugang und Materialtrennung den Aufwand. BauKostenRadar führt dafür eine eigene flächenbezogene Preisposition inklusive Entsorgung.",
    keyFact: "Industriehalle abbrechen etwa 25-85 €/m² inklusive Entsorgung",
    sections: [
      {
        heading: "Was kostet der Abbruch einer Industriehalle pro m²?",
        paragraphs: [
          "Die aktuelle BauKostenRadar-Datenbasis führt für den Abbruch einer Industriehalle etwa 25 bis 85 Euro pro Quadratmeter inklusive Entsorgung.",
          "Bei 1.000 m² Hallenfläche ergibt sich daraus rechnerisch eine erste Orientierung von etwa 25.000 bis 85.000 Euro. Der konkrete Umfang hängt stark von Konstruktion und Baustellensituation ab.",
        ],
        table: {
          headers: ["Hallenfläche", "Budgetorientierung"],
          rows: [
            { cells: ["500 m²", "12.500-42.500 €"] },
            { cells: ["1.000 m²", "25.000-85.000 €"] },
            { cells: ["2.000 m²", "50.000-170.000 €"] },
          ],
        },
      },
      {
        heading: "Welche Faktoren beeinflussen Industrieabbruch-Kosten?",
        paragraphs: [
          "Eine leichte Stahlhalle ist anders zu kalkulieren als ein massiver Gewerbebau. Auch Demontierbarkeit, Hallenhöhe und die vorhandenen Baustoffe beeinflussen Maschinen- und Entsorgungsaufwand.",
        ],
        bullets: [
          "Stahl-, Beton- oder Mischkonstruktion",
          "Hallenhöhe und Gebäudegeometrie",
          "Zufahrt und Platz für schwere Maschinen",
          "Materialtrennung und Verwertbarkeit",
          "Fundamente und zusätzliche massive Bauteile",
          "Sicherungsmaßnahmen und angrenzende Gebäude",
        ],
      },
      {
        heading: "Flächenpreis nur bei vergleichbarem Leistungsumfang nutzen",
        paragraphs: [
          "Der Quadratmeter-Richtwert ist eine Budgethilfe. Vor einem Angebotsvergleich sollte klar sein, welche Bauteile, Fundamente und Außenanlagen tatsächlich zum Abbruch gehören.",
          "Da die BauKostenRadar-Preisposition die Entsorgung ausdrücklich einschließt, sollten Angebote ohne Entsorgung nicht direkt mit diesem Richtwert verglichen werden.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet Industriehalle abbrechen pro m² 2026?", answer: "BauKostenRadar führt aktuell etwa 25 bis 85 Euro pro Quadratmeter inklusive Entsorgung." },
      { question: "Was kostet der Abbruch einer 1.000-m²-Halle?", answer: "Rechnerisch ergeben sich mit dem Richtwert etwa 25.000 bis 85.000 Euro." },
      { question: "Ist Entsorgung enthalten?", answer: "Ja. Die aktuelle BauKostenRadar-Preisposition für Industriehalle abbrechen ist ausdrücklich inklusive Entsorgung angegeben." },
    ],
    related: [
      { label: "Industriehalle abbrechen Preisdetail", href: "/kosten/abriss-entsorgung/leistung/industriehalle-abbrechen" },
      { label: "Abbruchkosten pro m³", href: "/ratgeber/abbruch-kosten-pro-m3" },
      { label: "Haus abreißen Kosten", href: "/ratgeber/haus-abreissen-kosten" },
      { label: "30 m³ Bauschuttcontainer Kosten", href: "/ratgeber/bauschuttcontainer-30-m3-kosten" },
      { label: "Abriss & Entsorgung Kosten", href: "/kosten/abriss-entsorgung" },
      { label: "Industrieabbruch berechnen", href: "/rechner/handwerkerkosten?gewerk=abriss-entsorgung&leistung=industriehalle-abbrechen" },
    ],
  },
  {
    slug: "bauschuttcontainer-30-m3-kosten",
    title: "Bauschuttcontainer 30 m³ Kosten 2026",
    h1: "30 m³ Bauschuttcontainer: Kosten 2026 inklusive Entsorgung",
    description: "Was kostet ein 30-m³-Bauschuttcontainer 2026? Richtwert 650-1.450 € inklusive Entsorgung, wichtige Preisfaktoren und Tipps für den Angebotsvergleich.",
    eyebrow: "Bauschuttcontainer 2026",
    intro: "Bei Abbruch- und Sanierungsarbeiten kann ein großer Container einen eigenen Budgetblock bilden. Für einen 30-m³-Bauschuttcontainer führt die aktuelle BauKostenRadar-Datenbasis einen Komplett-Richtwert inklusive Entsorgung. Die konkrete Abfallzusammensetzung bleibt trotzdem entscheidend für das Angebot.",
    keyFact: "30 m³ Bauschuttcontainer etwa 650-1.450 € inklusive Entsorgung",
    sections: [
      {
        heading: "Was kostet ein 30-m³-Bauschuttcontainer?",
        paragraphs: [
          "Die aktuelle BauKostenRadar-Datenbasis führt für einen Bauschuttcontainer mit 30 Kubikmetern etwa 650 bis 1.450 Euro pauschal inklusive Entsorgung. Der Wert ist eine Budgetorientierung für die hinterlegte Leistung und kein allgemeiner Einheitspreis für jede Abfallart.",
          "Vor der Bestellung sollte deshalb geklärt werden, welche Materialien der Anbieter unter der gewählten Containerart akzeptiert und welche Mengen- oder Gewichtsgrenzen gelten.",
        ],
        table: {
          headers: ["Leistung", "Richtwert 2026"],
          rows: [
            { cells: ["Bauschuttcontainer 30 m³", "650-1.450 € pauschal inkl. Entsorgung"], href: "/kosten/abriss-entsorgung/leistung/bauschuttcontainer-30-m3" },
          ],
        },
      },
      {
        heading: "Warum unterscheiden sich Containerangebote?",
        paragraphs: [
          "Containergröße allein erklärt nicht den gesamten Preis. Transport, Standzeit, Annahmebedingungen und die tatsächliche Materialmischung können den Endpreis verändern.",
        ],
        bullets: [
          "Abfallart und Reinheit des Materials",
          "Gewicht und mögliche Mengenbegrenzungen",
          "Transportweg und regionale Entsorgungskosten",
          "Standzeit und zusätzliche Abholungen",
          "Zugänglichkeit des Stellplatzes",
          "Zusatzleistungen des Containerdienstes",
        ],
      },
      {
        heading: "Containerkosten im Abrissbudget",
        paragraphs: [
          "Beim Komplettabriss eines Einfamilienhauses und beim Industriehallen-Abbruch führen die aktuellen BauKostenRadar-Preispositionen die Entsorgung bereits ausdrücklich mit. Ein zusätzlicher Container darf deshalb nicht automatisch zu diesen Werten addiert werden.",
          "Die separate Containerposition ist besonders nützlich, wenn Entsorgung eigenständig beauftragt wird oder ein Angebot Rückbau und Entsorgung getrennt ausweist.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet ein 30-m³-Bauschuttcontainer 2026?", answer: "Die aktuelle BauKostenRadar-Datenbasis führt etwa 650 bis 1.450 Euro pauschal inklusive Entsorgung als Richtwert." },
      { question: "Ist die Entsorgung im Containerpreis enthalten?", answer: "Ja. Bei der hier verwendeten BauKostenRadar-Position ist die Entsorgung ausdrücklich im Richtwert enthalten. Annahmebedingungen und mögliche Grenzen müssen beim konkreten Anbieter geprüft werden." },
      { question: "Kann ich den Containerpreis zum Hausabriss addieren?", answer: "Nicht automatisch. Beim vollständigen Einfamilienhaus-Abriss ist die Entsorgung in der aktuellen BauKostenRadar-Position bereits enthalten." },
    ],
    related: [
      { label: "Bauschuttcontainer Preisdetail", href: "/kosten/abriss-entsorgung/leistung/bauschuttcontainer-30-m3" },
      { label: "Abriss & Entsorgung Kosten", href: "/kosten/abriss-entsorgung" },
      { label: "Haus abreißen Kosten", href: "/ratgeber/haus-abreissen-kosten" },
      { label: "Innenabbruch Einfamilienhaus Kosten", href: "/ratgeber/innenabbruch-einfamilienhaus-kosten" },
      { label: "Industriehalle abbrechen Kosten", href: "/ratgeber/industriehalle-abbrechen-kosten-pro-qm" },
      { label: "Containerkosten berechnen", href: "/rechner/handwerkerkosten?gewerk=abriss-entsorgung&leistung=bauschuttcontainer-30-m3&menge=1" },
    ],
  },
];