"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { regions, renovationModel } from "@/lib/pricing";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

function safeArea(value: number) {
  return Math.min(1000, Math.max(10, Number.isFinite(value) ? value : 80));
}

function safeCondition(value: string) {
  return renovationModel.conditions.some((item) => item.value === value) ? value : "normal";
}

export function RenovationCalculator({
  compact = false,
  initialArea = 80,
  initialCondition = "normal",
}: {
  compact?: boolean;
  initialArea?: number;
  initialCondition?: string;
}) {
  const [area, setArea] = useState(() => safeArea(initialArea));
  const [condition, setCondition] = useState(() => safeCondition(initialCondition));
  const [standard, setStandard] = useState("standard");
  const [region, setRegion] = useState("de");

  const selectedRegion = regions.find((item) => item.value === region) ?? regions[0];
  const selectedCondition = renovationModel.conditions.find((item) => item.value === condition) ?? renovationModel.conditions[1];

  const result = useMemo(() => {
    const normalizedArea = safeArea(area || 80);
    const standardFactor = renovationModel.standards.find((item) => item.value === standard)?.factor ?? 1;
    const regionFactor = selectedRegion.factor;

    const low = normalizedArea * selectedCondition.lowPerSquareMeter * standardFactor * regionFactor;
    const high = normalizedArea * selectedCondition.highPerSquareMeter * standardFactor * regionFactor;

    return {
      low,
      high,
      laborLow: low * renovationModel.shares.labor,
      laborHigh: high * renovationModel.shares.labor,
      materialLow: low * renovationModel.shares.material,
      materialHigh: high * renovationModel.shares.material,
      reserveLow: low * renovationModel.shares.reserve,
      reserveHigh: high * renovationModel.shares.reserve,
    };
  }, [area, selectedCondition, selectedRegion, standard]);

  const regionHref = selectedRegion.value === "de" ? "/staedte" : `/staedte/${selectedRegion.slug}`;
  const conditionGuideHref = selectedCondition.value === "core"
    ? "/ratgeber/kernsanierung-kosten"
    : "/ratgeber/sanierungskosten-pro-qm";

  return (
    <div className={compact ? "calculator calculatorCompact" : "calculator"}>
      <div className="calculatorHeading">
        <span className="eyebrow">Renovierungskosten-Rechner 2026</span>
        <h2>Was kostet Ihre Renovierung?</h2>
      </div>

      <div className="formGrid">
        <label>
          <span>Wohnfläche</span>
          <div className="inputWithUnit">
            <input
              type="number"
              min={10}
              max={1000}
              value={area}
              onChange={(event) => setArea(Number(event.target.value))}
            />
            <em>m²</em>
          </div>
        </label>

        <label>
          <span>Umfang</span>
          <select value={condition} onChange={(event) => setCondition(event.target.value)}>
            {renovationModel.conditions.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Qualitätsstandard</span>
          <select value={standard} onChange={(event) => setStandard(event.target.value)}>
            {renovationModel.standards.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Region</span>
          <select value={region} onChange={(event) => setRegion(event.target.value)}>
            {regions.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="resultBox">
        <span>Geschätzte Gesamtkosten</span>
        <strong>{euro(result.low)} - {euro(result.high)}</strong>
        <small>
          {selectedCondition.label}: {selectedCondition.lowPerSquareMeter.toLocaleString("de-DE")} - {selectedCondition.highPerSquareMeter.toLocaleString("de-DE")} €/m² Basis.
          {selectedRegion.factor !== 1 ? ` Regionalfaktor: ${selectedRegion.factor.toFixed(2).replace(".", ",")}.` : ""}
          {" "}Unverbindlicher Orientierungswert, kein Angebot.
        </small>
      </div>

      {!compact && (
        <>
          <div className="breakdown">
            <div><span>Arbeit, grober Modellanteil</span><strong>{euro(result.laborLow)} - {euro(result.laborHigh)}</strong></div>
            <div><span>Material, grober Modellanteil</span><strong>{euro(result.materialLow)} - {euro(result.materialHigh)}</strong></div>
            <div><span>Reserve</span><strong>{euro(result.reserveLow)} - {euro(result.reserveHigh)}</strong></div>
          </div>
          <div className="heroActions">
            <Link className="primaryButton" href={conditionGuideHref}>{selectedCondition.label} erklären</Link>
            <Link className="ghostButton" href={regionHref}>
              {selectedRegion.value === "de" ? "Städte vergleichen" : `Kosten in ${selectedRegion.label}`}
            </Link>
            <Link className="ghostButton" href="/rechner/handwerkerkosten">Einzelgewerke berechnen</Link>
          </div>
        </>
      )}
    </div>
  );
}
