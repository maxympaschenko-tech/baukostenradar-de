export type GuideSupplementalLink = {
  label: string;
  href: string;
};

const sanitaerGuideLinks = [
  { slug: "sanitaer-kosten", label: "Sanitär Kosten", href: "/ratgeber/sanitaer-kosten" },
  { slug: "sanitaerobjekte-bad-kosten", label: "Sanitärobjekte und Armaturen Kosten", href: "/ratgeber/sanitaerobjekte-bad-kosten" },
  { slug: "bad-entkernen-kosten", label: "Bad entkernen Kosten", href: "/ratgeber/bad-entkernen-kosten" },
] as const;

const supplementalByGuide: Record<string, GuideSupplementalLink[]> = Object.fromEntries(
  sanitaerGuideLinks.map((source) => [
    source.slug,
    sanitaerGuideLinks
      .filter((target) => target.slug !== source.slug)
      .map(({ label, href }) => ({ label, href })),
  ]),
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
