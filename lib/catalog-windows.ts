import {
  priceSources as insulationPriceSources,
  regions,
  renovationModel,
  services as insulationServices,
  type PriceItem as InsulationPriceItem,
  type Service as InsulationService,
} from "./catalog-insulation";

export const priceSources = {
  ...insulationPriceSources,
  myhammerFenstereinbau2026: {
    name: "MyHammer - Fenstereinbau Kosten 2026",
    url: "https://www.my-hammer.de/fenster-tueren/preisradar/was-kostet-fenster-einbauen",
    checkedAt: "29.08.2026",
  },
} as const;

type WindowSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<InsulationPriceItem, "sourceKey"> & { sourceKey: WindowSourceKey };
export type Service = Omit<InsulationService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = insulationServices.map((service) => {
  const insulationService = service as unknown as Service;

  if (service.slug === "fenster") {
    return {
      ...insulationService,
      description: "Aktuelle Richtwerte 2026 für Kunststoff-, Holz-, Aluminium- und Holz-Alu-Fenster, professionelle Montage, Altfenster-Ausbau und Entsorgung, Mauerdurchbrüche sowie komplette Fenstertausch-Projekte in Deutschland.",
      priceItems: [
        ...insulationService.priceItems,
        {
          name: "Fenstermontage durch Fachbetrieb",
          low: 200,
          high: 360,
          unit: "pro Fenster",
          note: "Typischer Montagebereich abhängig von Zeitaufwand, Einbausituation und regionalem Stundensatz",
          sourceKey: "aroundhomeFenster",
        },
        {
          name: "Fensterbauer Stundensatz",
          low: 50,
          high: 80,
          unit: "pro Stunde",
          note: "Orientierung für professionelle Montage- und Anpassungsarbeiten",
          sourceKey: "aroundhomeFenster",
        },
        {
          name: "10 neue Fenster inkl. Einbau",
          low: 6000,
          high: 13000,
          unit: "pro Projekt",
          note: "Projektspanne für zehn Fenster in einem Einfamilienhaus; Material, Verglasung und Zusatzausstattung beeinflussen den Endpreis",
          sourceKey: "aroundhomeFenster",
        },
        {
          name: "Neues Fenster mit Mauerdurchbruch",
          low: 1500,
          high: 2300,
          unit: "pro Fensteröffnung",
          note: "Beispiel für ein Kunststoff-Dreh-Kipp-Fenster inklusive Einbau und neuem Mauerdurchbruch; bei tragenden Wänden können Statikkosten hinzukommen",
          sourceKey: "aroundhomeFenster",
        },
        {
          name: "Kunststofffenster Standardgröße inkl. Einbau",
          low: 500,
          high: 600,
          unit: "pro Fenster",
          note: "Orientierung für ein Dreh-Kipp-Fenster etwa 1,20 × 1,40 m mit Zweifachverglasung",
          sourceKey: "aroundhomeFenster",
        },
        {
          name: "Altfenster ausbauen",
          low: 40,
          high: 40,
          unit: "pro Fenster",
          note: "Zusätzlicher Richtwert beim Fenstertausch vor dem Einbau des neuen Elements",
          sourceKey: "myhammerFenstereinbau2026",
        },
        {
          name: "Altfenster entsorgen",
          low: 20,
          high: 30,
          unit: "pro Fenster",
          note: "Entsorgungskosten zusätzlich zum Ausbau; abhängig von Betrieb und regionaler Entsorgung",
          sourceKey: "myhammerFenstereinbau2026",
        },
      ],
    };
  }

  return insulationService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
