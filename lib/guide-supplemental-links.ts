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

const estrichGuideLinks: SupplementalGuide[] = [
  { slug: "estrich-100-qm-kosten", label: "Estrich 100 m² Kosten", href: "/ratgeber/estrich-100-qm-kosten" },
  { slug: "zementestrich-kosten-pro-qm", label: "Zementestrich Kosten pro m²", href: "/ratgeber/zementestrich-kosten-pro-qm" },
  { slug: "fliessestrich-kosten-pro-qm", label: "Fließestrich Kosten pro m²", href: "/ratgeber/fliessestrich-kosten-pro-qm" },
  { slug: "trockenestrich-kosten-pro-qm", label: "Trockenestrich Kosten pro m²", href: "/ratgeber/trockenestrich-kosten-pro-qm" },
  { slug: "schnellestrich-kosten-pro-qm", label: "Schnellestrich Kosten pro m²", href: "/ratgeber/schnellestrich-kosten-pro-qm" },
  { slug: "bodenausgleich-kosten-pro-qm", label: "Bodenausgleich Kosten pro m²", href: "/ratgeber/bodenausgleich-kosten-pro-qm" },
  { slug: "estrich-rissreparatur-kosten", label: "Estrich-Rissreparatur Kosten", href: "/ratgeber/estrich-rissreparatur-kosten" },
];

const abrissGuideLinks: SupplementalGuide[] = [
  { slug: "haus-abreissen-kosten", label: "Haus abreißen Kosten", href: "/ratgeber/haus-abreissen-kosten" },
  { slug: "abbruch-kosten-pro-m3", label: "Abbruch Kosten pro m³", href: "/ratgeber/abbruch-kosten-pro-m3" },
  { slug: "innenabbruch-einfamilienhaus-kosten", label: "Innenabbruch Einfamilienhaus Kosten", href: "/ratgeber/innenabbruch-einfamilienhaus-kosten" },
  { slug: "industriehalle-abbrechen-kosten-pro-qm", label: "Industriehalle abbrechen Kosten pro m²", href: "/ratgeber/industriehalle-abbrechen-kosten-pro-qm" },
  { slug: "bauschuttcontainer-30-m3-kosten", label: "Bauschuttcontainer 30 m³ Kosten", href: "/ratgeber/bauschuttcontainer-30-m3-kosten" },
];

const renovationAreaGuideLinks: SupplementalGuide[] = [
  { slug: "wohnung-renovieren-kosten", label: "Wohnung renovieren Kosten", href: "/ratgeber/wohnung-renovieren-kosten" },
  { slug: "renovierungskosten-haus", label: "Renovierungskosten Haus", href: "/ratgeber/renovierungskosten-haus" },
  { slug: "renovierungskosten-100-qm", label: "Renovierungskosten 100 m²", href: "/ratgeber/renovierungskosten-100-qm" },
  { slug: "haus-renovieren-150-qm-kosten", label: "Haus renovieren 150 m²", href: "/ratgeber/haus-renovieren-150-qm-kosten" },
  { slug: "haus-renovieren-200-qm-kosten", label: "Haus renovieren 200 m²", href: "/ratgeber/haus-renovieren-200-qm-kosten" },
];

const supplementalClusters = [
  sanitaerGuideLinks,
  kellerabdichtungGuideLinks,
  tuerenGuideLinks,
  estrichGuideLinks,
  abrissGuideLinks,
  renovationAreaGuideLinks,
];

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
