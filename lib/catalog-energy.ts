import {
  priceSources as stairsPriceSources,
  regions,
  renovationModel,
  services as stairsServices,
  type PriceItem as StairsPriceItem,
  type Service as StairsService,
} from "./catalog-stairs";

export const priceSources = {
  ...stairsPriceSources,
  energieExpertenPvKosten2026: {
    name: "Energie-Experten - Photovoltaikanlage Kosten 2026",
    url: "https://www.energie-experten.org/erneuerbare-energien/photovoltaik/photovoltaikanlage/kosten",
    checkedAt: "29.08.2026",
  },
  energieExpertenSpeicherPreise2026: {
    name: "Energie-Experten - Stromspeicher Preise 2026",
    url: "https://www.energie-experten.org/erneuerbare-energien/photovoltaik/stromspeicher/preise",
    checkedAt: "29.08.2026",
  },
  energieExpertenWechselrichter2026: {
    name: "Energie-Experten - Wechselrichter Kosten 2026",
    url: "https://www.energie-experten.org/erneuerbare-energien/photovoltaik/wechselrichter/kosten",
    checkedAt: "29.08.2026",
  },
} as const;

type EnergySourceKey = keyof typeof priceSources;
export type PriceItem = Omit<StairsPriceItem, "sourceKey"> & { sourceKey: EnergySourceKey };
export type Service = Omit<StairsService, "priceItems"> & { priceItems: PriceItem[] };

export const services: Service[] = stairsServices.map((service) => {
  const stairsService = service as unknown as Service;

  if (service.slug === "photovoltaik") {
    return {
      ...stairsService,
      description: "Aktuelle Richtwerte 2026 für Photovoltaikanlagen, Stromspeicher, Wechselrichter, Hybrid-Wechselrichter, Smart Meter, Backup-Lösungen und laufende Betriebskosten in Deutschland.",
      priceItems: [
        ...stairsService.priceItems,
        {
          name: "PV-Anlage 4 kWp inkl. Montage",
          low: 7943,
          high: 7943,
          unit: "pro Anlage",
          note: "Aktueller Startwert 2026 für eine kleine schlüsselfertige Dachanlage",
          sourceKey: "energieExpertenPvKosten2026",
        },
        {
          name: "PV-Anlage 20 kWp inkl. Installation",
          low: 18000,
          high: 26000,
          unit: "pro Anlage",
          note: "Kauf und Installation laut Marktübersicht Stand März 2026",
          sourceKey: "co2Photovoltaik",
        },
        {
          name: "PV-Anlage 25 kWp inkl. Installation",
          low: 22000,
          high: 30000,
          unit: "pro Anlage",
          note: "Kauf und Installation laut Marktübersicht Stand März 2026",
          sourceKey: "co2Photovoltaik",
        },
        {
          name: "PV-Anlage 5 kWp mit 5 kWh Speicher",
          low: 10500,
          high: 13500,
          unit: "pro Anlage inkl. Montage",
          note: "Typischer Gesamtbereich 2026 für PV, Speicher, Planung, Netzanschluss und Inbetriebnahme",
          sourceKey: "energieExpertenPvKosten2026",
        },
        {
          name: "Stromspeicher 5 kWh",
          low: 2595,
          high: 4790,
          unit: "pro Speicher",
          note: "Aktuelle Marktspanne 2026; Montage und elektrische Integration können zusätzlich anfallen",
          sourceKey: "energieExpertenSpeicherPreise2026",
        },
        {
          name: "Stromspeicher 10 kWh",
          low: 4290,
          high: 7740,
          unit: "pro Speicher",
          note: "Aktuelle Marktspanne 2026; Ausstattung und Hersteller beeinflussen den Preis deutlich",
          sourceKey: "energieExpertenSpeicherPreise2026",
        },
        {
          name: "Stromspeicher 15 kWh",
          low: 6225,
          high: 9840,
          unit: "pro Speicher",
          sourceKey: "energieExpertenSpeicherPreise2026",
        },
        {
          name: "Stromspeicher montieren und elektrisch integrieren",
          low: 1000,
          high: 2000,
          unit: "pro Speicher",
          note: "Typischer Zusatzaufwand für Montage, elektrische Einbindung und Inbetriebnahme",
          sourceKey: "energieExpertenPvKosten2026",
        },
        {
          name: "PV-Wechselrichter Standard",
          low: 600,
          high: 1400,
          unit: "pro Gerät",
          note: "Typische Gerätepreise 2026; Leistung, Hersteller und Ausstattung bestimmen den Endpreis",
          sourceKey: "energieExpertenWechselrichter2026",
        },
        {
          name: "Hybrid-Wechselrichter",
          low: 1200,
          high: 2000,
          unit: "pro Gerät",
          note: "Für PV-Anlagen mit Batteriespeicher; Zusatzmodule und Installation separat prüfen",
          sourceKey: "energieExpertenWechselrichter2026",
        },
        {
          name: "Smart Meter für PV-Anlage",
          low: 200,
          high: 450,
          unit: "pro Gerät",
          note: "Energiezähler zur Messung von Netzbezug und Einspeisung; Montage kann separat anfallen",
          sourceKey: "energieExpertenWechselrichter2026",
        },
        {
          name: "Notstrom- oder Backup-Box",
          low: 400,
          high: 1200,
          unit: "pro System",
          note: "Zusatzhardware für ausgewählte Stromkreise bei Netzausfall",
          sourceKey: "energieExpertenWechselrichter2026",
        },
        {
          name: "PV-Speicher Full-Backup Ersatzstrom",
          low: 1600,
          high: 4500,
          unit: "pro Zusatzsystem",
          note: "Mehrkosten für vollwertige Ersatzstromversorgung; Umschalttechnik und Installationsaufwand sind entscheidend",
          sourceKey: "energieExpertenSpeicherPreise2026",
        },
        {
          name: "Photovoltaik laufende Betriebskosten",
          low: 80,
          high: 200,
          unit: "pro Jahr",
          note: "Orientierung für Wartung, Versicherung und weitere laufende Kosten einer typischen Anlage",
          sourceKey: "energieExpertenPvKosten2026",
        },
      ],
    };
  }

  return stairsService;
});

export { regions, renovationModel };

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
