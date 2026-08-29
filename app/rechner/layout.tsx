import { socialMetadata } from "@/lib/social-metadata";

const title = "Baukosten Rechner 2026 - Renovierung & Handwerker";
const description = "Kostenrechner 2026 für Renovierung, Badsanierung und Handwerkerarbeiten in Deutschland. Mit Preisbändern, Regionalfaktoren, Einzelpreisen und Methodik.";

export const metadata = socialMetadata({
  title,
  description,
  url: "/rechner",
});

export default function CalculatorDirectoryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
