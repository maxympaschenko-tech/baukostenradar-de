import {
  withSupplementalGuideLinks as withCarportSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-carport-expansion";

export type { GuideSupplementalLink } from "./guide-supplemental-links-carport-expansion";

type Peer = GuideSupplementalLink & { slug: string };

const poolPeers: Peer[] = [
  { slug: "pool-bauen-kosten", label: "Pool bauen Kosten", href: "/ratgeber/pool-bauen-kosten" },
  { slug: "gfk-pool-kosten", label: "GFK-Pool Kosten", href: "/ratgeber/gfk-pool-kosten" },
  { slug: "betonpool-kosten", label: "Betonpool Kosten", href: "/ratgeber/betonpool-kosten" },
  { slug: "pool-erdarbeiten-kosten", label: "Pool-Erdarbeiten Kosten", href: "/ratgeber/pool-erdarbeiten-kosten" },
  { slug: "pool-betriebskosten", label: "Pool-Betriebskosten", href: "/ratgeber/pool-betriebskosten" },
  { slug: "pooltechnik-kosten", label: "Pooltechnik Kosten", href: "/ratgeber/pooltechnik-kosten" },
];

function addPeers(base: GuideSupplementalLink[], slug: string, peers: Peer[]) {
  const slugs = new Set(peers.map((peer) => peer.slug));
  if (!slugs.has(slug)) return base;
  return [
    ...base,
    ...peers.filter((peer) => peer.slug !== slug).map(({ label, href }) => ({ label, href })),
  ].filter((link, index, links) => links.findIndex((candidate) => candidate.href === link.href) === index);
}

export function withSupplementalGuideLinks(slug: string, related: GuideSupplementalLink[]): GuideSupplementalLink[] {
  const base = withCarportSupplementalGuideLinks(slug, related);
  return addPeers(base, slug, poolPeers);
}
