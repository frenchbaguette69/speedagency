import React from "react";
import { Metadata } from "next";
import { SeoHeroSection } from "@/components/SeoHeroSection";
import { SeoChecklist } from "@/components/SeoChecklist";
import { SeoWorkflow } from "@/components/SeoWorkflow";
import { SeoProjectsShowcase } from "@/components/SeoProjectsShowcase";
import { SeoTechnologyStack } from "@/components/SeoTechnologyStack";
import { SeoCustomerExperience } from "@/components/SeoCustomerExperience";
import { SeoCallToAction } from "@/components/SeoCallToAction";
import { SeoFAQ } from "@/components/SeoFAQ";

// Metadata voor de pagina
export const metadata: Metadata = {
  title: "SEO Optimalisatie | Verbeter Je Ranking & Organisch Verkeer",
  description:
    "Professionele SEO optimalisatie die resultaten oplevert. Onze data-gedreven aanpak zorgt voor hogere rankings, meer organisch verkeer en een gemiddelde toename van 65% in conversies.",
  keywords: [
    "seo optimalisatie",
    "zoekmachine optimalisatie",
    "google ranking verbeteren",
    "seo expert",
    "seo bureau",
    "seo diensten",
    "organisch verkeer verhogen",
    "lokale seo",
    "technische seo",
  ],
  openGraph: {
    title: "SEO Optimalisatie | Data-Gedreven Zoekmachine Optimalisatie",
    description:
      "Boost je online zichtbaarheid met onze bewezen SEO-strategieën. Technische optimalisatie, content strategie en link building voor duurzame resultaten in Google.",
    url: "https://speedagency.nl/seo-optimalisatie",
    siteName: "SpeedAgency",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/seo-optimalisatie-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Professionele SEO optimalisatie diensten",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Optimalisatie | 65% Meer Organisch Verkeer Gegarandeerd",
    description:
      "Onze data-gedreven SEO aanpak levert meetbare resultaten: hogere rankings, meer relevante bezoekers en verbeterde conversies voor jouw website.",
    images: ["/images/seo-optimalisatie-banner.jpg"],
    creator: "@speedagency",
  },
  alternates: {
    canonical: "https://speedagency.nl/seo-optimalisatie",
    languages: {
      "nl-NL": "https://speedagency.nl/seo-optimalisatie",
      "en-US": "https://speedagency.nl/en/seo-optimization",
    },
  },
};

const Page = () => {
  return (
    <div>
      <SeoHeroSection />
      <SeoChecklist />
      <SeoWorkflow />
      <SeoProjectsShowcase />
      <SeoTechnologyStack />
      <SeoCustomerExperience />
      <SeoCallToAction />
      <SeoFAQ />
    </div>
  );
};

export default Page;