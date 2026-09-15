import {
  withSupplementalGuideLinks as withBaseSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-daemmung-expansion";
import { fertigkellerMassivkellerVergleichGuide } from "./guide-fertigkeller-massivkeller-vergleich";
import { gfkBetonpoolVergleichGuide } from "./guide-gfk-betonpool-vergleich";
import { holzAluTerrassenueberdachungVergleichGuide } from "./guide-holz-alu-terrassenueberdachung-vergleich";
import { kaltWohnwintergartenVergleichGuide } from "./guide-kalt-wohnwintergarten-vergleich";
import { pooltechnikGuide } from "./guide-pooltechnik";
import { terrassendachGlasKunststoffVergleichGuide } from "./guide-terrassendach-glas-kunststoff-vergleich";
import { kellerbauGuides } from "./guides-kellerbau";
import { poolGuides } from "./guides-pool";
import { terraceCoverGuides } from "./guides-terrace-cover";
import { wintergartenGuides } from "./guides-wintergarten";

export type { GuideSupplementalLink } from "./guide-supplemental-links-daemmung-expansion";

type Peer = GuideSupplementalLink & { slug: string };

const kellerbauPeers: Peer[] = [
  ...kellerbauGuides,
  fertigkellerMassivkellerVergleichGuide,
].map((guide) => ({
  slug: guide.slug,
  label: guide.title,
  href: `/ratgeber/${guide.slug}`,
}));

const poolPeers: Peer[] = [
  ...poolGuides,
  pooltechnikGuide,
  gfkBetonpoolVergleichGuide,
].map((guide) => ({
  slug: guide.slug,
  label: guide.title,
  href: `/ratgeber/${guide.slug}`,
}));

const terraceCoverPeers: Peer[] = [
  ...terraceCoverGuides,
  holzAluTerrassenueberdachungVergleichGuide,
  terrassendachGlasKunststoffVergleichGuide,
].map((guide) => ({
  slug: guide.slug,
  label: guide.title,
  href: `/ratgeber/${guide.slug}`,
}));

const wintergartenPeers: Peer[] = [
  ...wintergartenGuides,
  kaltWohnwintergartenVergleichGuide,
].map((guide) => ({
  slug: guide.slug,
  label: guide.title,
  href: `/ratgeber/${guide.slug}`,
}));

function addPeers(base: GuideSupplementalLink[], slug: string, peers: Peer[]) {
  if (!peers.some((peer) => peer.slug === slug)) return base;

  return [
    ...base,
    ...peers
      .filter((peer) => peer.slug !== slug)
      .map(({ label, href }) => ({ label, href })),
  ].filter((link, index, links) => links.findIndex((candidate) => candidate.href === link.href) === index);
}

export function withSupplementalGuideLinks(
  slug: string,
  related: GuideSupplementalLink[],
): GuideSupplementalLink[] {
  const base = withBaseSupplementalGuideLinks(slug, related);
  const withKellerbauPeers = addPeers(base, slug, kellerbauPeers);
  const withPoolPeers = addPeers(withKellerbauPeers, slug, poolPeers);
  const withTerraceCoverPeers = addPeers(withPoolPeers, slug, terraceCoverPeers);
  return addPeers(withTerraceCoverPeers, slug, wintergartenPeers);
}
