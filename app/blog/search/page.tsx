"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaSearch, FaArrowLeft, FaClock, FaCalendar, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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

// Sample blog posts (in a real app, these would come from your API or a shared data file)
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

// For metadata, make sure to add this to your metadata.ts file or directly in the layout.tsx
export const metadata = {
  title: "Search Results | Speed Agency Blog",
  description: "Find the exact information you're looking for in our comprehensive blog library."
};

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    // Simple search function that filters the blog posts
    const performSearch = () => {
      setIsLoading(true);
      
      // Filter posts that match the query in title, description, or content
      const searchResults = blogPosts.filter(post => {
        const searchableText = `${post.title} ${post.metaDescription} ${post.content}`.toLowerCase();
        return searchableText.includes(query.toLowerCase());
      });
      
      // Simulate API delay for demonstration purposes
      setTimeout(() => {
        setResults(searchResults);
        setIsLoading(false);
      }, 800);
    };

    if (query) {
      performSearch();
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [query]);

  // Handle search refinement
  const handleSearchRefinement = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchInput.trim()) {
      // Redirect to the same page with the new query
      window.location.href = `/blog/search?q=${encodeURIComponent(searchInput.trim())}`;
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

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-zinc-900 dark:via-purple-950/20 dark:to-zinc-900">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8"
        >
          <FaArrowLeft className="text-xs" />
          Back to all articles
        </Link>

        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4">
            {query ? (
              <>
                Search results for: <span className="text-purple-600 dark:text-purple-400">"{query}"</span>
              </>
            ) : (
              "Search our articles"
            )}
          </h1>
          
          {/* Search bar for refinements */}
          <form onSubmit={handleSearchRefinement} className="relative max-w-lg">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Refine your search..."
              className="w-full px-6 py-3 rounded-full bg-white dark:bg-zinc-800 
                border border-purple-100 dark:border-purple-900/20 shadow-lg
                transition-all duration-300 outline-none focus:ring-2 ring-purple-500/20
                text-zinc-800 dark:text-zinc-200"
            />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2
                bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <>
            {results.length > 0 ? (
              <div className="mb-6">
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                  Found {results.length} {results.length === 1 ? 'result' : 'results'} matching your search.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {results.map(post => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="group relative bg-white dark:bg-zinc-800/50 rounded-2xl overflow-hidden border border-purple-100 dark:border-purple-900/20 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                    >
                      {/* Image container - match the style from BlogGrid */}
                      <div className="relative h-52">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
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
                        <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
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
                </div>
              </div>
            ) : (
              <div className="text-center py-20">
                {query ? (
                  <>
                    <h3 className="text-xl font-bold mb-2">No results found</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                      We couldn't find any articles matching "{query}".
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Try using different keywords or check out our <Link href="/blog" className="text-purple-600 dark:text-purple-400 hover:underline">latest articles</Link>.
                    </p>
                  </>
                ) : (
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Enter a search term to find articles.
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default SearchPage;