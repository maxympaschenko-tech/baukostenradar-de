import {
  priceSources as stairPriceSources,
  regions,
  renovationModel,
  services as stairServices,
  type PriceItem as StairPriceItem,
  type Service as StairService,
} from "./catalog-stairs-current";

export const priceSources = {
  ...stairPriceSources,
  cleanInvoiceBalkon2026: {
    name: "Clean Invoice - Balkon sanieren Kosten 2026",
    url: "https://www.clean-invoice.com/wissen/allgemein/balkon-sanieren-kosten",
    checkedAt: "30.08.2026",
  },
  myhammerBalkonAbdichten2026: {
    name: "MyHammer - Balkon abdichten Kosten 2026",
    url: "https://www.my-hammer.de/daemmung-abdichtung/preisradar/was-kostet-balkon-abdichten",
    checkedAt: "30.08.2026",
  },
  blauarbeitBalkonFliesen2026: {
    name: "Blauarbeit - Balkon und Terrasse fliesen Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/balkon-terrasse-fliesen",
    checkedAt: "30.08.2026",
  },
} as const;

type BalconySourceKey = keyof typeof priceSources;
export type PriceItem = Omit<StairPriceItem, "sourceKey"> & { sourceKey: BalconySourceKey };
export type Service = Omit<StairService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = stairServices as unknown as Service[];

const balconyService: Service = {
  slug: "balkon",
  title: "Balkon sanieren Kosten 2026",
  shortTitle: "Balkon & Sanierung",
  description: "Aktuelle Richtwerte 2026 für Balkonsanierung, Balkonabdichtung, Betonsanierung, neuen Bodenbelag, Fliesen, Gefälle, Drainage und Balkongeländer in Deutschland.",
  unit: "m² / Meter / Projekt",
  icon: "▱",
  priceItems: [
    {
      name: "Balkon neuer Belag ohne Abdichtung",
      low: 50,
      high: 150,
      unit: "pro m² inkl. Material und Arbeit",
      note: "Nur Belagserneuerung bei intakter Abdichtung; Untergrundschäden separat prüfen",
      sourceKey: "cleanInvoiceBalkon2026",
    },
    {
      name: "Balkon Abdichtung plus neuer Belag",
      low: 150,
      high: 350,
      unit: "pro m² inkl. Material und Arbeit",
      note: "Sanierungsumfang mit erneuerter Abdichtung und neuem Belag; ohne umfassende Betonsanierung",
      sourceKey: "cleanInvoiceBalkon2026",
    },
    {
      name: "Balkonsanierung komplett inkl. Betonsanierung",
      low: 250,
      high: 500,
      unit: "pro m² inkl. Material und Arbeit",
      note: "Komplettsanierung inklusive typischer Betonreparaturen; Gerüst und neues Geländer separat prüfen",
      sourceKey: "cleanInvoiceBalkon2026",
    },
    {
      name: "Balkonsanierung komplett plus neues Geländer",
      low: 350,
      high: 650,
      unit: "pro m² inkl. Material und Arbeit",
      note: "Komplettsanierung inklusive neuem Geländer; Gerüst bei höher gelegenen Balkonen separat prüfen",
      sourceKey: "cleanInvoiceBalkon2026",
    },
    {
      name: "Balkon 8 m² komplett sanieren ohne Geländer",
      low: 2360,
      high: 4350,
      unit: "pro 8 m² Balkon",
      note: "Quellenbeispiel mit Rückbau, Betonsanierung, Flüssigkunststoff-Abdichtung, Feinsteinzeug, Entwässerung und Wandanschluss",
      sourceKey: "cleanInvoiceBalkon2026",
    },
    {
      name: "Balkon 7,5 m² abdichten",
      low: 1250,
      high: 1730,
      unit: "pro 7,5 m² Balkon",
      note: "MyHammer-Beispiel inklusive Rückbau des Belags, Untergrundvorbereitung, Flüssigkunststoff und Geländer-De-/Montage",
      sourceKey: "myhammerBalkonAbdichten2026",
    },
    {
      name: "Balkonabdichtung Flüssigkunststoff komplett",
      low: 125,
      high: 200,
      unit: "pro m² inkl. Material und Arbeit",
      note: "PU/PMMA-Abdichtung als professionelle Sanierungsorientierung; Detailanschlüsse und Untergrund beeinflussen den Preis",
      sourceKey: "cleanInvoiceBalkon2026",
    },
    {
      name: "Alten Balkonbelag entfernen und entsorgen",
      low: 30,
      high: 50,
      unit: "pro m² Arbeit",
      note: "Entfernen vorhandener Fliesen oder Beschichtungen inklusive üblicher Entsorgung",
      sourceKey: "myhammerBalkonAbdichten2026",
    },
    {
      name: "Balkon oder Terrasse fliesen inkl. Material",
      low: 85,
      high: 160,
      unit: "pro m²",
      note: "Frostsicherer Außenbelag inklusive Material und Fachverlegung; Untergrundzustand und Verlegeart beeinflussen den Endpreis",
      sourceKey: "blauarbeitBalkonFliesen2026",
    },
    {
      name: "Gefälleestrich Balkon herstellen",
      low: 20,
      high: 40,
      unit: "pro m²",
      note: "Zusatzposition, wenn das erforderliche Gefälle vor Abdichtung oder Belag neu hergestellt werden muss",
      sourceKey: "blauarbeitBalkonFliesen2026",
    },
    {
      name: "Drainagematte Balkon verlegen",
      low: 10,
      high: 20,
      unit: "pro m²",
      note: "Zusätzliche Drainageschicht unter geeignetem Außenbelag",
      sourceKey: "blauarbeitBalkonFliesen2026",
    },
    {
      name: "Balkongeländer Aluminium inkl. Montage",
      low: 150,
      high: 300,
      unit: "pro lfd. Meter",
      sourceKey: "cleanInvoiceBalkon2026",
    },
    {
      name: "Balkongeländer Edelstahl inkl. Montage",
      low: 200,
      high: 350,
      unit: "pro lfd. Meter",
      sourceKey: "cleanInvoiceBalkon2026",
    },
    {
      name: "Balkongeländer Glas inkl. Montage",
      low: 350,
      high: 800,
      unit: "pro lfd. Meter",
      note: "Pfostensystem laut Quellenorientierung; Glasart, Befestigung und Sondermaße beeinflussen den Endpreis",
      sourceKey: "cleanInvoiceBalkon2026",
    },
  ],
};

export const services: Service[] = [...inheritedServices, balconyService];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
