import { ImageResponse } from "next/og";

export const costSocialImageSize = {
  width: 1200,
  height: 630,
};

export const costSocialImageContentType = "image/png";
export const costSocialImageAlt = "BauKostenRadar Kosten 2026 - Richtwerte und Preisvergleich";

function BrandMark() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <div
        style={{
          width: 82,
          height: 82,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          background: "#ffffff",
          boxShadow: "0 12px 32px rgba(15, 55, 88, 0.10)",
        }}
      >
        <svg width="64" height="58" viewBox="0 0 72 64">
          <path d="M8 27 36 7l28 20" fill="none" stroke="#0b467d" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="16" y="38" width="10" height="17" rx="2" fill="#f2b400" />
          <rect x="31" y="31" width="10" height="24" rx="2" fill="#0b467d" />
          <rect x="46" y="24" width="10" height="31" rx="2" fill="#0b467d" />
        </svg>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", fontSize: 44, letterSpacing: -1.4 }}>
        <span style={{ fontWeight: 800 }}>BauKosten</span>
        <span style={{ fontWeight: 800, color: "#0b467d" }}>Radar</span>
      </div>
    </div>
  );
}

export function createCostSocialImage({
  badge,
  title,
  subtitle,
  metricLabel,
  metric,
  detail,
}: {
  badge: string;
  title: string;
  subtitle: string;
  metricLabel: string;
  metric: string;
  detail: string;
}) {
  const titleSize = title.length > 76 ? 43 : title.length > 56 ? 50 : 58;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 70px 52px",
          background: "#f6f8fb",
          color: "#102a43",
        }}
      >
        <BrandMark />

        <div style={{ display: "flex", alignItems: "stretch", gap: 48, width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 17, width: 710 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "9px 16px",
                borderRadius: 999,
                background: "#e8f1f8",
                color: "#0b467d",
                fontSize: 21,
                fontWeight: 700,
                letterSpacing: 0.3,
              }}
            >
              {badge}
            </div>
            <div style={{ fontSize: titleSize, lineHeight: 1.07, fontWeight: 800, letterSpacing: -1.6 }}>
              {title}
            </div>
            <div style={{ fontSize: 24, lineHeight: 1.35, color: "#486581" }}>{subtitle}</div>
          </div>

          <div
            style={{
              width: 342,
              minHeight: 252,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "30px",
              borderRadius: 28,
              background: "#ffffff",
              border: "1px solid #d9e5ee",
              boxShadow: "0 16px 42px rgba(15, 55, 88, 0.08)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontSize: 18, color: "#627d98", textTransform: "uppercase", letterSpacing: 0.5 }}>
                {metricLabel}
              </span>
              <strong style={{ fontSize: metric.length > 30 ? 29 : 35, lineHeight: 1.15, color: "#0b467d" }}>
                {metric}
              </strong>
            </div>
            <div style={{ display: "flex", paddingTop: 22, borderTop: "1px solid #e6edf3", fontSize: 20, lineHeight: 1.35, color: "#486581" }}>
              {detail}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 23 }}>
          <div style={{ display: "flex", gap: 26, color: "#486581" }}>
            <span>Richtwerte</span>
            <span>Rechner</span>
            <span>Quellen</span>
            <span>Städte</span>
          </div>
          <div style={{ color: "#0b467d", fontWeight: 700 }}>baukostenradar.de</div>
        </div>
      </div>
    ),
    costSocialImageSize,
  );
}
