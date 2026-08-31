import { dachausbauGuides as baseDachausbauGuides } from "./guides-dachausbau";

function normalizeDachausbauHref(href: string | undefined) {
  if (!href) return href;
  return href
    .replace("/dachausbau-80-m-komplett-zum-wohnraum", "/dachausbau-80-m2-komplett-zum-wohnraum")
    .replace("/dachausbau-grundausbau-beispiel-80-m", "/dachausbau-grundausbau-beispiel-80-m2");
}

export const dachausbauGuides = baseDachausbauGuides.map((guide) => ({
  ...guide,
  sections: guide.sections.map((section) => ({
    ...section,
    ...(section.table
      ? {
          table: {
            ...section.table,
            rows: section.table.rows.map((row) => ({
              ...row,
              href: normalizeDachausbauHref(row.href),
            })),
          },
        }
      : {}),
  })),
  related: guide.related.map((link) => ({
    ...link,
    href: normalizeDachausbauHref(link.href) ?? link.href,
  })),
}));
