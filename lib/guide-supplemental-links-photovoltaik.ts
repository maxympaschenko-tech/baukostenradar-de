import {
  withSupplementalGuideLinks as withBaseSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links";

export type { GuideSupplementalLink } from "./guide-supplemental-links";

type PhotovoltaikPeer = GuideSupplementalLink & { slug: string };

const photovoltaikPeers: PhotovoltaikPeer[] = [
  { slug: "photovoltaik-kosten-2026", label: "Photovoltaik Kosten 2026", href: "/ratgeber/photovoltaik-kosten-2026" },
  { slug: "photovoltaik-4-kwp-kosten", label: "Photovoltaik 4 kWp Kosten", href: "/ratgeber/photovoltaik-4-kwp-kosten" },
  { slug: "photovoltaik-5-kwp-kosten", label: "Photovoltaik 5 kWp Kosten", href: "/ratgeber/photovoltaik-5-kwp-kosten" },
  { slug: "photovoltaik-10-kwp-kosten", label: "Photovoltaik 10 kWp Kosten", href: "/ratgeber/photovoltaik-10-kwp-kosten" },
  { slug: "photovoltaik-15-kwp-kosten", label: "Photovoltaik 15 kWp Kosten", href: "/ratgeber/photovoltaik-15-kwp-kosten" },
  { slug: "photovoltaik-20-kwp-kosten", label: "Photovoltaik 20 kWp Kosten", href: "/ratgeber/photovoltaik-20-kwp-kosten" },
  { slug: "photovoltaik-25-kwp-kosten", label: "Photovoltaik 25 kWp Kosten", href: "/ratgeber/photovoltaik-25-kwp-kosten" },
  { slug: "photovoltaik-mit-speicher-kosten", label: "Photovoltaik mit Speicher Kosten", href: "/ratgeber/photovoltaik-mit-speicher-kosten" },
  { slug: "stromspeicher-kosten-pro-kwh", label: "Stromspeicher Kosten pro kWh", href: "/ratgeber/stromspeicher-kosten-pro-kwh" },
  { slug: "stromspeicher-5-10-15-kwh-kosten", label: "Stromspeicher 5, 10 und 15 kWh Kosten", href: "/ratgeber/stromspeicher-5-10-15-kwh-kosten" },
  { slug: "stromspeicher-installation-kosten", label: "Stromspeicher Installation Kosten", href: "/ratgeber/stromspeicher-installation-kosten" },
  { slug: "pv-wechselrichter-kosten", label: "PV-Wechselrichter Kosten", href: "/ratgeber/pv-wechselrichter-kosten" },
  { slug: "pv-smart-meter-kosten", label: "PV Smart Meter Kosten", href: "/ratgeber/pv-smart-meter-kosten" },
  { slug: "photovoltaik-notstrom-backup-kosten", label: "Photovoltaik Notstrom und Backup Kosten", href: "/ratgeber/photovoltaik-notstrom-backup-kosten" },
  { slug: "photovoltaik-betriebskosten", label: "Photovoltaik Betriebskosten", href: "/ratgeber/photovoltaik-betriebskosten" },
];

const photovoltaikSlugs = new Set(photovoltaikPeers.map((peer) => peer.slug));

export function withSupplementalGuideLinks(
  slug: string,
  related: GuideSupplementalLink[],
): GuideSupplementalLink[] {
  const base = withBaseSupplementalGuideLinks(slug, related);
  if (!photovoltaikSlugs.has(slug)) return base;

  const combined = [
    ...base,
    ...photovoltaikPeers
      .filter((peer) => peer.slug !== slug)
      .map(({ label, href }) => ({ label, href })),
  ];

  return combined.filter(
    (link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index,
  );
}
