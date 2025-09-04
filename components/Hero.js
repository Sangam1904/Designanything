import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Download } from 'lucide-react'
import { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FluidCursor from './FluidCursor'

export default function Hero() {
  const videoRef = useRef(null)
  const [heroRef, isHeroVisible] = useScrollAnimation(0.1)
  
  return (
    <>
      <FluidCursor />
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg cursor-glow"
      >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent/60 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent/40 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-8xl font-inter font-medium mb-8 leading-tight"
          >
            <span className="text-light">Transform Ideas</span>
            <br />
            <span className="text-accent">Into Reality</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-tertiary mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Professional CAD modeling, 3D design, and product animation services. 
            <br className="hidden sm:block" />
            From concept to completion, we bring your vision to life.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <Link href="/portfolio" className="btn-primary group">
              Explore Portfolio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link href="/contact" className="btn-secondary group">
              Start Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Video Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="relative max-w-[60rem] mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-accent to-accent/80">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/videos/product-animation.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-tertiary"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">SOLIDWORKS Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">CATIA Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Blender Professional</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">ANSYS Simulation</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
    </>
  )
}
