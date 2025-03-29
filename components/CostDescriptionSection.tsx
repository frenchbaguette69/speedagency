"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaCheckCircle, FaRegClock, FaShieldAlt, FaChartLine, FaRegLightbulb, FaMedal } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export const CostDescriptionSection = () => {
  const [activePackage, setActivePackage] = useState("standard");

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "1.950",
      description: "Ideaal voor kleine bedrijven die snel online willen gaan",
      features: [
        "5 pagina's Next.js website",
        "Mobiel responsive design",
        "Basisoptimalisatie voor SEO",
        "Content Management Systeem",
        "Contactformulier",
        "Google Analytics integratie",
        "7 werkdagen oplevering",
        "3 maanden gratis support",
      ],
      excludedFeatures: [
        "Blog functionaliteit",
        "Maatwerk design elementen",
        "API integraties",
      ],
      popular: false,
      ctaText: "Starter kiezen",
    },
    {
      id: "standard",
      name: "Professional",
      price: "2.950",
      description: "Onze meest gekozen optie voor professionele bedrijven",
      features: [
        "10 pagina's Next.js website",
        "Premium responsive design",
        "Uitgebreide SEO optimalisatie",
        "Geavanceerd CMS",
        "Blog functionaliteit",
        "Formulieren met automatisering",
        "Google Analytics & Tag Manager",
        "Social media integratie",
        "Meertalige ondersteuning",
        "5 werkdagen oplevering",
        "6 maanden gratis support",
      ],
      excludedFeatures: [
        "Maatwerk API integraties",
        "E-commerce functionaliteit",
      ],
      popular: true,
      ctaText: "Professional kiezen",
    },
    {
      id: "premium",
      name: "Enterprise",
      price: "4.950",
      description: "Voor bedrijven die het maximale uit hun online aanwezigheid willen halen",
      features: [
        "Onbeperkt aantal pagina's",
        "Volledig maatwerk design",
        "Geavanceerde SEO strategie",
        "Enterprise CMS oplossing",
        "Blog & nieuwsbrief functionaliteit",
        "Complexe formulieren & automations",
        "Volledige analytics suite",
        "Custom API integraties",
        "E-commerce functionaliteit",
        "Klantportaal mogelijkheden",
        "3 werkdagen oplevering",
        "12 maanden premium support",
      ],
      excludedFeatures: [],
      popular: false,
      ctaText: "Enterprise kiezen",
    }
  ];

  const benefits = [
    {
      icon: <FaRocket className="text-[#54eff6] dark:text-[#54eff6]" />,
      title: "10x Snellere Website",
      description: "Onze Next.js websites laden gemiddeld in 0.4 seconden, terwijl WordPress sites vaak 4+ seconden nodig hebben."
    },
    {
      icon: <FaRegClock className="text-[#4cfea6] dark:text-[#4cfea6]" />,
      title: "2 Weken Snellere Oplevering",
      description: "Traditionele bureaus hebben 4-8 weken nodig, wij leveren binnen 3-10 dagen zonder in te leveren op kwaliteit."
    },
    {
      icon: <FaShieldAlt className="text-[#54eff6] dark:text-[#54eff6]" />,
      title: "99.9% Minder Beveiligingsrisico's",
      description: "Next.js elimineert vrijwel alle beveiligingsproblemen die WordPress sites vaak kwetsbaar maken voor hackers."
    },
    {
      icon: <FaChartLine className="text-[#4cfea6] dark:text-[#4cfea6]" />,
      title: "35% Hogere Conversie",
      description: "Onze klanten rapporteren gemiddeld 35% meer conversies door kortere laadtijden en betere gebruikerservaring."
    }
  ];

  const testimonials = [
    {
      quote: "De investering betaalde zich binnen 2 maanden terug door de verhoogde conversieratio. De beste zakelijke beslissing die we hebben genomen.",
      name: "Martijn de Vries",
      role: "Marketing Director bij TechFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      quote: "Aanvankelijk twijfelde ik over de kosten, maar de ROI is ongelooflijk. Onze laadsnelheid verbeterde van 5.2s naar 0.5s, en onze bounce rate daalde met 40%.",
      name: "Emma Jansen",
      role: "E-commerce Manager bij StyleNet",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-[#54eff6]/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-60 right-10 w-80 h-80 bg-[#4cfea6]/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-[#f9fa4c]/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center p-3 bg-gradient-to-r from-[#54eff6] to-[#4cfea6] rounded-2xl shadow-xl"
            >
              <FaMedal className="text-2xl text-zinc-800" />
            </motion.div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-zinc-800 dark:text-white"
          >
            Investering met <span className="text-[#54eff6] dark:text-[#54eff6]">Bewezen Rendement</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto"
          >
            Geen verborgen kosten of onverwachte uitgaven - alleen transparante prijzen voor superieure technologie
            die zich terugverdient door betere prestaties en hogere conversies.
          </motion.p>
        </div>

        {/* ROI Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-[#54eff6]/10 to-[#4cfea6]/10 dark:from-[#54eff6]/5 dark:to-[#4cfea6]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#54eff6]/20 dark:border-[#54eff6]/20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-800 dark:text-white">
                  Waarom onze klanten 2.5x meer ROI behalen
                </h3>
                <p className="text-zinc-600 dark:text-zinc-200 mb-6">
                  Een Next.js website van SpeedAgency is niet slechts een kostenpost, maar een strategische investering
                  die direct resultaat oplevert. Onze klanten zien gemiddeld:
                </p>
                
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <div className="p-2 bg-white dark:bg-zinc-800 rounded-full shadow-md mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-800 dark:text-white">{benefit.title}</h4>
                        <p className="text-zinc-600 dark:text-zinc-300 text-sm">{benefit.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-zinc-700">
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-40">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Rendement Vergelijking Grafiek"
                    fill
                    className="object-cover rounded-xl"
                  />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-center text-zinc-800 dark:text-white">Gemiddelde ROI na 6 maanden</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 dark:bg-zinc-700 p-4 rounded-xl">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">WordPress Website</p>
                    <p className="text-2xl font-bold text-zinc-800 dark:text-white">112%</p>
                  </div>
                  <div className="bg-[#54eff6]/10 dark:bg-[#54eff6]/20 p-4 rounded-xl border-2 border-[#54eff6] dark:border-[#54eff6]">
                    <p className="text-sm text-[#54eff6] dark:text-[#54eff6] mb-1">Next.js (SpeedAgency)</p>
                    <p className="text-2xl font-bold text-[#54eff6] dark:text-[#54eff6]">285%</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <Link href="/case-studies">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="text-sm flex items-center gap-2 text-[#54eff6] dark:text-[#54eff6] font-medium"
                    >
                      <span>Bekijk onze cases</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <div className="mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-zinc-800 dark:text-white">
              Transparante Prijzen, Superieure Waarde
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Kies het pakket dat bij uw bedrijf past. Alle pakketten bevatten onze kern-voordelen:
              razendsnelle laadtijden, hoogste veiligheid en toekomstbestendige technologie.
            </p>
          </motion.div>
          
          {/* Package selector pills */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-gray-100 dark:bg-zinc-700 rounded-xl">
              {packages.map((pkg, index) => (
                <motion.button
                  key={pkg.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActivePackage(pkg.id)}
                  className={`relative px-6 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
                    activePackage === pkg.id
                      ? "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white shadow-sm" 
                      : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-white"
                  }`}
                >
                  {pkg.name}
                  {pkg.popular && (
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-[#f9fa4c] text-zinc-800 text-xs font-medium rounded-full">
                      Populair
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const isActive = activePackage === pkg.id;
              
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  animate={{ 
                    scale: isActive ? 1.03 : 1,
                    boxShadow: isActive ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                    isActive 
                      ? "border-2 border-[#54eff6] dark:border-[#54eff6] bg-white dark:bg-zinc-800"
                      : "border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 opacity-80"
                  }`}
                >
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-zinc-800 dark:text-white">{pkg.name}</h3>
                      <p className="text-zinc-600 dark:text-zinc-300 text-sm">{pkg.description}</p>
                    </div>
                    
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-zinc-500 dark:text-zinc-400 mr-2">€</span>
                        <span className="text-4xl font-bold text-zinc-800 dark:text-white">{pkg.price}</span>
                      </div>
                      <p className="text-zinc-500 dark:text-zinc-400 text-sm">Eenmalige investering</p>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <FaCheckCircle className="text-[#4cfea6] dark:text-[#4cfea6] flex-shrink-0" />
                          <span className="text-zinc-700 dark:text-zinc-300 text-sm">{feature}</span>
                        </div>
                      ))}
                      
                      {pkg.excludedFeatures.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="w-4 h-0.5 bg-gray-300 dark:bg-zinc-600 rounded-full flex-shrink-0"></span>
                          <span className="text-zinc-500 dark:text-zinc-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`w-full py-3 rounded-xl transition-colors ${
                          isActive
                            ? "bg-gradient-to-r from-[#54eff6] to-[#4cfea6] hover:from-[#4cfea6] hover:to-[#54eff6] text-zinc-800" 
                            : "bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 text-zinc-800 dark:text-white"
                        }`}
                      >
                        {pkg.ctaText}
                      </motion.button>
                    </Link>
                  </div>
                  
                  {pkg.popular && (
                    <div className="bg-[#f9fa4c] py-2 text-center text-sm font-medium text-zinc-800">
                      Aanbevolen voor de meeste bedrijven
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-zinc-800 dark:text-white">
            Wat onze klanten zeggen over hun investering
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-700 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#54eff6] rounded-full flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11L6 7L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 11L14 7L18 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 7H14C16.2091 7 18 8.79086 18 11V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="pt-4">
                  <p className="text-zinc-700 dark:text-zinc-200 italic mb-6">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-800 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block mb-4">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="flex items-center justify-center p-3 bg-[#54eff6]/20 dark:bg-[#54eff6]/20 rounded-full"
            >
              <FaRegLightbulb className="text-2xl text-[#54eff6] dark:text-[#54eff6]" />
            </motion.div>
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-zinc-800 dark:text-white">
            Heeft u vragen over de prijzen?
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 mb-6 max-w-2xl mx-auto">
            We begrijpen dat een website een belangrijke investering is. Bekijk onze veelgestelde vragen
            of neem contact met ons op voor een persoonlijk gesprek.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-xl bg-white dark:bg-zinc-800 text-[#54eff6] dark:text-[#54eff6] border border-gray-100 dark:border-zinc-700 hover:border-[#54eff6]/30 dark:hover:border-[#54eff6]/30 font-medium shadow-md"
              >
                Bekijk veelgestelde vragen
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#54eff6] to-[#4cfea6] hover:from-[#4cfea6] hover:to-[#54eff6] text-zinc-800 font-medium shadow-lg"
              >
                Vrijblijvend gesprek plannen
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating "Prijs Garantie" badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
        className="hidden md:block absolute top-40 right-10 transform rotate-12 z-30"
      >
        <div className="relative flex items-center justify-center w-28 h-28">
          <div className="absolute inset-0 bg-[#f9fa4c] rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#f9fa4c] to-[#f9fa4c]/80 rounded-full shadow-lg flex items-center justify-center">
            <div className="text-center text-zinc-800">
              <div className="text-xs font-bold">GEEN</div>
              <div className="text-lg font-bold">VERBORGEN</div>
              <div className="text-xs font-bold">KOSTEN</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};