import {
  withSupplementalGuideLinks as withFliesenSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-fliesen";

export type { GuideSupplementalLink } from "./guide-supplemental-links-fliesen";

type ElektrikerPeer = GuideSupplementalLink & { slug: string };

const elektrikerPeers: ElektrikerPeer[] = [
  { slug: "elektrik-erneuern-altbau", label: "Elektrik Altbau erneuern", href: "/ratgeber/elektrik-erneuern-altbau" },
  { slug: "elektrik-erneuern-100-qm-kosten", label: "Elektrik 100 m² Kosten", href: "/ratgeber/elektrik-erneuern-100-qm-kosten" },
  { slug: "elektro-neuinstallation-kosten", label: "Elektro-Neuinstallation Kosten", href: "/ratgeber/elektro-neuinstallation-kosten" },
  { slug: "elektroinstallation-neubau-kosten-pro-qm", label: "Elektroinstallation Neubau Kosten", href: "/ratgeber/elektroinstallation-neubau-kosten-pro-qm" },
  { slug: "sicherungskasten-erneuern-kosten", label: "Sicherungskasten erneuern", href: "/ratgeber/sicherungskasten-erneuern-kosten" },
  { slug: "fi-schutzschalter-nachruesten-kosten", label: "FI-Schutzschalter nachrüsten", href: "/ratgeber/fi-schutzschalter-nachruesten-kosten" },
  { slug: "steckdose-installieren-kosten", label: "Steckdose installieren Kosten", href: "/ratgeber/steckdose-installieren-kosten" },
  { slug: "lichtschalter-austauschen-kosten", label: "Lichtschalter austauschen Kosten", href: "/ratgeber/lichtschalter-austauschen-kosten" },
  { slug: "elektriker-anfahrt-kosten", label: "Elektriker Anfahrt Kosten", href: "/ratgeber/elektriker-anfahrt-kosten" },
  { slug: "smart-home-einrichtung-kosten", label: "Smart Home Einrichtung Kosten", href: "/ratgeber/smart-home-einrichtung-kosten" },
  { slug: "wallbox-installieren-kosten", label: "Wallbox installieren Kosten", href: "/ratgeber/wallbox-installieren-kosten" },
];

const elektrikerSlugs = new Set(elektrikerPeers.map((peer) => peer.slug));

export function withSupplementalGuideLinks(
  slug: string,
  related: GuideSupplementalLink[],
): GuideSupplementalLink[] {
  const base = withFliesenSupplementalGuideLinks(slug, related);
  if (!elektrikerSlugs.has(slug)) return base;

  const combined = [
    ...base,
    ...elektrikerPeers
      .filter((peer) => peer.slug !== slug)
      .map(({ label, href }) => ({ label, href })),
  ];

  return combined.filter(
    (link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index,
  );
}
