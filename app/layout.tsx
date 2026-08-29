import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./portal.css";
import "./premium.css";
import "./premium-footer.css";
import "./premium-internal.css";
import "./premium-mobile.css";
import "./mobile-overflow-fix.css";
import "./city-pages.css";
import { ConsentManager } from "@/components/consent-manager";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "BauKostenRadar - Renovierungs- und Handwerkerkosten",
    template: "%s | BauKostenRadar",
  },
  description: siteConfig.description,
  verification: {
    google: "vXOTcob1kFIZony7RPFaEkolb_RX3iMjOJkWlS-LH38",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.name,
    title: "BauKostenRadar",
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "BauKostenRadar",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const siteUrl = siteConfig.url.replace(/\/$/, "");
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: `${siteUrl}/`,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/baukostenradar-logo.svg`,
      contentUrl: `${siteUrl}/baukostenradar-logo.svg`,
      width: 512,
      height: 512,
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.operator.addressLine,
      postalCode: siteConfig.operator.postalCode,
      addressLocality: siteConfig.operator.city,
      addressCountry: siteConfig.operator.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      availableLanguage: ["de"],
    },
  };

  return (
    <html lang="de">
      <body>
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  ad_storage:'denied',
  analytics_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  wait_for_update:500
});`}
        </Script>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${siteConfig.googleTagManagerId}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ConsentManager />
      </body>
    </html>
  );
}
