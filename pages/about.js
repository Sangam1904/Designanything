import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Award, Users, Target, Zap, Linkedin, Mail, Download } from 'lucide-react'
import Prism from '../components/Prism'
import ScrollFloat from '../components/ScrollFloat'
import { getLayoutConfig, getSectionConfig, getThemeConfig } from '../config/siteConfig'

export default function About() {
  // Get configuration data
  const aboutConfig = getLayoutConfig('aboutPage')
  const missionVisionConfig = getSectionConfig('missionAndVision')
  const valuesConfig = getSectionConfig('values')
  
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering the highest quality CAD models and designs.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in close collaboration with our clients to ensure their vision is perfectly realized.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and innovative design approaches to solve complex challenges.'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'We optimize our processes to deliver fast turnaround times without compromising quality.'
    }
  ]

  const skills = [
    { name: 'SOLIDWORKS', level: 90 },
    { name: 'CATIA', level: 75 },
    { name: 'Blender', level: 65 },
    { name: 'ANSYS', level: 70 },
    { name: '3DEXPERIENCE', level: 55 }
  ]

  return (
    <Layout 
      title="About Me"
      description="Learn about  Design  Anything - a professional CAD modeling and 3D design company. Meet me and discover my mission to transform ideas into reality."
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
                About Design Anything
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
      <section className={`py-16 ${missionVisionConfig.background === 'transparent' ? 'bg-transparent' : 'bg-white dark:bg-gray-900'}`}>
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
                  My Mission
                </ScrollFloat>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                To empower businesses and individuals with cutting-edge CAD modeling and 3D design solutions 
                that bridge the gap between imagination and reality. We believe that every great product 
                starts with a great design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My technical expertise with creative vision to deliver designs that are not 
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
              <h3 className="text-2xl font-playfair font-bold mb-6">My Vision</h3>
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
      <section className={`py-16 ${valuesConfig.background === 'card' ? 'bg-gray-50 dark:bg-gray-800' : 'bg-transparent'}`}>
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
                My Values
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
      <section className="pt-20 pb-16 bg-white dark:bg-gray-900">
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

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="/images/team/Sangam.jpg" 
                    alt="Sangmeshwar kanade - Founder & Lead Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Profile Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                  Sangmeshwar kanade
                </h3>
                <p className="text-xl text-secondary font-medium mb-6">
                  Mechanical Design Engineer
                </p>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  <p>
                    Expert in SOLIDWORKS, CATIA, and Blender with over 2 years of experience in mechanical design and product development. I specialize in transforming complex ideas into precise, manufacturable designs.
                  </p>
                  <p>
                    My passion lies in creating innovative solutions that bridge the gap between concept and reality. From initial sketches to final production-ready models, I ensure every project meets the highest standards of quality and precision.
                  </p>
                  <p>
                    I believe in the power of design to solve real-world problems and am committed to delivering exceptional results that exceed client expectations.
                  </p>
                </div>

                {/* Certifications */}
                <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                  <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    SOLIDWORKS Professional
                  </span>
                  <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    CATIA Enthusiast
                  </span>
                  <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    Blender Beginner
                  </span>
                  <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                    ANSYS Simulation
                  </span>
                </div>

                {/* Contact Information */}
                <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <a
                    href="https://linkedin.com/in/sangmeshwar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  
                  <a
                    href="mailto:sangmeshwar@example.com"
                    className="inline-flex items-center justify-center w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                    title="Email Me"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  
                  <a
                    href="/downloads/Sangmeshwar_Kanade_Resume.pdf"
                    download="Sangmeshwar_Kanade_Resume.pdf"
                    className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg transition-all duration-200"
                    title="Download Resume"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-gray-800 dark:text-white">
               My<span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Mastery of industry-leading software and technologies
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-accent h-3 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {aboutConfig.readyToWorkTogetherSection.visible && (
        <section className="py-16 bg-gradient-to-r from-primary to-accent">
          <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-white">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can bring your ideas to life with our expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-secondary">
                  Start Your Project
                </a>
                <a href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                  View My Work
                </a>
              </div>
            </motion.div>     
          </div>
        </section>
      )}
    </Layout>
  )
}
