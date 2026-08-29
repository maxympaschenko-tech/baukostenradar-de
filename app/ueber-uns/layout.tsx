import { socialMetadata } from "@/lib/social-metadata";

const title = "Über BauKostenRadar";
const description = "Wer BauKostenRadar betreibt, wie Preisangaben recherchiert werden und nach welchen Grundsätzen Richtwerte, Quellen und Modelle veröffentlicht werden.";

export const metadata = socialMetadata({
  title,
  description,
  url: "/ueber-uns",
});

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
