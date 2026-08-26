import type { Metadata } from "next";
import Link from "next/link";
import { regions } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Handwerkerpreise nach Stadt 2026",
  description: "Regionale Einordnung von Renovierungs- und Handwerkerkosten für Berlin, Hamburg, München, Köln, Frankfurt, Stuttgart, Düsseldorf und Leipzig.",
  alternates: { canonical: "/staedte" },
};

export default function CitiesPage() {
  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <nav className="visibleBreadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Startseite</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Städte</span>
          </nav>
          <span className="eyebrow">Regionale Kosten</span>
          <h1>Handwerkerpreise nach Stadt</h1>
          <p>Großstädte unterscheiden sich beim Lohnniveau, bei der Nachfrage und bei Anfahrtskosten. Unsere Stadtseiten zeigen eine erste modellierte Einordnung.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell cityGrid cityGridLarge">
          {regions.filter((region) => region.value !== "de").map((region) => (
            <Link key={region.value} href={`/staedte/${region.slug}`} className="cityCard cityCardLarge">
              <strong>{region.label}</strong>
              <span>{region.factor >= 1 ? "+" : ""}{Math.round((region.factor - 1) * 100)} % Modellfaktor</span>
              <small>Preisübersicht öffnen →</small>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
