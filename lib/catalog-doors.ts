import {
  priceSources as facadePriceSources,
  regions,
  renovationModel,
  services as facadeServices,
  type PriceItem as FacadePriceItem,
  type Service as FacadeService,
} from "./catalog-facade";

export const priceSources = {
  ...facadePriceSources,
  blauarbeitSchiebetuer2026: {
    name: "Blauarbeit - Schiebetür einbauen Kosten 2026",
    url: "https://ratgeber.blauarbeit.de/kosten-preise/schiebetuer-einbauen",
    checkedAt: "29.08.2026",
  },
} as const;

type DoorSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<FacadePriceItem, "sourceKey"> & { sourceKey: DoorSourceKey };
export type Service = Omit<FacadeService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = facadeServices.map((service) => {
  const facadeService = service as unknown as Service;

  if (service.slug === "tueren") {
    return {
      ...facadeService,
      description: "Aktuelle Richtwerte 2026 für Innentüren, Zargen, Haustüren, RC2-Sicherheitsausführungen, Glashaustüren, Seitenteile, Smart-Locks, Sondermaße, Ausbau alter Türen und Schiebetüren in Deutschland.",
      priceItems: [
        ...facadeService.priceItems,
        {
          name: "Glashaustür ohne Montage",
          low: 1500,
          high: 3800,
          unit: "pro Tür",
          note: "Einflügelige Glashaustür; Ausstattung, Verglasung und Sicherheitsniveau bestimmen den Endpreis",
          sourceKey: "aroundhomeHaustuer",
        },
        {
          name: "Kunststoff-Haustür RC2 inkl. Einbau",
          low: 2000,
          high: 2000,
          unit: "pro Tür",
          note: "Aroundhome-Beispiel 2026 für eine einflügelige Kunststoffhaustür mit Glaseinsätzen, Dreifachverglasung und RC2",
          sourceKey: "aroundhomeHaustuer",
        },
        {
          name: "Aluminium-Haustür RC2 mit zwei Seitenteilen inkl. Einbau",
          low: 4500,
          high: 4500,
          unit: "pro Türanlage",
          note: "Aroundhome-Beispiel 2026 für eine Aluminiumhaustür mit zwei verglasten Seitenteilen und RC2",
          sourceKey: "aroundhomeHaustuer",
        },
        {
          name: "Premium-Haustür Massivholz RC2 mit Seitenteil und Oberlicht inkl. Einbau",
          low: 7000,
          high: 7000,
          unit: "pro Türanlage",
          note: "Aroundhome-Beispiel 2026 für eine Massivholz-Haustür mit Seitenteil, Oberlicht, Sicherheitsglas und RC2",
          sourceKey: "aroundhomeHaustuer",
        },
        {
          name: "Elektronisches Schloss oder Türöffner für Haustür",
          low: 150,
          high: 800,
          unit: "pro Ausstattung ohne Montage",
          sourceKey: "aroundhomeHaustuer",
        },
        {
          name: "Fingerprint oder Motorschloss für Haustür",
          low: 900,
          high: 1500,
          unit: "pro Ausstattung ohne Montage",
          sourceKey: "aroundhomeHaustuer",
        },
        {
          name: "Alte Haustür ausbauen und entsorgen",
          low: 100,
          high: 400,
          unit: "pro Tür",
          note: "Zusatzkosten beim Haustürtausch; Anpassungen an Maueröffnung, Putz, Boden oder Fassade kommen gegebenenfalls hinzu",
          sourceKey: "aroundhomeHaustuer",
        },
        {
          name: "Sondermaß oder Überhöhe bei Zimmertür",
          low: 100,
          high: 300,
          unit: "Aufpreis pro Element",
          sourceKey: "blauarbeitTueren",
        },
        {
          name: "Eingemauerte alte Stahlzarge ausbauen",
          low: 50,
          high: 100,
          unit: "zusätzlich pro Zarge",
          note: "Typischer Zusatzaufwand bei Altbau-Stahlzargen; anschließende Putzreparaturen können separat anfallen",
          sourceKey: "blauarbeitTueren",
        },
        {
          name: "Schiebetür aus Glas Standard komplett einbauen",
          low: 675,
          high: 675,
          unit: "pro Tür",
          note: "Blauarbeit-Kostenbeispiel 2026: Anfahrt 55 €, sandgestrahlte Glastür 340 € und Montage 280 €",
          sourceKey: "blauarbeitSchiebetuer2026",
        },
      ],
    };
  }

  return facadeService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
