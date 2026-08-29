export type GuideSupplementalLink = {
  label: string;
  href: string;
};

type SupplementalGuide = GuideSupplementalLink & { slug: string };

const sanitaerGuideLinks: SupplementalGuide[] = [
  { slug: "sanitaer-kosten", label: "Sanitär Kosten", href: "/ratgeber/sanitaer-kosten" },
  { slug: "sanitaerobjekte-bad-kosten", label: "Sanitärobjekte und Armaturen Kosten", href: "/ratgeber/sanitaerobjekte-bad-kosten" },
  { slug: "bad-entkernen-kosten", label: "Bad entkernen Kosten", href: "/ratgeber/bad-entkernen-kosten" },
];

const kellerabdichtungGuideLinks: SupplementalGuide[] = [
  { slug: "kellerabdichtung-aussen-oder-innen-kosten", label: "Kellerabdichtung außen oder innen", href: "/ratgeber/kellerabdichtung-aussen-oder-innen-kosten" },
  { slug: "kellerabdichtung-aussen-kosten-pro-qm", label: "Kellerabdichtung außen Kosten pro m²", href: "/ratgeber/kellerabdichtung-aussen-kosten-pro-qm" },
  { slug: "kellerabdichtung-innen-kosten-pro-qm", label: "Kellerabdichtung innen Kosten pro m²", href: "/ratgeber/kellerabdichtung-innen-kosten-pro-qm" },
];

const tuerenGuideLinks: SupplementalGuide[] = [
  { slug: "6-innentueren-austauschen-kosten", label: "6 Innentüren austauschen Kosten", href: "/ratgeber/6-innentueren-austauschen-kosten" },
  { slug: "innentuer-einbauen-kosten", label: "Innentür einbauen Kosten", href: "/ratgeber/innentuer-einbauen-kosten" },
  { slug: "haustuer-einbauen-kosten", label: "Haustür einbauen Kosten", href: "/ratgeber/haustuer-einbauen-kosten" },
  { slug: "haustuer-kunststoff-kosten", label: "Haustür Kunststoff Kosten", href: "/ratgeber/haustuer-kunststoff-kosten" },
  { slug: "haustuer-rc2-kosten", label: "Haustür Holz/Alu RC2 Kosten", href: "/ratgeber/haustuer-rc2-kosten" },
];

const supplementalClusters = [sanitaerGuideLinks, kellerabdichtungGuideLinks, tuerenGuideLinks];

const supplementalByGuide: Record<string, GuideSupplementalLink[]> = Object.fromEntries(
  supplementalClusters.flatMap((cluster) =>
    cluster.map((source) => [
      source.slug,
      cluster
        .filter((target) => target.slug !== source.slug)
        .map(({ label, href }) => ({ label, href })),
    ]),
  ),
);

export function withSupplementalGuideLinks(
  slug: string,
  related: GuideSupplementalLink[],
): GuideSupplementalLink[] {
  const combined = [...related, ...(supplementalByGuide[slug] ?? [])];

  return combined.filter(
    (link, index) => combined.findIndex((candidate) => candidate.href === link.href) === index,
  );
}
