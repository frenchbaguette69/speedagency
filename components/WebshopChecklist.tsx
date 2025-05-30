"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaRocket, FaCreditCard, FaSearch, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";

export const WebshopChecklist = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      title: "Conversiegericht Design",
      description: "Onze webshops zijn specifiek ontworpen om bezoekers om te zetten in klanten, met strategisch geplaatste CTA's en een geoptimaliseerde checkout flow.",
      icon: <FaShoppingCart className="text-xl" />,
      color: "#54eff6"
    },
    {
      title: "Razendsnel Laden",
      description: "Met Next.js technologie laden onze webshops gemiddeld 10x sneller dan WordPress/WooCommerce of Shopify winkels, wat direct leidt tot hogere conversiepercentages.",
      icon: <FaRocket className="text-xl" />,
      color: "#4cfea6"
    },
    {
      title: "Flexibele Betaalopties",
      description: "Integratie van alle populaire betaalmethoden (iDeal, creditcards, Klarna, AfterPay) zodat klanten altijd kunnen afrekenen op hun voorkeursmanier.",
      icon: <FaCreditCard className="text-xl" />,
      color: "#54eff6"
    },
    {
      title: "E-commerce SEO",
      description: "Geavanceerde SEO-optimalisatie specifiek voor webshops, inclusief productschema's, geoptimaliseerde categoriestructuren en automatische sitemaps.",
      icon: <FaSearch className="text-xl" />,
      color: "#f9fa4c"
    },
    {
      title: "Mobiele Optimalisatie",
      description: "Perfect responsive ontwerp voor alle apparaten, met speciale aandacht voor de mobiele checkout ervaring waar het meeste omzetverlies plaatsvindt.",
      icon: <FaMobileAlt className="text-xl" />,
      color: "#4cfea6"
    },
    {
      title: "Veilige Transacties",
      description: "Geavanceerde beveiligingsmaatregelen zoals SSL-certificaten, PCI-compliance en bescherming tegen fraude om het vertrouwen van klanten te waarborgen.",
      icon: <FaShieldAlt className="text-xl" />,
      color: "#54eff6"
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
                  <path d="M20 80C24.4183 80 28 76.4183 28 72C28 67.5817 24.4183 64 20 64C15.5817 64 12 67.5817 12 72C12 76.4183 15.5817 80 20 80Z" fill="currentColor"/>
                  <path d="M66 80C70.4183 80 74 76.4183 74 72C74 67.5817 70.4183 64 66 64C61.5817 64 58 67.5817 58 72C58 76.4183 61.5817 80 66 80Z" fill="currentColor"/>
                  <path d="M88.9999 20H15.8399L14.0399 13.38C13.5332 10.9871 12.188 8.85767 10.258 7.35559C8.32797 5.85351 5.92474 5.07494 3.49995 5.12H1.99995" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M29 95H78.76C80.8593 95.0097 82.8909 94.2894 84.4866 92.9739C86.0824 91.6584 87.1396 89.836 87.46 87.76L94 42H12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
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
                className="inline-flex items-center px-4 py-2 bg-[#54eff6]/20 dark:bg-[#54eff6]/20 text-[#54eff6] dark:text-[#54eff6] rounded-full text-sm font-medium mb-4"
              >
                <motion.span
                  animate={{ rotate: [0, -10, 0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  <FaShoppingCart />
                </motion.span> 
                E-commerce Excellentie
              </motion.div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-6 text-zinc-800 dark:text-white"
            >
              Waarom onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54eff6] to-[#4cfea6] relative">
                webshops
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#54eff6] to-[#4cfea6] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span> écht conversies genereren
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-zinc-600 dark:text-zinc-300 mb-10"
            >
              Terwijl anderen beloftes doen, boeken wij resultaten. Onze webshops worden gebouwd met één doel: meer verkopen met minder gedoe. Aangedreven door Next.js voor ongeëvenaarde snelheid en conversieoptimalisatie.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-[#54eff6] to-[#4cfea6] rounded-xl flex items-center justify-center flex-shrink-0">
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
                      Getest & Bewezen
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Onze webshops genereren gemiddeld <span className="font-semibold text-[#4cfea6] dark:text-[#4cfea6]">45% meer verkopen</span> en <span className="font-semibold text-[#4cfea6] dark:text-[#4cfea6]">3x hogere ROI</span> dan conventionele e-commerce oplossingen.
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
                <div className="w-12 h-12 bg-gradient-to-br from-[#54eff6] to-[#4cfea6] rounded-full opacity-70"></div>
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
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#54eff6] to-[#4cfea6] text-zinc-800 font-medium rounded-xl shadow-md hover:shadow-xl overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-white dark:bg-zinc-900 opacity-0 group-hover:opacity-10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span>Vrijblijvend gesprek inplannen</span>
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
                      ? `shadow-lg bg-[${benefit.color}]/10 dark:bg-zinc-800` 
                      : 'bg-white dark:bg-zinc-800'}`}
                  >
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex mb-4 relative">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-[${benefit.color}]`}>
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
                          <span className="text-zinc-800">{benefit.icon}</span>
                        </div>
                        
                        {/* Numbered badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-white dark:bg-zinc-700 rounded-full border border-gray-200 dark:border-zinc-600 text-xs font-bold text-zinc-700 dark:text-zinc-200">
                          {index + 1}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 text-zinc-800 dark:text-white">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-zinc-600 dark:text-zinc-300">
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Hover background effect */}
                    {hoveredIndex === index && (
                      <>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 -z-10"
                        >
                          <div className={`absolute inset-0 bg-[${benefit.color}]/10 opacity-90 dark:opacity-30`}></div>
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
                          style={{ backgroundColor: benefit.color }}
                          className={`absolute -bottom-2 -right-2 w-24 h-24 rounded-full blur-xl opacity-20 dark:opacity-15 -z-10`}
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
                      className="absolute top-4 right-4 w-5 h-5 text-[#4cfea6] dark:text-[#4cfea6]"
                    >
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Most popular tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex justify-center sm:justify-end"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-4 py-3 bg-[#f9fa4c] rounded-xl text-zinc-800 flex items-center gap-2 shadow-lg"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-medium">De meest conversie-gerichte webshops van Nederland</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};