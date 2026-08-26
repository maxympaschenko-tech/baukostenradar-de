import type { Metadata } from "next";
import { ProjectRequestForm } from "@/components/project-request-form";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projektanfrage für Renovierung und Handwerker",
  description: "Renovierungs- oder Handwerkerprojekt strukturiert an BauKostenRadar senden: Leistung, Region, Budget und Zeitraum angeben.",
  alternates: { canonical: "/angebot" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function OfferPage({ searchParams }: { searchParams: SearchParams }) {
  const query = await searchParams;
  const requestedService = typeof query.leistung === "string" ? query.leistung : undefined;
  const requestedCity = typeof query.stadt === "string" ? query.stadt : undefined;
  const requestedPosition = typeof query.position === "string" ? query.position : undefined;
  const source = typeof query.quelle === "string" ? query.quelle : undefined;

  const serviceOptions = services.map((service) => ({ value: service.slug, label: service.shortTitle }));
  const cityOptions = [
    { value: "andere-region", label: "Andere Region in Deutschland" },
    ...regions
      .filter((region) => region.value !== "de")
      .map((region) => ({ value: region.slug, label: region.label })),
  ];
  const initialDetails = requestedPosition
    ? `Geplante Arbeit: ${requestedPosition}\n\nWeitere Angaben zum Projekt: `
    : undefined;

  return (
    <>
      <section className="contentHero">
        <div className="shell">
          <span className="eyebrow">Projektanfrage</span>
          <h1>Renovierungsprojekt strukturiert anfragen</h1>
          <p>
            Diese Funktion befindet sich derzeit in Vorbereitung und ist nicht Teil des öffentlichen
            Vermittlungsangebots von BauKostenRadar.
          </p>
        </div>
      </section>

      <div className="shell contentGrid requestPageGrid">
        <div>
          <section className="contentCard">
            <span className="eyebrow">Technische Vorbereitung</span>
            <h2>Projektangaben erfassen</h2>
            <p>
              Die technische Formularfunktion bleibt für eine spätere Ausbauphase erhalten. Aktuell liegt der Fokus
              von BauKostenRadar auf Preisvergleichen, Kostenrechnern und redaktionellen Informationen.
            </p>
            <ProjectRequestForm
              services={serviceOptions}
              cities={cityOptions}
              recipient={siteConfig.email}
              initialService={requestedService}
              initialCity={requestedCity}
              initialDetails={initialDetails}
              source={source}
            />
          </section>
        </div>

        <aside className="sidebarSticky">
          <section className="contentCard requestInfoCard">
            <span className="eyebrow">Hinweis</span>
            <h2>Noch keine Vermittlung</h2>
            <p className="notice">
              BauKostenRadar vermittelt derzeit keine Handwerksbetriebe. Es besteht kein Anspruch auf die Vermittlung
              eines Betriebs oder auf ein verbindliches Angebot.
            </p>
          </section>
        </aside>
      </div>
    </>
  );
}
