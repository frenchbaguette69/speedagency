"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaPencilRuler, FaCogs, FaChartLine, FaHeadset } from "react-icons/fa";
import Image from "next/image";

export const WebshopWorkflow = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: "Strategie & Planning",
      description: "We bepalen samen de doelen, doelgroep en belangrijkste functionaliteiten van je webshop. Dit vormt de basis voor een succesvol e-commerce platform.",
      icon: <FaPencilRuler className="text-xl" />,
      color: "from-violet-500 to-purple-600",
      darkColor: "dark:from-violet-600 dark:to-purple-800",
      time: "Week 1",
      deliverables: ["Doelgroepanalyse", "Webshop structuur", "Functionele specificaties"]
    },
    {
      number: 2,
      title: "Ontwerp & UX",
      description: "We creëren een visueel aantrekkelijk ontwerp met focus op gebruiksvriendelijkheid en conversie. Elk element wordt geoptimaliseerd voor maximale verkoopkansen.",
      icon: <FaCode className="text-xl" />,
      color: "from-indigo-500 to-blue-600",
      darkColor: "dark:from-indigo-600 dark:to-blue-800",
      time: "Week 1-2",
      deliverables: ["Wireframes", "UI Design", "Mobiele layouts"]
    },
    {
      number: 3,
      title: "Ontwikkeling",
      description: "Met Next.js als basis bouwen we een razendsnel, schaalbaar e-commerce platform. We integreren betaalsystemen, voorraadbeheer en alle gewenste functionaliteiten.",
      icon: <FaCogs className="text-xl" />,
      color: "from-sky-500 to-cyan-600",
      darkColor: "dark:from-sky-600 dark:to-cyan-800",
      time: "Week 2-5",
      deliverables: ["Volledig functionele webshop", "Betalingsintegraties", "CMS implementatie"]
    },
    {
      number: 4,
      title: "Lancering",
      description: "Na uitgebreide testing gaat je nieuwe webshop live. We zorgen voor een soepele overgang en optimaliseren alle technische aspecten voor maximale prestaties.",
      icon: <FaRocket className="text-xl" />,
      color: "from-green-500 to-emerald-600",
      darkColor: "dark:from-green-600 dark:to-emerald-800",
      time: "Week 6",
      deliverables: ["Technische SEO setup", "Analytics configuratie", "Live webshop"]
    },
    {
      number: 5,
      title: "Groei & Optimalisatie",
      description: "Na lancering monitoren we prestaties en optimaliseren continu op basis van klantgedrag en conversiegegevens om verkopen verder te verhogen.",
      icon: <FaChartLine className="text-xl" />,
      color: "from-amber-500 to-orange-600",
      darkColor: "dark:from-amber-600 dark:to-orange-800",
      time: "Doorlopend",
      deliverables: ["Conversie optimalisatie", "A/B testing", "Prestatierapporten"]
    },
    {
      number: 6,
      title: "Support & Doorontwikkeling",
      description: "We blijven je ondersteunen met technische hulp, updates en nieuwe functionaliteiten om je webshop continu te verbeteren en te laten groeien.",
      icon: <FaHeadset className="text-xl" />,
      color: "from-red-500 to-rose-600", 
      darkColor: "dark:from-red-600 dark:to-rose-800",
      time: "Doorlopend",
      deliverables: ["24/7 support", "Beveiligingsupdates", "Nieuwe features"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-zinc-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient blob */}
        <div className="absolute top-1/4 -right-10 w-80 h-80 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
        
        {/* Pattern */}
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-[0.015] dark:opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium mb-4"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-2"
            >
              <FaRocket className="text-sm" />
            </motion.span>
            Ons Bewezen Webshop Process
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-zinc-800 dark:text-white"
          >
            Van <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Concept</span> naar <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Conversies</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-zinc-600 dark:text-zinc-300"
          >
            Ons gestructureerde 6-stappen proces zorgt voor een soepele ontwikkeling van jouw webshop, met focus op snelheid, kwaliteit en resultaat.
          </motion.p>
        </div>

        {/* Main workflow steps */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"
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
                      boxShadow: ["0 0 0 0 rgba(79, 70, 229, 0)", "0 0 0 10px rgba(79, 70, 229, 0.2)", "0 0 0 0 rgba(79, 70, 229, 0)"]
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
                      <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 text-xs font-medium rounded-full">
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
                              className="w-4 h-4 mt-0.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex-shrink-0"
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
                          src="https://images.unsplash.com/photo-1642132652806-8c3ee8f08214?q=80&w=1200&auto=format&fit=crop" 
                          width={400} 
                          height={200} 
                          alt="Strategie planning sessie"
                          className="w-full h-40 object-cover" 
                        />
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="relative p-3 bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700">
                      <div className="p-2 bg-gray-50 dark:bg-zinc-900 rounded-md">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="rounded-md overflow-hidden">
                          <Image 
                            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop" 
                            width={400} 
                            height={200} 
                            alt="Webshop ontwerp"
                            className="w-full h-36 object-cover" 
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="p-3 bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700">
                      <div className="font-mono text-xs text-indigo-600 dark:text-indigo-400 mb-1">
                        components/ProductCard.tsx
                      </div>
                      <div className="bg-gray-50 dark:bg-zinc-900 rounded-md p-3 font-mono text-xs">
                        <div className="text-gray-500 dark:text-gray-400">
                          <span className="text-pink-600 dark:text-pink-400">const</span>{" "}
                          <span className="text-blue-600 dark:text-blue-400">ProductCard</span>{" "}
                          = ({"{"} product {"}"}) {'=>'} {"{"}
                        </div>
                        <div className="pl-4 text-gray-700 dark:text-gray-300">...</div>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700 p-3">
                      <motion.div
                        animate={{ scale: activeStep === index ? [1, 1.05, 1] : 1 }}
                        transition={{ duration: 1.5, repeat: activeStep === index ? Infinity : 0 }}
                        className="flex justify-center"
                      >
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white">
                            <FaRocket className="text-3xl" />
                          </div>
                          <motion.div
                            animate={{ 
                              scale: activeStep === index ? [1, 1.2, 1] : 1,
                              opacity: activeStep === index ? [0.7, 0.2, 0.7] : 0.7
                            }}
                            transition={{ duration: 1.5, repeat: activeStep === index ? Infinity : 0 }}
                            className="absolute inset-0 rounded-full bg-green-500 opacity-40 blur-md -z-10"
                          />
                        </div>
                      </motion.div>
                      <div className="text-center mt-3">
                        <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                          LAUNCH DAY!
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                          Jouw webshop gaat live
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 4 && (
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700 p-3">
                      <div className="mb-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">Conversie Verbetering</div>
                      <div className="bg-gray-50 dark:bg-zinc-900 p-3 rounded-md">
                        <div className="flex items-end h-32 space-x-4">
                          <motion.div 
                            initial={{ height: '30%' }}
                            animate={{ height: activeStep === index ? '45%' : '30%' }}
                            transition={{ duration: 1 }}
                            className="w-6 bg-gray-300 dark:bg-gray-700 rounded-t-md"
                          >
                            <div className="-mt-6 text-[10px] text-center">Voor</div>
                          </motion.div>
                          <motion.div 
                            initial={{ height: '50%' }}
                            animate={{ height: activeStep === index ? '80%' : '50%' }}
                            transition={{ duration: 1 }}
                            className="w-6 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-md"
                          >
                            <div className="-mt-6 text-[10px] text-center">Na</div>
                          </motion.div>
                          <motion.div 
                            initial={{ height: '20%' }}
                            animate={{ height: activeStep === index ? '30%' : '20%' }}
                            transition={{ duration: 1 }}
                            className="w-6 bg-gray-300 dark:bg-gray-700 rounded-t-md"
                          >
                            <div className="-mt-6 text-[10px] text-center">Voor</div>
                          </motion.div>
                          <motion.div 
                            initial={{ height: '35%' }}
                            animate={{ height: activeStep === index ? '65%' : '35%' }}
                            transition={{ duration: 1 }}
                            className="w-6 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-md"
                          >
                            <div className="-mt-6 text-[10px] text-center">Na</div>
                          </motion.div>
                        </div>
                        <div className="w-full h-px bg-gray-300 dark:bg-gray-700 mt-1"></div>
                      </div>
                    </div>
                  )}
                  
                  {index === 5 && (
                    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700 p-3">
                      <div className="flex gap-3 items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center text-white">
                          <FaHeadset className="text-xl" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-800 dark:text-white">24/7 Support</div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">We staan altijd voor je klaar</div>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center">
                        <motion.div
                          animate={activeStep === index ? {
                            width: ['20%', '65%', '35%', '85%'],
                          } : {}}
                          transition={{ duration: 3, repeat: activeStep === index ? Infinity : 0 }}
                          className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                          style={{ width: '55%' }}
                        />
                        <div className="ml-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                          Doorlopend
                        </div>
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
                    <stop stopColor="#6366F1" />
                    <stop offset="1" stopColor="#6366F1" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="paint1_radial_1_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(130)">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
                Klaar om je webshop project te starten?
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 max-w-xl mx-auto">
                Plan een vrijblijvend strategiegesprek en ontdek hoe wij jouw e-commerce ambities kunnen waarmaken.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl shadow-md hover:shadow-xl"
              >
                Strategiegesprek Inplannen
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};