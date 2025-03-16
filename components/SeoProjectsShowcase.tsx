"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaSearch, FaGlobe, FaChartLine, FaStore } from "react-icons/fa";

export const SeoProjectsShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);

  const projects = [
    {
      title: "TravelWorld Tours",
      category: "Travel & Tourism",
      description: "Complete SEO transformatie voor een internationale reisorganisatie, met focus op lokale SEO en meertalige content strategie.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      link: "https://travelworldtours.nl",
      challenges: ["Zeer competitieve branche", "Meertalige SEO-optimalisatie", "Lokale zoekintentie per regio"],
      results: ["312% meer organisch verkeer", "Top 3 posities voor 85+ zoekwoorden", "68% lagere acquisitiekosten"],
      metrics: {
        organicTraffic: {
          before: 8500,
          after: 35000,
          unit: ""
        },
        keywordRankings: {
          before: 12,
          after: 85,
          unit: ""
        },
        conversionRate: {
          before: 1.8,
          after: 4.2,
          unit: "%"
        },
        bounceRate: {
          before: 67,
          after: 32,
          unit: "%"
        }
      },
      testimonial: {
        text: "De SEO-strategie die SpeedAgency voor ons heeft ontwikkeld heeft onze online zichtbaarheid compleet getransformeerd. We ranken nu voor zoekwoorden waar we voorheen alleen van konden dromen.",
        author: "Thomas van Meer",
        position: "Marketing Director, TravelWorld Tours",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      gradient: "from-blue-500 to-cyan-700",
      bgColor: "bg-blue-50 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      icon: <FaGlobe />
    },
    {
      title: "MediCare Solutions",
      category: "Healthcare",
      description: "Strategische SEO campagne voor een groeiende zorgaanbieder, gericht op hoog-concurrerende medische zoektermen en lokale patiëntwerving.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      link: "https://medicaresolutions.nl",
      challenges: ["YMYL content optimalisatie", "Lokale SEO voor 12 vestigingen", "Mobiele gebruikerservaring verbeteren"],
      results: ["285% stijging in organische leads", "93% meer afspraken online", "Top positie voor alle vestigingen in Google Maps"],
      metrics: {
        organicTraffic: {
          before: 12000,
          after: 45000,
          unit: ""
        },
        keywordRankings: {
          before: 23,
          after: 97,
          unit: ""
        },
        conversionRate: {
          before: 1.4,
          after: 3.9,
          unit: "%"
        },
        bounceRate: {
          before: 72,
          after: 28,
          unit: "%"
        }
      },
      testimonial: {
        text: "Door de data-gedreven SEO-aanpak hebben we nu een constante stroom nieuwe patiënten via Google. De ROI op deze investering heeft al onze verwachtingen overtroffen.",
        author: "Emma Janssen",
        position: "CEO, MediCare Solutions",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      gradient: "from-green-500 to-emerald-700",
      bgColor: "bg-green-50 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
      icon: <FaSearch />
    },
    {
      title: "TechVision Pro",
      category: "SaaS Company",
      description: "Technische SEO implementatie en contentmarketing voor een B2B SaaS-platform, gericht op het genereren van hoogwaardige leads in de zakelijke IT-sector.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      link: "https://techvisionpro.nl",
      challenges: ["Complexe technische SEO issues", "Zeer niche B2B markt", "Lange verkoopfunnel optimaliseren"],
      results: ["257% meer organische leads", "46% lagere cost-per-acquisition", "8x meer conversies uit blog content"],
      metrics: {
        organicTraffic: {
          before: 5400,
          after: 22800,
          unit: ""
        },
        keywordRankings: {
          before: 18,
          after: 64,
          unit: ""
        },
        conversionRate: {
          before: 1.2,
          after: 3.8,
          unit: "%"
        },
        bounceRate: {
          before: 78,
          after: 34,
          unit: "%"
        }
      },
      testimonial: {
        text: "Niet alleen zijn onze organische rankings enorm verbeterd, maar we zien dat de kwaliteit van leads via SEO veel beter is. De conversie naar klanten is aanzienlijk hoger dan bij onze betaalde campagnes.",
        author: "David Klaassen",
        position: "Growth Manager, TechVision Pro",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      gradient: "from-indigo-500 to-purple-700",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      icon: <FaChartLine />
    },
    {
      title: "Urban Fashion Club",
      category: "E-commerce Retail",
      description: "E-commerce SEO optimalisatie voor een snelgroeiende mode webshop, met focus op productpagina optimalisatie en technische performance.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      link: "https://urbanfashionclub.nl",
      challenges: ["Grote productcatalogus optimaliseren", "Seasonale zoektermen targeten", "Mobile-first indexing issues"],
      results: ["342% meer organische verkopen", "75% verbetering in Core Web Vitals", "18.6k nieuwe organische bezoekers per maand"],
      metrics: {
        organicTraffic: {
          before: 22000,
          after: 89000,
          unit: ""
        },
        keywordRankings: {
          before: 34,
          after: 176,
          unit: ""
        },
        conversionRate: {
          before: 1.6,
          after: 3.5,
          unit: "%"
        },
        bounceRate: {
          before: 62,
          after: 24,
          unit: "%"
        }
      },
      testimonial: {
        text: "De technische SEO-verbeteringen hebben onze pagina's razendsnel gemaakt en Google beloont ons daar duidelijk voor. De combinatie met strategische content heeft onze organische verkopen meer dan verdrievoudigd.",
        author: "Lisa Bergman",
        position: "E-commerce Director, Urban Fashion Club",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      gradient: "from-pink-500 to-rose-700",
      bgColor: "bg-pink-50 dark:bg-pink-900/30",
      iconColor: "text-pink-600 dark:text-pink-400",
      icon: <FaStore />
    }
  ];

  // Navigation helpers
  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setShowMetrics(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setShowMetrics(false);
  };

  const project = projects[currentProject];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  // Calculate metrics improvements
  interface MetricValue {
    before: number;
    after: number;
    unit: string;
  }

  interface ProjectMetrics {
    organicTraffic: MetricValue;
    keywordRankings: MetricValue;
    conversionRate: MetricValue;
    bounceRate: MetricValue;
  }

  interface Testimonial {
    text: string;
    author: string;
    position: string;
    avatar: string;
  }

  interface Project {
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
    challenges: string[];
    results: string[];
    metrics: ProjectMetrics;
    testimonial: Testimonial;
    gradient: string;
    bgColor: string;
    iconColor: string;
    icon: ReactNode;
  }

  const calculateImprovement = (before: number, after: number): string => {
    const percent = ((after - before) / before) * 100;
    return percent.toFixed(0);
  };

  const calculateImprovement2 = (before: number, after: number): string => {
    // For metrics where lower is better, like bounce rate
    const percent = ((before - after) / before) * 100;
    return percent.toFixed(0);
  };

  return (
    <section className="py-24 overflow-hidden bg-white dark:bg-zinc-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-200/20 dark:bg-cyan-800/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-200/10 dark:bg-indigo-800/5 rounded-full blur-3xl" />
      </div>

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
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              <FaSearch className="mr-2" /> SEO Projecten
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">SEO</span> Succesverhalen
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mt-4">
              Ontdek hoe onze data-gedreven SEO-strategieën organisaties hebben geholpen om hun organische zichtbaarheid
              drastisch te verbeteren, meer kwalitatief verkeer aan te trekken en conversies te verhogen.
            </p>
          </motion.div>
        </div>

        {/* Project Showcase with metrics toggle */}
        <div className="grid md:grid-cols-12 gap-8 mb-10 relative">
          {/* Large project navigation arrows */}
          <div className="hidden md:flex absolute top-1/2 -left-16 transform -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevProject}
              className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-lg flex items-center justify-center border border-gray-100 dark:border-zinc-700"
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
              className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-lg flex items-center justify-center border border-gray-100 dark:border-zinc-700"
              aria-label="Volgend project"
            >
              <FaChevronRight className="text-xl" />
            </motion.button>
          </div>

          {/* Project Image with interactive elements */}
          <motion.div 
            key={`img-${currentProject}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl group"
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
            
            {/* Device frame effect */}
            <div className="absolute inset-0 border-[12px] border-white dark:border-zinc-800 rounded-3xl shadow-inner z-10" />
            
            {/* Browser UI */}
            <div className="absolute top-0 left-0 right-0 h-9 bg-gray-100 dark:bg-zinc-800 z-20 flex items-center px-4 rounded-t-2xl">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mx-auto px-20 py-1 bg-white dark:bg-zinc-700 rounded-full text-xs text-zinc-600 dark:text-zinc-300 flex items-center justify-center">
                <span className="truncate">{project.link}</span>
              </div>
            </div>
            
            {/* Category badge */}
            <div className="absolute top-16 left-6 z-20">
              <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} text-white text-sm font-medium shadow-lg flex items-center gap-2`}>
                <span className="text-white">{project.icon}</span>
                {project.category}
              </div>
            </div>
            
            {/* Interactive hover layer */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 rounded-full text-blue-600 dark:text-blue-400 shadow-lg font-medium"
                >
                  <span>Bekijk Website</span>
                  <FaExternalLinkAlt className="text-sm" />
                </motion.div>
              </Link>
            </div>
            
            {/* Site image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover mt-9"
              priority
            />
          </motion.div>

          {/* Project Details - Right side */}
          <motion.div
            key={`details-${currentProject}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col justify-between"
          >
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentProject}`}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`rounded-xl p-6 ${project.bgColor}`}
                >
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-300 mb-6">{project.description}</p>

                  {/* Toggle between challenges and metrics */}
                  <div className="flex mb-6">
                    <button
                      onClick={() => setShowMetrics(false)}
                      className={`flex-1 py-2 px-4 rounded-l-lg ${!showMetrics ? 'bg-gradient-to-r ' + project.gradient + ' text-white' : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'}`}
                    >
                      Uitdagingen
                    </button>
                    <button
                      onClick={() => setShowMetrics(true)}
                      className={`flex-1 py-2 px-4 rounded-r-lg ${showMetrics ? 'bg-gradient-to-r ' + project.gradient + ' text-white' : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'}`}
                    >
                      Resultaten
                    </button>
                  </div>

                  {/* Content based on toggle */}
                  {!showMetrics ? (
                    <div className="mb-4 space-y-3">
                      <h4 className="font-semibold text-lg mb-2">Uitdagingen</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className={`p-1 rounded-full ${project.iconColor} bg-white dark:bg-zinc-800 mr-3 mt-1`}>
                              <FaStar className="h-3 w-3" />
                            </div>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <h4 className="font-semibold text-lg mb-4">Resultaten</h4>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Organisch Verkeer</p>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{project.metrics.organicTraffic.after}</span>
                            <span className="text-green-500 text-sm ml-2">+{calculateImprovement(project.metrics.organicTraffic.before, project.metrics.organicTraffic.after)}%</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Top 10 Keywords</p>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{project.metrics.keywordRankings.after}</span>
                            <span className="text-green-500 text-sm ml-2">+{calculateImprovement(project.metrics.keywordRankings.before, project.metrics.keywordRankings.after)}%</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Conversie</p>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{project.metrics.conversionRate.after}{project.metrics.conversionRate.unit}</span>
                            <span className="text-green-500 text-sm ml-2">+{calculateImprovement(project.metrics.conversionRate.before, project.metrics.conversionRate.after)}%</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Bounce Rate</p>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{project.metrics.bounceRate.after}{project.metrics.bounceRate.unit}</span>
                            <span className="text-green-500 text-sm ml-2">-{calculateImprovement2(project.metrics.bounceRate.before, project.metrics.bounceRate.after)}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Testimonial */}
            <motion.div 
              key={`testimonial-${currentProject}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md"
            >
              <FaQuoteLeft className={`${project.iconColor} mb-3`} />
              <p className="italic mb-4 text-zinc-600 dark:text-zinc-300">{project.testimonial.text}</p>
              <div className="flex items-center">
                <Image 
                  src={project.testimonial.avatar} 
                  alt={project.testimonial.author} 
                  width={40} 
                  height={40}
                  className="rounded-full mr-3 object-cover" 
                />
                <div>
                  <p className="font-semibold">{project.testimonial.author}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{project.testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile navigation controls */}
        <div className="flex justify-center mt-8 md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevProject}
            className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-md flex items-center justify-center border border-gray-100 dark:border-zinc-700 mx-2"
          >
            <FaChevronLeft className="text-lg" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProject}
            className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-md flex items-center justify-center border border-gray-100 dark:border-zinc-700 mx-2"
          >
            <FaChevronRight className="text-lg" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};