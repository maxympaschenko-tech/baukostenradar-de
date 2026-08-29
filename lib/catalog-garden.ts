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
  blauarbeitRollrasen: {
    name: "Blauarbeit - Rollrasen Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/rollrasen-kosten",
    checkedAt: "29.08.2026",
  },
  blauarbeitGaertner: {
    name: "Blauarbeit - Gärtner Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/gaertner-kosten",
    checkedAt: "29.08.2026",
  },
  myhammerEinfahrt: {
    name: "MyHammer - Einfahrt pflastern Kosten 2026",
    url: "https://www.my-hammer.de/garten-aussenbereich/preisradar/was-kostet-einfahrt-pflastern",
    checkedAt: "29.08.2026",
  },
  myhammerZaun: {
    name: "MyHammer - Zaunbau Kosten 2026",
    url: "https://www.my-hammer.de/garten-aussenbereich/preisradar/was-kostet-zaun-bauen",
    checkedAt: "29.08.2026",
  },
  myhammerBaum: {
    name: "MyHammer - Baum fällen Kosten 2026",
    url: "https://www.my-hammer.de/garten-aussenbereich/preisradar/was-kostet-baum-faellen",
    checkedAt: "29.08.2026",
  },
} as const;

type GardenSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<TradePriceItem, "sourceKey"> & { sourceKey: GardenSourceKey };
export type Service = Omit<TradeService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = tradeServices.map((service) => {
  const tradeService = service as unknown as Service;

  if (service.slug === "garten") {
    const refreshedPriceItems: PriceItem[] = tradeService.priceItems.map((item) => {
      if (item.name === "Rollrasen inkl. Vorbereitung") {
        return {
          ...item,
          low: 10,
          high: 25,
          unit: "pro m²",
          note: "Komplett vom Fachbetrieb inklusive Bodenvorbereitung, Verlegen, Anwalzen und Startdüngung",
          sourceKey: "blauarbeitRollrasen",
        };
      }
      if (item.name === "Gartenpflege") {
        return {
          ...item,
          low: 30,
          high: 50,
          unit: "pro Stunde",
          note: "Typischer Gärtner-Stundensatz 2026; qualifizierte GaLaBau-Arbeiten liegen meist höher",
          sourceKey: "blauarbeitGaertner",
        };
      }
      if (item.name === "Baumfällung mittelgroß inkl. Entsorgung") {
        return {
          ...item,
          low: 400,
          high: 1800,
          unit: "pro Baum",
          note: "Typischer Gesamtbereich; Höhe, Zugänglichkeit, Seilklettertechnik und Entsorgung bestimmen den Endpreis",
          sourceKey: "myhammerBaum",
        };
      }
      return item;
    });

    return {
      ...tradeService,
      description: "Aktuelle Richtwerte 2026 für Garten- und Landschaftsbau, Einfahrten, Pflasterarbeiten, Rollrasen, Hecken, Zäune, Sichtschutz, Gartenpflege, Baumschnitt und Baumfällung in Deutschland.",
      priceItems: [
        ...refreshedPriceItems,
        {
          name: "Garten- und Landschaftsbauer Stundensatz",
          low: 40,
          high: 60,
          unit: "pro Stunde",
          note: "Qualifizierte Arbeiten im Garten- und Landschaftsbau; Maschinen, Material und Entsorgung werden häufig zusätzlich berechnet",
          sourceKey: "blauarbeitGaertner",
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
          name: "Einfahrt Betonpflaster komplett",
          low: 110,
          high: 135,
          unit: "pro m²",
          note: "Gesamtrichtwert inklusive Pflaster, Unterbau, Verlegung und typischen Nebenarbeiten",
          sourceKey: "myhammerEinfahrt",
        },
        {
          name: "Einfahrt Natursteinpflaster komplett",
          low: 180,
          high: 240,
          unit: "pro m²",
          note: "Gesamtrichtwert für eine belastbare Einfahrt mit Naturstein inklusive typischer Vorarbeiten",
          sourceKey: "myhammerEinfahrt",
        },
        {
          name: "Einfahrt Aushub inkl. Entsorgung",
          low: 20,
          high: 32,
          unit: "pro m²",
          note: "Aushub plus typische Entsorgung vor Herstellung des tragfähigen Unterbaus",
          sourceKey: "myhammerEinfahrt",
        },
        {
          name: "Einfahrt Schotterunterbau",
          low: 22,
          high: 22,
          unit: "pro m²",
          note: "Orientierungswert für den tragfähigen Schotterunterbau",
          sourceKey: "myhammerEinfahrt",
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
          name: "Sichtschutzzaun Holz inkl. Montage",
          low: 60,
          high: 120,
          unit: "pro lfd. Meter",
          note: "Aktueller kompletter Richtwert aus Material und professioneller Montage",
          sourceKey: "myhammerZaun",
        },
        {
          name: "Sichtschutzzaun Kunststoff inkl. Montage",
          low: 120,
          high: 350,
          unit: "pro lfd. Meter",
          note: "Komplettpreis abhängig von Höhe, System und Fundamentierung",
          sourceKey: "myhammerZaun",
        },
        {
          name: "Gabionenzaun 1,80 m inkl. Montage",
          low: 180,
          high: 330,
          unit: "pro lfd. Meter",
          note: "Richtwert inklusive Material und Montage; Fundament und Geländesituation können den Preis beeinflussen",
          sourceKey: "gartenbauZaun",
        },
        {
          name: "Baumfällung je Meter Baumhöhe",
          low: 25,
          high: 40,
          unit: "pro Meter Baumhöhe",
          note: "Orientierungswert für normale Fällbedingungen; schwierige Standorte erfordern oft Seilklettertechnik oder Hebebühne",
          sourceKey: "myhammerBaum",
        },
        {
          name: "Baumrückschnitt",
          low: 150,
          high: 500,
          unit: "pro Baum",
          sourceKey: "myhammerBaum",
        },
        {
          name: "Kronenpflege",
          low: 200,
          high: 800,
          unit: "pro Baum",
          sourceKey: "myhammerBaum",
        },
        {
          name: "Baumfällgenehmigung",
          low: 25,
          high: 100,
          unit: "pro Antrag",
          note: "Kommunale Gebühren unterscheiden sich; in Einzelfällen können höhere Beträge anfallen",
          sourceKey: "myhammerBaum",
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
