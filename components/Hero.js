import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Download } from 'lucide-react'
import { useRef } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FluidCursor from './FluidCursor'
import SplitText from './SplitText'
import Prism from './Prism'

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

      {/* Full Screen Prism Background Effect */}
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
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="text-5xl sm:text-6xl lg:text-8xl font-inter font-medium mb-8 leading-tight">
            <div className="flex flex-col items-center">
              <SplitText
                text="Designs Built to Last."
                tag="span"
                className="text-light"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
              <SplitText
                text="Ideas Built to Fly."
                tag="span"
                className="text-accent"
                delay={100}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          </div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-tertiary mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Professional CAD modeling, 3D design, and product animation services. 
            <br className="hidden sm:block" />
            From concept to completion, I bring your vision to life.
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
          </motion.div>

          {/* Video Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="relative max-w-[60rem] mx-auto z-20"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
              <div className="aspect-video bg-gradient-to-br from-accent to-accent/80 relative">
                {/* Video */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover relative z-10"
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
              <span className="text-sm font-medium">SOLIDWORKS Professional</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">CATIA Enthusiast</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">Blender Beginner</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">ANSYS Simulation</span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
    </>
  )
}
