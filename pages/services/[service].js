"use client"

import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Play, 
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  Box,
  FileText,
  Settings,
  Video
} from 'lucide-react'
import Layout from '../../components/Layout'
import Link from 'next/link'

// Service data structure
const Data = {
  'product-design-modeling': {
    title: 'Product Design & 3D Modeling',
    tagline: 'Concept to final parametric 3D model using SOLIDWORKS, CATIA, and Blender',
    description: 'Transform your ideas into reality with comprehensive product design and 3D modeling services. From initial concept sketches to final parametric models, I specialize in industrial and mechanical product design using industry-standard software.',
    heroImage: '/images/services/product-design-hero.jpg',
    icon: Box,
    features: [
      'Concept to final parametric 3D model',
      'Industrial & Mechanical product design',
      'Surface + Solid modeling',
      'Model optimization for manufacturability',
      'Part models (.sldprt / .step / .igs)',
      'Assemblies (.sldasm)',
      'Exploded views & animation (optional)',
      'Manufacturing-ready drawings'
    ],
    deliverables: [
      'Part models (.sldprt / .step / .igs)',
      'Assemblies (.sldasm)',
      'Exploded views & animation (optional)',
      'Manufacturing-ready drawings'
    ],
    software: ['SOLIDWORKS', 'CATIA', 'Blender'],
    idealClients: 'Startups, manufacturers, prototyping labs',
    gallery: [
      '/images/services/product-design-1.jpg',
      '/images/services/product-design-2.jpg',
      '/images/services/product-design-3.jpg',
      '/images/services/product-design-4.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/product-design-demo',
    related: ['technical-drawing-gdt', 'simulation-analysis', 'animation-rendering']
  },
  'technical-drawing-gdt': {
    title: 'Technical Drawing + GD&T + Manufacturing Documentation',
    tagline: 'Engineering drawings, tolerancing, and Model-Based Definition (MBD) for production-ready documentation',
    description: 'Ensure your designs meet manufacturing standards with comprehensive technical documentation services. I provide engineering drawings, GD&T application, and Model-Based Definition to create production-ready documentation.',
    heroImage: '/images/services/technical-drawing-hero.jpg',
    icon: FileText,
    features: [
      'Engineering drawings & tolerancing',
      'GD&T application based on fit/function',
      'BOM creation & assembly sheets',
      'Model-Based Definition (PMI on 3D model)',
      '2D drawings in PDF/AutoCAD',
      'GD&T-marked 3D models',
      'BOM tables, revision sheets'
    ],
    deliverables: [
      '2D drawings in PDF/AutoCAD',
      'GD&T-marked 3D models',
      'BOM tables, revision sheets'
    ],
    software: ['SOLIDWORKS', 'AutoCAD', 'MBD Tools'],
    idealClients: 'Fabrication workshops, CNC & molding vendors, industrial machine builders',
    gallery: [
      '/images/services/technical-drawing-1.jpg',
      '/images/services/technical-drawing-2.jpg',
      '/images/services/technical-drawing-3.jpg',
      '/images/services/technical-drawing-4.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/technical-drawing-demo',
    related: ['product-design-modeling', 'simulation-analysis', 'animation-rendering']
  },
  'simulation-analysis': {
    title: 'Simulation & Analysis',
    tagline: 'Structural analysis, thermal simulation, and design optimization using ANSYS and SOLIDWORKS Simulation',
    description: 'Validate your designs with comprehensive simulation and analysis services. I provide structural analysis, thermal simulation, and design optimization to ensure your products meet performance and safety requirements.',
    heroImage: '/images/services/simulation-hero.jpg',
    icon: Settings,
    features: [
      'Structural analysis (FEA)',
      'Static & dynamic load evaluation',
      'Flow & thermal simulation',
      'Design optimization & iteration',
      'Simulation reports',
      'Material, load & safety factor evaluation',
      'Final optimized model for manufacturing'
    ],
    deliverables: [
      'Simulation reports',
      'Material, load & safety factor evaluation',
      'Final optimized model for actual manufacturing'
    ],
    software: ['ANSYS', 'SOLIDWORKS Simulation', 'Flow Simulation'],
    idealClients: 'Robotics companies, EV startups, machine design firms',
    gallery: [
      '/images/services/simulation-1.jpg',
      '/images/services/simulation-2.jpg',
      '/images/services/simulation-3.jpg',
      '/images/services/simulation-4.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/simulation-demo',
    related: ['product-design-modeling', 'technical-drawing-gdt', 'animation-rendering']
  },
  'animation-rendering': {
    title: 'Product Animation, Rendering & Presentation',
    tagline: 'Photorealistic renders, animations, and promotional videos using Blender, KeyShot, and SolidWorks Visualize',
    description: 'Bring your products to life with stunning visual presentations. I create photorealistic renders, animations, and promotional videos that captivate your audience and showcase your products in their best light.',
    heroImage: '/images/services/animation-hero.jpg',
    icon: Video,
    features: [
      'Photorealistic product renders',
      'Exploded animations',
      'Promo videos for social media / investors',
      'Branding visuals for product launch',
      '4K renders',
      'GIF animations',
      'Video presentation (10–60 sec)'
    ],
    deliverables: [
      '4K renders',
      'GIF animations',
      'Video presentation (10–60 sec)'
    ],
    software: ['Blender', 'KeyShot', 'SolidWorks Visualize'],
    idealClients: 'Marketing agencies, product startups, YouTube creators',
    gallery: [
      '/images/services/animation-1.jpg',
      '/images/services/animation-2.jpg',
      '/images/services/animation-3.jpg',
      '/images/services/animation-4.jpg'
    ],
    videoUrl: 'https://www.youtube.com/embed/animation-demo',
    related: ['product-design-modeling', 'technical-drawing-gdt', 'simulation-analysis']
  }
}

export default function ServicePage() {
  const router = useRouter()
  const { service } = router.query
  const [currentService, setCurrentService] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (service && Data[service]) {
      setCurrentService(Data[service])
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
      {/* Hero Section with Background Image */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${currentService.heroImage})`,
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Service Icon */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <currentService.icon className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            {/* Service Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight"
            >
              {currentService.title}
            </motion.h1>
            
            {/* Service Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto"
            >
              {currentService.tagline}
            </motion.p>
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
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
              Deliverables
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What you'll receive upon project completion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {currentService.deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {deliverable}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Ideal Clients */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Software */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-gray-800 dark:text-white mb-6">
                Software Used
              </h2>
              <div className="space-y-4">
                {currentService.software.map((soft, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{soft.charAt(0)}</span>
                    </div>
                    <span className="text-lg text-gray-600 dark:text-gray-300">{soft}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Ideal Clients */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h2 className="text-3xl font-playfair font-bold text-gray-800 dark:text-white mb-6">
                Ideal Clients
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {currentService.idealClients}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
              My Work Gallery
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Visual examples of my {currentService.title.toLowerCase()} projects
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
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 dark:text-white mb-4">
              Related Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore my other design and engineering services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {currentService.related.map((serviceId, index) => {
              const relatedService = Data[serviceId]
              if (!relatedService) return null
              
              return (
                <motion.div
                  key={serviceId}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
                  className="group"
                >
                  <Link href={`/services/${serviceId}`}>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <relatedService.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-200">
                          {relatedService.title}
                        </h3>
                      </div>
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
