import {
  withSupplementalGuideLinks as withPooltechnikSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-pooltechnik-expansion";

export type { GuideSupplementalLink } from "./guide-supplemental-links-pooltechnik-expansion";

type Peer = GuideSupplementalLink & { slug: string };

const daemmungPeers: Peer[] = [
  { slug: "daemmung-kosten-pro-qm", label: "Dämmung Kosten pro m²", href: "/ratgeber/daemmung-kosten-pro-qm" },
  { slug: "fassadendaemmung-kosten-pro-qm", label: "Fassadendämmung Kosten", href: "/ratgeber/fassadendaemmung-kosten-pro-qm" },
  { slug: "kerndaemmung-kosten-pro-qm", label: "Kerndämmung Kosten", href: "/ratgeber/kerndaemmung-kosten-pro-qm" },
  { slug: "innendaemmung-kosten-pro-qm", label: "Innendämmung Kosten", href: "/ratgeber/innendaemmung-kosten-pro-qm" },
  { slug: "zwischensparrendaemmung-kosten-pro-qm", label: "Zwischensparrendämmung Kosten", href: "/ratgeber/zwischensparrendaemmung-kosten-pro-qm" },
  { slug: "untersparrendaemmung-kosten-pro-qm", label: "Untersparrendämmung Kosten", href: "/ratgeber/untersparrendaemmung-kosten-pro-qm" },
  { slug: "aufsparrendaemmung-kosten-pro-qm", label: "Aufsparrendämmung Kosten", href: "/ratgeber/aufsparrendaemmung-kosten-pro-qm" },
  { slug: "flachdach-warmdaemmung-kosten-pro-qm", label: "Warmdach Dämmung Kosten", href: "/ratgeber/flachdach-warmdaemmung-kosten-pro-qm" },
  { slug: "flachdach-kaltdaemmung-kosten-pro-qm", label: "Kaltdach Dämmung Kosten", href: "/ratgeber/flachdach-kaltdaemmung-kosten-pro-qm" },
  { slug: "daemmung-oberste-geschossdecke-kosten-pro-qm", label: "Oberste Geschossdecke dämmen Kosten", href: "/ratgeber/daemmung-oberste-geschossdecke-kosten-pro-qm" },
  { slug: "einblasdaemmung-geschossdecke-kosten-pro-qm", label: "Einblasdämmung Geschossdecke Kosten", href: "/ratgeber/einblasdaemmung-geschossdecke-kosten-pro-qm" },
  { slug: "daemmung-kellerdecke-kosten-pro-qm", label: "Kellerdecke dämmen Kosten", href: "/ratgeber/daemmung-kellerdecke-kosten-pro-qm" },
  { slug: "perimeterdaemmung-kosten-pro-qm", label: "Perimeterdämmung Kosten", href: "/ratgeber/perimeterdaemmung-kosten-pro-qm" },
  { slug: "sockeldaemmung-kosten", label: "Sockeldämmung Kosten", href: "/ratgeber/sockeldaemmung-kosten" },
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
