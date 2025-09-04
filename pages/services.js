"use client"

import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Box, Zap, Video, Palette, Settings, FileText, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      id: 'cad-modeling',
      icon: Box,
      title: 'CAD Modeling',
      description: 'Professional 3D modeling using industry-standard software for mechanical, industrial, and product design.',
      backgroundImage: '/images/services/cad-modeling-bg.jpg',
      features: [
        'Mechanical component design',
        'Assembly modeling and management',
        'GD&T and engineering drawings',
        'Sheet metal design',
        'Weldment design',
        'Surface modeling'
      ],
      software: ['SOLIDWORKS', 'CATIA', 'AutoCAD', 'Inventor'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: '3d-design',
      icon: Zap,
      title: '3D Design',
      description: 'Creative 3D design solutions for products, furniture, and industrial applications with complex geometry.',
      backgroundImage: '/images/services/3d-design-bg.jpg',
      features: [
        'Product concept development',
        'Industrial design',
        'Furniture and interior design',
        'Complex surface modeling',
        'Aesthetic design optimization',
        'Manufacturing-ready models'
      ],
      software: ['Blender', 'CATIA', 'SOLIDWORKS', 'Rhino'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'product-animation',
      icon: Video,
      title: 'Product Animation',
      description: 'High-quality product animations and visualizations for marketing, presentations, and client demonstrations.',
      backgroundImage: '/images/services/product-animation-bg.jpg',
      features: [
        'Assembly and disassembly animations',
        'Product walkthrough videos',
        'Marketing and promotional content',
        'Technical demonstration videos',
        'Interactive 3D presentations',
        'Motion graphics integration'
      ],
      software: ['Blender', 'SOLIDWORKS', 'CATIA', 'After Effects'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'rendering',
      icon: Palette,
      title: 'Rendering',
      description: 'Photorealistic renders and visualizations that bring your designs to life with stunning detail and lighting.',
      backgroundImage: '/images/services/rendering-bg.jpg',
      features: [
        'Photorealistic product renders',
        'Material and texture setup',
        'Advanced lighting design',
        'Environment and background creation',
        '360-degree product views',
        'Marketing-ready imagery'
      ],
      software: ['Blender', 'V-Ray', 'KeyShot', 'SOLIDWORKS Visualize'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'simulation',
      icon: Settings,
      title: 'Simulation',
      description: 'Engineering analysis and simulation using advanced tools for stress analysis, thermal analysis, and optimization.',
      backgroundImage: '/images/services/simulation-bg.jpg',
      features: [
        'Structural stress analysis',
        'Thermal analysis',
        'Modal analysis',
        'Design optimization',
        'Finite element analysis (FEA)',
        'Performance validation'
      ],
      software: ['ANSYS', 'SOLIDWORKS Simulation', 'CATIA Analysis'],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'documentation',
      icon: FileText,
      title: 'Documentation',
      description: 'Complete technical documentation including drawings, specifications, and project reports.',
      backgroundImage: '/images/services/documentation-bg.jpg',
      features: [
        'Technical drawings and blueprints',
        'Assembly instructions',
        'Bill of materials (BOM)',
        'Project specifications',
        'User manuals and guides',
        'Quality control documentation'
      ],
      software: ['SOLIDWORKS', 'AutoCAD', 'CATIA', 'Microsoft Office'],
      color: 'from-gray-500 to-slate-500'
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
      description: 'Our team develops the initial concepts and 3D models based on your specifications.'
    },
    {
      step: 4,
      title: 'Review',
      description: 'We share progress updates and gather your feedback for refinements.'
    },
    {
      step: 5,
      title: 'Refinement',
      description: 'We incorporate your feedback and make necessary adjustments to perfect the design.'
    },
    {
      step: 6,
      title: 'Delivery',
      description: 'We deliver the final files, documentation, and any additional assets you need.'
    }
  ]

  return (
    <Layout 
      title="Services"
      description="Professional CAD modeling, 3D design, product animation, rendering, and simulation services. Transform your ideas into reality with DesignAnything."
    >
      {/* Hero Section */}
                        <section className="pt-20 pb-16 gradient-bg dark:from-primary dark:to-secondary">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
                                    <p className="text-xl text-primary dark:text-neutral max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive design and engineering services to bring your ideas to life. 
              From concept to completion, we handle every aspect of your project.
            </p>
          </motion.div>

          {/* Hero Service Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
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
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-2 border-transparent group-hover:border-primary/30"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-primary dark:text-accentBright text-center group-hover:text-accentBright transition-colors duration-200">
                    {service.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-neutral dark:bg-primary">
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
                className="relative overflow-hidden rounded-2xl shadow-xl group"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.backgroundImage} 
                    alt={`${service.title} background`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-300"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-8 text-white">
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
                        <h3 className="text-2xl font-playfair font-semibold mb-2 text-white group-hover:text-accentBright transition-colors duration-200 cursor-pointer hover:underline">
                          {service.title}
                        </h3>
                      </Link>
                      <p className="text-gray-200 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-accentBright flex-shrink-0 mt-0.5" />
                          <span className="text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Software */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Software Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.software.map((soft) => (
                        <span 
                          key={soft}
                          className="text-sm font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30"
                        >
                          {soft}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-secondary dark:bg-primary">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-primary dark:text-accentBright">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-primary dark:text-neutral max-w-3xl mx-auto">
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
                <div className="w-16 h-16 bg-gradient-to-br from-accentBright to-accentDark rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary dark:text-accentBright">
                  {step.title}
                </h3>
                <p className="text-primary dark:text-neutral leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-neutral dark:bg-primary">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-primary dark:text-accentBright">
              Flexible <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-primary dark:text-neutral max-w-3xl mx-auto">
              Transparent pricing tailored to your project requirements and budget
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
                              <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-accentBright">Basic</h3>
                <div className="text-4xl font-bold text-accentBright mb-6">₹1,200</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Simple 3D modeling</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Basic renders</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>2 revisions</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Source files included</span>
                </li>
              </ul>
              <a href="/contact" className="btn-outline w-full">Get Started</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center border-2 border-accentBright relative"
            >
                              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accentBright text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-accentBright">Professional</h3>
                <div className="text-4xl font-bold text-accentBright mb-6">₹2,500+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Complex 3D modeling</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Photorealistic renders</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Unlimited revisions</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Animation included</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Technical documentation</span>
                </li>
              </ul>
              <a href="/contact" className="btn-primary w-full">Get Started</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
                              <h3 className="text-2xl font-semibold mb-4 text-primary dark:text-accentBright">Enterprise</h3>
                <div className="text-4xl font-bold text-accentBright mb-6">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Full project management</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Advanced simulation</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Multiple iterations</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Ongoing support</span>
                </li>
                <li className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accentBright" />
                  <span>Priority communication</span>
                </li>
              </ul>
              <a href="/contact" className="btn-primary w-full">Contact Us</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA removed as requested */}
    </Layout>
  )
}
