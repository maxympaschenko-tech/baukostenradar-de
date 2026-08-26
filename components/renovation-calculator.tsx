"use client";

import { useMemo, useState } from "react";
import { regions, renovationModel } from "@/lib/pricing";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function RenovationCalculator({ compact = false }: { compact?: boolean }) {
  const [area, setArea] = useState(80);
  const [condition, setCondition] = useState("normal");
  const [standard, setStandard] = useState("standard");
  const [region, setRegion] = useState("de");

  const result = useMemo(() => {
    const safeArea = Math.min(1000, Math.max(10, area || 80));
    const conditionFactor = renovationModel.conditions.find((item) => item.value === condition)?.factor ?? 1;
    const standardFactor = renovationModel.standards.find((item) => item.value === standard)?.factor ?? 1;
    const regionFactor = regions.find((item) => item.value === region)?.factor ?? 1;
    const midpoint = safeArea * renovationModel.basePerSquareMeter * conditionFactor * standardFactor * regionFactor;
    const low = midpoint * renovationModel.lowMultiplier;
    const high = midpoint * renovationModel.highMultiplier;

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
  }, [area, condition, standard, region]);

  return (
    <div className={compact ? "calculator calculatorCompact" : "calculator"}>
      <div className="calculatorHeading">
        <span className="eyebrow">Renovierungskosten-Rechner</span>
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
          <span>Zustand</span>
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
        <small>Orientierungswert aus dem aktuellen MVP-Modell. Vor dem öffentlichen Launch wird die Berechnung mit dokumentierten deutschen Marktdaten kalibriert.</small>
      </div>

      {!compact && (
        <div className="breakdown">
          <div><span>Arbeit</span><strong>{euro(result.laborLow)} - {euro(result.laborHigh)}</strong></div>
          <div><span>Material</span><strong>{euro(result.materialLow)} - {euro(result.materialHigh)}</strong></div>
          <div><span>Nebenkosten / Reserve</span><strong>{euro(result.reserveLow)} - {euro(result.reserveHigh)}</strong></div>
        </div>
      )}
    </div>
  );
}
