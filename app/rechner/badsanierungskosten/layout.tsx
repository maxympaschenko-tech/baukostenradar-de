import { socialMetadata } from "@/lib/social-metadata";

const title = "Badsanierung Kosten Rechner 2026";
const description = "Badsanierungskosten 2026 nach Badgröße und Region online berechnen. Mit transparentem m²-Richtwert, Regionalfaktor, Einzelpreisen, Quellen und Stadtvergleich.";

export const metadata = socialMetadata({
  title,
  description,
  url: "/rechner/badsanierungskosten",
});

export default function BathCalculatorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
