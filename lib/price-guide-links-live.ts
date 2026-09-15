import {
  getPriceGuideLink as getBasePriceGuideLink,
  getServiceGuideLink as getBaseServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-abriss-expansion";

export type { PriceGuideLink } from "./price-guide-links-abriss-expansion";

const canonicalRatgeberHrefs: Record<string, string> = {
  "/ratgeber/tuer-lackieren-kosten": "/ratgeber/6-innentueren-austauschen-kosten",
  "/ratgeber/anhydritestrich-kosten-pro-qm": "/ratgeber/fliessestrich-kosten-pro-qm",
  "/ratgeber/gussasphaltestrich-kosten-pro-qm": "/ratgeber/estrich-100-qm-kosten",
  "/ratgeber/sichtestrich-kosten-pro-qm": "/ratgeber/estrich-100-qm-kosten",
  "/ratgeber/estrich-zement-oder-anhydrit-kosten": "/ratgeber/estrich-100-qm-kosten",
  "/ratgeber/kellerdeckendaemmung-kosten-pro-qm": "/ratgeber/daemmung-kellerdecke-kosten-pro-qm",
  "/ratgeber/perimeterdaemmung-keller-kosten": "/ratgeber/perimeterdaemmung-kosten-pro-qm",
};

function normalizeGuideLink(link: PriceGuideLink): PriceGuideLink {
  const href = canonicalRatgeberHrefs[link.href] ?? link.href;

  if (!href.startsWith("/ratgeber/")) {
    return href === link.href ? link : { ...link, href };
  }

  return {
    ...link,
    href,
    title: link.title.includes("Ratgeber") ? link.title : `Ratgeber: ${link.title}`,
  };
}

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return normalizeGuideLink(getBaseServiceGuideLink(serviceSlug));
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  return normalizeGuideLink(getBasePriceGuideLink(options));
}
