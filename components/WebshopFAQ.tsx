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
  FaShoppingCart, 
  FaQuestionCircle, 
  FaTruck, 
  FaLock, 
  FaChartLine 
} from "react-icons/fa";

export const WebshopFAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("all");
  
  // FAQ categories specifically for webshops
  const faqCategories = [
    { id: "all", label: "Alle vragen", icon: <FaSearch /> },
    { id: "development", label: "Ontwikkeling", icon: <FaCode /> },
    { id: "features", label: "Functies", icon: <FaShoppingCart /> },
    { id: "pricing", label: "Kosten", icon: <FaCreditCard /> },
    { id: "security", label: "Veiligheid", icon: <FaLock /> },
    { id: "logistics", label: "Logistiek", icon: <FaTruck /> },
    { id: "marketing", label: "Marketing", icon: <FaChartLine /> },
  ];
  
  // Webshop-specific FAQ items
  const faqItems = [
    {
      question: "Wat kost een professionele webshop?",
      answer: "De kosten voor een professionele Next.js webshop beginnen vanaf €4.950. De exacte prijs hangt af van de gewenste functionaliteiten, het aantal producten, betalingsintegraties en specifieke aanpassingen. We bieden verschillende pakketten aan, waaronder een basisversie voor starters, een uitgebreide versie voor groeiende ondernemingen en een enterprise oplossing voor grote webwinkels. Tijdens een vrijblijvende intake bespreken we uw specifieke wensen en kunnen we een nauwkeurige offerte maken.",
      category: "pricing",
      highlight: true
    },
    {
      question: "Hoe lang duurt het om een webshop te ontwikkelen?",
      answer: "Bij SpeedAgency leveren wij de meeste webshops binnen 4-6 weken op, afhankelijk van de complexiteit. Onze gestroomlijnde werkwijze met Next.js stelt ons in staat om veel sneller te werken dan traditionele webshopbouwers. Het proces omvat intake, design, ontwikkeling, productimplementatie, betalingsintegraties, testen en training. Voor urgente projecten bieden we ook een versnelde ontwikkeling aan tegen een meerprijs.",
      category: "development",
      highlight: true
    },
    {
      question: "Welke betaalmethoden kunnen worden geïntegreerd?",
      answer: "We integreren alle gangbare betaalmethoden in uw webshop, waaronder iDEAL, creditcards (Mastercard, Visa), PayPal, Bancontact, AfterPay, Klarna, Apple Pay en Google Pay. We werken samen met verschillende payment service providers zoals Mollie, Stripe, MultiSafepay en Adyen. Welke provider het beste bij uw situatie past, hangt af van uw transactievolume, internationale ambities en specifieke wensen qua kosten en functionaliteit.",
      category: "features"
    },
    {
      question: "Is de webshop responsive voor mobiele apparaten?",
      answer: "Absoluut. Alle webshops die wij bouwen zijn 100% responsive en worden specifiek geoptimaliseerd voor mobiele conversie. Met meer dan 65% van de online aankopen via mobiele apparaten, ontwikkelen wij met een mobile-first benadering. We testen uitvoerig op verschillende apparaten en schermformaten om een naadloze gebruikerservaring te garanderen, van product browsen tot afrekenen.",
      category: "features"
    },
    {
      question: "Kan ik mijn bestaande producten importeren?",
      answer: "Ja, we kunnen productdata van uw huidige e-commerce platform migreren naar uw nieuwe webshop. We ondersteunen imports vanuit Shopify, WooCommerce, Magento, Lightspeed en andere platforms. De migratie omvat producttitels, beschrijvingen, prijzen, varianten, afbeeldingen, voorraad en categorieën. We zorgen voor een grondige controle na de import om te verzekeren dat alle data correct is overgezet.",
      category: "development"
    },
    {
      question: "Hoe zit het met de veiligheid van mijn webshop?",
      answer: "Veiligheid is onze topprioriteit. Onze Next.js webshops zijn inherent veiliger dan traditionele platformen zoals WordPress omdat ze minder kwetsbaarheden hebben. We implementeren SSL-certificaten, bescherming tegen DDoS-aanvallen, regelmatige veiligheidsupdates, en naleving van PCI DSS-standaarden voor betalingsverwerking. Klantgegevens worden versleuteld opgeslagen en we volgen strikte privacy-richtlijnen conform de AVG/GDPR.",
      category: "security",
      highlight: true
    },
    {
      question: "Kan ik zelf producten toevoegen en beheren?",
      answer: "Zeker, we leveren een gebruiksvriendelijk Content Management Systeem (CMS) waarmee u eenvoudig producten kunt toevoegen, bewerken en verwijderen. U kunt productcategorieën aanpassen, prijzen wijzigen, voorraad beheren en speciale aanbiedingen instellen. Het systeem is intuïtief opgezet en we bieden een uitgebreide training zodat u direct aan de slag kunt. Voor grotere product-updates bieden we ook bulk-import mogelijkheden.",
      category: "features"
    },
    {
      question: "Worden verzendkosten automatisch berekend?",
      answer: "Ja, we integreren dynamische verzendkostencalculaties in uw webshop. Dit kan op basis van gewicht, bestelbedrag, bestemming of een combinatie hiervan. We kunnen koppelingen maken met bekende vervoerders zoals PostNL, DHL, UPS en DPD voor real-time tarieven. Ook ondersteunen we gratis verzending boven een bepaald bestelbedrag, verschillende verzendmethoden (standaard/express) en internationale verzending met bijbehorende douane-informatie.",
      category: "logistics"
    },
    {
      question: "Hoe wordt mijn webshop gevonden in Google?",
      answer: "Onze webshops worden gebouwd met een sterke focus op SEO. Next.js biedt superieure prestaties qua laadsnelheid (een belangrijke ranking-factor). We implementeren technische SEO-elementen zoals structured data, canonical URLs, optimale URL-structuur, sitemap.xml, en meta-informatie. Daarnaast zorgen we voor mobiele optimalisatie, schema markup voor producten, en integratie met Google Shopping. Ook bieden we aanvullende SEO-diensten zoals keyword-optimalisatie en contentcreatie.",
      category: "marketing"
    },
    {
      question: "Kan de webshop worden gekoppeld aan mijn boekhoudsysteem?",
      answer: "Ja, we kunnen uw webshop integreren met populaire boekhoudpakketten zoals Exact, Twinfield, Moneybird, Snelstart, Reeleezee en QuickBooks. Deze koppelingen automatiseren de financiële administratie door facturen, betalingen en BTW-gegevens direct door te sturen naar uw boekhouding. Dit bespaart tijd, vermindert fouten en geeft u real-time inzicht in uw financiële prestaties.",
      category: "features"
    },
    {
      question: "Wat gebeurt er na de oplevering van mijn webshop?",
      answer: "Na oplevering bieden wij verschillende ondersteuningspakketten aan. Standaard krijgt u 2 maanden gratis support voor vragen en kleine aanpassingen. Daarna adviseren we een onderhoudscontract voor technische updates, beveiliging en doorlopende optimalisatie. We bieden ook extra diensten zoals conversie-optimalisatie, A/B-testing, marketingcampagnes en analyse van gebruikersgedrag om uw online verkoop te maximaliseren.",
      category: "development"
    },
    {
      question: "Hoe werkt voorraadmanagement in de webshop?",
      answer: "Onze webshops beschikken over geavanceerd voorraadmanagement. U kunt voorraadniveaus per product en variant bijhouden, automatische waarschuwingen instellen bij lage voorraad, en backorder-functionaliteit activeren. Voor bedrijven met meerdere verkoopkanalen of fysieke winkels bieden we voorraadsynchronisatie om uw voorraad centraal te beheren. We kunnen ook integreren met externe ERP- of WMS-systemen voor volledig geautomatiseerd voorraadbeheer.",
      category: "logistics"
    },
    {
      question: "Kan ik kortingscodes en acties aanmaken?",
      answer: "Absoluut, onze webshops ondersteunen uitgebreide promotiemogelijkheden. U kunt eenvoudig kortingscodes aanmaken met verschillende voorwaarden zoals percentage/vast bedrag korting, minimale bestelwaarde, of beperking tot specifieke productcategorieën. Daarnaast kunt u volumekortingen instellen, 2=1 acties maken, loyalty points introduceren, en tijdgebonden aanbiedingen zoals flash sales of seizoensacties opzetten. Alle promoties zijn volledig aanpasbaar en traceerbaar.",
      category: "marketing",
      highlight: true
    },
    {
      question: "Welke analyses en rapportages krijg ik van de webshop?",
      answer: "We integreren geavanceerde analysetools zoals Google Analytics 4 en implementeren Enhanced E-commerce tracking. Dit geeft u inzicht in bezoekersgedrag, conversiepercentages, omzet per productcategorie, abandonment rates en marketingkanalen. Via een overzichtelijk dashboard krijgt u toegang tot belangrijke KPI's. Optioneel bieden we geavanceerde rapportages zoals cohortanalyses, heatmaps en custom funnel tracking voor diepgaande inzichten in uw webshopprestaties.",
      category: "marketing"
    },
    {
      question: "Is de webshop schaalbaar voor groei?",
      answer: "Onze Next.js webshops zijn specifiek ontworpen met schaalbaarheid als uitgangspunt. De architectuur kan probleemloos meegroeien van enkele tientallen tot duizenden producten en van honderden tot miljoenen bezoekers. De serverless infrastructuur schaalt automatisch mee bij pieken in het verkeer, bijvoorbeeld tijdens marketingcampagnes of seizoensverkopen. Dit zorgt voor consistente prestaties zonder extra kosten voor zwaardere servers.",
      category: "development"
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
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50/30 dark:from-zinc-900 dark:to-indigo-950/20 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-indigo-300 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl opacity-30 dark:opacity-40"></div>
      <div className="absolute top-80 right-0 w-72 h-72 bg-blue-300 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl opacity-30 dark:opacity-40"></div>

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
                  className="absolute inset-0 rounded-full bg-indigo-200 dark:bg-indigo-500/20"
                />
                <div className="relative p-4 bg-white dark:bg-indigo-900 rounded-full shadow-lg">
                  <FaShoppingCart className="text-2xl text-indigo-600 dark:text-indigo-300" />
                </div>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">
              Veelgestelde <span className="text-indigo-600 dark:text-indigo-400">Webshop Vragen</span>
            </h2>
            <p className="text-lg text-zinc-700 dark:text-gray-200 max-w-3xl mx-auto">
              Alles wat u moet weten over onze webshop ontwikkeling, functionaliteiten en service.
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
                    ? "bg-indigo-600 text-white shadow-lg" 
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
                        ? "shadow-xl ring-1 ring-indigo-200 dark:ring-indigo-500/30" 
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
                            ? "bg-gradient-to-r from-indigo-50 to-white dark:from-indigo-900/20 dark:to-zinc-800" 
                            : "bg-white dark:bg-zinc-800"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {isHighlighted && (
                          <span className="inline-flex items-center justify-center shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-300">
                            <FaRegLightbulb />
                          </span>
                        )}
                        <h3 className={`text-lg md:text-xl font-medium ${
                          isOpen 
                            ? "text-indigo-600 dark:text-indigo-300" 
                            : "text-zinc-800 dark:text-white"
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <div className={`flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full ${
                        isOpen 
                          ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300" 
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
                  Probeer een andere categorie of neem contact met ons op voor specifieke webshop vragen.
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
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-10 shadow-xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Klaar om uw webshop project te bespreken?
            </h3>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Laat ons u helpen uw e-commerce doelen te realiseren met een webshop die écht verkoopt. 
              Vraag een vrijblijvend adviesgesprek aan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-white hover:bg-indigo-50 text-indigo-600 font-medium shadow-lg inline-flex items-center justify-center gap-2"
              >
                Gratis adviesgesprek
              </motion.a>
              <motion.a
                href="tel:+31612345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-xl bg-indigo-500/30 hover:bg-indigo-500/40 text-white border border-indigo-400 hover:border-white font-medium inline-flex items-center justify-center gap-2"
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