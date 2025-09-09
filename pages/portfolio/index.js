"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { Search, Filter, ExternalLink } from 'lucide-react'
import ProjectDetailModal from '../../components/ProjectDetailModal'
import ImageVideoDisplay from '../../components/ImageVideoDisplay'
import Prism from '../../components/Prism'
import ScrollFloat from '../../components/ScrollFloat'
import { 
  generateProjectData, 
  getCategories, 
  getSoftware, 
  searchProjects 
} from '../../utils/projectDiscovery'

export default function Portfolio() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedSoftware, setSelectedSoftware] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle URL parameters for category filtering
  useEffect(() => {
    if (router.query.category) {
      setSelectedCategory(router.query.category)
    }
  }, [router.query.category])

  const projects = generateProjectData()
  const categories = getCategories()
  const software = getSoftware()

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSoftware = selectedSoftware === 'all' || project.software === selectedSoftware

    return matchesSearch && matchesCategory && matchesSoftware
  })

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
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % filteredProjects.length
    setSelectedProject(filteredProjects[nextIndex])
  }

  const previousProject = () => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id)
    const prevIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1
    setSelectedProject(filteredProjects[prevIndex])
  }

  const hasNext = selectedProject && filteredProjects.length > 1
  const hasPrevious = selectedProject && filteredProjects.length > 1

  return (
    <Layout 
      title="Portfolio"
      description="Explore  of CAD modeling, 3D design, and product animation projects. From mechanical design to surface modeling, see our expertise in action."
    >
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        {/* Prism Background Effect - Full Section */}
        <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0.5}
            glow={1}
          />
        </div>
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <ScrollFloat
                containerClassName="text-center"
                textClassName="text-4xl lg:text-6xl font-playfair font-bold text-gray-800 dark:text-white"
                animationDuration={1.5}
                ease="back.out(1.7)"
                scrollStart="top bottom-=30%"
                scrollEnd="center center"
                stagger={0.03}
              >
                My Portfolio
              </ScrollFloat>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my diverse collection of CAD modeling, 3D design, and product animation projects. 
              Each project showcases my expertise in transforming ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              <select
                value={selectedSoftware}
                onChange={(e) => setSelectedSoftware(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {software.map(sw => (
                  <option key={sw} value={sw}>
                    {sw === 'all' ? 'All Software' : sw}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group border border-gray-200 dark:border-gray-700"
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
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Software & Year */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {project.software}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded border border-gray-200 dark:border-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded border border-gray-200 dark:border-gray-600">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-center space-x-4">
                      <button 
                        onClick={() => openProjectModal(project)}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200 group"
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                      
                      {project.videoUrl && (
                        <a 
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors duration-200 group"
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
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        onNext={nextProject}
        onPrevious={previousProject}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
      />
    </Layout>
  )
}
