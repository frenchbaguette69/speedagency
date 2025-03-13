"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ProjectsShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Luxury Boat Rentals",
      category: "E-commerce",
      description: "Een premium webshop voor het huren van luxe boten, gebouwd met Next.js en geïntegreerd met diverse betaalmethoden.",
      image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
      link: "https://luxuryboatrentals.nl",
      challenges: ["Complexe boekingsmodule", "Realtime beschikbaarheid", "Meerdere valuta ondersteuning"],
      results: ["43% stijging in online boekingen", "2.3x hogere conversieratio", "Laadtijd verbeterd van 4.2s naar 0.8s"],
      testimonial: {
        text: "De nieuwe website heeft onze boekingen dramatisch verhoogd. De gebruikerservaring is uitstekend en alles laadt bliksemsnel.",
        author: "Thomas van der Berg",
        position: "Directeur, Luxury Boat Rentals"
      },
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      title: "GreenLife Organics",
      category: "Webshop",
      description: "Biologische webshop met geavanceerde filterfuncties en een gestroomlijnde checkout ervaring voor betere conversies.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      link: "https://greenlifeorganics.nl",
      challenges: ["Grote productcatalogus", "Complex filtersysteem", "Snelle checkout flow"],
      results: ["67% minder cart abandonment", "128% meer mobiele verkopen", "Organisch verkeer +218%"],
      testimonial: {
        text: "Onze verkopen zijn geëxplodeerd sinds de lancering van de nieuwe site. De snelheid en gebruiksvriendelijkheid maken echt een verschil.",
        author: "Laura Jansen",
        position: "E-commerce Manager, GreenLife"
      },
      gradient: "from-emerald-400 to-teal-600"
    },
    {
      title: "Rotterdam Architectuur Bureau",
      category: "Corporate Website",
      description: "Een visueel indrukwekkende portfolio website met geavanceerde animaties en projectfilters, volledig geoptimaliseerd voor SEO.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      link: "https://rotterdamarchitectuur.nl",
      challenges: ["Grote afbeeldingen portfolio", "Ingewikkelde visuele animaties", "Meertalige ondersteuning"],
      results: ["3x meer leads via contactformulier", "91% hogere tijd op site", "15 nieuwe internationale klanten"],
      testimonial: {
        text: "Onze nieuwe website toont ons portfolio op een manier die we nooit voor mogelijk hadden gehouden. De snelheid en het design zijn fantastisch.",
        author: "Mark de Vries",
        position: "Partner, Rotterdam Architectuur"
      },
      gradient: "from-amber-400 to-orange-600"
    },
    {
      title: "MedPro Health Clinic",
      category: "Healthcare Platform",
      description: "Een gebruiksvriendelijk online zorgplatform met booking-systeem, patiëntenportaal en beveiligde communicatie met medisch personeel.",
      image: "https://images.unsplash.com/photo-1631815587646-b84fab5448c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      link: "https://medpro-health.nl",
      challenges: ["GDPR/AVG compliance", "Complexe afsprakensysteem", "Integratie met zorgsoftware"],
      results: ["58% minder telefonische afspraken", "Patiënttevredenheid gestegen tot 94%", "€120.000 besparing op administratiekosten"],
      testimonial: {
        text: "Het online platform heeft onze workflow getransformeerd. Patiënten zijn enthousiast over het gebruiksgemak en de snelheid.",
        author: "Dr. Annemarie Klaassen",
        position: "Algemeen Directeur, MedPro"
      },
      gradient: "from-purple-400 to-fuchsia-600"
    }
  ];

  // Navigation helpers
  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const project = projects[currentProject];

  return (
    <section className="py-20 overflow-hidden bg-white dark:bg-zinc-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-7xl px-5"
      >
        {/* Header with animated underline */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Onze <span className="text-indigo-600 dark:text-indigo-400">Succesvolle</span> Projecten
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mt-4">
              Bekijk een selectie van projecten die we hebben gerealiseerd met Next.js en ontdek hoe we 
              bedrijven helpen groeien in de digitale wereld.
            </p>
          </motion.div>
        </div>

        {/* Project Showcase with 3D effect */}
        <div className="grid md:grid-cols-12 gap-8 mb-10 relative">
          {/* Large project navigation arrows */}
          <div className="hidden md:flex absolute top-1/2 -left-16 transform -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 shadow-lg flex items-center justify-center"
              aria-label="Vorig project"
            >
              <FaChevronLeft className="text-xl" />
            </motion.button>
          </div>
          <div className="hidden md:flex absolute top-1/2 -right-16 transform -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextProject}
              className="w-12 h-12 rounded-full bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-400 shadow-lg flex items-center justify-center"
              aria-label="Volgend project"
            >
              <FaChevronRight className="text-xl" />
            </motion.button>
          </div>

          {/* Project Image */}
          <motion.div 
            key={`img-${currentProject}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-20`} />
            
            {/* Category badge */}
            <div className="absolute top-6 left-6 z-10">
              <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium shadow-lg`}>
                {project.category}
              </div>
            </div>
            
            {/* View Site link */}
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 rounded-full text-indigo-600 dark:text-indigo-400 shadow-lg font-medium"
              >
                <span>Bekijk Site</span>
                <FaExternalLinkAlt className="text-sm" />
              </motion.div>
            </Link>
            
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Project Details */}
          <motion.div 
            key={`content-${currentProject}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-500" />
                  ))}
                </div>
                <span className="text-zinc-600 dark:text-zinc-300 text-sm">Klanttevredenheid</span>
              </div>
              <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                {project.title}
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-3">Uitdagingen</h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300"
                      >
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        {challenge}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-3">Resultaten</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300"
                      >
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                        {result}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`bg-gradient-to-br ${project.gradient} bg-opacity-10 p-6 rounded-xl relative mt-4`}
            >
              <div className="absolute -top-3 -left-3">
                <FaQuoteLeft className={`text-2xl opacity-50 text-indigo-600 dark:text-indigo-400`} />
              </div>
              <p className="italic text-zinc-700 dark:text-zinc-200 mb-4">
                "{project.testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-zinc-600 dark:to-zinc-500" />
                <div>
                  <p className="font-bold text-zinc-900 dark:text-white">{project.testimonial.author}</p>
                  <p className="text-sm text-zinc-900 dark:text-white">{project.testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile navigation */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProject}
            className="w-12 h-12 rounded-full bg-white dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow"
            aria-label="Vorig project"
          >
            <FaChevronLeft />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProject}
            className="w-12 h-12 rounded-full bg-white dark:bg-zinc-700 border border-gray-200 dark:border-zinc-600 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow"
            aria-label="Volgend project"
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Project navigation indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentProject 
                  ? 'bg-indigo-600 dark:bg-indigo-400 w-6'
                  : 'bg-gray-300 dark:bg-zinc-600'
              }`}
              aria-label={`Ga naar project ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
            Klaar voor uw eigen <span className="text-indigo-600 dark:text-indigo-400">succesverhaal</span>?
          </h3>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
            Laten we samenwerken om uw website naar een hoger niveau te tillen en uw zakelijke doelstellingen te overtreffen.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium shadow-lg transition-all"
            >
              Start uw project
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};