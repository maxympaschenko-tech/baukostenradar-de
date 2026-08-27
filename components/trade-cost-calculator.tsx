"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { priceItemSlug } from "@/lib/price-slug";
import { regions, services } from "@/lib/pricing";

function euro(value: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

type TradeCostCalculatorProps = {
  initialServiceSlug?: string;
  initialItemSlug?: string;
  initialRegionValue?: string;
};

export function TradeCostCalculator({
  initialServiceSlug,
  initialItemSlug,
  initialRegionValue,
}: TradeCostCalculatorProps = {}) {
  const initialService = services.find((item) => item.slug === initialServiceSlug) ?? services[0];
  const initialItemIndex = initialService
    ? initialService.priceItems.findIndex((item) => priceItemSlug(item.name) === initialItemSlug)
    : -1;
  const initialRegion = regions.find(
    (item) => item.value === initialRegionValue || item.slug === initialRegionValue,
  ) ?? regions[0];

  const [serviceSlug, setServiceSlug] = useState(initialService?.slug ?? "maler");
  const service = services.find((item) => item.slug === serviceSlug) ?? services[0];
  const [itemIndex, setItemIndex] = useState(initialItemIndex >= 0 ? initialItemIndex : 0);
  const [quantity, setQuantity] = useState(1);
  const [regionValue, setRegionValue] = useState(initialRegion?.value ?? "de");

  const selectedItem = service.priceItems[Math.min(itemIndex, service.priceItems.length - 1)] ?? service.priceItems[0];
  const selectedRegion = regions.find((item) => item.value === regionValue) ?? regions[0];

  const result = useMemo(() => {
    const safeQuantity = Math.min(10000, Math.max(0.1, Number.isFinite(quantity) ? quantity : 1));
    const factor = selectedRegion.factor;

    return {
      low: selectedItem.low * safeQuantity * factor,
      high: selectedItem.high * safeQuantity * factor,
      quantity: safeQuantity,
      factor,
    };
  }, [quantity, selectedItem, selectedRegion]);

  function handleServiceChange(value: string) {
    setServiceSlug(value);
    setItemIndex(0);
    setQuantity(1);
  }

  const itemHref = `/kosten/${service.slug}/leistung/${priceItemSlug(selectedItem.name)}`;
  const regionHref = selectedRegion.value === "de"
    ? `/kosten/${service.slug}`
    : `/kosten/${service.slug}/${selectedRegion.slug}`;

  return (
    <div className="calculator">
      <div className="calculatorHeading">
        <span className="eyebrow">Handwerkerkosten-Rechner 2026</span>
        <h2>Einzelne Arbeiten schnell kalkulieren</h2>
        <p>Gewerk, konkrete Leistung, Menge und Region wählen. Der Rechner nutzt die Preisbänder aus dem BauKostenRadar-Preisspiegel.</p>
      </div>

      <div className="formGrid">
        <label>
          <span>Gewerk</span>
          <select value={serviceSlug} onChange={(event) => handleServiceChange(event.target.value)}>
            {services.map((item) => (
              <option key={item.slug} value={item.slug}>{item.shortTitle}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Leistung</span>
          <select value={itemIndex} onChange={(event) => setItemIndex(Number(event.target.value))}>
            {service.priceItems.map((item, index) => (
              <option key={item.name} value={index}>{item.name}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Menge</span>
          <div className="inputWithUnit">
            <input
              type="number"
              min={0.1}
              max={10000}
              step={0.1}
              value={quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
            />
            <em>{selectedItem.unit.replace(/^pro\s+/i, "")}</em>
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

      {(initialServiceSlug || initialItemSlug || initialRegionValue) ? (
        <p className="tableNote">
          Vorauswahl aus der vorherigen Kostenseite übernommen. Alle Felder können jederzeit geändert werden.
        </p>
      ) : null}

      <div className="resultBox">
        <span>Geschätzte Kosten</span>
        <strong>{euro(result.low)} - {euro(result.high)}</strong>
        <small>
          Basis: {euro(selectedItem.low)} - {euro(selectedItem.high)} {selectedItem.unit}. Menge: {result.quantity.toLocaleString("de-DE")}.
          {result.factor !== 1 ? ` Regionalfaktor: ${result.factor.toFixed(2).replace(".", ",")}.` : ""}
          {" "}Unverbindlicher Orientierungswert, kein Angebot.
        </small>
      </div>

      <div className="breakdown">
        <div><span>Unterer Richtwert</span><strong>{euro(result.low)}</strong></div>
        <div><span>Oberer Richtwert</span><strong>{euro(result.high)}</strong></div>
        <div><span>Ausgewählte Leistung</span><strong>{selectedItem.name}</strong></div>
      </div>

      <div className="heroActions">
        <Link className="primaryButton" href={itemHref}>Einzelpreis im Detail</Link>
        <Link className="ghostButton" href={regionHref}>
          {selectedRegion.value === "de" ? `${service.shortTitle}-Preise` : `${service.shortTitle} in ${selectedRegion.label}`}
        </Link>
        <Link className="ghostButton" href={`/kosten/${service.slug}`}>Alle Leistungen des Gewerks</Link>
      </div>
    </div>
  );
}
