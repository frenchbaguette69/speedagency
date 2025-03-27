import { BlogGrid } from "@/components/BlogGrid";
import { BlogHero } from "@/components/BlogHero";
import { CategoryTabs } from "@/components/CategoryTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Latest Insights & Updates | Speed Agency",
  description: "Discover the latest trends, insights, and strategies in digital marketing, web development, and online business growth.",
  openGraph: {
    title: "Blog - Latest Digital Marketing & Web Development Insights",
    description: "Stay ahead with our latest insights on digital marketing, web development, and business growth strategies.",
    images: [{ url: "/images/blog-banner.jpg", alt: "Blog Banner" }],
  },
};

const BlogPage = async () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-zinc-900 dark:via-purple-950/20 dark:to-zinc-900">
      <BlogHero />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <CategoryTabs />
        
        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-8 mt-12">
          {/* Main column */}
          <div className="lg:col-span-12 flex flex-col">
            {/* Featured blog posts at the top */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Featured Articles</span>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full ml-2"></div>
              </h2>
              <BlogGrid featured={true} limit={2} columns={2} />
            </div>
            
            {/* Regular blog posts below */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Latest Articles</span>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full ml-2"></div>
              </h2>
              <BlogGrid featured={false} limit={6} columns={2} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;