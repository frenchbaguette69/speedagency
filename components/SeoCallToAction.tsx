"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaSearch, FaChartLine, FaCode, FaGlobe, FaMobileAlt, FaHeadset, FaLink, FaMapMarkerAlt, FaQuestion, FaTools } from "react-icons/fa";

export const SeoCallToAction = () => {
  // State for the animated text display
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const controls = useAnimation();
  
  // Array of compelling reasons/benefits
  const benefits = [
    {
      title: "SEO Strategie op maat laten maken",
      icon: <FaSearch />,
      description: "Volledig afgestemd op uw branche, doelgroep en bedrijfsdoelen",
      color: "blue-600"
    },
    {
      title: "Hogere Rankings in Google behalen",
      icon: <FaChartLine />,
      description: "Duurzame top-posities voor uw belangrijkste zoekwoorden"
    },
    {
      title: "Technische SEO door specialisten",
      icon: <FaCode />,
      description: "Core Web Vitals en technische optimalisatie voor sterke rankings"
    },
    {
      title: "Local SEO voor meer lokale klanten",
      icon: <FaMapMarkerAlt />,
      description: "Domineer de zoekresultaten in uw regio en trek lokale klanten aan"
    },
    {
      title: "SEO Experts die echt resultaat leveren",
      icon: <FaHeadset />,
      description: "Transparante werkwijze met duidelijke rapportages en meetbare resultaten"
    },
    {
      title: "Zoekmachine optimalisatie voor uw website",
      icon: <FaTools />,
      description: "Volledige website optimalisatie voor maximale vindbaarheid"
    },
    {
      title: "Mobiele SEO voor betere rankings",
      icon: <FaMobileAlt />,
      description: "Optimalisatie voor Google's mobile-first indexering"
    },
    {
      title: "Content die converteert én rankt",
      icon: <FaGlobe />,
      description: "SEO-content die zowel zoekmachines als bezoekers aanspreekt"
    },
    {
      title: "Linkbuilding strategie die werkt",
      icon: <FaLink />,
      description: "Opbouwen van kwalitatieve backlinks die uw autoriteit versterken"
    },
    {
      title: "Waarom investeren in SEO?",
      icon: <FaQuestion />,
      description: "Langdurige groei in organisch verkeer met blijvende resultaten"
    },
  ];

  // Animation to cycle through the benefits
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 }
      }).then(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % benefits.length);
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        });
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [controls, benefits.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50 dark:from-zinc-900 dark:to-blue-950/40 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/10 dark:bg-cyan-800/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/10 dark:bg-blue-800/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
              Tijd Voor <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">SEO</span> Die Écht Werkt
            </h2>
            
            <div className="h-24 flex items-center justify-center mb-8">
              <motion.div
                animate={controls}
                initial={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center"
              >
                <div className={`text-${benefits[currentTextIndex].color || "blue-600"} text-5xl mb-2`}>
                  {benefits[currentTextIndex].icon}
                </div>
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  {benefits[currentTextIndex].title}
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 mt-2 max-w-2xl mx-auto">
                  {benefits[currentTextIndex].description}
                </p>
              </motion.div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <span>Gratis SEO Analyse Aanvragen</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/seo-projecten" className="inline-flex items-center px-8 py-4 bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-zinc-700">
                  <span>Bekijk Onze SEO Resultaten</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Key Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Waarom Klanten Voor Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">SEO Aanpak</span> Kiezen
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start border border-gray-100 dark:border-zinc-700"
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive CTA Cards */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Wij maken uw online vindbaarheid werkelijkheid</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-600 to-cyan-700 text-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <FaSearch className="text-4xl mb-4 text-white/90" />
                <h4 className="text-2xl font-bold mb-4">Technische SEO</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Core Web Vitals optimalisatie
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Schema markup implementatie
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Mobile-first indexering
                  </li>
                </ul>
                <Link href="/technische-seo" className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  Meer informatie
                </Link>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-teal-600 to-green-700 text-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <FaMapMarkerAlt className="text-4xl mb-4 text-white/90" />
                <h4 className="text-2xl font-bold mb-4">Local SEO</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Google Business Profile optimalisatie
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Lokale zoekwoord targeting
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> NAP consistentie
                  </li>
                </ul>
                <Link href="/local-seo" className="inline-block px-6 py-3 bg-white text-teal-600 font-medium rounded-lg hover:bg-teal-50 transition-colors duration-200">
                  Ontdek meer
                </Link>
              </div>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <FaLink className="text-4xl mb-4 text-white/90" />
                <h4 className="text-2xl font-bold mb-4">Content & Links</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> SEO copywriting
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Strategische linkbuilding
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Content gap analyse
                  </li>
                </ul>
                <Link href="/seo-content" className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-200">
                  Lees meer
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Steps Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Van <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Onzichtbaar naar Onmisbaar</span> in 4 Stappen
          </h3>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-2xl font-bold mb-6 z-10">
                  1
                </div>
                <h4 className="text-xl font-bold mb-2">SEO Audit & Analyse</h4>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Uitgebreide analyse van uw huidige SEO-status, concurrenten en kansen
                </p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white flex items-center justify-center text-2xl font-bold mb-6 z-10">
                  2
                </div>
                <h4 className="text-xl font-bold mb-2">Strategie & Planning</h4>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Ontwikkeling van een op maat gemaakte SEO-strategie met duidelijke doelen
                </p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-teal-600 text-white flex items-center justify-center text-2xl font-bold mb-6 z-10">
                  3
                </div>
                <h4 className="text-xl font-bold mb-2">Implementatie & Optimalisatie</h4>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Uitvoering van technische verbeteringen, content en linkbuilding activiteiten
                </p>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-green-600 text-white flex items-center justify-center text-2xl font-bold mb-6 z-10">
                  4
                </div>
                <h4 className="text-xl font-bold mb-2">Monitoring & Doorontwikkeling</h4>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Doorlopende analyses, rapportages en optimalisatie voor blijvende resultaten
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om uw online vindbaarheid drastisch te verbeteren?
          </h3>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
            Onze data-gedreven SEO-aanpak zorgt voor duurzame rankings, meer organisch verkeer en hogere conversies.
            Neem vandaag nog contact op voor een vrijblijvende SEO-scan.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300">
                <span>Gratis SEO-scan Aanvragen</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/tel:+31612345678" className="inline-flex items-center px-8 py-4 bg-transparent text-white font-medium rounded-full border-2 border-white hover:bg-white/10 transition-all duration-300">
                <span>Bel Direct: 06-12345678</span>
              </Link>
            </motion.div>
          </div>
          
          <p className="text-blue-200 mt-6">
            Geen verplichtingen - 100% vrijblijvende analyse van uw huidige SEO-status
          </p>
        </motion.div>
      </div>
    </section>
  );
};