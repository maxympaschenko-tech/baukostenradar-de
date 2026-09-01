import {
  withSupplementalGuideLinks as withTrockenbauSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-trockenbau";

export type { GuideSupplementalLink } from "./guide-supplemental-links-trockenbau";

type FliesenPeer = GuideSupplementalLink & { slug: string };

const fliesenPeers: FliesenPeer[] = [
  { slug: "fliesenleger-kosten-pro-qm", label: "Fliesenleger Kosten pro m²", href: "/ratgeber/fliesenleger-kosten-pro-qm" },
  { slug: "fliesenleger-stundensatz", label: "Fliesenleger Stundensatz", href: "/ratgeber/fliesenleger-stundensatz" },
  { slug: "fliesen-verlegen-kosten-pro-qm", label: "Fliesen verlegen Kosten", href: "/ratgeber/fliesen-verlegen-kosten-pro-qm" },
  { slug: "fliese-auf-fliese-kosten-pro-qm", label: "Fliese auf Fliese Kosten", href: "/ratgeber/fliese-auf-fliese-kosten-pro-qm" },
  { slug: "fliesen-untergrund-ausgleichen-kosten", label: "Untergrund ausgleichen Kosten", href: "/ratgeber/fliesen-untergrund-ausgleichen-kosten" },
  { slug: "grossformat-fliesen-verlegen-kosten", label: "Großformat-Fliesen Kosten", href: "/ratgeber/grossformat-fliesen-verlegen-kosten" },
  { slug: "mosaik-fliesen-verlegen-kosten-pro-qm", label: "Mosaik-Fliesen Kosten", href: "/ratgeber/mosaik-fliesen-verlegen-kosten-pro-qm" },
  { slug: "naturstein-verlegen-kosten-pro-qm", label: "Naturstein verlegen Kosten", href: "/ratgeber/naturstein-verlegen-kosten-pro-qm" },
  { slug: "silikonfugen-kosten-pro-meter", label: "Silikonfugen Kosten", href: "/ratgeber/silikonfugen-kosten-pro-meter" },
  { slug: "fliesen-sockelleisten-kosten-pro-meter", label: "Fliesen-Sockelleisten Kosten", href: "/ratgeber/fliesen-sockelleisten-kosten-pro-meter" },
];

const fliesenSlugs = new Set(fliesenPeers.map((peer) => peer.slug));

export function withSupplementalGuideLinks(
  slug: string,
  related: GuideSupplementalLink[],
): GuideSupplementalLink[] {
  const base = withTrockenbauSupplementalGuideLinks(slug, related);
  if (!fliesenSlugs.has(slug)) return base;

  const combined = [
    ...base,
    ...fliesenPeers
      .filter((peer) => peer.slug !== slug)
      .map(({ label, href }) => ({ label, href })),
  ];

  return combined.filter(
    (link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index,
  );
}
