import {
  priceSources as gardenPriceSources,
  regions,
  renovationModel,
  services as gardenServices,
  type PriceItem as GardenPriceItem,
  type Service as GardenService,
} from "./catalog-garden";

export const priceSources = {
  ...gardenPriceSources,
  myhammerHausabriss: {
    name: "MyHammer - Hausabriss Kosten 2026",
    url: "https://www.my-hammer.de/abriss-entsorgung/preisradar/was-kosten-abbrucharbeiten",
    checkedAt: "29.08.2026",
  },
  myhammerBauschutt: {
    name: "MyHammer - Bauschutt entsorgen Kosten 2026",
    url: "https://www.my-hammer.de/abriss-entsorgung/preisradar/was-kostet-bauschutt-entsorgen",
    checkedAt: "29.08.2026",
  },
  containerhelferHausabriss: {
    name: "Containerhelfer - Hausabriss Kosten 2026",
    url: "https://containerhelfer.de/de/abbruch/wissen/hausabriss-kosten-preise-faktoren",
    checkedAt: "29.08.2026",
  },
} as const;

type DemolitionSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<GardenPriceItem, "sourceKey"> & { sourceKey: DemolitionSourceKey };
export type Service = Omit<GardenService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = gardenServices.map((service) => {
  const gardenService = service as unknown as Service;

  if (service.slug === "abriss-entsorgung") {
    const refreshedPriceItems: PriceItem[] = gardenService.priceItems.map((item) =>
      item.name === "Einfamilienhaus komplett abreißen"
        ? {
            ...item,
            low: 10000,
            high: 30000,
            unit: "pro Haus inkl. Entsorgung",
            note: "Aktueller 2026-Richtwert für ein typisches Einfamilienhaus; Keller, Schadstoffe und schwierige Zufahrt erhöhen die Kosten",
            sourceKey: "myhammerHausabriss",
          }
        : item,
    );

    return {
      ...gardenService,
      description: "Aktuelle Richtwerte 2026 für Hausabriss, Abbruch mit Keller, Entkernung, Schadstoffprüfung, Genehmigung sowie Bauschutt- und Baumischabfallentsorgung in Deutschland.",
      priceItems: [
        ...refreshedPriceItems,
        {
          name: "Hausabriss Standard je Quadratmeter",
          low: 50,
          high: 150,
          unit: "pro m² Wohnfläche",
          note: "Typischer 2026-Richtwert; schwierige Bedingungen oder Schadstoffe können bis etwa 200 € pro m² führen",
          sourceKey: "myhammerHausabriss",
        },
        {
          name: "Hausabriss mit Keller",
          low: 150,
          high: 250,
          unit: "pro m² Wohnfläche",
          note: "Kellerabbruch, zusätzlicher Aushub und höhere Entsorgungsmengen verteuern den Rückbau deutlich",
          sourceKey: "myhammerHausabriss",
        },
        {
          name: "Hausabriss mit Schadstoffbelastung",
          low: 150,
          high: 250,
          unit: "pro m² Wohnfläche",
          note: "Orientierung für belastete Gebäude; Art und Umfang von Asbest, KMF, PCB oder anderen Schadstoffen sind entscheidend",
          sourceKey: "containerhelferHausabriss",
        },
        {
          name: "Entkernung und Vorarbeiten",
          low: 20,
          high: 40,
          unit: "pro m²",
          note: "Typische Vorarbeiten wie Ausbau von Türen, Fenstern, Bodenbelägen und Einbauten vor dem maschinellen Abbruch",
          sourceKey: "containerhelferHausabriss",
        },
        {
          name: "Schadstoffgutachten vor Abriss",
          low: 500,
          high: 2000,
          unit: "pro Gutachten",
          note: "Besonders bei älteren Gebäuden wichtig; Umfang der Probenahme beeinflusst den Preis",
          sourceKey: "containerhelferHausabriss",
        },
        {
          name: "Abrissgenehmigung oder Anzeige",
          low: 200,
          high: 1500,
          unit: "pro Projekt",
          note: "Je nach Bundesland, Kommune und Gebäude kann eine Genehmigung, Anzeige oder zusätzliche Dokumentation erforderlich sein",
          sourceKey: "containerhelferHausabriss",
        },
        {
          name: "Bauschutt entsorgen",
          low: 30,
          high: 60,
          unit: "pro m³",
          note: "Richtwert für sortenreinen Bauschutt auf der Deponie; Transport und Container können separat anfallen",
          sourceKey: "myhammerBauschutt",
        },
        {
          name: "Bauschuttcontainer 5 Kubikmeter komplett",
          low: 350,
          high: 600,
          unit: "pro Container",
          note: "Typischer Gesamtpreis für 5 m³ reinen Bauschutt inklusive Miete, Transport und Entsorgung",
          sourceKey: "myhammerBauschutt",
        },
        {
          name: "Baumischabfallcontainer 5 Kubikmeter komplett",
          low: 380,
          high: 650,
          unit: "pro Container",
          note: "Typischer Gesamtpreis für 5 m³ Baumischabfall inklusive Miete, Transport und Entsorgung",
          sourceKey: "myhammerBauschutt",
        },
        {
          name: "Bauabfall Kombisack 1 Kubikmeter",
          low: 80,
          high: 100,
          unit: "pro Sack",
          note: "Alternative für kleinere Mengen Bauabfall, wenn kein größerer Container erforderlich ist",
          sourceKey: "myhammerBauschutt",
        },
      ],
    };
  }

  return gardenService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
