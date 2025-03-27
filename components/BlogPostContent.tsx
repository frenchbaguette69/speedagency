'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCalendar, FaUser, FaArrowDown } from 'react-icons/fa'

// Floating animation variants
const floatingAnimation = {
  initial: { y: 20, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

// Continuous floating animation
const continuousFloat = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const containerAnimation = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

interface BlogPostContentProps {
  title: string;
  date: string;
  content: string;
  featuredImage: string;
  author: string;
}

export default function BlogPostContent({ 
  title, 
  date, 
  content, 
  featuredImage, 
  author 
}: BlogPostContentProps) {
  return (
    <motion.div
      variants={containerAnimation}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <div className="relative h-[70vh] w-full">
        <Image
          src={featuredImage}
          alt={title}
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
        
        {/* Floating arrow indicator */}
        <motion.div 
          className="absolute bottom-32 left-1/2 -translate-x-1/2 text-white text-4xl"
          animate={continuousFloat.animate}
        >
          <FaArrowDown />
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <motion.h1 
            variants={floatingAnimation}
            className="text-7xl font-bold mb-8 text-white leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>
          <motion.div
            variants={floatingAnimation}
            className="flex items-center gap-6 text-xl text-white"
          >
            <div className="flex items-center gap-2">
              <FaUser className="text-2xl" />
              <span className="font-medium">{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-2xl" />
              <time>{new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</time>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.article 
        variants={containerAnimation}
        className="max-w-5xl mx-auto px-8 py-20"
      >
        <div className="text-2xl leading-relaxed text-gray-900 dark:text-gray-100 space-y-8">
          {content.split('\n').map((paragraph, index) => (
            <motion.p 
              key={index}
              variants={floatingAnimation}
              whileHover={{ 
                x: 20,
                transition: { duration: 0.2 }
              }}
              className="font-normal"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.article>
    </motion.div>
  )
}