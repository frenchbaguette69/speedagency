"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export const Checklist = () => {
  const benefits = [
    {
      title: "Snelle Oplevering",
      description: "In slechts 5-7 werkdagen een volledig functionele, SEO-geoptimaliseerde website. Terwijl andere bureaus weken of zelfs maanden nodig hebben."
    },
    {
      title: "Persoonlijke Aanpak",
      description: "Één vast contactpersoon gedurende het hele traject voor directe en duidelijke communicatie. Je krijgt geen callcenter of steeds wisselende medewerkers."
    },
    {
      title: "Next.js Technologie",
      description: "We kiezen bewust voor Next.js in plaats van WordPress. Deze moderne technologie zorgt voor snellere laadtijden en betere SEO-scores."
    },
    {
      title: "SEO Vanaf De Basis",
      description: "SEO zit in ons DNA. Elke website wordt gebouwd met Google-rankings in gedachten. We zorgen voor optimale pagina-structuur en technische SEO-fundamenten."
    },
    {
      title: "Volledig Maatwerk",
      description: "Geen kant-en-klare templates, maar websites die perfect aansluiten bij jouw merkidentiteit. We ontwerpen en bouwen alles op maat."
    },
    {
      title: "Resultaatgericht",
      description: "Niet zomaar een website, maar een effectief marketinginstrument dat leads genereert. We focussen op conversie-optimalisatie."
    },
    {
      title: "Transparante Prijzen",
      description: "Geen verborgen kosten of verrassingen achteraf, altijd duidelijke afspraken. Je weet vooraf precies wat je kunt verwachten."
    },
    {
      title: "Langetermijn Ondersteuning",
      description: "Ook na oplevering blijven wij beschikbaar voor ondersteuning en doorontwikkeling. We zien het als het begin van een langdurige samenwerking."
    }
  ];

  return (
    <section className="mt-12 py-20 bg-gray-50 dark:bg-zinc-900">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-7xl px-5"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-zinc-700 dark:text-white">Waarom kiezen voor onze website ontwikkeling?</h2>
        <p className="text-lg text-center text-zinc-500 dark:text-zinc-200 mb-12 max-w-3xl mx-auto">
          Bij het maken van een website is de juiste keuze van technologie en partner cruciaal voor jouw online succes. Wij bieden een moderne aanpak die jouw bedrijf echt vooruit helpt.
        </p>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-5 bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mt-1 flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="bg-indigo-600 rounded-full p-2"
                >
                  <FaCheck className="text-white" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-zinc-700 dark:text-white">{item.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium mb-6 text-zinc-700 dark:text-white">
            Klaar om je website naar een hoger niveau te tillen?
          </p>
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 font-medium text-white shadow-lg transition-colors"
            >
              Neem contact op voor een vrijblijvend gesprek
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};