"use client";

import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaShoppingCart, FaSearch, FaMobileAlt, FaChartLine } from "react-icons/fa";

export const WebshopProjectsShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);

  const projects = [
    {
      title: "Deluxe Watches",
      category: "Luxury E-commerce",
      description: "Premium horlogewebshop met geavanceerde productconfiguratie en een naadloze checkout-ervaring voor high-end klanten.",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      link: "https://deluxewatches.nl",
      challenges: ["Complexe productconfiguratie", "Hoge-resolutie productvisualisatie", "VIP klantenportaal"],
      results: ["156% stijging in gemiddelde orderwaarde", "29% hogere conversie op mobiel", "Laadtijd verbeterd van 3.8s naar 0.6s"],
      metrics: {
        conversionRate: {
          before: 1.2,
          after: 3.4,
          unit: "%"
        },
        salesRevenue: {
          before: 45000,
          after: 115000,
          unit: "€"
        },
        averageOrder: {
          before: 290,
          after: 745,
          unit: "€"
        },
        mobileUsage: {
          before: 32,
          after: 58,
          unit: "%"
        }
      },
      testimonial: {
        text: "De nieuwe webshop heeft onze online verkoop compleet getransformeerd. De snelheid en visuele ervaring zijn fenomenaal, en de conversie is enorm gestegen.",
        author: "Jonathan de Vries",
        position: "CEO, Deluxe Watches",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      gradient: "from-blue-500 to-indigo-700",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/30",
      iconColor: "text-indigo-600 dark:text-indigo-400",
      icon: <FaShoppingCart />
    },
    {
      title: "EcoFashion Collective",
      category: "Duurzame Mode",
      description: "Schaalbaar e-commerce platform voor milieubewuste modemerken met geavanceerde filterfuncties en inzichtelijke duurzaamheidsscores.",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      link: "https://ecofashioncollective.nl",
      challenges: ["Complexe productfiltering", "Meerdere verkopers platform", "Duurzaamheidslabels integratie"],
      results: ["217% stijging in organisch verkeer", "62% minder winkelwagenverlating", "4.2x meer terugkerende klanten"],
      metrics: {
        conversionRate: {
          before: 1.7,
          after: 4.5,
          unit: "%"
        },
        salesRevenue: {
          before: 28000,
          after: 86000,
          unit: "€"
        },
        averageOrder: {
          before: 115,
          after: 195,
          unit: "€"
        },
        mobileUsage: {
          before: 48,
          after: 73,
          unit: "%"
        }
      },
      testimonial: {
        text: "Onze webshop presteert nu boven alle verwachtingen. De combinatie van snelheid, gebruiksgemak en duurzaamheidsfocus heeft onze klantenbinding compleet veranderd.",
        author: "Lieke Martens",
        position: "Oprichter, EcoFashion Collective",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      gradient: "from-emerald-500 to-teal-700",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/30",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      icon: <FaSearch />
    },
    {
      title: "TechGadgets Pro",
      category: "Electronics",
      description: "Hightech electronics webshop met interactieve productdemonstraties, geavanceerde vergelijkingstools en razendsnelle checkout.",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      link: "https://techgadgetspro.nl",
      challenges: ["Groot productassortiment", "Complex vergelijkingssysteem", "Gedetailleerde productspecificaties"],
      results: ["187% meer conversies op mobiel", "€250+ stijging in gemiddelde orderwaarde", "42% daling in ondersteuningstickets"],
      metrics: {
        conversionRate: {
          before: 2.1,
          after: 5.8,
          unit: "%"
        },
        salesRevenue: {
          before: 124000,
          after: 378000,
          unit: "€"
        },
        averageOrder: {
          before: 430,
          after: 680,
          unit: "€"
        },
        mobileUsage: {
          before: 38,
          after: 68,
          unit: "%"
        }
      },
      testimonial: {
        text: "Sinds de lancering van onze Next.js webshop hebben we een exponentiële groei gezien in onze mobiele verkoop. De site is bliksemsnel en klanten waarderen de naadloze ervaring.",
        author: "Martijn Klaassen",
        position: "E-commerce Director, TechGadgets",
        avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      gradient: "from-amber-500 to-orange-700",
      bgColor: "bg-amber-50 dark:bg-amber-900/30",
      iconColor: "text-amber-600 dark:text-amber-400",
      icon: <FaMobileAlt />
    },
    {
      title: "HealthEssentials",
      category: "Health & Wellness",
      description: "Geoptimaliseerde webshop voor gezondheidsproducten met AI-gestuurde aanbevelingen en gepersonaliseerde klantreizen.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      link: "https://healthessentials.nl",
      challenges: ["Gepersonaliseerde productaanbevelingen", "Abonnementsmodel integratie", "Complexe korting- en loyaliteitssystemen"],
      results: ["324% stijging in terugkerende aankopen", "58% hogere click-through rate", "12.5k nieuwe klanten in eerste kwartaal"],
      metrics: {
        conversionRate: {
          before: 1.8,
          after: 4.7,
          unit: "%"
        },
        salesRevenue: {
          before: 65000,
          after: 210000,
          unit: "€"
        },
        averageOrder: {
          before: 85,
          after: 135,
          unit: "€"
        },
        mobileUsage: {
          before: 52,
          after: 76,
          unit: "%"
        }
      },
      testimonial: {
        text: "De webshop prestaties overtreffen al onze verwachtingen. De gepersonaliseerde aanbevelingen genereren significant hogere herhalingsaankopen en klantloyaliteit.",
        author: "Sophie Bakker",
        position: "Marketing Director, HealthEssentials",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      gradient: "from-purple-500 to-fuchsia-700",
      bgColor: "bg-purple-50 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
      icon: <FaChartLine />
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
    conversionRate: MetricValue;
    salesRevenue: MetricValue;
    averageOrder: MetricValue;
    mobileUsage: MetricValue;
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

  return (
    <section className="py-24 overflow-hidden bg-white dark:bg-zinc-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-200/30 dark:bg-indigo-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-200/10 dark:bg-blue-800/5 rounded-full blur-3xl" />
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
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
              <FaShoppingCart className="mr-2" /> Webshop Projecten
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
              Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">E-commerce</span> Succesverhalen
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mt-4">
              Bekijk hoe we webshops hebben getransformeerd tot krachtige verkoopinstrumenten met superieure 
              prestaties, hogere conversies en uitzonderlijke klantervaring.
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
              className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-lg flex items-center justify-center border border-gray-100 dark:border-zinc-700"
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
              className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-lg flex items-center justify-center border border-gray-100 dark:border-zinc-700"
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
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 rounded-full text-indigo-600 dark:text-indigo-400 shadow-lg font-medium"
                >
                  <span>Bekijk Webshop</span>
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
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Conversie</p>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{project.metrics.conversionRate.after}{project.metrics.conversionRate.unit}</span>
                            <span className="text-green-500 text-sm ml-2">+{calculateImprovement(project.metrics.conversionRate.before, project.metrics.conversionRate.after)}%</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Gem. Order</p>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{project.metrics.averageOrder.after}{project.metrics.averageOrder.unit}</span>
                            <span className="text-green-500 text-sm ml-2">+{calculateImprovement(project.metrics.averageOrder.before, project.metrics.averageOrder.after)}%</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Omzet/mnd</p>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{project.metrics.salesRevenue.after}{project.metrics.salesRevenue.unit}</span>
                            <span className="text-green-500 text-sm ml-2">+{calculateImprovement(project.metrics.salesRevenue.before, project.metrics.salesRevenue.after)}%</span>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-sm">
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">Mobiel Gebruik</p>
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold">{project.metrics.mobileUsage.after}{project.metrics.mobileUsage.unit}</span>
                            <span className="text-green-500 text-sm ml-2">+{calculateImprovement(project.metrics.mobileUsage.before, project.metrics.mobileUsage.after)}%</span>
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
            className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-md flex items-center justify-center border border-gray-100 dark:border-zinc-700 mx-2"
          >
            <FaChevronLeft className="text-lg" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextProject}
            className="w-10 h-10 rounded-full bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-md flex items-center justify-center border border-gray-100 dark:border-zinc-700 mx-2"
          >
            <FaChevronRight className="text-lg" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}