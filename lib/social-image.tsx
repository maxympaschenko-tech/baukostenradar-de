import { ImageResponse } from "next/og";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";
export const socialImageAlt = "BauKostenRadar - Baukosten transparent planen";
export const guideSocialImageAlt = "BauKostenRadar Ratgeber - Kosten und Planung 2026";

function BrandMark() {
  return (
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
  );
}

function ImageFooter() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 25 }}>
      <div style={{ display: "flex", gap: 28, color: "#334e68" }}>
        <span>Preise</span>
        <span>Rechner</span>
        <span>Ratgeber</span>
        <span>Städte</span>
      </div>
      <div style={{ color: "#0b467d", fontWeight: 700 }}>baukostenradar.de</div>
    </div>
  );
}

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
        <BrandMark />

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 990 }}>
          <div style={{ fontSize: 74, lineHeight: 1.05, fontWeight: 800, letterSpacing: -2.5 }}>
            Baukosten im Blick. Projekte besser planen.
          </div>
          <div style={{ fontSize: 32, lineHeight: 1.35, color: "#486581" }}>
            Aktuelle Kosten 2026, Rechner, Ratgeber und regionale Preisorientierung für Deutschland.
          </div>
        </div>

        <ImageFooter />
      </div>
    ),
    socialImageSize,
  );
}

export function createGuideSocialImage(title: string) {
  const titleSize = title.length > 72 ? 45 : title.length > 52 ? 52 : 60;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "62px 72px 54px",
          background: "#f6f8fb",
          color: "#102a43",
        }}
      >
        <BrandMark />

        <div style={{ display: "flex", alignItems: "stretch", gap: 52, width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 18, width: 720 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "9px 16px",
                borderRadius: 999,
                background: "#e8f1f8",
                color: "#0b467d",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: 0.4,
              }}
            >
              RATGEBER · KOSTEN 2026
            </div>
            <div style={{ fontSize: titleSize, lineHeight: 1.08, fontWeight: 800, letterSpacing: -1.6 }}>
              {title}
            </div>
            <div style={{ fontSize: 25, lineHeight: 1.35, color: "#486581" }}>
              Richtwerte, Kostenblöcke und konkrete Planungshilfen für Deutschland.
            </div>
          </div>

          <div
            style={{
              width: 330,
              minHeight: 270,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "32px",
              borderRadius: 28,
              background: "#ffffff",
              border: "1px solid #d9e5ee",
              boxShadow: "0 16px 42px rgba(15, 55, 88, 0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <svg width="116" height="96" viewBox="0 0 116 96">
                <path d="M10 43 58 10l48 33" fill="none" stroke="#0b467d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 42v42h68V42" fill="#eef5fa" stroke="#0b467d" strokeWidth="5" strokeLinejoin="round" />
                <rect x="49" y="56" width="18" height="28" rx="3" fill="#f2b400" />
              </svg>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 }}>
                <span style={{ fontSize: 18, color: "#627d98" }}>PLANUNG</span>
                <strong style={{ fontSize: 28, color: "#0b467d" }}>2026</strong>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 78, fontSize: 18, color: "#627d98" }}>Arbeit</span>
                <span style={{ width: 150, height: 13, borderRadius: 8, background: "#0b467d" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 78, fontSize: 18, color: "#627d98" }}>Material</span>
                <span style={{ width: 118, height: 13, borderRadius: 8, background: "#f2b400" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 78, fontSize: 18, color: "#627d98" }}>Reserve</span>
                <span style={{ width: 72, height: 13, borderRadius: 8, background: "#9fb3c8" }} />
              </div>
            </div>
          </div>
        </div>

        <ImageFooter />
      </div>
    ),
    socialImageSize,
  );
}
