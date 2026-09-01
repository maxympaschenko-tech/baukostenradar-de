import type { Guide } from "@/lib/guides";

export const waermepumpeGuides: Guide[] = [
  {
    slug: "waermepumpe-kosten-2026",
    title: "Wärmepumpe Kosten 2026",
    h1: "Wärmepumpe Kosten 2026: Neubau, Altbau, Installation und Anpassungen",
    description: "Wärmepumpe Kosten 2026: aktuelle Richtwerte für Neubau und Altbau, Luft-Wasser-Gerät, Installation, Elektrik, Rückbau, Heizkörper und hydraulischen Abgleich.",
    eyebrow: "Wärmepumpe 2026",
    intro: "Bei einer Wärmepumpe entscheidet nicht nur der Gerätepreis über das Budget. Im Bestand können Rückbau, Hydraulik, Elektrik und angepasste Heizflächen einen erheblichen Teil des Projekts ausmachen. BauKostenRadar trennt deshalb Komplettpreise und einzelne Kostenblöcke, damit Angebote mit vergleichbarem Leistungsumfang gegenübergestellt werden können.",
    keyFact: "Wärmepumpe im Neubau ab etwa 22.000 €, im Altbau inklusive Einbau und Anpassungen etwa 30.000-55.000 € vor Förderung",
    sections: [
      {
        heading: "Was kostet eine Wärmepumpe 2026?",
        paragraphs: [
          "Für eine komplette Luft-Wasser-Wärmepumpe führt die BauKostenRadar-Datenbasis etwa 25.000 bis 45.000 Euro pro Anlage vor Förderung. Für einen Neubau ist zusätzlich ein praxisorientierter Startwert von etwa 22.000 Euro inklusive Einbau dokumentiert. Im Altbau liegt der aktuelle Richtwert inklusive Einbau und typischer Anpassungen bei etwa 30.000 bis 55.000 Euro pro Projekt vor Förderung.",
          "Diese Werte sind nicht direkt addierbar. Sie beschreiben unterschiedliche Projekt- beziehungsweise Leistungspakete. Für einen Angebotsvergleich muss deshalb geprüft werden, welche Komponenten und Nebenarbeiten im jeweiligen Preis enthalten sind.",
        ],
        table: {
          headers: ["Wärmepumpen-Position", "Richtwert 2026"],
          rows: [
            { cells: ["Luft-Wasser-Wärmepumpe komplett", "25.000-45.000 € vor Förderung"], href: "/kosten/waermepumpe" },
            { cells: ["Wärmepumpe im Neubau inkl. Einbau", "22.000 €"], href: "/kosten/waermepumpe/leistung/waermepumpe-im-neubau-inkl-einbau" },
            { cells: ["Wärmepumpe im Altbau inkl. Einbau und Anpassungen", "30.000-55.000 € vor Förderung"], href: "/kosten/waermepumpe/leistung/waermepumpe-im-altbau-inkl-einbau-und-anpassungen" },
            { cells: ["Luft-Wasser-Wärmepumpe Gerät 10 kW", "12.000-18.000 €"], href: "/kosten/waermepumpe/leistung/luft-wasser-waermepumpe-geraet-10-kw" },
            { cells: ["Installation und hydraulische Einbindung", "5.000-9.000 €"], href: "/kosten/waermepumpe/leistung/waermepumpe-installieren-und-hydraulisch-einbinden" },
          ],
        },
      },
      {
        heading: "Welche Zusatzkosten können im Altbau entstehen?",
        paragraphs: [
          "Beim Heizungstausch im Bestand muss die vorhandene Anlage technisch in das neue System überführt werden. Dafür können Demontage, Elektroarbeiten, hydraulischer Abgleich und größere Heizflächen notwendig werden.",
        ],
        table: {
          headers: ["Zusatzarbeit", "Richtwert 2026"],
          rows: [
            { cells: ["Altheizung demontieren mit Pufferspeicher und Zubehör", "3.000-6.000 €"], href: "/kosten/waermepumpe/leistung/altheizung-demontieren-mit-pufferspeicher-und-zubehoer" },
            { cells: ["Elektrik mit Zählerschrank und Anschluss", "1.500-3.000 €"], href: "/kosten/waermepumpe/leistung/elektrik-fuer-waermepumpe-mit-zaehlerschrank-und-anschluss" },
            { cells: ["Niedertemperatur-Heizkörper nachrüsten", "300-800 € pro Heizkörper"], href: "/kosten/waermepumpe/leistung/niedertemperatur-heizkoerper-fuer-waermepumpe-nachruesten" },
            { cells: ["Hydraulischer Abgleich im Einfamilienhaus", "650-1.250 €"], href: "/kosten/waermepumpe/leistung/hydraulischer-abgleich-fuer-waermepumpe-im-einfamilienhaus" },
          ],
        },
      },
      {
        heading: "Wärmepumpenangebote richtig vergleichen",
        paragraphs: [
          "Ein günstiger Gerätepreis ist kein belastbarer Projektpreis. Im Angebot sollte klar erkennbar sein, ob Lieferung, Speicher, Montage, hydraulische Einbindung, Elektroarbeiten, Inbetriebnahme, Rückbau und Entsorgung enthalten sind.",
          "Für Bestandsgebäude sind außerdem Heizlast und erforderliche Vorlauftemperatur wichtig. Wenn einzelne Heizkörper zu klein sind, können zusätzliche Heizflächen oder andere Anpassungen notwendig werden.",
        ],
        bullets: [
          "Wärmepumpentyp und konkrete Geräteleistung",
          "Lieferumfang inklusive Speicher und Regelung",
          "Montage und hydraulische Einbindung",
          "Elektroanschluss und Arbeiten am Zählerschrank",
          "Rückbau der alten Heizungsanlage",
          "Heizkörper, Fußbodenheizung und hydraulischer Abgleich",
          "Inbetriebnahme, Einweisung und dokumentierte Nebenarbeiten",
        ],
      },
      {
        heading: "Förderung getrennt vom technischen Bruttopreis betrachten",
        paragraphs: [
          "BauKostenRadar weist die genannten Wärmepumpenpreise als Richtwerte vor individueller Förderung aus, wenn die Preisposition entsprechend definiert ist. Damit bleibt sichtbar, wie hoch das technische Projektbudget ohne angenommene Zuschüsse ist.",
          "Förderbedingungen können sich ändern und hängen vom konkreten Vorhaben ab. Für die Budgetplanung ist deshalb sinnvoll, zuerst den vollständigen Leistungsumfang zu kalkulieren und eine mögliche Förderung anschließend separat zu berücksichtigen.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet eine Wärmepumpe im Altbau 2026?", answer: "Für eine Wärmepumpe im Altbau inklusive Einbau und typischer Anpassungen führt die aktuelle BauKostenRadar-Datenbasis etwa 30.000 bis 55.000 Euro pro Projekt vor Förderung." },
      { question: "Was kostet eine Wärmepumpe im Neubau?", answer: "Als praxisorientierten Startwert führt die Datenbasis etwa 22.000 Euro pro Anlage inklusive Einbau. Ausstattung und Wärmepumpentyp können den Projektpreis erhöhen." },
      { question: "Was kostet die Installation einer Wärmepumpe?", answer: "Für Installation und hydraulische Einbindung ohne Gerätepreis liegt der aktuelle Richtwert bei etwa 5.000 bis 9.000 Euro pro Projekt." },
      { question: "Sind Förderungen bereits abgezogen?", answer: "Nein, die entsprechend gekennzeichneten Projektwerte werden vor individueller Förderung ausgewiesen." },
    ],
    related: [
      { label: "Wärmepumpe Preisverzeichnis", href: "/kosten/waermepumpe" },
      { label: "Wärmepumpe im Altbau Kosten", href: "/ratgeber/waermepumpe-altbau-kosten" },
      { label: "Wärmepumpe im Neubau Kosten", href: "/ratgeber/waermepumpe-neubau-kosten" },
      { label: "Wärmepumpe Installation Kosten", href: "/ratgeber/waermepumpe-installation-kosten" },
      { label: "Heizkörper für Wärmepumpe Kosten", href: "/ratgeber/waermepumpe-heizkoerper-kosten" },
      { label: "Luft-Wasser-Wärmepumpe Kosten", href: "/ratgeber/luft-wasser-waermepumpe-kosten" },
      { label: "Wärmepumpe Wartung Kosten", href: "/ratgeber/waermepumpe-wartung-kosten" },
      { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
      { label: "Wärmepumpe in Berlin", href: "/kosten/waermepumpe/berlin" },
      { label: "Wärmepumpe berechnen", href: "/rechner/handwerkerkosten?gewerk=waermepumpe&leistung=waermepumpe-im-altbau-inkl-einbau-und-anpassungen" },
    ],
  },
  {
    slug: "waermepumpe-altbau-kosten",
    title: "Wärmepumpe Altbau Kosten 2026",
    h1: "Wärmepumpe im Altbau Kosten 2026: Einbau, Rückbau und Anpassungen",
    description: "Wärmepumpe im Altbau Kosten 2026: Richtwert für Einbau vor Förderung plus Rückbau, Elektrik, Heizkörper und hydraulischen Abgleich als einzelne Kostenblöcke.",
    eyebrow: "Wärmepumpe im Altbau 2026",
    intro: "Im Altbau ist der Wärmepumpenpreis besonders stark vom Bestand abhängig. Neben dem Wärmeerzeuger können alte Heiztechnik, Elektroinstallation, Hydraulik und vorhandene Heizkörper angepasst werden müssen. Deshalb sollte ein Altbau-Angebot als Gesamtprojekt und nicht nur als Gerätepreis bewertet werden.",
    keyFact: "Wärmepumpe im Altbau inklusive Einbau und Anpassungen etwa 30.000-55.000 € pro Projekt vor Förderung",
    sections: [
      {
        heading: "Was kostet eine Wärmepumpe im Altbau 2026?",
        paragraphs: [
          "Für eine Wärmepumpe im Altbau inklusive Einbau und Anpassungen führt BauKostenRadar aktuell etwa 30.000 bis 55.000 Euro pro Projekt vor Förderung. Der Richtwert berücksichtigt, dass im Bestand zusätzliche Arbeiten an Heizflächen, Hydraulik und Elektrik auftreten können.",
          "Der Wert ist ein Projekt-Richtwert und darf nicht zusätzlich zu allen unten genannten Einzelpositionen addiert werden. Die Einzelpreise helfen vielmehr dabei, Angebote zu zerlegen und fehlende Leistungen zu erkennen.",
        ],
        table: {
          headers: ["Altbau-Kostenblock", "Richtwert 2026"],
          rows: [
            { cells: ["Wärmepumpe Altbau inkl. Einbau und Anpassungen", "30.000-55.000 € vor Förderung"], href: "/kosten/waermepumpe/leistung/waermepumpe-im-altbau-inkl-einbau-und-anpassungen" },
            { cells: ["Altheizung demontieren", "3.000-6.000 €"], href: "/kosten/waermepumpe/leistung/altheizung-demontieren-mit-pufferspeicher-und-zubehoer" },
            { cells: ["Elektrik mit Zählerschrank und Anschluss", "1.500-3.000 €"], href: "/kosten/waermepumpe/leistung/elektrik-fuer-waermepumpe-mit-zaehlerschrank-und-anschluss" },
            { cells: ["Niedertemperatur-Heizkörper nachrüsten", "300-800 € pro Heizkörper"], href: "/kosten/waermepumpe/leistung/niedertemperatur-heizkoerper-fuer-waermepumpe-nachruesten" },
            { cells: ["Hydraulischer Abgleich", "650-1.250 €"], href: "/kosten/waermepumpe/leistung/hydraulischer-abgleich-fuer-waermepumpe-im-einfamilienhaus" },
          ],
        },
      },
      {
        heading: "Welche Altbau-Anpassungen sind besonders wichtig?",
        paragraphs: [
          "Ob zusätzliche Arbeiten notwendig werden, hängt von Heizlast, Systemtemperaturen und vorhandener Wärmeverteilung ab. Eine Wärmepumpe kann nur sinnvoll beurteilt werden, wenn das Gebäude und die bestehende Heizungsanlage zusammen betrachtet werden.",
        ],
        bullets: [
          "Heizlast und benötigte Vorlauftemperatur prüfen",
          "vorhandene Heizkörper und Flächenheizung bewerten",
          "hydraulischen Zustand und Pumpentechnik prüfen",
          "Elektroanschluss und Zählerschrank einordnen",
          "Rückbau und Entsorgung der Altanlage festlegen",
          "Aufstellort, Leitungswege und Schallschutz berücksichtigen",
        ],
      },
      {
        heading: "Altbau-Angebote ohne Doppelzählung vergleichen",
        paragraphs: [
          "Ein Komplettangebot kann mehrere der genannten Einzelarbeiten bereits enthalten. Fordern Sie deshalb eine klare Leistungsbeschreibung an, bevor einzelne Richtwerte rechnerisch addiert werden.",
          "Besonders hilfreich ist eine Aufteilung nach Wärmepumpe, Montage, Elektro, Rückbau und Heizflächen. So wird sichtbar, ob zwei Angebote tatsächlich denselben Umfang abdecken.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet eine Wärmepumpe im Altbau?", answer: "Der aktuelle BauKostenRadar-Richtwert liegt bei etwa 30.000 bis 55.000 Euro pro Projekt inklusive Einbau und typischer Anpassungen vor Förderung." },
      { question: "Was kostet der Rückbau der alten Heizung?", answer: "Für die Demontage der Altheizung mit Pufferspeicher und Zubehör führt die Datenbasis etwa 3.000 bis 6.000 Euro." },
      { question: "Müssen im Altbau alle Heizkörper ersetzt werden?", answer: "Nicht automatisch. Ob Heizflächen angepasst werden müssen, hängt unter anderem von Heizlast, Heizkörpergröße und benötigter Vorlauftemperatur ab." },
    ],
    related: [
      { label: "Altbau-Projektpreis", href: "/kosten/waermepumpe/leistung/waermepumpe-im-altbau-inkl-einbau-und-anpassungen" },
      { label: "Wärmepumpe Kosten 2026", href: "/ratgeber/waermepumpe-kosten-2026" },
      { label: "Wärmepumpe Installation Kosten", href: "/ratgeber/waermepumpe-installation-kosten" },
      { label: "Heizkörper für Wärmepumpe Kosten", href: "/ratgeber/waermepumpe-heizkoerper-kosten" },
      { label: "Dämmung Kosten", href: "/ratgeber/daemmung-kosten-pro-qm" },
      { label: "Altbau-Wärmepumpe berechnen", href: "/rechner/handwerkerkosten?gewerk=waermepumpe&leistung=waermepumpe-im-altbau-inkl-einbau-und-anpassungen" },
    ],
  },
  {
    slug: "waermepumpe-neubau-kosten",
    title: "Wärmepumpe Neubau Kosten 2026",
    h1: "Wärmepumpe im Neubau Kosten 2026: Anlage, Gerät und Einbau",
    description: "Wärmepumpe im Neubau Kosten 2026: aktueller Startwert inklusive Einbau, Luft-Wasser-Gerät 10 kW und separate Installationskosten richtig einordnen.",
    eyebrow: "Wärmepumpe im Neubau 2026",
    intro: "Im Neubau kann die Wärmepumpe von Anfang an mit Heizlast, Flächenheizung, Hydraulik und Elektroplanung abgestimmt werden. Trotzdem sollte zwischen Komplett- beziehungsweise Projektpreis, Gerätekosten und einzelnen Montageblöcken unterschieden werden.",
    keyFact: "Wärmepumpe im Neubau inklusive Einbau etwa 22.000 € als praxisorientierter Startwert 2026",
    sections: [
      {
        heading: "Was kostet eine Wärmepumpe im Neubau?",
        paragraphs: [
          "BauKostenRadar führt für eine Wärmepumpe im Neubau inklusive Einbau einen praxisorientierten Startwert von etwa 22.000 Euro pro Anlage. Für ein Luft-Wasser-Wärmepumpengerät mit 10 kW liegt der aktuelle Geräte-Richtwert bei etwa 12.000 bis 18.000 Euro.",
          "Der Gerätepreis und der Neubau-Komplettwert sind unterschiedliche Preispositionen und dürfen nicht pauschal addiert werden. Entscheidend ist, ob Lieferung, Speicher, Hydraulik, Elektrik und Inbetriebnahme im Angebot bereits enthalten sind.",
        ],
        table: {
          headers: ["Neubau-Position", "Richtwert 2026"],
          rows: [
            { cells: ["Wärmepumpe im Neubau inkl. Einbau", "22.000 €"], href: "/kosten/waermepumpe/leistung/waermepumpe-im-neubau-inkl-einbau" },
            { cells: ["Luft-Wasser-Wärmepumpe Gerät 10 kW", "12.000-18.000 €"], href: "/kosten/waermepumpe/leistung/luft-wasser-waermepumpe-geraet-10-kw" },
            { cells: ["Installation und hydraulische Einbindung", "5.000-9.000 €"], href: "/kosten/waermepumpe/leistung/waermepumpe-installieren-und-hydraulisch-einbinden" },
          ],
        },
      },
      {
        heading: "Was sollte im Neubau-Angebot enthalten sein?",
        paragraphs: ["Ein belastbarer Vergleich funktioniert nur, wenn mehrere Angebote denselben technischen Umfang beschreiben."],
        bullets: [
          "Gerätetyp und Nennleistung",
          "Warmwasserspeicher beziehungsweise Pufferspeicher",
          "hydraulische Einbindung und Heizkreisverteiler",
          "Elektroanschluss und Regelung",
          "Außenaufstellung, Fundament und Leitungswege",
          "Inbetriebnahme, Einregulierung und Dokumentation",
        ],
      },
      {
        heading: "Wärmepumpe und Heizflächen gemeinsam planen",
        paragraphs: [
          "Im Neubau lassen sich Flächenheizung und Wärmeerzeuger gemeinsam dimensionieren. Dadurch kann die erforderliche Vorlauftemperatur bereits in der Planung berücksichtigt werden.",
          "Ein einzelner 10-kW-Gerätepreis sagt deshalb noch nicht, ob das Gerät für ein konkretes Gebäude passt. Die Dimensionierung muss zur berechneten Heizlast und zum Gesamtsystem passen.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet eine Wärmepumpe im Neubau 2026?", answer: "Die aktuelle Datenbasis führt etwa 22.000 Euro pro Anlage inklusive Einbau als praxisorientierten Startwert." },
      { question: "Was kostet ein 10-kW-Luft-Wasser-Wärmepumpengerät?", answer: "Für das Gerät führt BauKostenRadar etwa 12.000 bis 18.000 Euro. Installation und Zusatzarbeiten sind bei dieser Einzelposition separat." },
      { question: "Kann ich Gerätepreis und Einbau einfach addieren?", answer: "Nicht ohne Prüfung des Leistungsumfangs. Komplett- und Einzelpositionen können sich überschneiden und dürfen deshalb nicht automatisch addiert werden." },
    ],
    related: [
      { label: "Neubau-Projektpreis", href: "/kosten/waermepumpe/leistung/waermepumpe-im-neubau-inkl-einbau" },
      { label: "Luft-Wasser-Wärmepumpe Kosten", href: "/ratgeber/luft-wasser-waermepumpe-kosten" },
      { label: "Wärmepumpe Kosten 2026", href: "/ratgeber/waermepumpe-kosten-2026" },
      { label: "Wärmepumpe Installation Kosten", href: "/ratgeber/waermepumpe-installation-kosten" },
      { label: "Fußbodenheizung Kosten", href: "/ratgeber/fussbodenheizung-kosten" },
      { label: "Neubau-Wärmepumpe berechnen", href: "/rechner/handwerkerkosten?gewerk=waermepumpe&leistung=waermepumpe-im-neubau-inkl-einbau" },
    ],
  },
  {
    slug: "waermepumpe-installation-kosten",
    title: "Wärmepumpe Installation Kosten 2026",
    h1: "Wärmepumpe Installation Kosten 2026: Hydraulik, Elektrik und Rückbau",
    description: "Wärmepumpe Installation Kosten 2026: Montage und hydraulische Einbindung, Elektrik, Rückbau der Altheizung und hydraulischen Abgleich mit aktuellen Richtwerten vergleichen.",
    eyebrow: "Wärmepumpe Installation 2026",
    intro: "Beim Wärmepumpenangebot steckt ein großer Kostenblock außerhalb des eigentlichen Geräts. Montage, hydraulische Einbindung, Elektroarbeiten und Rückbau können je nach Bestand separat ausgewiesen oder Teil eines Komplettpreises sein. Für einen fairen Vergleich sollten diese Leistungen eindeutig erkennbar sein.",
    keyFact: "Wärmepumpe installieren und hydraulisch einbinden etwa 5.000-9.000 € pro Projekt ohne Gerätepreis",
    sections: [
      {
        heading: "Was kostet die Installation einer Wärmepumpe 2026?",
        paragraphs: [
          "Für Montage und hydraulische Einbindung führt BauKostenRadar aktuell etwa 5.000 bis 9.000 Euro pro Projekt ohne Gerätepreis. Elektrische Anpassungen mit Zählerschrank und Anschluss werden mit etwa 1.500 bis 3.000 Euro geführt.",
          "Beim Austausch einer bestehenden Heizung kann für Demontage inklusive Pufferspeicher und Zubehör ein weiterer Richtwert von etwa 3.000 bis 6.000 Euro relevant sein. Ein hydraulischer Abgleich im Einfamilienhaus liegt bei etwa 650 bis 1.250 Euro.",
        ],
        table: {
          headers: ["Installationsblock", "Richtwert 2026"],
          rows: [
            { cells: ["Montage und hydraulische Einbindung", "5.000-9.000 €"], href: "/kosten/waermepumpe/leistung/waermepumpe-installieren-und-hydraulisch-einbinden" },
            { cells: ["Elektrik mit Zählerschrank und Anschluss", "1.500-3.000 €"], href: "/kosten/waermepumpe/leistung/elektrik-fuer-waermepumpe-mit-zaehlerschrank-und-anschluss" },
            { cells: ["Altheizung demontieren", "3.000-6.000 €"], href: "/kosten/waermepumpe/leistung/altheizung-demontieren-mit-pufferspeicher-und-zubehoer" },
            { cells: ["Hydraulischer Abgleich", "650-1.250 €"], href: "/kosten/waermepumpe/leistung/hydraulischer-abgleich-fuer-waermepumpe-im-einfamilienhaus" },
          ],
        },
      },
      {
        heading: "Welche Leistungen sollten im Montagepreis klar sein?",
        paragraphs: ["Je genauer die Leistungsgrenze beschrieben ist, desto besser lassen sich Angebote vergleichen und Nachträge vermeiden."],
        bullets: [
          "Aufstellung und Befestigung des Innen- und Außengeräts",
          "hydraulische Leitungen und Einbindung in das Heizsystem",
          "Speicher, Armaturen und erforderliche Pumpengruppen",
          "Elektroanschluss und gegebenenfalls Zählerschrankarbeiten",
          "Rückbau, Transport und Entsorgung der Altanlage",
          "Befüllung, Entlüftung, Abgleich und Inbetriebnahme",
        ],
      },
      {
        heading: "Komplettpreis und Einzelpositionen nicht doppelt rechnen",
        paragraphs: [
          "Bei einem schlüsselfertigen Angebot können Elektro, Rückbau oder hydraulische Arbeiten bereits enthalten sein. Die Einzelrichtwerte dienen dann vor allem als Kontrollgrößen für die Angebotsstruktur.",
          "Vor Auftragserteilung sollte schriftlich geklärt sein, welche Gewerke der Wärmepumpenbetrieb selbst ausführt und welche Arbeiten separat durch Elektriker oder weitere Fachbetriebe beauftragt werden.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet die Installation einer Wärmepumpe?", answer: "Für Montage und hydraulische Einbindung ohne Gerätepreis führt BauKostenRadar etwa 5.000 bis 9.000 Euro pro Projekt." },
      { question: "Was kostet die Elektrik für eine Wärmepumpe?", answer: "Für elektrische Anpassungen mit Zählerschrank und Anschluss liegt der aktuelle Richtwert bei etwa 1.500 bis 3.000 Euro pro Projekt." },
      { question: "Was kostet der hydraulische Abgleich?", answer: "Für einen hydraulischen Abgleich im Einfamilienhaus führt die Wärmepumpen-Datenbasis etwa 650 bis 1.250 Euro." },
    ],
    related: [
      { label: "Installations-Preisdetail", href: "/kosten/waermepumpe/leistung/waermepumpe-installieren-und-hydraulisch-einbinden" },
      { label: "Wärmepumpe Kosten 2026", href: "/ratgeber/waermepumpe-kosten-2026" },
      { label: "Wärmepumpe im Altbau Kosten", href: "/ratgeber/waermepumpe-altbau-kosten" },
      { label: "Elektrik erneuern Kosten", href: "/ratgeber/elektrik-erneuern-altbau" },
      { label: "Hydraulischer Abgleich Kosten", href: "/ratgeber/hydraulischer-abgleich-kosten" },
      { label: "Installation berechnen", href: "/rechner/handwerkerkosten?gewerk=waermepumpe&leistung=waermepumpe-installieren-und-hydraulisch-einbinden" },
    ],
  },
  {
    slug: "waermepumpe-heizkoerper-kosten",
    title: "Heizkörper für Wärmepumpe Kosten 2026",
    h1: "Heizkörper für Wärmepumpe Kosten 2026: Niedertemperatur-Heizkörper nachrüsten",
    description: "Heizkörper für Wärmepumpe Kosten 2026: Niedertemperatur-Heizkörper nachrüsten, hydraulischen Abgleich einordnen und Altbau-Heizflächen richtig planen.",
    eyebrow: "Wärmepumpe & Heizkörper 2026",
    intro: "Bei einer Wärmepumpe ist nicht automatisch jeder vorhandene Heizkörper ungeeignet. Entscheidend ist, ob die Heizflächen bei der geplanten Vorlauftemperatur genügend Leistung abgeben. Wo größere Heizflächen nötig sind, können Niedertemperatur-Heizkörper gezielt nachgerüstet werden.",
    keyFact: "Niedertemperatur-Heizkörper für Wärmepumpe nachrüsten etwa 300-800 € pro Heizkörper",
    sections: [
      {
        heading: "Was kosten Heizkörper für eine Wärmepumpe?",
        paragraphs: [
          "Für das Nachrüsten eines Niedertemperatur-Heizkörpers im Zusammenhang mit einer Wärmepumpe führt BauKostenRadar aktuell etwa 300 bis 800 Euro pro Heizkörper. Der Richtwert beschreibt eine typische Altbau-Anpassung, wenn vorhandene Heizflächen für niedrigere Systemtemperaturen zu klein sind.",
          "Wenn mehrere Heizflächen verändert werden, kann zusätzlich ein hydraulischer Abgleich sinnvoll beziehungsweise technisch erforderlich sein. Dafür liegt der aktuelle Wärmepumpen-Richtwert im Einfamilienhaus bei etwa 650 bis 1.250 Euro pro Projekt.",
        ],
        table: {
          headers: ["Heizflächen-Position", "Richtwert 2026"],
          rows: [
            { cells: ["Niedertemperatur-Heizkörper nachrüsten", "300-800 € pro Heizkörper"], href: "/kosten/waermepumpe/leistung/niedertemperatur-heizkoerper-fuer-waermepumpe-nachruesten" },
            { cells: ["Hydraulischer Abgleich Wärmepumpe EFH", "650-1.250 €"], href: "/kosten/waermepumpe/leistung/hydraulischer-abgleich-fuer-waermepumpe-im-einfamilienhaus" },
          ],
        },
      },
      {
        heading: "Wann müssen Heizkörper angepasst werden?",
        paragraphs: [
          "Ob ein Austausch notwendig ist, lässt sich nicht allein vom Alter des Heizkörpers ableiten. Maßgeblich sind Heizlast, vorhandene Heizkörperleistung und die geplanten Systemtemperaturen.",
        ],
        bullets: [
          "Heizlast des jeweiligen Raums",
          "Größe und Bauart des vorhandenen Heizkörpers",
          "geplante Vorlauf- und Rücklauftemperatur",
          "Dämmstandard und Fensterflächen",
          "hydraulischer Zustand des gesamten Heizsystems",
          "Alternative durch Flächenheizung oder größere Heizflächen",
        ],
      },
      {
        heading: "Heizkörpertausch als Teil des Altbau-Budgets",
        paragraphs: [
          "Bei einem vollständigen Wärmepumpenprojekt können einzelne Heizkörper-Anpassungen bereits im Gesamtangebot enthalten sein. Prüfen Sie deshalb den Leistungsumfang, bevor Stückpreise zusätzlich auf den Komplettpreis gerechnet werden.",
          "Wer nur einzelne kritische Räume anpasst, sollte gleichzeitig den hydraulischen Abgleich und die Einstellung der übrigen Heizflächen berücksichtigen. So wird nicht nur ein einzelner Heizkörper, sondern das Gesamtsystem optimiert.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet ein Heizkörper für eine Wärmepumpe?", answer: "Für einen Niedertemperatur-Heizkörper zum Nachrüsten führt die aktuelle Datenbasis etwa 300 bis 800 Euro pro Heizkörper." },
      { question: "Müssen bei einer Wärmepumpe alle Heizkörper neu?", answer: "Nein. Ob ein Austausch erforderlich ist, hängt von Heizlast, Heizkörperleistung und geplanter Vorlauftemperatur ab." },
      { question: "Was kostet der hydraulische Abgleich für eine Wärmepumpe?", answer: "Im Einfamilienhaus liegt der aktuelle Richtwert bei etwa 650 bis 1.250 Euro pro Projekt." },
    ],
    related: [
      { label: "Niedertemperatur-Heizkörper Preisdetail", href: "/kosten/waermepumpe/leistung/niedertemperatur-heizkoerper-fuer-waermepumpe-nachruesten" },
      { label: "Wärmepumpe im Altbau Kosten", href: "/ratgeber/waermepumpe-altbau-kosten" },
      { label: "Wärmepumpe Installation Kosten", href: "/ratgeber/waermepumpe-installation-kosten" },
      { label: "Heizkörper austauschen Kosten", href: "/ratgeber/heizkoerper-austauschen-kosten" },
      { label: "Hydraulischer Abgleich Kosten", href: "/ratgeber/hydraulischer-abgleich-kosten" },
      { label: "Heizkörper berechnen", href: "/rechner/handwerkerkosten?gewerk=waermepumpe&leistung=niedertemperatur-heizkoerper-fuer-waermepumpe-nachruesten" },
    ],
  },
];
