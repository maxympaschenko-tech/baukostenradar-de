import {
  withSupplementalGuideLinks as withPooltechnikSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-pooltechnik-expansion";

export type { GuideSupplementalLink } from "./guide-supplemental-links-pooltechnik-expansion";

type Peer = GuideSupplementalLink & { slug: string };

const daemmungPeers: Peer[] = [
  { slug: "daemmung-kosten-pro-qm", label: "Dämmung Kosten pro m²", href: "/ratgeber/daemmung-kosten-pro-qm" },
  { slug: "fassadendaemmung-kosten-pro-qm", label: "Fassadendämmung Kosten", href: "/ratgeber/fassadendaemmung-kosten-pro-qm" },
  { slug: "innendaemmung-kosten-pro-qm", label: "Innendämmung Kosten", href: "/ratgeber/innendaemmung-kosten-pro-qm" },
  { slug: "zwischensparrendaemmung-kosten-pro-qm", label: "Zwischensparrendämmung Kosten", href: "/ratgeber/zwischensparrendaemmung-kosten-pro-qm" },
  { slug: "aufsparrendaemmung-kosten-pro-qm", label: "Aufsparrendämmung Kosten", href: "/ratgeber/aufsparrendaemmung-kosten-pro-qm" },
  { slug: "kellerdeckendaemmung-kosten-pro-qm", label: "Kellerdeckendämmung Kosten", href: "/ratgeber/kellerdeckendaemmung-kosten-pro-qm" },
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
  const base = withPooltechnikSupplementalGuideLinks(slug, related);
  return addPeers(base, slug, daemmungPeers);
}
