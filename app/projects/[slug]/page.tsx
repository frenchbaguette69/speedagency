import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectContent from '@/components/ProjectContent'

interface Project {
  id: string
  title: string
  slug: string
  description: string
  content: string
  image: string
  category: string
  technologies: string[]
  client: string
  completionDate: string
  liveSiteUrl?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    description: "Modern e-commerce solution with Next.js and Shopify",
    content: "Detailed description of the e-commerce platform project...",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    category: "Web Development",
    technologies: ["Next.js", "Shopify", "Tailwind CSS", "TypeScript"],
    client: "Fashion Retailer",
    completionDate: "2025-02-15",
    liveSiteUrl: "https://example.com"
  },
  // Add more projects here
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(project => project.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found'
    }
  }
  
  return {
    title: `${project.title} - Project Case Study`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      images: [
        {
          url: project.image,
          width: 800,
          height: 600,
          alt: project.title,
        },
      ],
    }
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(project => project.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <ProjectContent
      title={project.title}
      description={project.description}
      content={project.content}
      image={project.image}
      category={project.category}
      technologies={project.technologies}
      client={project.client}
      completionDate={project.completionDate}
      liveSiteUrl={project.liveSiteUrl}
    />
  )
}