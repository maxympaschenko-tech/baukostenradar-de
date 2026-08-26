import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RenovationCalculator } from "@/components/renovation-calculator";
import { getService, services } from "@/lib/pricing";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/kosten/${service.slug}` },
  };
}

export default async function CostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Kostenübersicht</span>
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </section>

      <div className="shell contentGrid">
        <div>
          <section className="contentCard">
            <h2>Welche Kosten werden berücksichtigt?</h2>
            <p>
              Die Preislogik von BauKostenRadar trennt Arbeitsleistung, Material und Reserve.
              Für jede Leistung wird zusätzlich ein regionaler Faktor vorgesehen, damit später
              Stadt- und Bundeslandunterschiede aus derselben Datenbasis berechnet werden können.
            </p>
            <div className="notice">
              Die öffentliche Marktpreistabelle für diesen Bereich wird erst veröffentlicht,
              sobald die zugrunde liegenden deutschen Preisdaten geprüft und dokumentiert sind.
            </div>
          </section>

          <section className="contentCard">
            <h2>So soll die Preisübersicht aufgebaut sein</h2>
            <p>
              Einheit: <strong>{service.unit}</strong>. Geplant sind typische Preisspannen,
              Materialanteil, Zusatzkosten, regionale Abweichungen, Beispielprojekte und eine
              nachvollziehbare Datenmethodik statt einer einzelnen pauschalen Zahl.
            </p>
            <Link className="primaryButton" href="/rechner/renovierungskosten">
              Renovierungsbudget berechnen
            </Link>
          </section>
        </div>

        <aside className="sidebarSticky">
          <RenovationCalculator compact />
        </aside>
      </div>
    </>
  );
}
