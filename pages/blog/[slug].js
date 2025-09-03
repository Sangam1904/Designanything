import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, Tag, ArrowLeft, ArrowRight, X } from 'lucide-react'
import Layout from '../../components/Layout'
import { blogPosts, getRelatedPosts } from '../../utils/blogData'
import Link from 'next/link'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    if (slug) {
      const foundPost = blogPosts.find(p => p.slug === slug)
      if (foundPost) {
        setPost(foundPost)
        setRelatedPosts(getRelatedPosts(foundPost.id))
      }
    }
  }, [slug])

  if (!post) {
    return (
      <Layout title="Blog Post" description="Loading blog post...">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </Layout>
    )
  }

  const handleImageClick = (index) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const nextImage = () => {
    if (post.gallery && post.gallery.length > 1) {
      setLightboxIndex((prev) => (prev + 1) % post.gallery.length)
    }
  }

  const prevImage = () => {
    if (post.gallery && post.gallery.length > 1) {
      setLightboxIndex((prev) => 
        prev === 0 ? post.gallery.length - 1 : prev - 1
      )
    }
  }

  return (
    <Layout title={post.title} description={post.excerpt}>
      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark dark:to-gray-900">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              {/* Category Badge */}
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Hero Image */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>

              {/* Blog Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:dark:text-white prose-p:text-gray-600 prose-p:dark:text-gray-300 prose-strong:text-gray-900 prose-strong:dark:text-white prose-ul:text-gray-600 prose-ul:dark:text-gray-300 prose-li:text-gray-600 prose-li:dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Gallery */}
              {post.gallery && post.gallery.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Related Images
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {post.gallery.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <img 
                          src={img} 
                          alt={`${post.title} image ${index + 1}`}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Video */}
              {post.videoUrl && (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Related Video
                  </h3>
                  <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={post.videoUrl.replace('watch?v=', 'embed/')}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container-custom px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="max-w-6xl mx-auto"
              >
                <h2 className="text-3xl font-playfair font-bold text-gray-900 dark:text-white text-center mb-12">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <div className="relative">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-primary/90 text-white rounded-full text-xs font-medium">
                              {relatedPost.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                            <span>{relatedPost.author}</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && post.gallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative max-w-6xl w-full px-6" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <img 
                src={post.gallery[lightboxIndex]} 
                alt={`${post.title} image ${lightboxIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Navigation */}
              {post.gallery.length > 1 && (
                <>
                  {/* Previous Button */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
                    aria-label="Next image"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    {lightboxIndex + 1} of {post.gallery.length}
                  </div>

                  {/* Thumbnail Navigation */}
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {post.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setLightboxIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === lightboxIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}
