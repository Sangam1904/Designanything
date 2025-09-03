"use client"

import { useState } from 'react'
import { Image as ImageIcon, ExternalLink } from 'lucide-react'

export default function ImageVideoDisplay({ 
  project, 
  className = '', 
  height = 'h-64',
  showOverlay = true,
  onImageClick = null,
  showTitle = true
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Determine what to display: image gallery or single image
  const hasImages = project.gallery && project.gallery.length > 0
  const hasImage = project.image && project.image !== '/images/projects/p1.jpg' // Skip placeholder image

  // Handle image click
  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(project)
    }
  }

  // Handle gallery navigation
  const nextImage = () => {
    if (hasImages && project.gallery.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length)
    }
  }

  const prevImage = () => {
    if (hasImages && project.gallery.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.gallery.length - 1 : prev - 1
      )
    }
  }

  // Render image gallery
  if (hasImages && project.gallery.length > 0) {
    const currentImage = project.gallery[currentImageIndex]
    
    return (
      <div className={`relative ${height} overflow-hidden rounded-t-lg ${className}`} style={{ aspectRatio: '4/3' }}>
        <img
          src={currentImage}
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleImageClick}
        />
        
        {/* Project Title Overlay */}
        {showTitle && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
            <h3 className="text-lg font-playfair font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-200">
              {project.category}
            </p>
          </div>
        )}
        
        {/* Gallery Navigation */}
        {project.gallery.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
            >
              →
            </button>
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {project.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        {showOverlay && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
          </div>
        )}
      </div>
    )
  }

  // Render single image
  if (hasImage) {
    return (
      <div className={`relative ${height} overflow-hidden rounded-t-lg ${className}`} style={{ aspectRatio: '4/3' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleImageClick}
        />
        
        {/* Project Title Overlay */}
        {showTitle && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
            <h3 className="text-lg font-playfair font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-200">
              {project.category}
            </p>
          </div>
        )}
        
        {showOverlay && (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
          </div>
        )}
      </div>
    )
  }

  // Fallback placeholder
  return (
    <div className={`relative ${height} overflow-hidden rounded-t-lg ${className}`} style={{ aspectRatio: '4/3' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <ImageIcon className="w-8 h-8 text-secondary" />
          </div>
          <p className="text-lg font-medium">{project.title}</p>
          <p className="text-gray-300 text-sm">{project.category}</p>
        </div>
      </div>
      
      {/* Project Title Overlay */}
      {showTitle && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          <h3 className="text-lg font-playfair font-bold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-gray-200">
            {project.category}
          </p>
        </div>
      )}
    </div>
  )
}
