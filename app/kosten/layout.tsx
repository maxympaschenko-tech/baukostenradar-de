import { socialMetadata } from "@/lib/social-metadata";

const title = "Handwerker Kosten 2026 - Preise, Gewerke & Vergleich";
const description = "Handwerkerkosten 2026 in Deutschland vergleichen: aktuelle Richtwerte nach Gewerk, Preispositionen, Stadtfaktoren, Quellen und Rechner für Renovierung und Sanierung.";

export const metadata = socialMetadata({
  title,
  description,
  url: "/kosten",
});

export default function CostsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
