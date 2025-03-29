import { HeroSubPage } from "@/components/HeroSubPage";
import { Checklist } from "@/components/Checklist";

import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaRocket, FaSearch, FaCode, FaMobile } from "react-icons/fa";
import { DevelopmentProcess } from "@/components/DevelopmentProcess";
import { OtherServices } from "@/components/OtherServices";
import { ImportanceOfWebsite } from "@/components/ImportanceOfWebsite";
import { BusinessCustomWebsite } from "@/components/BusinessCustomWebsite";
import { NextJsOverWordPress } from "@/components/NextJsOverWordpress";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { USPSection } from "@/components/USPSection";
import { BestChoiceSection } from "@/components/BestChoiceSection";
import { LatestBlogPosts } from "@/components/LatestBlogPosts";
import { FrequentlyAskedQuestions } from "@/components/FrequentlyAskedQuestion";
import { CostDescriptionSection } from "@/components/CostDescriptionSection";

// Metadata voor de pagina
export const metadata: Metadata = {
  title: "Website Laten Maken beter dan wordpress | Next Website",
  description:
    "Website laten maken die echt klanten binnehaalt? Wij maken websites die op automatische piloot voor jou leads of bestellingen genereren..",
  keywords: [
    "website laten maken",
    "Webshop laten maken",
    "webontwikkeling",
    "professionele website",
    "SEO",
  ],
  openGraph: {
    title: "Website Laten Maken beter dan wordpress | Next Website",
    description:
      "Laat een professionele website maken door experts. Wij ontwerpen en ontwikkelen websites die jouw bedrijf laten groeien.",
    url: "https://jouwwebsite.nl/website-laten-maken",
    images: [
      {
        url: "/images/website-maken-banner.jpg",
        alt: "Website laten maken banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Laten Maken - Jouw Ideale Website Ontwikkelen",
    description:
      "Laat een professionele website maken door experts. Wij ontwerpen en ontwikkelen websites die jouw bedrijf laten groeien.",
    images: ["/images/website-maken-banner.jpg"],
  },
};

const Page = () => {
return (
  <div>
    <HeroSubPage />
    <div className="container mx-auto max-w-7xl mt-5 md:mt-20">
      <div className="md:flex justify-between"> 
      <div className="md:w-1/2 p-5 md:p-0">
      <h1 className="font-bold text-5xl md:text-6xl">Website laten maken</h1>
      <p className="text-lg mt-5">
        Wil je bij ons jouw website laten maken? Je kan rekenen op 1
        contactpersoon voor snelle communicatie. Wij kunnen binnen gemiddeld
        5-7 werkdagen een website opleveren. Kijk hieronder voor ons
        stappenplan hoe wij er voor zorgen dat jou website bovenaan komt. Wij
        gebruiken bovendien geen wordpress. Wil je in 2025 hoog scoren in
        google? Dan is wordpress een NO-GO geloof je me niet?
        <Link className="text-blue-500 font-bold ml-2" href="https://ikius.com/blog/nextjs-vs-wordpress">
        wordpress vs nextjs.
      </Link>
      </p>
      </div>
      <div className="p-5 md:p-0">
          <Image src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=2524&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Website laten maken"         width={500}
      height={500}  className="rounded-xl"/>
      </div>
      </div>
    </div>
    {/* Voordelen Checklist Sectie */}
    <Checklist />
    <DevelopmentProcess />
    <OtherServices />
    <ImportanceOfWebsite />
    <BusinessCustomWebsite />
    <NextJsOverWordPress />
    {/* <ProjectsShowcase /> */}
    <USPSection />
    <BestChoiceSection />
    {/* <LatestBlogPosts /> */}
    <FrequentlyAskedQuestions />
    <CostDescriptionSection />
  </div>
  );
};

export default Page;
