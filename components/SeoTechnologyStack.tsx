"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaChartLine, FaTools, FaCode, FaMobileAlt, FaGlobe, FaServer, FaLink, FaLink as FaAhrefs } from "react-icons/fa";
import { SiGoogleanalytics, SiGooglesearchconsole, SiSemrush, SiGoogletagmanager, SiContentful } from "react-icons/si";

export const SeoTechnologyStack = () => {
  const technologies = [
    {
      name: "Google Analytics 4",
      description: "Geavanceerde data-analyse voor diepgaande inzichten in gebruikersgedrag en conversies",
      icon: <SiGoogleanalytics className="h-8 w-8" />,
    },
    {
      name: "Google Search Console",
      description: "Real-time monitoring van zoekcriteria, click-through rates en indexeringsstatus",
      icon: <SiGooglesearchconsole className="h-8 w-8" />,
    },
    {
      name: "Ahrefs",
      description: "Uitgebreide backlink analyse en concurrentie-onderzoek voor doelgerichte SEO-strategieën",
      icon: <FaAhrefs className="h-8 w-8" />,
    },
    {
      name: "SEMrush",
      description: "Keyword research, positietracking en geavanceerde SEO auditing tools",
      icon: <SiSemrush className="h-8 w-8" />,
    },
    {
      name: "Google Tag Manager",
      description: "Gestructureerde implementatie van tracking codes en conversie-events",
      icon: <SiGoogletagmanager className="h-8 w-8" />,
    },
    {
      name: "Headless CMS",
      description: "Flexibel content management geoptimaliseerd voor SEO en snelle laadtijden",
      icon: <SiContentful className="h-8 w-8" />,
    },
  ];
  
  const features = [
    {
      title: "Data-Gedreven Aanpak",
      description: "Onze SEO-strategieën zijn gebaseerd op grondige data-analyse, niet op aannames of verouderde tactieken.",
      icon: <FaChartLine className="h-6 w-6" />,
    },
    {
      title: "Technische SEO Expertise",
      description: "We optimaliseren de technische infrastructuur van je website voor maximale crawlbaarheid en indexering.",
      icon: <FaCode className="h-6 w-6" />,
    },
    {
      title: "Mobile-First Indexering",
      description: "Onze SEO-strategie focust op optimale mobiele prestaties, cruciaal sinds Google's mobile-first indexering.",
      icon: <FaMobileAlt className="h-6 w-6" />,
    },
    {
      title: "Lokale & Internationale SEO",
      description: "Gespecialiseerde aanpak voor zowel lokale bedrijven als internationale organisaties met meertalige content.",
      icon: <FaGlobe className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-zinc-900 dark:to-blue-950 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              <FaSearch className="mr-2" /> SEO Technologie
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              De <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Tools</span> Achter Onze SEO Successen
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mt-4">
              Wij gebruiken de meest geavanceerde SEO-technologieën en data-analyse tools om 
              meetbare resultaten te leveren die zorgen voor duurzame organische groei.
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
                <div className="text-blue-600 dark:text-blue-400 mr-4">
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
            Voordelen van Onze SEO Methodologie
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
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg mr-4 text-blue-600 dark:text-blue-400 flex-shrink-0">
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
        
        {/* SEO-rich content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-blue-50 dark:bg-blue-900/30 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Waarom een technische SEO-basis essentieel is</h3>
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p>
              De technische infrastructuur van een website is fundamenteel voor SEO-succes. Core Web Vitals, 
              de metriek die Google gebruikt om gebruikerservaring te meten, hebben een directe impact op rankings. 
              Onze optimalisaties verbeteren deze scores gemiddeld met 65-85%, wat resulteert in betere posities.
            </p>
            <p>
              Terwijl traditionele SEO-bureaus vaak alleen focussen op content en backlinks, zorgt onze holistische aanpak 
              ervoor dat de technische basis perfect is. Dit omvat schema markup implementatie, waardoor je content rijk 
              weergegeven wordt in zoekresultaten met hogere click-through rates tot gevolg.
            </p>
            <p>
              Mobile-first indexering is niet langer optioneel - het is essentieel. Google beoordeelt je website primair 
              op de mobiele versie. Onze mobile SEO-strategie zorgt voor perfecte responsiviteit, snelle laadtijden op mobiele 
              netwerken en intuïtieve interactie op touchscreens, waardoor je rankings significant verbeteren.
            </p>
            <p>
              Analytics en conversietracking zijn de kern van onze meetbare SEO-aanpak. We implementeren geavanceerde 
              trackingtechnologieën om precies te meten welke zoekwoorden en landingspagina's de beste resultaten opleveren, 
              zodat we continu kunnen optimaliseren voor maximale ROI.
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
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Vraag een gratis SEO-scan aan
          </a>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Ontdek hoe onze technische SEO-expertise jouw online vindbaarheid kan transformeren
          </p>
        </motion.div>
      </div>
    </section>
  );
};