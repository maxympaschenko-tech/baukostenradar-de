"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

type Option = { value: string; label: string };
type SubmitStatus = "idle" | "sending" | "success" | "fallback";

type Props = {
  services: Option[];
  cities: Option[];
  recipient: string;
  initialService?: string;
  initialCity?: string;
  initialDetails?: string;
  source?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function ProjectRequestForm({
  services,
  cities,
  recipient,
  initialService,
  initialCity,
  initialDetails,
  source,
}: Props) {
  const validInitialService = services.some((item) => item.value === initialService)
    ? initialService
    : services[0]?.value;
  const validInitialCity = cities.some((item) => item.value === initialCity)
    ? initialCity
    : cities[0]?.value;

  const [service, setService] = useState(validInitialService ?? "");
  const [city, setCity] = useState(validInitialCity ?? "");
  const [postcode, setPostcode] = useState("");
  const [budget, setBudget] = useState("Noch offen");
  const [timing, setTiming] = useState("In den nächsten 3 Monaten");
  const [details, setDetails] = useState(initialDetails ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [startedAt] = useState(() => Date.now());
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const serviceLabel = useMemo(
    () => services.find((item) => item.value === service)?.label ?? service,
    [service, services],
  );
  const cityLabel = useMemo(
    () => cities.find((item) => item.value === city)?.label ?? city,
    [city, cities],
  );

  function mailtoFallback() {
    const subject = `Projektanfrage: ${serviceLabel} - ${cityLabel}`;
    const body = [
      "Neue Projektanfrage über BauKostenRadar",
      "",
      `Leistung: ${serviceLabel}`,
      `Ort: ${cityLabel}`,
      `PLZ: ${postcode || "nicht angegeben"}`,
      `Budget: ${budget}`,
      `Zeitrahmen: ${timing}`,
      `Quelle: ${source || "direkter Aufruf"}`,
      "",
      "Projektbeschreibung:",
      details,
      "",
      "Kontaktdaten:",
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone || "nicht angegeben"}`,
    ].join("\n");

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "bkr_project_request_mailto_open",
      project_service: service,
      project_city: city,
      project_source: source || "direct",
    });
    window.gtag?.("event", "project_request_mailto_open", {
      project_service: service,
      project_city: city,
      project_source: source || "direct",
    });

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    try {
      const response = await fetch("/api/project-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          city,
          postcode,
          budget,
          timing,
          details,
          name,
          email,
          phone,
          source: source || "direct",
          website,
          startedAt,
        }),
      });

      if (!response.ok) throw new Error("request_failed");
      const result = (await response.json()) as { ok?: boolean };
      if (!result.ok) throw new Error("request_failed");

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "bkr_generate_lead",
        project_service: service,
        project_city: city,
        project_source: source || "direct",
      });
      window.gtag?.("event", "generate_lead", {
        project_service: service,
        project_city: city,
        project_source: source || "direct",
      });
      setStatus("success");
    } catch {
      setStatus("fallback");
      mailtoFallback();
    }
  }

  if (status === "success") {
    return (
      <div className="requestSuccess" role="status">
        <span className="eyebrow">Anfrage gesendet</span>
        <h3>Vielen Dank für Ihre Projektanfrage.</h3>
        <p>
          Die Angaben wurden an BauKostenRadar übermittelt und werden in der Pilotphase manuell geprüft.
          Eine Vermittlung oder ein verbindliches Handwerkerangebot ist damit noch nicht garantiert.
        </p>
        <button className="ghostButton requestResetButton" type="button" onClick={() => setStatus("idle")}>
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form className="projectRequestForm" onSubmit={submit}>
      <div className="formGrid">
        <label>
          <span>Gewünschte Leistung</span>
          <select value={service} onChange={(event) => setService(event.target.value)} required>
            {services.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Stadt / Region</span>
          <select value={city} onChange={(event) => setCity(event.target.value)} required>
            {cities.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Postleitzahl</span>
          <input
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
            inputMode="numeric"
            autoComplete="postal-code"
            pattern="[0-9]{5}"
            placeholder="z. B. 80331"
          />
        </label>

        <label>
          <span>Budget</span>
          <select value={budget} onChange={(event) => setBudget(event.target.value)}>
            <option>Noch offen</option>
            <option>Bis 5.000 €</option>
            <option>5.000 - 15.000 €</option>
            <option>15.000 - 30.000 €</option>
            <option>30.000 - 60.000 €</option>
            <option>Über 60.000 €</option>
          </select>
        </label>

        <label className="formFieldWide">
          <span>Gewünschter Zeitraum</span>
          <select value={timing} onChange={(event) => setTiming(event.target.value)}>
            <option>So schnell wie möglich</option>
            <option>In den nächsten 4 Wochen</option>
            <option>In den nächsten 3 Monaten</option>
            <option>In 3 - 6 Monaten</option>
            <option>Nur Preisorientierung</option>
          </select>
        </label>

        <label className="formFieldWide">
          <span>Projekt kurz beschreiben</span>
          <textarea
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            rows={6}
            maxLength={2500}
            placeholder="Was soll gemacht werden? Fläche, Zustand, Materialwünsche oder Besonderheiten helfen bei der Einordnung."
            required
          />
        </label>

        <label>
          <span>Name</span>
          <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" maxLength={120} required />
        </label>

        <label>
          <span>E-Mail</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            maxLength={254}
            required
          />
        </label>

        <label className="formFieldWide">
          <span>Telefon (optional)</span>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            autoComplete="tel"
            maxLength={80}
            placeholder="Für Rückfragen"
          />
        </label>

        <label className="formHoneypot" aria-hidden="true">
          <span>Website</span>
          <input
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {status === "fallback" ? (
        <p className="requestFallback" role="status">
          Die direkte Übermittlung war nicht möglich. Deshalb wurde als Ersatz Ihr E-Mail-Programm geöffnet.
        </p>
      ) : null}

      <div className="requestSubmitRow">
        <div>
          <strong>Direkte Übermittlung an BauKostenRadar</strong>
          <p>
            Ihre Angaben werden verschlüsselt an unseren Server übertragen und als E-Mail an BauKostenRadar zugestellt.
            Eine automatische Weitergabe an Handwerksbetriebe findet in der Pilotphase nicht statt.
          </p>
        </div>
        <button className="primaryButton requestSubmitButton" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Wird gesendet..." : "Projektanfrage senden"}
        </button>
      </div>
    </form>
  );
}
