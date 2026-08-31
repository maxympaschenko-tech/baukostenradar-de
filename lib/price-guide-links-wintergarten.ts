import {
  getPriceGuideLink as getTerraceCoverPriceGuideLink,
  getServiceGuideLink as getTerraceCoverServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-terrace-cover";

export type { PriceGuideLink } from "./price-guide-links-terrace-cover";

const serviceGuides: Record<string, PriceGuideLink> = {
  wintergarten: {
    href: "/ratgeber/wintergarten-kosten",
    title: "Wintergarten bauen: Kosten 2026",
    cta: "Wintergarten-Ratgeber öffnen",
  },
};

const itemGuides: Record<string, PriceGuideLink> = {
  "wintergarten:wintergarten-gesamtprojekt": {
    href: "/ratgeber/wintergarten-kosten",
    title: "Wintergarten Gesamtprojekt: Kosten 2026",
    cta: "Wintergarten-Ratgeber öffnen",
  },
  "wintergarten:kaltwintergarten-komplettpreis-inklusive-montage": {
    href: "/ratgeber/kaltwintergarten-kosten",
    title: "Kaltwintergarten komplett: Kosten 2026",
    cta: "Kaltwintergarten-Ratgeber öffnen",
  },
  "wintergarten:mittelwarmer-wintergarten-komplettpreis": {
    href: "/ratgeber/wintergarten-kosten",
    title: "Mittelwarmer Wintergarten: Kosten 2026",
    cta: "Wintergarten-Ratgeber öffnen",
  },
  "wintergarten:warmwintergarten-komplettpreis-inklusive-montage": {
    href: "/ratgeber/wohnwintergarten-kosten",
    title: "Warmwintergarten komplett: Kosten 2026",
    cta: "Wohnwintergarten-Ratgeber öffnen",
  },
  "wintergarten:kaltwintergarten-durch-fachbetrieb": {
    href: "/ratgeber/kaltwintergarten-kosten",
    title: "Kaltwintergarten vom Fachbetrieb: Kosten 2026",
    cta: "Kaltwintergarten-Ratgeber öffnen",
  },
  "wintergarten:kaltwintergarten-aluminium-bausatz-eigenmontage": {
    href: "/ratgeber/kaltwintergarten-kosten",
    title: "Kaltwintergarten Alu-Bausatz: Kosten 2026",
    cta: "Kaltwintergarten-Ratgeber öffnen",
  },
  "wintergarten:kaltwintergarten-bausatz-montiert": {
    href: "/ratgeber/kaltwintergarten-kosten",
    title: "Kaltwintergarten Bausatz montiert: Kosten 2026",
    cta: "Kaltwintergarten-Ratgeber öffnen",
  },
  "wintergarten:kaltwintergarten-aluminium-massanfertigung": {
    href: "/ratgeber/kaltwintergarten-kosten",
    title: "Kaltwintergarten Aluminium Maßanfertigung: Kosten 2026",
    cta: "Kaltwintergarten-Ratgeber öffnen",
  },
  "wintergarten:kaltwintergarten-holz-oder-holz-aluminium-massanfertigung": {
    href: "/ratgeber/kaltwintergarten-kosten",
    title: "Kaltwintergarten Holz/Holz-Alu: Kosten 2026",
    cta: "Kaltwintergarten-Ratgeber öffnen",
  },
  "wintergarten:wohnwintergarten-fachbetrieb": {
    href: "/ratgeber/wohnwintergarten-kosten",
    title: "Wohnwintergarten vom Fachbetrieb: Kosten 2026",
    cta: "Wohnwintergarten-Ratgeber öffnen",
  },
  "wintergarten:wohnwintergarten-kunststoff-konstruktion": {
    href: "/ratgeber/wohnwintergarten-kosten",
    title: "Wohnwintergarten Kunststoff: Kosten 2026",
    cta: "Wohnwintergarten-Ratgeber öffnen",
  },
  "wintergarten:wohnwintergarten-holz-konstruktion": {
    href: "/ratgeber/wohnwintergarten-kosten",
    title: "Wohnwintergarten Holz: Kosten 2026",
    cta: "Wohnwintergarten-Ratgeber öffnen",
  },
  "wintergarten:wohnwintergarten-holz-aluminium-konstruktion": {
    href: "/ratgeber/wohnwintergarten-kosten",
    title: "Wohnwintergarten Holz-Aluminium: Kosten 2026",
    cta: "Wohnwintergarten-Ratgeber öffnen",
  },
  "wintergarten:wohnwintergarten-aluminium-konstruktion": {
    href: "/ratgeber/wohnwintergarten-kosten",
    title: "Wohnwintergarten Aluminium: Kosten 2026",
    cta: "Wohnwintergarten-Ratgeber öffnen",
  },
  "wintergarten:wohnwintergarten-stahl-konstruktion": {
    href: "/ratgeber/wohnwintergarten-kosten",
    title: "Wohnwintergarten Stahl: Kosten 2026",
    cta: "Wohnwintergarten-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-einfachverglasung": {
    href: "/ratgeber/wintergarten-verglasung-kosten",
    title: "Wintergarten Einfachverglasung: Kosten 2026",
    cta: "Verglasungs-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-isolierglas-doppelverglasung": {
    href: "/ratgeber/wintergarten-verglasung-kosten",
    title: "Wintergarten Doppelverglasung: Kosten 2026",
    cta: "Verglasungs-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-dreifachverglasung": {
    href: "/ratgeber/wintergarten-verglasung-kosten",
    title: "Wintergarten Dreifachverglasung: Kosten 2026",
    cta: "Verglasungs-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-glasdach": {
    href: "/ratgeber/wintergarten-verglasung-kosten",
    title: "Wintergarten Glasdach: Kosten 2026",
    cta: "Verglasungs-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-polycarbonat-stegplatten-dach": {
    href: "/ratgeber/wintergarten-verglasung-kosten",
    title: "Wintergarten Polycarbonat-Dach: Kosten 2026",
    cta: "Verglasungs-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-punktfundament": {
    href: "/ratgeber/wintergarten-fundament-kosten",
    title: "Wintergarten Punktfundament: Kosten 2026",
    cta: "Fundament-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-streifenfundament": {
    href: "/ratgeber/wintergarten-fundament-kosten",
    title: "Wintergarten Streifenfundament: Kosten 2026",
    cta: "Fundament-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-bodenplatte-ungedaemmt": {
    href: "/ratgeber/wintergarten-fundament-kosten",
    title: "Wintergarten Bodenplatte ungedämmt: Kosten 2026",
    cta: "Fundament-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-bodenplatte-gedaemmt": {
    href: "/ratgeber/wintergarten-fundament-kosten",
    title: "Wintergarten Bodenplatte gedämmt: Kosten 2026",
    cta: "Fundament-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-bodenplatte-mit-fussbodenheizung": {
    href: "/ratgeber/wintergarten-fundament-kosten",
    title: "Wintergarten Bodenplatte mit Fußbodenheizung: Kosten 2026",
    cta: "Fundament-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-heizung-einbauen": {
    href: "/ratgeber/wohnwintergarten-kosten",
    title: "Wintergarten Heizung: Kosten 2026",
    cta: "Wohnwintergarten-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-belueftungssystem": {
    href: "/ratgeber/wohnwintergarten-kosten",
    title: "Wintergarten Belüftung: Kosten 2026",
    cta: "Wohnwintergarten-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-beschattungssystem": {
    href: "/ratgeber/wintergarten-kosten",
    title: "Wintergarten Beschattung: Kosten 2026",
    cta: "Wintergarten-Ratgeber öffnen",
  },
  "wintergarten:wintergarten-baugenehmigung": {
    href: "/ratgeber/wintergarten-kosten",
    title: "Wintergarten Baugenehmigung: Kosten 2026",
    cta: "Wintergarten-Ratgeber öffnen",
  },
  "wintergarten:kaltwintergarten-laufende-nebenkosten": {
    href: "/ratgeber/kaltwintergarten-kosten",
    title: "Kaltwintergarten laufende Kosten 2026",
    cta: "Kaltwintergarten-Ratgeber öffnen",
  },
  "wintergarten:warmwintergarten-laufende-nebenkosten": {
    href: "/ratgeber/wohnwintergarten-kosten",
    title: "Warmwintergarten laufende Kosten 2026",
    cta: "Wohnwintergarten-Ratgeber öffnen",
  },
};

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return serviceGuides[serviceSlug] ?? getTerraceCoverServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  return itemGuides[`${options.serviceSlug}:${options.itemSlug}`] ?? getTerraceCoverPriceGuideLink(options);
}
