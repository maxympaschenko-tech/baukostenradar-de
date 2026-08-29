import { regions } from "@/lib/pricing";
import { socialMetadata } from "@/lib/social-metadata";

const cityCount = regions.filter((region) => region.value !== "de").length;
const title = "Handwerkerpreise nach Stadt 2026";
const description = `Handwerker- und Renovierungskosten 2026 nach Stadt vergleichen: Regionalfaktoren, Beispielbudgets und Detailseiten für ${cityCount} deutsche Großstädte.`;

export const metadata = socialMetadata({
  title,
  description,
  url: "/staedte",
});

export default function CitiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
