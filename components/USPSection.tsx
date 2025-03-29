"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaBolt, 
  FaUserClock, 
  FaMobile, 
  FaSearch, 
  FaShieldAlt, 
  FaHeadset, 
  FaChartLine, 
  FaPlusCircle 
} from "react-icons/fa";

export const USPSection = () => {
  const [activeUSP, setActiveUSP] = useState(0);

  const usps = [
    {
      id: "speed",
      title: "Bliksemsnelle Websites",
      description: "Onze Next.js websites laden in milliseconden, wat zorgt voor lagere bounce rates, hogere conversies en betere SEO-rankings.",
      icon: <FaBolt className="text-3xl" />,
      color: "from-[#54eff6] to-[#4cfea6]",
      stats: [
        { value: "0.4s", label: "Gemiddelde laadtijd" },
        { value: "98%", label: "Lighthouse performance score" },
        { value: "+32%", label: "Conversieratio verbetering" }
      ],
      benefits: [
        "Minder bezoekers die afhaken door trage laadtijden",
        "Hogere posities in Google zoekresultaten",
        "Betere gebruikerservaring op alle apparaten"
      ]
    },
    {
      id: "delivery",
      title: "Snelle Oplevering",
      description: "Terwijl andere bureaus maanden nodig hebben, leveren wij uw website in slechts 5-7 werkdagen op, zonder compromissen op kwaliteit.",
      icon: <FaUserClock className="text-3xl" />,
      color: "from-[#4cfea6] to-[#f9fa4c]",
      stats: [
        { value: "7", label: "Dagen tot lancering" },
        { value: "24/7", label: "Beschikbaar tijdens ontwikkeling" },
        { value: "100%", label: "Tevreden klanten" }
      ],
      benefits: [
        "Snel online met uw nieuwe website",
        "Duidelijke deadlines en tijdlijnen",
        "Geen eindeloze revisierondes"
      ]
    },
    {
      id: "responsive",
      title: "100% Responsief Design",
      description: "Onze websites passen zich perfect aan elk schermformaat aan - van smartphones tot grote desktopmonitors.",
      icon: <FaMobile className="text-3xl" />,
      color: "from-[#f9fa4c] to-[#4cfea6]",
      stats: [
        { value: "63%", label: "Van verkeer komt via mobiel" },
        { value: "99/100", label: "Mobile usability score" },
        { value: "Alle", label: "Apparaten ondersteund" }
      ],
      benefits: [
        "Perfect functionerend op alle apparaten",
        "Geen frustrerende mobiele ervaring",
        "Hogere mobiele conversies"
      ]
    },
    {
      id: "seo",
      title: "SEO-Geoptimaliseerd",
      description: "Elke website die we bouwen is vanaf de basis geoptimaliseerd voor zoekmachines, zodat u beter vindbaar bent in Google.",
      icon: <FaSearch className="text-3xl" />,
      color: "from-[#54eff6] to-[#f9fa4c]",
      stats: [
        { value: "+76%", label: "Gemiddelde stijging in organisch verkeer" },
        { value: "Top 10", label: "Rankings voor belangrijke zoekwoorden" },
        { value: "Structureel", label: "SEO-voordeel t.o.v. concurrenten" }
      ],
      benefits: [
        "Betere vindbaarheid in Google",
        "Meer organische bezoekers",
        "Lagere kosten voor advertenties"
      ]
    },
    {
      id: "security",
      title: "Maximale Veiligheid",
      description: "Onze websites zijn gebouwd met de hoogste veiligheidsstandaarden om uw data en die van uw klanten te beschermen.",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "from-[#4cfea6] to-[#54eff6]",
      stats: [
        { value: "HTTPS", label: "SSL-beveiliging standaard" },
        { value: "Wekelijks", label: "Veiligheidscontroles" },
        { value: "99.9%", label: "Uptime garantie" }
      ],
      benefits: [
        "Bescherming tegen hackers en malware",
        "Veilig dataverkeer voor u en uw klanten",
        "Voldoet aan alle privacy wetgeving"
      ]
    },
    {
      id: "support",
      title: "Persoonlijke Support",
      description: "Direct contact met uw vaste developer - geen callcenters of steeds wisselende medewerkers.",
      icon: <FaHeadset className="text-3xl" />,
      color: "from-[#f9fa4c] to-[#54eff6]",
      stats: [
        { value: "1 uur", label: "Gemiddelde reactietijd" },
        { value: "1 vast", label: "Contactpersoon" },
        { value: "Onbeperkt", label: "Support na oplevering" }
      ],
      benefits: [
        "Altijd dezelfde contactpersoon",
        "Duidelijke en directe communicatie",
        "Snelle oplossingen bij vragen"
      ]
    }
  ];

  const usp = usps[activeUSP];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0fbff] dark:from-zinc-800 dark:to-zinc-900 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Header with floating elements */}
        <div className="relative text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
              Waarom <span className="text-[#54eff6] dark:text-[#54eff6]">SpeedAgency</span> Kiezen?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto relative z-10">
              Wij onderscheiden ons door onze unieke aanpak die resultaat, snelheid en kwaliteit combineert.
              Ontdek onze belangrijkste voordelen.
            </p>
          </motion.div>
          
          {/* Floating accent shapes */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
            className="absolute -top-10 -right-10 md:right-20 w-24 h-24 bg-[#54eff6]/20 dark:bg-[#54eff6]/10 rounded-full blur-xl opacity-70 z-0"
          />
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            }}
            className="absolute top-10 -left-10 md:left-32 w-32 h-32 bg-[#4cfea6]/20 dark:bg-[#4cfea6]/10 rounded-full blur-xl opacity-60 z-0"
          />
        </div>

        {/* USP Selection Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-12">
          {usps.map((item, index) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveUSP(index)}
              className={`flex flex-col items-center p-4 rounded-xl transition-all ${
                activeUSP === index 
                  ? `bg-gradient-to-r ${item.color} text-zinc-800 shadow-lg` 
                  : "bg-white dark:bg-zinc-800 shadow-sm hover:shadow"
              }`}
            >
              <div className={`p-3 rounded-full mb-2 ${
                activeUSP === index 
                  ? 'bg-white/20' 
                  : `bg-gradient-to-br ${item.color} bg-opacity-10`
              }`}>
                {item.icon}
              </div>
              <span className={`text-xs sm:text-sm font-medium text-center ${
                activeUSP === index ? 'text-zinc-800' : 'text-zinc-700 dark:text-zinc-200'
              }`}>
                {item.title.split(' ')[0]}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Active USP Detail */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={usp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left column - Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${usp.color} text-zinc-800`}>
                    {usp.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-zinc-800 dark:text-white">{usp.title}</h3>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-zinc-600 dark:text-zinc-300 mb-8"
                >
                  {usp.description}
                </motion.p>

                <h4 className="text-xl font-bold text-zinc-700 dark:text-white mb-4">Voordelen:</h4>
                <div className="space-y-3 mb-8">
                  {usp.benefits.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index + 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <span className={`text-lg bg-gradient-to-r ${usp.color} bg-clip-text text-transparent mt-0.5`}>
                        <FaPlusCircle />
                      </span>
                      <p className="text-zinc-600 dark:text-zinc-300">{benefit}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2">
                    <span className="text-[#54eff6] dark:text-[#54eff6]">
                      <FaChartLine />
                    </span>
                    <span className="font-medium text-zinc-700 dark:text-zinc-200">
                      Dit zeggen onze cijfers
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Right column - Stats */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-700 dark:to-zinc-800 rounded-xl p-6 md:p-8">
                <h4 className="text-xl font-bold text-zinc-700 dark:text-white mb-6">De resultaten spreken voor zich</h4>
                
                <div className="space-y-8">
                  {usp.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-zinc-500 dark:text-zinc-400 text-sm">{stat.label}</span>
                        <span className={`text-sm bg-gradient-to-r ${usp.color} bg-clip-text text-transparent font-medium`}>
                          Industriestandaard overtroffen
                        </span>
                      </div>
                      <div className="h-16 bg-white dark:bg-zinc-900 rounded-lg p-3 flex items-center">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                          className={`h-10 bg-gradient-to-r ${usp.color} rounded-md flex items-center justify-end px-4`}
                        >
                          <span className="text-2xl font-bold text-zinc-800">{stat.value}</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-8 text-center"
                >
                  <p className="text-zinc-600 dark:text-zinc-300 italic">
                    "Onze aanpak heeft bewezen resultaten te leveren voor onze klanten"
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#54eff6] to-[#4cfea6] text-zinc-800 relative overflow-hidden`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0M20 40L40 20M0 20L20 0" stroke="rgba(0,0,0,0.06)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center relative z-10">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Klaar om uw online doelen te overtreffen?
              </h3>
              <p className="text-zinc-700 max-w-2xl">
                Onze unieke aanpak combineert snelheid, kwaliteit en resultaat. Laten we samenwerken om uw volgende digitale project tot een succes te maken.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-white text-zinc-800 font-medium shadow-lg border-2 border-[#f9fa4c]"
              >
                Gratis adviesgesprek
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};