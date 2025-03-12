"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaLaptopCode, FaRocket, FaChartLine } from "react-icons/fa";
import Image from "next/image";

export const DevelopmentProcess = () => {
  const steps = [
    {
      icon: <FaSearch className="text-white text-xl" />,
      number: "01",
      title: "Analyse & Strategie",
      description: "We beginnen met een grondige analyse van uw bedrijf, doelgroep en concurrenten. Op basis hiervan ontwikkelen we een strategie die aansluit bij uw zakelijke doelstellingen."
    },
    {
      icon: <FaLaptopCode className="text-white text-xl" />,
      number: "02",
      title: "Design & Ontwikkeling",
      description: "Onze designers en ontwikkelaars gaan aan de slag met het bouwen van uw website in Next.js. We zorgen voor een moderne look, snelle laadtijden en optimale gebruikerservaring."
    },
    {
      icon: <FaRocket className="text-white text-xl" />,
      number: "03",
      title: "Lancering & Optimalisatie",
      description: "Na grondige tests lanceren we uw website. We zorgen voor een vlekkeloze overgang en optimaliseren alle technische aspecten voor de beste SEO-resultaten."
    },
    {
      icon: <FaChartLine className="text-white text-xl" />,
      number: "04",
      title: "Analyse & Doorontwikkeling",
      description: "We houden uw website continu in de gaten en analyseren de prestaties. Op basis van data en inzichten blijven we optimaliseren voor betere resultaten."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-7xl px-5"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-zinc-700 dark:text-white">Ons Ontwikkelingsproces</h2>
        <p className="text-lg text-center text-zinc-500 dark:text-zinc-200 mb-16 max-w-3xl mx-auto">
          We volgen een gestructureerde aanpak om ervoor te zorgen dat uw website niet alleen mooi is, maar ook effectief uw zakelijke doelen ondersteunt.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gray-50 dark:bg-zinc-900 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-6 left-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                >
                  {step.icon}
                </motion.div>
              </div>

              <div className="mt-6">
                <span className="text-6xl font-bold text-indigo-100 dark:text-indigo-900/20 absolute right-8 bottom-8">{step.number}</span>
                <h3 className="text-xl font-bold mb-3 text-zinc-700 dark:text-white relative z-10">{step.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-300 relative z-10">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-gray-50 dark:bg-zinc-900 p-8 rounded-xl"
        >
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="Team werkt aan website ontwikkeling"
                width={600}
                height={400}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-zinc-700 dark:text-white">Transparant en Doelgericht</h3>
              <p className="text-zinc-500 dark:text-zinc-300 mb-6">
                Bij elk project houden we u volledig op de hoogte van de voortgang. We werken met duidelijke mijlpalen en deadlines zodat u precies weet waar we staan. Onze focus ligt altijd op het bereiken van uw zakelijke doelstellingen.
              </p>
              <ul className="space-y-3">
                {["Wekelijkse updates over de voortgang", "Duidelijke planning en tijdlijn", "Focus op conversie en resultaat", "Continue verbetering na livegang"].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center text-zinc-600 dark:text-zinc-200"
                  >
                    <span className="mr-2 text-indigo-600 dark:text-indigo-400">✓</span> {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};