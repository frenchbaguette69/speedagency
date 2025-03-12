"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaLaptop, FaShoppingCart, FaSearch, FaGoogle } from "react-icons/fa";

export const OtherServices = () => {
  const services = [
    {
      icon: <FaLaptop className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: "Website Ontwikkeling",
      description: "Custom websites gebouwd met Next.js voor optimale snelheid, SEO en gebruikservaring.",
      link: "/website-laten-maken",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    },
    {
      icon: <FaShoppingCart className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: "Webshop Ontwikkeling",
      description: "Professionele e-commerce oplossingen die verkopen stimuleren en eenvoudig te beheren zijn.",
      link: "/webshop-laten-maken",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaSearch className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: "SEO Optimalisatie",
      description: "Doelgerichte SEO-strategieën om hoger te scoren in Google en meer organisch verkeer te genereren.",
      link: "/seo-optimalisatie",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: <FaGoogle className="text-4xl text-indigo-600 dark:text-indigo-400 mb-4" />,
      title: "Google Ads",
      description: "Effectieve advertentiecampagnes die direct resultaat opleveren en uw ROI maximaliseren.",
      link: "/google-ads",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2027&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-zinc-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto max-w-7xl px-5"
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-zinc-700 dark:text-white">Onze Diensten</h2>
        <p className="text-lg text-center text-zinc-500 dark:text-zinc-200 mb-16 max-w-3xl mx-auto">
          We bieden een compleet pakket aan digitale diensten om uw online aanwezigheid te versterken en uw bedrijf te laten groeien.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden"
            >
              {/* Service image with overlay - reduced overlay opacity */}
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 group-hover:bg-indigo-800/30 transition-colors duration-300"></div>
              </div>
              
              {/* Service content */}
              <div className="p-6">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-center mb-3 text-zinc-700 dark:text-white">{service.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-300 text-center mb-6">{service.description}</p>
                <Link href={service.link}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block text-center py-2 px-6 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors font-medium"
                  >
                    Meer informatie
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium mb-6 text-zinc-700 dark:text-white">
            Op zoek naar een complete digitale strategie?
          </p>
          <Link href="/diensten">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 font-medium text-white shadow-lg transition-colors"
            >
              Bekijk al onze diensten
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};