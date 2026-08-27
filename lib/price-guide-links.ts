export type PriceGuideLink = {
  href: string;
  title: string;
  cta: string;
};

const HANDWERKER_RATES: PriceGuideLink = {
  href: "/ratgeber/handwerker-stundensaetze",
  title: "Handwerker-Stundensätze 2026 richtig einordnen",
  cta: "Stundensatz-Ratgeber öffnen",
};

const serviceGuideLinks: Record<string, PriceGuideLink> = {
  badsanierung: {
    href: "/ratgeber/bad-komplett-sanieren-kosten",
    title: "Bad komplett sanieren: Kosten und Preisblöcke",
    cta: "Badsanierungs-Ratgeber öffnen",
  },
  maler: {
    href: "/ratgeber/maler-kosten-pro-qm",
    title: "Malerarbeiten: Kosten pro m² richtig planen",
    cta: "Maler-Ratgeber öffnen",
  },
  fliesenleger: {
    href: "/ratgeber/fliesenleger-kosten-pro-qm",
    title: "Fliesenleger: Kosten pro m² und Formate vergleichen",
    cta: "Fliesenleger-Ratgeber öffnen",
  },
  elektriker: {
    href: "/ratgeber/elektrik-erneuern-altbau",
    title: "Elektrik im Altbau erneuern: Kosten und Preisblöcke",
    cta: "Elektrik-Ratgeber öffnen",
  },
  dachsanierung: {
    href: "/ratgeber/dach-sanieren-kosten-pro-qm",
    title: "Dach sanieren: Kosten pro m² und Beispiele",
    cta: "Dachsanierungs-Ratgeber öffnen",
  },
  bodenleger: {
    href: "/ratgeber/bodenleger-kosten-pro-qm",
    title: "Boden verlegen: Kosten pro m² und Beläge vergleichen",
    cta: "Bodenleger-Ratgeber öffnen",
  },
  trockenbau: {
    href: "/ratgeber/trockenbau-kosten-pro-qm",
    title: "Trockenbau: Kosten pro m² und Wandaufbauten",
    cta: "Trockenbau-Ratgeber öffnen",
  },
  sanitaer: {
    href: "/ratgeber/sanitaer-kosten",
    title: "Sanitär: Kosten für Installateur und Bad",
    cta: "Sanitär-Ratgeber öffnen",
  },
  waermepumpe: {
    href: "/ratgeber/waermepumpe-kosten-2026",
    title: "Wärmepumpe: Anlage, Installation und Wartung",
    cta: "Wärmepumpen-Ratgeber öffnen",
  },
  photovoltaik: {
    href: "/ratgeber/photovoltaik-kosten-2026",
    title: "Photovoltaik: Kosten nach kWp und Speicher",
    cta: "Photovoltaik-Ratgeber öffnen",
  },
  daemmung: {
    href: "/ratgeber/daemmung-kosten-pro-qm",
    title: "Dämmung: Kosten pro m² nach Verfahren",
    cta: "Dämmungs-Ratgeber öffnen",
  },
  fenster: {
    href: "/ratgeber/fenster-austauschen-kosten-haus",
    title: "Fenster austauschen: Kosten mit Einbau",
    cta: "Fenster-Ratgeber öffnen",
  },
  heizung: {
    href: "/ratgeber/heizung-erneuern-kosten",
    title: "Heizung erneuern: Kosten und Preisblöcke",
    cta: "Heizungs-Ratgeber öffnen",
  },
  fassade: {
    href: "/ratgeber/fassade-sanieren-kosten",
    title: "Fassade sanieren: Putz, Risse, Anstrich und Verkleidung",
    cta: "Fassaden-Ratgeber öffnen",
  },
  garten: {
    href: "/ratgeber/garten-anlegen-kosten",
    title: "Garten und Außenanlagen: Kosten richtig planen",
    cta: "Garten-Ratgeber öffnen",
  },
  tueren: {
    href: "/ratgeber/6-innentueren-austauschen-kosten",
    title: "6 Innentüren austauschen: Kostenbeispiel 2026",
    cta: "Türen-Ratgeber öffnen",
  },
  estrich: {
    href: "/ratgeber/estrich-100-qm-kosten",
    title: "Estrich 100 m²: Kosten und Beispielbudget",
    cta: "Estrich-Ratgeber öffnen",
  },
  maurer: {
    href: "/ratgeber/innenwand-mauern-kosten",
    title: "Innenwand mauern: Kosten und Beispielrechnung",
    cta: "Maurer-Ratgeber öffnen",
  },
  treppen: {
    href: "/ratgeber/14-treppenstufen-renovieren-kosten",
    title: "14 Treppenstufen renovieren: Kostenbeispiel 2026",
    cta: "Treppen-Ratgeber öffnen",
  },
  kueche: {
    href: "/ratgeber/kueche-10-qm-renovieren-kosten",
    title: "Küche 10 m² renovieren: Kostenbeispiel 2026",
    cta: "Küchen-Ratgeber öffnen",
  },
};

const itemGuideOverrides: Record<string, PriceGuideLink> = {
  "badsanierung:bad-neubau-sanierung": {
    href: "/ratgeber/bad-10-qm-sanieren-kosten",
    title: "Bad 10 m² sanieren: konkretes Kostenbeispiel",
    cta: "10-m²-Bad-Ratgeber öffnen",
  },
  "heizung:fussbodenheizung-nachruesten": {
    href: "/ratgeber/fussbodenheizung-100-qm-kosten",
    title: "Fußbodenheizung 100 m²: Kostenbeispiel 2026",
    cta: "Fußbodenheizungs-Ratgeber öffnen",
  },
  "heizung:heizkoerper-montieren": {
    href: "/ratgeber/heizkoerper-montieren-kosten",
    title: "Heizkörper montieren: Kosten pro Stück und Zusatzarbeiten",
    cta: "Heizkörper-Ratgeber öffnen",
  },
  "maler:fassade-streichen-inkl-vorarbeiten": {
    href: "/ratgeber/fassade-sanieren-kosten",
    title: "Fassade sanieren: Anstrich und Vorarbeiten einordnen",
    cta: "Fassaden-Ratgeber öffnen",
  },
  "trockenbau:trockenbauwand-beidseitig-beplankt": {
    href: "/ratgeber/trockenbauwand-kosten-pro-qm",
    title: "Trockenbauwand: Kosten pro m² und Wandaufbau",
    cta: "Trockenbauwand-Ratgeber öffnen",
  },
  "bodenleger:parkett-verlegen-inkl-material": {
    href: "/ratgeber/parkett-verlegen-kosten-pro-qm",
    title: "Parkett verlegen: Kosten pro m² inklusive Material",
    cta: "Parkett-verlegen-Ratgeber öffnen",
  },
  "bodenleger:laminat-verlegen": {
    href: "/ratgeber/laminat-verlegen-kosten-pro-qm",
    title: "Laminat verlegen: Kosten pro m² und Nebenarbeiten",
    cta: "Laminat-Ratgeber öffnen",
  },
  "daemmung:innendaemmung": {
    href: "/ratgeber/innendaemmung-kosten-pro-qm",
    title: "Innendämmung: Kosten pro m² und Planungsfaktoren",
    cta: "Innendämmungs-Ratgeber öffnen",
  },
  "garten:einfahrt-pflastern": {
    href: "/ratgeber/einfahrt-pflastern-kosten",
    title: "Einfahrt pflastern: Kosten pro m² mit Unterbau",
    cta: "Einfahrt-Ratgeber öffnen",
  },
  "garten:terrasse-pflastern-inkl-unterbau": {
    href: "/ratgeber/terrasse-pflastern-kosten",
    title: "Terrasse pflastern: Kosten pro m² inklusive Unterbau",
    cta: "Terrassen-Ratgeber öffnen",
  },
  "garten:baumfaellung-mittelgross-inkl-entsorgung": {
    href: "/ratgeber/baum-faellen-kosten",
    title: "Baum fällen: Kosten inklusive Entsorgung",
    cta: "Baumfällungs-Ratgeber öffnen",
  },
  "garten:rollrasen-inkl-vorbereitung": {
    href: "/ratgeber/rollrasen-kosten-pro-qm",
    title: "Rollrasen: Kosten pro m² inklusive Vorbereitung",
    cta: "Rollrasen-Ratgeber öffnen",
  },
  "bodenleger:parkett-abschleifen-und-oelen": {
    href: "/ratgeber/parkett-abschleifen-kosten",
    title: "Parkett abschleifen: Kosten pro m² für Schleifen und Ölen",
    cta: "Parkett-Ratgeber öffnen",
  },
  "elektriker:sicherungskasten-erneuern": {
    href: "/ratgeber/sicherungskasten-erneuern-kosten",
    title: "Sicherungskasten erneuern: Kosten und Zusatzarbeiten",
    cta: "Sicherungskasten-Ratgeber öffnen",
  },
  "dachsanierung:dachrinne-erneuern-zink": {
    href: "/ratgeber/dachrinne-erneuern-kosten",
    title: "Dachrinne erneuern: Kosten pro laufendem Meter",
    cta: "Dachrinnen-Ratgeber öffnen",
  },
  "tueren:haustuer-kunststoff-inkl-montage": {
    href: "/ratgeber/haustuer-einbauen-kosten",
    title: "Haustür einbauen: Kunststoff, Holz-Alu und Montage",
    cta: "Haustür-Ratgeber öffnen",
  },
  "tueren:haustuer-holz-alu-rc2-inkl-montage": {
    href: "/ratgeber/haustuer-einbauen-kosten",
    title: "Haustür einbauen: Kunststoff, Holz-Alu und Montage",
    cta: "Haustür-Ratgeber öffnen",
  },
  "daemmung:fassadendaemmung-wdvs": {
    href: "/ratgeber/fassadendaemmung-kosten-pro-qm",
    title: "Fassadendämmung: WDVS-Kosten pro m²",
    cta: "Fassadendämmungs-Ratgeber öffnen",
  },
  "waermepumpe:wartung-waermepumpe": {
    href: "/ratgeber/waermepumpe-wartung-kosten",
    title: "Wärmepumpe warten: jährliche Kosten und Leistungsumfang",
    cta: "Wartungs-Ratgeber öffnen",
  },
  "photovoltaik:stromspeicher-lfp": {
    href: "/ratgeber/stromspeicher-kosten-pro-kwh",
    title: "Stromspeicher: Kosten pro kWh Speicherkapazität",
    cta: "Stromspeicher-Ratgeber öffnen",
  },
  "fenster:fenstereinbau": {
    href: "/ratgeber/fenstereinbau-kosten",
    title: "Fenstereinbau: Montagekosten pro Fenster",
    cta: "Fenstereinbau-Ratgeber öffnen",
  },
  "maurer:bodenplatte-standard": {
    href: "/ratgeber/bodenplatte-kosten-pro-qm",
    title: "Bodenplatte: Kosten pro m² und Leistungsumfang",
    cta: "Bodenplatten-Ratgeber öffnen",
  },
  "maurer:klinker-verblendmauerwerk": {
    href: "/ratgeber/haus-sanieren-kosten",
    title: "Haus sanieren: Klinker und Fassade im Gesamtbudget",
    cta: "Haus-Sanierungs-Ratgeber öffnen",
  },
  "kueche:kuechenfronten-austauschen-oder-lackieren": {
    href: "/ratgeber/kuechenfronten-erneuern-kosten",
    title: "Küchenfronten erneuern: Austausch oder Lackierung",
    cta: "Küchenfronten-Ratgeber öffnen",
  },
  "kueche:neue-arbeitsplatte": {
    href: "/ratgeber/kuechenarbeitsplatte-kosten",
    title: "Küchenarbeitsplatte: Kosten nach Material und Aufwand",
    cta: "Arbeitsplatten-Ratgeber öffnen",
  },
  "maler:waende-streichen": {
    href: "/ratgeber/waende-streichen-kosten-pro-qm",
    title: "Wände streichen: Kosten pro m² Wandfläche",
    cta: "Streichen-Ratgeber öffnen",
  },
  "maler:tapezieren-inkl-tapete": {
    href: "/ratgeber/tapezieren-kosten-pro-qm",
    title: "Tapezieren: Kosten pro m² inklusive Tapete",
    cta: "Tapezieren-Ratgeber öffnen",
  },
  "maler:innenputz-glaetten-q3": {
    href: "/ratgeber/innenputz-q3-kosten-pro-qm",
    title: "Innenputz und Glätten Q3: Kosten pro m²",
    cta: "Q3-Ratgeber öffnen",
  },
  "fliesenleger:standard-fliesen-verlegen": {
    href: "/ratgeber/fliesen-verlegen-kosten-pro-qm",
    title: "Standard-Fliesen verlegen: Arbeitskosten pro m²",
    cta: "Fliesen-Ratgeber öffnen",
  },
  "fliesenleger:grossformat-ab-80-x-80-cm": {
    href: "/ratgeber/grossformat-fliesen-verlegen-kosten",
    title: "Großformat-Fliesen verlegen: Kosten pro m²",
    cta: "Großformat-Ratgeber öffnen",
  },
  "elektriker:steckdose-installieren": {
    href: "/ratgeber/steckdose-installieren-kosten",
    title: "Steckdose installieren: Kosten pro Stück",
    cta: "Steckdosen-Ratgeber öffnen",
  },
  "dachsanierung:neueindeckung-inkl-lattung": {
    href: "/ratgeber/dach-neu-eindecken-kosten-pro-qm",
    title: "Dach neu eindecken: Kosten pro m² inklusive Lattung",
    cta: "Neueindeckungs-Ratgeber öffnen",
  },
  "bodenleger:vinylboden-klick-inkl-material": {
    href: "/ratgeber/vinylboden-verlegen-kosten-pro-qm",
    title: "Vinylboden verlegen: Klickvinyl inklusive Material",
    cta: "Vinylboden-Ratgeber öffnen",
  },
  "trockenbau:verspachtelung-q4": {
    href: "/ratgeber/verspachtelung-q4-kosten-pro-qm",
    title: "Verspachtelung Q4: Kosten pro m²",
    cta: "Q4-Ratgeber öffnen",
  },
  "waermepumpe:luft-wasser-waermepumpe-komplett": {
    href: "/ratgeber/luft-wasser-waermepumpe-kosten",
    title: "Luft-Wasser-Wärmepumpe: Komplettkosten vor Förderung",
    cta: "Luft-Wasser-Ratgeber öffnen",
  },
  "photovoltaik:pv-anlage-10-kwp-inkl-installation": {
    href: "/ratgeber/photovoltaik-10-kwp-kosten",
    title: "Photovoltaik 10 kWp: Kosten inklusive Installation",
    cta: "10-kWp-Ratgeber öffnen",
  },
  "photovoltaik:10-kwp-pv-ca-10-kwh-speicher": {
    href: "/ratgeber/photovoltaik-mit-speicher-kosten",
    title: "Photovoltaik mit Speicher: 10 kWp plus etwa 10 kWh",
    cta: "PV-Speicher-Ratgeber öffnen",
  },
  "fenster:fenster-mit-3-fach-verglasung": {
    href: "/ratgeber/fenster-3-fach-verglasung-kosten",
    title: "Fenster mit 3-fach Verglasung: Kosten pro Fenster",
    cta: "3-fach-Fenster-Ratgeber öffnen",
  },
  "heizung:gasheizung-austauschen": {
    href: "/ratgeber/gasheizung-austauschen-kosten",
    title: "Gasheizung austauschen: Kosten und Leistungsumfang",
    cta: "Gasheizungs-Ratgeber öffnen",
  },
  "heizung:heizungswartung": {
    href: "/ratgeber/heizungswartung-kosten",
    title: "Heizungswartung: Kosten pro Wartung",
    cta: "Heizungswartungs-Ratgeber öffnen",
  },
  "garten:doppelstabmattenzaun-inkl-montage": {
    href: "/ratgeber/doppelstabmattenzaun-kosten-pro-meter",
    title: "Doppelstabmattenzaun: Kosten pro Meter inklusive Montage",
    cta: "Zaun-Ratgeber öffnen",
  },
  "estrich:trockenestrich": {
    href: "/ratgeber/trockenestrich-kosten-pro-qm",
    title: "Trockenestrich: Kosten pro m²",
    cta: "Trockenestrich-Ratgeber öffnen",
  },
  "daemmung:dachdaemmung-zwischensparren": {
    href: "/ratgeber/zwischensparrendaemmung-kosten-pro-qm",
    title: "Zwischensparrendämmung: Kosten pro m²",
    cta: "Zwischensparren-Ratgeber öffnen",
  },
  "daemmung:dachdaemmung-aufsparren": {
    href: "/ratgeber/aufsparrendaemmung-kosten-pro-qm",
    title: "Aufsparrendämmung: Kosten pro m²",
    cta: "Aufsparren-Ratgeber öffnen",
  },
  "fassade:putz-fassade-neu": {
    href: "/ratgeber/putzfassade-kosten-pro-qm",
    title: "Putzfassade: Kosten pro m² inklusive Material",
    cta: "Putzfassaden-Ratgeber öffnen",
  },
  "fliesenleger:mosaik-fliesen-verlegen": {
    href: "/ratgeber/mosaik-fliesen-verlegen-kosten-pro-qm",
    title: "Mosaikfliesen verlegen: Kosten pro m²",
    cta: "Mosaik-Ratgeber öffnen",
  },
  "fliesenleger:naturstein-verlegen": {
    href: "/ratgeber/naturstein-verlegen-kosten-pro-qm",
    title: "Naturstein verlegen: Kosten pro m²",
    cta: "Naturstein-Ratgeber öffnen",
  },
  "elektriker:lichtschalter-austauschen": {
    href: "/ratgeber/lichtschalter-austauschen-kosten",
    title: "Lichtschalter austauschen: Kosten pro Stück",
    cta: "Lichtschalter-Ratgeber öffnen",
  },
  "dachsanierung:geruest-ca-4-wochen": {
    href: "/ratgeber/geruest-kosten-pro-qm",
    title: "Gerüst: Kosten pro m² für etwa vier Wochen",
    cta: "Gerüst-Ratgeber öffnen",
  },
  "bodenleger:boden-sanierung-alt-raus-neu-rein": {
    href: "/ratgeber/boden-sanieren-kosten-pro-qm",
    title: "Bodensanierung: alt raus, neu rein",
    cta: "Bodensanierungs-Ratgeber öffnen",
  },
  "sanitaer:demontage-entsorgung-altbad": {
    href: "/ratgeber/bad-entkernen-kosten",
    title: "Bad entkernen: Demontage und Entsorgung",
    cta: "Bad-Rückbau-Ratgeber öffnen",
  },
  "photovoltaik:pv-anlage-15-kwp-inkl-installation": {
    href: "/ratgeber/photovoltaik-15-kwp-kosten",
    title: "Photovoltaik 15 kWp: Kosten inklusive Installation",
    cta: "15-kWp-Ratgeber öffnen",
  },
  "fenster:fenster-mit-2-fach-verglasung": {
    href: "/ratgeber/fenster-2-fach-verglasung-kosten",
    title: "Fenster mit 2-fach Verglasung: Kosten pro Fenster",
    cta: "2-fach-Fenster-Ratgeber öffnen",
  },
  "heizung:thermostat-installieren": {
    href: "/ratgeber/thermostat-installieren-kosten",
    title: "Thermostat installieren: Kosten pro Stück",
    cta: "Thermostat-Ratgeber öffnen",
  },
  "fassade:fassaden-sanierung-bei-rissen": {
    href: "/ratgeber/fassadenrisse-sanieren-kosten-pro-qm",
    title: "Fassadenrisse sanieren: Kosten pro m²",
    cta: "Risssanierungs-Ratgeber öffnen",
  },
  "fassade:vorgehaengte-hinterlueftete-fassade": {
    href: "/ratgeber/vorgehaengte-hinterlueftete-fassade-kosten-pro-qm",
    title: "Vorgehängte hinterlüftete Fassade: Kosten pro m²",
    cta: "VHF-Ratgeber öffnen",
  },
  "garten:heckenschnitt": {
    href: "/ratgeber/heckenschnitt-kosten-pro-meter",
    title: "Heckenschnitt: Kosten pro laufendem Meter",
    cta: "Heckenschnitt-Ratgeber öffnen",
  },
  "tueren:innentuer-einbauen-inkl-zarge": {
    href: "/ratgeber/innentuer-einbauen-kosten",
    title: "Innentür einbauen: Kosten inklusive Zarge",
    cta: "Innentür-Ratgeber öffnen",
  },
  "tueren:tuer-lackieren-mit-zarge": {
    href: "/ratgeber/tuer-lackieren-kosten",
    title: "Tür lackieren: Kosten mit Zarge",
    cta: "Türlackierungs-Ratgeber öffnen",
  },
  "estrich:calciumsulfat-anhydritestrich": {
    href: "/ratgeber/anhydritestrich-kosten-pro-qm",
    title: "Anhydritestrich: Kosten pro m²",
    cta: "Anhydritestrich-Ratgeber öffnen",
  },
  "estrich:gussasphaltestrich": {
    href: "/ratgeber/gussasphaltestrich-kosten-pro-qm",
    title: "Gussasphaltestrich: Kosten pro m²",
    cta: "Gussasphalt-Ratgeber öffnen",
  },
  "estrich:sichtestrich": {
    href: "/ratgeber/sichtestrich-kosten-pro-qm",
    title: "Sichtestrich: Kosten pro m²",
    cta: "Sichtestrich-Ratgeber öffnen",
  },
  "treppen:holztreppe-schleifen-und-versiegeln": {
    href: "/ratgeber/holztreppe-schleifen-kosten",
    title: "Holztreppe schleifen und versiegeln: Kosten",
    cta: "Holztreppen-Ratgeber öffnen",
  },
  "treppen:betontreppe-mit-neuem-belag": {
    href: "/ratgeber/betontreppe-neuer-belag-kosten",
    title: "Betontreppe mit neuem Belag: Kosten",
    cta: "Betontreppen-Ratgeber öffnen",
  },
  "kueche:fliesenspiegel-erneuern": {
    href: "/ratgeber/fliesenspiegel-erneuern-kosten",
    title: "Fliesenspiegel erneuern: Kosten pro Küche",
    cta: "Fliesenspiegel-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return serviceGuideLinks[serviceSlug] ?? HANDWERKER_RATES;
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  const { serviceSlug, itemSlug, itemName, unit } = options;
  const normalizedUnit = unit.toLocaleLowerCase("de-DE");
  const normalizedName = itemName.toLocaleLowerCase("de-DE");

  if (normalizedUnit.includes("pro stunde") || normalizedName.includes("stundensatz")) {
    return HANDWERKER_RATES;
  }

  if (serviceSlug === "fliesenleger" && (normalizedName.includes("bad") || normalizedName.includes("abdichtung"))) {
    return serviceGuideLinks.badsanierung;
  }

  return itemGuideOverrides[`${serviceSlug}:${itemSlug}`]
    ?? getServiceGuideLink(serviceSlug);
}
