"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserFriends, FaAd, FaChartLine, FaCogs, FaBullseye, FaUsers, FaSearchDollar, FaRobot, FaStar, FaStore } from "react-icons/fa";

export const GoogleAdsCustomerExperience = () => {
  const journeySteps = [
    {
      title: "Audit & Research",
      description: "Complete analyse van uw markt, concurrentie en zoekwoordpotentieel",
      icon: <FaSearchDollar className="h-6 w-6" />,
      color: "bg-purple-500",
      metrics: "35+ metrics geanalyseerd",
    },
    {
      title: "Strategie",
      description: "Data-gedreven campagnestrategie op basis van uw doelen",
      icon: <FaChartLine className="h-6 w-6" />,
      color: "bg-pink-500",
      metrics: "95% hogere ROAS",
    },
    {
      title: "Campagne Setup",
      description: "Optimale campagne-instellingen en targeting",
      icon: <FaAd className="h-6 w-6" />,
      color: "bg-fuchsia-500", 
      metrics: "42% lagere CPC",
    },
    {
      title: "Optimalisatie",
      description: "Continue verbetering van biedingen en targeting",
      icon: <FaCogs className="h-6 w-6" />,
      color: "bg-rose-500",
      metrics: "68% hogere CTR",
    },
    {
      title: "Groei & Rapportage",
      description: "Schaalbare groei met transparante ROI-rapportages",
      icon: <FaChartLine className="h-6 w-6" />,
      color: "bg-violet-500",
      metrics: "312% meer conversies",
    },
  ];
  
  const userFeedbacks = [
    {
      text: "De ROAS die SpeedAgency voor onze Google Ads campagnes behaalt is indrukwekkend. Hun data-gedreven aanpak maakt echt het verschil.",
      name: "Erik P.",
      role: "E-commerce Manager",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "Eindelijk een bureau dat snapt hoe je Google Ads campagnes moet optimaliseren voor B2B lead generatie. Onze cost-per-lead is met 45% gedaald.",
      name: "Sophie R.",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "De transparante rapportages en proactieve optimalisaties zorgen ervoor dat we altijd weten waar we staan en continu verbeteren.",
      name: "Michael B.",
      role: "CEO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-zinc-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-200/20 dark:bg-pink-800/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
              <FaUserFriends className="mr-2" /> Google Ads Ervaring
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Maximale <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">ROAS</span> Gegarandeerd
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mt-4">
              Ontdek hoe onze data-gedreven Google Ads aanpak meetbare resultaten levert met focus op
              ROAS, conversies en kostefficiënte schaalbaarheid.
            </p>
          </motion.div>
        </div>

        {/* Google Ads Journey Visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">Ons Google Ads Proces voor Maximale Impact</h3>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white shadow-lg relative z-10`}>
                    {step.icon}
                  </div>
                  <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md mt-6 text-center w-full">
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-4 text-sm">
                      {step.description}
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full inline-block text-sm font-medium">
                      {step.metrics}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Data-Driven Google Ads Experience */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Google Ads die Écht Converteren</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              Wij geloven niet in standaard campagnes of geheime trucs. Onze aanpak is volledig transparant en
              gebaseerd op data, analyses en bewezen methodieken die specifiek zijn afgestemd op uw doelstellingen.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-4 text-purple-600 dark:text-purple-400">
                  <FaRobot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Smart Bidding Strategieën</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Machine learning gestuurde biedstrategieën voor optimale ROAS</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-4 text-purple-600 dark:text-purple-400">
                  <FaUsers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Precisie Targeting</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Geavanceerde doelgroepsegmentatie en remarketing strategieën</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-4 text-purple-600 dark:text-purple-400">
                  <FaBullseye className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Conversie Optimalisatie</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Continue A/B testing en optimalisatie voor maximale conversies</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Device frame mockup */}
            <div className="absolute inset-0 border-[12px] border-white dark:border-zinc-800 rounded-2xl shadow-inner z-10" />
            
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
              alt="Google Ads Dashboard"
              fill
              className="object-cover"
            />
            
            {/* Interactive elements */}
            <div className="absolute top-1/4 left-1/4 bg-white dark:bg-purple-500 p-3 rounded-full shadow-lg z-20 animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 bg-white dark:bg-pink-500 p-2 rounded-full shadow-lg z-20 animate-pulse delay-300" />
            <div className="absolute top-1/2 right-1/3 bg-white dark:bg-fuchsia-500 p-4 rounded-full shadow-lg z-20 animate-pulse delay-700" />
          </motion.div>
        </div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">Wat Klanten Zeggen</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {userFeedbacks.map((feedback, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Image 
                    src={feedback.avatar}
                    alt={feedback.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{feedback.name}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{feedback.role}</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 italic">"{feedback.text}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 mr-1 h-4 w-4" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Google Ads Impact Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">De impact van professionele Google Ads op uw resultaten</h3>
          
          <div className="prose prose-purple dark:prose-invert max-w-none">
            <p>
              Google Ads is een krachtig platform voor directe resultaten, maar vereist expertise voor optimale prestaties.
              Onderzoek toont aan dat 65% van alle clicks naar gesponsorde zoekresultaten gaat, en Google Ads gemiddeld een
              ROI van 200% oplevert bij professioneel beheer.
            </p>
            
            <p>
              Bij elke Google Ads campagne die we ontwikkelen, staat ROI centraal. Dit begint met een grondige analyse
              van uw doelgroep, zoekwoordintentie en concurrentie. We identificeren kansen voor optimalisatie en ontwikkelen
              een data-gedreven strategie die zich richt op maximale conversies tegen minimale kosten.
            </p>
            
            <p>
              De resultaten die onze klanten ervaren zijn consistent: gemiddeld 312% ROAS binnen 3 maanden, een daling
              van 45% in cost-per-acquisition, een stijging van 85% in click-through-rate, en een significante verbetering
              in lead kwaliteit. Dit is het resultaat van onze geïntegreerde aanpak die Smart Bidding, präcise targeting
              en continue optimalisatie combineert.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">312%</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Gemiddelde ROAS</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-pink-600 dark:text-pink-400">-45%</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Lagere CPA</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-fuchsia-600 dark:text-fuchsia-400">+85%</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Hogere CTR</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">4.2x</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Meer conversies</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Klaar voor betere advertentieresultaten?</h3>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-8">
            Laat ons uw huidige Google Ads campagnes analyseren en ontdek hoe onze data-gedreven aanpak uw ROAS kan maximaliseren.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Gratis Google Ads Analyse
          </a>
        </motion.div>
      </div>
    </section>
  );
};