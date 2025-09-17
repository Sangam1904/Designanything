"use client"

import { useState } from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, Search, Filter } from 'lucide-react'
import Link from 'next/link'
import Prism from '../../components/Prism'
import ScrollFloat from '../../components/ScrollFloat'
import { blogPosts, blogCategories, getBlogPostsByCategory, searchBlogPosts } from '../../utils/blogData'

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  // Handle search and filtering
  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term.trim() === '') {
      if (selectedCategory === 'All') {
        setFilteredPosts(blogPosts)
      } else {
        setFilteredPosts(getBlogPostsByCategory(selectedCategory))
      }
    } else {
      const searchResults = searchBlogPosts(term)
      if (selectedCategory !== 'All') {
        const categoryResults = searchResults.filter(post => post.category === selectedCategory)
        setFilteredPosts(categoryResults)
      } else {
        setFilteredPosts(searchResults)
      }
    }
  }

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (searchTerm.trim() === '') {
      setFilteredPosts(getBlogPostsByCategory(category))
    } else {
      const searchResults = searchBlogPosts(searchTerm)
      if (category === 'All') {
        setFilteredPosts(searchResults)
      } else {
        const categoryResults = searchResults.filter(post => post.category === category)
        setFilteredPosts(categoryResults)
      }
    }
  }

  return (
    <Layout 
      title="Blog"
      description="Read our latest articles on CAD modeling, 3D design, product animation, and engineering insights. Expert tutorials and industry knowledge from Solid Canvas."
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
                My Blog
              </ScrollFloat>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Read my latest articles on CAD modeling, 3D design, product animation, and engineering insights. 
              Expert tutorials and industry knowledge from Solid Canvas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {blogCategories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                No articles found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or category filter to find what you're looking for.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-primary transition-colors duration-200">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        
                        <div className="flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Get notified about my latest articles, tutorials, and industry insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
