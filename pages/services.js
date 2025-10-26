"use client"

import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Box, FileText, Settings, Video, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Prism from '../components/Prism'
import ScrollFloat from '../components/ScrollFloat'

export default function Services() {
  const services = [
    {
      id: 'product-design-modeling',
      icon: Box,
      title: 'Product Design & 3D Modeling',
      description: 'Concept to final parametric 3D model using SOLIDWORKS, CATIA, and Blender for industrial & mechanical product design.',
      backgroundImage: '/images/services/product-design-hero.jpg',
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
      software: ['SOLIDWORKS', 'CATIA', 'Blender'],
      color: 'from-blue-500 to-cyan-500',
      idealClients: 'Startups, manufacturers, prototyping labs'
    },
    {
      id: 'technical-drawing-gdt',
      icon: FileText,
      title: 'Technical Drawing + GD&T + Manufacturing Documentation',
      description: 'Engineering drawings, tolerancing, and Model-Based Definition (MBD) for production-ready documentation.',
      backgroundImage: '/images/services/technical-drawing-hero.jpg',
      features: [
        'Engineering drawings & tolerancing',
        'GD&T application based on fit/function',
        'BOM creation & assembly sheets',
        'Model-Based Definition (PMI on 3D model)',
        '2D drawings in PDF/AutoCAD',
        'GD&T-marked 3D models',
        'BOM tables, revision sheets'
      ],
      software: ['SOLIDWORKS', 'AutoCAD', 'MBD Tools'],
      color: 'from-green-500 to-emerald-500',
      idealClients: 'Fabrication workshops, CNC & molding vendors, industrial machine builders'
    },
    {
      id: 'simulation-analysis',
      icon: Settings,
      title: 'Simulation & Analysis',
      description: 'Structural analysis, thermal simulation, and design optimization using ANSYS and SOLIDWORKS Simulation.',
      backgroundImage: '/images/services/simulation-hero.jpg',
      features: [
        'Structural analysis (FEA)',
        'Static & dynamic load evaluation',
        'Flow & thermal simulation',
        'Design optimization & iteration',
        'Simulation reports',
        'Material, load & safety factor evaluation',
        'Final optimized model for manufacturing'
      ],
      software: ['ANSYS', 'SOLIDWORKS Simulation', 'Flow Simulation'],
      color: 'from-purple-500 to-pink-500',
      idealClients: 'Robotics companies, EV startups, machine design firms'
    },
    {
      id: 'animation-rendering',
      icon: Video,
      title: 'Product Animation, Rendering & Presentation',
      description: 'Photorealistic renders, animations, and promotional videos using Blender, KeyShot, and SolidWorks Visualize.',
      backgroundImage: '/images/services/animation-hero.jpg',
      features: [
        'Photorealistic product renders',
        'Exploded animations',
        'Promo videos for social media / investors',
        'Branding visuals for product launch',
        '4K renders',
        'GIF animations',
        'Video presentation (10–60 sec)'
      ],
      software: ['Blender', 'KeyShot', 'SolidWorks Visualize'],
      color: 'from-orange-500 to-red-500',
      idealClients: 'Marketing agencies, product startups, YouTube creators'
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Consultation',
      description: 'We discuss your project requirements, timeline, and goals to understand your vision.'
    },
    {
      step: 2,
      title: 'Planning',
      description: 'We create a detailed project plan with milestones, deliverables, and timeline.'
    },
    {
      step: 3,
      title: 'Design',
      description: 'I develop the initial concepts and 3D models based on your specifications.'
    },
    {
      step: 4,
      title: 'Review',
      description: 'I share progress updates and gather your feedback for refinements.'
    },
    {
      step: 5,
      title: 'Refinement',
      description: 'I incorporate your feedback and make necessary adjustments to perfect the design.'
    },
    {
      step: 6,
      title: 'Delivery',
      description: 'I deliver the final files, documentation, and any additional assets you need.'
    }
  ]

  return (
    <Layout 
      title="Services"
      description="Professional product design, 3D modeling, technical documentation, simulation analysis, and product animation services. Transform your ideas into reality."
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
            className="text-center mb-12"
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
                My Services
              </ScrollFloat>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive design and engineering services to bring your ideas to life. 
              From concept to completion, we handle every aspect of your project.
            </p>
          </motion.div>

          {/* Hero Service Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <Link 
                key={service.id}
                href={`/services/${service.id}`}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-2 border-transparent group-hover:border-blue-500/30 dark:group-hover:border-blue-400/30"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-xl group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Service Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <Link 
                        href={`/services/${service.id}`}
                        className="block group"
                      >
                        <h3 className="text-2xl font-playfair font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 cursor-pointer hover:underline">
                          {service.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Software */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Software Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.software.map((soft) => (
                        <span 
                          key={soft}
                          className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600"
                        >
                          {soft}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ideal Clients */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Ideal Clients:</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {service.idealClients}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <ScrollFloat
                containerClassName="text-center"
                textClassName="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 dark:text-white"
                animationDuration={1.2}
                ease="back.out(1.7)"
                scrollStart="top bottom-=40%"
                scrollEnd="center center"
                stagger={0.02}
              >
                My Process
              </ScrollFloat>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A streamlined workflow designed to deliver exceptional results efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Positioning Table */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="mb-6">
              <ScrollFloat
                containerClassName="text-center"
                textClassName="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 dark:text-white"
                animationDuration={1.2}
                ease="back.out(1.7)"
                scrollStart="top bottom-=40%"
                scrollEnd="center center"
                stagger={0.02}
              >
                Service Positioning
              </ScrollFloat>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Clear service categories with specific tools and deliverables
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 dark:text-white">Service Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 dark:text-white">Tools Used</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 dark:text-white">What Client Gets</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-white font-medium">Product Design & 3D Modeling</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">SOLIDWORKS, CATIA, Blender</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Optimized 3D CAD Models</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-white font-medium">GD&T + Documentation</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">MBD, Drafting Tools</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Production-Ready Drawings</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-white font-medium">Simulation & Analysis</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">ANSYS, Flow Sim</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Reliable & Tested Design</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-800 dark:text-white font-medium">Renders & Animation</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Blender, KeyShot</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">Attractive Visual Presentations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  )
}
