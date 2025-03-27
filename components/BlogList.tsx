'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function BlogList() {
  // Replace with your actual blog data
  const blogs = [
    {
      id: "1",
      title: "Sample Blog Post",
      featuredImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=60",
      createdAt: "2024-03-28",
      status: "Published"
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {blogs.map((blog) => (
              <motion.tr
                key={blog.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4">
                  <div className="w-20 h-12 relative rounded overflow-hidden">
                    <Image
                      src={blog.featuredImage}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4">{blog.createdAt}</td>
                <td className="px-6 py-4">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {blog.status}
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