import {
  priceSources as windowPriceSources,
  regions,
  renovationModel,
  services as windowServices,
  type PriceItem as WindowPriceItem,
  type Service as WindowService,
} from "./catalog-windows";

export const priceSources = {
  ...windowPriceSources,
  myhammerDachdecken2026: {
    name: "MyHammer - Dach neu decken Kosten 2026",
    url: "https://www.my-hammer.de/dacharbeiten/preisradar/was-kostet-dach-decken",
    checkedAt: "29.08.2026",
  },
  myhammerDachsanierung2026: {
    name: "MyHammer - Dachsanierung Kosten 2026",
    url: "https://www.my-hammer.de/dacharbeiten/preisradar/was-kostet-dachsanierung",
    checkedAt: "29.08.2026",
  },
  myhammerDachstuhl2026: {
    name: "MyHammer - Dachstuhl Kosten 2026",
    url: "https://www.my-hammer.de/dacharbeiten/preisradar/was-kostet-dachstuhl-bauen",
    checkedAt: "29.08.2026",
  },
  blauarbeitDachdecken2026: {
    name: "Blauarbeit - Dach neu decken Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/dach-neu-decken-kosten",
    checkedAt: "29.08.2026",
  },
} as const;

type RoofSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<WindowPriceItem, "sourceKey"> & { sourceKey: RoofSourceKey };
export type Service = Omit<WindowService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = windowServices.map((service) => {
  const windowService = service as unknown as Service;

  if (service.slug === "dachsanierung") {
    return {
      ...windowService,
      description: "Aktuelle Richtwerte 2026 für Neueindeckung nach Dachmaterial, energetische Dachsanierung, Flachdach, Dachstuhl, Rückbau alter Eindeckung, Dachentwässerung, Dachfenster und typische Komplettprojekte in Deutschland.",
      priceItems: [
        ...windowService.priceItems,
        {
          name: "Tonziegel neu decken inkl. Material und Arbeit",
          low: 65,
          high: 120,
          unit: "pro m² Dachfläche",
          sourceKey: "myhammerDachdecken2026",
        },
        {
          name: "Betondachsteine neu decken inkl. Material und Arbeit",
          low: 60,
          high: 110,
          unit: "pro m² Dachfläche",
          sourceKey: "myhammerDachdecken2026",
        },
        {
          name: "Schieferdach neu decken",
          low: 120,
          high: 250,
          unit: "pro m² inkl. Material und Arbeit",
          sourceKey: "myhammerDachdecken2026",
        },
        {
          name: "Metalldach Aluminium oder Zink neu decken",
          low: 120,
          high: 220,
          unit: "pro m² inkl. Material und Arbeit",
          sourceKey: "myhammerDachdecken2026",
        },
        {
          name: "Bitumen- oder Kunststoffbahnen eindecken",
          low: 50,
          high: 100,
          unit: "pro m² inkl. Material und Arbeit",
          sourceKey: "myhammerDachdecken2026",
        },
        {
          name: "Alte Dacheindeckung abtragen",
          low: 20,
          high: 35,
          unit: "pro m² Dachfläche",
          note: "Rückbau vor der Neueindeckung; Entsorgungsart und Material können den Endpreis beeinflussen",
          sourceKey: "myhammerDachdecken2026",
        },
        {
          name: "Dachentwässerung mit Rinnen und Fallrohren erneuern",
          low: 20,
          high: 40,
          unit: "pro lfd. Meter",
          note: "Richtwert inklusive typischer Montage",
          sourceKey: "myhammerDachdecken2026",
        },
        {
          name: "Dachstuhl neu bauen",
          low: 60,
          high: 100,
          unit: "pro m² Dachfläche",
          note: "Richtwert für neue tragende Holzkonstruktion; komplexe Dachformen können höher liegen",
          sourceKey: "myhammerDachstuhl2026",
        },
        {
          name: "Dachstuhl sanieren",
          low: 50,
          high: 80,
          unit: "pro m² Dachfläche",
          note: "Richtwert für Sanierung der vorhandenen Tragkonstruktion ohne vollständigen Neubau",
          sourceKey: "myhammerDachstuhl2026",
        },
        {
          name: "Dach komplett sanieren inkl. Dachstuhl",
          low: 400,
          high: 600,
          unit: "pro m² Dachfläche",
          note: "Komplettsanierung mit Dachstuhl, Dämmung und Eindeckung",
          sourceKey: "myhammerDachsanierung2026",
        },
        {
          name: "Flachdach komplett sanieren",
          low: 60,
          high: 200,
          unit: "pro m² Dachfläche",
          note: "Je nach Abdichtung, Dämmung, Untergrundzustand und Entwässerung",
          sourceKey: "myhammerDachsanierung2026",
        },
        {
          name: "Dach 150 m² neu decken und dämmen",
          low: 17250,
          high: 31500,
          unit: "pro Projekt",
          note: "Beispielbudget für 150 m² mit Standard-Eindeckung sowie Dämmung und kleineren Ausbesserungen",
          sourceKey: "myhammerDachdecken2026",
        },
        {
          name: "Reetdach neu decken",
          low: 180,
          high: 350,
          unit: "pro m² inkl. Material und Arbeit",
          note: "Spezialisierte handwerkliche Ausführung mit deutlich höherem Arbeitsanteil",
          sourceKey: "blauarbeitDachdecken2026",
        },
      ],
    };
  }

  return windowService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
