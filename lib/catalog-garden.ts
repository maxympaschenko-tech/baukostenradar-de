import {
  priceSources as tradePriceSources,
  regions,
  renovationModel,
  services as tradeServices,
  type PriceItem as TradePriceItem,
  type Service as TradeService,
} from "./catalog-trades";

export const priceSources = {
  ...tradePriceSources,
  handwerkerGarten: {
    name: "HandwerkerMatch - Garten anlegen Kosten 2026",
    url: "https://www.handwerkermatch.de/ratgeber/garten-anlegen-kosten",
    checkedAt: "29.08.2026",
  },
  gartenbauZaun: {
    name: "Gartenbau.org - Gartenzaun Kosten 2026",
    url: "https://www.gartenbau.org/magazin/gartenzaun-kosten-202423595",
    checkedAt: "29.08.2026",
  },
  kostenfinderPflaster: {
    name: "KostenFinder - Pflasterarbeiten Kosten 2026",
    url: "https://www.kostenfinder.com/ratgeber/pflasterarbeiten-kosten",
    checkedAt: "29.08.2026",
  },
} as const;

type GardenSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<TradePriceItem, "sourceKey"> & { sourceKey: GardenSourceKey };
export type Service = Omit<TradeService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = tradeServices.map((service) => {
  const tradeService = service as unknown as Service;

  if (service.slug === "garten") {
    return {
      ...tradeService,
      description: "Aktuelle Richtwerte 2026 für Garten- und Landschaftsbau, Pflasterarbeiten, Rasen, Hecken, Zäune, Sichtschutz, Gabionen, Gartenpflege und Baumfällung in Deutschland.",
      priceItems: [
        ...tradeService.priceItems,
        {
          name: "Garten- und Landschaftsbauer Stundensatz",
          low: 40,
          high: 65,
          unit: "pro Stunde",
          note: "Typischer Richtwert 2026 für Garten- und Landschaftsbau; Region, Maschinen- und Materialeinsatz können den Verrechnungssatz erhöhen",
          sourceKey: "handwerkerGarten",
        },
        {
          name: "Rasen neu anlegen mit Saat",
          low: 8,
          high: 20,
          unit: "pro m²",
          note: "Richtwert für Rasenneuanlage; umfangreiche Erdarbeiten und Bodenverbesserung können zusätzlich anfallen",
          sourceKey: "handwerkerGarten",
        },
        {
          name: "Hecke pflanzen",
          low: 25,
          high: 70,
          unit: "pro lfd. Meter",
          note: "Je nach Pflanzenart, Pflanzgröße, Boden und notwendiger Vorbereitung",
          sourceKey: "handwerkerGarten",
        },
        {
          name: "Betonpflaster inkl. Unterbau verlegen",
          low: 70,
          high: 160,
          unit: "pro m²",
          note: "Komplettrichtwert inklusive Unterbau und Verlegung für typische Betonsteine",
          sourceKey: "kostenfinderPflaster",
        },
        {
          name: "Klinkerpflaster inkl. Unterbau verlegen",
          low: 110,
          high: 170,
          unit: "pro m²",
          sourceKey: "kostenfinderPflaster",
        },
        {
          name: "Granitpflaster inkl. Unterbau verlegen",
          low: 130,
          high: 200,
          unit: "pro m²",
          sourceKey: "kostenfinderPflaster",
        },
        {
          name: "Natursteinpflaster inkl. Unterbau verlegen",
          low: 150,
          high: 240,
          unit: "pro m²",
          note: "Materialart, Format und Verlegemuster beeinflussen den Endpreis deutlich",
          sourceKey: "kostenfinderPflaster",
        },
        {
          name: "Maschendrahtzaun 80 cm inkl. Montage",
          low: 18,
          high: 45,
          unit: "pro lfd. Meter",
          note: "Aus 2026-Beispielwerten für 10 Meter Zaunlänge abgeleiteter Richtwert",
          sourceKey: "gartenbauZaun",
        },
        {
          name: "Sichtschutzzaun Holz 1,80 m inkl. Montage",
          low: 140,
          high: 210,
          unit: "pro lfd. Meter",
          note: "Richtwert inklusive Material und Montage für etwa 1,80 Meter Höhe",
          sourceKey: "gartenbauZaun",
        },
        {
          name: "Gabionenzaun 1,80 m inkl. Montage",
          low: 180,
          high: 330,
          unit: "pro lfd. Meter",
          note: "Richtwert inklusive Material und Montage; Fundament und Geländesituation können den Preis beeinflussen",
          sourceKey: "gartenbauZaun",
        },
      ],
    };
  }

  return tradeService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
