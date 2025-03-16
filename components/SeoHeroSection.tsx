"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaRocket, FaChartLine, FaMobileAlt, FaCheckCircle, FaArrowRight, FaGlobe, FaSearchPlus } from "react-icons/fa";

export const SeoHeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.2, once: true });
  
  const features = [
    {
      title: "Data-Gedreven Strategie",
      description: "SEO gebaseerd op feiten, niet op aannames",
      icon: <FaChartLine className="text-2xl" />
    },
    {
      title: "Hogere Google Rankings",
      description: "Doelgerichte optimalisatie voor top posities",
      icon: <FaSearch className="text-2xl" />
    },
    {
      title: "Meer Organisch Verkeer",
      description: "Relevante bezoekers die naar je op zoek zijn",
      icon: <FaGlobe className="text-2xl" />
    },
    {
      title: "Hogere Conversies",
      description: "Niet alleen bezoekers, maar ook klanten",
      icon: <FaRocket className="text-2xl" />
    }
  ];

  // Auto-rotate through features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Trigger animations when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Floating elements animation
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-zinc-900 dark:via-blue-950/20 dark:to-zinc-900 pt-20 pb-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl"
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.015] dark:opacity-[0.03]" />
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-10">
          <motion.div
            animate={floatingAnimation}
            className="w-6 h-6 bg-blue-500 rounded-full opacity-20"
          />
        </div>
        <div className="absolute bottom-1/3 right-20">
          <motion.div
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1 }
            }}
            className="w-8 h-8 bg-cyan-500 rounded-full opacity-20"
          />
        </div>
        <div className="absolute top-1/2 left-1/4">
          <motion.div
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 2 }
            }}
            className="w-4 h-4 bg-teal-500 rounded-full opacity-20"
          />
        </div>
        
        {/* Search icon animation */}
        <div className="absolute right-[10%] top-[15%] hidden lg:block">
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.6 }}
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -5, 0, 5, 0] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <FaSearchPlus className="text-white text-2xl" />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.2, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-full bg-blue-400 -z-10 opacity-40 blur-sm"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6 relative">
          {/* Hero content */}
          <div className="lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs uppercase font-bold py-1.5 px-3 rounded-full tracking-wider shadow-md">
                Data-Driven SEO
              </span>
            </motion.div>
            
            {/* Main heading with animated text reveal */}
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1,
                  transition: { 
                    staggerChildren: 0.1,
                    delayChildren: 0.1
                  }
                }
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight"
            >
              <motion.span 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="block text-zinc-800 dark:text-white"
              >
                Boosting Your
              </motion.span>
              
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Search Rankings </span>
                <motion.span
                  animate={{ 
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                  className="inline-block"
                >
                  📈
                </motion.span>
              </motion.span>
            </motion.h1>
            
            {/* Rotating features with fade animation */}
            <div className="h-24 sm:h-20 mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-sm p-4 rounded-xl border border-gray-200 dark:border-zinc-700 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400">
                      {features[currentFeature].icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-zinc-800 dark:text-white">
                        {features[currentFeature].title}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {features[currentFeature].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
              }}
              className="text-lg mb-8 text-zinc-600 dark:text-zinc-300 max-w-lg mx-auto lg:mx-0"
            >
              Vergeet dure advertenties. Onze data-gedreven SEO strategie zorgt voor duurzame top posities in Google en een continue stroom van kwalitatieve leads.
            </motion.p>
            
            {/* CTA buttons with hover effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                <span>Gratis SEO Scan</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl border border-blue-200 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm text-blue-600 dark:text-blue-400 font-medium shadow-md"
              >
                Bekijk SEO Cases
              </motion.button>
            </motion.div>
            
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={controls}
              variants={{
                visible: { opacity: 1, transition: { delay: 0.6, duration: 0.6 } }
              }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <FaCheckCircle className="text-green-500" />
                <span>50+ Websites Geoptimaliseerd</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <FaCheckCircle className="text-green-500" />
                <span>Gemiddeld 65% Meer Verkeer</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <FaCheckCircle className="text-green-500" />
                <span>Resultaten binnen 30-60 dagen</span>
              </div>
            </motion.div>
          </div>
          
          {/* Hero image and animations */}
          <div className="lg:w-1/2 relative">
            {/* SEO analytics mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.3
                  } 
                }
              }}
              className="relative z-10"
            >
              <div className="relative">
                {/* Analytics dashboard mockup */}
                <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-zinc-700">
                  {/* Browser header */}
                  <div className="bg-gray-100 dark:bg-zinc-700 p-3 flex items-center gap-2 border-b border-gray-200 dark:border-zinc-600">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="bg-white dark:bg-zinc-600 rounded-lg px-4 py-1 text-xs text-zinc-500 dark:text-zinc-300 w-72 truncate">
                        https://analytics.google.com/your-seo-performance
                      </div>
                    </div>
                  </div>
                  
                  {/* SEO dashboard with loading effect */}
                  <div className="relative h-[450px] overflow-hidden">
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={controls}
                      variants={{
                        visible: { 
                          y: 0, 
                          opacity: 1,
                          transition: { duration: 1, delay: 0.7 } 
                        }
                      }}
                      className="relative"
                    >
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
                        alt="SEO Analytics Dashboard"
                        width={600}
                        height={450}
                        className="w-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Animated success notification */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={controls}
                      variants={{
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          transition: { 
                            delay: 1.5, 
                            duration: 0.5 
                          } 
                        }
                      }}
                      className="absolute bottom-4 right-4 max-w-[200px]"
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        className="bg-blue-600 text-white p-4 rounded-lg shadow-lg"
                      >
                        <div className="text-sm font-medium mb-1">Top positie bereikt! 🎉</div>
                        <div className="text-xs text-blue-200">Keyword "online zichtbaarheid" op #1</div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Animated cursor */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={controls}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: { delay: 2 }
                        }
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <motion.div
                        animate={{
                          x: [0, 120, -80, 40, 0],
                          y: [0, -50, 70, 30, 0],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="w-6 h-6 pointer-events-none"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 dark:text-blue-400">
                          <path d="M4 4l7.07 17 2.51-7.39L21 11.07z"></path>
                        </svg>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating SERP position card */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      y: 0,
                      transition: { 
                        delay: 1.8, 
                        duration: 0.6,
                        type: "spring" 
                      } 
                    }
                  }}
                  className="absolute -left-10 -bottom-10"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      ease: "easeInOut" 
                    }}
                    className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-zinc-700"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <FaChartLine className="text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-zinc-800 dark:text-white">
                          Organisch Verkeer
                        </div>
                        <div className="text-xl font-bold text-green-600 dark:text-green-400">
                          +213%
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating SERP preview */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: -20 }}
                  animate={controls}
                  variants={{
                    visible: { 
                      opacity: 1, 
                      x: 0, 
                      y: 0,
                      transition: { 
                        delay: 2, 
                        duration: 0.6,
                        type: "spring" 
                      } 
                    }
                  }}
                  className="absolute -right-6 top-20 hidden md:block"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -6, 0],
                      rotate: [0, 1, 0, -1, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 4,
                      ease: "easeInOut" 
                    }}
                    className="bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-700 w-48"
                  >
                    {/* Google SERP mockup */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-600"></div>
                      </div>
                      <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">Google</div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-blue-600 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 dark:bg-zinc-700 rounded w-full"></div>
                      <div className="h-2 bg-gray-200 dark:bg-zinc-700 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-200 dark:bg-zinc-700 rounded w-4/5"></div>
                    </div>
                    <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-zinc-700 pt-2 flex items-center justify-between">
                      <span>#1 Positie</span>
                      <span>⭐⭐⭐⭐⭐</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};