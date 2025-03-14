"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaAward, FaRocket, FaClock, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export const BestChoiceSection = () => {
  const reasons = [
    {
      title: "Technische Superioriteit",
      description: "Wij bouwen uitsluitend met Next.js, React en TailwindCSS - de snelste en meest flexibele technologieën voor moderne websites.",
      icon: <FaRocket className="text-4xl text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Ongeëvenaarde Snelheid",
      description: "Terwijl andere bureaus weken of maanden nodig hebben, leveren wij uw website binnen 1-2 weken op zonder concessies aan kwaliteit.",
      icon: <FaClock className="text-4xl text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Bewezen Resultaten",
      description: "Onze websites hebben aantoonbaar hogere conversiepercentages, betere SEO-scores en hogere klanttevredenheid dan WordPress alternatieven.",
      icon: <FaAward className="text-4xl text-indigo-600 dark:text-indigo-400" />,
    }
  ];

  const comparisons = [
    {
      title: "Websites Laden in Milliseconden",
      us: "Onze Next.js websites laden in 0.4s",
      others: "WordPress sites laden in 2.5-4s",
      benefit: "Hogere conversie, lagere bounce rate, betere SEO-scores"
    },
    {
      title: "Moderne Architectuur",
      us: "Headless CMS met Next.js frontend",
      others: "Monolithisch systeem met plugins",
      benefit: "Flexibeler, veiliger en beter aan te passen aan uw wensen"
    },
    {
      title: "Hosting & Prestaties",
      us: "Wereldwijd CDN met 99.99% uptime",
      others: "Gedeelde hosting met prestatieproblemen",
      benefit: "Consistent snelle laadtijden, zelfs tijdens verkeerspieken"
    },
    {
      title: "Support & Updates",
      us: "Direct contact met developers",
      others: "Generieke helpdesk of ticketsysteem",
      benefit: "Snellere oplossingen en persoonlijke aandacht"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-800">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Main header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-800 dark:text-white">
            Waarom Wij De <span className="text-indigo-600 dark:text-indigo-400">Beste Keuze</span> Zijn
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            Met onze focus op Next.js ontwikkeling bieden we oplossingen die de standaard WordPress-aanpak 
            ver overtreffen in snelheid, veiligheid en prestaties.
          </p>
        </motion.div>

        {/* Three main reasons section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-zinc-700 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100 dark:border-zinc-600"
            >
              <div className="mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">{reason.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-zinc-900 dark:to-indigo-900/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-zinc-800 dark:text-white">
              SpeedAgency vs. Traditionele Bureaus
            </h3>
            
            <div className="overflow-hidden">
              {/* Table header */}
              <div className="hidden md:grid grid-cols-4 gap-4 mb-6 px-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                <div>Vergelijking</div>
                <div>SpeedAgency</div>
                <div>Andere Bureaus</div>
                <div>Uw Voordeel</div>
              </div>
              
              {/* Table rows */}
              <div className="space-y-6">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="grid md:grid-cols-4 gap-4 p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-sm"
                  >
                    <div>
                      <h4 className="font-bold text-zinc-800 dark:text-white mb-1 md:mb-0">{item.title}</h4>
                      <div className="block md:hidden text-sm text-zinc-500 dark:text-zinc-400 mt-2">Vergelijking</div>
                    </div>
                    
                    <div className="mt-2 md:mt-0">
                      <div className="block md:hidden text-xs text-zinc-500 dark:text-zinc-400 mb-1">SpeedAgency</div>
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        <span className="text-zinc-800 dark:text-white">{item.us}</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 md:mt-0">
                      <div className="block md:hidden text-xs text-zinc-500 dark:text-zinc-400 mb-1">Andere Bureaus</div>
                      <div className="text-zinc-500 dark:text-zinc-400">{item.others}</div>
                    </div>
                    
                    <div className="mt-2 md:mt-0">
                      <div className="block md:hidden text-xs text-zinc-500 dark:text-zinc-400 mb-1">Uw Voordeel</div>
                      <div className="text-indigo-600 dark:text-indigo-400 font-medium">{item.benefit}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Client testimonial section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-20 overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-70 z-0"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 z-0"></div>
          
          <div className="relative z-10 bg-white dark:bg-zinc-700 rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-zinc-600">
            <div className="md:flex items-center gap-8">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                    alt="Tevreden klant"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.4 28H10.4L15.2 18.4H10.4V12H20V21.6L18.4 28ZM32.8 28H24.8L29.6 18.4H24.8V12H34.4V21.6L32.8 28Z" fill="#4F46E5" />
                  </svg>
                </div>
                
                <p className="text-xl md:text-2xl italic text-zinc-700 dark:text-zinc-200 mb-8">
                  "Na meerdere frustrerende ervaringen met traditionele webbureaus was SpeedAgency een verademing. 
                  In slechts 9 dagen hadden we een prachtige website die razendsnel laadt en direct resultaat opleverde. 
                  Conversies zijn met 47% gestegen!"
                </p>
                
                <div>
                  <h4 className="font-bold text-zinc-800 dark:text-white text-lg">Mark Janssen</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">CEO bij TechVenture Group</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
            Klaar om de superieure aanpak te ervaren?
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
            Laat ons u laten zien hoe onze Next.js websites uw huidige online aanwezigheid kunnen transformeren.
          </p>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-xl mx-auto"
            >
              <span>Plan een vrijblijvend gesprek</span>
              <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};