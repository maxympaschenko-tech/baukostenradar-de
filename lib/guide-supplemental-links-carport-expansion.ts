import {
  withSupplementalGuideLinks as withSanitaerTradesSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-sanitaer-trades";

export type { GuideSupplementalLink } from "./guide-supplemental-links-sanitaer-trades";

type Peer = GuideSupplementalLink & { slug: string };

const garageCarportPeers: Peer[] = [
  { slug: "garage-bauen-kosten", label: "Garage bauen Kosten", href: "/ratgeber/garage-bauen-kosten" },
  { slug: "fertiggarage-kosten", label: "Fertiggarage Kosten", href: "/ratgeber/fertiggarage-kosten" },
  { slug: "massivgarage-kosten", label: "Massivgarage Kosten", href: "/ratgeber/massivgarage-kosten" },
  { slug: "garagenfundament-kosten-pro-qm", label: "Garagenfundament Kosten", href: "/ratgeber/garagenfundament-kosten-pro-qm" },
  { slug: "garagentor-einbauen-kosten", label: "Garagentor einbauen Kosten", href: "/ratgeber/garagentor-einbauen-kosten" },
  { slug: "carport-kosten", label: "Carport Kosten", href: "/ratgeber/carport-kosten" },
  { slug: "carport-fundament-kosten", label: "Carport-Fundament Kosten", href: "/ratgeber/carport-fundament-kosten" },
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
  const base = withSanitaerTradesSupplementalGuideLinks(slug, related);
  return addPeers(base, slug, garageCarportPeers);
}
