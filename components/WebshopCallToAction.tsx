"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCheck, FaMobile, FaHeadset, FaServer, FaCode, FaSearch, FaStore, FaGlobe, FaQuestion, FaShoppingCart } from "react-icons/fa";

export const WebshopCallToAction = () => {
  // State for the animated text display
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const controls = useAnimation();
  
  // Array of compelling reasons/benefits
  const benefits = [
    {
      title: "Hebben een Webshop op maat laten maken",
      icon: <FaShoppingCart />,
      description: "Volledig aangepast aan uw merk, doelgroep en productaanbod",
      color: "#54eff6"
    },
    {
      title: "Professionele Website op maat laten maken",
      icon: <FaGlobe />,
      description: "Moderne design gecombineerd met krachtige functionaliteit",
      color: "#4cfea6"
    },
    {
      title: "Webshop gebouwd door ervaren designers",
      icon: <FaCode />,
      description: "Jarenlange expertise in effectieve e-commerce oplossingen",
      color: "#f9fa4c"
    },
    {
      title: "Gebruiksvriendelijke Mobile Webshops",
      icon: <FaMobile />,
      description: "Perfect geoptimaliseerd voor alle schermformaten",
      color: "#54eff6"
    },
    {
      title: "Support afdeling die u snel helpt",
      icon: <FaHeadset />,
      description: "Persoonlijke ondersteuning wanneer u die nodig heeft",
      color: "#4cfea6"
    },
    {
      title: "Een gehoste webshop voor u",
      icon: <FaServer />,
      description: "Betrouwbare, snelle en veilige hosting inbegrepen",
      color: "#f9fa4c"
    },
    {
      title: "Technisch sterke online webshop",
      icon: <FaCode />,
      description: "Gebouwd volgens de nieuwste technische standaarden",
      color: "#54eff6"
    },
    {
      title: "Online winkel die goed vindbaar is",
      icon: <FaSearch />,
      description: "SEO-geoptimaliseerd voor maximale online zichtbaarheid",
      color: "#4cfea6"
    },
    {
      title: "Website met webshop: de gouden combinatie",
      icon: <FaStore />,
      description: "Content en commerce perfect geïntegreerd voor optimale resultaten",
      color: "#f9fa4c"
    },
    {
      title: "Waarom een webshop opzetten?",
      icon: <FaQuestion />,
      description: "Bereik een groter publiek en verkoop 24/7 zonder beperkingen",
      color: "#54eff6"
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
    <section className="py-32 bg-gradient-to-b from-white to-[#54eff6]/5 dark:from-zinc-900 dark:to-[#54eff6]/10 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#54eff6]/10 dark:bg-[#54eff6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4cfea6]/10 dark:bg-[#4cfea6]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main CTA Section */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block text-zinc-800 dark:text-white">
              Tijd Voor Een <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54eff6] to-[#4cfea6]">Webshop</span> Die Écht Verkoopt
            </h2>
            
            <div className="h-24 flex items-center justify-center mb-8">
              <motion.div
                animate={controls}
                initial={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center"
              >
                <div className="text-5xl mb-2" style={{ color: benefits[currentTextIndex].color }}>
                  {benefits[currentTextIndex].icon}
                </div>
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#54eff6] to-[#4cfea6]">
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
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#54eff6] to-[#4cfea6] text-zinc-800 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <span>Gratis Webshop Adviesgesprek</span>
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link href="/portfolio" className="inline-flex items-center px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-[#54eff6] font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#54eff6]/20 dark:border-[#54eff6]/30">
                  <span>Bekijk Onze Webshop Projecten</span>
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
          <h3 className="text-3xl font-bold text-center mb-12 text-zinc-800 dark:text-white">
            Waarom Klanten Voor Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54eff6] to-[#4cfea6]">Webshop Oplossingen</span> Kiezen
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start border border-gray-100 dark:border-zinc-700"
              >
                <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: `${benefit.color}20` }}>
                  <div className="text-xl" style={{ color: benefit.color }}>
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-zinc-800 dark:text-white">{benefit.title}</h4>
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
          <h3 className="text-3xl font-bold text-center mb-12 text-zinc-800 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54eff6] to-[#4cfea6]">Wij maken uw webshop dromen werkelijkheid</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-[#54eff6] to-[#4cfea6] text-zinc-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <FaStore className="text-4xl mb-4 text-zinc-800/90" />
                <h4 className="text-2xl font-bold mb-4">Start uw eigen webshop</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Volledig op maat gemaakt
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Gebruiksvriendelijk CMS
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Geoptimaliseerd voor conversie
                  </li>
                </ul>
                <Link href="/webshop-diensten" className="inline-block px-6 py-3 bg-white text-zinc-800 font-medium rounded-lg hover:bg-zinc-50 transition-colors duration-200">
                  Meer informatie
                </Link>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-[#4cfea6] to-[#f9fa4c] text-zinc-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <FaMobile className="text-4xl mb-4 text-zinc-800/90" />
                <h4 className="text-2xl font-bold mb-4">Mobile-first webshop</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Perfect op elk apparaat
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Snelle laadtijden
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Hogere mobiele conversie
                  </li>
                </ul>
                <Link href="/mobile-webshops" className="inline-block px-6 py-3 bg-white text-zinc-800 font-medium rounded-lg hover:bg-zinc-50 transition-colors duration-200">
                  Ontdek meer
                </Link>
              </div>
            </motion.div>
            
            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-[#f9fa4c] to-[#54eff6] text-zinc-800 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <FaHeadset className="text-4xl mb-4 text-zinc-800/90" />
                <h4 className="text-2xl font-bold mb-4">Webshop met support</h4>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Persoonlijke begeleiding
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Technische ondersteuning
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="mt-1 mr-2" /> Marketingadvies
                  </li>
                </ul>
                <Link href="/webshop-support" className="inline-block px-6 py-3 bg-white text-zinc-800 font-medium rounded-lg hover:bg-zinc-50 transition-colors duration-200">
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
          <h3 className="text-3xl font-bold text-center mb-12 text-zinc-800 dark:text-white">
            Van <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54eff6] to-[#4cfea6]">Idee naar Succes</span> in 4 Stappen
          </h3>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-[#54eff6] via-[#4cfea6] to-[#f9fa4c] hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#54eff6] text-zinc-800 flex items-center justify-center text-2xl font-bold mb-6 z-10">
                  1
                </div>
                <h4 className="text-xl font-bold mb-2 text-zinc-800 dark:text-white">Strategiegesprek</h4>
                <p className="text-zinc-600 dark:text-zinc-300">
                  We bespreken uw doelen, doelgroep en unieke wensen voor uw webshop
                </p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#4cfea6] text-zinc-800 flex items-center justify-center text-2xl font-bold mb-6 z-10">
                  2
                </div>
                <h4 className="text-xl font-bold mb-2 text-zinc-800 dark:text-white">Design & Ontwikkeling</h4>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Ontwerp en ontwikkeling van een unieke, conversion-gedreven webshop
                </p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#f9fa4c] text-zinc-800 flex items-center justify-center text-2xl font-bold mb-6 z-10">
                  3
                </div>
                <h4 className="text-xl font-bold mb-2 text-zinc-800 dark:text-white">Launch & Optimalisatie</h4>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Zorgvuldige lancering met nauwkeurige testing en optimalisatie
                </p>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#54eff6] text-zinc-800 flex items-center justify-center text-2xl font-bold mb-6 z-10">
                  4
                </div>
                <h4 className="text-xl font-bold mb-2 text-zinc-800 dark:text-white">Groei & Support</h4>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Doorlopende ondersteuning, analyses en strategieën voor verdere groei
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
          className="bg-gradient-to-r from-[#54eff6] to-[#4cfea6] rounded-3xl p-8 md:p-12 text-zinc-800 text-center shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om uw online verkoop naar het volgende niveau te tillen?
          </h3>
          <p className="text-lg text-zinc-800/80 max-w-3xl mx-auto mb-8">
            Onze webshops zijn niet alleen mooi, maar ook krachtige verkoopinstrumenten die uw business laten groeien.
            Neem vandaag nog contact op voor een vrijblijvend gesprek.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-zinc-800 font-medium rounded-full shadow-lg hover:bg-zinc-50 transition-all duration-300">
                <span>Gratis Adviesgesprek Aanvragen</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/tel:+31612345678" className="inline-flex items-center px-8 py-4 bg-transparent text-zinc-800 font-medium rounded-full border-2 border-zinc-800 hover:bg-white/20 transition-all duration-300">
                <span>Bel Direct: 06-12345678</span>
              </Link>
            </motion.div>
          </div>
          
          <p className="text-zinc-800/70 mt-6">
            Geen verplichtingen - 100% vrijblijvend advies voor uw project
          </p>
        </motion.div>
      </div>
    </section>
  );
};