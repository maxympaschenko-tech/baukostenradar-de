import { allGuides as baseAllGuides } from "./all-guides";
import { doorGuides } from "./guides-doors";

const doorRelatedLinks = {
  kunststoff: {
    label: "Haustür Kunststoff Kosten",
    href: "/ratgeber/haustuer-kunststoff-kosten",
  },
  rc2: {
    label: "Haustür Holz/Alu RC2 Kosten",
    href: "/ratgeber/haustuer-rc2-kosten",
  },
} as const;

const masonryRelatedLinks = {
  innenwand: {
    label: "Innenwand mauern Kosten",
    href: "/ratgeber/innenwand-mauern-kosten",
  },
  kalksandstein: {
    label: "Kalksandstein-Mauerwerk Kosten",
    href: "/ratgeber/kalksandstein-mauerwerk-kosten-pro-qm",
  },
  poroton: {
    label: "Poroton-Mauerwerk Kosten",
    href: "/ratgeber/poroton-mauerwerk-kosten-pro-qm",
  },
  porenbeton: {
    label: "Porenbeton-Mauerwerk Kosten",
    href: "/ratgeber/porenbeton-mauerwerk-kosten-pro-qm",
  },
  klinker: {
    label: "Klinkerfassade und Verblendmauerwerk Kosten",
    href: "/ratgeber/klinkerfassade-kosten-pro-qm",
  },
  bodenplatte: {
    label: "Bodenplatte Kosten",
    href: "/ratgeber/bodenplatte-kosten-pro-qm",
  },
  klinkerCalculator: {
    label: "Klinker-Verblendmauerwerk berechnen",
    href: "/rechner/handwerkerkosten?gewerk=maurer&leistung=klinker-verblendmauerwerk",
  },
} as const;

const treppenGuideLinks = [
  { slug: "14-treppenstufen-renovieren-kosten", label: "14 Treppenstufen renovieren Kosten", href: "/ratgeber/14-treppenstufen-renovieren-kosten" },
  { slug: "treppenrenovierung-holzstufen-system-kosten", label: "Treppenrenovierung mit Holzstufen-System", href: "/ratgeber/treppenrenovierung-holzstufen-system-kosten" },
  { slug: "holztreppe-schleifen-kosten", label: "Holztreppe schleifen Kosten", href: "/ratgeber/holztreppe-schleifen-kosten" },
  { slug: "treppen-stufenueberbau-gelaender-kosten", label: "Stufenüberbau und Geländer Kosten", href: "/ratgeber/treppen-stufenueberbau-gelaender-kosten" },
  { slug: "betontreppe-neuer-belag-kosten", label: "Betontreppe mit neuem Belag Kosten", href: "/ratgeber/betontreppe-neuer-belag-kosten" },
  { slug: "natursteintreppe-schleifen-kosten", label: "Natursteintreppe schleifen Kosten", href: "/ratgeber/natursteintreppe-schleifen-kosten" },
] as const;

const kitchenGuideLinks = [
  { slug: "kueche-10-qm-renovieren-kosten", label: "10 m² Küche renovieren Kosten", href: "/ratgeber/kueche-10-qm-renovieren-kosten" },
  { slug: "kuechenfronten-erneuern-kosten", label: "Küchenfronten erneuern Kosten", href: "/ratgeber/kuechenfronten-erneuern-kosten" },
  { slug: "kuechenarbeitsplatte-kosten", label: "Küchenarbeitsplatte erneuern Kosten", href: "/ratgeber/kuechenarbeitsplatte-kosten" },
  { slug: "fliesenspiegel-erneuern-kosten", label: "Fliesenspiegel erneuern Kosten", href: "/ratgeber/fliesenspiegel-erneuern-kosten" },
  { slug: "kueche-elektrogeraete-kosten", label: "Küchengeräte Kosten", href: "/ratgeber/kueche-elektrogeraete-kosten" },
  { slug: "einbaukueche-kosten", label: "Einbauküche Kosten", href: "/ratgeber/einbaukueche-kosten" },
  { slug: "premium-kueche-umbau-kosten", label: "Premium-Küche mit Umbau Kosten", href: "/ratgeber/premium-kueche-umbau-kosten" },
] as const;

const windowGuideLinks = [
  { slug: "fenster-austauschen-kosten-haus", label: "Fenster austauschen Kosten", href: "/ratgeber/fenster-austauschen-kosten-haus" },
  { slug: "20-fenster-austauschen-kosten", label: "20 Fenster austauschen Kosten", href: "/ratgeber/20-fenster-austauschen-kosten" },
  { slug: "fenster-2-fach-verglasung-kosten", label: "Fenster mit 2-fach Verglasung Kosten", href: "/ratgeber/fenster-2-fach-verglasung-kosten" },
  { slug: "fenster-3-fach-verglasung-kosten", label: "Fenster mit 3-fach Verglasung Kosten", href: "/ratgeber/fenster-3-fach-verglasung-kosten" },
  { slug: "fenstereinbau-kosten", label: "Fenstereinbau Kosten", href: "/ratgeber/fenstereinbau-kosten" },
] as const;

const roofGuideLinks = [
  { slug: "dach-sanieren-kosten-pro-qm", label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
  { slug: "dach-150-qm-kosten", label: "150 m² Dach sanieren Kosten", href: "/ratgeber/dach-150-qm-kosten" },
  { slug: "dach-neu-eindecken-kosten-pro-qm", label: "Dach neu eindecken Kosten pro m²", href: "/ratgeber/dach-neu-eindecken-kosten-pro-qm" },
  { slug: "dachsanierung-aufsparrendaemmung-kosten-pro-qm", label: "Dachsanierung mit Aufsparrendämmung Kosten", href: "/ratgeber/dachsanierung-aufsparrendaemmung-kosten-pro-qm" },
  { slug: "dachfenster-nachtraeglich-einbauen-kosten", label: "Dachfenster nachträglich einbauen Kosten", href: "/ratgeber/dachfenster-nachtraeglich-einbauen-kosten" },
  { slug: "dachfenster-austauschen-kosten", label: "Dachfenster austauschen Kosten", href: "/ratgeber/dachfenster-austauschen-kosten" },
  { slug: "geruest-kosten-pro-qm", label: "Gerüst Kosten pro m²", href: "/ratgeber/geruest-kosten-pro-qm" },
  { slug: "dachrinne-erneuern-kosten", label: "Dachrinne erneuern Kosten", href: "/ratgeber/dachrinne-erneuern-kosten" },
] as const;

const heatingGuideLinks = [
  { slug: "heizung-erneuern-kosten", label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
  { slug: "fussbodenheizung-100-qm-kosten", label: "100 m² Fußbodenheizung Kosten", href: "/ratgeber/fussbodenheizung-100-qm-kosten" },
  { slug: "gasheizung-austauschen-kosten", label: "Gasheizung austauschen Kosten", href: "/ratgeber/gasheizung-austauschen-kosten" },
  { slug: "heizkoerper-montieren-kosten", label: "Heizkörper montieren Kosten", href: "/ratgeber/heizkoerper-montieren-kosten" },
  { slug: "thermostat-installieren-kosten", label: "Thermostat installieren Kosten", href: "/ratgeber/thermostat-installieren-kosten" },
  { slug: "heizungswartung-kosten", label: "Heizungswartung Kosten", href: "/ratgeber/heizungswartung-kosten" },
] as const;

const electricalGuideLinks = [
  { slug: "elektrik-erneuern-altbau", label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
  { slug: "elektrik-erneuern-100-qm-kosten", label: "Elektrik bei 100 m² erneuern", href: "/ratgeber/elektrik-erneuern-100-qm-kosten" },
  { slug: "sicherungskasten-erneuern-kosten", label: "Sicherungskasten erneuern Kosten", href: "/ratgeber/sicherungskasten-erneuern-kosten" },
  { slug: "steckdose-installieren-kosten", label: "Steckdose installieren Kosten", href: "/ratgeber/steckdose-installieren-kosten" },
  { slug: "lichtschalter-austauschen-kosten", label: "Lichtschalter austauschen Kosten", href: "/ratgeber/lichtschalter-austauschen-kosten" },
  { slug: "elektro-neuinstallation-kosten", label: "Elektro-Neuinstallation Kosten", href: "/ratgeber/elektro-neuinstallation-kosten" },
] as const;

const malerGuideLinks = [
  { slug: "maler-kosten-pro-qm", label: "Maler Kosten pro m²", href: "/ratgeber/maler-kosten-pro-qm" },
  { slug: "waende-streichen-kosten-pro-qm", label: "Wände streichen Kosten pro m²", href: "/ratgeber/waende-streichen-kosten-pro-qm" },
  { slug: "tapezieren-kosten-pro-qm", label: "Tapezieren Kosten pro m²", href: "/ratgeber/tapezieren-kosten-pro-qm" },
  { slug: "innenputz-q3-kosten-pro-qm", label: "Innenputz Q3 Kosten pro m²", href: "/ratgeber/innenputz-q3-kosten-pro-qm" },
] as const;

const fliesenGuideLinks = [
  { slug: "fliesenleger-kosten-pro-qm", label: "Fliesenleger Kosten pro m²", href: "/ratgeber/fliesenleger-kosten-pro-qm" },
  { slug: "fliesen-verlegen-kosten-pro-qm", label: "Standard-Fliesen verlegen Kosten", href: "/ratgeber/fliesen-verlegen-kosten-pro-qm" },
  { slug: "grossformat-fliesen-verlegen-kosten", label: "Großformat-Fliesen verlegen Kosten", href: "/ratgeber/grossformat-fliesen-verlegen-kosten" },
  { slug: "mosaik-fliesen-verlegen-kosten-pro-qm", label: "Mosaikfliesen verlegen Kosten", href: "/ratgeber/mosaik-fliesen-verlegen-kosten-pro-qm" },
  { slug: "naturstein-verlegen-kosten-pro-qm", label: "Naturstein verlegen Kosten", href: "/ratgeber/naturstein-verlegen-kosten-pro-qm" },
] as const;

const bodenGuideLinks = [
  { slug: "bodenleger-kosten-pro-qm", label: "Bodenleger Kosten pro m²", href: "/ratgeber/bodenleger-kosten-pro-qm" },
  { slug: "vinylboden-verlegen-kosten-pro-qm", label: "Vinylboden verlegen Kosten pro m²", href: "/ratgeber/vinylboden-verlegen-kosten-pro-qm" },
  { slug: "parkett-verlegen-kosten-pro-qm", label: "Parkett verlegen Kosten pro m²", href: "/ratgeber/parkett-verlegen-kosten-pro-qm" },
  { slug: "laminat-verlegen-kosten-pro-qm", label: "Laminat verlegen Kosten pro m²", href: "/ratgeber/laminat-verlegen-kosten-pro-qm" },
  { slug: "boden-sanieren-kosten-pro-qm", label: "Bodensanierung Kosten pro m²", href: "/ratgeber/boden-sanieren-kosten-pro-qm" },
  { slug: "parkett-abschleifen-kosten", label: "Parkett abschleifen Kosten pro m²", href: "/ratgeber/parkett-abschleifen-kosten" },
] as const;

const trockenbauGuideLinks = [
  { slug: "trockenbau-kosten-pro-qm", label: "Trockenbau Kosten pro m²", href: "/ratgeber/trockenbau-kosten-pro-qm" },
  { slug: "trockenbauwand-kosten-pro-qm", label: "Trockenbauwand Kosten pro m²", href: "/ratgeber/trockenbauwand-kosten-pro-qm" },
  { slug: "verspachtelung-q4-kosten-pro-qm", label: "Verspachtelung Q4 Kosten pro m²", href: "/ratgeber/verspachtelung-q4-kosten-pro-qm" },
] as const;

const photovoltaikGuideLinks = [
  { slug: "photovoltaik-kosten-2026", label: "Photovoltaik Kosten 2026", href: "/ratgeber/photovoltaik-kosten-2026" },
  { slug: "photovoltaik-5-kwp-kosten", label: "Photovoltaik 5 kWp Kosten", href: "/ratgeber/photovoltaik-5-kwp-kosten" },
  { slug: "photovoltaik-10-kwp-kosten", label: "Photovoltaik 10 kWp Kosten", href: "/ratgeber/photovoltaik-10-kwp-kosten" },
  { slug: "photovoltaik-15-kwp-kosten", label: "Photovoltaik 15 kWp Kosten", href: "/ratgeber/photovoltaik-15-kwp-kosten" },
  { slug: "photovoltaik-mit-speicher-kosten", label: "Photovoltaik mit Speicher Kosten", href: "/ratgeber/photovoltaik-mit-speicher-kosten" },
  { slug: "stromspeicher-kosten-pro-kwh", label: "Stromspeicher Kosten pro kWh", href: "/ratgeber/stromspeicher-kosten-pro-kwh" },
] as const;

const waermepumpeGuideLinks = [
  { slug: "waermepumpe-kosten-2026", label: "Wärmepumpe Kosten 2026", href: "/ratgeber/waermepumpe-kosten-2026" },
  { slug: "luft-wasser-waermepumpe-kosten", label: "Luft-Wasser-Wärmepumpe Kosten", href: "/ratgeber/luft-wasser-waermepumpe-kosten" },
  { slug: "waermepumpe-wartung-kosten", label: "Wärmepumpe Wartung Kosten", href: "/ratgeber/waermepumpe-wartung-kosten" },
] as const;

const daemmungGuideLinks = [
  { slug: "daemmung-kosten-pro-qm", label: "Dämmung Kosten pro m²", href: "/ratgeber/daemmung-kosten-pro-qm" },
  { slug: "fassadendaemmung-kosten-pro-qm", label: "Fassadendämmung Kosten pro m²", href: "/ratgeber/fassadendaemmung-kosten-pro-qm" },
  { slug: "innendaemmung-kosten-pro-qm", label: "Innendämmung Kosten pro m²", href: "/ratgeber/innendaemmung-kosten-pro-qm" },
  { slug: "zwischensparrendaemmung-kosten-pro-qm", label: "Zwischensparrendämmung Kosten pro m²", href: "/ratgeber/zwischensparrendaemmung-kosten-pro-qm" },
  { slug: "aufsparrendaemmung-kosten-pro-qm", label: "Aufsparrendämmung Kosten pro m²", href: "/ratgeber/aufsparrendaemmung-kosten-pro-qm" },
] as const;

const fassadeGuideLinks = [
  { slug: "fassade-sanieren-kosten", label: "Fassade sanieren Kosten", href: "/ratgeber/fassade-sanieren-kosten" },
  { slug: "putzfassade-kosten-pro-qm", label: "Putzfassade Kosten pro m²", href: "/ratgeber/putzfassade-kosten-pro-qm" },
  { slug: "fassadenrisse-sanieren-kosten-pro-qm", label: "Fassadenrisse sanieren Kosten pro m²", href: "/ratgeber/fassadenrisse-sanieren-kosten-pro-qm" },
  { slug: "vorgehaengte-hinterlueftete-fassade-kosten-pro-qm", label: "Vorgehängte hinterlüftete Fassade Kosten", href: "/ratgeber/vorgehaengte-hinterlueftete-fassade-kosten-pro-qm" },
  { slug: "fassade-streichen-kosten-pro-qm", label: "Fassade streichen Kosten pro m²", href: "/ratgeber/fassade-streichen-kosten-pro-qm" },
  { slug: "klinkerfassade-kosten-pro-qm", label: "Klinkerfassade Kosten pro m²", href: "/ratgeber/klinkerfassade-kosten-pro-qm" },
] as const;

function peers<T extends readonly { slug: string; label: string; href: string }[]>(links: T, slug: string) {
  return links
    .filter((link) => link.slug !== slug)
    .map(({ label, href }) => ({ label, href }));
}

const relatedByGuide: Record<string, Array<{ label: string; href: string }>> = {
  "haustuer-einbauen-kosten": [doorRelatedLinks.kunststoff, doorRelatedLinks.rc2],
  "innentuer-einbauen-kosten": [doorRelatedLinks.kunststoff, doorRelatedLinks.rc2],
  "innenwand-mauern-kosten": [masonryRelatedLinks.klinker],
  "kalksandstein-mauerwerk-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "poroton-mauerwerk-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "porenbeton-mauerwerk-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "bodenplatte-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "14-treppenstufen-renovieren-kosten": peers(treppenGuideLinks, "14-treppenstufen-renovieren-kosten"),
  "treppenrenovierung-holzstufen-system-kosten": peers(treppenGuideLinks, "treppenrenovierung-holzstufen-system-kosten"),
  "holztreppe-schleifen-kosten": peers(treppenGuideLinks, "holztreppe-schleifen-kosten"),
  "treppen-stufenueberbau-gelaender-kosten": peers(treppenGuideLinks, "treppen-stufenueberbau-gelaender-kosten"),
  "betontreppe-neuer-belag-kosten": peers(treppenGuideLinks, "betontreppe-neuer-belag-kosten"),
  "natursteintreppe-schleifen-kosten": peers(treppenGuideLinks, "natursteintreppe-schleifen-kosten"),
  "kueche-10-qm-renovieren-kosten": peers(kitchenGuideLinks, "kueche-10-qm-renovieren-kosten"),
  "kuechenfronten-erneuern-kosten": peers(kitchenGuideLinks, "kuechenfronten-erneuern-kosten"),
  "kuechenarbeitsplatte-kosten": peers(kitchenGuideLinks, "kuechenarbeitsplatte-kosten"),
  "fliesenspiegel-erneuern-kosten": peers(kitchenGuideLinks, "fliesenspiegel-erneuern-kosten"),
  "kueche-elektrogeraete-kosten": peers(kitchenGuideLinks, "kueche-elektrogeraete-kosten"),
  "einbaukueche-kosten": peers(kitchenGuideLinks, "einbaukueche-kosten"),
  "premium-kueche-umbau-kosten": peers(kitchenGuideLinks, "premium-kueche-umbau-kosten"),
  "fenster-austauschen-kosten-haus": peers(windowGuideLinks, "fenster-austauschen-kosten-haus"),
  "20-fenster-austauschen-kosten": peers(windowGuideLinks, "20-fenster-austauschen-kosten"),
  "fenster-2-fach-verglasung-kosten": peers(windowGuideLinks, "fenster-2-fach-verglasung-kosten"),
  "fenster-3-fach-verglasung-kosten": peers(windowGuideLinks, "fenster-3-fach-verglasung-kosten"),
  "fenstereinbau-kosten": peers(windowGuideLinks, "fenstereinbau-kosten"),
  "dach-sanieren-kosten-pro-qm": peers(roofGuideLinks, "dach-sanieren-kosten-pro-qm"),
  "dach-150-qm-kosten": peers(roofGuideLinks, "dach-150-qm-kosten"),
  "dach-neu-eindecken-kosten-pro-qm": peers(roofGuideLinks, "dach-neu-eindecken-kosten-pro-qm"),
  "dachsanierung-aufsparrendaemmung-kosten-pro-qm": peers(roofGuideLinks, "dachsanierung-aufsparrendaemmung-kosten-pro-qm"),
  "dachfenster-nachtraeglich-einbauen-kosten": peers(roofGuideLinks, "dachfenster-nachtraeglich-einbauen-kosten"),
  "dachfenster-austauschen-kosten": peers(roofGuideLinks, "dachfenster-austauschen-kosten"),
  "geruest-kosten-pro-qm": peers(roofGuideLinks, "geruest-kosten-pro-qm"),
  "dachrinne-erneuern-kosten": peers(roofGuideLinks, "dachrinne-erneuern-kosten"),
  "heizung-erneuern-kosten": peers(heatingGuideLinks, "heizung-erneuern-kosten"),
  "fussbodenheizung-100-qm-kosten": peers(heatingGuideLinks, "fussbodenheizung-100-qm-kosten"),
  "gasheizung-austauschen-kosten": peers(heatingGuideLinks, "gasheizung-austauschen-kosten"),
  "heizkoerper-montieren-kosten": peers(heatingGuideLinks, "heizkoerper-montieren-kosten"),
  "thermostat-installieren-kosten": peers(heatingGuideLinks, "thermostat-installieren-kosten"),
  "heizungswartung-kosten": peers(heatingGuideLinks, "heizungswartung-kosten"),
  "elektrik-erneuern-altbau": peers(electricalGuideLinks, "elektrik-erneuern-altbau"),
  "elektrik-erneuern-100-qm-kosten": peers(electricalGuideLinks, "elektrik-erneuern-100-qm-kosten"),
  "sicherungskasten-erneuern-kosten": peers(electricalGuideLinks, "sicherungskasten-erneuern-kosten"),
  "steckdose-installieren-kosten": peers(electricalGuideLinks, "steckdose-installieren-kosten"),
  "lichtschalter-austauschen-kosten": peers(electricalGuideLinks, "lichtschalter-austauschen-kosten"),
  "elektro-neuinstallation-kosten": peers(electricalGuideLinks, "elektro-neuinstallation-kosten"),
  "maler-kosten-pro-qm": peers(malerGuideLinks, "maler-kosten-pro-qm"),
  "waende-streichen-kosten-pro-qm": peers(malerGuideLinks, "waende-streichen-kosten-pro-qm"),
  "tapezieren-kosten-pro-qm": peers(malerGuideLinks, "tapezieren-kosten-pro-qm"),
  "innenputz-q3-kosten-pro-qm": peers(malerGuideLinks, "innenputz-q3-kosten-pro-qm"),
  "fliesenleger-kosten-pro-qm": peers(fliesenGuideLinks, "fliesenleger-kosten-pro-qm"),
  "fliesen-verlegen-kosten-pro-qm": peers(fliesenGuideLinks, "fliesen-verlegen-kosten-pro-qm"),
  "grossformat-fliesen-verlegen-kosten": peers(fliesenGuideLinks, "grossformat-fliesen-verlegen-kosten"),
  "mosaik-fliesen-verlegen-kosten-pro-qm": peers(fliesenGuideLinks, "mosaik-fliesen-verlegen-kosten-pro-qm"),
  "naturstein-verlegen-kosten-pro-qm": peers(fliesenGuideLinks, "naturstein-verlegen-kosten-pro-qm"),
  "bodenleger-kosten-pro-qm": peers(bodenGuideLinks, "bodenleger-kosten-pro-qm"),
  "vinylboden-verlegen-kosten-pro-qm": peers(bodenGuideLinks, "vinylboden-verlegen-kosten-pro-qm"),
  "parkett-verlegen-kosten-pro-qm": peers(bodenGuideLinks, "parkett-verlegen-kosten-pro-qm"),
  "laminat-verlegen-kosten-pro-qm": peers(bodenGuideLinks, "laminat-verlegen-kosten-pro-qm"),
  "boden-sanieren-kosten-pro-qm": peers(bodenGuideLinks, "boden-sanieren-kosten-pro-qm"),
  "parkett-abschleifen-kosten": peers(bodenGuideLinks, "parkett-abschleifen-kosten"),
  "trockenbau-kosten-pro-qm": peers(trockenbauGuideLinks, "trockenbau-kosten-pro-qm"),
  "trockenbauwand-kosten-pro-qm": peers(trockenbauGuideLinks, "trockenbauwand-kosten-pro-qm"),
  "verspachtelung-q4-kosten-pro-qm": peers(trockenbauGuideLinks, "verspachtelung-q4-kosten-pro-qm"),
  "photovoltaik-kosten-2026": peers(photovoltaikGuideLinks, "photovoltaik-kosten-2026"),
  "photovoltaik-5-kwp-kosten": peers(photovoltaikGuideLinks, "photovoltaik-5-kwp-kosten"),
  "photovoltaik-10-kwp-kosten": peers(photovoltaikGuideLinks, "photovoltaik-10-kwp-kosten"),
  "photovoltaik-15-kwp-kosten": peers(photovoltaikGuideLinks, "photovoltaik-15-kwp-kosten"),
  "photovoltaik-mit-speicher-kosten": peers(photovoltaikGuideLinks, "photovoltaik-mit-speicher-kosten"),
  "stromspeicher-kosten-pro-kwh": peers(photovoltaikGuideLinks, "stromspeicher-kosten-pro-kwh"),
  "waermepumpe-kosten-2026": peers(waermepumpeGuideLinks, "waermepumpe-kosten-2026"),
  "luft-wasser-waermepumpe-kosten": peers(waermepumpeGuideLinks, "luft-wasser-waermepumpe-kosten"),
  "waermepumpe-wartung-kosten": peers(waermepumpeGuideLinks, "waermepumpe-wartung-kosten"),
  "daemmung-kosten-pro-qm": peers(daemmungGuideLinks, "daemmung-kosten-pro-qm"),
  "fassadendaemmung-kosten-pro-qm": peers(daemmungGuideLinks, "fassadendaemmung-kosten-pro-qm"),
  "innendaemmung-kosten-pro-qm": peers(daemmungGuideLinks, "innendaemmung-kosten-pro-qm"),
  "zwischensparrendaemmung-kosten-pro-qm": peers(daemmungGuideLinks, "zwischensparrendaemmung-kosten-pro-qm"),
  "aufsparrendaemmung-kosten-pro-qm": peers(daemmungGuideLinks, "aufsparrendaemmung-kosten-pro-qm"),
  "fassade-sanieren-kosten": peers(fassadeGuideLinks, "fassade-sanieren-kosten"),
  "putzfassade-kosten-pro-qm": peers(fassadeGuideLinks, "putzfassade-kosten-pro-qm"),
  "fassadenrisse-sanieren-kosten-pro-qm": peers(fassadeGuideLinks, "fassadenrisse-sanieren-kosten-pro-qm"),
  "vorgehaengte-hinterlueftete-fassade-kosten-pro-qm": peers(fassadeGuideLinks, "vorgehaengte-hinterlueftete-fassade-kosten-pro-qm"),
  "fassade-streichen-kosten-pro-qm": peers(fassadeGuideLinks, "fassade-streichen-kosten-pro-qm"),
  "klinkerfassade-kosten-pro-qm": [
    ...peers(fassadeGuideLinks, "klinkerfassade-kosten-pro-qm"),
    masonryRelatedLinks.innenwand,
    masonryRelatedLinks.kalksandstein,
    masonryRelatedLinks.poroton,
    masonryRelatedLinks.porenbeton,
    masonryRelatedLinks.bodenplatte,
    masonryRelatedLinks.klinkerCalculator,
  ],
};

const enrichedBaseGuides = baseAllGuides.map((guide) => {
  const candidates = relatedByGuide[guide.slug];
  if (!candidates) return guide;

  const missingLinks = candidates.filter(
    (candidate) => !guide.related.some((link) => link.href === candidate.href),
  );
  if (missingLinks.length === 0) return guide;

  return { ...guide, related: [...guide.related, ...missingLinks] };
});

export const allGuides = [...enrichedBaseGuides, ...doorGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
