"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearchDollar, FaBullseye, FaAd, FaChartLine, FaUsers, FaCogs, FaStore, FaRobot } from "react-icons/fa";
import Image from "next/image";

export const GoogleAdsWorkflow = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: "Account Analyse & Research",
      description: "We analyseren je huidige advertenties, doelgroep en concurrentie om de meest effectieve Google Ads strategie te bepalen.",
      icon: <FaSearchDollar className="text-xl" />,
      color: "from-purple-500 to-pink-600",
      darkColor: "dark:from-purple-600 dark:to-pink-800",
      time: "Week 1",
      deliverables: ["Concurrentieanalyse", "Zoekwoordenonderzoek", "Doelgroepanalyse"]
    },
    {
      number: 2,
      title: "Campagne Strategie",
      description: "We ontwikkelen een op maat gemaakte advertentiestrategie met optimale budgetverdeling en targeting voor maximale ROI.",
      icon: <FaBullseye className="text-xl" />,
      color: "from-pink-500 to-rose-600",
      darkColor: "dark:from-pink-600 dark:to-rose-800",
      time: "Week 1-2",
      deliverables: ["Campagne structuur", "Budgetplanning", "Biedstrategie"]
    },
    {
      number: 3,
      title: "Advertentie Creatie",
      description: "We creëren pakkende advertenties met relevante zoekwoorden en sterke call-to-actions die converteren.",
      icon: <FaAd className="text-xl" />,
      color: "from-violet-500 to-purple-600",
      darkColor: "dark:from-violet-600 dark:to-purple-800",
      time: "Week 2",
      deliverables: ["Responsive search ads", "Call-to-actions", "Ad extensies"]
    },
    {
      number: 4,
      title: "Doelgroep Targeting",
      description: "We implementeren precisie targeting op basis van locatie, apparaat, interesses en zoekgedrag.",
      icon: <FaUsers className="text-xl" />,
      color: "from-fuchsia-500 to-purple-600",
      darkColor: "dark:from-fuchsia-600 dark:to-purple-800",
      time: "Week 2-3",
      deliverables: ["Geografische targeting", "Apparaat optimalisatie", "Doelgroep segmentatie"]
    },
    {
      number: 5,
      title: "Smart Bidding & Automatisering",
      description: "We zetten geavanceerde biedstrategieën op en automatiseren campagne-optimalisaties voor maximale performance.",
      icon: <FaRobot className="text-xl" />,
      color: "from-red-500 to-rose-600",
      darkColor: "dark:from-red-600 dark:to-rose-800",
      time: "Week 3-4",
      deliverables: ["Smart Bidding setup", "Automatische regels", "Conversie optimalisatie"]
    },
    {
      number: 6,
      title: "Performance & Rapportage",
      description: "We monitoren en optimaliseren dagelijks de prestaties en sturen maandelijks uitgebreide rapportages.",
      icon: <FaChartLine className="text-xl" />,
      color: "from-rose-500 to-pink-600",
      darkColor: "dark:from-rose-600 dark:to-pink-800",
      time: "Doorlopend",
      deliverables: ["ROI analyses", "Performance rapportages", "Optimalisatie voorstellen"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-zinc-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-10 w-80 h-80 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-10 w-72 h-72 bg-pink-300/20 dark:bg-pink-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-[0.015] dark:opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-4"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-2"
            >
              <FaSearchDollar className="text-sm" />
            </motion.span>
            Onze Data-Gestuurde Google Ads Methodiek
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-800 dark:text-white"
          >
            Van <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Investering</span> naar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Rendement</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-300"
          >
            Ons 6-stappen Google Ads proces maximaliseert je ROI systematisch, met aantoonbare resultaten en continue optimalisatie van je advertentiebudget.
          </motion.p>
        </div>

        {/* Main workflow steps */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"
            style={{ top: '40px', bottom: '40px' }}
          />
          
          {/* Timeline steps */}
          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className="relative mb-16 last:mb-0"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Timeline node */}
                  <motion.div
                    animate={activeStep === index ? {
                      scale: [1, 1.2, 1],
                      boxShadow: ["0 0 0 0 rgba(147, 51, 234, 0)", "0 0 0 10px rgba(147, 51, 234, 0.2)", "0 0 0 0 rgba(147, 51, 234, 0)"]
                    } : {}}
                    transition={{ duration: 1.5, repeat: activeStep === index ? Infinity : 0 }}
                    className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-6 md:mb-0 flex-shrink-0`}
                  >
                    <span className="text-xl font-bold">{step.number}</span>
                    
                    {/* Icon that shows on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: activeStep === index ? 1 : 0, scale: activeStep === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-full"
                    >
                      <div className={`text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                        {step.icon}
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Content card */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-10' : 'md:mr-10'}`}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className={`bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-zinc-700 relative overflow-hidden`}
                    >
                      {/* Tag showing timing */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 text-xs font-medium rounded-full">
                        {step.time}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-zinc-800 dark:text-white">{step.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-4">{step.description}</p>
                      
                      {/* Deliverables */}
                      <div className="space-y-2">
                        {step.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <motion.div
                              animate={{ scale: activeStep === index ? [1, 1.2, 1] : 1 }}
                              transition={{ duration: 0.4, repeat: activeStep === index ? Infinity : 0, repeatDelay: 0.5 }}
                              className="w-4 h-4 mt-0.5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex-shrink-0"
                            />
                            <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Bottom decoration */}
                      <div className={`absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r ${step.color}`} />
                    </motion.div>
                  </div>
                </div>

                {/* Step visualization */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`hidden md:block absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-5/12`}
                >
                  {/* Add appropriate visualizations for each step */}
                  {/* Similar to SEO workflow but with Google Ads specific content */}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700 p-8 max-w-3xl mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
                Klaar om je advertentierendement te maximaliseren?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 max-w-xl mx-auto">
                Vraag een gratis Google Ads analyse aan en ontdek hoe wij jouw campagnes naar het volgende niveau kunnen tillen.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl shadow-md hover:shadow-xl"
              >
                Gratis Ads Analyse Aanvragen
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};