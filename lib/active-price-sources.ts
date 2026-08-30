import { priceSources, services } from "@/lib/pricing";

export function getActivePriceSources() {
  const sourceKeys = new Set<keyof typeof priceSources>();

  for (const service of services) {
    for (const item of service.priceItems) {
      sourceKeys.add(item.sourceKey);
    }
  }

  // Preserve distinct source records even when two editorial source entries
  // intentionally resolve to the same canonical URL. De-duplicating only by
  // URL can silently hide an active source name from the public directory.
  const uniqueSources = new Map<string, (typeof priceSources)[keyof typeof priceSources]>();

  for (const key of sourceKeys) {
    const source = priceSources[key];
    const identity = `${source.name}\n${source.url}`;
    uniqueSources.set(identity, source);
  }

  return Array.from(uniqueSources.values()).sort((a, b) => a.name.localeCompare(b.name, "de"));
}
