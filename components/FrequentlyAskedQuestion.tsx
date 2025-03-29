"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaRegLightbulb, FaSearch, FaClock, FaCode, FaCreditCard, FaRocket, FaQuestionCircle } from "react-icons/fa";

export const FrequentlyAskedQuestions = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("all");
  
  const faqCategories = [
    { id: "all", label: "Alle vragen", icon: <FaSearch /> },
    { id: "process", label: "Proces", icon: <FaClock /> },
    { id: "technical", label: "Technisch", icon: <FaCode /> },
    { id: "pricing", label: "Prijzen", icon: <FaCreditCard /> },
    { id: "general", label: "Algemeen", icon: <FaRegLightbulb /> },
  ];
  
  const faqItems = [
    {
      question: "Hoe lang duurt het om een website te laten maken?",
      answer: "Bij SpeedAgency leveren wij de meeste websites binnen 5-7 werkdagen op. Dit is aanzienlijk sneller dan traditionele bureaus die vaak 4-8 weken nodig hebben. Dankzij onze gestroomlijnde processen en gebruik van Next.js kunnen wij zeer efficiënt werken zonder in te leveren op kwaliteit.",
      category: "process",
      highlight: true
    },
    {
      question: "Waarom kiezen voor Next.js in plaats van WordPress?",
      answer: "Next.js biedt aanzienlijke voordelen ten opzichte van WordPress: snellere laadtijden (0.4s vs 2.5-4s), betere SEO-prestaties, hogere veiligheid en minder onderhoud. Onze websites laden tot 10x sneller dan WordPress en zijn veel beter bestand tegen hackers. Bovendien zorgt de snelheid voor betere rankings in Google en hogere conversiepercentages.",
      category: "technical",
      highlight: true
    },
    {
      question: "Wat zijn de kosten voor een professionele website?",
      answer: "De kosten voor een Next.js website beginnen vanaf €2.950 voor een professionele website. De exacte prijs is afhankelijk van de complexiteit, het aantal pagina's en eventuele extra functionaliteiten. Wij bieden ook flexibele betalingsmogelijkheden aan. In vergelijking met traditionele WordPress-sites bieden onze websites een veel betere ROI door verbeterde prestaties en conversies.",
      category: "pricing"
    },
    {
      question: "Krijg ik een CMS om zelf content te beheren?",
      answer: "Ja, wij leveren altijd een gebruiksvriendelijk CMS waarmee je eenvoudig teksten en afbeeldingen kunt aanpassen. We gebruiken moderne headless CMS-oplossingen die perfect integreren met Next.js en een intuïtieve interface bieden. We verzorgen een korte training zodat je direct aan de slag kunt met het beheren van je content.",
      category: "technical"
    },
    {
      question: "Is de website responsive voor mobiele apparaten?",
      answer: "Absoluut. Alle websites die wij bouwen zijn 100% responsive en mobile-first ontwikkeld. Ze functioneren perfect op alle apparaten, van smartphones en tablets tot desktop computers. Wij testen grondig op verschillende schermformaten en apparaten om een optimale gebruikerservaring te garanderen voor al je bezoekers.",
      category: "technical"
    },
    {
      question: "Hoe verloopt het ontwikkelproces?",
      answer: "Ons ontwikkelproces bestaat uit 4 heldere stappen: 1) Oriëntatiegesprek om uw wensen en doelen te begrijpen, 2) Design en wireframing, 3) Ontwikkeling en implementatie, en 4) Testen en oplevering. Gedurende het hele proces heb je één vast contactpersoon en blijf je volledig op de hoogte via onze projectmanagement-tool.",
      category: "process"
    },
    {
      question: "Kan ik mijn bestaande website migreren naar Next.js?",
      answer: "Ja, wij hebben uitgebreide ervaring met het migreren van websites van WordPress of andere platformen naar Next.js. We zorgen ervoor dat alle content, URL-structuren en SEO-waarde behouden blijven. De migratie vindt plaats zonder downtime, zodat je website altijd bereikbaar blijft voor bezoekers.",
      category: "technical"
    },
    {
      question: "Bieden jullie ook SEO-optimalisatie?",
      answer: "Ja, SEO-optimalisatie is standaard onderdeel van al onze websites. We bouwen je website met een technisch perfecte basis voor zoekmachines, inclusief snelle laadtijden, juiste metagegevens, schema markup en semantische HTML. Daarnaast bieden we aanvullende SEO-diensten zoals keyword research en content-optimalisatie voor nog betere resultaten.",
      category: "general"
    },
    {
      question: "Wat gebeurt er na de oplevering van mijn website?",
      answer: "Na oplevering bieden wij 3 maanden gratis support voor eventuele vragen of kleine aanpassingen. Daarnaast adviseren wij een onderhoudscontract om je website up-to-date, veilig en optimaal presterend te houden. We monitoren regelmatig de prestaties en doen suggesties voor verbeteringen om je online resultaten te maximaliseren.",
      category: "process"
    },
    {
      question: "Kan ik mijn website later uitbreiden met extra functionaliteiten?",
      answer: "Zeker, onze Next.js websites zijn uiterst schaalbaar en flexibel. We bouwen met toekomstige uitbreidingen in gedachten, zodat nieuwe functionaliteiten later naadloos kunnen worden toegevoegd. Of het nu gaat om een webshop, klantenportaal of geavanceerde filterfuncties - de modulaire architectuur maakt vrijwel elke uitbreiding mogelijk.",
      category: "general",
      highlight: true
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-800 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-[#54eff6]/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-80 right-0 w-72 h-72 bg-[#4cfea6]/20 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto max-w-7xl px-5 relative z-10">
        {/* Header section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <motion.div 
              className="inline-flex justify-center items-center mb-6"
              animate={{ y: [0, -8, 0] }}
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
                  className="absolute inset-0 rounded-full bg-[#54eff6]/20"
                />
                <div className="relative p-4 bg-white dark:bg-zinc-800 rounded-full shadow-lg">
                  <FaQuestionCircle className="text-2xl text-[#54eff6]" />
                </div>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
              Veelgestelde <span className="text-[#54eff6]">Vragen</span>
            </h2>
            <p className="text-lg text-zinc-700 dark:text-gray-200 max-w-3xl mx-auto">
              Alles wat u moet weten over onze diensten, proces en technologie.
              Heeft u een andere vraag? Neem dan gerust contact met ons op.
            </p>
          </motion.div>
        </div>

        {/* Category selection */}
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
                    ? "bg-gradient-to-r from-[#54eff6] to-[#4cfea6] text-zinc-800 shadow-lg" 
                    : "bg-white dark:bg-zinc-700 text-zinc-800 dark:text-white hover:bg-gray-50 dark:hover:bg-zinc-600 shadow-sm"
                }`}
              >
                <span>{category.icon}</span>
                {category.label}
                <span className={`px-2.5 py-1 text-xs rounded-full ${
                  activeCategory === category.id
                    ? "bg-white/20" 
                    : "bg-gray-100 dark:bg-zinc-600"
                }`}>
                  {getCategoryCount(category.id)}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
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
                        ? "shadow-xl ring-1 ring-[#54eff6]/20" 
                        : "shadow-md hover:shadow-lg transition-shadow"
                    }`}
                  >
                    <motion.button
                      onClick={() => toggleItem(index)}
                      className={`w-full flex justify-between items-center text-left p-6 ${
                        isOpen 
                          ? "bg-white dark:bg-zinc-800" 
                          : isHighlighted 
                            ? "bg-gradient-to-r from-[#54eff6]/10 to-white dark:from-[#54eff6]/5 dark:to-zinc-800" 
                            : "bg-white dark:bg-zinc-800"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {isHighlighted && (
                          <span className="inline-flex items-center justify-center shrink-0 w-10 h-10 bg-[#54eff6]/10 rounded-full text-[#54eff6]">
                            <FaRegLightbulb />
                          </span>
                        )}
                        <h3 className={`text-lg md:text-xl font-medium ${
                          isOpen 
                            ? "text-[#54eff6]" 
                            : "text-zinc-800 dark:text-white"
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full ${
                        isOpen 
                          ? "bg-[#54eff6]/10 text-[#54eff6]" 
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
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center relative z-10"
        >
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 md:p-10 shadow-xl border border-[#54eff6]/10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
              Heeft u nog een andere vraag?
            </h3>
            <p className="text-zinc-700 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
              Wij staan klaar om al uw vragen te beantwoorden. Neem gerust contact met ons op.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#54eff6] to-[#4cfea6] text-zinc-800 font-medium shadow-lg inline-flex items-center justify-center gap-2"
              >
                Contact opnemen
              </motion.a>
              <motion.a
                href="tel:+31612345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-white dark:bg-zinc-700 text-[#54eff6] border border-[#54eff6]/20 hover:border-[#54eff6]/40 font-medium shadow-md inline-flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel direct
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};