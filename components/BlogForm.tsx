'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

interface BlogFormProps {
  onClose: () => void
}

export default function BlogForm({ onClose }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    metaDescription: '',
    featuredImage: '',
    seoAuthor: 'Speed Agency',
    slug: '',
    category: '',
    status: 'draft'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Add your form submission logic here
      console.log(formData)
      onClose()
    } catch (error) {
      console.error('Error submitting blog:', error)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
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
          <h2 className="text-2xl font-bold dark:text-white">Create New Blog Post</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Fill in the details for your new blog post</p>
        </div>
        
        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => {
                const title = e.target.value
                setFormData({
                  ...formData,
                  title,
                  slug: generateSlug(title)
                })
              }}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent transition-colors"
              required
              placeholder="Enter blog title"
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
              <option value="technology">Technology</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="development">Development</option>
            </select>
          </div>

          {/* Content Textarea */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Content</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent transition-colors min-h-[200px]"
              required
              placeholder="Write your blog content here..."
            />
          </div>

          {/* Meta Description */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">
              Meta Description <span className="text-gray-500">(max 160 characters)</span>
            </label>
            <textarea
              value={formData.metaDescription}
              onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent transition-colors"
              maxLength={160}
              required
              placeholder="Brief description for SEO..."
            />
          </div>

          {/* Featured Image URL */}
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-white">Featured Image URL</label>
            <input
              type="url"
              value={formData.featuredImage}
              onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 
                       focus:border-transparent transition-colors"
              required
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4 pt-4 border-t dark:border-gray-700">
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
              Publish Post
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}