import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X, ArrowLeft, ArrowRight } from 'lucide-react'

// Blog Image Component
export function BlogImage({ src, alt, caption, className = "" }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`my-8 ${className}`}
      >
        <div 
          className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img 
            src={src} 
            alt={alt}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
        </div>
        {caption && (
          <p className="text-sm text-gray-600 dark:text-gray-400 italic text-center mt-2">
            {caption}
          </p>
        )}
      </motion.div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-6xl w-full px-6" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={src} 
              alt={alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            {caption && (
              <p className="text-white text-center mt-4 text-lg">
                {caption}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </>
  )
}

// Blog Video Component
export function BlogVideo({ src, poster, title, autoplay = false, className = "" }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`my-8 ${className}`}
    >
      <div 
        className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          src={src}
          poster={poster}
          className="w-full h-auto"
          controls={showControls}
          autoPlay={autoplay}
          muted={autoplay}
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
        
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h4 className="text-white font-medium">{title}</h4>
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Blog Gallery Component
export function BlogGallery({ images, title, className = "" }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
  }

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`my-8 ${className}`}
      >
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => {
                setCurrentIndex(index)
                setIsLightboxOpen(true)
              }}
            >
              <img 
                src={image.src} 
                alt={image.alt || `${title} ${index + 1}`}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-w-6xl w-full px-6" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt || `${title} ${currentIndex + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors duration-200"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                  {currentIndex + 1} of {images.length}
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </>
  )
}

// Main content parser function
export function parseBlogContent(content, mediaElements = []) {
  if (!content) return null

  // Split content by media markers
  const parts = content.split(/(\[MEDIA:\d+\])/g)
  const result = []

  parts.forEach((part, index) => {
    if (part.startsWith('[MEDIA:')) {
      // Extract media ID
      const mediaId = parseInt(part.match(/\[MEDIA:(\d+)\]/)[1])
      const mediaElement = mediaElements.find(media => media.id === mediaId)
      
      if (mediaElement) {
        switch (mediaElement.type) {
          case 'image':
            result.push(
              <BlogImage 
                key={`media-${mediaId}-${index}`}
                src={mediaElement.src}
                alt={mediaElement.alt}
                caption={mediaElement.caption}
                className={mediaElement.className}
              />
            )
            break
          case 'video':
            result.push(
              <BlogVideo 
                key={`media-${mediaId}-${index}`}
                src={mediaElement.src}
                poster={mediaElement.poster}
                title={mediaElement.title}
                autoplay={mediaElement.autoplay}
                className={mediaElement.className}
              />
            )
            break
          case 'gallery':
            result.push(
              <BlogGallery 
                key={`media-${mediaId}-${index}`}
                images={mediaElement.images}
                title={mediaElement.title}
                className={mediaElement.className}
              />
            )
            break
          default:
            result.push(<div key={`media-${mediaId}-${index}`}>Media type not supported</div>)
        }
      }
    } else if (part.trim()) {
      // Regular text content with improved formatting
      const paragraphs = part.split('\n\n').filter(p => p.trim())
      paragraphs.forEach((paragraph, pIndex) => {
        if (paragraph.trim()) {
          // Check if it's a heading
          if (paragraph.startsWith('#')) {
            const level = paragraph.match(/^#+/)[0].length
            const text = paragraph.replace(/^#+\s*/, '')
            const HeadingTag = `h${Math.min(level, 6)}`
            result.push(
              <HeadingTag 
                key={`heading-${index}-${pIndex}`}
                className={`font-bold text-gray-900 dark:text-white mb-4 mt-8 ${
                  level === 1 ? 'text-3xl' : 
                  level === 2 ? 'text-2xl' : 
                  level === 3 ? 'text-xl' : 'text-lg'
                }`}
              >
                {text}
              </HeadingTag>
            )
          }
          // Check if it's a horizontal rule
          else if (paragraph.match(/^_{3,}$/)) {
            result.push(
              <hr 
                key={`hr-${index}-${pIndex}`}
                className="my-8 border-gray-300 dark:border-gray-600"
              />
            )
          }
          // Check if it's a list
          else if (paragraph.includes('•') || paragraph.includes('-')) {
            const listItems = paragraph.split(/[•-]/).filter(item => item.trim())
            result.push(
              <ul 
                key={`list-${index}-${pIndex}`}
                className="list-disc list-inside text-gray-600 dark:text-gray-300 leading-relaxed mb-6 space-y-2"
              >
                {listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="ml-4">
                    {item.trim()}
                  </li>
                ))}
              </ul>
            )
          }
          // Check if it's a numbered list
          else if (paragraph.match(/^\d+\./)) {
            const listItems = paragraph.split(/\d+\./).filter(item => item.trim())
            result.push(
              <ol 
                key={`olist-${index}-${pIndex}`}
                className="list-decimal list-inside text-gray-600 dark:text-gray-300 leading-relaxed mb-6 space-y-2"
              >
                {listItems.map((item, itemIndex) => (
                  <li key={itemIndex} className="ml-4">
                    {item.trim()}
                  </li>
                ))}
              </ol>
            )
          }
          // Regular paragraph
          else {
            result.push(
              <p 
                key={`text-${index}-${pIndex}`}
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-justify"
                dangerouslySetInnerHTML={{ 
                  __html: paragraph.replace(/\n/g, '<br/>') 
                }}
              />
            )
          }
        }
      })
    }
  })

  return result
}

// Helper function to create media markers
export function createMediaMarker(mediaId) {
  return `[MEDIA:${mediaId}]`
}

// Helper function to add media to content
export function addMediaToContent(content, mediaId, position = 'end') {
  const marker = createMediaMarker(mediaId)
  
  if (position === 'end') {
    return content + '\n\n' + marker
  } else if (position === 'start') {
    return marker + '\n\n' + content
  } else if (typeof position === 'number') {
    const paragraphs = content.split('\n\n')
    paragraphs.splice(position, 0, marker)
    return paragraphs.join('\n\n')
  }
  
  return content
}
