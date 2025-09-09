// Client-safe project discovery system
// This version uses the new organized project data structure

import { 
  PROJECTS_DATA, 
  getProjectById, 
  getFeaturedProjects, 
  getProjectsByCategory, 
  getProjectsBySoftware, 
  getAllProjects, 
  searchProjects,
  getAllCategories,
  getAllSoftware,
  getProjectStats
} from './projectData'

// Supported 3D model file extensions
const SUPPORTED_MODEL_EXTENSIONS = ['.gltf', '.glb', '.obj', '.fbx', '.dae', '.3ds']

// Convert new project data to legacy format for backward compatibility
const convertToLegacyFormat = (project) => {
  return {
    id: project.id,
    title: project.title,
    category: project.category,
    software: project.software,
    description: project.description,
    image: project.thumbnail || project.heroImage,
    gallery: project.gallery || [project.thumbnail || project.heroImage],
    modelUrl: project.models?.[0]?.url || null,
    videoUrl: project.videos?.[0]?.url || null,
    tags: project.tags || [],
    featured: project.featured || false,
    year: project.year || new Date().getFullYear(),
    specifications: project.specifications || {},
    technicalDetails: project.technicalDetails || []
  }
}

// Generate legacy project data from new structure
const LEGACY_PROJECT_DATA = Object.fromEntries(
  Object.entries(PROJECTS_DATA).map(([key, project]) => [key, convertToLegacyFormat(project)])
)

// Legacy functions for backward compatibility
export const generateProjectData = () => {
  return Object.values(LEGACY_PROJECT_DATA)
}

export const getCategories = () => {
  return getAllCategories()
}

export const getSoftware = () => {
  return getAllSoftware()
}

// New functions using the organized structure
export const getProject = (id) => {
  return getProjectById(id)
}

export const getFeatured = () => {
  return getFeaturedProjects()
}

// Export the functions with the expected names for backward compatibility
export { getFeaturedProjects, getProjectById }

export const getProjectsByCategoryFilter = (category) => {
  return getProjectsByCategory(category)
}

export const getProjectsBySoftwareFilter = (software) => {
  return getProjectsBySoftware(software)
}

export const getAll = () => {
  return getAllProjects()
}

export const search = (query) => {
  return searchProjects(query)
}

export const getStats = () => {
  return getProjectStats()
}

// Utility functions - getProjectById is already imported from projectData.js

export const isModelFile = (filename) => {
  const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'))
  return SUPPORTED_MODEL_EXTENSIONS.includes(ext)
}

export const getModelFiles = (project) => {
  if (!project || !project.models) return []
  return project.models.filter(model => isModelFile(model.url))
}

export const getVideoFiles = (project) => {
  if (!project || !project.videos) return []
  return project.videos
}

export const getImageFiles = (project) => {
  if (!project) return []
  const images = []
  if (project.heroImage) images.push(project.heroImage)
  if (project.thumbnail) images.push(project.thumbnail)
  if (project.gallery) images.push(...project.gallery)
  return [...new Set(images)] // Remove duplicates
}

// Project validation
export const validateProject = (project) => {
  const required = ['id', 'title', 'category', 'software', 'description']
  const missing = required.filter(field => !project[field])
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`)
  }
  
  return true
}

// Export the main project data for direct access
export { PROJECTS_DATA }