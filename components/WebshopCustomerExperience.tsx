"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserFriends, FaShoppingCart, FaCreditCard, FaComments, FaMobile, FaBoxOpen, FaHeart, FaChartLine, FaSearch } from "react-icons/fa";

export const WebshopCustomerExperience = () => {
  const journeySteps = [
    {
      title: "Ontdekking",
      description: "Intuïtieve productverkenning met slimme filters en zoekfunctionaliteit",
      icon: <FaSearch className="h-6 w-6" />,
      color: "#54eff6",
      metrics: "68% snellere productontdekking",
    },
    {
      title: "Overweging",
      description: "Gedetailleerde productinformatie, HD-afbeeldingen en sociale bewijzen",
      icon: <FaBoxOpen className="h-6 w-6" />,
      color: "#4cfea6",
      metrics: "2.8x langere sitebezoekersduur",
    },
    {
      title: "Beslissing",
      description: "Gedifferentieerde productopties en realtime voorraadstatus",
      icon: <FaHeart className="h-6 w-6" />,
      color: "#f9fa4c", 
      metrics: "46% hogere conversieratio",
    },
    {
      title: "Aankoop",
      description: "Gestroomlijnde checkout-ervaring met minimale stappen",
      icon: <FaCreditCard className="h-6 w-6" />,
      color: "#54eff6",
      metrics: "78% verlaging in winkelwagenverlating",
    },
    {
      title: "Nazorg",
      description: "Automatische orderupdates en persoonlijke support",
      icon: <FaComments className="h-6 w-6" />,
      color: "#4cfea6",
      metrics: "92% klanttevredenheid",
    },
  ];
  
  const userFeedbacks = [
    {
      text: "De gebruikservaring is ongekend soepel. Ik vind altijd binnen seconden wat ik zoek en de checkout is supersnel.",
      name: "Thomas H.",
      role: "Terugkerende klant",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "Als mobiele gebruiker waardeer ik hoe perfect alles is afgestemd op kleinere schermen. Geen frustreraties meer bij het winkelen onderweg!",
      name: "Emma V.",
      role: "Mobiele shopper",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      text: "De aanbevelingsengine begrijpt precies wat ik wil. Het is alsof de webshop mijn gedachten kan lezen.",
      name: "Lars K.",
      role: "Frequente bezoeker",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-zinc-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#54eff6]/20 dark:bg-[#54eff6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#4cfea6]/20 dark:bg-[#4cfea6]/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* <div className="inline-flex items-center px-4 py-2 bg-[#54eff6]/20 dark:bg-[#54eff6]/30 text-zinc-800 dark:text-[#54eff6] rounded-full text-sm font-medium mb-4">
              <FaUserFriends className="mr-2" /> Klantervaring
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block text-zinc-800 dark:text-white">
              Superieure <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#54eff6] to-[#4cfea6]">Klantervaring</span> Centraal
              {/* <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#54eff6] to-[#4cfea6] rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              /> */}
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mt-4">
              Ontdek hoe onze op maat gemaakte webshops een uitzonderlijke gebruikerservaring bieden
              die klanten omzet in loyale fans en hogere conversies.
            </p>
          </motion.div>
        </div>

        {/* Customer Journey Visualization */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-10 text-center text-zinc-800 dark:text-white">De Klantreis Herontworpen</h3>
          
          <div className="relative">
            {/* Connecting line */}
            {/* <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#54eff6] via-[#4cfea6] to-[#f9fa4c] hidden md:block"></div> */}
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-zinc-800 shadow-lg relative z-10" style={{ backgroundColor: step.color }}>
                    {step.icon}
                  </div>
                  <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-md mt-6 text-center w-full">
                    <h4 className="text-xl font-bold mb-2 text-zinc-800 dark:text-white">{step.title}</h4>
                    <p className="text-zinc-600 dark:text-zinc-300 mb-4 text-sm">
                      {step.description}
                    </p>
                    <div className="bg-[#54eff6]/10 dark:bg-[#54eff6]/20 px-3 py-1 rounded-full inline-block text-sm font-medium text-zinc-800 dark:text-[#54eff6]">
                      {step.metrics}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Interactive Experience */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-white">Gebruikerservaring die Converteert</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              Onze webshops zijn gebouwd met één doel: het optimaliseren van de gebruikerservaring om conversie te maximaliseren. 
              Door data-gedreven beslissingen en continue gebruikerstests verfijnen we elk aspect van de klantreis.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="p-2 bg-[#54eff6]/20 dark:bg-[#54eff6]/30 rounded-lg mr-4 text-zinc-800 dark:text-[#54eff6]">
                  <FaMobile className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800 dark:text-white">Responsief Design</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Perfect aangepast aan elk apparaat met vloeiende interacties</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-[#4cfea6]/20 dark:bg-[#4cfea6]/30 rounded-lg mr-4 text-zinc-800 dark:text-[#4cfea6]">
                  <FaShoppingCart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800 dark:text-white">Geoptimaliseerde Checkout</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Minimale stappen met maximale conversie en gebruikersgemak</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="p-2 bg-[#f9fa4c]/20 dark:bg-[#f9fa4c]/30 rounded-lg mr-4 text-zinc-800 dark:text-[#f9fa4c]">
                  <FaChartLine className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-800 dark:text-white">Gepersonaliseerde Aanbevelingen</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">AI-gestuurde productaanbevelingen verhogen cross-selling</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Device frame mockup */}
            <div className="absolute inset-0 border-[12px] border-white dark:border-zinc-800 rounded-2xl shadow-inner z-10" />
            
            <Image
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80"
              alt="Webshop User Experience"
              fill
              className="object-cover"
            />
            
            {/* Interactive elements */}
            <div className="absolute top-1/4 left-1/4 bg-[#54eff6] p-3 rounded-full shadow-lg z-20 animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 bg-[#4cfea6] p-2 rounded-full shadow-lg z-20 animate-pulse delay-300" />
            <div className="absolute top-1/2 right-1/3 bg-[#f9fa4c] p-4 rounded-full shadow-lg z-20 animate-pulse delay-700" />
          </motion.div>
        </div>

        {/* User Feedback / Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-10 text-center text-zinc-800 dark:text-white">Wat Klanten Zeggen</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {userFeedbacks.map((feedback, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-zinc-700"
              >
                <div className="flex items-center mb-4">
                  <Image 
                    src={feedback.avatar}
                    alt={feedback.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-zinc-800 dark:text-white">{feedback.name}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{feedback.role}</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 italic">"{feedback.text}"</p>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaHeart key={i} className="text-[#4cfea6] mr-1 h-4 w-4" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SEO-optimized content block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#54eff6]/10 dark:bg-[#54eff6]/10 p-8 rounded-2xl mb-16 border border-[#54eff6]/20 dark:border-[#54eff6]/30"
        >
          <h3 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-white">De impact van klantervaring op uw webshop resultaten</h3>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-zinc-600 dark:text-zinc-300">
              De klantervaring (UX) is de doorslaggevende factor voor het succes van moderne webshops. 
              Onderzoek toont aan dat 88% van de online shoppers niet terugkeert na een slechte gebruikerservaring, 
              en dat 70% van alle online aankopen afgebroken wordt door een gecompliceerd checkout-proces.
            </p>
            
            <p className="text-zinc-600 dark:text-zinc-300">
              Bij elke webshop die we ontwikkelen, staat de klantervaring centraal. Dit begint met een 
              uitgebreide gebruikersanalyse om de specifieke behoeften en pijnpunten van uw doelgroep te begrijpen. 
              Vervolgens ontwerpen we een gebruikersreis die intuïtief, snel en aangenaam is, en die vertrouwen opbouwt 
              in elk stadium van het aankoopproces.
            </p>
            
            <p className="text-zinc-600 dark:text-zinc-300">
              De resultaten spreken voor zich: onze klanten ervaren gemiddeld een stijging van 42% in conversieratio, 
              een 38% hogere gemiddelde orderwaarde en een 67% toename in herhaalaankopen. Dit komt doordat een 
              gebruiksvriendelijke webshop niet alleen nieuwe klanten aantrekt, maar deze ook omzet in terugkerende, 
              loyale klanten met een hogere lifetime value.
            </p>
            
            <p className="text-zinc-600 dark:text-zinc-300">
              In een wereld waarin consumenten steeds hogere verwachtingen hebben van digitale ervaringen, is het investeren 
              in een superieure klantervaring geen luxe, maar een noodzaak voor duurzaam e-commerce succes.
            </p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center border border-gray-100 dark:border-zinc-700">
              <p className="text-3xl font-bold text-[#54eff6] dark:text-[#54eff6]">42%</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Hogere conversieratio</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center border border-gray-100 dark:border-zinc-700">
              <p className="text-3xl font-bold text-[#4cfea6] dark:text-[#4cfea6]">38%</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Stijging gem. orderwaarde</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center border border-gray-100 dark:border-zinc-700">
              <p className="text-3xl font-bold text-[#f9fa4c] dark:text-[#f9fa4c]">67%</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Meer terugkerende klanten</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg text-center border border-gray-100 dark:border-zinc-700">
              <p className="text-3xl font-bold text-[#54eff6] dark:text-[#54eff6]">0.8s</p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">Gemiddelde laadtijd</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-white">Klaar voor een webshop die écht verkoopt?</h3>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto mb-8">
            Laat ons uw huidige webshop analyseren en ontdek hoe wij de gebruikerservaring en conversie kunnen verbeteren.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#54eff6] to-[#4cfea6] text-zinc-800 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Gratis UX-analyse aanvragen
          </a>
        </motion.div>
      </div>
    </section>
  );
};