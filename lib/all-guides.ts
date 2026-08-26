import { guides as primaryGuides } from "@/lib/guides";
import { secondaryGuides } from "@/lib/guides-secondary";

export const allGuides = [...primaryGuides, ...secondaryGuides];

export function getAnyGuide(slug: string) {
  return allGuides.find((guide) => guide.slug === slug);
}
