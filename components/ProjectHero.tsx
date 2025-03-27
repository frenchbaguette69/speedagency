'use client'

import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaPalette, FaMobile, FaLightbulb } from 'react-icons/fa'

const floatingIcons = [
  { icon: <FaCode />, color: "bg-purple-500", delay: 0 },
  { icon: <FaRocket />, color: "bg-pink-500", delay: 0.2 },
  { icon: <FaPalette />, color: "bg-indigo-500", delay: 0.4 },
  { icon: <FaMobile />, color: "bg-rose-500", delay: 0.6 },
  { icon: <FaLightbulb />, color: "bg-violet-500", delay: 0.8 }
];

export const ProjectHero = () => {
  return (
    <div className="relative py-32 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
      />

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

      <motion.div 
        className="container mx-auto px-4 max-w-7xl relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 text-white">
            Our Portfolio
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
        >
          Creative Digital
          <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Solutions
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto leading-relaxed"
        >
          Discover our innovative projects that have transformed businesses 
          and delivered exceptional digital experiences.
        </motion.p>
      </motion.div>

      {/* Enhanced gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-zinc-900 via-white/80 dark:via-zinc-900/80 to-transparent" />
    </div>
  );
};