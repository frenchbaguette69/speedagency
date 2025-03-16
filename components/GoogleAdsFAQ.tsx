"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlus, 
  FaMinus, 
  FaRegLightbulb, 
  FaAd, 
  FaClock, 
  FaSearchDollar, 
  FaCreditCard, 
  FaChartLine, 
  FaQuestionCircle, 
  FaStore, 
  FaUsers,
  FaMobileAlt,
  FaBullseye,
  FaCogs,
  FaFileAlt,
  FaRobot
} from "react-icons/fa";

export const GoogleAdsFAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("all");
  
  const faqCategories = [
    { id: "all", label: "Alle vragen", icon: <FaAd /> },
    { id: "strategy", label: "Strategie", icon: <FaBullseye /> },
    { id: "campaigns", label: "Campagnes", icon: <FaSearchDollar /> },
    { id: "shopping", label: "Shopping Ads", icon: <FaStore /> },
    { id: "analytics", label: "Resultaten", icon: <FaChartLine /> },
    { id: "pricing", label: "Kosten & ROI", icon: <FaCreditCard /> },
    { id: "automation", label: "Automatisering", icon: <FaRobot /> },
  ];
  
  const faqItems = [
    {
      question: "Wat kost Google Ads adverteren?",
      answer: "De kosten voor Google Ads bestaan uit twee delen: het advertentiebudget en onze management fee. Het minimale maandelijkse advertentiebudget adviseren wij op €1.000, waarbij de exacte investering afhangt van uw doelen en markt. Onze management fee begint vanaf €495 per maand voor basis campagnebeheer. Voor uitgebreide campagnes met shopping, display en remarketing ligt dit tussen €750 en €1.500 per maand. We werken zonder lange contracten en bieden 100% transparantie in zowel kosten als resultaten.",
      category: "pricing",
      highlight: true
    },
    {
      question: "Hoe snel zie ik resultaten met Google Ads?",
      answer: "Google Ads biedt het voordeel van directe zichtbaarheid. Zodra uw campagnes live gaan, kunnen potentiële klanten uw advertenties zien. De eerste resultaten in termen van clicks en websitebezoek zijn meestal binnen 24 uur zichtbaar. Voor het optimaliseren van de conversieratio en het verlagen van de acquisitiekosten is typisch 2-4 weken nodig, waarbij we continu testen en optimaliseren voor de beste resultaten.",
      category: "analytics",
      highlight: true
    },
    {
      question: "Wat is het verschil tussen Smart Bidding en handmatige biedingen?",
      answer: "Smart Bidding gebruikt Google's machine learning om real-time biedingen te optimaliseren op basis van talloze signalen zoals apparaat, locatie, tijdstip en gebruikersprofiel. Handmatige biedingen geven meer directe controle maar missen deze automatische optimalisatie. Wij gebruiken meestal een hybride aanpak: Smart Bidding voor schaalbare campagnes met voldoende conversiedata, en handmatige biedingen voor nieuwe campagnes of nichemarkten waar specifieke expertise vereist is.",
      category: "automation"
    },
    {
        question: "Wat is een goede ROAS voor Google Ads?",
        answer: "Een goede ROAS (Return On Ad Spend) verschilt per branche en business model. Voor e-commerce ligt een gezonde ROAS meestal tussen 300-800% (3-8x uw advertentie-uitgaven). Voor B2B of hoogwaardige diensten kan een ROAS van 200-400% al zeer winstgevend zijn. Wij streven ernaar om binnen 3 maanden een ROAS-verbetering van minimaal 40% te realiseren ten opzichte van uw huidige resultaten.",
        category: "analytics",
        highlight: true
      },
      {
        question: "Hoe werkt de samenwerking met jullie bureau?",
        answer: "We starten met een grondige analyse van uw huidige situatie en doelstellingen. Vervolgens stellen we een strategie op en bespreken deze met u. Na akkoord implementeren we de campagnes en optimaliseren deze continu. U ontvangt maandelijks een uitgebreide rapportage en we hebben regelmatig strategisch overleg. We werken transparant, zonder lange contracten en u heeft altijd inzicht in alle campagnedata.",
        category: "strategy"
      },
      {
        question: "Kunnen jullie ook Google Shopping campagnes opzetten?",
        answer: "Ja, we zijn gespecialiseerd in Google Shopping campagnes. Dit omvat productfeed optimalisatie, Smart Shopping campagnes, dynamische remarketing en Performance Max campagnes. We zorgen voor een optimale productfeed, strategische biedingen per productgroep en continue optimalisatie van product-titels en beschrijvingen voor maximale conversie.",
        category: "shopping"
      },
      {
        question: "Wat is het verschil tussen Search en Display advertenties?",
        answer: "Search advertenties worden getoond wanneer mensen actief zoeken naar uw producten of diensten via Google. Deze hebben meestal een hogere intentie tot aankoop. Display advertenties zijn visuele advertenties die op websites binnen het Google Display Netwerk worden getoond, ideaal voor merkbekendheid en remarketing. We adviseren vaak een combinatie voor optimale resultaten.",
        category: "campaigns"
      },
      {
        question: "Hoe zit het met de minimale contractduur?",
        answer: "We werken zonder lange contracten. De minimale periode is 3 maanden, omdat we deze tijd nodig hebben om campagnes te optimaliseren en significante resultaten te behalen. Daarna geldt een opzegtermijn van 30 dagen. We zijn overtuigd van onze toegevoegde waarde en willen u niet binden met lange contracten.",
        category: "pricing"
      },
      {
        question: "Wat is Performance Max en hebben we dit nodig?",
        answer: "Performance Max is Google's nieuwste campagnetype dat AI gebruikt om advertenties over alle Google-netwerken te optimaliseren. Het combineert features van Search, Display, Shopping en YouTube. Het kan zeer effectief zijn voor bedrijven met voldoende conversiedata, maar vereist wel de juiste strategie en assets. We adviseren Performance Max vaak als aanvulling op specifieke Search- en Shopping-campagnes.",
        category: "automation"
      },
      {
        question: "Hoe gaan jullie om met privacy en cookiewetgeving?",
        answer: "We volgen alle GDPR/AVG-richtlijnen en passen onze strategie aan op basis van de steeds strenger wordende privacyregels. We implementeren server-side tracking waar mogelijk, werken met Google Consent Mode en focussen op first-party data. Ook adviseren we over privacyvriendelijke alternatieven voor conversietracking en remarketing.",
        category: "strategy"
      },
      {
        question: "Wat is een realistische cost-per-acquisition (CPA)?",
        answer: "De ideale CPA hangt af van uw winstmarges en lifetime value van een klant. In e-commerce zien we CPAs variërend van €5-€50, terwijl B2B-leads kunnen variëren van €50-€500. We bepalen samen een target CPA en optimaliseren hier actief op met behulp van Smart Bidding strategieën en conversion value-based bidding.",
        category: "analytics"
      },
      {
        question: "Kunnen jullie ook internationale campagnes opzetten?",
        answer: "Ja, we hebben ruime ervaring met internationale Google Ads campagnes. We zorgen voor correcte geo-targeting, taalspecifieke advertentieteksten, valuta-instellingen en lokale landingspaginas. Ook houden we rekening met verschillen in zoekgedrag, concurrentie en CPC's per land. We kunnen campagnes opzetten in alle landen waar Google Ads beschikbaar is.",
        category: "campaigns"
      },
      {
        question: "Wat is jullie aanpak voor seizoensgebonden producten?",
        answer: "Voor seizoensproducten ontwikkelen we een jaarplanning met budget-allocatie en biedstrategieën per seizoen. We anticiperen op piekmomenten met verhoogde budgetten, speciale advertentieteksten en aangepaste landingspagina's. Ook gebruiken we historical data voor nauwkeurige timing en budgettering. Remarketing wordt strategisch ingezet om klanten te behouden voor volgende seizoenen.",
        category: "strategy"
      }
  ];

  const filteredFaqs = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);
    
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const getCategoryCount = (categoryId: string) => {
    return categoryId === "all" 
      ? faqItems.length 
      : faqItems.filter(item => item.category === categoryId).length;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50/30 dark:from-zinc-900 dark:to-purple-950/20 overflow-hidden relative">
      <div className="absolute top-40 left-0 w-64 h-64 bg-purple-300 dark:bg-purple-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl opacity-30 dark:opacity-40"></div>
      <div className="absolute top-80 right-0 w-72 h-72 bg-pink-300 dark:bg-pink-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl opacity-30 dark:opacity-40"></div>

      <div className="container mx-auto max-w-7xl px-5 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <motion.div 
              className="inline-flex justify-center items-center mb-6"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut" 
              }}
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.2, 0.7]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 rounded-full bg-purple-200 dark:bg-purple-500/20"
                />
                <div className="relative p-4 bg-white dark:bg-purple-900 rounded-full shadow-lg">
                  <FaAd className="text-2xl text-purple-600 dark:text-purple-300" />
                </div>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
              Veelgestelde <span className="text-purple-600 dark:text-purple-400">Google Ads Vragen</span>
            </h2>
            <p className="text-lg text-zinc-700 dark:text-gray-200 max-w-3xl mx-auto">
              Alles wat u moet weten over Google Ads adverteren, onze aanpak en wat online adverteren voor uw bedrijf kan betekenen.
              Heeft u een specifieke vraag? Neem dan gerust contact met ons op.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 overflow-x-auto pb-2 hide-scrollbar"
        >
          <div className="flex space-x-3 md:justify-center min-w-max">
            {faqCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3.5 rounded-xl flex items-center gap-2.5 text-sm md:text-base font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-purple-600 text-white shadow-lg" 
                    : "bg-white dark:bg-zinc-700 text-zinc-800 dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-600 shadow-sm border border-gray-100 dark:border-zinc-600"
                }`}
              >
                <span>{category.icon}</span>
                {category.label}
                <span className={`px-2.5 py-1 text-xs rounded-full ${
                  activeCategory === category.id
                    ? "bg-white/20 text-white" 
                    : "bg-gray-100 dark:bg-zinc-600 text-zinc-700 dark:text-zinc-200"
                }`}>
                  {getCategoryCount(category.id)}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {filteredFaqs.map((faq, index) => {
                const isOpen = openItem === index;
                const isHighlighted = faq.highlight;
                
                return (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`rounded-2xl overflow-hidden ${
                      isOpen 
                        ? "shadow-xl ring-1 ring-purple-200 dark:ring-purple-500/30" 
                        : "shadow-md hover:shadow-lg transition-shadow"
                    }`}
                  >
                    <motion.button
                      onClick={() => toggleItem(index)}
                      className={`w-full flex justify-between items-center text-left p-6 ${
                        isOpen 
                          ? "bg-white dark:bg-zinc-800" 
                          : isHighlighted 
                            ? "bg-gradient-to-r from-purple-50 to-white dark:from-purple-900/20 dark:to-zinc-800" 
                            : "bg-white dark:bg-zinc-800"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {isHighlighted && (
                          <span className="inline-flex items-center justify-center shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full text-purple-600 dark:text-purple-300">
                            <FaRegLightbulb />
                          </span>
                        )}
                        <h3 className={`text-lg md:text-xl font-medium ${
                          isOpen 
                            ? "text-purple-600 dark:text-purple-300" 
                            : "text-zinc-800 dark:text-white"
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full ${
                        isOpen 
                          ? "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300" 
                          : "bg-gray-100 dark:bg-zinc-700 text-zinc-500 dark:text-white"
                      }`}>
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </div>
                    </motion.button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-white dark:bg-zinc-800 border-t border-gray-100 dark:border-zinc-700"
                        >
                          <div className="p-6 pt-4">
                            <div className={`pl-0 ${isHighlighted ? "md:pl-14" : ""}`}>
                              <p className="text-zinc-700 dark:text-gray-200 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
          
          {filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-16"
            >
              <div className="bg-white dark:bg-zinc-800 p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-700">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-100 dark:bg-zinc-700 rounded-full">
                    <FaAd className="text-2xl text-gray-400 dark:text-gray-300" />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-2 text-zinc-800 dark:text-white">
                  Geen vragen gevonden in deze categorie
                </h3>
                <p className="text-zinc-700 dark:text-gray-300">
                  Probeer een andere categorie of neem contact met ons op voor specifieke Google Ads vragen.
                </p>
              </div>
            </motion.div>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center relative z-10"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-10 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Klaar voor Google Ads die écht converteren?
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Laat ons u helpen uw advertentieresultaten te verbeteren met een data-gedreven Google Ads aanpak. 
              Vraag nu een vrijblijvende analyse aan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-white hover:bg-purple-50 text-purple-600 font-medium shadow-lg inline-flex items-center justify-center gap-2"
              >
                Gratis Google Ads analyse
              </motion.a>
              <motion.a
                href="tel:+31612345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-purple-500/30 hover:bg-purple-500/40 text-white border border-purple-400 hover:border-white font-medium inline-flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel direct: 06-12345678
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};