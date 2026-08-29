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

const supplementalClusters = [sanitaerGuideLinks, kellerabdichtungGuideLinks];

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
