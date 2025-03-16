"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaClipboardList, FaCode, FaChartLine, FaLink, FaBullseye } from "react-icons/fa";
import Image from "next/image";

export const SeoWorkflow = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: "SEO Audit & Analyse",
      description: "We beginnen met een grondige analyse van je huidige website, zoekwoorden, concurrentie en marktpositie om de beste strategie te bepalen.",
      icon: <FaSearch className="text-xl" />,
      color: "from-blue-500 to-sky-600",
      darkColor: "dark:from-blue-600 dark:to-sky-800",
      time: "Week 1",
      deliverables: ["Technische SEO audit", "Zoekwoordenanalyse", "Concurrentieonderzoek"]
    },
    {
      number: 2,
      title: "SEO Strategie & Planning",
      description: "Op basis van de analyse ontwikkelen we een op maat gemaakte SEO-strategie met een duidelijk actieplan en tijdlijn voor resultaten.",
      icon: <FaClipboardList className="text-xl" />,
      color: "from-emerald-500 to-green-600",
      darkColor: "dark:from-emerald-600 dark:to-green-800",
      time: "Week 2",
      deliverables: ["SEO roadmap", "Prioriteitenlijst", "KPI-bepaling"]
    },
    {
      number: 3,
      title: "Technische Optimalisatie",
      description: "We verbeteren alle technische aspecten die je ranking beïnvloeden, van laadsnelheid en mobile-first indexing tot structured data en Core Web Vitals.",
      icon: <FaCode className="text-xl" />,
      color: "from-cyan-500 to-teal-600",
      darkColor: "dark:from-cyan-600 dark:to-teal-800",
      time: "Week 2-3",
      deliverables: ["Site-structuur verbetering", "Schema markup", "Indexeerbaarheid optimalisatie"]
    },
    {
      number: 4,
      title: "Content Optimalisatie",
      description: "We optimaliseren bestaande content en creëren nieuwe, SEO-vriendelijke content die zowel gebruikers als zoekmachines aanspreekt.",
      icon: <FaBullseye className="text-xl" />,
      color: "from-purple-500 to-violet-600",
      darkColor: "dark:from-purple-600 dark:to-violet-800",
      time: "Week 3-5",
      deliverables: ["On-page SEO", "Content strategie", "Meta data optimalisatie"]
    },
    {
      number: 5,
      title: "Link Building & Autoriteit",
      description: "We versterken je domeinautoriteit via strategische link building, vermeldingen en partnerschappen om je positie in zoekresultaten te verbeteren.",
      icon: <FaLink className="text-xl" />,
      color: "from-amber-500 to-orange-600",
      darkColor: "dark:from-amber-600 dark:to-orange-800",
      time: "Week 4-8",
      deliverables: ["Backlink strategie", "Autoriteitsopbouw", "Branche partnerschappen"]
    },
    {
      number: 6,
      title: "Monitoring & Optimalisatie",
      description: "We volgen je rankings, verkeer en conversies nauwkeurig en passen de strategie voortdurend aan voor de beste resultaten op korte én lange termijn.",
      icon: <FaChartLine className="text-xl" />,
      color: "from-red-500 to-rose-600", 
      darkColor: "dark:from-red-600 dark:to-rose-800",
      time: "Doorlopend",
      deliverables: ["Maandelijkse rapportages", "Data-gedreven verbeteringen", "ROI tracking"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-zinc-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient blob */}
        <div className="absolute top-1/4 -right-10 w-80 h-80 bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-10 w-72 h-72 bg-cyan-300/20 dark:bg-cyan-600/10 rounded-full blur-3xl" />
        
        {/* Pattern */}
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-[0.015] dark:opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-2"
            >
              <FaSearch className="text-sm" />
            </motion.span>
            Onze Data-Gestuurde SEO Methodiek
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-800 dark:text-white"
          >
            Van <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Onzichtbaar</span> naar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Onmisbaar</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-300"
          >
            Ons 6-stappen SEO proces transformeert je online zichtbaarheid systematisch, met aantoonbare resultaten en duurzame groei in organisch verkeer.
          </motion.p>
        </div>

        {/* Main workflow steps */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"
            style={{ top: '40px', bottom: '40px' }}
          />
          
          {/* Timeline steps */}
          <div className="relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className="relative mb-16 last:mb-0"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Timeline node */}
                  <motion.div
                    animate={activeStep === index ? {
                      scale: [1, 1.2, 1],
                      boxShadow: ["0 0 0 0 rgba(37, 99, 235, 0)", "0 0 0 10px rgba(37, 99, 235, 0.2)", "0 0 0 0 rgba(37, 99, 235, 0)"]
                    } : {}}
                    transition={{ duration: 1.5, repeat: activeStep === index ? Infinity : 0 }}
                    className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-6 md:mb-0 flex-shrink-0`}
                  >
                    <span className="text-xl font-bold">{step.number}</span>
                    
                    {/* Icon that shows on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: activeStep === index ? 1 : 0, scale: activeStep === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-full"
                    >
                      <div className={`text-transparent bg-clip-text bg-gradient-to-br ${step.color}`}>
                        {step.icon}
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Content card */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-10' : 'md:mr-10'}`}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className={`bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-zinc-700 relative overflow-hidden`}
                    >
                      {/* Tag showing timing */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-xs font-medium rounded-full">
                        {step.time}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-zinc-800 dark:text-white">{step.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-4">{step.description}</p>
                      
                      {/* Deliverables */}
                      <div className="space-y-2">
                        {step.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <motion.div
                              animate={{ scale: activeStep === index ? [1, 1.2, 1] : 1 }}
                              transition={{ duration: 0.4, repeat: activeStep === index ? Infinity : 0, repeatDelay: 0.5 }}
                              className="w-4 h-4 mt-0.5 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex-shrink-0"
                            />
                            <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Bottom decoration */}
                      <div className={`absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r ${step.color}`} />
                    </motion.div>
                  </div>
                </div>
                
                {/* Step visualization */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`hidden md:block absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-5/12`}
                >
                  {index === 0 && (
                    <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700 relative overflow-hidden">
                      <div className="rounded-md overflow-hidden">
                        <Image 
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                          width={400} 
                          height={200} 
                          alt="SEO audit en analyse"
                          className="w-full h-40 object-cover" 
                        />
                      </div>
                      <div className="mt-2 px-1">
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                        <div className="mt-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="relative p-3 bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700">
                      <div className="p-3 bg-gray-50 dark:bg-zinc-900 rounded-md">
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-sm font-medium text-zinc-800 dark:text-white">SEO Roadmap</div>
                          <div className="text-xs text-blue-600 dark:text-blue-400">Q1-Q2</div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <div className="w-1/4 text-xs text-zinc-500 dark:text-zinc-400">Week 1-2</div>
                            <div className="w-3/4 h-4 bg-blue-100 dark:bg-blue-900/40 rounded-sm relative">
                              <div className="absolute inset-0 flex items-center justify-center text-[9px] font-medium text-blue-700 dark:text-blue-300">
                                Technische SEO
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1/4 text-xs text-zinc-500 dark:text-zinc-400">Week 3-6</div>
                            <div className="w-3/4 h-4 bg-cyan-100 dark:bg-cyan-900/40 rounded-sm relative">
                              <div className="absolute inset-0 flex items-center justify-center text-[9px] font-medium text-cyan-700 dark:text-cyan-300">
                                Content Optimalisatie
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1/4 text-xs text-zinc-500 dark:text-zinc-400">Week 6-12</div>
                            <div className="w-3/4 h-4 bg-emerald-100 dark:bg-emerald-900/40 rounded-sm relative">
                              <div className="absolute inset-0 flex items-center justify-center text-[9px] font-medium text-emerald-700 dark:text-emerald-300">
                                Link Building
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="p-3 bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700">
                      <div className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-1">
                        site/structured-data.json
                      </div>
                      <div className="bg-gray-50 dark:bg-zinc-900 rounded-md p-3 font-mono text-xs">
                        <div className="text-gray-500 dark:text-gray-400">
                          <span className="text-pink-600 dark:text-pink-400">{"{"}</span>
                        </div>
                        <div className="pl-4 text-gray-700 dark:text-gray-300">
                          <span className="text-green-600 dark:text-green-400">"@context"</span>: 
                          <span className="text-blue-600 dark:text-blue-400">"https://schema.org"</span>,
                        </div>
                        <div className="pl-4 text-gray-700 dark:text-gray-300">
                          <span className="text-green-600 dark:text-green-400">"@type"</span>: 
                          <span className="text-blue-600 dark:text-blue-400">"Organization"</span>,
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 pl-4">...</div>
                        <div className="text-pink-600 dark:text-pink-400">{"}"}</div>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700 p-3">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="flex-shrink-0 w-4 h-4 mt-1 rounded-full bg-gradient-to-r from-purple-500 to-violet-600"></div>
                        <div>
                          <div className="text-sm font-medium text-zinc-800 dark:text-white">Content Optimalisatie</div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">Keyword density, Headers & Meta data</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-zinc-900 p-3 rounded-md">
                        <div className="text-sm font-bold text-zinc-800 dark:text-white">Optimalisatie Voorbeeld</div>
                        <div className="mt-2 flex gap-2">
                          <div className="flex-1">
                            <div className="text-xs font-medium text-red-600 dark:text-red-400 mb-1">Oude Titel</div>
                            <div className="p-1.5 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded text-xs text-zinc-600 dark:text-zinc-300">
                              Onze diensten en producten pagina
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Nieuwe Titel</div>
                            <div className="p-1.5 bg-white dark:bg-zinc-800 border border-green-200 dark:border-green-900/40 rounded text-xs text-zinc-600 dark:text-zinc-300">
                              SEO Services: Verhoog uw Google Rankings | Keyword
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 4 && (
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700 p-3">
                      <div className="mb-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">Domein Autoriteit</div>
                      <div className="bg-gray-50 dark:bg-zinc-900 p-3 rounded-md">
                        <div className="mb-1 text-sm font-medium flex items-center justify-between">
                          <span className="text-zinc-700 dark:text-zinc-300">Autoriteit Score</span>
                          <span className="text-amber-600 dark:text-amber-400">
                            <motion.span
                              animate={activeStep === index ? { opacity: [1, 0, 1] } : {}}
                              transition={{ duration: 1, repeat: activeStep === index ? 3 : 0 }}
                            >
                              +12
                            </motion.span>
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <motion.div 
                            initial={{ width: '30%' }}
                            animate={{ width: activeStep === index ? '65%' : '30%' }}
                            transition={{ duration: 1.5 }}
                            className="h-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600"
                          />
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-1 text-[10px]">
                          <div className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 p-1 rounded text-center">
                            <div className="font-medium text-zinc-800 dark:text-white">24</div>
                            <div className="text-zinc-500 dark:text-zinc-400">Backlinks</div>
                          </div>
                          <div className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 p-1 rounded text-center">
                            <div className="font-medium text-zinc-800 dark:text-white">18</div>
                            <div className="text-zinc-500 dark:text-zinc-400">Referring Domains</div>
                          </div>
                          <div className="bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 p-1 rounded text-center">
                            <div className="font-medium text-zinc-800 dark:text-white">42</div>
                            <div className="text-zinc-500 dark:text-zinc-400">DA Score</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 5 && (
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700 p-3">
                      <div className="mb-2 text-xs font-medium text-zinc-800 dark:text-white">SEO Performance Metrics</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 bg-gray-50 dark:bg-zinc-900 rounded">
                          <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-1">Organisch Verkeer</div>
                          <div className="flex items-end">
                            <motion.div
                              animate={activeStep === index ? {
                                y: [0, -5, 0],
                              } : {}}
                              transition={{ duration: 1, repeat: activeStep === index ? Infinity : 0 }}
                              className="text-lg font-bold text-green-600 dark:text-green-400"
                            >
                              +213%
                            </motion.div>
                            <svg className="ml-1 h-3 w-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="p-2 bg-gray-50 dark:bg-zinc-900 rounded">
                          <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-1">Positie Keywords</div>
                          <div className="flex items-center">
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">Top 3</div>
                            <div className="ml-1 px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded text-[9px] font-medium text-blue-700 dark:text-blue-300">
                              +8
                            </div>
                          </div>
                        </div>
                        
                        <motion.div 
                          initial={{ height: '20px' }}
                          animate={{ height: activeStep === index ? '40px' : '20px' }}
                          transition={{ duration: 1 }}
                          className="col-span-2 p-2 bg-gray-50 dark:bg-zinc-900 rounded"
                        >
                          <div className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-1">Conversies</div>
                          <div className="flex items-center gap-2">
                            <motion.div
                              animate={{ 
                                width: activeStep === index ? ['30%', '70%', '50%'] : '50%',
                              }}
                              transition={{ duration: 2, repeat: activeStep === index ? Infinity : 0 }}
                              className="h-2 bg-gradient-to-r from-red-500 to-rose-600 rounded-full"
                              style={{ width: '50%' }}
                            />
                            <div className="text-xs font-medium text-rose-600 dark:text-rose-400">
                              48 leads
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700 p-8 max-w-3xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.2">
                  <circle cx="130" cy="130" r="130" fill="url(#paint0_radial_1_2)" />
                  <circle cx="250" cy="250" r="130" fill="url(#paint1_radial_1_2)" />
                </g>
                <defs>
                  <radialGradient id="paint0_radial_1_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(130 130) rotate(90) scale(130)">
                    <stop stopColor="#2563EB" />
                    <stop offset="1" stopColor="#2563EB" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="paint1_radial_1_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(130)">
                    <stop stopColor="#0891B2" />
                    <stop offset="1" stopColor="#0891B2" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
                Klaar om je online zichtbaarheid te verbeteren?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 max-w-xl mx-auto">
                Vraag een gratis SEO-scan aan en ontdek hoe wij jouw website naar de top van Google kunnen brengen.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl shadow-md hover:shadow-xl"
              >
                Gratis SEO-scan Aanvragen
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};