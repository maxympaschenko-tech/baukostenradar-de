import {
  priceSources as kellerbauPriceSources,
  regions,
  renovationModel,
  services as kellerbauServices,
  type PriceItem as KellerbauPriceItem,
  type Service as KellerbauService,
} from "./catalog-kellerbau";

export const priceSources = {
  ...kellerbauPriceSources,
  myhammerDachfenster2026: {
    name: "MyHammer - Dachfenster einbauen Kosten 2026",
    url: "https://www.my-hammer.de/fenster-tueren/preisradar/was-kostet-dachfenster-einbauen",
    checkedAt: "31.08.2026",
  },
  aroundhomeRollladen: {
    name: "Aroundhome - Rollladen Kosten",
    url: "https://www.aroundhome.de/rollladen/preise-kosten/",
    checkedAt: "31.08.2026",
  },
} as const;

type FensterSourceKey = keyof typeof priceSources;
export type PriceItem = Omit<KellerbauPriceItem, "sourceKey"> & { sourceKey: FensterSourceKey };
export type Service = Omit<KellerbauService, "priceItems"> & { priceItems: PriceItem[] };

const inheritedServices = kellerbauServices as unknown as Service[];

export const services: Service[] = inheritedServices.map((service) => {
  if (service.slug !== "fenster") return service;

  return {
    ...service,
    description: "Aktuelle Richtwerte 2026 für Fenstertausch, Kunststoff-, Holz-, Aluminium- und Verbundfenster, Zwei- und Dreifachverglasung, Wärmeschutz, Sicherheits- und Schallschutzglas, Rollläden sowie Dachfenster in Deutschland.",
    priceItems: [
      ...service.priceItems,
      {
        name: "Fenstertausch komplett inklusive Ausbau und Einbau",
        low: 500,
        high: 2450,
        unit: "pro Fenster",
        note: "Aroundhome nennt für den kompletten Fenstertausch inklusive Ausbau des alten und Einbau des neuen Fensters je nach Material, Größe, Verglasung und Einbauaufwand etwa 500 bis 2.450 € pro Fenster.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Kunststofffenster 1300 x 1300 mm Zweifachverglasung",
        low: 270,
        high: 630,
        unit: "pro Fenster",
        note: "Aroundhome-Richtwert für ein einflügeliges Dreh-Kipp-Fenster mit Zweifachverglasung und etwa 1.300 x 1.300 mm, ohne Sonderausstattung.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Aluminiumfenster 1300 x 1300 mm Zweifachverglasung",
        low: 560,
        high: 1100,
        unit: "pro Fenster",
        note: "Aroundhome-Richtwert für ein einflügeliges Dreh-Kipp-Fenster mit Zweifachverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Holzfenster 1300 x 1300 mm Zweifachverglasung",
        low: 560,
        high: 1500,
        unit: "pro Fenster",
        note: "Aroundhome-Richtwert für ein einflügeliges Dreh-Kipp-Fenster mit Zweifachverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Kunststoff-Aluminiumfenster 1300 x 1300 mm Zweifachverglasung",
        low: 400,
        high: 1130,
        unit: "pro Fenster",
        note: "Aroundhome-Richtwert für ein einflügeliges Dreh-Kipp-Fenster mit Zweifachverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Holz-Aluminiumfenster 1300 x 1300 mm Zweifachverglasung",
        low: 1000,
        high: 2150,
        unit: "pro Fenster",
        note: "Aroundhome-Richtwert für ein einflügeliges Dreh-Kipp-Fenster mit Zweifachverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Kunststofffenster 1300 x 1300 mm Dreifachverglasung",
        low: 340,
        high: 900,
        unit: "pro Fenster",
        note: "Aroundhome-Richtwert für ein Fenster mit Dreifachverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Holzfenster 1300 x 1300 mm Dreifachverglasung",
        low: 750,
        high: 1550,
        unit: "pro Fenster",
        note: "Aroundhome-Richtwert für ein Fenster mit Dreifachverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Aluminiumfenster 1300 x 1300 mm Dreifachverglasung",
        low: 750,
        high: 1600,
        unit: "pro Fenster",
        note: "Aroundhome-Richtwert für ein Fenster mit Dreifachverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Kunststoff-Aluminiumfenster 1300 x 1300 mm Dreifachverglasung",
        low: 630,
        high: 1270,
        unit: "pro Fenster",
        note: "Aroundhome-Richtwert für ein Fenster mit Dreifachverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Holz-Aluminiumfenster 1300 x 1300 mm Dreifachverglasung",
        low: 1100,
        high: 2200,
        unit: "pro Fenster",
        note: "Aroundhome-Richtwert für ein Fenster mit Dreifachverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Wärmeschutzfenster 1100 x 1400 mm",
        low: 220,
        high: 1060,
        unit: "pro Fenster",
        note: "Aroundhome nennt für ein einteiliges Wärmeschutzfenster mit etwa 1.100 x 1.400 mm je nach Rahmen und Ausführung etwa 220 bis 1.060 €.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Wärmeschutzglas Fenster",
        low: 60,
        high: 60,
        unit: "ab pro m² Glasfläche",
        note: "Aroundhome nennt Wärmeschutzglas ab etwa 60 €/m²; Rahmen, Zuschnitt und Montage sind separat zu berücksichtigen.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Kunststofffenster VSG innen 1300 x 1300 mm",
        low: 270,
        high: 270,
        unit: "ab pro Fenster",
        note: "Aroundhome-Beispiel für ein Kunststofffenster mit Verbundsicherheitsglas auf der Innenseite, ausgehend von etwa 1.300 x 1.300 mm; Arbeitskosten separat.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Kunststofffenster VSG außen 1300 x 1300 mm",
        low: 270,
        high: 270,
        unit: "ab pro Fenster",
        note: "Aroundhome-Beispiel für ein Kunststofffenster mit Verbundsicherheitsglas auf der Außenseite, ausgehend von etwa 1.300 x 1.300 mm; Arbeitskosten separat.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Kunststofffenster VSG beidseitig 1300 x 1300 mm",
        low: 300,
        high: 300,
        unit: "ab pro Fenster",
        note: "Aroundhome-Beispiel für ein Kunststofffenster mit beidseitigem Verbundsicherheitsglas, ausgehend von etwa 1.300 x 1.300 mm; Arbeitskosten separat.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Schallschutzfenster Kunststoff bis 34 dB",
        low: 330,
        high: 330,
        unit: "ab pro Fenster",
        note: "Aroundhome-Richtwert für ein Kunststofffenster mit Schallschutzverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Schallschutzfenster Kunststoff bis 37 dB",
        low: 370,
        high: 370,
        unit: "ab pro Fenster",
        note: "Aroundhome-Richtwert für ein Kunststofffenster mit Schallschutzverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Schallschutzfenster Kunststoff bis 40 dB",
        low: 400,
        high: 400,
        unit: "ab pro Fenster",
        note: "Aroundhome-Richtwert für ein Kunststofffenster mit Schallschutzverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Schallschutzfenster Kunststoff bis 43 dB",
        low: 500,
        high: 500,
        unit: "ab pro Fenster",
        note: "Aroundhome-Richtwert für ein Kunststofffenster mit Schallschutzverglasung und etwa 1.300 x 1.300 mm.",
        sourceKey: "aroundhomeFenster",
      },
      {
        name: "Rollladen inklusive Montage am Fenster",
        low: 265,
        high: 630,
        unit: "pro Fenster",
        note: "Aroundhome nennt für Rollläden inklusive Montage je nach Modell, Bedienung und Region etwa 265 bis 630 € pro Fenster.",
        sourceKey: "aroundhomeRollladen",
      },
      {
        name: "Neues Fenster mit Rollladen inklusive Einbau",
        low: 900,
        high: 1300,
        unit: "pro Fenster",
        note: "Aroundhome nennt für ein neues Fenster mit integriertem Rollladen inklusive Einbau durchschnittlich etwa 900 bis 1.300 €.",
        sourceKey: "aroundhomeRollladen",
      },
      {
        name: "Rollladen nachträglich inklusive Montage",
        low: 250,
        high: 650,
        unit: "pro Fenster",
        note: "Aroundhome nennt für einen nachträglich eingebauten Rollladen inklusive Montage etwa 250 bis 650 € pro Fenster.",
        sourceKey: "aroundhomeRollladen",
      },
      {
        name: "Dachfenster Schwingfenster inklusive Einbau",
        low: 700,
        high: 1200,
        unit: "pro Dachfenster",
        note: "MyHammer nennt 2026 für klassische Schwingfenster inklusive Einbau etwa 700 bis 1.200 €.",
        sourceKey: "myhammerDachfenster2026",
      },
      {
        name: "Dachfenster Klapp-Schwing-Fenster inklusive Einbau",
        low: 900,
        high: 1600,
        unit: "pro Dachfenster",
        note: "MyHammer nennt 2026 für Klapp-Schwing-Fenster inklusive Einbau etwa 900 bis 1.600 €.",
        sourceKey: "myhammerDachfenster2026",
      },
      {
        name: "Dachfenster mit Elektroantrieb",
        low: 1200,
        high: 2000,
        unit: "pro Dachfenster",
        note: "MyHammer nennt 2026 für Dachfenster mit Elektroantrieb etwa 1.200 bis 2.000 € pro Fenster.",
        sourceKey: "myhammerDachfenster2026",
      },
      {
        name: "Dachfenster nachträglich klassisches Schwingfenster komplett",
        low: 1400,
        high: 1400,
        unit: "ca. pro Dachfenster",
        note: "MyHammer-Beispiel 2026 für nachträglichen Einbau: Fenster, Montage, Trockenbau und Dämmung zusammen rund 1.400 €.",
        sourceKey: "myhammerDachfenster2026",
      },
      {
        name: "Dachfenster mit Balkonfunktion nachträglich komplett",
        low: 4100,
        high: 4100,
        unit: "ca. pro Dachfenster",
        note: "MyHammer-Beispiel 2026 für ein Dachfenster mit Balkonfunktion inklusive Fenster, Montage, Trockenbau und Dämmung rund 4.100 €.",
        sourceKey: "myhammerDachfenster2026",
      },
    ],
  };
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
