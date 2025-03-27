"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  featured: boolean;
}

interface ProjectGridProps {
  featured?: boolean;
  limit?: number;
  columns?: number;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with Next.js and Shopify",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60",
    category: "Web Development",
    link: "/projects/ecommerce-platform",
    featured: true
  },
  {
    id: "2",
    title: "Agency Website",
    description: "Responsive agency website with modern design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    category: "Web Design",
    link: "/projects/agency-website",
    featured: true
  },
  {
    id: "3",
    title: "Mobile App Development",
    description: "Cross-platform mobile app built with React Native",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60",
    category: "Mobile Development",
    link: "/projects/mobile-app",
    featured: false
  },
  {
    id: "4",
    title: "Digital Marketing Campaign",
    description: "Successful marketing campaign for tech startup",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    category: "Digital Marketing",
    link: "/projects/marketing-campaign",
    featured: false
  }
];

export const ProjectGrid = ({ featured = false, limit = 6, columns = 3 }: ProjectGridProps) => {
  const filteredProjects = projects
    .filter(project => featured ? project.featured : true)
    .slice(0, limit);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Link href={project.link} className="block">
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mt-3 mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};