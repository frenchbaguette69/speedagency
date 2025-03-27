'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

interface ProjectFormProps {
  onClose: () => void
}

export default function ProjectForm({ onClose }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
    category: '',
    technologies: '',
    client: '',
    completionDate: '',
    liveSiteUrl: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Add your form submission logic here
      console.log(formData)
      onClose()
    } catch (error) {
      console.error('Error submitting project:', error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-[9999]"
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        {/* Form Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold dark:text-white">Create New Project</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Fill in the project details below</p>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Project Title */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Project Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent transition-colors"
              required
              placeholder="Enter project title"
            />
          </div>

          {/* Category Select */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent transition-colors"
              required
            >
              <option value="">Select a category</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Development</option>
              <option value="design">UI/UX Design</option>
              <option value="marketing">Digital Marketing</option>
            </select>
          </div>

          {/* Short Description */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Short Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent transition-colors"
              required
              placeholder="Brief project description..."
            />
          </div>

          {/* Detailed Content */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Detailed Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent transition-colors min-h-[200px]"
              required
              placeholder="Detailed project information..."
            />
          </div>

          {/* Project Image */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Project Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent transition-colors"
              required
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Technologies and Client */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Technologies</label>
              <input
                type="text"
                value={formData.technologies}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent transition-colors"
                placeholder="Next.js, React, TypeScript"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Client</label>
              <input
                type="text"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent transition-colors"
                required
                placeholder="Client name"
              />
            </div>
          </div>

          {/* Dates and URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Completion Date</label>
              <input
                type="date"
                value={formData.completionDate}
                onChange={(e) => setFormData({ ...formData, completionDate: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-white">Live Site URL</label>
              <input
                type="url"
                value={formData.liveSiteUrl}
                onChange={(e) => setFormData({ ...formData, liveSiteUrl: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent transition-colors"
                placeholder="https://example.com"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t dark:border-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 
                       dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg 
                       transition-colors focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 
                       dark:focus:ring-offset-gray-800"
            >
              Create Project
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}