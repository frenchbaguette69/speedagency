"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaAd, FaChartLine, FaUsers, FaBullseye, FaSearchDollar, FaStore, FaMobileAlt, FaCogs, FaQuestion, FaRobot } from "react-icons/fa";

export const GoogleAdsCallToAction = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const controls = useAnimation();
  
  const benefits = [
    {
      title: "Google Ads Strategie op maat",
      icon: <FaAd />,
      description: "Campagnes volledig afgestemd op uw doelen en doelgroep",
      color: "purple-600"
    },
    {
      title: "Maximaal rendement uit uw budget",
      icon: <FaSearchDollar />,
      description: "Optimale ROAS door slimme biedstrategieën en targeting"
    },
    {
      title: "Smart Bidding door AI experts",
      icon: <FaRobot />,
      description: "Machine learning gestuurde optimalisatie voor beste resultaten"
    },
    {
      title: "Perfecte doelgroep targeting",
      icon: <FaUsers />,
      description: "Bereik exact de juiste potentiële klanten op het juiste moment"
    },
    {
      title: "Google Ads experts met bewezen resultaat",
      icon: <FaChartLine />,
      description: "Transparante rapportages en continue optimalisatie"
    },
    {
      title: "Shopping campagnes die converteren",
      icon: <FaStore />,
      description: "Geoptimaliseerde product feeds en shopping advertenties"
    },
    {
      title: "Performance marketing op zijn best",
      icon: <FaBullseye />,
      description: "Focus op meetbare resultaten en ROI"
    },
    {
      title: "Data-gedreven campagne optimalisatie",
      icon: <FaCogs />,
      description: "Continue A/B testing en performance verbetering"
    },
    {
      title: "Remarketing die werkt",
      icon: <FaUsers />,
      description: "Strategische hermarketing voor hogere conversies"
    },
    {
      title: "Waarom Google Ads?",
      icon: <FaQuestion />,
      description: "Direct resultaat en volledige controle over uw advertentiebudget"
    }
  ];

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
    <section className="py-32 bg-gradient-to-b from-white to-purple-50 dark:from-zinc-900 dark:to-purple-950/40 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/10 dark:bg-pink-800/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/10 dark:bg-purple-800/5 rounded-full blur-3xl" />
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
              Google Ads Die <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Écht Converteren</span>
            </h2>
            
            <div className="h-24 flex items-center justify-center mb-8">
              <motion.div
                animate={controls}
                initial={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center"
              >
                <div className={`text-${benefits[currentTextIndex].color || "purple-600"} text-5xl mb-2`}>
                  {benefits[currentTextIndex].icon}
                </div>
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
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
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <span>Gratis Google Ads Analyse</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/google-ads-projecten" className="inline-flex items-center px-8 py-4 bg-white dark:bg-zinc-800 text-purple-600 dark:text-purple-400 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-zinc-700">
                  <span>Bekijk Onze Resultaten</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Interactive CTA Cards */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Complete Google Ads services voor maximale ROI</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-purple-600 to-pink-700 text-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <FaSearchDollar className="text-4xl mb-4 text-white/90" />
                <h4 className="text-2xl font-bold mb-4">Search Advertising</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Smart Bidding strategieën
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Keyword optimalisatie
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> A/B testing
                  </li>
                </ul>
                <Link href="/search-advertising" className="inline-block px-6 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors duration-200">
                  Meer informatie
                </Link>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-pink-600 to-rose-700 text-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <FaStore className="text-4xl mb-4 text-white/90" />
                <h4 className="text-2xl font-bold mb-4">Shopping Ads</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Product feed optimalisatie
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Smart Shopping campagnes
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Dynamic remarketing
                  </li>
                </ul>
                <Link href="/shopping-ads" className="inline-block px-6 py-3 bg-white text-pink-600 font-medium rounded-lg hover:bg-pink-50 transition-colors duration-200">
                  Ontdek meer
                </Link>
              </div>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-fuchsia-600 to-purple-700 text-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <FaUsers className="text-4xl mb-4 text-white/90" />
                <h4 className="text-2xl font-bold mb-4">Display & Video</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Display netwerk
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> YouTube advertising
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Remarketing
                  </li>
                </ul>
                <Link href="/display-advertising" className="inline-block px-6 py-3 bg-white text-fuchsia-600 font-medium rounded-lg hover:bg-fuchsia-50 transition-colors duration-200">
                  Lees meer
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om uw advertentieresultaten te maximaliseren?
          </h3>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto mb-8">
            Onze data-gedreven Google Ads aanpak zorgt voor lagere kosten per conversie, hogere ROAS en betere resultaten.
            Vraag vandaag nog een vrijblijvende analyse aan.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-medium rounded-full shadow-lg hover:bg-purple-50 transition-all duration-300">
                <span>Gratis Ads-analyse Aanvragen</span>
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
          
          <p className="text-pink-200 mt-6">
            Geen verplichtingen - 100% vrijblijvende analyse van uw Google Ads campagnes
          </p>
        </motion.div>
      </div>
    </section>
  );
};