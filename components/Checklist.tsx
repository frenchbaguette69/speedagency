"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export const Checklist = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const benefits = [
    {
      title: "Snelle Oplevering",
      description: "In slechts 5-7 werkdagen een volledig functionele website klaar voor gebruik.",
      color: "#54eff6" // Cyan
    },
    {
      title: "SEO Geoptimaliseerd",
      description: "Elke website is gebouwd om direct beter te scoren in Google zoekopdrachten.",
      color: "#4cfea6" // Green
    },
    {
      title: "Volledig Maatwerk",
      description: "Websites die perfect aansluiten bij jouw merk, zonder gebruik van standaard templates.",
      color: "#f9fa4c" // Yellow
    }
  ];

  return (
    <section className="mt-12 py-16 bg-white dark:bg-zinc-900">
      <div className="container mx-auto max-w-6xl px-5">
        <h2 className="text-3xl font-bold text-center mb-4 text-zinc-800 dark:text-white">
          Waarom kiezen voor onze website ontwikkeling?
        </h2>
        <p className="text-lg text-center text-zinc-600 dark:text-zinc-300 mb-10 max-w-2xl mx-auto">
          Wij maken het simpel - een moderne website die écht resultaat levert voor jouw bedrijf.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4"
              style={{ borderColor: item.color }}
            >
              <div className="mb-4">
                <div
                  className="rounded-full p-3 w-12 h-12 flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <FaCheck className="text-white" size={18} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-800 dark:text-white">{item.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-300">{item.description}</p>
            </div>
          ))}
        </div>
        
        {mounted && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href="/contact">
              <button 
                className="px-8 py-3 rounded-full font-medium text-zinc-800 shadow-lg transition-colors"
                style={{ background: "linear-gradient(to right, #54eff6, #4cfea6)" }}
              >
                Neem contact op
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};