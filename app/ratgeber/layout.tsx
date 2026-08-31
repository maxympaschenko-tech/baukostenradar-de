import { socialMetadata } from "@/lib/social-metadata";

const title = "Ratgeber zu Sanierung, Renovierung & Handwerkerkosten 2026";
const description = "Ratgeber zu Sanierungskosten, Dach, Fenster, Elektrik, Heizung, Wärmepumpen, Photovoltaik, Dämmung, Kellerabdichtung, Fassaden, Garten und Außenanlagen, Sanitär, Malerarbeiten, Fliesen, Bodenbelägen, Trockenbau, Türen, Estrich, Abriss, Entsorgung, Maurerarbeiten, Treppen, Küchenrenovierung, Balkon, Garage, Carport, Schornstein, Kamin und konkreten Projektgrößen mit Richtwerten und Beispielbudgets.";

export const metadata = socialMetadata({
  title,
  description,
  url: "/ratgeber",
});

export default function GuidesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
