import {
  priceSources as basePriceSources,
  regions,
  renovationModel,
  services as baseServices,
  type PriceItem as BasePriceItem,
  type Service as BaseService,
} from "./pricing";

export const priceSources = {
  ...basePriceSources,
  d24TuerenFensterbauer: {
    name: "Dienstleistungen24 - Türen- und Fensterbauer",
    url: "https://dienstleistungen24.de/tueren-fensterbauer/",
    checkedAt: "August 2026",
  },
  d24Maler: {
    name: "Dienstleistungen24 - Malerarbeiten Kosten 2026",
    url: "https://dienstleistungen24.de/malerarbeiten-kosten/",
    checkedAt: "August 2026",
  },
  blauarbeitEstrich: {
    name: "Blauarbeit - Estrich Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/estrich-verlegen-kosten",
    checkedAt: "29.07.2026",
  },
  blauarbeitMaurer: {
    name: "Blauarbeit - Maurer Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/maurer-kosten",
    checkedAt: "27.07.2026",
  },
  cleanInvoiceMaurer: {
    name: "Clean Invoice - Maurer Kosten 2026",
    url: "https://www.clean-invoice.com/maurer/kosten-und-kalkulation-maurer",
    checkedAt: "11.02.2026",
  },
  handwerksratgeberTreppen: {
    name: "Handwerksratgeber - Treppe renovieren Kosten 2026",
    url: "https://handwerksratgeber.de/treppe-renovieren-kosten-2026-preise-methoden-spartipps/",
    checkedAt: "31.07.2026",
  },
  handwerkerKueche: {
    name: "Handwerker Kontakte - Küche renovieren 2026",
    url: "https://handwerker-kontakte.de/de/ratgeber/kueche-renovieren-kosten",
    checkedAt: "20.03.2026",
  },
  co2Fenster: {
    name: "co2online - Fenster tauschen 2026",
    url: "https://www.co2online.de/energie-sparen/heizenergie-sparen/lueften-lueftungsanlagen-fenster/fenster-tauschen/",
    checkedAt: "29.08.2026",
  },
  aroundhomeFenster: {
    name: "Aroundhome - Fenster Preise 2026",
    url: "https://www.aroundhome.de/fenster/preise-preisvergleich/",
    checkedAt: "29.08.2026",
  },
} as const;

type CatalogSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<BasePriceItem, "sourceKey"> & { sourceKey: CatalogSourceKey };
export type Service = Omit<BaseService, "priceItems"> & { priceItems: PriceItem[] };
export type CatalogPriceItem = PriceItem;
export type CatalogService = Service;

export const extraServices: Service[] = [
  {
    slug: "tueren",
    title: "Türen Kosten 2026",
    shortTitle: "Türen",
    description: "Aktuelle Richtwerte für Innentüren, Zargen, Haustüren und das Aufarbeiten vorhandener Türen in Deutschland.",
    unit: "Tür / Stück",
    icon: "▯",
    priceItems: [
      { name: "Innentür einbauen inkl. Zarge", low: 250, high: 600, unit: "pro Tür", note: "Standardausführung", sourceKey: "d24Preisspiegel" },
      { name: "Haustür Kunststoff inkl. Montage", low: 1500, high: 3500, unit: "pro Tür", sourceKey: "d24TuerenFensterbauer" },
      { name: "Haustür Holz/Alu RC2 inkl. Montage", low: 3500, high: 8500, unit: "pro Tür", note: "Sicherheitsausführung", sourceKey: "d24TuerenFensterbauer" },
      { name: "Tür lackieren mit Zarge", low: 170, high: 250, unit: "pro Stück", sourceKey: "d24Maler" },
    ],
  },
  {
    slug: "estrich",
    title: "Estrich Kosten 2026",
    shortTitle: "Estrich",
    description: "Kosten für Zementestrich, Anhydritestrich, Trockenestrich, Gussasphalt und Sichtestrich pro Quadratmeter vergleichen.",
    unit: "m²",
    icon: "▱",
    priceItems: [
      { name: "Zementestrich komplett", low: 25, high: 50, unit: "pro m²", note: "Kompletter Aufbau mit Dämmung, Randstreifen und Einbau", sourceKey: "blauarbeitEstrich" },
      { name: "Calciumsulfat- / Anhydritestrich", low: 28, high: 55, unit: "pro m²", sourceKey: "blauarbeitEstrich" },
      { name: "Trockenestrich", low: 30, high: 60, unit: "pro m²", sourceKey: "blauarbeitEstrich" },
      { name: "Gussasphaltestrich", low: 40, high: 70, unit: "pro m²", sourceKey: "blauarbeitEstrich" },
      { name: "Sichtestrich", low: 90, high: 300, unit: "pro m²", sourceKey: "blauarbeitEstrich" },
    ],
  },
  {
    slug: "maurer",
    title: "Maurer Kosten 2026",
    shortTitle: "Maurerarbeiten",
    description: "Stundensätze und Richtpreise für Mauerwerk, Innenwände, Klinker und Bodenplatten in Deutschland.",
    unit: "m² / Stunde",
    icon: "▦",
    priceItems: [
      { name: "Maurer Stundensatz", low: 45, high: 65, unit: "pro Stunde", sourceKey: "blauarbeitMaurer" },
      { name: "Mauerarbeiten fertige Wand", low: 60, high: 150, unit: "pro m² inkl. Material und Arbeit", sourceKey: "blauarbeitMaurer" },
      { name: "Kalksandstein-Mauerwerk", low: 60, high: 100, unit: "pro m²", sourceKey: "cleanInvoiceMaurer" },
      { name: "Poroton-Mauerwerk", low: 70, high: 120, unit: "pro m²", sourceKey: "cleanInvoiceMaurer" },
      { name: "Porenbeton-Mauerwerk", low: 55, high: 90, unit: "pro m²", sourceKey: "cleanInvoiceMaurer" },
      { name: "Klinker-Verblendmauerwerk", low: 90, high: 160, unit: "pro m²", sourceKey: "cleanInvoiceMaurer" },
      { name: "Bodenplatte Standard", low: 70, high: 120, unit: "pro m²", note: "ca. 20 cm, bewehrt", sourceKey: "cleanInvoiceMaurer" },
    ],
  },
  {
    slug: "treppen",
    title: "Treppen Kosten 2026",
    shortTitle: "Treppen",
    description: "Richtwerte für Treppenrenovierung, Holztreppen, Betontreppen, Naturstein und Stufenaufarbeitung vergleichen.",
    unit: "Treppe / Stufe",
    icon: "⌁",
    priceItems: [
      { name: "Treppenrenovierung Holzstufen-System", low: 3000, high: 8000, unit: "pro Treppe", sourceKey: "d24Preisspiegel" },
      { name: "Holztreppe schleifen und versiegeln", low: 800, high: 2500, unit: "pro Treppe", sourceKey: "handwerksratgeberTreppen" },
      { name: "Holztreppe Stufenüberbau + Geländer", low: 2650, high: 7300, unit: "pro Treppe", sourceKey: "handwerksratgeberTreppen" },
      { name: "Betontreppe mit neuem Belag", low: 1500, high: 4500, unit: "pro Treppe", sourceKey: "handwerksratgeberTreppen" },
      { name: "Natursteintreppe schleifen und polieren", low: 1000, high: 3000, unit: "pro Treppe", sourceKey: "handwerksratgeberTreppen" },
      { name: "Holzstufe schleifen und versiegeln", low: 30, high: 60, unit: "pro Stufe", sourceKey: "handwerksratgeberTreppen" },
    ],
  },
  {
    slug: "kueche",
    title: "Küche renovieren Kosten 2026",
    shortTitle: "Küchenrenovierung",
    description: "Kosten für Küchenrenovierung, Fronten, Arbeitsplatte, Geräte, Fliesenspiegel und komplette Einbauküchen vergleichen.",
    unit: "Projekt / m²",
    icon: "▰",
    priceItems: [
      { name: "Küchen-Renovierung ohne Möbel", low: 800, high: 1500, unit: "pro m² Küchenfläche", note: "Boden, Wand und Anschlüsse", sourceKey: "handwerkerSanierung" },
      { name: "Küchenfronten austauschen oder lackieren", low: 1500, high: 4000, unit: "pro Küche", sourceKey: "handwerkerKueche" },
      { name: "Neue Arbeitsplatte", low: 500, high: 3000, unit: "pro Küche", note: "stark materialabhängig", sourceKey: "handwerkerKueche" },
      { name: "Neue Elektrogeräte", low: 2000, high: 6000, unit: "pro Küche", sourceKey: "handwerkerKueche" },
      { name: "Fliesenspiegel erneuern", low: 800, high: 2500, unit: "pro Küche", sourceKey: "handwerkerKueche" },
      { name: "Komplett neue Einbauküche", low: 5000, high: 25000, unit: "pro Küche", sourceKey: "handwerkerKueche" },
      { name: "Premium-Küche mit Umbau", low: 15000, high: 40000, unit: "pro Küche", note: "Quelle nennt 40.000 € und mehr als mögliche Obergrenze", sourceKey: "handwerkerKueche" },
    ],
  },
];

const enrichedBaseServices: Service[] = baseServices.map((service) => {
  const catalogService = service as unknown as Service;

  if (service.slug !== "fenster") return catalogService;

  return {
    ...catalogService,
    description: "Aktuelle Richtwerte für neue Fenster, Zwei- und Dreifachverglasung, Rahmenmaterialien und professionelle Montage in Deutschland.",
    priceItems: [
      ...catalogService.priceItems,
      {
        name: "Standardfenster inkl. Einbau",
        low: 500,
        high: 1500,
        unit: "pro Fenster",
        note: "Grobe Orientierung für ein Standardfenster inklusive fachgerechtem Einbau",
        sourceKey: "co2Fenster",
      },
      {
        name: "Kunststofffenster",
        low: 200,
        high: 390,
        unit: "pro m² Fensterfläche",
        note: "Material- und Flächenorientierung; Montage separat kalkulieren",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Holzfenster",
        low: 300,
        high: 500,
        unit: "pro m² Fensterfläche",
        note: "Material- und Flächenorientierung; Montage separat kalkulieren",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Aluminiumfenster",
        low: 300,
        high: 600,
        unit: "pro m² Fensterfläche",
        note: "Material- und Flächenorientierung; Montage separat kalkulieren",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Holz-Alu-Fenster",
        low: 700,
        high: 1200,
        unit: "pro m² Fensterfläche",
        note: "Material- und Flächenorientierung; Montage separat kalkulieren",
        sourceKey: "aroundhomeFenster",
      },
    ],
  };
});

const baseServiceSlugs = new Set(enrichedBaseServices.map((service) => service.slug));
const uniqueExtraServices = extraServices.filter((service) => !baseServiceSlugs.has(service.slug));

export const services: Service[] = [
  ...enrichedBaseServices,
  ...uniqueExtraServices,
];

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
