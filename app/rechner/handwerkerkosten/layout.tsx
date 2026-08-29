import { services } from "@/lib/pricing";
import { socialMetadata } from "@/lib/social-metadata";

const priceCount = services.reduce((sum, service) => sum + service.priceItems.length, 0);
const title = "Handwerkerkosten Rechner 2026";
const description = `Handwerkerkosten online berechnen: Gewerk, Leistung, Menge und Region auswählen. Mit ${priceCount} Preispositionen, Einzelpreisen, Stadtvergleich und Quellen.`;

export const metadata = socialMetadata({
  title,
  description,
  url: "/rechner/handwerkerkosten",
});

export default function TradeCalculatorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
