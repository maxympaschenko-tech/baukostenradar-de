import { priceSources, services } from "@/lib/pricing";

export function getActivePriceSources() {
  const sourceKeys = new Set<keyof typeof priceSources>();

  for (const service of services) {
    for (const item of service.priceItems) {
      sourceKeys.add(item.sourceKey);
    }
  }

  const uniqueByUrl = new Map<string, (typeof priceSources)[keyof typeof priceSources]>();

  for (const key of sourceKeys) {
    const source = priceSources[key];
    uniqueByUrl.set(source.url, source);
  }

  return Array.from(uniqueByUrl.values()).sort((a, b) => a.name.localeCompare(b.name, "de"));
}
