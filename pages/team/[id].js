import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Mail, Linkedin, Award, Users, Target, Zap } from 'lucide-react'
import Prism from '../../components/Prism'
import ScrollFloat from '../../components/ScrollFloat'
import { getTeamMember, getTeamMembers } from '../../utils/teamData'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function TeamMemberProfile() {
  const router = useRouter()
  const { id } = router.query
  
  // Get team member data
  const member = getTeamMember(id)
  
  // If member not found, show 404
  if (!member) {
    return (
      <Layout title="Team Member Not Found" description="The requested team member could not be found.">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Team Member Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">The team member you're looking for doesn't exist.</p>
            <Link href="/about" className="btn-primary">
              Back to Team
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality work in every project.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Believes in working closely with clients and team members.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions.'
    },
    {
      icon: Zap,
      title: 'Efficiency',
      description: 'Optimizes processes to deliver fast results without compromising quality.'
    }
  ]

  return (
    <Layout 
      title={`${member.name} - ${member.role}`}
      description={`Learn about ${member.name}, ${member.role} at Solid Canvas. ${member.description}`}
    >
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
        {/* Prism Background Effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
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
            {/* Back Button */}
            <div className="flex justify-start mb-8">
              <Link 
                href="/about"
                className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-200 group"
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to Team
              </Link>
            </div>

            <div className="mb-8">
              <ScrollFloat
                containerClassName="text-center"
                textClassName="text-4xl lg:text-6xl font-playfair font-bold text-gray-800 dark:text-white"
                animationDuration={1.5}
                ease="back.out(1.7)"
                scrollStart="top bottom-=30%"
                scrollEnd="center center"
                stagger={0.03}
              >
                {member.name}
              </ScrollFloat>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {member.role}
            </p>
            
            {/* Professional Education */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Professional Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                {member.professionalEducation}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {member.university} • {member.graduationYear}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-full max-w-md mx-auto lg:mx-0">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  About {member.name.split(' ')[0]}
                </h2>
                
                <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {member.detailedDescription.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Skills */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                    Skills & Expertise
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {member.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Links */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {member.socialLinks.email && (
                    <a 
                      href={`mailto:${member.socialLinks.email}`}
                      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a 
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Visualization */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-gray-800 dark:text-white">
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Proficiency levels in industry-leading software and technologies
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {member.expertise.map((skill, index) => (
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

      {/* Related Images */}
      {member.relatedImages && member.relatedImages.length > 0 && (
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
                Work <span className="gradient-text">Gallery</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A glimpse into {member.name.split(' ')[0]}'s work and projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {member.relatedImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-lg shadow-lg"
                >
                  <img 
                    src={image} 
                    alt={`${member.name} work ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-gray-800 dark:text-white">
              Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide {member.name.split(' ')[0]}'s work and approach
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
                className="text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6 text-white">
              Ready to Work with {member.name.split(' ')[0]}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how {member.name.split(' ')[0]} can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-secondary">
                Start Your Project
              </a>
              <a href="/portfolio" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </a>
            </div>
          </motion.div>     
        </div>
      </section>
    </Layout>
  )
}
