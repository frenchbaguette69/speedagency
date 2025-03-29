"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaLaptopCode, FaRocket, FaChartLine } from "react-icons/fa";
import Image from "next/image";

export const DevelopmentProcess = () => {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const steps = [
    {
      icon: <FaSearch className="text-white text-xl" />,
      number: "01",
      title: "Analyse & Strategie",
      description: "We beginnen met een grondige analyse van uw bedrijf, doelgroep en concurrenten om een effectieve strategie te ontwikkelen.",
      color: "#54eff6", // Cyan
      deliverables: ["Doelgroepanalyse", "Website structuur", "SEO strategie"]
    },
    {
      icon: <FaLaptopCode className="text-white text-xl" />,
      number: "02",
      title: "Design & Ontwikkeling",
      description: "Onze ontwikkelaars bouwen uw website met Next.js voor een moderne uitstraling en snelle laadtijden.",
      color: "#4cfea6", // Green
      deliverables: ["Responsive ontwerp", "Performance optimalisatie", "SEO implementatie"]
    },
    {
      icon: <FaRocket className="text-white text-xl" />,
      number: "03",
      title: "Lancering & Optimalisatie",
      description: "Na grondige tests lanceren we uw website en zorgen we voor een vlekkeloze overgang.",
      color: "#f9fa4c", // Yellow
      deliverables: ["Technische tests", "Content plaatsing", "Analytics setup"]
    },
    {
      icon: <FaChartLine className="text-white text-xl" />,
      number: "04",
      title: "Analyse & Doorontwikkeling",
      description: "We blijven uw website optimaliseren op basis van data en inzichten voor betere resultaten.",
      color: "#54eff6", // Cyan (cycling back)
      deliverables: ["Prestatie rapporten", "SEO optimalisatie", "Nieuwe features"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-zinc-800">
      <div className="container mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-zinc-700 dark:text-white">Ons Ontwikkelingsproces</h2>
          <p className="text-lg text-center text-zinc-500 dark:text-zinc-200 mb-16 max-w-3xl mx-auto">
            We volgen een gestructureerde aanpak om ervoor te zorgen dat uw website niet alleen mooi is, maar ook effectief uw zakelijke doelen ondersteunt.
          </p>
        </motion.div>

        {/* Timeline workflow */}
        <div className="relative mx-auto max-w-5xl">
          {/* Center line */}
          {mounted && (
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#54eff6] to-[#4cfea6] rounded-full"
              style={{ top: '40px', bottom: '40px' }}
            />
          )}
          
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
                    animate={activeStep === index && mounted ? {
                      scale: [1, 1.2, 1],
                      boxShadow: ["0 0 0 0 rgba(84, 239, 246, 0)", "0 0 0 10px rgba(84, 239, 246, 0.2)", "0 0 0 0 rgba(84, 239, 246, 0)"]
                    } : {}}
                    transition={{ duration: 1.5, repeat: activeStep === index ? Infinity : 0 }}
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg mb-6 md:mb-0 flex-shrink-0"
                    style={{ backgroundColor: step.color }}
                  >
                    <span className="text-xl font-bold">{step.number}</span>
                    
                    {/* Icon that shows on hover */}
                    {mounted && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: activeStep === index ? 1 : 0, scale: activeStep === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-800 rounded-full"
                      >
                        <div style={{ color: step.color }}>
                          {step.icon}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                  
                  {/* Content card */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-10' : 'md:mr-10'}`}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md border border-gray-100 dark:border-zinc-700 relative overflow-hidden"
                    >
                      <h3 className="text-xl font-bold mb-3 text-zinc-800 dark:text-white">{step.title}</h3>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-4">{step.description}</p>
                      
                      {/* Deliverables */}
                      <div className="space-y-2">
                        {step.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <motion.div
                              animate={activeStep === index && mounted ? { scale: [1, 1.2, 1] } : {}}
                              transition={{ duration: 0.4, repeat: activeStep === index ? Infinity : 0, repeatDelay: 0.5 }}
                              className="w-4 h-4 mt-0.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: step.color }}
                            />
                            <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Bottom decoration */}
                      <div className="absolute left-0 bottom-0 w-full h-1" style={{ backgroundColor: step.color }} />
                    </motion.div>
                  </div>
                </div>
                
                {/* Step visualization */}
                {mounted && (
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
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#54eff6" }}></div>
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#4cfea6" }}></div>
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f9fa4c" }}></div>
                          </div>
                          <div className="rounded-md overflow-hidden">
                            <Image 
                              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                              width={400} 
                              height={200} 
                              alt="Website ontwikkeling"
                              className="w-full h-36 object-cover" 
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md border border-gray-100 dark:border-zinc-700 p-3">
                        <motion.div
                          animate={activeStep === index ? { scale: [1, 1.05, 1] } : {}}
                          transition={{ duration: 1.5, repeat: activeStep === index ? Infinity : 0 }}
                          className="flex justify-center"
                        >
                          <div className="relative">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: "#f9fa4c" }}>
                              <FaRocket className="text-3xl text-zinc-800" />
                            </div>
                            <motion.div
                              animate={{ 
                                scale: activeStep === index ? [1, 1.2, 1] : 1,
                                opacity: activeStep === index ? [0.7, 0.2, 0.7] : 0.7
                              }}
                              transition={{ duration: 1.5, repeat: activeStep === index ? Infinity : 0 }}
                              className="absolute inset-0 rounded-full opacity-40 blur-md -z-10"
                              style={{ backgroundColor: "#f9fa4c" }}
                            />
                          </div>
                        </motion.div>
                        <div className="text-center mt-3">
                          <div className="text-lg font-bold" style={{ color: "#f9fa4c" }}>
                            LANCERING!
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            Uw website gaat live
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 3 && (
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
                              className="w-6 rounded-t-md"
                              style={{ background: `linear-gradient(to top, #54eff6, #4cfea6)` }}
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
                              className="w-6 rounded-t-md"
                              style={{ background: `linear-gradient(to top, #54eff6, #4cfea6)` }}
                            >
                              <div className="-mt-6 text-[10px] text-center">Na</div>
                            </motion.div>
                          </div>
                          <div className="w-full h-px bg-gray-300 dark:bg-gray-700 mt-1"></div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        {mounted && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-700 p-8 max-w-3xl mx-auto relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
                  Klaar om uw website project te starten?
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6 max-w-xl mx-auto">
                  Plan een vrijblijvend strategiegesprek en ontdek hoe wij uw online ambities kunnen waarmaken.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-zinc-800 font-medium rounded-xl shadow-md hover:shadow-xl"
                  style={{ background: "linear-gradient(to right, #54eff6, #4cfea6)" }}
                >
                  Strategiegesprek Inplannen
                </motion.button>
              </div>
              {/* Background image overlay */}
              <div className="absolute inset-0 opacity-5 overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  fill={true}
                  alt="Website succes" 
                  className="object-cover" 
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};