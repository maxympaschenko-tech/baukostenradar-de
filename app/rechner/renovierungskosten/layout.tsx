import { socialMetadata } from "@/lib/social-metadata";

const title = "Renovierungskosten Rechner 2026";
const description = "Renovierungskosten 2026 nach Wohnfläche, Sanierungsumfang, Standard und Region kalkulieren. Mit Richtwerten pro m², Gewerken, Stadtvergleich und Ratgebern.";

export const metadata = socialMetadata({
  title,
  description,
  url: "/rechner/renovierungskosten",
});

export default function RenovationCalculatorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
