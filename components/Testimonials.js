"use client"

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Industries',
      content: 'The CAD modeling service exceeded our expectations. The team delivered precise models that accelerated our product development timeline significantly.',
      rating: 5,
      project: 'Automotive Component Design'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Design Director',
      company: 'Innovate Design Studio',
      content: 'Exceptional quality and attention to detail. Our 3D designs have never looked better, and the turnaround time was impressive.',
      rating: 5,
      project: 'Consumer Electronics Design'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Engineering Lead',
      company: 'Future Motors',
      content: 'Professional service with outstanding results. The assembly models helped us identify design issues early in the process.',
      rating: 5,
      project: 'Electric Vehicle Assembly'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'R&D Manager',
      company: 'GreenTech Solutions',
      content: 'The simulation and analysis services provided valuable insights that improved our product performance and reliability.',
      rating: 5,
      project: 'Renewable Energy System'
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
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
            What My <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-secondary/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Project */}
              <div className="mb-6">
                <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {testimonial.project}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
