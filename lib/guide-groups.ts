export type GuideGroup = {
  eyebrow: string;
  title: string;
  description: string;
  slugs: readonly string[];
};

export const guideGroups: readonly GuideGroup[] = [
  {
    eyebrow: "Sanierungskosten",
    title: "Haus und Bestand sanieren",
    description: "Richtwerte pro Quadratmeter, Kernsanierung, Altbau und Einfamilienhaus als Gesamtprojekt einordnen.",
    slugs: ["sanierungskosten-pro-qm", "haus-sanieren-kosten", "kernsanierung-kosten", "sanierungskosten-einfamilienhaus", "altbausanierung-kosten"],
  },
  {
    eyebrow: "Konkrete Gewerke",
    title: "Badsanierung realistisch kalkulieren",
    description: "Komplette Badsanierung mit konkreten 2026-Richtwerten und nachvollziehbaren Kostenblöcken einordnen.",
    slugs: ["bad-komplett-sanieren-kosten"],
  },
  {
    eyebrow: "Sanitär & Badausstattung",
    title: "Sanitärkosten, Badausstattung und Rückbau kalkulieren",
    description: "Sanitärkosten als eigenes Gewerk einordnen, Sanitärobjekte und Armaturen für ein typisches Bad kalkulieren und Demontage samt Entsorgung des Altbads separat vergleichen.",
    slugs: ["sanitaer-kosten", "sanitaerobjekte-bad-kosten", "bad-entkernen-kosten"],
  },
  {
    eyebrow: "Konkrete Projektgrößen",
    title: "Kosten für eine typische Badgröße",
    description: "Konkretes Rechenbeispiel für die Sanierung eines 10-m²-Bads mit aktuellen Richtwerten.",
    slugs: ["bad-10-qm-sanieren-kosten"],
  },
  {
    eyebrow: "Dach & Dachsanierung",
    title: "Dachsanierung, Dämmung und Dachdetails kalkulieren",
    description: "Gesamtsanierung, 150-m²-Beispiel, Neueindeckung, Aufsparrendämmung, Dachfenster, Gerüst und Dachrinne direkt vergleichen.",
    slugs: [
      "dach-sanieren-kosten-pro-qm",
      "dach-150-qm-kosten",
      "dach-neu-eindecken-kosten-pro-qm",
      "dachsanierung-aufsparrendaemmung-kosten-pro-qm",
      "dachfenster-nachtraeglich-einbauen-kosten",
      "dachfenster-austauschen-kosten",
      "geruest-kosten-pro-qm",
      "dachrinne-erneuern-kosten",
    ],
  },
  {
    eyebrow: "Fenster & Verglasung",
    title: "Fenster austauschen, Verglasung und Einbau kalkulieren",
    description: "Gesamtprojekt, 20-Fenster-Beispiel, 2-fach- und 3-fach-Verglasung sowie Montagekosten pro Fenster direkt vergleichen.",
    slugs: ["fenster-austauschen-kosten-haus", "20-fenster-austauschen-kosten", "fenster-2-fach-verglasung-kosten", "fenster-3-fach-verglasung-kosten", "fenstereinbau-kosten"],
  },
  {
    eyebrow: "Elektrik & Elektroinstallation",
    title: "Elektrik erneuern, Verteiler, Steckdosen und Schalter kalkulieren",
    description: "Altbau und 100-m²-Projekt, komplette Neuinstallation, Sicherungskasten, Steckdosen und Lichtschalter als zusammenhängendes Elektro-Budget vergleichen.",
    slugs: ["elektrik-erneuern-altbau", "elektrik-erneuern-100-qm-kosten", "elektro-neuinstallation-kosten", "sicherungskasten-erneuern-kosten", "steckdose-installieren-kosten", "lichtschalter-austauschen-kosten"],
  },
  {
    eyebrow: "Heizung & Wärme",
    title: "Heizung erneuern, Fußbodenheizung und Wartung kalkulieren",
    description: "Gesamterneuerung, Gasheizung, 100-m²-Fußbodenheizung, Heizkörper, Thermostate und Wartung als zusammenhängendes Heizungsbudget vergleichen.",
    slugs: ["heizung-erneuern-kosten", "fussbodenheizung-100-qm-kosten", "gasheizung-austauschen-kosten", "heizkoerper-montieren-kosten", "thermostat-installieren-kosten", "heizungswartung-kosten"],
  },
  {
    eyebrow: "Wärmepumpe & Wartung",
    title: "Wärmepumpenkosten, Luft-Wasser-System und Wartung kalkulieren",
    description: "Gesamtkosten einer Wärmepumpe, Luft-Wasser-Komplettsysteme und laufende Wartung mit aktuellen Richtwerten, regionalen Modellwerten und exakten Rechner-Presets vergleichen.",
    slugs: ["waermepumpe-kosten-2026", "luft-wasser-waermepumpe-kosten", "waermepumpe-wartung-kosten"],
  },
  {
    eyebrow: "Photovoltaik & Stromspeicher",
    title: "PV-Anlagen nach Leistung und Speicher kalkulieren",
    description: "Photovoltaik-Gesamtkosten sowie 5-, 10- und 15-kWp-Anlagen, PV mit Speicher und Stromspeicherpreise pro kWh anhand aktueller Richtwerte und exakter Rechner-Presets vergleichen.",
    slugs: ["photovoltaik-kosten-2026", "photovoltaik-5-kwp-kosten", "photovoltaik-10-kwp-kosten", "photovoltaik-15-kwp-kosten", "photovoltaik-mit-speicher-kosten", "stromspeicher-kosten-pro-kwh"],
  },
  {
    eyebrow: "Dämmung & Gebäudehülle",
    title: "Dämmkosten, Fassade und Dachaufbau kalkulieren",
    description: "Dämmkosten pro Quadratmeter sowie WDVS, Innendämmung, Zwischen- und Aufsparrendämmung mit aktuellen Richtwerten, regionalen Modellwerten und exakten Rechner-Presets vergleichen.",
    slugs: ["daemmung-kosten-pro-qm", "fassadendaemmung-kosten-pro-qm", "innendaemmung-kosten-pro-qm", "zwischensparrendaemmung-kosten-pro-qm", "aufsparrendaemmung-kosten-pro-qm"],
  },
  {
    eyebrow: "Keller & Feuchteschutz",
    title: "Kellerabdichtung außen und innen kalkulieren",
    description: "Außenabdichtung inklusive Aushub und Innenabdichtung pro Quadratmeter direkt vergleichen, Kostenunterschiede verstehen und mit exakten Rechner-Presets weiterrechnen.",
    slugs: ["kellerabdichtung-aussen-oder-innen-kosten", "kellerabdichtung-aussen-kosten-pro-qm", "kellerabdichtung-innen-kosten-pro-qm"],
  },
  {
    eyebrow: "Fassade & Außenhaut",
    title: "Fassadensanierung, Putz, Risse und Verkleidung kalkulieren",
    description: "Fassadensanierung, neue Putzfassade, Risssanierung, hinterlüftete Fassade, Fassadenanstrich und Klinker mit aktuellen Richtwerten und exakten Rechner-Presets vergleichen.",
    slugs: ["fassade-sanieren-kosten", "putzfassade-kosten-pro-qm", "fassadenrisse-sanieren-kosten-pro-qm", "vorgehaengte-hinterlueftete-fassade-kosten-pro-qm", "fassade-streichen-kosten-pro-qm", "klinkerfassade-kosten-pro-qm"],
  },
  {
    eyebrow: "Garten & Außenanlagen",
    title: "Einfahrt, Terrasse, Zaun und Gartenarbeiten kalkulieren",
    description: "Außenanlagen als zusammenhängendes Budget planen: Einfahrt und Terrasse pflastern, Doppelstabmattenzaun, Rollrasen, Heckenschnitt und Baumfällung mit exakten Rechner-Presets vergleichen.",
    slugs: ["garten-anlegen-kosten", "einfahrt-pflastern-kosten", "terrasse-pflastern-kosten", "doppelstabmattenzaun-kosten-pro-meter", "rollrasen-kosten-pro-qm", "heckenschnitt-kosten-pro-meter", "baum-faellen-kosten"],
  },
  {
    eyebrow: "Maler & Oberflächen",
    title: "Malerarbeiten, Streichen und Tapezieren kalkulieren",
    description: "Malerpreise pro Quadratmeter, Wände streichen, Tapezieren und Q3-Glätten mit aktuellen Richtwerten und direktem Weg zum Kostenrechner vergleichen.",
    slugs: ["maler-kosten-pro-qm", "waende-streichen-kosten-pro-qm", "tapezieren-kosten-pro-qm", "innenputz-q3-kosten-pro-qm"],
  },
  {
    eyebrow: "Fliesen & Naturstein",
    title: "Fliesenleger, Großformat, Mosaik und Naturstein kalkulieren",
    description: "Standardfliesen, Großformat, Mosaik und Naturstein mit aktuellen Arbeitskosten pro Quadratmeter, passenden Preispositionen und exakten Rechner-Presets vergleichen.",
    slugs: ["fliesenleger-kosten-pro-qm", "fliesen-verlegen-kosten-pro-qm", "grossformat-fliesen-verlegen-kosten", "mosaik-fliesen-verlegen-kosten-pro-qm", "naturstein-verlegen-kosten-pro-qm"],
  },
  {
    eyebrow: "Bodenbeläge & Aufarbeitung",
    title: "Vinyl, Parkett, Laminat und Bodensanierung kalkulieren",
    description: "Bodenlegerkosten, Vinyl, Parkett und Laminat sowie komplette Bodensanierung und Parkett-Aufarbeitung mit aktuellen Preisen pro Quadratmeter und exakten Rechner-Presets vergleichen.",
    slugs: ["bodenleger-kosten-pro-qm", "vinylboden-verlegen-kosten-pro-qm", "parkett-verlegen-kosten-pro-qm", "laminat-verlegen-kosten-pro-qm", "boden-sanieren-kosten-pro-qm", "parkett-abschleifen-kosten"],
  },
  {
    eyebrow: "Trockenbau & Oberflächen",
    title: "Trockenbauwand und Q4-Verspachtelung kalkulieren",
    description: "Trockenbaukosten pro Quadratmeter, beidseitig beplankte Wände und hochwertige Q4-Verspachtelung mit aktuellen Richtwerten und exakten Rechner-Presets vergleichen.",
    slugs: ["trockenbau-kosten-pro-qm", "trockenbauwand-kosten-pro-qm", "verspachtelung-q4-kosten-pro-qm"],
  },
  {
    eyebrow: "Innenausbau & Modernisierung",
    title: "Türen konkret kalkulieren",
    description: "Innentüren und Haustüren mit aktuellen Stück- und Montagepreisen, konkreten Szenarien und direktem Weg zum Kostenrechner vergleichen.",
    slugs: ["6-innentueren-austauschen-kosten", "innentuer-einbauen-kosten", "haustuer-einbauen-kosten", "haustuer-kunststoff-kosten", "haustuer-rc2-kosten"],
  },
  {
    eyebrow: "Küche & Einbauküche",
    title: "Küchenrenovierung und neue Küche kalkulieren",
    description: "Renovierung pro Quadratmeter, Fronten, Arbeitsplatte, Fliesenspiegel, Elektrogeräte, komplette Einbauküche und Premium-Umbau direkt vergleichen.",
    slugs: [
      "kueche-10-qm-renovieren-kosten",
      "kuechenfronten-erneuern-kosten",
      "kuechenarbeitsplatte-kosten",
      "fliesenspiegel-erneuern-kosten",
      "kueche-elektrogeraete-kosten",
      "einbaukueche-kosten",
      "premium-kueche-umbau-kosten",
    ],
  },
  {
    eyebrow: "Treppen & Stufen",
    title: "Treppen renovieren und Stufen aufarbeiten",
    description: "Holzstufen-System, Schleifen und Versiegeln, Stufenüberbau, Betontreppe, Naturstein sowie ein konkretes 14-Stufen-Beispiel direkt vergleichen.",
    slugs: ["14-treppenstufen-renovieren-kosten", "treppenrenovierung-holzstufen-system-kosten", "holztreppe-schleifen-kosten", "treppen-stufenueberbau-gelaender-kosten", "betontreppe-neuer-belag-kosten", "natursteintreppe-schleifen-kosten"],
  },
  {
    eyebrow: "Mauerwerk & Rohbau",
    title: "Mauerwerk, Klinker und Bodenplatte kalkulieren",
    description: "Maurerarbeiten nach Material und Bauteil vergleichen: Innenwand, Kalksandstein, Poroton, Porenbeton, Klinker-Verblendmauerwerk und Bodenplatte.",
    slugs: ["innenwand-mauern-kosten", "kalksandstein-mauerwerk-kosten-pro-qm", "poroton-mauerwerk-kosten-pro-qm", "porenbeton-mauerwerk-kosten-pro-qm", "klinkerfassade-kosten-pro-qm", "bodenplatte-kosten-pro-qm"],
  },
  {
    eyebrow: "Estrich & Bodenaufbau",
    title: "Estricharten, Ausgleich und Reparatur vergleichen",
    description: "Aktuelle 2026-Richtwerte für Zementestrich, Fließestrich, Trockenestrich und Schnellestrich sowie Bodenausgleich und Rissreparatur.",
    slugs: ["estrich-100-qm-kosten", "zementestrich-kosten-pro-qm", "fliessestrich-kosten-pro-qm", "trockenestrich-kosten-pro-qm", "schnellestrich-kosten-pro-qm", "bodenausgleich-kosten-pro-qm", "estrich-rissreparatur-kosten"],
  },
  {
    eyebrow: "Abriss & Entsorgung",
    title: "Rückbau, Hausabriss und Entsorgung kalkulieren",
    description: "Kosten für kompletten Hausabriss, Abbruch pro Kubikmeter, Innenabbruch, Industriehallen-Abbruch und Bauschuttcontainer mit sauberer Abgrenzung der Leistungen.",
    slugs: ["haus-abreissen-kosten", "abbruch-kosten-pro-m3", "innenabbruch-einfamilienhaus-kosten", "industriehalle-abbrechen-kosten-pro-qm", "bauschuttcontainer-30-m3-kosten"],
  },
  {
    eyebrow: "Renovierung nach Wohnfläche",
    title: "Budgets für konkrete Wohnflächen",
    description: "Beispielrechnungen für Wohnungen und Häuser mit 100, 150 oder 200 m² sowie allgemeine Hausbudgets.",
    slugs: ["wohnung-renovieren-kosten", "renovierungskosten-haus", "renovierungskosten-100-qm", "haus-renovieren-150-qm-kosten", "haus-renovieren-200-qm-kosten"],
  },
  {
    eyebrow: "Planung & Kostenstruktur",
    title: "Sanierung richtig planen und Preise verstehen",
    description: "Reihenfolge, Arbeits- und Materialkosten sowie Handwerker-Stundensätze verständlich erklärt.",
    slugs: ["sanierung-reihenfolge", "arbeitskosten-materialkosten", "handwerker-stundensaetze"],
  },
];
