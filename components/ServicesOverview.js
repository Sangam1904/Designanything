import { motion } from 'framer-motion'
import { Box, FileText, Settings, Video } from 'lucide-react'
import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      icon: Box,
      title: 'Product Design & 3D Modeling',
      description: 'Concept to final parametric 3D model using SOLIDWORKS, CATIA, and Blender for industrial & mechanical product design.',
      features: ['Parametric Modeling', 'Surface Design', 'Assembly Design', 'Manufacturing Optimization'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/product-design-modeling'
    },
    {
      icon: FileText,
      title: 'Technical Drawing + GD&T',
      description: 'Engineering drawings, tolerancing, and Model-Based Definition (MBD) for production-ready documentation.',
      features: ['GD&T Application', 'Technical Drawings', 'BOM Creation', 'MBD Implementation'],
      color: 'from-green-500 to-emerald-500',
      href: '/services/technical-drawing-gdt'
    },
    {
      icon: Settings,
      title: 'Simulation & Analysis',
      description: 'Structural analysis, thermal simulation, and design optimization using ANSYS and SOLIDWORKS Simulation.',
      features: ['FEA Analysis', 'Thermal Simulation', 'Design Optimization', 'Performance Validation'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/simulation-analysis'
    },
    {
      icon: Video,
      title: 'Animation & Rendering',
      description: 'Photorealistic renders, animations, and promotional videos using Blender, KeyShot, and SolidWorks Visualize.',
      features: ['Photorealistic Renders', 'Product Animations', 'Promo Videos', '4K Visualizations'],
      color: 'from-orange-500 to-red-500',
      href: '/services/animation-rendering'
    }
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-800 dark:text-white mb-6">
            My Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive design and engineering services to bring your ideas to life. 
            From concept to completion, I handle every aspect of your project.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={service.href}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-200 dark:border-gray-700 h-full">
                  {/* Service Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-playfair font-semibold text-gray-800 dark:text-white mb-4 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="text-center">
                    <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and bring your vision to life with professional design and engineering services.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Get Started Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
