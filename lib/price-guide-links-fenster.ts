import {
  getPriceGuideLink as getKellerbauPriceGuideLink,
  getServiceGuideLink as getKellerbauServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-kellerbau";

export type { PriceGuideLink } from "./price-guide-links-kellerbau";

const materialItems = new Set([
  "kunststofffenster-1300-x-1300-mm-zweifachverglasung",
  "aluminiumfenster-1300-x-1300-mm-zweifachverglasung",
  "holzfenster-1300-x-1300-mm-zweifachverglasung",
  "kunststoff-aluminiumfenster-1300-x-1300-mm-zweifachverglasung",
  "holz-aluminiumfenster-1300-x-1300-mm-zweifachverglasung",
  "kunststofffenster-1300-x-1300-mm-dreifachverglasung",
  "holzfenster-1300-x-1300-mm-dreifachverglasung",
  "aluminiumfenster-1300-x-1300-mm-dreifachverglasung",
  "kunststoff-aluminiumfenster-1300-x-1300-mm-dreifachverglasung",
  "holz-aluminiumfenster-1300-x-1300-mm-dreifachverglasung",
]);

const heatItems = new Set([
  "waermeschutzfenster-1100-x-1400-mm",
  "waermeschutzglas-fenster",
]);

const safetyItems = new Set([
  "kunststofffenster-vsg-innen-1300-x-1300-mm",
  "kunststofffenster-vsg-aussen-1300-x-1300-mm",
  "kunststofffenster-vsg-beidseitig-1300-x-1300-mm",
]);

const soundItems = new Set([
  "schallschutzfenster-kunststoff-bis-34-db",
  "schallschutzfenster-kunststoff-bis-37-db",
  "schallschutzfenster-kunststoff-bis-40-db",
  "schallschutzfenster-kunststoff-bis-43-db",
]);

const shutterItems = new Set([
  "rollladen-inklusive-montage-am-fenster",
  "neues-fenster-mit-rollladen-inklusive-einbau",
  "rollladen-nachtraeglich-inklusive-montage",
]);

const roofItems = new Set([
  "dachfenster-schwingfenster-inklusive-einbau",
  "dachfenster-klapp-schwing-fenster-inklusive-einbau",
  "dachfenster-mit-elektroantrieb",
  "dachfenster-nachtraeglich-klassisches-schwingfenster-komplett",
  "dachfenster-mit-balkonfunktion-nachtraeglich-komplett",
]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "fenster") {
    return {
      href: "/ratgeber/fenster-austauschen-kosten-haus",
      title: "Fenster austauschen Kosten",
      cta: "Fenster-Ratgeber öffnen",
    };
  }

  return getKellerbauServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "fenster") {
    if (options.itemSlug === "fenstertausch-komplett-inklusive-ausbau-und-einbau") {
      return {
        href: "/ratgeber/fenster-austauschen-kosten-haus",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Fenstertausch-Ratgeber öffnen",
      };
    }

    if (materialItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/fenster-rahmenmaterial-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Materialvergleich öffnen",
      };
    }

    if (heatItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/waermeschutzfenster-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Wärmeschutzfenster-Ratgeber öffnen",
      };
    }

    if (safetyItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/sicherheitsglas-vsg-fenster-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "VSG-Ratgeber öffnen",
      };
    }

    if (soundItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/schallschutzfenster-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Schallschutzfenster-Ratgeber öffnen",
      };
    }

    if (shutterItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/fenster-rollladen-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Fenster-Rollladen-Ratgeber öffnen",
      };
    }

    if (roofItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/dachfenster-nachtraeglich-einbauen-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Dachfenster-Ratgeber öffnen",
      };
    }
  }

  return getKellerbauPriceGuideLink(options);
}
