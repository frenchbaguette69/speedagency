"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaPen, FaLightbulb, FaRocket, FaCode, FaChartLine } from "react-icons/fa";
import { useRouter } from "next/navigation";

export const BlogHero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  
  const floatingIcons = [
    { icon: <FaPen />, color: "bg-purple-500", delay: 0 },
    { icon: <FaLightbulb />, color: "bg-pink-500", delay: 0.2 },
    { icon: <FaRocket />, color: "bg-indigo-500", delay: 0.4 },
    { icon: <FaCode />, color: "bg-rose-500", delay: 0.6 },
    { icon: <FaChartLine />, color: "bg-violet-500", delay: 0.8 }
  ];

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameter
      router.push(`/blog/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Handle enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-zinc-900 dark:via-purple-900/10 dark:to-pink-900/10 -z-10" />
      
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            y: [0, -15, 0],
            x: index % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute ${index % 2 === 0 ? 'left-[15%]' : 'right-[15%]'} 
            ${index * 15 + 20}% hidden md:flex items-center justify-center
            w-12 h-12 rounded-2xl ${item.color} text-white shadow-lg`}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              Latest Insights
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-zinc-800 to-zinc-600 dark:from-white dark:to-zinc-200 leading-tight"
            >
            Discover Digital Marketing
            <span className="block mt-4 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 leading-normal">
                Insights & Strategies
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-zinc-600 dark:text-zinc-300 mb-8"
          >
            Expert tips, industry trends, and actionable strategies to grow your digital presence
            and stay ahead of the competition.
          </motion.p>

          {/* Search Bar */}
          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative max-w-xl mx-auto group"
          >
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-8 py-4 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm 
                border border-purple-100 dark:border-purple-900 shadow-xl focus:shadow-2xl
                transition-all duration-300 outline-none focus:ring-2 ring-purple-500/20
                text-zinc-800 dark:text-zinc-200 placeholder-zinc-400 dark:placeholder-zinc-500"
            />
            <button 
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3
                bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white
                transition-transform duration-300 hover:scale-110"
            >
              <FaSearch className="text-lg" />
            </button>

            {/* Animated glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 
              group-hover:opacity-20 blur-xl transition-opacity duration-300" />
          </motion.form>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { label: "Articles", value: "200+" },
              { label: "Expert Authors", value: "20+" },
              { label: "Monthly Readers", value: "50K+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};