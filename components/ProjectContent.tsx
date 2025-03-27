'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectContentProps {
  title: string
  description: string
  content: string
  image: string
  category: string
  technologies: string[]
  client: string
  completionDate: string
  liveSiteUrl?: string
}

export default function ProjectContent({
  title,
  description,
  content,
  image,
  category,
  technologies,
  client,
  completionDate,
  liveSiteUrl
}: ProjectContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-gray-900"
    >
      <div className="relative h-[70vh] w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-purple-600 text-white rounded-full text-sm font-medium mb-4"
          >
            {category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl"
          >
            {description}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              {content}
            </motion.div>
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-gray-600 dark:text-gray-400">Client</dt>
                  <dd className="font-medium">{client}</dd>
                </div>
                <div>
                  <dt className="text-gray-600 dark:text-gray-400">Technologies</dt>
                  <dd className="flex flex-wrap gap-2 mt-2">
                    {technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-600 dark:text-gray-400">Completed</dt>
                  <dd className="font-medium">
                    {new Date(completionDate).toLocaleDateString()}
                  </dd>
                </div>
                {liveSiteUrl && (
                  <div>
                    <dt className="text-gray-600 dark:text-gray-400">Live Site</dt>
                    <dd>
                      <Link 
                        href={liveSiteUrl}
                        target="_blank"
                        className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                      >
                        Visit Website →
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}