"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaRocket, FaLink, FaMobileAlt, FaServer, FaCode, FaChartLine, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export const SeoChecklist = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      title: "Technisch Perfect",
      description: "We optimaliseren elke technische factor die invloed heeft op uw ranking, van laadsnelheid en mobiele compatibiliteit tot schema markup en canonicals.",
      icon: <FaCode className="text-xl" />,
      color: "from-blue-500 to-sky-700",
      lightBg: "bg-blue-50",
      darkBg: "bg-blue-900/40",
      glow: "blue"
    },
    {
      title: "Content Strategie",
      description: "Data-gedreven content die exact aansluit bij wat uw doelgroep zoekt én wat Google waardeert, gericht op conversie én ranking.",
      icon: <FaSearch className="text-xl" />,
      color: "from-purple-500 to-violet-700",
      lightBg: "bg-purple-50",
      darkBg: "bg-purple-900/40",
      glow: "purple"
    },
    {
      title: "Autoriteit Opbouw",
      description: "Strategische link building campagnes die uw domeinautoriteit verhogen en u positioneren als leider in uw branche.",
      icon: <FaLink className="text-xl" />,
      color: "from-green-500 to-emerald-700",
      lightBg: "bg-green-50",
      darkBg: "bg-green-900/40",
      glow: "green"
    },
    {
      title: "Lokale SEO",
      description: "Optimalisatie voor lokale zoekresultaten, inclusief Google Business profiel, lokale schema's en geotargeting voor maximale lokale zichtbaarheid.",
      icon: <FaGlobe className="text-xl" />,
      color: "from-amber-500 to-orange-700",
      lightBg: "bg-amber-50",
      darkBg: "bg-amber-900/40",
      glow: "amber"
    },
    {
      title: "Mobiele Optimalisatie",
      description: "Volledige optimalisatie voor Mobile-First indexing van Google, waardoor uw website perfect scoort in de steeds belangrijkere mobiele zoekresultaten.",
      icon: <FaMobileAlt className="text-xl" />,
      color: "from-indigo-500 to-blue-700",
      lightBg: "bg-indigo-50",
      darkBg: "bg-indigo-900/40",
      glow: "indigo"
    },
    {
      title: "Snelheidsoptimalisatie",
      description: "Geavanceerde technieken om uw website razendsnel te maken, wat direct resulteert in hogere rankings en een betere gebruikerservaring.",
      icon: <FaRocket className="text-xl" />,
      color: "from-red-500 to-rose-700",
      lightBg: "bg-red-50",
      darkBg: "bg-red-900/40",
      glow: "red"
    },
    {
      title: "Gedetailleerde Rapportage",
      description: "Transparante rapportages die niet alleen rankings tonen, maar ook verkeer, conversies en ROI om uw SEO-resultaten volledig meetbaar te maken.",
      icon: <FaChartLine className="text-xl" />,
      color: "from-teal-500 to-emerald-700",
      lightBg: "bg-teal-50",
      darkBg: "bg-teal-900/40",
      glow: "teal"
    },
    {
      title: "Core Web Vitals",
      description: "Volledige optimalisatie voor Google's Core Web Vitals, een cruciale rankingfactor die de gebruikerservaring en prestaties van uw website meet.",
      icon: <FaServer className="text-xl" />,
      color: "from-fuchsia-500 to-pink-700",
      lightBg: "bg-fuchsia-50",
      darkBg: "bg-fuchsia-900/40",
      glow: "fuchsia"
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
      {/* Animated background elements */}
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
                className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4"
              >
                <motion.span
                  animate={{ rotate: [0, -10, 0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  <FaSearch />
                </motion.span> 
                Data-Gedreven SEO
              </motion.div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-800 dark:text-white"
            >
              Waarom onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 relative">
                SEO-aanpak
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span> écht werkt
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-zinc-600 dark:text-zinc-300 mb-10"
            >
              Waar anderen gokken, baseren wij onze strategie op data. Onze SEO-aanpak is volledig transparant, meetbaar en gericht op échte resultaten: meer relevante bezoekers, hogere conversies en een solide ROI.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                      Onze SEO-strategieën zorgen gemiddeld voor <span className="font-semibold text-blue-600 dark:text-blue-400">65% meer organisch verkeer</span> en <span className="font-semibold text-blue-600 dark:text-blue-400">53% lagere acquisitiekosten</span> dan betaalde advertenties.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 60,
                  ease: "linear"
                }}
                className="absolute -right-4 -bottom-4 w-20 h-20 bg-gray-50 dark:bg-zinc-900 rounded-full flex items-center justify-center border border-gray-100 dark:border-zinc-700"
              >
                {/* Decorative element */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full opacity-70"></div>
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
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl shadow-md hover:shadow-xl overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-white dark:bg-zinc-900 opacity-0 group-hover:opacity-10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span>Gratis SEO-scan aanvragen</span>
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
                  {/* Card with improved hover effect for dark mode */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`p-6 rounded-2xl border border-gray-200 dark:border-zinc-700 relative overflow-hidden transition-all duration-300 
                      ${hoveredIndex === index 
                      ? `shadow-lg bg-gradient-to-br ${benefit.lightBg} dark:bg-zinc-800` 
                      : 'bg-white dark:bg-zinc-800'}`}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex mb-4 relative">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${benefit.color}`}>
                          {/* Pulsing animation for icon background */}
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
                        
                        {/* Numbered badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-white dark:bg-zinc-700 rounded-full border border-gray-200 dark:border-zinc-600 text-xs font-bold text-zinc-700 dark:text-zinc-200">
                          {index + 1}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 text-zinc-800 dark:text-white">
                        {benefit.title}
                      </h3>
                      
                      <p className={`text-zinc-600 dark:text-zinc-300 ${hoveredIndex === index ? 'text-blue-900 dark:text-zinc-100' : ''}`}>
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Hover background effect with fixed dark mode contrast */}
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
                        
                        {/* Subtle animated glow effect */}
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
                    
                    {/* Animated checkmark that appears on hover */}
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
                className="px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl text-white flex items-center gap-2 shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6L18 8L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7H7V12H12V7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 16H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-medium">De meest effectieve SEO-strategie van Nederland</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};