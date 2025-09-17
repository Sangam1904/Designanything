import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { Award, Users, Target, Zap, ExternalLink } from 'lucide-react'
import Prism from '../components/Prism'
import ScrollFloat from '../components/ScrollFloat'
import { getLayoutConfig, getSectionConfig, getThemeConfig } from '../config/siteConfig'
import { getTeamMembers } from '../utils/teamData'
import Link from 'next/link'

export default function About() {
  // Get configuration data
  const aboutConfig = getLayoutConfig('aboutPage')
  const missionVisionConfig = getSectionConfig('missionAndVision')
  const valuesConfig = getSectionConfig('values')
  
  // Get team members
  const teamMembers = getTeamMembers()
  
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

  return (
    <Layout 
      title="About Our Team"
      description="Learn about Solid Canvas - a professional CAD modeling and 3D design company. Meet our talented team and discover our mission to transform ideas into reality."
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
                About Our Team
              </ScrollFloat>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are passionate about transforming ideas into reality through expert engineering design, 
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
                that bridge the gap between imagination and reality. We believe that every great product 
                starts with a great design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team combines technical expertise with creative vision to deliver designs that are not 
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
                The principles that guide our work and relationships with clients
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

      {/* Our Team */}
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
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Talented professionals dedicated to bringing your ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary text-sm font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {member.professionalEducation}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {member.university} • {member.graduationYear}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.slice(0, 2).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 2 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                        +{member.skills.length - 2} more
                      </span>
                    )}
                  </div>

                  {/* View Profile Button */}
                  <Link 
                    href={`/team/${member.id}`}
                    className="inline-flex items-center text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium group"
                  >
                    View Profile
                    <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </Layout>
  )
}
