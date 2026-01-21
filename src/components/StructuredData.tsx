"use client";

import { useLocaleContext } from "./LocaleProvider";
import { useTranslations } from "next-intl";

export const StructuredData = () => {
  const { locale } = useLocaleContext();
  const t = useTranslations();

  const baseUrl = "https://greensteps.hamzaince.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GreenSteps",
    url: baseUrl,
    logo: `${baseUrl}/images/hero_mockup.png`,
    description: t("hero.subtitle"),
    sameAs: [
      // Add social media links when available
      // "https://twitter.com/greensteps",
      // "https://facebook.com/greensteps",
    ],
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GreenSteps",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "8000",
      bestRating: "5",
      worstRating: "1",
    },
    description: t("hero.subtitle"),
    screenshot: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/3b/96/bb/3b96bb25-f9c2-d0ca-c85d-f17b04e56d4f/1.png/460x1000bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/da/3c/30/da3c30d5-7ffe-6b48-05dc-ccd26d9b3edd/2.png/460x1000bb.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/96/f9/d9/96f9d96a-7b86-9da4-a66e-bbc50e9545d8/3.png/460x1000bb.webp",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GreenSteps",
    url: baseUrl,
    description: t("hero.subtitle"),
    inLanguage: locale,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("nav.home"),
        item: baseUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
