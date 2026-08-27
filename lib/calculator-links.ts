export type HandwerkerCalculatorLinkOptions = {
  serviceSlug?: string;
  itemSlug?: string;
  region?: string;
  quantity?: number;
};

export function handwerkerCalculatorHref({
  serviceSlug,
  itemSlug,
  region,
  quantity,
}: HandwerkerCalculatorLinkOptions = {}) {
  const params = new URLSearchParams();

  if (serviceSlug) params.set("gewerk", serviceSlug);
  if (itemSlug) params.set("leistung", itemSlug);
  if (region) params.set("region", region);
  if (Number.isFinite(quantity) && quantity !== undefined && quantity >= 0.1 && quantity <= 10000) {
    params.set("menge", String(quantity));
  }

  const query = params.toString();
  return query ? `/rechner/handwerkerkosten?${query}` : "/rechner/handwerkerkosten";
}
