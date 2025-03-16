"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAd, FaChartLine, FaUsers, FaMobileAlt, FaCogs, FaRegHandshake, FaSearchDollar, FaBullseye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const GoogleAdsChecklist = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      title: "Strategische Campagnes",
      description: "Data-gedreven campagnes die exact aansluiten bij uw doelgroep en doelstellingen, met maximaal rendement uit uw advertentiebudget.",
      icon: <FaBullseye className="text-xl" />,
      color: "from-purple-500 to-pink-700",
      lightBg: "bg-purple-50",
      darkBg: "bg-purple-900/40",
      glow: "purple"
    },
    {
      title: "Conversie Optimalisatie",
      description: "Continue optimalisatie van uw advertenties en landingspagina's voor de hoogst mogelijke conversieratio en laagste kosten per conversie.",
      icon: <FaChartLine className="text-xl" />,
      color: "from-pink-500 to-rose-700",
      lightBg: "bg-pink-50",
      darkBg: "bg-pink-900/40",
      glow: "pink"
    },
    {
      title: "Doelgroep Targeting",
      description: "Nauwkeurige targeting op basis van zoekgedrag, locatie, apparaat en demografische gegevens voor optimaal bereik van uw ideale klant.",
      icon: <FaUsers className="text-xl" />,
      color: "from-violet-500 to-purple-700",
      lightBg: "bg-violet-50",
      darkBg: "bg-violet-900/40",
      glow: "violet"
    },
    {
      title: "Smart Bidding",
      description: "Geavanceerde biedstrategieën met machine learning voor optimale veilingprestaties en maximale ROI op uw advertentie-uitgaven.",
      icon: <FaSearchDollar className="text-xl" />,
      color: "from-fuchsia-500 to-purple-700",
      lightBg: "bg-fuchsia-50",
      darkBg: "bg-fuchsia-900/40",
      glow: "fuchsia"
    },
    {
      title: "Responsive Ads",
      description: "Dynamische advertenties die zich automatisch aanpassen aan verschillende formaten en plaatsingen voor maximale zichtbaarheid.",
      icon: <FaMobileAlt className="text-xl" />,
      color: "from-rose-500 to-pink-700",
      lightBg: "bg-rose-50",
      darkBg: "bg-rose-900/40",
      glow: "rose"
    },
    {
      title: "Performance Tracking",
      description: "Uitgebreide tracking en rapportage van alle belangrijke metrics, van klikkosten tot ROAS, voor volledige transparantie.",
      icon: <FaCogs className="text-xl" />,
      color: "from-red-500 to-rose-700",
      lightBg: "bg-red-50",
      darkBg: "bg-red-900/40",
      glow: "red"
    },
    {
      title: "A/B Testing",
      description: "Systematisch testen van advertentieteksten, beelden en doelgroepen om de best presterende combinaties te identificeren.",
      icon: <FaAd className="text-xl" />,
      color: "from-purple-500 to-violet-700",
      lightBg: "bg-purple-50",
      darkBg: "bg-purple-900/40",
      glow: "purple"
    },
    {
      title: "Remarketing",
      description: "Strategische hermarketing aan websitebezoekers en klanten voor hogere conversieratio's en lagere acquisitiekosten.",
      icon: <FaRegHandshake className="text-xl" />,
      color: "from-pink-500 to-rose-700",
      lightBg: "bg-pink-50",
      darkBg: "bg-pink-900/40",
      glow: "pink"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="mt-12 py-20 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800" />
        
        {/* Animated pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute -top-24 -left-24 w-96 h-96">
            <motion.div 
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 180,
                ease: "linear"
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                  <path d="M50 10C55.5228 10 60 5.52285 60 0C60 -5.52285 55.5228 -10 50 -10C44.4772 -10 40 -5.52285 40 0C40 5.52285 44.4772 10 50 10Z" fill="currentColor"/>
                  <path d="M80 40C85.5228 40 90 35.5229 90 30C90 24.4771 85.5228 20 80 20C74.4772 20 70 24.4771 70 30C70 35.5229 74.4772 40 80 40Z" fill="currentColor"/>
                  <path d="M90 90C95.5229 90 100 85.5229 100 80C100 74.4771 95.5229 70 90 70C84.4771 70 80 74.4771 80 80C80 85.5229 84.4771 90 90 90Z" fill="currentColor"/>
                  <path d="M20 90C25.5228 90 30 85.5229 30 80C30 74.4771 25.5228 70 20 70C14.4772 70 10 74.4771 10 80C10 85.5229 14.4772 90 20 90Z" fill="currentColor"/>
                  <path d="M100 0V100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M0 100H100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </motion.div>
          </div>
          
          <div className="absolute top-1/2 right-0 w-64 h-64 transform translate-x-1/2 -translate-y-1/2">
            <motion.div 
              animate={{ 
                rotate: [0, -360],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 240,
                ease: "linear"
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.15">
                  <path d="M40 40m-30 0a30 30 0 1 0 60 0a30 30 0 1 0 -60 0" stroke="currentColor" strokeWidth="2"/>
                  <path d="M80 80m-15 0a15 15 0 1 0 30 0a15 15 0 1 0 -30 0" stroke="currentColor" strokeWidth="2"/>
                  <path d="M60 20l40 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 80l40 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-7xl px-5"
      >
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left side content */}
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-4"
              >
                <motion.span
                  animate={{ rotate: [0, -10, 0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  <FaAd />
                </motion.span> 
                Data-Gedreven Adverteren
              </motion.div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-800 dark:text-white"
            >
              Waarom onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 relative">
                Google Ads
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span> écht converteren
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-zinc-600 dark:text-zinc-300 mb-10"
            >
              Geen weggegooid advertentiebudget meer. Onze Google Ads experts zorgen voor datagedreven campagnes die uw doelgroep effectief bereiken en converteren naar klanten, met een meetbaar rendement op uw investering.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative mb-10"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-6 bg-white dark:bg-zinc-800 rounded-2xl border border-gray-200 dark:border-zinc-700 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        ease: "easeInOut" 
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.2425 8.36L10.0001 14.6025L7.75757 12.36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-zinc-800 dark:text-white mb-1">
                      Bewezen Resultaten
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Onze Google Ads campagnes zorgen gemiddeld voor <span className="font-semibold text-purple-600 dark:text-purple-400">40% lagere CPC</span> en <span className="font-semibold text-purple-600 dark:text-purple-400">85% hogere ROAS</span> dan het industriegemiddelde.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl shadow-md hover:shadow-xl overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-white dark:bg-zinc-900 opacity-0 group-hover:opacity-10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span>Gratis Ads-scan aanvragen</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
          
          {/* Right side checklist */}
          <div className="lg:w-7/12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`p-6 rounded-2xl border border-gray-200 dark:border-zinc-700 relative overflow-hidden transition-all duration-300 
                      ${hoveredIndex === index 
                      ? `shadow-lg bg-gradient-to-br ${benefit.lightBg} dark:bg-zinc-800` 
                      : 'bg-white dark:bg-zinc-800'}`}
                  >
                    <div className="relative z-10">
                      <div className="flex mb-4 relative">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${benefit.color}`}>
                          <motion.div
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.7, 0.2, 0.7]
                            }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 2,
                              ease: "easeInOut" 
                            }}
                            className="absolute inset-0 rounded-xl bg-white dark:bg-zinc-800 opacity-0 group-hover:opacity-30"
                          />
                          <span className="text-white">{benefit.icon}</span>
                        </div>
                        
                        <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-white dark:bg-zinc-700 rounded-full border border-gray-200 dark:border-zinc-600 text-xs font-bold text-zinc-700 dark:text-zinc-200">
                          {index + 1}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 text-zinc-800 dark:text-white">
                        {benefit.title}
                      </h3>
                      
                      <p className={`text-zinc-600 dark:text-zinc-300 ${hoveredIndex === index ? 'text-purple-900 dark:text-zinc-100' : ''}`}>
                        {benefit.description}
                      </p>
                    </div>
                    
                    {hoveredIndex === index && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 -z-10"
                        >
                          <div className={`absolute inset-0 ${benefit.lightBg} opacity-90 dark:opacity-0`}></div>
                          <div className={`absolute inset-0 ${benefit.darkBg} opacity-0 dark:opacity-100`}></div>
                        </motion.div>
                        
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.15, 0.1]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            ease: "easeInOut" 
                          }}
                          className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-${benefit.glow}-500 blur-xl opacity-20 dark:opacity-15 -z-10`}
                        />
                      </>
                    )}
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0, 
                        scale: hoveredIndex === index ? 1 : 0 
                      }}
                      transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      className="absolute top-4 right-4 w-5 h-5 text-green-500 dark:text-green-400"
                    >
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Most effective tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex justify-center sm:justify-end"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-4 py-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl text-white flex items-center gap-2 shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6L18 8L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7H7V12H12V7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-medium">De meest effectieve Google Ads-strategie van Nederland</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};