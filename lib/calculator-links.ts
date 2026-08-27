export type HandwerkerCalculatorLinkOptions = {
  serviceSlug?: string;
  itemSlug?: string;
  region?: string;
};

export function handwerkerCalculatorHref({
  serviceSlug,
  itemSlug,
  region,
}: HandwerkerCalculatorLinkOptions = {}) {
  const params = new URLSearchParams();

  if (serviceSlug) params.set("gewerk", serviceSlug);
  if (itemSlug) params.set("leistung", itemSlug);
  if (region) params.set("region", region);

  const query = params.toString();
  return query ? `/rechner/handwerkerkosten?${query}` : "/rechner/handwerkerkosten";
}
