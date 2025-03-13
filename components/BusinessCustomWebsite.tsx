"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLightbulb, FaTools, FaPalette, FaRocket, FaArrowRight } from "react-icons/fa";

export const BusinessCustomWebsite = () => {
  const [activeTab, setActiveTab] = useState("custom");

  const tabs = [
    { 
      id: "custom", 
      label: "Custom Website",
      icon: <FaPalette />
    },
    { 
      id: "business", 
      label: "Business Website",
      icon: <FaLightbulb /> 
    }
  ];

  const customFeatures = [
    "Uniek ontwerp dat perfect aansluit bij uw merkidentiteit",
    "Next.js technologie voor optimale snelheid en SEO",
    "Custom functionaliteiten op maat van uw specifieke behoeften",
    "Geoptimaliseerd voor mobiele apparaten en alle browsers",
    "Gedetailleerde analyses en tracking mogelijkheden"
  ];

  const businessFeatures = [
    "Professionele uitstraling voor uw zakelijke merk",
    "Lead-generatie functionaliteiten en contactformulieren",
    "Integratie met CRM-systemen en bedrijfstools",
    "Veilige en schaalbare architectuur",
    "Eenvoudig te beheren content systeem"
  ];

  const workflow = [
    {
      icon: <FaLightbulb className="text-white" />,
      title: "Strategische Planning",
      description: "We analyseren uw bedrijf en doelstellingen om de perfecte website strategie te ontwikkelen."
    },
    {
      icon: <FaPalette className="text-white" />,
      title: "Ontwerp & UX",
      description: "Ons ontwerpteam creëert een visueel aantrekkelijke en gebruiksvriendelijke interface."
    },
    {
      icon: <FaTools className="text-white" />,
      title: "Ontwikkeling",
      description: "Onze developers bouwen een technisch hoogstaande website met Next.js technologie."
    },
    {
      icon: <FaRocket className="text-white" />,
      title: "Lancering & Optimalisatie",
      description: "We lanceren uw website en voeren doorlopende optimalisaties uit voor betere prestaties."
    }
  ];

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-7xl px-5"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Websites Met Impact
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
              Of u nu een strakke business website of een volledig aangepaste oplossing nodig heeft, 
              wij creëren digitale ervaringen die resultaat opleveren.
            </p>
          </motion.div>

          {/* Tab selector */}
          <div className="flex justify-center mt-10 mb-12">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-zinc-700 rounded-full">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-full text-sm sm:text-base font-medium transition ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white shadow-md" 
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-600"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Main content area with 3D perspective effect */}
        <div className="relative">
          <motion.div
            key={activeTab} // Force re-render on tab change
            initial={{ opacity: 0, rotateX: 10, y: 10 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, rotateX: -10, y: 10 }}
            transition={{ duration: 0.5 }}
            className="md:flex items-center gap-8"
          >
            {/* Image side */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-xl overflow-hidden shadow-2xl"
                >
                  <Image 
                    src={activeTab === "custom" 
                      ? "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2536&q=80"
                      : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    } 
                    alt={activeTab === "custom" ? "Custom website voorbeeld" : "Business website voorbeeld"}
                    width={600}
                    height={400}
                    className="w-full object-cover rounded-xl"
                  />
                </motion.div>
                
                {/* Floating accent elements */}
                <motion.div 
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                  }}
                  className="hidden md:block absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg -rotate-6"
                />
                <motion.div 
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -7, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="hidden md:block absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-tr from-indigo-300 to-blue-400 dark:from-indigo-600 dark:to-blue-700 rounded-full shadow-lg"
                />
              </div>
            </div>
            
            {/* Content side */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-white">
                {activeTab === "custom" ? "Unieke Custom Websites" : "Effectieve Business Websites"}
              </h3>
              
              <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                {activeTab === "custom" 
                  ? "Een custom website is de ultieme manier om uw merk te onderscheiden. We ontwerpen en ontwikkelen een op maat gemaakte digitale ervaring die perfect aansluit bij uw visie en doelstellingen."
                  : "Een professionele business website zet uw bedrijf op de kaart en genereert waardevolle leads. Met focus op conversie en gebruikerservaring creëren we een effectief online visitekaartje."
                }
              </p>
              
              <div className="space-y-3 mb-8">
                {(activeTab === "custom" ? customFeatures : businessFeatures).map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <p className="text-zinc-700 dark:text-zinc-300">{feature}</p>
                  </motion.div>
                ))}
              </div>
              
              <Link href={activeTab === "custom" ? "/custom-website" : "/business-website"}>
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition-colors"
                >
                  {activeTab === "custom" ? "Vraag een custom website aan" : "Start uw business website"} 
                  <FaArrowRight />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-lg font-medium mb-6 text-zinc-700 dark:text-white">
            Klaar om uw online aanwezigheid naar een hoger niveau te tillen?
          </p>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium shadow-lg transition-all"
            >
              Neem contact op voor een vrijblijvend gesprek
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};