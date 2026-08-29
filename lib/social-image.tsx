import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";
export const socialImageAlt = "BauKostenRadar - Baukosten transparent planen";

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 82px",
          background: "#f6f8fb",
          color: "#102a43",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 92,
              height: 92,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 22,
              background: "#ffffff",
              boxShadow: "0 12px 32px rgba(15, 55, 88, 0.10)",
            }}
          >
            <svg width="72" height="64" viewBox="0 0 72 64">
              <path
                d="M8 27 36 7l28 20"
                fill="none"
                stroke="#0b467d"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="16" y="38" width="10" height="17" rx="2" fill="#f2b400" />
              <rect x="31" y="31" width="10" height="24" rx="2" fill="#0b467d" />
              <rect x="46" y="24" width="10" height="31" rx="2" fill="#0b467d" />
              <rect x="31" y="17" width="4" height="4" rx="1" fill="#0b467d" />
              <rect x="37" y="17" width="4" height="4" rx="1" fill="#0b467d" />
            </svg>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 48, letterSpacing: -1.5 }}>
            <span style={{ fontWeight: 800 }}>BauKosten</span>
            <span style={{ fontWeight: 800, color: "#0b467d" }}>Radar</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 990 }}>
          <div style={{ fontSize: 74, lineHeight: 1.05, fontWeight: 800, letterSpacing: -2.5 }}>
            Baukosten im Blick. Projekte besser planen.
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.35, color: "#486581" }}>
            Aktuelle Kosten 2026, Rechner, Ratgeber und regionale Preisorientierung für Deutschland.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 25 }}>
          <div style={{ display: "flex", gap: 28, color: "#334e68" }}>
            <span>Preise</span>
            <span>Rechner</span>
            <span>Ratgeber</span>
            <span>Städte</span>
          </div>
          <div style={{ color: "#0b467d", fontWeight: 700 }}>baukostenradar.de</div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
