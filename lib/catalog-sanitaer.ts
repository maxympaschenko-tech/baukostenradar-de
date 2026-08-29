import {
  priceSources as doorPriceSources,
  regions,
  renovationModel,
  services as doorServices,
  type PriceItem as DoorPriceItem,
  type Service as DoorService,
} from "./catalog-doors";

export const priceSources = {
  ...doorPriceSources,
  blauarbeitToilette2026: {
    name: "Blauarbeit - Toilette einbauen Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/toilette-einbauen-lassen",
    checkedAt: "29.08.2026",
  },
  blauarbeitBadSanitaer2026: {
    name: "Blauarbeit - Bad, Küche & Sanitär 2026",
    url: "https://ratgeber.blauarbeit.de/bad-und-sanitaer",
    checkedAt: "29.08.2026",
  },
  myhammerDuschkabine2026: {
    name: "MyHammer - Duschkabine einbauen Kosten 2026",
    url: "https://www.my-hammer.de/badezimmer/preisradar/was-kostet-duschkabine-einbauen",
    checkedAt: "29.08.2026",
  },
} as const;

type SanitaerSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<DoorPriceItem, "sourceKey"> & { sourceKey: SanitaerSourceKey };
export type Service = Omit<DoorService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = doorServices.map((service) => {
  const doorService = service as unknown as Service;

  if (service.slug === "sanitaer") {
    return {
      ...doorService,
      description: "Aktuelle Sanitär-Kosten 2026 für Installateur, WC-Tausch, Dusch-WC, Dusche, Duschkabine, Badewanne, Armaturen, Rohrarbeiten und typische Umbauten im Badezimmer in Deutschland.",
      priceItems: [
        ...doorService.priceItems,
        {
          name: "Stand-WC 1:1 tauschen inkl. Keramik",
          low: 300,
          high: 700,
          unit: "pro WC komplett",
          note: "Inklusive neuem Standard-WC, Demontage und Montage; Anschlussanpassungen können zusätzlich anfallen",
          sourceKey: "blauarbeitToilette2026",
        },
        {
          name: "Stand-WC mit neuem Aufputzspülkasten tauschen",
          low: 450,
          high: 900,
          unit: "pro WC komplett",
          sourceKey: "blauarbeitToilette2026",
        },
        {
          name: "Wand-WC tauschen bei vorhandenem Vorwandelement",
          low: 500,
          high: 900,
          unit: "pro WC komplett",
          sourceKey: "blauarbeitToilette2026",
        },
        {
          name: "Dusch-WC einbauen",
          low: 1500,
          high: 5000,
          unit: "pro WC komplett",
          note: "Je nach Modell, Elektroanschluss und vorhandener Sanitärinstallation",
          sourceKey: "blauarbeitToilette2026",
        },
        {
          name: "Bodengleiche Dusche inkl. Abdichtung Ablauf und Verfliesung",
          low: 2500,
          high: 5500,
          unit: "pro Dusche",
          note: "Komplett-Richtwert inklusive notwendigem Gefälle und Abdichtung; Bodenaufbau und Leitungsführung beeinflussen den Preis",
          sourceKey: "blauarbeitBadSanitaer2026",
        },
        {
          name: "Klassische Duschwanne komplett einbauen",
          low: 1200,
          high: 2800,
          unit: "pro Dusche",
          sourceKey: "blauarbeitBadSanitaer2026",
        },
        {
          name: "Badewanne durch Duschkabine ersetzen komplett",
          low: 2400,
          high: 3140,
          unit: "pro Umbau",
          note: "MyHammer-Beispiel 2026 inklusive Duschkabine, Armaturen, Fliesenmaterial, Ausbau der Wanne, Einbau, Verfliesen und Nacharbeiten",
          sourceKey: "myhammerDuschkabine2026",
        },
        {
          name: "WC oder Dusche versetzen mit neuer Leitungsführung",
          low: 2000,
          high: 5000,
          unit: "Aufpreis pro Umbau",
          note: "Typischer Aufpreis bei Grundrissänderung und Neuverlegung von Wasser- und Abwasserleitungen",
          sourceKey: "blauarbeitBadSanitaer2026",
        },
      ],
    };
  }

  return doorService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
