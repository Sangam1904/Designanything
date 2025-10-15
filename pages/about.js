import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Award, Users, Target, Zap, ExternalLink, Linkedin, Mail, Download } from 'lucide-react'
import Prism from '../components/Prism'
import ScrollFloat from '../components/ScrollFloat'
import { getLayoutConfig, getSectionConfig, getThemeConfig } from '../config/siteConfig'
import Link from 'next/link'

export default function About() {
  // Get configuration data
  const aboutConfig = getLayoutConfig('aboutPage')
  const missionVisionConfig = getSectionConfig('missionAndVision')
  const valuesConfig = getSectionConfig('values')
  
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'I strive for excellence in every project, delivering the highest quality CAD models and designs.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'I believe in close collaboration with my clients to ensure their vision is perfectly realized.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'I embrace cutting-edge technology and innovative design approaches to solve complex challenges.'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'I optimize my processes to deliver fast turnaround times without compromising quality.'
    }
  ]

  return (
    <Layout 
      title="About Me"
      description="Learn about Sangmeshwar Kanade - a professional CAD modeling and 3D design expert. Discover my mission to transform ideas into reality through expert engineering design."
    >
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
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
            className="text-center"
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
                About Me
              </ScrollFloat>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I am passionate about transforming ideas into reality through expert engineering design, 
              innovative CAD modeling, and stunning 3D visualizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 ${missionVisionConfig.alignment === 'side_by_side' ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-12 items-center`}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <ScrollFloat
                  containerClassName="text-left"
                  textClassName="text-3xl lg:text-4xl font-playfair font-bold text-gray-800 dark:text-white"
                  animationDuration={1.2}
                  ease="back.out(1.7)"
                  scrollStart="top bottom-=40%"
                  scrollEnd="center center"
                  stagger={0.02}
                >
                  Our Mission
                </ScrollFloat>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                To empower businesses and individuals with cutting-edge CAD modeling and 3D design solutions 
                that bridge the gap between imagination and reality. I believe that every great product 
                starts with a great design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I combine technical expertise with creative vision to deliver designs that are not 
                only functional and manufacturable but also aesthetically pleasing and innovative.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`${missionVisionConfig.background === 'transparent' ? 'bg-transparent' : 'bg-gradient-to-br from-primary to-accent'} rounded-2xl p-8 ${missionVisionConfig.background === 'transparent' ? 'text-gray-800 dark:text-white' : 'text-white'}`}
            >
              <h3 className="text-2xl font-playfair font-bold mb-6">Our Vision</h3>
              <p className="text-lg mb-6 leading-relaxed">
                To become the leading force in digital design innovation, setting new standards for 
                CAD modeling, 3D visualization, and product development across industries.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Global design excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Innovation leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Sustainable design solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${valuesConfig.alignment === 'center' ? 'text-center' : 'text-left'} mb-16`}
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
                  Our Values
                </ScrollFloat>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that guide my work and relationships with clients
              </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${valuesConfig.alignment === 'center' ? 'text-center' : 'text-left'} ${valuesConfig.background === 'card' ? 'bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg' : ''}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-gray-800 dark:text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate designer dedicated to bringing your ideas to life
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Profile Image - Circular */}
              <div className="flex justify-center lg:justify-end">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                    <img 
                      src="/images/team/sangam.jpg" 
                      alt="Sangmeshwar Kanade - Mechanical Design Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-secondary to-primary rounded-full opacity-60"></div>
                </motion.div>
              </div>

              {/* Profile Content - Simple Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-4 lg:p-8"
              >
                <div className="mb-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-3">
                    Sangmeshwar Kanade
                  </h3>
                  <p className="text-xl text-secondary font-medium mb-4">
                     Mechanical Design Engineer
                  </p>
                  <div className="mb-6">
                    <p className="text-base text-gray-500 dark:text-gray-400 mb-1">
                      B.E. Mechanical Engineering
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      DBATU University • 2024
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                  Professional in SOLIDWORKS, CATIA, and Blender with over 2 years of experience in mechanical design and product development. I specialize in transforming complex ideas into precise, manufacturable designs.
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                  My passion lies in creating innovative solutions that bridge the gap between concept and reality. From initial sketches to final production-ready models, I ensure every project meets the highest standards of quality and precision.
                </p>

                {/* Skills */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {['SOLIDWORKS Professional', 'CATIA Enthusiast', 'Blender Beginner', 'ANSYS Simulation'].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:sangmeshwarkanade1904@gmail.com"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Mail className="w-5 h-5" />
                    Gmail
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/sangmeshwarkanade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


    </Layout>
  )
}
