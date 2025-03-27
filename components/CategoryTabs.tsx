"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaChartLine, 
  FaMobileAlt, 
  FaSearch, 
  FaAd, 
  FaPaintBrush, 
  FaRocket,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

// Map blog posts to categories (this would come from your data in a real app)
const blogPostCategories = {
  "1": "seo", // SEO Strategies 
  "2": "development", // Next.js Performance 
  "3": "marketing", // Google Ads
  "4": "development", // AI in Web Development
  "5": "development", // WordPress vs Next.js
};

interface CategoryTabsProps {
  onCategoryChange?: (category: string) => void;
}

export const CategoryTabs = ({ onCategoryChange }: CategoryTabsProps) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  const categories = [
    { id: "all", label: "All Articles", icon: <FaRocket />, color: "from-purple-600 to-pink-600" },
    { id: "seo", label: "SEO", icon: <FaSearch />, color: "from-blue-600 to-cyan-600" },
    { id: "development", label: "Development", icon: <FaCode />, color: "from-emerald-600 to-teal-600" },
    { id: "marketing", label: "Marketing", icon: <FaChartLine />, color: "from-orange-600 to-red-600" },
    { id: "design", label: "Design", icon: <FaPaintBrush />, color: "from-pink-600 to-rose-600" },
    { id: "mobile", label: "Mobile", icon: <FaMobileAlt />, color: "from-indigo-600 to-purple-600" },
    { id: "ads", label: "Google Ads", icon: <FaAd />, color: "from-violet-600 to-indigo-600" },
  ];

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    
    setScrollProgress((scrollLeft / scrollWidth) * 100);
    setShowLeftScroll(scrollLeft > 0);
    setShowRightScroll(scrollLeft < scrollWidth);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.5;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative py-8">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-10 -top-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-400/10 dark:to-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-10 -bottom-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-purple-400/20 dark:from-pink-400/10 dark:to-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Category tabs container */}
      <div className="relative z-10">
        <div className="relative">
          {/* Scroll buttons */}
          {showLeftScroll && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-zinc-800/80 rounded-full shadow-lg backdrop-blur-sm border border-purple-100 dark:border-purple-800/50"
            >
              <FaArrowLeft className="text-purple-600 dark:text-purple-400" />
            </motion.button>
          )}
          
          {showRightScroll && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-zinc-800/80 rounded-full shadow-lg backdrop-blur-sm border border-purple-100 dark:border-purple-800/50"
            >
              <FaArrowRight className="text-purple-600 dark:text-purple-400" />
            </motion.button>
          )}

          {/* Tabs scroll container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-auto scrollbar-hide px-6"
          >
            <div className="flex gap-4 min-w-max py-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative group flex items-center gap-3 px-6 py-3.5 rounded-xl
                    ${activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                      : 'bg-white/90 dark:bg-zinc-800/90 hover:bg-white dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300'
                    } 
                    backdrop-blur-sm border border-purple-100 dark:border-zinc-700/50
                    transition-all duration-300`}
                >
                  {/* Icon container */}
                  <motion.div
                    animate={
                      activeCategory === category.id
                        ? {
                            y: [0, -4, 0],
                            rotate: [0, -5, 5, 0],
                            transition: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }
                        : {}
                    }
                    className="text-lg"
                  >
                    {category.icon}
                  </motion.div>
                  
                  <span className="font-medium whitespace-nowrap">{category.label}</span>

                  {/* Active indicator dot */}
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -right-1.5 -top-1.5 w-3.5 h-3.5 rounded-full bg-white shadow-md ring-2 ring-purple-600/20"
                      transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Scroll progress indicator */}
          <div className="h-1 bg-purple-100/20 dark:bg-purple-900/20 rounded-full mt-2">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
              animate={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};