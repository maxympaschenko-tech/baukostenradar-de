import type { Guide } from "./guides";

export const tuerenGuides: Guide[] = [
  {
    slug: "innentueren-kosten",
    title: "Innentüren Kosten 2026",
    h1: "Innentüren Kosten 2026: Türblatt, Zarge und Einbau",
    description: "Innentüren Kosten 2026: Zimmertür mit Zarge und Einbau, Türblattausch, CPL- und Echtholzfurnier-Türblätter sowie Projektpreise vergleichen.",
    eyebrow: "Innentüren 2026",
    intro: "Bei Innentüren setzt sich der Gesamtpreis aus Türblatt, Zarge, Beschlägen und Montage zusammen. Im Bestand kann die Zarge den Aufwand stärker beeinflussen als das Türblatt. Deshalb trennt BauKostenRadar Produkt- und Montagepositionen.",
    keyFact: "Zimmertür inklusive Türelement und Einbau etwa 250-800 € pro Tür.",
    sections: [
      {
        heading: "Was kostet eine Innentür mit Einbau?",
        paragraphs: ["Blauarbeit nennt 2026 für die reine Montage einer Standard-Zimmertür samt Zarge etwa 150 bis 350 Euro. Mit Türelement liegt die neue Zimmertür meist bei etwa 250 bis 800 Euro."],
        table: {
          headers: ["Leistung", "Richtwert 2026"],
          rows: [
            { cells: ["Zimmertür inklusive Element und Einbau", "250-800 €"], href: "/kosten/tueren/leistung/zimmertuer-inklusive-tuerelement-und-einbau" },
            { cells: ["Standardmaß reine Montage", "150-350 €"], href: "/kosten/tueren/leistung/zimmertuer-standardmass-reine-montage" },
            { cells: ["Türblatt tauschen, Montage", "80-150 €"], href: "/kosten/tueren/leistung/tuerblatt-tauschen-montage" },
            { cells: ["Alte Innentür demontieren/entsorgen", "20-50 €"], href: "/kosten/tueren/leistung/alte-innentuer-demontieren-und-entsorgen" },
          ],
        },
      },
      {
        heading: "Türblatt nach Oberfläche",
        paragraphs: ["Der Produktpreis ist nicht mit einem Komplettpreis inklusive Zarge und Montage gleichzusetzen."],
        table: {
          headers: ["Türblatt", "Richtwert"],
          rows: [
            { cells: ["Standardausführung", "ab 50 €"], href: "/kosten/tueren/leistung/tuerblatt-standardausfuehrung" },
            { cells: ["CPL", "80-200 €"], href: "/kosten/tueren/leistung/cpl-tuerblatt" },
            { cells: ["Echtholzfurnier", "150-400 €"], href: "/kosten/tueren/leistung/echtholzfurnier-tuerblatt" },
          ],
        },
      },
      {
        heading: "Mehrere Türen gemeinsam austauschen",
        paragraphs: ["Blauarbeit nennt für fünf Standard-Zimmertüren mit Zarge etwa 600 bis 1.250 Euro reine Montage und etwa 1.500 bis 3.500 Euro inklusive Türelementen. Gemeinsame Montage reduziert Anfahrt und Rüstzeit pro Tür."],
      },
    ],
    faqs: [
      { question: "Was kostet eine Innentür inklusive Einbau?", answer: "Für eine Standard-Zimmertür inklusive Türelement und Einbau nennt Blauarbeit etwa 250 bis 800 Euro." },
      { question: "Was kostet nur der Türblattausch?", answer: "Die Montage bei weiterverwendeter Zarge liegt laut Blauarbeit etwa bei 80 bis 150 Euro zuzüglich Türblatt." },
      { question: "Was kosten fünf neue Innentüren?", answer: "Je nach Qualität etwa 1.500 bis 3.500 Euro für fünf Standardtüren mit Zarge und Türelementen." },
    ],
    related: [
      { label: "6 Innentüren austauschen", href: "/ratgeber/6-innentueren-austauschen-kosten" },
      { label: "Türzargen Kosten", href: "/ratgeber/tuerzarge-einbauen-kosten" },
      { label: "Türen Preisübersicht", href: "/kosten/tueren" },
      { label: "Innentür berechnen", href: "/rechner/handwerkerkosten?gewerk=tueren&leistung=zimmertuer-inklusive-tuerelement-und-einbau" },
    ],
  },
  {
    slug: "tuerzarge-einbauen-kosten",
    title: "Türzarge einbauen Kosten 2026",
    h1: "Türzarge einbauen: Kosten für Holz, Stahl und Montage 2026",
    description: "Türzarge einbauen Kosten: Holz- und Stahlzargen nach Wandstärke, Kleinmaterial und Montage für Innen- und Eingangstüren vergleichen.",
    eyebrow: "Türzargen 2026",
    intro: "Die Türzarge muss zur Wandstärke passen, exakt ausgerichtet und sicher befestigt werden. MyHammer veröffentlicht getrennte Material- und Montagewerte für Innen- und Eingangstüren.",
    keyFact: "Türzargeneinbau je nach Material und Einsatz insgesamt etwa 180-600 €.",
    sections: [
      {
        heading: "Zargen nach Material und Wandstärke",
        paragraphs: ["Die folgenden MyHammer-Werte beziehen sich auf das Zargenmaterial ohne Montage."],
        table: {
          headers: ["Zarge", "Materialpreis"],
          rows: [
            { cells: ["Holzzarge Innentür 10 cm", "100-180 €"], href: "/kosten/tueren/leistung/holzzarge-innentuer-10-cm" },
            { cells: ["Stahlzarge Innentür 10 cm", "65-75 €"], href: "/kosten/tueren/leistung/stahlzarge-innentuer-10-cm" },
            { cells: ["Holzzarge Eingangstür 20,5 cm", "150-250 €"], href: "/kosten/tueren/leistung/holzzarge-eingangstuer-20-5-cm" },
            { cells: ["Stahlzarge Eingangstür 28,5 cm", "90-100 €"], href: "/kosten/tueren/leistung/stahlzarge-eingangstuer-28-5-cm" },
          ],
        },
      },
      {
        heading: "Montage und Kleinmaterial",
        paragraphs: ["MyHammer nennt für die Montage einer Innentürzarge etwa 50 bis 150 Euro, bei einer Eingangstür etwa 200 bis 350 Euro. Kleinmaterial und Bauschaum liegen zusätzlich bei rund 30 bis 50 Euro."],
        table: {
          headers: ["Arbeit", "Richtwert"],
          rows: [
            { cells: ["Zarge Innentür montieren", "50-150 €"], href: "/kosten/tueren/leistung/zarge-innentuer-montieren" },
            { cells: ["Zarge Eingangstür montieren", "200-350 €"], href: "/kosten/tueren/leistung/zarge-eingangstuer-montieren" },
            { cells: ["Kleinmaterial/Bauschaum", "30-50 €"], href: "/kosten/tueren/leistung/kleinmaterial-und-bauschaum-fuer-tuerzarge" },
          ],
        },
      },
      { heading: "Altbau kann den Aufwand erhöhen", paragraphs: ["Ungewöhnliche Wandstärken, schiefe Öffnungen oder eingemauerte Stahlzargen können zusätzliche Arbeiten verursachen. Angebote sollten Material, Demontage und Montage getrennt ausweisen."] },
    ],
    faqs: [
      { question: "Was kostet eine Türzarge mit Einbau?", answer: "MyHammer nennt je nach Material, Wandstärke und Einsatzbereich insgesamt etwa 180 bis 600 Euro." },
      { question: "Was kostet die Montage einer Innentürzarge?", answer: "Als Arbeitskosten nennt MyHammer etwa 50 bis 150 Euro." },
      { question: "Was kostet eine Holzzarge?", answer: "Bei 10 cm Breite nennt MyHammer für eine Innentür etwa 100 bis 180 Euro Material." },
    ],
    related: [
      { label: "Innentüren Kosten", href: "/ratgeber/innentueren-kosten" },
      { label: "Haustür einbauen Kosten", href: "/ratgeber/haustuer-einbauen-kosten" },
      { label: "Türzarge berechnen", href: "/rechner/handwerkerkosten?gewerk=tueren&leistung=tuerzarge-einbauen-komplett-allgemein" },
    ],
  },
  {
    slug: "haustuer-material-kosten",
    title: "Haustür nach Material Kosten 2026",
    h1: "Haustür aus Kunststoff, Aluminium, Holz oder Holz-Alu: Kosten 2026",
    description: "Haustür Kosten 2026 nach Material: Kunststoff, Aluminium, Holz und Holz-Aluminium ohne Montage sowie kompletter Einbau im Vergleich.",
    eyebrow: "Haustür nach Material",
    intro: "Das Material prägt den Haustürpreis stark. Für einen fairen Vergleich müssen Größe, Verglasung und Sicherheitsausstattung möglichst ähnlich sein. Aroundhome veröffentlicht aktuelle Preisbereiche nach Material.",
    keyFact: "Ohne Montage etwa 1.300-3.500 € für Kunststoff bis etwa 3.000-7.000 € für Holz-Aluminium.",
    sections: [
      {
        heading: "Haustürpreise nach Material",
        paragraphs: ["Die Materialspannen beziehen sich auf das Türelement. Einbau und bauliche Anpassungen kommen je nach Angebot hinzu."],
        table: {
          headers: ["Material", "Richtwert ohne Montage"],
          rows: [
            { cells: ["Kunststoff", "1.300-3.500 €"], href: "/kosten/tueren/leistung/kunststoff-haustuer-ohne-montage" },
            { cells: ["Aluminium", "2.000-6.500 €"], href: "/kosten/tueren/leistung/aluminium-haustuer-ohne-montage" },
            { cells: ["Holz", "2.500-6.000 €"], href: "/kosten/tueren/leistung/holz-haustuer-ohne-montage" },
            { cells: ["Holz-Aluminium", "3.000-7.000 €"], href: "/kosten/tueren/leistung/holz-aluminium-haustuer-ohne-montage" },
          ],
        },
      },
      {
        heading: "Komplettpreis und Montage",
        paragraphs: ["Aroundhome nennt 2026 für eine neue Haustür inklusive Einbau etwa 1.500 bis 8.000 Euro. Für den fachgerechten Einbau allein werden meist etwa 300 bis 700 Euro genannt."],
        table: {
          headers: ["Leistung", "Richtwert"],
          rows: [
            { cells: ["Haustür komplett inklusive Einbau", "1.500-8.000 €"], href: "/kosten/tueren/leistung/haustuer-komplett-inklusive-einbau" },
            { cells: ["Haustür fachgerecht einbauen", "300-700 €"], href: "/kosten/tueren/leistung/haustuer-fachgerecht-einbauen" },
          ],
        },
      },
      { heading: "Ausstattung mit vergleichen", paragraphs: ["Sicherheitsklasse, Verglasung, Seitenteile, U-Wert und Schließsystem können den Preis stärker verändern als das Grundmaterial. Vergleichen Sie daher möglichst identische Ausstattungen."] },
    ],
    faqs: [
      { question: "Welche Haustür ist am günstigsten?", answer: "In den Aroundhome-Materialspannen startet Kunststoff am niedrigsten." },
      { question: "Was kostet eine Aluminium-Haustür?", answer: "Aroundhome nennt 2026 etwa 2.000 bis 6.500 Euro für das Türelement, Montage separat." },
      { question: "Was kostet eine Haustür inklusive Einbau?", answer: "Als breite Orientierung nennt Aroundhome etwa 1.500 bis 8.000 Euro inklusive Einbau." },
    ],
    related: [
      { label: "Kunststoff-Haustür Kosten", href: "/ratgeber/haustuer-kunststoff-kosten" },
      { label: "RC2-Haustür Kosten", href: "/ratgeber/haustuer-rc2-kosten" },
      { label: "Haustür Ausstattung", href: "/ratgeber/haustuer-zusatzausstattung-kosten" },
      { label: "Haustür einbauen Kosten", href: "/ratgeber/haustuer-einbauen-kosten" },
      { label: "Haustür berechnen", href: "/rechner/handwerkerkosten?gewerk=tueren&leistung=haustuer-komplett-inklusive-einbau" },
    ],
  },
  {
    slug: "haustuer-zusatzausstattung-kosten",
    title: "Haustür Zusatzausstattung Kosten 2026",
    h1: "Haustür Ausstattung: Seitenteil, Oberlicht, Glas, RC3, Wärme- und Schallschutz Kosten",
    description: "Haustür Zusatzausstattung Kosten 2026: Glaseinsatz, Seitenteil/Oberlicht, Schloss, RC3-Sicherheit, Wärmeschutz und Schallschutz im Überblick.",
    eyebrow: "Haustür Ausstattung 2026",
    intro: "Große Preisunterschiede entstehen oft durch Seitenteile, Oberlichter, Verglasung, Schließsysteme sowie höhere Anforderungen an Sicherheit, Wärme- oder Schallschutz. Diese Positionen sollten im Angebot einzeln erkennbar sein.",
    keyFact: "Seitenteil/Oberlicht etwa 800-2.000 €, Glaseinsatz etwa 300-1.000 € als Zusatzpositionen.",
    sections: [
      {
        heading: "Glas, Seitenteil und Schloss",
        paragraphs: ["Die Richtwerte sind Zusatzpositionen und dürfen nicht doppelt gerechnet werden, wenn sie bereits im Türpaket enthalten sind."],
        table: {
          headers: ["Zusatz", "Richtwert"],
          rows: [
            { cells: ["Glaseinsatz", "300-1.000 €"], href: "/kosten/tueren/leistung/glaseinsatz-fuer-haustuer" },
            { cells: ["Seitenteil oder Oberlicht", "800-2.000 €"], href: "/kosten/tueren/leistung/seitenteil-oder-oberlicht-fuer-haustuer" },
            { cells: ["Standardschloss, Zylinder und Klinke", "100-250 €"], href: "/kosten/tueren/leistung/standardschloss-zylinder-und-klinke-haustuer" },
          ],
        },
      },
      {
        heading: "Sicherheit, Wärmeschutz und Schallschutz",
        paragraphs: ["Aroundhome nennt RC3-Markenmodelle ab etwa 2.500 Euro und je nach Ausstattung bis rund 4.000 Euro. Haustüren mit U-Wert unter 1 beginnen etwa ab 2.500 Euro. Hochwertige mehrlagige Stahl-Schallschutztüren können um 3.000 Euro liegen."],
        table: {
          headers: ["Ausführung", "Richtwert"],
          rows: [
            { cells: ["RC3 Sicherheitshaustür", "2.500-4.000 €"], href: "/kosten/tueren/leistung/sicherheitshaustuer-rc3-markenmodell" },
            { cells: ["Wärmeschutz-Haustür U-Wert unter 1", "ab 2.500 €"], href: "/kosten/tueren/leistung/waermeschutz-haustuer-u-wert-unter-1" },
            { cells: ["Stahl-Schallschutztür hohe Klasse", "ca. 3.000 €"], href: "/kosten/tueren/leistung/schallschutztuer-stahl-hohe-schallschutzklasse" },
            { cells: ["Schall-/Brandschutztür innen", "500-1.500 €"], href: "/kosten/tueren/leistung/schallschutztuer-oder-brandschutztuer-innen" },
          ],
        },
      },
    ],
    faqs: [
      { question: "Was kostet ein Seitenteil an der Haustür?", answer: "Aroundhome nennt grob etwa 800 bis 2.000 Euro für Seitenteil oder Oberlicht." },
      { question: "Was kostet eine RC3-Haustür?", answer: "Aroundhome nennt Markenmodelle etwa ab 2.500 Euro und je nach Ausstattung bis rund 4.000 Euro." },
      { question: "Was kostet eine gut gedämmte Haustür?", answer: "Für Haustüren mit U-Wert unter 1 nennt Aroundhome Preise ab etwa 2.500 Euro zuzüglich Montage." },
    ],
    related: [
      { label: "Haustür nach Material", href: "/ratgeber/haustuer-material-kosten" },
      { label: "RC2-Haustür Kosten", href: "/ratgeber/haustuer-rc2-kosten" },
      { label: "Innentüren Kosten", href: "/ratgeber/innentueren-kosten" },
      { label: "RC3-Haustür berechnen", href: "/rechner/handwerkerkosten?gewerk=tueren&leistung=sicherheitshaustuer-rc3-markenmodell" },
    ],
  },
  {
    slug: "schiebetuer-einbauen-kosten",
    title: "Schiebetür einbauen Kosten 2026",
    h1: "Schiebetür einbauen: Kosten 2026 für Material, Montage und Anfahrt",
    description: "Schiebetür einbauen Kosten 2026: einfacher Einbau ab 200 €, Glas-Schiebetür-Beispiel mit Material, Montage und Anfahrt sowie Kostentreiber.",
    eyebrow: "Schiebetüren 2026",
    intro: "Eine einfache Innenschiebetür vor der Wand ist deutlich anders zu kalkulieren als eine in der Wand laufende Konstruktion oder eine große Terrassentür. Blauarbeit veröffentlicht ein konkretes Kostenbeispiel für eine sandgestrahlte Glas-Schiebetür im Innenbereich.",
    keyFact: "Einfacher Einbau ab etwa 200 €; Glas-Schiebetür-Beispiel insgesamt 675 €.",
    sections: [
      {
        heading: "Einbau und Kostenbeispiel",
        paragraphs: ["Blauarbeit nennt für einfache Schiebetürmodelle einen fachgerechten Einbau ab etwa 200 Euro. Im Standardbeispiel entfallen 55 Euro auf Anfahrt, 340 Euro auf die Glastür und 280 Euro auf Montage."],
        table: {
          headers: ["Position", "Richtwert"],
          rows: [
            { cells: ["Einfacher Einbau", "ab 200 €"], href: "/kosten/tueren/leistung/schiebetuer-einfach-vom-fachbetrieb-einbauen" },
            { cells: ["Anfahrt Beispiel", "55 €"], href: "/kosten/tueren/leistung/schiebetuer-anfahrt-standardbeispiel" },
            { cells: ["Glastür Material", "340 €"], href: "/kosten/tueren/leistung/schiebetuer-sandgestrahlte-glastuer-material" },
            { cells: ["Montage Beispiel", "280 €"], href: "/kosten/tueren/leistung/schiebetuer-montage-standardbeispiel" },
            { cells: ["Gesamtbeispiel", "675 €"], href: "/kosten/tueren/leistung/schiebetuer-aus-glas-standard-komplett-einbauen" },
          ],
        },
      },
      { heading: "Wandkonstruktion bestimmt den Aufwand", paragraphs: ["Montage vor der Wand ist meist einfacher als eine in der Wand laufende Lösung. Maßanfertigung, Zahl der Flügel, Laufmechanismus und Anpassungen an der Öffnung können den Preis erhöhen."] },
    ],
    faqs: [
      { question: "Was kostet es, eine Schiebetür einbauen zu lassen?", answer: "Blauarbeit nennt für einfache Modelle einen fachgerechten Einbau ab etwa 200 Euro." },
      { question: "Was kostet eine Glas-Schiebetür mit Montage?", answer: "Im Blauarbeit-Beispiel kostet die sandgestrahlte Glas-Schiebetür inklusive Anfahrt und Montage insgesamt 675 Euro." },
      { question: "Was beeinflusst den Schiebetürpreis?", answer: "Material, Maßanfertigung, Flügelzahl, Laufmechanismus, Montageart und mögliche Wandarbeiten sind die wichtigsten Faktoren." },
    ],
    related: [
      { label: "Innentüren Kosten", href: "/ratgeber/innentueren-kosten" },
      { label: "Türzargen Kosten", href: "/ratgeber/tuerzarge-einbauen-kosten" },
      { label: "Türen Preisübersicht", href: "/kosten/tueren" },
      { label: "Schiebetür berechnen", href: "/rechner/handwerkerkosten?gewerk=tueren&leistung=schiebetuer-einfach-vom-fachbetrieb-einbauen" },
    ],
  },
];