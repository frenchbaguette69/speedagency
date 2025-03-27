import Link from 'next/link'
import { FaBlog, FaProjectDiagram } from 'react-icons/fa'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/adminPanel/blogs" 
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <FaBlog className="text-4xl text-purple-600" />
              <div>
                <h2 className="text-xl font-semibold">Manage Blogs</h2>
                <p className="text-gray-600 dark:text-gray-300">Add, edit, or remove blog posts</p>
              </div>
            </div>
          </Link>

          <Link href="/adminPanel/projects"
            className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4">
              <FaProjectDiagram className="text-4xl text-purple-600" />
              <div>
                <h2 className="text-xl font-semibold">Manage Projects</h2>
                <p className="text-gray-600 dark:text-gray-300">Add, edit, or remove projects</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}