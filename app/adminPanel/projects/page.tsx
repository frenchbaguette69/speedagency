'use client'

import ProjectForm from '@/components/ProjectForm'
import ProjectList from '@/components/ProjectList'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

export default function ProjectsAdmin() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Manage Projects</h1>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <FaPlus /> Create New Project
          </button>
        </div>

        {isFormOpen && <ProjectForm onClose={() => setIsFormOpen(false)} />}
        <ProjectList />
      </div>
    </div>
  )
}