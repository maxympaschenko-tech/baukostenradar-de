import type { Metadata } from "next";
import { ProjectRequestForm } from "@/components/project-request-form";
import { regions, services } from "@/lib/pricing";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projektanfrage für Renovierung und Handwerker",
  description: "Renovierungs- oder Handwerkerprojekt strukturiert an BauKostenRadar senden: Leistung, Region, Budget und Zeitraum angeben.",
  alternates: { canonical: "/angebot" },
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
            Beschreiben Sie Ihr Vorhaben in wenigen Schritten. BauKostenRadar sammelt derzeit erste Projektanfragen
            für die spätere Vermittlung und Angebotsvergleich-Funktion.
          </p>
          <div className="heroFacts">
            <span><strong>{services.length}</strong> Kostenbereiche</span>
            <span><strong>8</strong> Großstädte im Preisvergleich</span>
            <span><strong>0 €</strong> Anfragekosten</span>
          </div>
        </div>
      </section>

      <div className="shell contentGrid requestPageGrid">
        <div>
          <section className="contentCard">
            <span className="eyebrow">Projekt erfassen</span>
            <h2>Was soll gemacht werden?</h2>
            <p>
              Je genauer die Angaben zu Leistung, Standort, Budget und Zeitraum sind, desto besser lässt sich das
              Vorhaben später einem passenden Fachbetrieb zuordnen.
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
            <span className="eyebrow">So läuft es aktuell</span>
            <h2>Pilotphase</h2>
            <ol className="requestSteps">
              <li><strong>1.</strong><span>Projektangaben ausfüllen.</span></li>
              <li><strong>2.</strong><span>Vorbereitete E-Mail prüfen und absenden.</span></li>
              <li><strong>3.</strong><span>BauKostenRadar prüft die Anfrage manuell.</span></li>
            </ol>
            <p className="notice">
              Es besteht derzeit kein Anspruch auf die Vermittlung eines Handwerksbetriebs und kein verbindliches
              Angebot. Die Funktion dient zunächst dem Aufbau der Projektanfrage-Infrastruktur.
            </p>
          </section>
        </aside>
      </div>
    </>
  );
}
