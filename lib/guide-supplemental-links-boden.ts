import {
  withSupplementalGuideLinks as withElektrikerSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-elektriker";

export type { GuideSupplementalLink } from "./guide-supplemental-links-elektriker";

type BodenPeer = GuideSupplementalLink & { slug: string };

const bodenPeers: BodenPeer[] = [
  { slug: "bodenleger-kosten-pro-qm", label: "Bodenleger Kosten pro m²", href: "/ratgeber/bodenleger-kosten-pro-qm" },
  { slug: "bodenleger-stundensatz", label: "Bodenleger Stundensatz", href: "/ratgeber/bodenleger-stundensatz" },
  { slug: "vinylboden-verlegen-kosten-pro-qm", label: "Vinylboden verlegen Kosten", href: "/ratgeber/vinylboden-verlegen-kosten-pro-qm" },
  { slug: "klick-vinyl-verlegen-kosten-pro-qm", label: "Klick-Vinyl Arbeitskosten", href: "/ratgeber/klick-vinyl-verlegen-kosten-pro-qm" },
  { slug: "klebe-vinyl-verlegen-kosten-pro-qm", label: "Klebe-Vinyl Arbeitskosten", href: "/ratgeber/klebe-vinyl-verlegen-kosten-pro-qm" },
  { slug: "parkett-verlegen-kosten-pro-qm", label: "Parkett verlegen Kosten", href: "/ratgeber/parkett-verlegen-kosten-pro-qm" },
  { slug: "laminat-verlegen-kosten-pro-qm", label: "Laminat verlegen Kosten", href: "/ratgeber/laminat-verlegen-kosten-pro-qm" },
  { slug: "bodenbelag-entfernen-kosten-pro-qm", label: "Bodenbelag entfernen Kosten", href: "/ratgeber/bodenbelag-entfernen-kosten-pro-qm" },
  { slug: "boden-vorbereiten-ausgleichen-kosten-pro-qm", label: "Boden vorbereiten Kosten", href: "/ratgeber/boden-vorbereiten-ausgleichen-kosten-pro-qm" },
  { slug: "boden-sanieren-kosten-pro-qm", label: "Boden sanieren Kosten", href: "/ratgeber/boden-sanieren-kosten-pro-qm" },
  { slug: "parkett-abschleifen-kosten", label: "Parkett abschleifen Kosten", href: "/ratgeber/parkett-abschleifen-kosten" },
];

const bodenSlugs = new Set(bodenPeers.map((peer) => peer.slug));

export function withSupplementalGuideLinks(
  slug: string,
  related: GuideSupplementalLink[],
): GuideSupplementalLink[] {
  const base = withElektrikerSupplementalGuideLinks(slug, related);
  if (!bodenSlugs.has(slug)) return base;

  const combined = [
    ...base,
    ...bodenPeers
      .filter((peer) => peer.slug !== slug)
      .map(({ label, href }) => ({ label, href })),
  ];

  return combined.filter(
    (link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index,
  );
}
