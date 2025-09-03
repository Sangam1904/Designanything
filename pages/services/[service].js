"use client"

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Play, 
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react'
import Layout from '../../components/Layout'
import { generateProjectData } from '../../utils/projectDiscovery'
import Link from 'next/link'

// Service data structure
const servicesData = {
  'cad-modeling': {
    title: 'CAD Modeling',
    tagline: 'Professional CAD modeling services for product design, engineering, and manufacturing',
    description: 'Our CAD modeling expertise spans across multiple industries, delivering precise 3D models that bridge the gap between concept and reality. We specialize in parametric modeling, surface design, and assembly management using industry-standard software.',
    heroImage: '/images/services/cad-modeling-hero.jpg',
    features: [
      'Parametric Modeling',
      'Surface Design',
      'Assembly Management',
      'Technical Drawings',
      'GD&T Implementation',
      'Manufacturing Optimization'
    ],
    gallery: [
      '/images/services/cad-gallery-1.jpg',
      '/images/services/cad-gallery-2.jpg',
      '/images/services/cad-gallery-3.jpg',
      '/images/services/cad-gallery-4.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/cad-modeling-demo',
    relatedServices: ['3d-design', 'simulation', 'documentation']
  },
  '3d-design': {
    title: '3D Design',
    tagline: 'Creative 3D design solutions for visualization, prototyping, and digital art',
    description: 'Transform your ideas into stunning 3D visualizations with our comprehensive 3D design services. From product visualization to architectural renders, we create immersive experiences that captivate your audience.',
    heroImage: '/images/services/3d-design-hero.jpg',
    features: [
      'Product Visualization',
      'Architectural Design',
      'Animation & Motion',
      'Digital Sculpting',
      'Character Design',
      'Environmental Modeling'
    ],
    gallery: [
      '/images/services/3d-gallery-1.jpg',
      '/images/services/3d-gallery-2.jpg',
      '/images/services/3d-gallery-3.jpg',
      '/images/services/3d-gallery-4.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/3d-design-demo',
    relatedServices: ['cad-modeling', 'rendering', 'product-animation']
  },
  'product-animation': {
    title: 'Product Animation',
    tagline: 'Dynamic product animations and motion graphics that bring your designs to life',
    description: 'Create engaging content for marketing, presentations, and client demonstrations with our professional product animation services. We specialize in assembly animations, product walkthroughs, and technical demonstrations.',
    heroImage: '/images/services/product-animation-hero.jpg',
    features: [
      'Product Demonstrations',
      'Assembly Animations',
      'Marketing Videos',
      'Technical Explainer',
      'Motion Graphics',
      'Interactive Content'
    ],
    gallery: [
      '/images/services/animation-gallery-1.jpg',
      '/images/services/animation-gallery-2.jpg',
      '/images/services/animation-gallery-3.jpg',
      '/images/services/animation-gallery-4.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/product-animation-demo',
    relatedServices: ['3d-design', 'rendering', 'cad-modeling']
  },
  'rendering': {
    title: 'Rendering',
    tagline: 'Photorealistic renders and visualizations that bring your designs to life',
    description: 'Our rendering services deliver stunning, photorealistic imagery that showcases your designs in their best light. From product marketing to architectural visualization, we create compelling visuals that engage your audience.',
    heroImage: '/images/services/rendering-hero.jpg',
    features: [
      'Photorealistic Product Renders',
      'Material & Texture Setup',
      'Advanced Lighting Design',
      'Environment Creation',
      '360° Product Views',
      'Marketing-Ready Imagery'
    ],
    gallery: [
      '/images/services/rendering-gallery-1.jpg',
      '/images/services/rendering-gallery-2.jpg',
      '/images/services/rendering-gallery-3.jpg',
      '/images/services/rendering-gallery-4.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/rendering-demo',
    relatedServices: ['3d-design', 'product-animation', 'cad-modeling']
  },
  'simulation': {
    title: 'Simulation',
    tagline: 'Engineering analysis and simulation for design optimization and validation',
    description: 'Ensure your designs meet performance and safety requirements with our comprehensive engineering analysis services. We provide structural, thermal, and fluid dynamics analysis using advanced simulation tools.',
    heroImage: '/images/services/simulation-hero.jpg',
    features: [
      'Structural Analysis',
      'Thermal Analysis',
      'Fluid Dynamics',
      'Stress Testing',
      'Optimization Studies',
      'Failure Analysis'
    ],
    gallery: [
      '/images/services/simulation-gallery-1.jpg',
      '/images/services/simulation-gallery-2.jpg',
      '/images/services/simulation-gallery-3.jpg',
      '/images/services/simulation-gallery-4.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/simulation-demo',
    relatedServices: ['cad-modeling', 'documentation', '3d-design']
  },
  'documentation': {
    title: 'Documentation',
    tagline: 'Complete technical documentation for manufacturing and quality control',
    description: 'From technical drawings to comprehensive project reports, our documentation services ensure your designs are properly documented for manufacturing, assembly, and quality control processes.',
    heroImage: '/images/services/documentation-hero.jpg',
    features: [
      'Technical Drawings',
      'Assembly Instructions',
      'Bill of Materials (BOM)',
      'Project Specifications',
      'User Manuals',
      'Quality Control Docs'
    ],
    gallery: [
      '/images/services/documentation-gallery-1.jpg',
      '/images/services/documentation-gallery-2.jpg',
      '/images/services/documentation-gallery-3.jpg',
      '/images/services/documentation-gallery-4.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/documentation-demo',
    relatedServices: ['cad-modeling', 'simulation', '3d-design']
  }
}

export default function ServicePage() {
  const router = useRouter()
  const { service } = router.query
  const [currentService, setCurrentService] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (service && servicesData[service]) {
      setCurrentService(servicesData[service])
    }
  }, [service])

  if (!currentService) {
    return (
      <Layout title="Service" description="Loading service...">
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Loading service...</p>
          </div>
        </div>
      </Layout>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentService.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentService.gallery.length - 1 : prev - 1
    )
  }

  return (
    <Layout title={currentService.title} description={currentService.tagline}>
      {/* Title Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              {currentService.title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {currentService.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image/Service Image */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={currentService.heroImage} 
                alt={currentService.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-8">
              About Our {currentService.title} Service
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {currentService.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
              What's Included
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive features and capabilities of our {currentService.title.toLowerCase()} service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {currentService.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
              Our Work Gallery
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Visual examples of our {currentService.title.toLowerCase()} projects
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={currentService.gallery[currentImageIndex]} 
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full h-96 object-cover"
              />
              
              {/* Navigation Arrows */}
              {currentService.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    {currentImageIndex + 1} of {currentService.gallery.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {currentService.gallery.length > 1 && (
              <div className="flex justify-center space-x-2 mt-6">
                {currentService.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
              Related Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our other design and engineering services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {currentService.relatedServices.map((serviceId, index) => {
              const relatedService = servicesData[serviceId]
              if (!relatedService) return null
              
              return (
                <motion.div
                  key={serviceId}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                  className="group"
                >
                  <Link href={`/services/${serviceId}`}>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-primary transition-colors duration-200">
                        {relatedService.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                        {relatedService.tagline}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
