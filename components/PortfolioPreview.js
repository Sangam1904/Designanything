"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { getFeaturedProjects } from '../utils/projectDiscovery'
import { useState, useEffect } from 'react'
import ProjectDetailModal from './ProjectDetailModal'
import ImageVideoDisplay from './ImageVideoDisplay'

export default function PortfolioPreview() {
  const featuredProjects = getFeaturedProjects()
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Modal handlers
  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const nextProject = () => {
    const currentIndex = featuredProjects.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % featuredProjects.length
    setSelectedProject(featuredProjects[nextIndex])
  }

  const previousProject = () => {
    const currentIndex = featuredProjects.findIndex(p => p.id === selectedProject.id)
    const prevIndex = currentIndex === 0 ? featuredProjects.length - 1 : currentIndex - 1
    setSelectedProject(featuredProjects[nextIndex])
  }

  const hasNext = selectedProject && featuredProjects.length > 1
  const hasPrevious = selectedProject && featuredProjects.length > 1

  return (
                    <section className="section-padding bg-neutral dark:bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
                                <p className="text-xl text-primary dark:text-neutral max-w-3xl mx-auto leading-relaxed">
            Explore our latest work showcasing expertise in CAD modeling, 3D design, and product animation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group"
            >
              {/* Project Image Display with 4:3 aspect ratio */}
              <div className="relative">
                <ImageVideoDisplay
                  project={project}
                  className="w-full"
                  height="h-auto"
                  showOverlay={false}
                  showTitle={true}
                  onImageClick={openProjectModal}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button 
                      onClick={() => openProjectModal(project)}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      title="View Details"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                    
                    {project.videoUrl && (
                      <a 
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        title="Watch Video"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Software & Year */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {project.software}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center space-x-4">
                  <button 
                    onClick={() => openProjectModal(project)}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  
                  {project.videoUrl && (
                    <a 
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-secondary hover:text-secondary/80 font-medium transition-colors duration-200 group"
                    >
                      Watch Video
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="/portfolio"
            className="inline-flex items-center btn-primary group"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
      
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        onNext={nextProject}
        onPrevious={previousProject}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    </section>
  )
}
