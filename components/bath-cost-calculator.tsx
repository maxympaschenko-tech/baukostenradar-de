"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getService, regions } from "@/lib/pricing";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function safeArea(value: number) {
  return Math.min(40, Math.max(2, Number.isFinite(value) ? value : 8));
}

export function BathCostCalculator() {
  const service = getService("badsanierung");
  const squareMeterItem = service?.priceItems.find((item) => item.name === "Bad-Neubau / Sanierung");
  const wholeBathItem = service?.priceItems.find((item) => item.name === "Bad-Sanierung komplett");

  const [area, setArea] = useState(8);
  const [regionValue, setRegionValue] = useState("de");

  useEffect(() => {
    const rawArea = new URLSearchParams(window.location.search).get("flaeche");
    if (!rawArea) return;
    const parsedArea = Number(rawArea.replace(",", "."));
    if (!Number.isFinite(parsedArea)) return;
    setArea(safeArea(parsedArea));
  }, []);

  const result = useMemo(() => {
    const normalizedArea = safeArea(area);
    const region = regions.find((item) => item.value === regionValue) ?? regions[0];
    const lowPerSquareMeter = squareMeterItem?.low ?? 1000;
    const highPerSquareMeter = squareMeterItem?.high ?? 2500;

    return {
      area: normalizedArea,
      region,
      low: normalizedArea * lowPerSquareMeter * region.factor,
      high: normalizedArea * highPerSquareMeter * region.factor,
      lowPerSquareMeter,
      highPerSquareMeter,
    };
  }, [area, regionValue, squareMeterItem]);

  const cityPart = result.region.value === "de" ? "" : `&stadt=${encodeURIComponent(result.region.slug)}`;
  const requestUrl = `/angebot?leistung=badsanierung${cityPart}&position=${encodeURIComponent(`Komplette Badsanierung, ca. ${result.area.toLocaleString("de-DE")} m²`)}&quelle=badsanierung-rechner`;

  return (
    <div className="calculator">
      <div className="calculatorHeading">
        <span className="eyebrow">Badsanierung Rechner 2026</span>
        <h2>Badkosten nach Fläche und Region schätzen</h2>
        <p>
          Der Rechner nutzt den veröffentlichten Richtwert von {euro(result.lowPerSquareMeter)} bis {euro(result.highPerSquareMeter)} pro m²
          und wendet anschließend den transparenten BauKostenRadar-Regionalfaktor an.
        </p>
      </div>

      <div className="formGrid">
        <label>
          <span>Badgröße</span>
          <div className="inputWithUnit">
            <input
              type="number"
              min={2}
              max={40}
              step={0.5}
              value={area}
              onChange={(event) => setArea(Number(event.target.value))}
            />
            <em>m²</em>
          </div>
        </label>

        <label>
          <span>Region</span>
          <select value={regionValue} onChange={(event) => setRegionValue(event.target.value)}>
            {regions.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="resultBox">
        <span>Geschätzte Kostenspanne für ca. {result.area.toLocaleString("de-DE")} m²</span>
        <strong>{euro(result.low)} - {euro(result.high)}</strong>
        <small>
          Modell auf Basis des m²-Richtwerts. {result.region.factor !== 1
            ? `Regionalfaktor ${result.region.factor.toFixed(2).replace(".", ",")} für ${result.region.label}. `
            : ""}
          Unverbindliche Budgetorientierung, kein Angebot.
        </small>
      </div>

      <div className="breakdown">
        <div><span>Basis pro m²</span><strong>{euro(result.lowPerSquareMeter)} - {euro(result.highPerSquareMeter)}</strong></div>
        <div><span>Berechnete Fläche</span><strong>{result.area.toLocaleString("de-DE")} m²</strong></div>
        <div><span>Region</span><strong>{result.region.label}</strong></div>
        {wholeBathItem ? (
          <div>
            <span>Separater Projekt-Richtwert aus der Datenbasis</span>
            <strong>{euro(wholeBathItem.low)} - {euro(wholeBathItem.high)}</strong>
          </div>
        ) : null}
      </div>

      <div className="heroActions">
        <Link className="primaryButton" href={requestUrl}>Badsanierung anfragen</Link>
        <Link className="ghostButton" href="/kosten/badsanierung">Badsanierung-Preise ansehen</Link>
      </div>
    </div>
  );
}
