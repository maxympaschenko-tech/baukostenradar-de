import {
  withSupplementalGuideLinks as withGartenSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-garten";

export type { GuideSupplementalLink } from "./guide-supplemental-links-garten";

type MalerPeer = GuideSupplementalLink & { slug: string };

const malerPeers: MalerPeer[] = [
  { slug: "maler-kosten-pro-qm", label: "Maler Kosten pro m²", href: "/ratgeber/maler-kosten-pro-qm" },
  { slug: "maler-stundensatz", label: "Maler Stundensatz", href: "/ratgeber/maler-stundensatz" },
  { slug: "waende-streichen-kosten-pro-qm", label: "Wände streichen Kosten", href: "/ratgeber/waende-streichen-kosten-pro-qm" },
  { slug: "tapezieren-kosten-pro-qm", label: "Tapezieren Kosten", href: "/ratgeber/tapezieren-kosten-pro-qm" },
  { slug: "tapeten-entfernen-kosten-pro-qm", label: "Tapeten entfernen Kosten", href: "/ratgeber/tapeten-entfernen-kosten-pro-qm" },
  { slug: "innenputz-q3-kosten-pro-qm", label: "Innenputz Q3 Kosten", href: "/ratgeber/innenputz-q3-kosten-pro-qm" },
  { slug: "innentuer-lackieren-kosten", label: "Innentür lackieren Kosten", href: "/ratgeber/innentuer-lackieren-kosten" },
  { slug: "fensterrahmen-lackieren-kosten", label: "Fensterrahmen lackieren Kosten", href: "/ratgeber/fensterrahmen-lackieren-kosten" },
];

const malerSlugs = new Set(malerPeers.map((peer) => peer.slug));

export function withSupplementalGuideLinks(
  slug: string,
  related: GuideSupplementalLink[],
): GuideSupplementalLink[] {
  const base = withGartenSupplementalGuideLinks(slug, related);
  if (!malerSlugs.has(slug)) return base;

  const combined = [
    ...base,
    ...malerPeers
      .filter((peer) => peer.slug !== slug)
      .map(({ label, href }) => ({ label, href })),
  ];

  return combined.filter(
    (link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index,
  );
}
