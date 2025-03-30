"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaStripeS, FaShoppingBag, FaShippingFast, FaSearch, FaMobile, FaLock } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiShopify, SiMongodb, SiWoocommerce, SiPaypal } from "react-icons/si";

export const WebshopTechnologyStack = () => {
  const technologies = [
    {
      name: "Next.js",
      description: "Server-side rendering voor optimale laadtijden en SEO-prestaties",
      icon: <SiNextdotjs className="h-8 w-8" />,
    },
    {
      name: "React",
      description: "Interactieve gebruikersinterfaces met snelle renderingstijden",
      icon: <FaReact className="h-8 w-8" />,
    },
    {
      name: "TypeScript",
      description: "Type-veilige code voor minder bugs en betere onderhoud",
      icon: <SiTypescript className="h-8 w-8" />,
    },
    {
      name: "Tailwind CSS",
      description: "Responsive design met efficiënte prestaties en consistente styling",
      icon: <SiTailwindcss className="h-8 w-8" />,
    },
    {
      name: "Headless CMS",
      description: "Flexibel content management met API-first benadering",
      icon: <SiShopify className="h-8 w-8" />,
    },
    {
      name: "Payment Gateways",
      description: "Veilige betalingsverwerking met meerdere opties",
      icon: <FaStripeS className="h-8 w-8" />,
    },
  ];
  
  const features = [
    {
      title: "Razendsnel Laden",
      description: "Onze webshops laden in minder dan 1 seconde, wat zorgt voor lagere bouncerates en hogere conversies.",
      icon: <FaShippingFast className="h-6 w-6" />,
      color: "#54eff6"
    },
    {
      title: "Zoekmachine Optimalisatie",
      description: "Volledig geoptimaliseerde webshops met server-side rendering voor maximale vindbaarheid in Google.",
      icon: <FaSearch className="h-6 w-6" />,
      color: "#4cfea6"
    },
    {
      title: "Mobile-First Design",
      description: "Onze webshops zijn geoptimaliseerd voor mobiele apparaten, wat resulteert in hogere conversieratio's op smartphones.",
      icon: <FaMobile className="h-6 w-6" />,
      color: "#54eff6"
    },
    {
      title: "Hoogste Beveiliging",
      description: "End-to-end encryptie en compliance met de laatste veiligheidsstandaarden voor betrouwbare transacties.",
      icon: <FaLock className="h-6 w-6" />,
      color: "#f9fa4c"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-800 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block text-zinc-800 dark:text-white">
              De <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54eff6] to-[#4cfea6]">Technologie</span> Achter Onze Webshops
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mt-4">
              Wij bouwen webshops met de meest geavanceerde technologieën voor optimale prestaties,
              schaalbaarheid en een superieure gebruikerservaring die leidt tot hogere conversies.
            </p>
          </motion.div>
        </div>

        {/* Technology Stack */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-zinc-700"
            >
              <div className="flex items-center mb-4">
                <div className="text-[#54eff6] dark:text-[#54eff6] mr-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-800 dark:text-white">{tech.name}</h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-300">
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features & Benefits */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 text-zinc-800 dark:text-white"
          >
            Voordelen van Onze Technische Aanpak
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md flex items-start border border-gray-100 dark:border-zinc-700"
              >
                <div className={`bg-[${feature.color}]/20 dark:bg-[${feature.color}]/30 p-3 rounded-lg mr-4 text-zinc-800 dark:text-[${feature.color}] flex-shrink-0`}
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">{feature.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* SEO-rich content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-[#54eff6]/10 dark:bg-[#54eff6]/10 p-8 rounded-2xl border border-[#54eff6]/20 dark:border-[#54eff6]/30"
        >
          <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">Waarom de technische basis van een webshop zo belangrijk is</h3>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-300">
              De technologie achter een webshop is bepalend voor het succes. Snelle laadtijden hebben een direct effect 
              op conversieratio's - onderzoek toont aan dat elke seconde vertraging in laadtijd resulteert in een 7% lagere conversie.
              Onze Next.js webshops laden gemiddeld in minder dan 0.8 seconden, wat resulteert in conversieverhogingen van 30-60%.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300">
              De mobiele ervaring is cruciaal, met meer dan 70% van alle webshopbezoekers die via smartphones winkelen.
              Onze mobile-first benadering zorgt voor een optimale gebruikservaring op alle apparaten, met speciale aandacht voor 
              checkout-processen en productvisualisaties die zijn geoptimaliseerd voor touchscreens.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300">
              SEO-vriendelijke webshops zijn essentieel voor organische groei. Door implementatie van server-side rendering, 
              gestructureerde data en technische optimalisaties zorgen wij ervoor dat uw webshop uitstekend scoort in zoekmachines, 
              wat resulteert in meer organisch verkeer en lagere acquisitiekosten per klant.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300">
              De schaalbaarheid van onze webshop-architectuur betekent dat uw online winkel probleemloos kan groeien met uw bedrijf, 
              van honderden tot duizenden producten, en van tientallen tot duizenden gelijktijdige gebruikers.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#54eff6] to-[#4cfea6] text-zinc-800 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Plan een vrijblijvend gesprek
          </a>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Ontdek hoe onze technische expertise uw webshop kan transformeren
          </p>
        </motion.div>
      </div>
    </section>
  );
};