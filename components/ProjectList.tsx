'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaEdit, FaTrash, FaExternalLinkAlt } from 'react-icons/fa'

export default function ProjectList() {
  // Replace with your actual project data
  const projects = [
    {
      id: "1",
      title: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
      category: "Web Development",
      client: "Fashion Retailer",
      completionDate: "2025-02-15",
      status: "Completed",
      liveSiteUrl: "https://example.com"
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {projects.map((project) => (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4">
                  <div className="w-20 h-12 relative rounded overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">{project.title}</td>
                <td className="px-6 py-4">{project.category}</td>
                <td className="px-6 py-4">{project.client}</td>
                <td className="px-6 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button className="p-2 text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                    {project.liveSiteUrl && (
                      <a
                        href={project.liveSiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-green-600 hover:text-green-800"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}