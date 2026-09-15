import { regions, services } from "@/lib/pricing";
import { balconyGuides } from "./guides-balcony";
import { garageGuides } from "./guides-garage";
import { chimneyGuides } from "./guides-chimney";
import { fenceGuides } from "./guides-fence";
import { poolGuides } from "./guides-pool";
import { terraceGuides } from "./guides-terrace";
import { terraceCoverGuides } from "./guides-terrace-cover";
import { wintergartenGuides } from "./guides-wintergarten";
import { dachausbauGuides } from "./guides-dachausbau-current";
import { hausanbauGuides } from "./guides-hausanbau";
import { kellerbauGuides } from "./guides-kellerbau";
import { fertiggarageMassivgarageVergleichGuide } from "./guide-fertiggarage-massivgarage-vergleich";
import { gfkBetonpoolVergleichGuide } from "./guide-gfk-betonpool-vergleich";
import { kaltWohnwintergartenVergleichGuide } from "./guide-kalt-wohnwintergarten-vergleich";
import { terrassendachGlasKunststoffVergleichGuide } from "./guide-terrassendach-glas-kunststoff-vergleich";
import {
  getGuideSilo as getLegacyGuideSilo,
  type GuideSilo,
} from "./guide-silo-sanitaer-trades";
import { getGuideSilo as getExpandedGuideSilo } from "./guide-silo-kellerbau";

export type { GuideSilo } from "./guide-silo-sanitaer-trades";

const expandedGuideSlugs = new Set([
  ...balconyGuides,
  ...garageGuides,
  ...chimneyGuides,
  ...fenceGuides,
  ...poolGuides,
  ...terraceGuides,
  ...terraceCoverGuides,
  ...wintergartenGuides,
  ...dachausbauGuides,
  ...hausanbauGuides,
  ...kellerbauGuides,
  fertiggarageMassivgarageVergleichGuide,
  gfkBetonpoolVergleichGuide,
  kaltWohnwintergartenVergleichGuide,
  terrassendachGlasKunststoffVergleichGuide,
].map((guide) => guide.slug));

export function getGuideSilo(slug: string): GuideSilo {
  return expandedGuideSlugs.has(slug)
    ? getExpandedGuideSilo(slug)
    : getLegacyGuideSilo(slug);
}

export function getGuideSiloServices(slug: string) {
  const config = getGuideSilo(slug);
  return config.serviceSlugs
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}

export function getGuideRegions() {
  return regions.filter((region) => region.value !== "de");
}

export function getGuideRegionalServices(slug: string, limit = 3) {
  return getGuideSiloServices(slug).slice(0, Math.max(1, limit));
}
