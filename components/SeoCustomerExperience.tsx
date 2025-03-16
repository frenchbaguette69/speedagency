"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserFriends, FaSearch, FaChartLine, FaCode, FaServer, FaGlobe, FaMobileAlt, FaLink, FaStar } from "react-icons/fa";

export const SeoCustomerExperience = () => {
  const journeySteps = [
    {
      title: "Audit & Analyse",
      description: "Grondige analyse van je huidige zichtbaarheid, concurrenten en zoekwoorden",
      icon: <FaSearch className="h-6 w-6" />,
      color: "bg-blue-500",
      metrics: "42+ datapunten geanalyseerd",
    },
    {
      title: "Strategie",
      description: "Data-gedreven SEO-strategie op maat van jouw doelstellingen",
      icon: <FaChartLine className="h-6 w-6" />,
      color: "bg-cyan-500",
      metrics: "85% hogere ROI dan traditionele SEO",
    },
    {
      title: "Optimalisatie",
      description: "Technische implementatie en content optimalisatie",
      icon: <FaCode className="h-6 w-6" />,
      color: "bg-teal-500", 
      metrics: "3.2× snellere ranking verbeteringen",
    },
    {
      title: "Autoriteit",
      description: "Link building en autoriteitsopbouw voor je domein",
      icon: <FaLink className="h-6 w-6" />,
      color: "bg-green-500",
      metrics: "56% hogere domeinautoriteit",
    },
    {
      title: "Groei & Rapportage",
      description: "Doorlopende optimalisatie en transparante resultaatrapportages",
      icon: <FaChartLine className="h-6 w-6" />,
      color: "bg-emerald-500",
      metrics: "78% meer organisch verkeer",
    },
  ];
  
  const userFeedbacks = [
    {
      text: "De rapportages van SpeedAgency tonen niet alleen rankings maar ook de directe business impact van onze SEO-campagne. Eindelijk zien we échte ROI.",
      name: "Frank B.",
      role: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "Hun team heeft onze core web vitals en technische SEO perfect geoptimaliseerd. We zien nu tientallen nieuwe zoekwoorden in de top 3 van Google.",
      name: "Marieke V.",
      role: "E-commerce Director",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "Na eerdere tegenvallende ervaringen met SEO-bureaus is SpeedAgency een verademing. De data-gedreven aanpak en transparantie maken het verschil.",
      name: "Thomas K.",
      role: "CEO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
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
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-200/20 dark:bg-cyan-800/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              <FaUserFriends className="mr-2" /> SEO Ervaring
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Meetbare <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">SEO Resultaten</span> Gegarandeerd
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mt-4">
              Ontdek hoe onze data-gedreven SEO-aanpak tastbare resultaten levert die verder gaan dan alleen
              rankings - met focus op meer organisch verkeer, hogere conversies en échte ROI.
            </p>
          </motion.div>
        </div>

        {/* SEO Journey Visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-10 text-center">Ons SEO Proces voor Maximale Impact</h3>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 hidden md:block"></div>
            
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
                    <div className="bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full inline-block text-sm font-medium">
                      {step.metrics}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Data-Driven SEO Experience */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Data-Gedreven SEO die Écht Werkt</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              Wij geloven niet in standaard SEO-pakketten of geheime trucs. Onze aanpak is volledig transparant en
              gebaseerd op data, analyses en bewezen methodieken die specifiek zijn afgestemd op jouw doelstellingen en branche.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4 text-blue-600 dark:text-blue-400">
                  <FaServer className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Technische SEO-Perfectie</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Core Web Vitals en technische optimalisatie voor sterke rankingfundamenten</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4 text-blue-600 dark:text-blue-400">
                  <FaGlobe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Lokale & Internationale SEO</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Gespecialiseerde strategieën voor zowel lokale dominantie als internationale groei</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4 text-blue-600 dark:text-blue-400">
                  <FaMobileAlt className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Mobile-First Optimalisatie</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Perfecte afstemming op Google's mobile-first indexeringsstrategie</p>
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
              alt="SEO Data Analysis Dashboard"
              fill
              className="object-cover"
            />
            
            {/* Interactive elements */}
            <div className="absolute top-1/4 left-1/4 bg-white dark:bg-blue-500 p-3 rounded-full shadow-lg z-20 animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 bg-white dark:bg-cyan-500 p-2 rounded-full shadow-lg z-20 animate-pulse delay-300" />
            <div className="absolute top-1/2 right-1/3 bg-white dark:bg-teal-500 p-4 rounded-full shadow-lg z-20 animate-pulse delay-700" />
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

        {/* SEO-optimized content block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold mb-6">De impact van professionele SEO op uw bedrijfsresultaten</h3>
          
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p>
              SEO is niet langer een optionele marketingstrategie maar een essentiële pijler voor online succes. 
              Onderzoek toont aan dat 68% van alle online ervaringen begint met een zoekmachine, en 75% van gebruikers 
              nooit voorbij de eerste pagina van zoekresultaten kijkt. Een sterke SEO-strategie bepaalt dus letterlijk 
              of potentiële klanten u überhaupt kunnen vinden.
            </p>
            
            <p>
              Bij elke SEO-campagne die we ontwikkelen, staat meetbare impact centraal. Dit begint met een 
              grondige analyse van uw huidige online aanwezigheid, uw concurrenten, en het zoekgedrag van uw doelgroep. 
              We identificeren kansen en ontwikkelen een op maat gemaakte strategie die verder gaat dan rankings - 
              we focussen op het genereren van kwalitatief verkeer dat daadwerkelijk converteert.
            </p>
            
            <p>
              De resultaten die onze klanten ervaren zijn consistent: gemiddeld 187% meer organisch verkeer binnen 6 maanden, 
              een stijging van 43% in conversies uit organisch zoekverkeer, een daling van 58% in acquisitiekosten per klant,
              en een significante verbetering in de kwaliteit van leads. Dit is het resultaat van onze holistische benadering 
              die technische optimalisatie, content strategie en autoriteitsopbouw combineert.
            </p>
            
            <p>
              In een steeds competitiever digitaal landschap is het niet langer voldoende om "iets" aan SEO te doen. 
              De toenemende complexiteit van zoekalgoritmes vereist een data-gedreven, technisch onderlegde aanpak 
              die continu evolueert met de veranderende SEO-landschap. Dat is precies wat wij bieden.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">187%</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Meer organisch verkeer</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">43%</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Hogere organische conversie</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">58%</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Lagere acquisitiekosten</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">6x</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Hogere ROI dan SEA</p>
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
          <h3 className="text-2xl font-bold mb-6">Klaar voor meetbare SEO-resultaten?</h3>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-8">
            Laat ons uw huidige online zichtbaarheid analyseren en ontdek hoe onze data-gedreven SEO-aanpak uw organische verkeer kan verveelvoudigen.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Gratis SEO-scan aanvragen
          </a>
        </motion.div>
      </div>
    </section>
  );
};