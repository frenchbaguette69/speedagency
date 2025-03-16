import React from "react";
import { Metadata } from "next";
import { GoogleAdsHeroSection } from "@/components/GoogleAdsHeroSection";
import { GoogleAdsChecklist } from "@/components/GoogleAdsChecklist";
import { GoogleAdsWorkflow } from "@/components/GoogleAdsWorkflow";
import { GoogleAdsProjectsShowcase } from "@/components/GoogleAdsProjectsShowcase";
import { GoogleAdsTechnologyStack } from "@/components/GoogleAdsTechnologyStack";
import { GoogleAdsCustomerExperience } from "@/components/GoogleAdsCustomerExperience";
import { GoogleAdsCallToAction } from "@/components/GoogleAdsCallToAction";
import { GoogleAdsFAQ } from "@/components/GoogleAdsFAQ";

// Metadata voor de pagina
export const metadata: Metadata = {
  title: "Google Ads Management | Maximaliseer Je ROI & Conversies",
  description:
    "Professioneel Google Ads management dat resultaten oplevert. Onze data-gedreven campagnes zorgen voor hogere conversies, lagere kosten per klik en een gemiddelde ROI-toename van 75%.",
  keywords: [
    "google ads",
    "google adwords",
    "ppc management",
    "google ads specialist",
    "google ads bureau",
    "google ads diensten",
    "conversies verhogen",
    "roi verbeteren",
    "zoekmachine adverteren",
  ],
  openGraph: {
    title: "Google Ads Management | Data-Gedreven Advertentiecampagnes",
    description:
      "Verhoog je online conversies met onze bewezen Google Ads strategieën. Gericht adverteren, campagne-optimalisatie en conversietracking voor meetbare resultaten.",
    url: "https://speedagency.nl/google-ads-service",
    siteName: "SpeedAgency",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/google-ads-service-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Professionele Google Ads management diensten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Management | 75% Hogere ROI Gegarandeerd",
    description:
      "Onze data-gedreven Google Ads aanpak levert meetbare resultaten: lagere kosten per klik, meer conversies en een verbeterde ROI voor jouw advertentiebudget.",
    images: ["/images/google-ads-service-banner.jpg"],
    creator: "@speedagency",
  },
  alternates: {
    canonical: "https://speedagency.nl/google-ads-service",
    languages: {
      "nl-NL": "https://speedagency.nl/google-ads-service",
      "en-US": "https://speedagency.nl/en/google-ads-service",
    },
  },
};

const Page = () => {
  return (
    <div>
        <GoogleAdsHeroSection />
        <GoogleAdsChecklist />
        <GoogleAdsWorkflow />
        <GoogleAdsProjectsShowcase />
        <GoogleAdsTechnologyStack />
        <GoogleAdsCustomerExperience />
        <GoogleAdsCallToAction />
        <GoogleAdsFAQ />
    </div>
  );
};

export default Page;