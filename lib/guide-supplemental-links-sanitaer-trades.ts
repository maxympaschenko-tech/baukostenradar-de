import {
  withSupplementalGuideLinks as withBodenSupplementalGuideLinks,
  type GuideSupplementalLink,
} from "./guide-supplemental-links-boden";

export type { GuideSupplementalLink } from "./guide-supplemental-links-boden";

type SanitPeer = GuideSupplementalLink & { slug: string };

const peers: SanitPeer[] = [
  { slug: "sanitaer-kosten", label: "Sanitär Kosten", href: "/ratgeber/sanitaer-kosten" },
  { slug: "sanitaer-anfahrt-kosten", label: "Sanitär Anfahrt Kosten", href: "/ratgeber/sanitaer-anfahrt-kosten" },
  { slug: "wasserhahn-montieren-kosten", label: "Wasserhahn montieren Kosten", href: "/ratgeber/wasserhahn-montieren-kosten" },
  { slug: "waschbecken-montieren-kosten", label: "Waschbecken montieren Kosten", href: "/ratgeber/waschbecken-montieren-kosten" },
  { slug: "wc-austauschen-kosten", label: "WC austauschen Kosten", href: "/ratgeber/wc-austauschen-kosten" },
  { slug: "spuelkasten-reparieren-kosten", label: "Spülkasten reparieren Kosten", href: "/ratgeber/spuelkasten-reparieren-kosten" },
  { slug: "dusch-wc-kosten", label: "Dusch-WC Kosten", href: "/ratgeber/dusch-wc-kosten" },
  { slug: "dusche-einbauen-kosten", label: "Dusche einbauen Kosten", href: "/ratgeber/dusche-einbauen-kosten" },
  { slug: "bodengleiche-dusche-kosten", label: "Bodengleiche Dusche Kosten", href: "/ratgeber/bodengleiche-dusche-kosten" },
  { slug: "badewanne-einbauen-kosten", label: "Badewanne einbauen Kosten", href: "/ratgeber/badewanne-einbauen-kosten" },
  { slug: "badewanne-durch-dusche-ersetzen-kosten", label: "Badewanne durch Dusche ersetzen", href: "/ratgeber/badewanne-durch-dusche-ersetzen-kosten" },
  { slug: "rohrverstopfung-beseitigen-kosten", label: "Rohrverstopfung beseitigen Kosten", href: "/ratgeber/rohrverstopfung-beseitigen-kosten" },
  { slug: "sanitaerobjekte-bad-kosten", label: "Sanitärobjekte und Armaturen Kosten", href: "/ratgeber/sanitaerobjekte-bad-kosten" },
  { slug: "bad-entkernen-kosten", label: "Bad entkernen Kosten", href: "/ratgeber/bad-entkernen-kosten" },
];

const slugs = new Set(peers.map((peer) => peer.slug));

export function withSupplementalGuideLinks(slug: string, related: GuideSupplementalLink[]): GuideSupplementalLink[] {
  const base = withBodenSupplementalGuideLinks(slug, related);
  if (!slugs.has(slug)) return base;
  const combined = [
    ...base,
    ...peers.filter((peer) => peer.slug !== slug).map(({ label, href }) => ({ label, href })),
  ];
  return combined.filter((link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index);
}
