"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaChevronRight, FaChevronLeft, FaRegBookmark, FaRegEye, FaArrowRight } from "react-icons/fa";

export const LatestBlogPosts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3;

  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Next.js vs WordPress: Waarom Next.js de toekomst is",
      excerpt: "Ontdek waarom moderne websites gebouwd met Next.js WordPress overtreffen op gebied van snelheid, SEO en gebruikerservaring.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "development",
      readTime: "5 min",
      date: "8 maart 2025",
      views: 1243,
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      id: 2,
      title: "7 SEO-strategieën die uw rankings in 2025 boosten",
      excerpt: "De nieuwste SEO-technieken die écht werken om uw website hoger in Google te krijgen en meer organisch verkeer te genereren.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
      category: "seo",
      readTime: "8 min",
      date: "1 maart 2025",
      views: 987,
      gradient: "from-emerald-400 to-teal-600"
    },
    {
      id: 3,
      title: "De impact van laadtijd op uw conversieratio",
      excerpt: "Hoe zelfs 100ms verschil in laadtijd uw conversies kan maken of breken. Data en casestudies uit onze eigen praktijk.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      category: "performance",
      readTime: "6 min",
      date: "22 februari 2025",
      views: 1547,
      gradient: "from-orange-400 to-red-600"
    },
    {
      id: 4,
      title: "Mobile-first design: Meer dan responsive layouts",
      excerpt: "Waarom mobile-first denken cruciaal is in uw ontwikkelingsproces en hoe dit uw gebruikerservaring verbetert.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "design",
      readTime: "4 min",
      date: "15 februari 2025",
      views: 821,
      gradient: "from-purple-400 to-fuchsia-600"
    },
    {
      id: 5,
      title: "Headless CMS: De beste opties voor uw Next.js project",
      excerpt: "Een vergelijkende analyse van de top headless CMS-systemen die naadloos integreren met Next.js.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "development",
      readTime: "9 min",
      date: "7 februari 2025",
      views: 1102,
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      id: 6,
      title: "De toekomst van e-commerce: Trends voor 2025",
      excerpt: "Welke ontwikkelingen gaan de e-commerce wereld veranderen en hoe kunt u uw webshop hierop voorbereiden?",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "e-commerce",
      readTime: "7 min",
      date: "29 januari 2025",
      views: 1365,
      gradient: "from-pink-400 to-rose-600"
    }
  ];

  const categories = [
    { id: "all", label: "Alle artikelen" },
    { id: "development", label: "Ontwikkeling" },
    { id: "seo", label: "SEO" },
    { id: "performance", label: "Performance" },
    { id: "design", label: "Design" },
    { id: "e-commerce", label: "E-commerce" }
  ];

  // Filter posts by active category
  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Paginate posts
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const displayedPosts = filteredPosts.slice(
    currentPage * postsPerPage, 
    currentPage * postsPerPage + postsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

interface Category {
    id: string;
    label: string;
}

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    readTime: string;
    date: string;
    views: number;
    gradient: string;
}

const handleCategoryChange = (categoryId: string): void => {
    setActiveCategory(categoryId);
    setCurrentPage(0); // Reset to first page when category changes
};

  // Get featured post (first post)
  const featuredPost = blogPosts[0];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-zinc-800 dark:to-zinc-900">
      <div className="container mx-auto max-w-7xl px-5">
        {/* Header with animated text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
            Onze <span className="text-indigo-600 dark:text-indigo-400">Nieuwste</span> Blog Posts
            <motion.div 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
            Ontdek de laatste trends, tips en inzichten op het gebied van webontwikkeling, SEO en online marketing.
          </p>
        </motion.div>

        {/* Featured post (large) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 to-transparent mix-blend-multiply" />
                <div className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${featuredPost.gradient} text-white text-sm font-medium shadow-lg`}>
                  Uitgelicht artikel
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
                      {categories.find(cat => cat.id === featuredPost.category)?.label}
                    </span>
                    <div className="flex items-center text-zinc-500 dark:text-zinc-400 text-sm">
                      <FaClock className="mr-1" />
                      <span>{featuredPost.readTime} leestijd</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-800 dark:text-white">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-300 mb-8">
                    {featuredPost.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <FaRegEye className="mr-1" />
                      <span>{featuredPost.views}</span>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${featuredPost.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium"
                    >
                      Lees artikel <FaArrowRight />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category filter tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 min-w-max pb-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-indigo-600 text-white shadow-md" 
                    : "bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Blog posts grid with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {displayedPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col border border-gray-100 dark:border-zinc-700"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 right-0 m-4">
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white dark:bg-zinc-800 rounded-full shadow-md"
                    >
                      <FaRegBookmark className="text-indigo-600 dark:text-indigo-400" />
                    </motion.button>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-block h-2 w-2 rounded-full bg-gradient-to-r ${post.gradient}`}></span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {categories.find(cat => cat.id === post.category)?.label}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-zinc-800 dark:text-white">
                    {post.title}
                  </h3>
                  
                  <p className="text-zinc-600 dark:text-zinc-300 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-zinc-700">
                    <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <FaClock className="text-xs" /> {post.readTime}
                    </div>
                    
                    <Link href={`/blog/${post.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 font-medium"
                      >
                        Lees meer <FaChevronRight className="ml-1 text-xs" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === 0
                  ? "bg-gray-100 dark:bg-zinc-700 text-gray-400 dark:text-zinc-500 cursor-not-allowed"
                  : "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-md hover:shadow-lg"
              }`}
            >
              <FaChevronLeft />
            </motion.button>
            
            <div className="text-zinc-600 dark:text-zinc-300">
              {currentPage + 1} / {totalPages}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNextPage}
              disabled={currentPage >= totalPages - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage >= totalPages - 1
                  ? "bg-gray-100 dark:bg-zinc-700 text-gray-400 dark:text-zinc-500 cursor-not-allowed"
                  : "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-md hover:shadow-lg"
              }`}
            >
              <FaChevronRight />
            </motion.button>
          </div>
        )}

        {/* Newsletter subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Blijf op de hoogte van de nieuwste ontwikkelingen
              </h3>
              <p className="text-white/80">
                Meld u aan voor onze nieuwsbrief en ontvang maandelijks de beste artikelen, tips en exclusieve inzichten.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <form className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Uw e-mailadres"
                  className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 w-full"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                >
                  Aanmelden
                </motion.button>
              </form>
              <p className="text-sm text-white/60 mt-2">
                We respecteren uw privacy. U kunt zich op elk moment uitschrijven.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};