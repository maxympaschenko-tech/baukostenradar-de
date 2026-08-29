import {
  priceSources as heatingPriceSources,
  regions,
  renovationModel,
  services as heatingServices,
  type PriceItem as HeatingPriceItem,
  type Service as HeatingService,
} from "./catalog-heating";

export const priceSources = {
  ...heatingPriceSources,
  myhammerFassadeVerputzen2026: {
    name: "MyHammer - Außenfassade verputzen Kosten 2026",
    url: "https://www.my-hammer.de/trockenbau-verputzen/preisradar/was-kostet-aussenfassade-verputzen",
    checkedAt: "29.08.2026",
  },
  myhammerFassadeStreichen2026: {
    name: "MyHammer - Fassade streichen Kosten 2026",
    url: "https://www.my-hammer.de/malerarbeiten-tapezieren/preisradar/was-kostet-fassade-streichen",
    checkedAt: "29.08.2026",
  },
  blauarbeitMauerwerkSanieren2026: {
    name: "Blauarbeit - Mauerwerk sanieren Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/mauerwerk-sanieren-kosten",
    checkedAt: "29.08.2026",
  },
  blauarbeitVerblendmauerwerk2026: {
    name: "Blauarbeit - Verblendmauerwerk Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/maurer/verblendmauerwerk",
    checkedAt: "29.08.2026",
  },
} as const;

type FacadeSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<HeatingPriceItem, "sourceKey"> & { sourceKey: FacadeSourceKey };
export type Service = Omit<HeatingService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = heatingServices.map((service) => {
  const heatingService = service as unknown as Service;

  if (service.slug === "fassade") {
    return {
      ...heatingService,
      description: "Aktuelle Richtwerte 2026 für Fassadenanstrich, Außenputz, Putzsanierung, Riss- und Fugensanierung, Klinker, Verblendmauerwerk, Reinigung, Gerüst und Fassadendämmung in Deutschland.",
      priceItems: [
        ...heatingService.priceItems,
        {
          name: "Außenfassade Standardputz inkl. Arbeit",
          low: 30,
          high: 60,
          unit: "pro m²",
          note: "Standard-Außenputz inklusive Arbeitsleistung; Gerüst und besondere Untergrundsanierung können zusätzlich anfallen",
          sourceKey: "myhammerFassadeVerputzen2026",
        },
        {
          name: "Mineralischer Fassadenputz",
          low: 14,
          high: 25,
          unit: "pro m²",
          sourceKey: "myhammerFassadeVerputzen2026",
        },
        {
          name: "Edelputz für Außenfassade",
          low: 30,
          high: 50,
          unit: "pro m²",
          sourceKey: "myhammerFassadeVerputzen2026",
        },
        {
          name: "Einfamilienhaus Fassade neu verputzen ohne Dämmung",
          low: 4100,
          high: 8600,
          unit: "pro Projekt",
          note: "MyHammer-Richtwert für eine typische Außenfassade ohne zusätzliche Wärmedämmung",
          sourceKey: "myhammerFassadeVerputzen2026",
        },
        {
          name: "Einfamilienhaus Fassade verputzen mit Dämmung",
          low: 6300,
          high: 14700,
          unit: "pro Projekt",
          note: "Projekt-Richtwert inklusive Dämm- und Verputzarbeiten; Umfang und Dämmstoff beeinflussen den Endpreis",
          sourceKey: "myhammerFassadeVerputzen2026",
        },
        {
          name: "Fassade streichen komplett inkl. Material und Arbeit",
          low: 30,
          high: 50,
          unit: "pro m²",
          note: "Kompletter Fassadenanstrich 2026; Gerüst kann je nach Angebot separat ausgewiesen werden",
          sourceKey: "myhammerFassadeStreichen2026",
        },
        {
          name: "Fassade 100 m² komplett streichen",
          low: 3450,
          high: 6660,
          unit: "pro Projekt",
          note: "MyHammer-Beispiel für rund 100 m² Fassadenfläche inklusive typischer Nebenpositionen",
          sourceKey: "myhammerFassadeStreichen2026",
        },
        {
          name: "Sichtmauerwerk Fugen auskratzen und neu verfugen",
          low: 25,
          high: 60,
          unit: "pro m²",
          note: "Arbeitslohn und übliches Material; Gerüst bei höher gelegenen Flächen zusätzlich berücksichtigen",
          sourceKey: "blauarbeitMauerwerkSanieren2026",
        },
        {
          name: "Risse im Fassadenmauerwerk verpressen",
          low: 50,
          high: 150,
          unit: "pro lfm Riss",
          note: "Injektionsverfahren; bei Setzungsrissen zuerst statische Ursache prüfen",
          sourceKey: "blauarbeitMauerwerkSanieren2026",
        },
        {
          name: "Beschädigte Fassadensteine einzeln ersetzen",
          low: 45,
          high: 65,
          unit: "pro Stunde Maurerarbeit",
          note: "Arbeitsrichtwert; Material, Gerüst und Zugänglichkeit kommen je nach Schaden hinzu",
          sourceKey: "blauarbeitMauerwerkSanieren2026",
        },
        {
          name: "Klinkerriemchen als Fassadenverblendung",
          low: 50,
          high: 120,
          unit: "pro m² inkl. Arbeit",
          note: "Geklebte Riemchen, auch für nachträgliche Fassadensanierung geeignet",
          sourceKey: "blauarbeitVerblendmauerwerk2026",
        },
        {
          name: "Verblendmauerwerk aus Klinker",
          low: 80,
          high: 180,
          unit: "pro m² inkl. Arbeit",
          note: "Eigenständige Vormauerschale; Gerüst, Anker, Steinformat und Fensterdetails beeinflussen den Preis",
          sourceKey: "blauarbeitVerblendmauerwerk2026",
        },
      ],
    };
  }

  return heatingService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
