"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAd, FaChartLine, FaTools, FaCode, FaBullseye, FaUsers, FaSearchDollar, FaCogs } from "react-icons/fa";
import { SiGoogleads, SiGoogleanalytics, SiGoogletagmanager, SiHubspot, SiMailchimp, SiGooglesheets } from "react-icons/si";

export const GoogleAdsTechnologyStack = () => {
  const technologies = [
    {
      name: "Google Ads Platform",
      description: "Geavanceerd advertentieplatform voor search, display, shopping en video campagnes",
      icon: <SiGoogleads className="h-8 w-8" />,
    },
    {
      name: "Google Analytics 4",
      description: "Diepgaande analyse van campagneprestaties en gebruikersgedrag voor optimale ROI",
      icon: <SiGoogleanalytics className="h-8 w-8" />,
    },
    {
      name: "Google Tag Manager",
      description: "Nauwkeurige conversietracking en geavanceerde gebeurtenismonitoring",
      icon: <SiGoogletagmanager className="h-8 w-8" />,
    },
    {
      name: "HubSpot CRM",
      description: "Lead tracking en marketing automatisering voor maximale conversie",
      icon: <SiHubspot className="h-8 w-8" />,
    },
    {
      name: "Smart Bidding AI",
      description: "Machine learning gestuurde biedstrategieën voor optimale resultaten",
      icon: <FaSearchDollar className="h-8 w-8" />,
    },
    {
      name: "Data Studio",
      description: "Realtime rapportages en dashboards voor volledige campagne inzichten",
      icon: <SiGooglesheets className="h-8 w-8" />,
    },
  ];
  
  const features = [
    {
      title: "Smart Bidding Strategieën",
      description: "Onze geavanceerde biedstrategieën gebruiken machine learning voor optimale CPC en maximale ROAS.",
      icon: <FaChartLine className="h-6 w-6" />,
    },
    {
      title: "Conversion Tracking",
      description: "Uitgebreide conversietracking voor nauwkeurige ROI-meting en campagne-optimalisatie.",
      icon: <FaBullseye className="h-6 w-6" />,
    },
    {
      title: "Doelgroep Targeting",
      description: "Precisie-targeting op basis van gedrag, interesse en intentie voor maximaal rendement.",
      icon: <FaUsers className="h-6 w-6" />,
    },
    {
      title: "A/B Testing",
      description: "Continue optimalisatie door systematisch testen van advertenties en landingspagina's.",
      icon: <FaCogs className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-zinc-900 dark:to-purple-950 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
              <FaAd className="mr-2" /> Google Ads Technologie
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              De <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Tools</span> Achter Onze Ads Successen
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mt-4">
              Wij gebruiken de meest geavanceerde advertentietechnologieën en analyses om 
              maximaal rendement uit uw Google Ads investeringen te halen.
            </p>
          </motion.div>
        </div>

        {/* Technology Stack */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-purple-600 dark:text-purple-400 mr-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold">{tech.name}</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features & Benefits */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Voordelen van Onze Google Ads Aanpak
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md flex items-start"
              >
                <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-lg mr-4 text-purple-600 dark:text-purple-400 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Google Ads-rich content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-purple-50 dark:bg-purple-900/30 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Waarom data-gedreven Google Ads essentieel is</h3>
          <div className="prose prose-purple dark:prose-invert max-w-none">
            <p>
              Een succesvolle Google Ads strategie vereist meer dan alleen het instellen van advertenties. 
              Met ons geavanceerde tracking systeem meten we elke interactie, van eerste klik tot finale conversie, 
              wat resulteert in een gemiddelde ROAS-verbetering van 85%.
            </p>
            <p>
              Onze Smart Bidding strategieën gebruiken machine learning om real-time biedingen te optimaliseren. 
              Dit zorgt voor een gemiddelde verlaging van 42% in cost-per-acquisition, terwijl de conversieratio 
              significant verbetert.
            </p>
            <p>
              Doelgroep targeting is cruciaal voor Google Ads succes. We gebruiken geavanceerde segmentatie en 
              remarketing technieken om uw advertenties alleen te tonen aan de meest relevante potentiële klanten, 
              wat leidt tot hogere CTR en lagere kosten.
            </p>
            <p>
              Continue optimalisatie door A/B testing van advertentieteksten, extensies en landingspagina's zorgt 
              voor constante verbetering van campagneprestaties. Onze klanten zien gemiddeld een stijging van 65% 
              in conversieratio na 3 maanden.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Vraag een gratis Ads-analyse aan
          </a>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Ontdek hoe onze Google Ads expertise uw online advertentieresultaten kan transformeren
          </p>
        </motion.div>
      </div>
    </section>
  );
};