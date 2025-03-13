"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBolt, FaShieldAlt, FaSearch, FaMobile, FaTools, FaChartLine } from "react-icons/fa";

export const NextJsOverWordPress = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "speed",
      icon: <FaBolt className="text-2xl" />,
      title: "Superieure Snelheid",
      description: "Next.js-sites laden tot 10x sneller dan WordPress, wat leidt tot lagere bouncerates en hogere conversiepercentages.",
      color: "from-blue-400 to-indigo-600",
      stats: ["53% hogere retentie", "23% meer conversies", "250ms gemiddelde laadtijd"],
      image: "/images/speed-chart.jpg"
    },
    {
      id: "seo",
      icon: <FaSearch className="text-2xl" />,
      title: "Betere SEO-scores",
      description: "Bereik hogere Google-rankings door server-side rendering en geoptimaliseerde core web vitals.",
      color: "from-emerald-400 to-teal-600",
      stats: ["32% meer organisch verkeer", "45% hogere SERP-posities", "98% Core Web Vitals score"],
      image: "/images/seo-chart.jpg"
    },
    {
      id: "security",
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Verbeterde Veiligheid",
      description: "WordPress is verantwoordelijk voor 90% van alle gehackte websites. Next.js biedt een veel veiliger alternatief.",
      color: "from-red-400 to-rose-600",
      stats: ["98% minder veiligheidsrisico's", "Geen plugin-kwetsbaarheden", "Moderne beveiligingsstandaarden"],
      image: "/images/security-chart.jpg"
    },
    {
      id: "mobile",
      icon: <FaMobile className="text-2xl" />,
      title: "Mobile-First Performance",
      description: "Optimale gebruikerservaring op alle apparaten met snelle, responsieve interfaces.",
      color: "from-amber-400 to-orange-600",
      stats: ["92% mobiele gebruikerstevredenheid", "3x sneller op 3G netwerken", "Naadloze mobiele ervaring"],
      image: "/images/mobile-chart.jpg"
    },
    {
      id: "flexibility",
      icon: <FaTools className="text-2xl" />,
      title: "Modernere Technologie",
      description: "Flexibele architectuur die eenvoudig kan worden gekoppeld aan alle moderne tools en API's.",
      color: "from-purple-400 to-fuchsia-600",
      stats: ["Integratie met alle moderne API's", "Headless CMS ondersteuning", "Toekomstbestendige codebase"],
      image: "/images/tech-chart.jpg"
    },
    {
      id: "scalability",
      icon: <FaChartLine className="text-2xl" />,
      title: "Onbeperkte Schaalbaarheid",
      description: "Moeiteloos miljoenen gebruikers bedienen zonder vertragingen of prestatieproblemen.",
      color: "from-lime-400 to-green-600",
      stats: ["99.9% uptime", "Automatisch schaalt bij verkeerspieken", "Consistente prestaties"],
      image: "/images/scale-chart.jpg"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-indigo-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Header with animated gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="relative text-4xl md:text-5xl font-bold mb-6 inline-block">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Next.js vs WordPress
            </span>
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            In 2025 is er een duidelijke winnaar als het gaat om snelheid, veiligheid en SEO-prestaties.
            Ontdek waarom moderne bedrijven overstappen van WordPress naar Next.js.
          </p>
        </motion.div>

        {/* Main comparison section with 3D card effect */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Left side - Features selection */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-6 h-full"
            >
              <h3 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-white">
                Voordelen van <span className="text-indigo-600 dark:text-indigo-400">Next.js</span>
              </h3>
              
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setActiveFeature(index)}
                    className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                      activeFeature === index 
                        ? `bg-gradient-to-r ${feature.color} text-white shadow-md` 
                        : "bg-gray-50 dark:bg-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-600"
                    }`}
                  >
                    <div className={`p-3 rounded-full ${activeFeature === index ? 'bg-white/20' : 'bg-indigo-100 dark:bg-indigo-900/30'}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className={`font-medium ${activeFeature === index ? 'text-white' : 'text-zinc-800 dark:text-white'}`}>
                        {feature.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - Active feature details */}
          <motion.div 
            key={activeFeature}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl overflow-hidden h-full">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${features[activeFeature].color}`}>
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-800 dark:text-white">
                    {features[activeFeature].title}
                  </h3>
                </div>
                
                <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
                  {features[activeFeature].description}
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {features[activeFeature].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 dark:bg-zinc-700 p-4 rounded-xl text-center"
                    >
                      <p className={`font-bold bg-gradient-to-r ${features[activeFeature].color} bg-clip-text text-transparent`}>
                        {stat}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Comparison visualization */}
                <div className="bg-gray-50 dark:bg-zinc-700 p-6 rounded-xl">
                  <h4 className="text-xl font-bold mb-4 text-zinc-700 dark:text-white">WordPress vs Next.js</h4>
                  
                  {/* Performance bars */}
                  <div className="space-y-4">
                    {[
                      {label: "Laadtijd", wp: "30%", next: "85%"},
                      {label: "SEO Score", wp: "45%", next: "95%"},
                      {label: "Veiligheid", wp: "35%", next: "90%"}
                    ].map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">{metric.label}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {/* WordPress bar */}
                          <div className="space-y-1">
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">WordPress</div>
                            <div className="h-2 w-full bg-gray-200 dark:bg-zinc-600 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: metric.wp }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-orange-500 rounded-full"
                              />
                            </div>
                          </div>
                          {/* Next.js bar */}
                          <div className="space-y-1">
                            <div className="text-xs text-indigo-600 dark:text-indigo-400">Next.js</div>
                            <div className="h-2 w-full bg-gray-200 dark:bg-zinc-600 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: metric.next }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full bg-gradient-to-r ${features[activeFeature].color} rounded-full`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom cards section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Google Beloont Snelheid",
              description: "Google's algoritme geeft voorrang aan snelle websites. Next.js zorgt voor betere ranking en meer organisch verkeer.",
              icon: <FaSearch className="text-white text-2xl" />,
              color: "from-blue-500 to-indigo-600"
            },
            {
              title: "Betere Gebruikerservaring",
              description: "Bezoekers blijven langer op snelle websites. Next.js zorgt voor een soepele en responsieve gebruikerservaring.",
              icon: <FaUsers className="text-white text-2xl" />,
              color: "from-indigo-500 to-violet-600"
            },
            {
              title: "Lagere Hostingkosten",
              description: "Next.js verbruikt minder serverbronnen dan WordPress, wat resulteert in lagere hostingkosten.",
              icon: <FaCreditCard className="text-white text-2xl" />,
              color: "from-violet-500 to-purple-600"
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${card.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${card.color}`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-white">{card.title}</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
            Klaar om uw website te upgraden van <span className="line-through text-red-500">WordPress</span> naar <span className="text-indigo-600 dark:text-indigo-400">Next.js</span>?
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
            Verhoog uw conversies, verbeter uw SEO en bied uw bezoekers een betere ervaring met een moderne Next.js website.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium shadow-lg transition-all"
          >
            Upgrade uw website naar Next.js
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Missing imports for additional icons 
import { FaUsers, FaCreditCard } from "react-icons/fa";