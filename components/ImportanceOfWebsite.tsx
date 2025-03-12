"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGlobe, FaUsers, FaMobileAlt, FaChartLine, FaCheck } from "react-icons/fa";

export const ImportanceOfWebsite = () => {
  const benefits = [
    {
      icon: <FaGlobe />,
      title: "24/7 Online Aanwezigheid",
      description: "Een website zorgt ervoor dat uw bedrijf altijd bereikbaar is, zelfs buiten kantooruren wanneer potentiële klanten u zoeken."
    },
    {
      icon: <FaUsers />,
      title: "Bereik Een Breder Publiek",
      description: "Vergroot uw geografisch bereik en trek klanten aan die anders nooit van uw bedrijf zouden hebben gehoord."
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobiele Toegankelijkheid",
      description: "Met een responsieve website bereikt u de groeiende groep consumenten die voornamelijk via smartphones online shoppen."
    },
    {
      icon: <FaChartLine />,
      title: "Meet Resultaten & Groei",
      description: "Volg bezoekers, conversies en andere belangrijke gegevens om uw marketingstrategie voortdurend te verbeteren."
    }
  ];

  const statistics = [
    { value: "75%", label: "van consumenten beoordeelt bedrijfsgeloofwaardigheid op basis van webdesign" },
    { value: "88%", label: "van online consumenten keert niet terug na een slechte website-ervaring" },
    { value: "70%", label: "van kleine bedrijven met een website haalt nieuwe klanten binnen via online kanalen" },
    { value: "47%", label: "van gebruikers verwacht dat een webpagina binnen 2 seconden laadt" }
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-7xl px-5"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-zinc-700 dark:text-white">Waarom Een Professionele Website Cruciaal Is</h2>
        <p className="text-lg text-center text-zinc-500 dark:text-zinc-200 mb-16 max-w-3xl mx-auto">
          In het huidige digitale tijdperk is een sterke online aanwezigheid niet langer optioneel, maar essentieel voor bedrijfsgroei en klantvertrouwen.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              alt="Professionele website op verschillende apparaten"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-zinc-700 dark:text-white">Uw Digitale Visitekaartje</h3>
            <p className="text-zinc-500 dark:text-zinc-200 mb-8">
              Een professionele website is vaak het eerste contactpunt tussen uw bedrijf en potentiële klanten. Het is uw 24/7 digitale visitekaartje dat uw merkidentiteit, producten en diensten presenteert aan een wereldwijd publiek.
            </p>
            
            <div className="space-y-4">
              {[
                "Versterk uw merkidentiteit en professionaliteit",
                "Genereer leads en verkopen, zelfs buiten kantooruren",
                "Bouw vertrouwen op bij potentiële klanten",
                "Verbeter uw vindbaarheid via Google en andere zoekmachines",
                "Onderscheid uzelf van concurrenten zonder goede online aanwezigheid"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-indigo-600 dark:text-indigo-400 mt-1"><FaCheck /></span>
                  <p className="text-zinc-600 dark:text-zinc-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-lg shadow-sm"
            >
              <div className="text-indigo-600 dark:text-indigo-400 text-3xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-700 dark:text-white">{benefit.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-indigo-600 rounded-2xl p-10 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Cijfers die voor zich spreken</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};