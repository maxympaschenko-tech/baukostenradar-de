import { allGuides as baseAllGuides } from "./all-guides";
import { doorGuides } from "./guides-doors";

const doorRelatedLinks = {
  kunststoff: {
    label: "Haustür Kunststoff Kosten",
    href: "/ratgeber/haustuer-kunststoff-kosten",
  },
  rc2: {
    label: "Haustür Holz/Alu RC2 Kosten",
    href: "/ratgeber/haustuer-rc2-kosten",
  },
} as const;

const masonryRelatedLinks = {
  innenwand: {
    label: "Innenwand mauern Kosten",
    href: "/ratgeber/innenwand-mauern-kosten",
  },
  kalksandstein: {
    label: "Kalksandstein-Mauerwerk Kosten",
    href: "/ratgeber/kalksandstein-mauerwerk-kosten-pro-qm",
  },
  poroton: {
    label: "Poroton-Mauerwerk Kosten",
    href: "/ratgeber/poroton-mauerwerk-kosten-pro-qm",
  },
  porenbeton: {
    label: "Porenbeton-Mauerwerk Kosten",
    href: "/ratgeber/porenbeton-mauerwerk-kosten-pro-qm",
  },
  klinker: {
    label: "Klinkerfassade und Verblendmauerwerk Kosten",
    href: "/ratgeber/klinkerfassade-kosten-pro-qm",
  },
  bodenplatte: {
    label: "Bodenplatte Kosten",
    href: "/ratgeber/bodenplatte-kosten-pro-qm",
  },
  klinkerCalculator: {
    label: "Klinker-Verblendmauerwerk berechnen",
    href: "/rechner/handwerkerkosten?gewerk=maurer&leistung=klinker-verblendmauerwerk",
  },
} as const;

const treppenGuideLinks = [
  { slug: "14-treppenstufen-renovieren-kosten", label: "14 Treppenstufen renovieren Kosten", href: "/ratgeber/14-treppenstufen-renovieren-kosten" },
  { slug: "treppenrenovierung-holzstufen-system-kosten", label: "Treppenrenovierung mit Holzstufen-System", href: "/ratgeber/treppenrenovierung-holzstufen-system-kosten" },
  { slug: "holztreppe-schleifen-kosten", label: "Holztreppe schleifen Kosten", href: "/ratgeber/holztreppe-schleifen-kosten" },
  { slug: "treppen-stufenueberbau-gelaender-kosten", label: "Stufenüberbau und Geländer Kosten", href: "/ratgeber/treppen-stufenueberbau-gelaender-kosten" },
  { slug: "betontreppe-neuer-belag-kosten", label: "Betontreppe mit neuem Belag Kosten", href: "/ratgeber/betontreppe-neuer-belag-kosten" },
  { slug: "natursteintreppe-schleifen-kosten", label: "Natursteintreppe schleifen Kosten", href: "/ratgeber/natursteintreppe-schleifen-kosten" },
] as const;

const kitchenGuideLinks = [
  { slug: "kueche-10-qm-renovieren-kosten", label: "10 m² Küche renovieren Kosten", href: "/ratgeber/kueche-10-qm-renovieren-kosten" },
  { slug: "kuechenfronten-erneuern-kosten", label: "Küchenfronten erneuern Kosten", href: "/ratgeber/kuechenfronten-erneuern-kosten" },
  { slug: "kuechenarbeitsplatte-kosten", label: "Küchenarbeitsplatte erneuern Kosten", href: "/ratgeber/kuechenarbeitsplatte-kosten" },
  { slug: "fliesenspiegel-erneuern-kosten", label: "Fliesenspiegel erneuern Kosten", href: "/ratgeber/fliesenspiegel-erneuern-kosten" },
  { slug: "kueche-elektrogeraete-kosten", label: "Küchengeräte Kosten", href: "/ratgeber/kueche-elektrogeraete-kosten" },
  { slug: "einbaukueche-kosten", label: "Einbauküche Kosten", href: "/ratgeber/einbaukueche-kosten" },
  { slug: "premium-kueche-umbau-kosten", label: "Premium-Küche mit Umbau Kosten", href: "/ratgeber/premium-kueche-umbau-kosten" },
] as const;

const windowGuideLinks = [
  { slug: "fenster-austauschen-kosten-haus", label: "Fenster austauschen Kosten", href: "/ratgeber/fenster-austauschen-kosten-haus" },
  { slug: "20-fenster-austauschen-kosten", label: "20 Fenster austauschen Kosten", href: "/ratgeber/20-fenster-austauschen-kosten" },
  { slug: "fenster-2-fach-verglasung-kosten", label: "Fenster mit 2-fach Verglasung Kosten", href: "/ratgeber/fenster-2-fach-verglasung-kosten" },
  { slug: "fenster-3-fach-verglasung-kosten", label: "Fenster mit 3-fach Verglasung Kosten", href: "/ratgeber/fenster-3-fach-verglasung-kosten" },
  { slug: "fenstereinbau-kosten", label: "Fenstereinbau Kosten", href: "/ratgeber/fenstereinbau-kosten" },
] as const;

function peers<T extends readonly { slug: string; label: string; href: string }[]>(links: T, slug: string) {
  return links
    .filter((link) => link.slug !== slug)
    .map(({ label, href }) => ({ label, href }));
}

const relatedByGuide: Record<string, Array<{ label: string; href: string }>> = {
  "haustuer-einbauen-kosten": [doorRelatedLinks.kunststoff, doorRelatedLinks.rc2],
  "innentuer-einbauen-kosten": [doorRelatedLinks.kunststoff, doorRelatedLinks.rc2],
  "innenwand-mauern-kosten": [masonryRelatedLinks.klinker],
  "kalksandstein-mauerwerk-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "poroton-mauerwerk-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "porenbeton-mauerwerk-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "bodenplatte-kosten-pro-qm": [masonryRelatedLinks.klinker],
  "klinkerfassade-kosten-pro-qm": [
    masonryRelatedLinks.innenwand,
    masonryRelatedLinks.kalksandstein,
    masonryRelatedLinks.poroton,
    masonryRelatedLinks.porenbeton,
    masonryRelatedLinks.bodenplatte,
    masonryRelatedLinks.klinkerCalculator,
  ],
  "14-treppenstufen-renovieren-kosten": peers(treppenGuideLinks, "14-treppenstufen-renovieren-kosten"),
  "treppenrenovierung-holzstufen-system-kosten": peers(treppenGuideLinks, "treppenrenovierung-holzstufen-system-kosten"),
  "holztreppe-schleifen-kosten": peers(treppenGuideLinks, "holztreppe-schleifen-kosten"),
  "treppen-stufenueberbau-gelaender-kosten": peers(treppenGuideLinks, "treppen-stufenueberbau-gelaender-kosten"),
  "betontreppe-neuer-belag-kosten": peers(treppenGuideLinks, "betontreppe-neuer-belag-kosten"),
  "natursteintreppe-schleifen-kosten": peers(treppenGuideLinks, "natursteintreppe-schleifen-kosten"),
  "kueche-10-qm-renovieren-kosten": peers(kitchenGuideLinks, "kueche-10-qm-renovieren-kosten"),
  "kuechenfronten-erneuern-kosten": peers(kitchenGuideLinks, "kuechenfronten-erneuern-kosten"),
  "kuechenarbeitsplatte-kosten": peers(kitchenGuideLinks, "kuechenarbeitsplatte-kosten"),
  "fliesenspiegel-erneuern-kosten": peers(kitchenGuideLinks, "fliesenspiegel-erneuern-kosten"),
  "kueche-elektrogeraete-kosten": peers(kitchenGuideLinks, "kueche-elektrogeraete-kosten"),
  "einbaukueche-kosten": peers(kitchenGuideLinks, "einbaukueche-kosten"),
  "premium-kueche-umbau-kosten": peers(kitchenGuideLinks, "premium-kueche-umbau-kosten"),
  "fenster-austauschen-kosten-haus": peers(windowGuideLinks, "fenster-austauschen-kosten-haus"),
  "20-fenster-austauschen-kosten": peers(windowGuideLinks, "20-fenster-austauschen-kosten"),
  "fenster-2-fach-verglasung-kosten": peers(windowGuideLinks, "fenster-2-fach-verglasung-kosten"),
  "fenster-3-fach-verglasung-kosten": peers(windowGuideLinks, "fenster-3-fach-verglasung-kosten"),
  "fenstereinbau-kosten": peers(windowGuideLinks, "fenstereinbau-kosten"),
};

const enrichedBaseGuides = baseAllGuides.map((guide) => {
  const candidates = relatedByGuide[guide.slug];
  if (!candidates) return guide;

  const missingLinks = candidates.filter(
    (candidate) => !guide.related.some((link) => link.href === candidate.href),
  );
  if (missingLinks.length === 0) return guide;

  return { ...guide, related: [...guide.related, ...missingLinks] };
});

export const allGuides = [...enrichedBaseGuides, ...doorGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
