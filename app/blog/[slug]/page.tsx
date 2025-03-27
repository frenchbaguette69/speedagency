import { Metadata } from 'next'
import BlogPostContent from '@/components/BlogPostContent'
import { notFound } from 'next/navigation'

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  featuredImage: string
  metaDescription: string
  seoAuthor: string
  createdAt: string
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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = blogPosts.find(blog => blog.slug === params.slug)
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found'
    }
  }
  
  return {
    title: blog.title,
    description: blog.metaDescription,
    authors: [{ name: blog.seoAuthor }],
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      type: 'article',
      publishedTime: blog.createdAt,
      url: `/blog/${params.slug}`,
      images: [
        {
          url: blog.featuredImage,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    }
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogPosts.find(blog => blog.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <BlogPostContent 
    title={blog.title}
    date={blog.createdAt}
    content={blog.content}
    featuredImage={blog.featuredImage}
    author={blog.seoAuthor}
  />
  )
}