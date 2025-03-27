"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaClock, FaCalendar } from "react-icons/fa";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  featuredImage: string;
  metaDescription: string;
  seoAuthor: string;
  createdAt: string;
}

interface BlogGridProps {
  featured?: boolean;
  limit?: number;
  columns?: number;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 SEO Strategies That Actually Work in 2025",
    slug: "seo-strategies-2025",
    content: "In-depth guide to modern SEO techniques...",
    metaDescription: "Discover cutting-edge SEO techniques that are driving real results in today's digital landscape. Learn how to optimize your website for 2025.",
    featuredImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=60",
    seoAuthor: "Speed Agency",
    createdAt: "2025-03-15"
  },
  {
    id: "2",
    title: "The Ultimate Guide to Next.js Performance Optimization",
    slug: "nextjs-performance-guide",
    content: "Deep dive into Next.js optimization...",
    metaDescription: "Learn how to build lightning-fast web applications with Next.js optimization techniques. Boost your website's performance today.",
    featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    seoAuthor: "Speed Agency",
    createdAt: "2025-03-18"
  },
  {
    id: "3",
    title: "Mastering Google Ads: Advanced Campaign Strategies",
    slug: "google-ads-mastery",
    content: "Advanced strategies for Google Ads...",
    metaDescription: "Expert tips for creating high-performing Google Ads campaigns that maximize ROI. Learn from our years of experience.",
    featuredImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    seoAuthor: "Speed Agency",
    createdAt: "2025-03-20"
  },
  {
    id: "4",
    title: "The Power of AI in Modern Web Development",
    slug: "ai-web-development-2025",
    content: "Exploring AI integration in web development...",
    metaDescription: "Discover how artificial intelligence is transforming web development. Learn about AI-powered features, automation, and the future of web applications.",
    featuredImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    seoAuthor: "Speed Agency",
    createdAt: "2025-03-22"
  },
  {
    id: "5",
    title: "WordPress vs Next.js: Making the Right Choice",
    slug: "wordpress-vs-nextjs-comparison",
    content: "Comprehensive comparison between WordPress and Next.js...",
    metaDescription: "An in-depth analysis of WordPress vs Next.js for modern web development. Learn which platform better suits your business needs in 2025.",
    featuredImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60",
    seoAuthor: "Speed Agency",
    createdAt: "2025-03-25"
  }
];

export const BlogGrid = ({ featured = false, limit = 6, columns = 2 }: BlogGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Function to estimate read time
  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Get the appropriate posts based on featured flag
  let postsToDisplay = [...blogPosts];
  
  // If featured, take the first 2
  // If not featured, show all except the first 2
  if (featured) {
    postsToDisplay = postsToDisplay.slice(0, limit);
  } else {
    postsToDisplay = postsToDisplay.slice(2, 2 + limit);
  }

  // Determine column classes based on props
  const columnClasses = columns === 2 
    ? "grid-cols-1 md:grid-cols-2 gap-8" 
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`grid ${columnClasses}`}
    >
      {postsToDisplay.map((post) => (
        <motion.article
          key={post.id}
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="group relative bg-white dark:bg-zinc-800/50 rounded-2xl overflow-hidden border border-purple-100 dark:border-purple-900/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
        >
          {/* Image container - fixed height */}
          <div className={`relative ${featured ? 'h-60' : 'h-52'}`}>
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
            
            {/* Featured badge - only shown on featured posts */}
            {featured && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                Featured
              </div>
            )}
          </div>

          {/* Content - with flex-col and flex-grow to fill available height */}
          <div className="p-6 flex flex-col flex-grow">
            {/* Meta info */}
            <div className="flex items-center gap-4 mb-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1">
                <FaClock className="text-xs" />
                <span>{getReadTime(post.content)}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCalendar className="text-xs" />
                <span>{formatDate(post.createdAt)}</span>
              </div>
            </div>

            {/* Title and description */}
            <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300`}>
              {post.title}
            </h3>
            
            {/* Description with fixed height to ensure consistency */}
            <div className="mb-4 flex-grow">
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                {post.metaDescription}
              </p>
            </div>

            {/* Read more link - always at the bottom */}
            <div className="mt-auto pt-4 border-t border-purple-100/20 dark:border-purple-900/20">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
              >
                Read Full Article
                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <FaArrowRight className="text-xs" />
                </motion.span>
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
};