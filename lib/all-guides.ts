import { guides as primaryGuides } from "@/lib/guides";
import { secondaryGuides } from "@/lib/guides-secondary";
import { tertiaryGuides } from "@/lib/guides-tertiary";
import { tradeGuides } from "@/lib/guides-trade";
import { specialistGuides } from "@/lib/guides-specialists";
import { opportunityGuides } from "@/lib/guides-opportunities";
import { secondaryOpportunityGuides } from "@/lib/guides-opportunities-secondary";
import { tertiaryOpportunityGuides } from "@/lib/guides-opportunities-tertiary";
import { quaternaryOpportunityGuides } from "@/lib/guides-opportunities-quaternary";
import { quinaryOpportunityGuides } from "@/lib/guides-opportunities-quinary";
import { comparisonGuides } from "@/lib/guides-comparisons";
import { scenarioGuides } from "@/lib/guides-scenarios";
import { catalogScenarioGuides } from "@/lib/guides-catalog-scenarios";

const primaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "sanierungskosten-pro-qm": [
    { label: "Haus sanieren Kosten", href: "/ratgeber/haus-sanieren-kosten" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Sanierung Reihenfolge", href: "/ratgeber/sanierung-reihenfolge" },
  ],
  "handwerker-stundensaetze": [
    { label: "Arbeitskosten vs. Materialkosten", href: "/ratgeber/arbeitskosten-materialkosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
  ],
  "altbausanierung-kosten": [
    { label: "Haus sanieren Kosten", href: "/ratgeber/haus-sanieren-kosten" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Sanierung Reihenfolge", href: "/ratgeber/sanierung-reihenfolge" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
  ],
  "wohnung-renovieren-kosten": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Renovierungskosten Haus", href: "/ratgeber/renovierungskosten-haus" },
    { label: "Arbeitskosten vs. Materialkosten", href: "/ratgeber/arbeitskosten-materialkosten" },
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
  ],
};

const secondaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "haus-sanieren-kosten": [
    { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Haus renovieren 150 m²", href: "/ratgeber/haus-renovieren-150-qm-kosten" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Fenster austauschen Kosten", href: "/ratgeber/fenster-austauschen-kosten-haus" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
    { label: "Haustür einbauen Kosten", href: "/ratgeber/haustuer-einbauen-kosten" },
  ],
  "renovierungskosten-haus": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Haus renovieren 150 m²", href: "/ratgeber/haus-renovieren-150-qm-kosten" },
    { label: "Haus renovieren 200 m²", href: "/ratgeber/haus-renovieren-200-qm-kosten" },
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    { label: "Küche 10 m² renovieren", href: "/ratgeber/kueche-10-qm-renovieren-kosten" },
    { label: "6 Innentüren austauschen", href: "/ratgeber/6-innentueren-austauschen-kosten" },
  ],
  "sanierung-reihenfolge": [
    { label: "Sanierungskosten Einfamilienhaus", href: "/ratgeber/sanierungskosten-einfamilienhaus" },
    { label: "Kernsanierung Kosten", href: "/ratgeber/kernsanierung-kosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
  ],
  "arbeitskosten-materialkosten": [
    { label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    { label: "Innenwand mauern Kosten", href: "/ratgeber/innenwand-mauern-kosten" },
  ],
};

const tertiaryClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "kernsanierung-kosten": [
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
    { label: "Innenwand mauern Kosten", href: "/ratgeber/innenwand-mauern-kosten" },
    { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
  ],
  "sanierungskosten-einfamilienhaus": [
    { label: "Dach sanieren Kosten pro m²", href: "/ratgeber/dach-sanieren-kosten-pro-qm" },
    { label: "Fenster austauschen Kosten", href: "/ratgeber/fenster-austauschen-kosten-haus" },
    { label: "Heizung erneuern Kosten", href: "/ratgeber/heizung-erneuern-kosten" },
  ],
  "renovierungskosten-100-qm": [
    { label: "Bad komplett sanieren", href: "/ratgeber/bad-komplett-sanieren-kosten" },
    { label: "Elektrik im Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
    { label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
  ],
};

const tradeClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "dach-sanieren-kosten-pro-qm": [
    { label: "Dach 150 m² Kosten", href: "/ratgeber/dach-150-qm-kosten" },
    { label: "Dachrinne erneuern Kosten", href: "/ratgeber/dachrinne-erneuern-kosten" },
    { label: "Dach neu eindecken Kosten", href: "/ratgeber/dach-neu-eindecken-kosten-pro-qm" },
    { label: "Gerüst Kosten pro m²", href: "/ratgeber/geruest-kosten-pro-qm" },
    { label: "Dachsanierung mit Aufsparrendämmung", href: "/ratgeber/dachsanierung-aufsparrendaemmung-kosten-pro-qm" },
  ],
  "fenster-austauschen-kosten-haus": [
    { label: "20 Fenster austauschen Kosten", href: "/ratgeber/20-fenster-austauschen-kosten" },
    { label: "Fenstereinbau Kosten", href: "/ratgeber/fenstereinbau-kosten" },
    { label: "Fenster 3-fach Verglasung Kosten", href: "/ratgeber/fenster-3-fach-verglasung-kosten" },
    { label: "Fenster 2-fach Verglasung Kosten", href: "/ratgeber/fenster-2-fach-verglasung-kosten" },
    { label: "2-fach oder 3-fach Verglasung vergleichen", href: "/ratgeber/fenster-2-fach-oder-3-fach-verglasung-kosten" },
  ],
  "elektrik-erneuern-altbau": [
    { label: "Elektrik bei 100 m² erneuern", href: "/ratgeber/elektrik-erneuern-100-qm-kosten" },
    { label: "Sicherungskasten erneuern Kosten", href: "/ratgeber/sicherungskasten-erneuern-kosten" },
    { label: "Steckdose installieren Kosten", href: "/ratgeber/steckdose-installieren-kosten" },
    { label: "Lichtschalter austauschen Kosten", href: "/ratgeber/lichtschalter-austauschen-kosten" },
    { label: "Elektro-Neuinstallation Kosten", href: "/ratgeber/elektro-neuinstallation-kosten" },
  ],
  "heizung-erneuern-kosten": [
    { label: "Fußbodenheizung 100 m² Kosten", href: "/ratgeber/fussbodenheizung-100-qm-kosten" },
    { label: "Heizkörper montieren Kosten", href: "/ratgeber/heizkoerper-montieren-kosten" },
    { label: "Gasheizung austauschen Kosten", href: "/ratgeber/gasheizung-austauschen-kosten" },
    { label: "Heizungswartung Kosten", href: "/ratgeber/heizungswartung-kosten" },
    { label: "Thermostat installieren Kosten", href: "/ratgeber/thermostat-installieren-kosten" },
    { label: "Wärmepumpe oder Gasheizung vergleichen", href: "/ratgeber/heizung-waermepumpe-oder-gasheizung-kosten" },
  ],
  "bad-komplett-sanieren-kosten": [
    { label: "Bad 10 m² sanieren Kosten", href: "/ratgeber/bad-10-qm-sanieren-kosten" },
    { label: "Bad entkernen Kosten", href: "/ratgeber/bad-entkernen-kosten" },
    { label: "Bad komplett verfliesen Kosten", href: "/ratgeber/bad-komplett-verfliesen-kosten" },
    { label: "Bad abdichten Kosten pro m²", href: "/ratgeber/bad-abdichten-kosten-pro-qm" },
  ],
};

const specialistClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "maler-kosten-pro-qm": [
    { label: "Wände streichen Kosten pro m²", href: "/ratgeber/waende-streichen-kosten-pro-qm" },
    { label: "Tapezieren Kosten pro m²", href: "/ratgeber/tapezieren-kosten-pro-qm" },
    { label: "Innenputz Q3 Kosten pro m²", href: "/ratgeber/innenputz-q3-kosten-pro-qm" },
  ],
  "fliesenleger-kosten-pro-qm": [
    { label: "Fliesen verlegen Kosten pro m²", href: "/ratgeber/fliesen-verlegen-kosten-pro-qm" },
    { label: "Großformat-Fliesen verlegen Kosten", href: "/ratgeber/grossformat-fliesen-verlegen-kosten" },
    { label: "Mosaikfliesen verlegen Kosten", href: "/ratgeber/mosaik-fliesen-verlegen-kosten-pro-qm" },
    { label: "Naturstein verlegen Kosten", href: "/ratgeber/naturstein-verlegen-kosten-pro-qm" },
  ],
  "garten-anlegen-kosten": [
    { label: "Einfahrt pflastern Kosten", href: "/ratgeber/einfahrt-pflastern-kosten" },
    { label: "Terrasse pflastern Kosten", href: "/ratgeber/terrasse-pflastern-kosten" },
    { label: "Baum fällen Kosten", href: "/ratgeber/baum-faellen-kosten" },
    { label: "Rollrasen Kosten pro m²", href: "/ratgeber/rollrasen-kosten-pro-qm" },
    { label: "Doppelstabmattenzaun Kosten", href: "/ratgeber/doppelstabmattenzaun-kosten-pro-meter" },
    { label: "Heckenschnitt Kosten", href: "/ratgeber/heckenschnitt-kosten-pro-meter" },
  ],
  "bodenleger-kosten-pro-qm": [
    { label: "Parkett abschleifen Kosten", href: "/ratgeber/parkett-abschleifen-kosten" },
    { label: "Parkett verlegen Kosten pro m²", href: "/ratgeber/parkett-verlegen-kosten-pro-qm" },
    { label: "Laminat verlegen Kosten pro m²", href: "/ratgeber/laminat-verlegen-kosten-pro-qm" },
    { label: "Vinylboden verlegen Kosten pro m²", href: "/ratgeber/vinylboden-verlegen-kosten-pro-qm" },
    { label: "Bodensanierung Kosten pro m²", href: "/ratgeber/boden-sanieren-kosten-pro-qm" },
    { label: "Parkett oder Vinyl vergleichen", href: "/ratgeber/bodenleger-parkett-oder-vinyl-kosten" },
  ],
  "trockenbau-kosten-pro-qm": [
    { label: "Trockenbauwand Kosten pro m²", href: "/ratgeber/trockenbauwand-kosten-pro-qm" },
    { label: "Verspachtelung Q4 Kosten pro m²", href: "/ratgeber/verspachtelung-q4-kosten-pro-qm" },
  ],
  "sanitaer-kosten": [
    { label: "Sanitärobjekte und Armaturen Kosten", href: "/ratgeber/sanitaerobjekte-bad-kosten" },
  ],
  "daemmung-kosten-pro-qm": [
    { label: "Fassadendämmung Kosten pro m²", href: "/ratgeber/fassadendaemmung-kosten-pro-qm" },
    { label: "Innendämmung Kosten pro m²", href: "/ratgeber/innendaemmung-kosten-pro-qm" },
    { label: "Zwischensparrendämmung Kosten pro m²", href: "/ratgeber/zwischensparrendaemmung-kosten-pro-qm" },
    { label: "Aufsparrendämmung Kosten pro m²", href: "/ratgeber/aufsparrendaemmung-kosten-pro-qm" },
    { label: "Aufsparren oder Zwischensparren vergleichen", href: "/ratgeber/daemmung-aufsparren-oder-zwischensparren-kosten" },
  ],
  "waermepumpe-kosten-2026": [
    { label: "Wärmepumpe Wartung Kosten", href: "/ratgeber/waermepumpe-wartung-kosten" },
    { label: "Luft-Wasser-Wärmepumpe Kosten", href: "/ratgeber/luft-wasser-waermepumpe-kosten" },
  ],
  "photovoltaik-kosten-2026": [
    { label: "Stromspeicher Kosten pro kWh", href: "/ratgeber/stromspeicher-kosten-pro-kwh" },
    { label: "Photovoltaik 5 kWp Kosten", href: "/ratgeber/photovoltaik-5-kwp-kosten" },
    { label: "Photovoltaik 10 kWp Kosten", href: "/ratgeber/photovoltaik-10-kwp-kosten" },
    { label: "Photovoltaik mit Speicher Kosten", href: "/ratgeber/photovoltaik-mit-speicher-kosten" },
    { label: "Photovoltaik 15 kWp Kosten", href: "/ratgeber/photovoltaik-15-kwp-kosten" },
  ],
  "fassade-sanieren-kosten": [
    { label: "Putzfassade Kosten pro m²", href: "/ratgeber/putzfassade-kosten-pro-qm" },
    { label: "Fassade streichen Kosten pro m²", href: "/ratgeber/fassade-streichen-kosten-pro-qm" },
    { label: "Klinkerfassade Kosten pro m²", href: "/ratgeber/klinkerfassade-kosten-pro-qm" },
    { label: "Fassadenrisse sanieren Kosten", href: "/ratgeber/fassadenrisse-sanieren-kosten-pro-qm" },
    { label: "Vorgehängte hinterlüftete Fassade Kosten", href: "/ratgeber/vorgehaengte-hinterlueftete-fassade-kosten-pro-qm" },
    { label: "WDVS oder VHF vergleichen", href: "/ratgeber/fassade-wdvs-oder-vhf-kosten" },
  ],
};

const catalogScenarioClusterLinks: Record<string, Array<{ label: string; href: string }>> = {
  "innenwand-mauern-kosten": [
    { label: "Bodenplatte Kosten pro m²", href: "/ratgeber/bodenplatte-kosten-pro-qm" },
    { label: "Kalksandstein-Mauerwerk Kosten", href: "/ratgeber/kalksandstein-mauerwerk-kosten-pro-qm" },
    { label: "Poroton-Mauerwerk Kosten", href: "/ratgeber/poroton-mauerwerk-kosten-pro-qm" },
    { label: "Porenbeton-Mauerwerk Kosten", href: "/ratgeber/porenbeton-mauerwerk-kosten-pro-qm" },
  ],
  "6-innentueren-austauschen-kosten": [
    { label: "Innentür einbauen Kosten", href: "/ratgeber/innentuer-einbauen-kosten" },
    { label: "Tür lackieren Kosten", href: "/ratgeber/tuer-lackieren-kosten" },
  ],
  "estrich-100-qm-kosten": [
    { label: "Zementestrich Kosten pro m²", href: "/ratgeber/zementestrich-kosten-pro-qm" },
    { label: "Trockenestrich Kosten pro m²", href: "/ratgeber/trockenestrich-kosten-pro-qm" },
    { label: "Anhydritestrich Kosten pro m²", href: "/ratgeber/anhydritestrich-kosten-pro-qm" },
    { label: "Gussasphaltestrich Kosten pro m²", href: "/ratgeber/gussasphaltestrich-kosten-pro-qm" },
    { label: "Sichtestrich Kosten pro m²", href: "/ratgeber/sichtestrich-kosten-pro-qm" },
    { label: "Zementestrich oder Anhydrit vergleichen", href: "/ratgeber/estrich-zement-oder-anhydrit-kosten" },
  ],
  "14-treppenstufen-renovieren-kosten": [
    { label: "Treppenrenovierung Holzstufen-System", href: "/ratgeber/treppenrenovierung-holzstufen-system-kosten" },
    { label: "Stufenüberbau + Geländer Kosten", href: "/ratgeber/treppen-stufenueberbau-gelaender-kosten" },
    { label: "Holztreppe schleifen Kosten", href: "/ratgeber/holztreppe-schleifen-kosten" },
    { label: "Betontreppe neuer Belag Kosten", href: "/ratgeber/betontreppe-neuer-belag-kosten" },
    { label: "Natursteintreppe schleifen Kosten", href: "/ratgeber/natursteintreppe-schleifen-kosten" },
  ],
  "kueche-10-qm-renovieren-kosten": [
    { label: "Küchenfronten erneuern Kosten", href: "/ratgeber/kuechenfronten-erneuern-kosten" },
    { label: "Küchenarbeitsplatte Kosten", href: "/ratgeber/kuechenarbeitsplatte-kosten" },
    { label: "Küchengeräte Kosten", href: "/ratgeber/kueche-elektrogeraete-kosten" },
    { label: "Einbauküche Kosten", href: "/ratgeber/einbaukueche-kosten" },
    { label: "Premium-Küche mit Umbau Kosten", href: "/ratgeber/premium-kueche-umbau-kosten" },
    { label: "Fliesenspiegel erneuern Kosten", href: "/ratgeber/fliesenspiegel-erneuern-kosten" },
  ],
};

function addClusterLinks<T extends { slug: string; related: Array<{ label: string; href: string }> }>(
  items: T[],
  links: Record<string, Array<{ label: string; href: string }>>,
) {
  return items.map((item) => {
    const combined = [...item.related, ...(links[item.slug] ?? [])];
    return {
      ...item,
      related: combined.filter((link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index),
    };
  });
}

const enrichedPrimaryGuides = addClusterLinks(primaryGuides, primaryClusterLinks);
const enrichedSecondaryGuides = addClusterLinks(secondaryGuides, secondaryClusterLinks);
const enrichedTertiaryGuides = addClusterLinks(tertiaryGuides, tertiaryClusterLinks);
const enrichedTradeGuides = addClusterLinks(tradeGuides, tradeClusterLinks);
const enrichedSpecialistGuides = addClusterLinks(specialistGuides, specialistClusterLinks);
const enrichedCatalogScenarioGuides = addClusterLinks(catalogScenarioGuides, catalogScenarioClusterLinks);

export const allGuides = [
  ...enrichedPrimaryGuides,
  ...enrichedSecondaryGuides,
  ...enrichedTertiaryGuides,
  ...enrichedTradeGuides,
  ...enrichedSpecialistGuides,
  ...opportunityGuides,
  ...secondaryOpportunityGuides,
  ...tertiaryOpportunityGuides,
  ...quaternaryOpportunityGuides,
  ...quinaryOpportunityGuides,
  ...comparisonGuides,
  ...scenarioGuides,
  ...enrichedCatalogScenarioGuides,
];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
