import React from "react";
import { Metadata } from "next";
import { WebshopHeroSection } from "@/components/WebshopHeroSection";
import { WebshopChecklist } from "@/components/WebshopChecklist";
import { WebshopWorkflow } from "@/components/WebshopWorkflow";
import { WebshopProjectsShowcase } from "@/components/WebshopProjectsShowcase";
import { WebshopTechnologyStack } from "@/components/WebshopTechnologyStack";
import { WebshopCustomerExperience } from "@/components/WebshopCustomerExperience";
import { WebshopCallToAction } from "@/components/WebshopCallToAction";
import { WebshopFAQ } from "@/components/WebshopFAQ";

// Metadata voor de pagina
export const metadata: Metadata = {
  title: "Webshop Laten Maken | Sneller & Beter dan Shopify of WooCommerce",
  description:
    "Webshop laten maken die écht verkoopt? Onze Next.js webshops laden 10x sneller en genereren gemiddeld 45% meer omzet dan traditionele platforms als WooCommerce of Shopify.",
  keywords: [
    "webshop laten maken",
    "e-commerce website",
    "online winkel",
    "conversie-gerichte webshop",
    "Next.js webshop",
    "snelle webshop",
    "professionele webshop",
    "SEO-geoptimaliseerde webshop",
  ],
  openGraph: {
    title: "Webshop Laten Maken | Conversie-Gerichte E-commerce Oplossingen",
    description:
      "Krachtige Next.js webshops die automatisch verkopen genereren. Razendsnelle laadtijden, SEO-geoptimaliseerd en ontworpen voor maximale conversie. 7-14 dagen live.",
    url: "https://jouwwebsite.nl/webshop-laten-maken",
    siteName: "SpeedAgency",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/webshop-maken-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Professionele webshop laten maken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webshop Laten Maken | 45% Meer Omzet Gegarandeerd",
    description:
      "Laat een conversie-gerichte webshop maken die uw verkoop automatiseert. Next.js technologie zorgt voor snellere laadtijden, betere SEO en hogere conversies.",
    images: ["/images/webshop-maken-banner.jpg"],
    creator: "@speedagency",
  },
  alternates: {
    canonical: "https://speedagency.nl/webshop-laten-maken",
    languages: {
      "nl-NL": "https://speedagency.nl/webshop-laten-maken",
      "en-US": "https://speedagency.nl/en/ecommerce-development",
    },
  },
};

const Page = () => {
  return (
    <div>
      <WebshopHeroSection />
      <WebshopChecklist />
      <WebshopWorkflow />
      {/* <WebshopProjectsShowcase /> */}
      <WebshopTechnologyStack />
      <WebshopCustomerExperience />
      <WebshopCallToAction />
      <WebshopFAQ />
    </div>
  );
};

export default Page;