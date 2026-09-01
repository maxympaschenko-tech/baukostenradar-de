import {
  withSupplementalGuideLinks as withMalerSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-maler";

export type { GuideSupplementalLink } from "./guide-supplemental-links-maler";

type TrockenbauPeer = GuideSupplementalLink & { slug: string };

const trockenbauPeers: TrockenbauPeer[] = [
  { slug: "trockenbau-kosten-pro-qm", label: "Trockenbau Kosten pro m²", href: "/ratgeber/trockenbau-kosten-pro-qm" },
  { slug: "trockenbauer-stundensatz", label: "Trockenbauer Stundensatz", href: "/ratgeber/trockenbauer-stundensatz" },
  { slug: "trockenbauwand-kosten-pro-qm", label: "Trockenbauwand Kosten", href: "/ratgeber/trockenbauwand-kosten-pro-qm" },
  { slug: "trennwand-holz-kosten-pro-qm", label: "Holz-Trennwand Kosten", href: "/ratgeber/trennwand-holz-kosten-pro-qm" },
  { slug: "vorsatzschale-kosten-pro-qm", label: "Vorsatzschale Kosten", href: "/ratgeber/vorsatzschale-kosten-pro-qm" },
  { slug: "decke-abhaengen-kosten-pro-qm", label: "Decke abhängen Kosten", href: "/ratgeber/decke-abhaengen-kosten-pro-qm" },
  { slug: "dachschraege-verkleiden-kosten-pro-qm", label: "Dachschräge verkleiden Kosten", href: "/ratgeber/dachschraege-verkleiden-kosten-pro-qm" },
  { slug: "verspachtelung-q3-kosten-pro-qm", label: "Verspachtelung Q3 Kosten", href: "/ratgeber/verspachtelung-q3-kosten-pro-qm" },
  { slug: "verspachtelung-q4-kosten-pro-qm", label: "Verspachtelung Q4 Kosten", href: "/ratgeber/verspachtelung-q4-kosten-pro-qm" },
];

const trockenbauSlugs = new Set(trockenbauPeers.map((peer) => peer.slug));

export function withSupplementalGuideLinks(
  slug: string,
  related: GuideSupplementalLink[],
): GuideSupplementalLink[] {
  const base = withMalerSupplementalGuideLinks(slug, related);
  if (!trockenbauSlugs.has(slug)) return base;

  const combined = [
    ...base,
    ...trockenbauPeers
      .filter((peer) => peer.slug !== slug)
      .map(({ label, href }) => ({ label, href })),
  ];

  return combined.filter(
    (link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index,
  );
}
