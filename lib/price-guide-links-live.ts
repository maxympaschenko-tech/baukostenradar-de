import {
  getPriceGuideLink as getBasePriceGuideLink,
  getServiceGuideLink as getBaseServiceGuideLink,
  type PriceGuideLink,
} from "./price-guide-links-abriss-expansion";

export type { PriceGuideLink } from "./price-guide-links-abriss-expansion";

function markAsRatgeber(link: PriceGuideLink): PriceGuideLink {
  if (!link.href.startsWith("/ratgeber/") || link.title.includes("Ratgeber")) return link;

  return {
    ...link,
    title: `Ratgeber: ${link.title}`,
  };
}

export function getServiceGuideLink(serviceSlug: string): PriceGuideLink {
  return markAsRatgeber(getBaseServiceGuideLink(serviceSlug));
}

export function getPriceGuideLink(options: {
  serviceSlug: string;
  itemSlug: string;
  itemName: string;
  unit: string;
}): PriceGuideLink {
  return markAsRatgeber(getBasePriceGuideLink(options));
}
