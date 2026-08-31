import {
  getPriceGuideLink as getFensterPriceGuideLink,
  getServiceGuideLink as getFensterServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-fenster";

export type { PriceGuideLink } from "./price-guide-links-fenster";

const materialItems = new Set([
  "haustuer-komplett-inklusive-einbau",
  "kunststoff-haustuer-ohne-montage",
  "aluminium-haustuer-ohne-montage",
  "holz-haustuer-ohne-montage",
  "holz-aluminium-haustuer-ohne-montage",
  "haustuer-fachgerecht-einbauen",
]);

const equipmentItems = new Set([
  "glaseinsatz-fuer-haustuer",
  "seitenteil-oder-oberlicht-fuer-haustuer",
  "standardschloss-zylinder-und-klinke-haustuer",
  "sicherheitshaustuer-rc3-markenmodell",
  "waermeschutz-haustuer-u-wert-unter-1",
  "schallschutztuer-stahl-hohe-schallschutzklasse",
]);

const frameItems = new Set([
  "tuerzarge-einbauen-komplett-allgemein",
  "holzzarge-innentuer-10-cm",
  "stahlzarge-innentuer-10-cm",
  "holzzarge-eingangstuer-20-5-cm",
  "stahlzarge-eingangstuer-28-5-cm",
  "kleinmaterial-und-bauschaum-fuer-tuerzarge",
  "zarge-innentuer-montieren",
  "zarge-eingangstuer-montieren",
]);

const interiorItems = new Set([
  "zimmertuer-standardmass-reine-montage",
  "zimmertuer-inklusive-tuerelement-und-einbau",
  "tuerblatt-tauschen-montage",
  "tuerblatt-standardausfuehrung",
  "cpl-tuerblatt",
  "echtholzfurnier-tuerblatt",
  "schallschutztuer-oder-brandschutztuer-innen",
  "tischler-tuereinbau-stundensatz",
  "alte-innentuer-demontieren-und-entsorgen",
  "fuenf-zimmertueren-inklusive-elemente-komplett",
  "fuenf-zimmertueren-montage",
]);

const slidingItems = new Set([
  "schiebetuer-einfach-vom-fachbetrieb-einbauen",
  "schiebetuer-montage-standardbeispiel",
  "schiebetuer-sandgestrahlte-glastuer-material",
  "schiebetuer-anfahrt-standardbeispiel",
]);

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  if (serviceSlug === "tueren") {
    return {
      href: "/ratgeber/innentueren-kosten",
      title: "Türen Kosten 2026",
      cta: "Türen-Ratgeber öffnen",
    };
  }

  return getFensterServiceGuideLink(serviceSlug);
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  if (options.serviceSlug === "tueren") {
    if (materialItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/haustuer-material-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Haustür-Materialvergleich öffnen",
      };
    }

    if (equipmentItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/haustuer-zusatzausstattung-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Haustür-Ausstattung öffnen",
      };
    }

    if (frameItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/tuerzarge-einbauen-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Türzargen-Ratgeber öffnen",
      };
    }

    if (interiorItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/innentueren-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Innentüren-Ratgeber öffnen",
      };
    }

    if (slidingItems.has(options.itemSlug)) {
      return {
        href: "/ratgeber/schiebetuer-einbauen-kosten",
        title: `${options.itemName}: Kosten 2026`,
        cta: "Schiebetür-Ratgeber öffnen",
      };
    }
  }

  return getFensterPriceGuideLink(options);
}
