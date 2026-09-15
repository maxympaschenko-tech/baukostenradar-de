import {
  withSupplementalGuideLinks as withBaseSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-daemmung-expansion";
import { gfkBetonpoolVergleichGuide } from "./guide-gfk-betonpool-vergleich";
import { pooltechnikGuide } from "./guide-pooltechnik";
import { terrassendachGlasKunststoffVergleichGuide } from "./guide-terrassendach-glas-kunststoff-vergleich";
import { poolGuides } from "./guides-pool";
import { terraceCoverGuides } from "./guides-terrace-cover";

export type { GuideSupplementalLink } from "./guide-supplemental-links-daemmung-expansion";

type Peer = GuideSupplementalLink & { slug: string };

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
  terrassendachGlasKunststoffVergleichGuide,
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
  const withPoolPeers = addPeers(base, slug, poolPeers);
  return addPeers(withPoolPeers, slug, terraceCoverPeers);
}
