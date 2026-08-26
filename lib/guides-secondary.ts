import type { Guide } from "@/lib/guides";

export const secondaryGuides: Guide[] = [
  {
    slug: "haus-sanieren-kosten",
    title: "Haus sanieren Kosten 2026",
    h1: "Haus sanieren: Kosten 2026 pro m² und für 120 m²",
    description: "Was kostet es, ein Haus zu sanieren? Richtwerte 2026 pro m², Beispielbudget für 120 m² und die wichtigsten Kostentreiber von Technik bis Gebäudehülle.",
    eyebrow: "Haus sanieren",
    intro: "Bei einer Haussanierung entscheidet der tatsächliche Maßnahmenumfang über das Budget. Neue Oberflächen sind etwas anderes als die gleichzeitige Erneuerung von Elektrik, Sanitär, Heizung, Fenstern, Dach und Dämmung. Deshalb arbeitet BauKostenRadar mit klar getrennten Sanierungsstufen statt mit einem einzigen Durchschnittspreis.",
    keyFact: "Bei 120 m² reichen die Modellbudgets von 30.000 bis 420.000 € je nach Sanierungsumfang",
    sections: [
      {
        heading: "Was kostet eine Haussanierung pro m²?",
        paragraphs: [
          "Für die erste Budgetplanung verwendet BauKostenRadar vier Stufen. Leichte Renovierung und Kernsanierung sind durch externe Marktangaben verankert; die beiden mittleren Bereiche sind transparente Modellbänder zur Einordnung zwischen diesen Polen.",
        ],
        table: {
          headers: ["Umfang", "Richtwert 2026", "Typische Einordnung"],
          rows: [
            { cells: ["Leichte Renovierung", "65 - 180 €/m²", "Oberflächen, Boden, kleinere Reparaturen"] },
            { cells: ["Teilmodernisierung", "250 - 650 €/m²", "Mehrere Gewerke, aber keine komplette technische Erneuerung"] },
            { cells: ["Umfangreiche Sanierung", "650 - 1.500 €/m²", "Technik, Bad, Fenster und größere Eingriffe"] },
            { cells: ["Kernsanierung", "1.500 - 3.500 €/m²", "Gebäudehülle, Haustechnik und Innenausbau umfassend"] },
          ],
        },
      },
      {
        heading: "Beispiel: Haus mit 120 m² sanieren",
        paragraphs: [
          "Die folgende Rechnung multipliziert die Wohnfläche direkt mit den Modellbändern. Region, Qualitätsstandard und konkrete Einzelgewerke sind dabei noch nicht separat angepasst.",
        ],
        table: {
          headers: ["Sanierungsumfang", "120 m² Beispielbudget"],
          rows: [
            { cells: ["Leichte Renovierung", "7.800 - 21.600 €"] },
            { cells: ["Teilmodernisierung", "30.000 - 78.000 €"] },
            { cells: ["Umfangreiche Sanierung", "78.000 - 180.000 €"] },
            { cells: ["Kernsanierung", "180.000 - 420.000 €"] },
          ],
        },
      },
      {
        heading: "Welche Gewerke treiben die Kosten eines Hauses?",
        paragraphs: [
          "Bei größeren Projekten entsteht das Budget meist aus mehreren teuren Gewerken gleichzeitig. Besonders relevant sind Maßnahmen, die tief in Haustechnik oder Gebäudehülle eingreifen.",
        ],
        bullets: [
          "Dachsanierung und Dämmung",
          "Fenster und Fassade",
          "Heizung und Wärmeverteilung",
          "Elektroinstallation und Sicherungsverteilung",
          "Sanitärleitungen und komplette Bäder",
          "Bodenaufbau, Trockenbau und Innenausbau",
        ],
      },
      {
        heading: "So planen Sie ein belastbareres Hausbudget",
        paragraphs: [
          "Beginnen Sie mit einer Bestandsaufnahme und ordnen Sie das Projekt einer groben Sanierungsstufe zu. Danach sollten die größten Einzelgewerke separat geprüft werden. So erkennen Sie schnell, ob ein pauschaler Quadratmeterwert für Ihr Haus zu hoch oder zu niedrig angesetzt ist.",
          "Der Renovierungskosten-Rechner kombiniert Wohnfläche, Umfang, Qualitätsstandard und Region. Für einzelne Leistungen können Sie zusätzlich die jeweiligen Preisbereiche und den Handwerkerkosten-Rechner verwenden.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet es, ein Haus komplett zu sanieren?", answer: "Für eine Kernsanierung verwendet BauKostenRadar derzeit ein Orientierungsband von etwa 1.500 bis 3.500 €/m². Bei 120 m² entspricht das grob 180.000 bis 420.000 Euro vor individueller Anpassung." },
      { question: "Was kostet eine Haussanierung bei 120 m²?", answer: "Je nach Umfang reicht die Modellorientierung bei 120 m² von etwa 30.000 bis 78.000 Euro für eine Teilmodernisierung bis etwa 180.000 bis 420.000 Euro für eine Kernsanierung." },
      { question: "Welche Sanierungsarbeiten sind am teuersten?", answer: "Hohe Budgets entstehen häufig durch Dach, Dämmung, Fenster, Heizung, Elektro, Sanitär und mehrere gleichzeitig notwendige Innenausbauarbeiten." },
      { question: "Wie viel Reserve sollte bei einer Haussanierung eingeplant werden?", answer: "Das allgemeine BauKostenRadar-Modell enthält 10 Prozent Reserve. Bei älteren oder technisch unklaren Gebäuden kann individuell eine höhere Reserve sinnvoll sein." },
    ],
    related: [
      { label: "Sanierungskosten pro m²", href: "/ratgeber/sanierungskosten-pro-qm" },
      { label: "Sanierung Reihenfolge", href: "/ratgeber/sanierung-reihenfolge" },
      { label: "Renovierungskosten-Rechner", href: "/rechner/renovierungskosten" },
      { label: "Dachsanierung Kosten", href: "/kosten/dachsanierung" },
      { label: "Heizung Kosten", href: "/kosten/heizung" },
    ],
  },
  {
    slug: "renovierungskosten-haus",
    title: "Renovierungskosten Haus 2026",
    h1: "Renovierungskosten Haus 2026: Beispiele für 100, 120 und 150 m²",
    description: "Renovierungskosten für ein Haus 2026: Beispielbudgets für 100, 120 und 150 m², typische Arbeiten und Abgrenzung zur umfassenden Sanierung.",
    eyebrow: "Haus renovieren",
    intro: "Eine Hausrenovierung betrifft häufig Oberflächen und mehrere Innenausbaugewerke, ohne dass automatisch die komplette Gebäudetechnik erneuert wird. Für die Budgetplanung ist deshalb wichtig, Renovierung, Teilmodernisierung und umfassende Sanierung sauber voneinander zu trennen.",
    keyFact: "Normale Renovierung im Modell: 250 bis 650 €/m²",
    sections: [
      {
        heading: "Renovierungskosten nach Hausgröße",
        paragraphs: [
          "Die Beispiele zeigen eine leichte Renovierung und eine normale Renovierung mit mehreren Gewerken. Sie dienen als erste Größenordnung und enthalten noch keine separate Anpassung für Region oder Qualitätsstandard.",
        ],
        table: {
          headers: ["Wohnfläche", "Leichte Renovierung", "Normale Renovierung"],
          rows: [
            { cells: ["100 m²", "6.500 - 18.000 €", "25.000 - 65.000 €"] },
            { cells: ["120 m²", "7.800 - 21.600 €", "30.000 - 78.000 €"] },
            { cells: ["150 m²", "9.750 - 27.000 €", "37.500 - 97.500 €"] },
          ],
        },
      },
      {
        heading: "Was gehört typischerweise zu einer Hausrenovierung?",
        paragraphs: [
          "Bei einer Renovierung stehen häufig sichtbare Oberflächen und der Innenausbau im Vordergrund. Sobald große Teile der Haustechnik oder Gebäudehülle betroffen sind, sollte das Projekt eher als Sanierung kalkuliert werden.",
        ],
        bullets: [
          "Maler- und Tapezierarbeiten",
          "Bodenbeläge erneuern oder aufarbeiten",
          "Trockenbau und kleinere Grundrissanpassungen",
          "Innentüren und kleinere Schreinerarbeiten",
          "Teilweise Modernisierung von Bad oder Elektrik",
          "Ausbesserungen vor Einzug, Verkauf oder Vermietung",
        ],
      },
      {
        heading: "Wann reicht ein Renovierungsbudget nicht mehr?",
        paragraphs: [
          "Wenn Dach, Fenster, Fassade, Leitungen, Heizung oder die komplette Elektroinstallation gleichzeitig erneuert werden müssen, verschiebt sich das Vorhaben in Richtung umfangreicher Sanierung. Dann sind die höheren Sanierungsbänder die passendere Orientierung.",
          "Auch ein vollständiges Bad oder größere Eingriffe in den Bodenaufbau können das Gesamtbudget deutlich verändern, obwohl der restliche Innenausbau vergleichsweise einfach bleibt.",
        ],
      },
      {
        heading: "So vergleichen Sie Renovierungsangebote",
        paragraphs: [
          "Vergleichen Sie nicht nur Endpreise, sondern auch den enthaltenen Leistungsumfang. Abriss, Entsorgung, Untergrundvorbereitung, Materialqualität und Nebenarbeiten sollten in den Angeboten möglichst ähnlich beschrieben sein.",
          "Für einzelne Positionen bietet BauKostenRadar separate Preisverzeichnisse. Damit können Sie größere Posten gegenprüfen, bevor Sie aus mehreren Angeboten eine Entscheidung ableiten.",
        ],
      },
    ],
    faqs: [
      { question: "Was kostet es, ein 100-m²-Haus zu renovieren?", answer: "Für eine leichte Renovierung ergibt das Modell etwa 6.500 bis 18.000 Euro. Eine normale Renovierung mit mehreren Gewerken liegt grob bei 25.000 bis 65.000 Euro, vor regionaler und qualitativer Anpassung." },
      { question: "Was kostet die Renovierung eines Hauses mit 120 m²?", answer: "Im BauKostenRadar-Modell liegt eine leichte Renovierung bei etwa 7.800 bis 21.600 Euro und eine normale Renovierung bei etwa 30.000 bis 78.000 Euro." },
      { question: "Was ist der Unterschied zwischen Renovierung und Sanierung?", answer: "Renovierung betrifft häufig Oberflächen und Innenausbau. Sanierung greift stärker in technische oder bauliche Substanz ein, etwa bei Leitungen, Heizung, Dach, Fenstern oder Gebäudehülle." },
      { question: "Wie kann ich Renovierungskosten genauer bestimmen?", answer: "Nutzen Sie Wohnfläche und Renovierungsumfang als Basis und prüfen Sie anschließend die größten Einzelgewerke, Qualitätsstandard und Region separat." },
    ],
    related: [
      { label: "Haus sanieren Kosten", href: "/ratgeber/haus-sanieren-kosten" },
      { label: "Wohnung renovieren Kosten", href: "/ratgeber/wohnung-renovieren-kosten" },
      { label: "Renovierungskosten-Rechner", href: "/rechner/renovierungskosten" },
      { label: "Maler Kosten", href: "/kosten/maler" },
      { label: "Bodenleger Kosten", href: "/kosten/bodenleger" },
    ],
  },
  {
    slug: "sanierung-reihenfolge",
    title: "Sanierung Reihenfolge 2026",
    h1: "Sanierung Reihenfolge: In welcher Reihenfolge sollte man ein Haus sanieren?",
    description: "Die sinnvolle Reihenfolge einer Haussanierung: Bestandsaufnahme, Gebäudehülle, Haustechnik, Rohbau, Innenausbau und Oberflächen Schritt für Schritt erklärt.",
    eyebrow: "Sanierung planen",
    intro: "Eine gute Reihenfolge reduziert Doppelarbeit. Wer zuerst streicht und später Leitungen, Fenster oder Estrich erneuert, bezahlt Arbeit häufig zweimal. Für die meisten umfassenden Projekte gilt deshalb: erst Schäden und Gebäudehülle klären, dann Haustechnik und Rohbau, zuletzt Oberflächen und Ausstattung.",
    keyFact: "Erst Substanz und Technik, danach Innenausbau und Oberflächen",
    sections: [
      {
        heading: "Sanierung in 8 Schritten",
        paragraphs: [
          "Die genaue Reihenfolge hängt vom Gebäude ab. Als Planungslogik hilft jedoch eine Abfolge, bei der spätere Arbeiten möglichst wenig von bereits fertigen Flächen wieder zerstören.",
        ],
        table: {
          headers: ["Schritt", "Bereich", "Warum jetzt?"],
          rows: [
            { cells: ["1", "Bestandsaufnahme und Planung", "Schäden, Technik und Umfang vor Auftragsvergabe klären"] },
            { cells: ["2", "Entkernung und Rückbau", "Alte Bauteile entfernen und verdeckte Probleme sichtbar machen"] },
            { cells: ["3", "Dach, Fassade, Fenster, Feuchte", "Gebäude gegen Witterung sichern und Hülle herstellen"] },
            { cells: ["4", "Heizung, Sanitär, Elektro", "Leitungen und technische Infrastruktur vor dem Schließen der Flächen verlegen"] },
            { cells: ["5", "Rohbau und Trockenbau", "Grundriss, Wände und Installationsbereiche herstellen"] },
            { cells: ["6", "Estrich, Putz und Untergründe", "Flächen für spätere Beläge vorbereiten"] },
            { cells: ["7", "Fliesen, Boden, Maler", "Sichtbare Oberflächen nach den schmutzigen Gewerken fertigstellen"] },
            { cells: ["8", "Türen, Sanitärobjekte, Schalter", "Endmontage nach Abschluss der Oberflächen"] },
          ],
        },
      },
      {
        heading: "Warum die Gebäudehülle vor dem Innenausbau kommt",
        paragraphs: [
          "Undichte Dächer, feuchte Bauteile oder ein geplanter Fenstertausch können bereits fertige Innenflächen erneut beschädigen. Deshalb sollten Feuchteursachen und größere Arbeiten an Dach, Fassade oder Fenstern früh im Ablauf geklärt werden.",
          "Bei energetischen Maßnahmen müssen mehrere Gewerke aufeinander abgestimmt werden. Die Reihenfolge sollte deshalb immer am konkreten Gebäude und am geplanten Gesamtkonzept geprüft werden.",
        ],
      },
      {
        heading: "Haustechnik vor Putz, Fliesen und Boden",
        paragraphs: [
          "Neue Stromleitungen, Wasserleitungen oder Heizungsrohre benötigen Schlitze, Durchbrüche und Anschlüsse. Werden Oberflächen vorher fertiggestellt, entstehen unnötige Rückbau- und Wiederherstellungskosten.",
        ],
        bullets: [
          "Elektroplanung und Leitungswege vor dem Verputzen festlegen",
          "Sanitäranschlüsse vor Abdichtung und Fliesen vorbereiten",
          "Heizflächen und Rohrführung vor fertigen Bodenaufbauten koordinieren",
          "Durchbrüche und Installationsschächte vor Trockenbauabschluss herstellen",
        ],
      },
      {
        heading: "Reihenfolge und Budget gemeinsam planen",
        paragraphs: [
          "Eine sinnvolle Reihenfolge ist zugleich ein Kosteninstrument. Wenn Gewerke logisch aufeinander folgen, sinkt das Risiko für doppelte Anfahrten, zerstörte Oberflächen und ungeplante Nacharbeiten.",
          "Ordnen Sie zuerst den gesamten Sanierungsumfang ein und kalkulieren Sie anschließend die großen Einzelgewerke. Für die Budgetgröße können Sie den Renovierungskosten-Rechner und die dokumentierten Handwerkerpreise kombinieren.",
        ],
      },
    ],
    faqs: [
      { question: "Was wird bei einer Sanierung zuerst gemacht?", answer: "Am Anfang stehen Bestandsaufnahme, Planung und gegebenenfalls Rückbau. Danach sollten Schäden und Gebäudehülle geklärt werden, bevor Haustechnik, Innenausbau und Oberflächen folgen." },
      { question: "Kommt Elektrik vor oder nach dem Verputzen?", answer: "Bei einer grundlegenden Erneuerung werden Leitungswege und Unterputzinstallationen normalerweise vor dem abschließenden Verputzen hergestellt, damit fertige Flächen nicht wieder geöffnet werden müssen." },
      { question: "Wann werden Böden bei einer Sanierung gemacht?", answer: "Fertige Bodenbeläge kommen typischerweise nach den groben und feuchten Arbeiten. Leitungen, Trockenbau, Putz und erforderliche Untergrundarbeiten sollten vorher abgeschlossen sein." },
      { question: "Warum ist die Reihenfolge bei einer Sanierung wichtig?", answer: "Eine falsche Reihenfolge kann Doppelarbeit verursachen. Bereits fertige Oberflächen müssen sonst für Leitungen, Fenster, Estrich oder andere technische Arbeiten wieder geöffnet oder repariert werden." },
    ],
    related: [
      { label: "Haus sanieren Kosten", href: "/ratgeber/haus-sanieren-kosten" },
      { label: "Sanierungskosten pro m²", href: "/ratgeber/sanierungskosten-pro-qm" },
      { label: "Elektriker Kosten", href: "/kosten/elektriker" },
      { label: "Sanitär Kosten", href: "/kosten/sanitaer" },
      { label: "Trockenbau Kosten", href: "/kosten/trockenbau" },
    ],
  },
  {
    slug: "arbeitskosten-materialkosten",
    title: "Arbeitskosten vs. Materialkosten 2026",
    h1: "Arbeitskosten vs. Materialkosten: Wie setzt sich ein Renovierungsbudget zusammen?",
    description: "Arbeitskosten und Materialkosten bei Renovierung und Sanierung verstehen. Mit BauKostenRadar-Modell, Beispielbudgets und Tipps zum Angebotsvergleich.",
    eyebrow: "Kosten verstehen",
    intro: "Ein Gesamtpreis sagt noch wenig darüber aus, warum ein Projekt teuer ist. Für die Budgetplanung trennt BauKostenRadar deshalb modellhaft Arbeitskosten, Materialkosten und Reserve. Diese Aufteilung ist keine allgemeingültige Marktquote, sondern eine transparente Rechenannahme für den Renovierungskosten-Rechner.",
    keyFact: "BauKostenRadar-Modell: 46 % Arbeit, 44 % Material, 10 % Reserve",
    sections: [
      {
        heading: "So teilt das BauKostenRadar-Modell das Budget auf",
        paragraphs: [
          "Die Aufteilung hilft dabei, eine Gesamtschätzung verständlicher zu machen. Je nach Gewerk kann die reale Verteilung deutlich abweichen: Malerarbeiten sind arbeitsintensiver, während Fenster, Wärmepumpen oder hochwertige Bodenbeläge einen größeren Materialanteil haben können.",
        ],
        table: {
          headers: ["Budgetbestandteil", "Modellanteil", "Bei 50.000 €", "Bei 100.000 €"],
          rows: [
            { cells: ["Arbeitskosten", "46 %", "23.000 €", "46.000 €"] },
            { cells: ["Materialkosten", "44 %", "22.000 €", "44.000 €"] },
            { cells: ["Reserve", "10 %", "5.000 €", "10.000 €"] },
          ],
        },
      },
      {
        heading: "Welche Gewerke haben oft einen hohen Arbeitsanteil?",
        paragraphs: [
          "Zeitintensive Vorbereitung und viele einzelne Arbeitsschritte können den Lohnanteil erhöhen. Der Stundenpreis allein reicht jedoch nicht zur Beurteilung, weil auch Produktivität, Teamgröße und notwendige Vorarbeiten eine Rolle spielen.",
        ],
        bullets: [
          "Maler- und Spachtelarbeiten",
          "Fliesenarbeiten mit aufwendigem Zuschnitt oder Untergrund",
          "Trockenbau und komplexe Detailanschlüsse",
          "Fehlersuche und Reparaturen bei Elektro oder Sanitär",
          "Rückbau, Vorbereitung und kleinteilige Bestandsarbeiten",
        ],
      },
      {
        heading: "Wann dominiert das Material?",
        paragraphs: [
          "Bei technisch oder materiell hochwertigen Komponenten kann der Produktpreis einen großen Teil des Gesamtbudgets ausmachen. Beispiele sind Fenster, Heiztechnik, Photovoltaik, Speicher, hochwertige Fliesen oder Parkett.",
          "Deshalb sollte ein günstiger Arbeitslohn nicht automatisch mit einem günstigen Gesamtangebot gleichgesetzt werden. Materialqualität und enthaltene Produkte müssen beim Vergleich mit betrachtet werden.",
        ],
      },
      {
        heading: "Angebote nach Arbeit und Material vergleichen",
        paragraphs: [
          "Prüfen Sie, ob Angebote dieselbe Leistungstiefe enthalten. Ein Angebot kann günstiger wirken, weil Material, Entsorgung, Anfahrt oder Vorarbeiten fehlen. Eine getrennte Darstellung wichtiger Kostenblöcke erleichtert den Vergleich.",
          "Für einzelne Gewerke finden Sie bei BauKostenRadar konkrete Stunden-, Quadratmeter-, Stück- und Projektpreise. Damit lässt sich besser beurteilen, welcher Teil eines Gesamtangebots plausibel erscheint.",
        ],
      },
    ],
    faqs: [
      { question: "Wie hoch ist der Arbeitskostenanteil bei einer Renovierung?", answer: "Es gibt keine feste Quote für alle Projekte. BauKostenRadar verwendet im eigenen Renovierungsmodell 46 Prozent Arbeitskosten, 44 Prozent Material und 10 Prozent Reserve. Reale Projekte können je nach Gewerk deutlich abweichen." },
      { question: "Sind Materialkosten oder Arbeitskosten höher?", answer: "Das hängt stark von der Maßnahme ab. Arbeitsintensive Gewerke können einen höheren Lohnanteil haben, während technische Anlagen oder hochwertige Bauteile einen großen Materialanteil verursachen." },
      { question: "Warum braucht ein Renovierungsbudget eine Reserve?", answer: "Im Bestand können zusätzliche Arbeiten erst nach Rückbau sichtbar werden. Das BauKostenRadar-Modell reserviert deshalb 10 Prozent des Budgets als Planungsreserve." },
      { question: "Wie vergleiche ich zwei Handwerkerangebote richtig?", answer: "Vergleichen Sie Leistungsumfang, Materialqualität, Arbeitsmenge, Vorarbeiten, Entsorgung, Anfahrt und Nebenpositionen. Nur der Endpreis oder der Stundenlohn ist dafür meist nicht ausreichend." },
    ],
    related: [
      { label: "Handwerker-Stundensätze", href: "/ratgeber/handwerker-stundensaetze" },
      { label: "Renovierungskosten-Rechner", href: "/rechner/renovierungskosten" },
      { label: "Handwerkerkosten-Rechner", href: "/rechner/handwerkerkosten" },
      { label: "Alle Handwerkerpreise", href: "/kosten" },
      { label: "Methodik", href: "/methodik" },
    ],
  },
];
