import type { PriceItem, Service } from "@/lib/pricing";

export function priceItemSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/×/g, "x")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getPriceItem(service: Service, slug: string): PriceItem | undefined {
  return service.priceItems.find((item) => priceItemSlug(item.name) === slug);
}
