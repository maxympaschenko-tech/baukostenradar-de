import type { Guide } from "@/lib/guides";

// Kept as an empty compatibility module so the existing guide registry import
// remains stable. The Flachdach Warmdach/Kaltdach guides live in
// guides-opportunities-septenary.ts, while the comparison guide lives in
// guides-comparisons-secondary.ts. Do not duplicate those slugs here.
export const octonaryOpportunityGuides: Guide[] = [];
