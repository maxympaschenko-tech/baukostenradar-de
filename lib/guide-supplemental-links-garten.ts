import {
  withSupplementalGuideLinks as withPhotovoltaikSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-photovoltaik";

export type { GuideSupplementalLink } from "./guide-supplemental-links-photovoltaik";

type GartenPeer = GuideSupplementalLink & { slug: string };

const gartenPeers: GartenPeer[] = [
  { slug: "garten-anlegen-kosten", label: "Garten anlegen Kosten", href: "/ratgeber/garten-anlegen-kosten" },
  { slug: "einfahrt-pflastern-kosten", label: "Einfahrt pflastern Kosten", href: "/ratgeber/einfahrt-pflastern-kosten" },
  { slug: "terrasse-pflastern-kosten", label: "Terrasse pflastern Kosten", href: "/ratgeber/terrasse-pflastern-kosten" },
  { slug: "pflasterarbeiten-kosten-pro-qm", label: "Pflasterarbeiten Kosten pro m²", href: "/ratgeber/pflasterarbeiten-kosten-pro-qm" },
  { slug: "rasen-anlegen-kosten-pro-qm", label: "Rasen anlegen Kosten", href: "/ratgeber/rasen-anlegen-kosten-pro-qm" },
  { slug: "rollrasen-kosten-pro-qm", label: "Rollrasen Kosten pro m²", href: "/ratgeber/rollrasen-kosten-pro-qm" },
  { slug: "hecke-pflanzen-kosten-pro-meter", label: "Hecke pflanzen Kosten", href: "/ratgeber/hecke-pflanzen-kosten-pro-meter" },
  { slug: "heckenschnitt-kosten-pro-meter", label: "Heckenschnitt Kosten", href: "/ratgeber/heckenschnitt-kosten-pro-meter" },
  { slug: "garten-landschaftsbauer-stundensatz", label: "Garten- und Landschaftsbauer Stundensatz", href: "/ratgeber/garten-landschaftsbauer-stundensatz" },
  { slug: "baumpflege-kosten", label: "Baumpflege Kosten", href: "/ratgeber/baumpflege-kosten" },
  { slug: "baum-faellen-kosten", label: "Baum fällen Kosten", href: "/ratgeber/baum-faellen-kosten" },
  { slug: "doppelstabmattenzaun-kosten-pro-meter", label: "Doppelstabmattenzaun Kosten", href: "/ratgeber/doppelstabmattenzaun-kosten-pro-meter" },
];

const gartenSlugs = new Set(gartenPeers.map((peer) => peer.slug));

export function withSupplementalGuideLinks(
  slug: string,
  related: GuideSupplementalLink[],
): GuideSupplementalLink[] {
  const base = withPhotovoltaikSupplementalGuideLinks(slug, related);
  if (!gartenSlugs.has(slug)) return base;

  const combined = [
    ...base,
    ...gartenPeers
      .filter((peer) => peer.slug !== slug)
      .map(({ label, href }) => ({ label, href })),
  ];

  return combined.filter(
    (link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index,
  );
}
