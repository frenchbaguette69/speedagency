"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlus, 
  FaMinus, 
  FaRegLightbulb, 
  FaSearch, 
  FaClock, 
  FaCode, 
  FaCreditCard, 
  FaChartLine, 
  FaQuestionCircle, 
  FaGlobe, 
  FaLock, 
  FaMobileAlt,
  FaMapMarkerAlt,
  FaLink,
  FaFileAlt,
  FaRobot
} from "react-icons/fa";

export const SeoFAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("all");
  
  // FAQ categories specifically for SEO services
  const faqCategories = [
    { id: "all", label: "Alle vragen", icon: <FaSearch /> },
    { id: "technical", label: "Technische SEO", icon: <FaCode /> },
    { id: "content", label: "Content & Keywords", icon: <FaFileAlt /> },
    { id: "local", label: "Lokale SEO", icon: <FaMapMarkerAlt /> },
    { id: "analytics", label: "Metingen & Rapportage", icon: <FaChartLine /> },
    { id: "pricing", label: "Kosten & ROI", icon: <FaCreditCard /> },
    { id: "algorithms", label: "Algoritmes & Updates", icon: <FaRobot /> },
  ];
  
  // SEO-specific FAQ items
  const faqItems = [
    {
      question: "Wat kost professionele SEO-dienstverlening?",
      answer: "De kosten voor onze SEO-diensten beginnen vanaf €950 per maand voor een basisoptimalisatie. Voor uitgebreidere SEO-campagnes met concurrerende zoekwoorden ligt het tarief tussen €1.500 en €3.500 per maand. De exacte investering hangt af van factoren zoals de concurrentie in uw branche, het aantal zoekwoorden waarop u wilt ranken, de huidige staat van uw website en de snelheid waarmee u resultaten wilt behalen. We werken met transparante prijsmodellen zonder langlopende contracten en bieden ook eenmalige SEO-audits aan vanaf €750.",
      category: "pricing",
      highlight: true
    },
    {
      question: "Hoe snel zie ik resultaten van SEO-optimalisatie?",
      answer: "SEO is een langetermijnstrategie, maar onze klanten zien doorgaans de eerste verbeteringen binnen 4-8 weken. Deze eerste resultaten betreffen vaak verbeterde indexering, hogere crawlratio's en rankings voor minder competitieve zoektermen. Significante verbeteringen voor competitieve zoekwoorden worden meestal zichtbaar na 3-6 maanden consistente optimalisatie. Voor zeer competitieve sectoren of zoekwoorden kan het 6-12 maanden duren voordat u top-posities bereikt. We verstrekken gedetailleerde maandelijkse voortgangsrapportages zodat u de ontwikkeling nauwkeurig kunt volgen.",
      category: "analytics",
      highlight: true
    },
    {
      question: "Wat houdt technische SEO precies in?",
      answer: "Technische SEO omvat alle optimalisaties aan de 'backend' van uw website die zoekmachines helpen om uw content beter te crawlen, indexeren en begrijpen. Dit omvat het optimaliseren van Core Web Vitals (laadsnelheid, interactiviteit, visuele stabiliteit), het verbeteren van de websitestructuur, het oplossen van crawling- en indexeringsproblemen, implementatie van schema markup (gestructureerde data), optimalisatie van XML-sitemaps, verbeteren van interne linking, oplossen van duplicate content issues, en het implementeren van canonicals. Technische SEO vormt de fundering van een effectieve SEO-strategie en is essentieel voor goede rankings.",
      category: "technical"
    },
    {
      question: "Wat is het verschil tussen SEO en SEA (Google Ads)?",
      answer: "SEO (Search Engine Optimization) richt zich op het verbeteren van uw organische (niet-betaalde) zichtbaarheid in zoekmachines door technische optimalisaties, contentcreatie en autoriteitsopbouw. SEA (Search Engine Advertising), zoals Google Ads, omvat betaalde advertenties die bovenaan zoekresultaten verschijnen. SEO biedt duurzamere resultaten en hogere ROI op lange termijn, maar vereist meer tijd. SEA geeft directe zichtbaarheid maar stopt zodra u stopt met betalen. Een optimale strategie combineert beide: SEA voor snelle resultaten en inzichten in conversie, en SEO voor duurzame organische groei. Wij kunnen beide diensten verzorgen met een geïntegreerde aanpak.",
      category: "pricing"
    },
    {
      question: "Kan mijn website hogere rankings krijgen zonder linkbuilding?",
      answer: "Ja, dat is mogelijk, vooral voor minder competitieve zoektermen en nichemarkten. Hoewel backlinks nog steeds een belangrijke rankingfactor zijn, legt Google tegenwoordig steeds meer nadruk op gebruikerservaring en contentkwaliteit. We zien regelmatig websites die goed ranken dankzij uitstekende content, technische optimalisatie en een goede gebruikerservaring, zelfs met een beperkt linkprofiel. Onze aanpak begint altijd met het optimaliseren van uw eigen website en content voordat we naar externe linkbuilding kijken. Voor zeer competitieve zoektermen blijven kwalitatieve backlinks echter een cruciaal onderdeel van de strategie.",
      category: "content"
    },
    {
      question: "Hoe beïnvloeden de Core Web Vitals mijn rankings?",
      answer: "Core Web Vitals zijn een verzameling specifieke factoren die Google belangrijk acht voor de gebruikerservaring van een webpagina. Deze omvatten Largest Contentful Paint (laadsnelheid), First Input Delay (interactiviteit) en Cumulative Layout Shift (visuele stabiliteit). Sinds Google's Page Experience Update zijn deze metrics een officiële rankingfactor. Hoewel content nog steeds belangrijker is, zien we dat websites met goede Core Web Vitals een significant voordeel hebben bij gelijkwaardige content, vooral op mobiele apparaten. Onze technische SEO-aanpak optimaliseert deze metrics systematisch, wat vaak resulteert in een ranking boost van 5-15 posities voor belangrijke zoekwoorden.",
      category: "technical",
      highlight: true
    },
    {
      question: "Hoe belangrijk is lokale SEO voor mijn bedrijf?",
      answer: "Als u een fysieke locatie heeft of diensten aanbiedt in specifieke geografische gebieden, is lokale SEO cruciaal. 46% van alle Google-zoekopdrachten hebben een lokale intentie, en 88% van de consumenten die een lokale zoekopdracht uitvoert op een smartphone, bezoekt binnen 24 uur een gerelateerde winkel. Onze lokale SEO-strategie omvat het optimaliseren van uw Google Business Profile, het creëren van lokaal relevante content, het verkrijgen van lokale citaties en reviews, en het implementeren van gestructureerde data specifiek voor lokale bedrijven. Voor bedrijven met meerdere locaties gebruiken we een geavanceerde multi-locatie strategie die elke vestiging individueel optimaliseert.",
      category: "local"
    },
    {
      question: "Hoe werkt SEO voor internationale websites?",
      answer: "Internationale SEO vereist een gespecialiseerde aanpak om in verschillende landen en talen goed te ranken. We implementeren de juiste hreflang-tags om Google te helpen de juiste taalversie aan de juiste gebruikers te tonen, en passen uw URL-structuur aan (via subdomeinen, submappen of ccTLDs) voor optimale internationale targeting. We doen uitgebreid zoekwoordenonderzoek per land, aangezien directe vertalingen vaak niet overeenkomen met lokaal zoekgedrag. Daarnaast optimaliseren we voor lokale rankingfactoren, zorgen we voor lokaal gehoste servers waar nodig, en bouwen we landspecifieke backlinkprofielen op. Onze internationale SEO-aanpak heeft al diverse klanten geholpen hun mondiale online aanwezigheid te versterken.",
      category: "content"
    },
    {
      question: "Hoe meet en rapporteert u SEO-resultaten?",
      answer: "Wij verzorgen uitgebreide maandelijkse SEO-rapportages met focus op meetbare business resultaten. Onze rapportages omvatten positioneringen voor afgesproken zoekwoorden, organisch verkeer, conversies uit organisch verkeer (leads/verkopen), zichtbaarheidsscores ten opzichte van concurrenten, technische SEO-verbeteringen, en voortgang in backlink-acquisitie. We gebruiken professionele tools zoals SEMrush, Ahrefs, Google Search Console en Google Analytics 4 voor nauwkeurige gegevens. Naast standaardrapportages bieden wij toegang tot een live dashboard waar u realtime inzicht heeft in uw SEO-prestaties. Bij elke rapportage geven we concrete aanbevelingen voor verdere optimalisatie.",
      category: "analytics"
    },
    {
      question: "Wat betekenen Google-updates zoals Core Updates voor mijn website?",
      answer: "Google voert jaarlijks honderden updates uit aan zijn algoritme, waarvan de 'Core Updates' het meest impactvol zijn. Deze grote updates kunnen significante verschuivingen in rankings veroorzaken terwijl Google zijn beoordelingscriteria verfijnt. Websites die kernprincipes volgen zoals E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), kwalitatieve content bieden, en een uitstekende gebruikservaring leveren, komen door deze updates meestal sterker naar voren. Ons team volgt alle Google-updates nauwgezet en past strategieën proactief aan. Na grote updates voeren we specifieke analyses uit om eventuele negatieve impact snel te identificeren en te adresseren, of om positieve veranderingen verder te versterken.",
      category: "algorithms"
    },
    {
      question: "Wat is mobile-first indexing en hoe belangrijk is het?",
      answer: "Mobile-first indexing betekent dat Google primair de mobiele versie van uw website gebruikt om te indexeren en te bepalen hoe hoog u moet ranken. Dit is niet langer optioneel: sinds maart 2021 past Google mobile-first indexing toe op alle websites. Dit maakt mobiele optimalisatie essentieel, zelfs als het merendeel van uw verkeer van desktops komt. Onze SEO-aanpak zorgt ervoor dat uw website volledig geoptimaliseerd is voor mobiele apparaten, met responsive design, optimale laadtijden op mobiele netwerken, leesbare tekst zonder te hoeven zoomen, touch-vriendelijke navigatie, en vermijding van technologieën die niet op mobiele apparaten werken (zoals Flash). We testen uw site op verschillende apparaten en optimaliseren specifiek voor de mobiele gebruikservaring.",
      category: "technical"
    },
    {
      question: "Hoeveel zoekwoorden kunnen worden geoptimaliseerd?",
      answer: "In onze SEO-pakketten optimaliseren we doorgaans 15-50 primaire zoektermen, afhankelijk van het gekozen pakket en uw specifieke doelstellingen. Deze focus op een beheersbaar aantal zoekwoorden stelt ons in staat om gerichte, diepgaande optimalisaties door te voeren. Een goed uitgevoerde SEO-strategie levert echter rankings op voor veel meer zoektermen dan alleen de primaire focus-keywords. Onze klanten zien gemiddeld rankings voor 200-500 gerelateerde zoekwoorden die natuurlijk voortkomen uit onze holistische content- en optimalisatiestrategie. We monitoren al deze 'bonus' zoektermen en identificeren hieruit nieuwe kansen voor verdere optimalisatie en contentontwikkeling.",
      category: "content",
      highlight: true
    },
    {
      question: "Hoe beïnvloedt AI-content zoals ChatGPT mijn SEO?",
      answer: "AI-gegenereerde content kan zowel kansen als risico's bieden voor SEO. Google heeft aangegeven dat hoogwaardige content prioriteit krijgt, ongeacht of deze door mensen of AI is geschreven. De nadruk ligt op de kwaliteit, relevantie en waarde voor de gebruiker. Wij gebruiken AI-tools als ondersteuning bij contentontwikkeling, maar altijd met menselijke redactie die expertise, ervaring en authenticiteit toevoegt - factoren die cruciaal zijn voor E-E-A-T. Pure, onbewerkte AI-content zonder toegevoegde waarde kan als 'thin content' worden beschouwd en rankings negatief beïnvloeden. Onze benadering combineert de efficiëntie van AI met menselijke expertise, wat resulteert in schaalbare maar hoogwaardige contentcreatie die voldoet aan Google's kwaliteitscriteria.",
      category: "content"
    },
    {
      question: "Wat is de ROI van SEO-investeringen?",
      answer: "SEO biedt doorgaans een van de hoogste ROI's van alle digitale marketingkanalen op middellange en lange termijn. Terwijl het gemiddelde rendement op elke geïnvesteerde euro in digitale marketing rond 200% ligt (€2 omzet per geïnvesteerde euro), zien onze SEO-klanten gemiddeld rendementen van 500-800% na 12 maanden, oplopend tot 1000-1500% na 24+ maanden. Dit komt doordat SEO cumulatieve voordelen biedt die ook na de initiële investering blijven doorwerken. Het initiële rendement is lager vanwege de aanlooptijd die SEO nodig heeft, maar na 4-6 maanden begint de ROI significant te stijgen naarmate rankings verbeteren. We meten ROI nauwkeurig door middel van conversie-attributie en helpen u realistische verwachtingen te stellen voor uw specifieke situatie.",
      category: "pricing",
      highlight: true
    },
    {
      question: "Wat gebeurt er als ik stop met SEO-diensten?",
      answer: "Als u stopt met actieve SEO-dienstverlening, zullen de behaalde resultaten niet onmiddellijk verdwijnen. Anders dan bij betaalde advertenties, die direct stoppen bij het beëindigen van het budget, blijven SEO-verbeteringen doorgaans geruime tijd behouden. Technische optimalisaties, kwalitatieve content en opgebouwde backlinks behouden hun waarde. Echter, zonder voortdurende optimalisatie zal de effectiviteit geleidelijk afnemen naarmate concurrenten blijven investeren en Google's algoritme evolueert. Hoe snel deze afname plaatsvindt, hangt af van de concurrentie in uw branche. In zeer competitieve markten kunnen posities binnen 3-6 maanden significant dalen, terwijl in minder competitieve niches de resultaten jarenlang stabiel kunnen blijven met minimaal onderhoud.",
      category: "pricing"
    }
  ];

  // Filter FAQs by active category
  const filteredFaqs = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);
    
  // Handle toggle FAQ item
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  // Get number of FAQs per category for the badge
  const getCategoryCount = (categoryId: string) => {
    return categoryId === "all" 
      ? faqItems.length 
      : faqItems.filter(item => item.category === categoryId).length;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50/30 dark:from-zinc-900 dark:to-blue-950/20 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-blue-300 dark:bg-blue-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl opacity-30 dark:opacity-40"></div>
      <div className="absolute top-80 right-0 w-72 h-72 bg-cyan-300 dark:bg-cyan-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl opacity-30 dark:opacity-40"></div>

      <div className="container mx-auto max-w-7xl px-5 relative z-10">
        {/* Animated header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            {/* Floating icon */}
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
                {/* Pulsing animation */}
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
                  className="absolute inset-0 rounded-full bg-blue-200 dark:bg-blue-500/20"
                />
                <div className="relative p-4 bg-white dark:bg-blue-900 rounded-full shadow-lg">
                  <FaSearch className="text-2xl text-blue-600 dark:text-blue-300" />
                </div>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
              Veelgestelde <span className="text-blue-600 dark:text-blue-400">SEO Vragen</span>
            </h2>
            <p className="text-lg text-zinc-700 dark:text-gray-200 max-w-3xl mx-auto">
              Alles wat u moet weten over zoekmachineoptimalisatie, onze aanpak en wat SEO voor uw bedrijf kan betekenen.
              Heeft u een specifieke vraag? Neem dan gerust contact met ons op.
            </p>
          </motion.div>
        </div>

        {/* Category tabs - scrollable on mobile */}
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
                    ? "bg-blue-600 text-white shadow-lg" 
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

        {/* FAQ items with enhanced visibility */}
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
                        ? "shadow-xl ring-1 ring-blue-200 dark:ring-blue-500/30" 
                        : "shadow-md hover:shadow-lg transition-shadow"
                    }`}
                  >
                    {/* Question header */}
                    <motion.button
                      onClick={() => toggleItem(index)}
                      className={`w-full flex justify-between items-center text-left p-6 ${
                        isOpen 
                          ? "bg-white dark:bg-zinc-800" 
                          : isHighlighted 
                            ? "bg-gradient-to-r from-blue-50 to-white dark:from-blue-900/20 dark:to-zinc-800" 
                            : "bg-white dark:bg-zinc-800"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {isHighlighted && (
                          <span className="inline-flex items-center justify-center shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                            <FaRegLightbulb />
                          </span>
                        )}
                        <h3 className={`text-lg md:text-xl font-medium ${
                          isOpen 
                            ? "text-blue-600 dark:text-blue-300" 
                            : "text-zinc-800 dark:text-white"
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full ${
                        isOpen 
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300" 
                          : "bg-gray-100 dark:bg-zinc-700 text-zinc-500 dark:text-white"
                      }`}>
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </div>
                    </motion.button>
                    
                    {/* Answer content */}
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
          
          {/* Empty state when no FAQs match the filter */}
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
                    <FaSearch className="text-2xl text-gray-400 dark:text-gray-300" />
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-2 text-zinc-800 dark:text-white">
                  Geen vragen gevonden in deze categorie
                </h3>
                <p className="text-zinc-700 dark:text-gray-300">
                  Probeer een andere categorie of neem contact met ons op voor specifieke SEO-vragen.
                </p>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center relative z-10"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-10 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Klaar voor een SEO-strategie die écht werkt?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Laat ons u helpen uw online vindbaarheid te verbeteren met een data-gedreven SEO-aanpak. 
              Vraag nu een vrijblijvende website analyse aan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-blue-600 font-medium shadow-lg inline-flex items-center justify-center gap-2"
              >
                Gratis SEO-scan aanvragen
              </motion.a>
              <motion.a
                href="tel:+31612345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-blue-500/30 hover:bg-blue-500/40 text-white border border-blue-400 hover:border-white font-medium inline-flex items-center justify-center gap-2"
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