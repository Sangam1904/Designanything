import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState, useEffect } from 'react'
import { generateCSSVariables } from '../config/siteConfig'

export default function Layout({ children, title = 'DesignAnything', description = 'Professional CAD modeling, 3D design, and product animation services. Transform your ideas into reality with my expertise in engineering design.', fullTitle = null }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    
    // Apply CSS variables for theme
    const cssVars = generateCSSVariables(darkMode)
    Object.entries(cssVars).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Head>
        {(() => {
          const computedTitle = fullTitle ?? `${title} | DesignAnything`;
          return <title>{computedTitle}</title>;
        })()}
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="CAD modeling, 3D design, SOLIDWORKS, CATIA, product animation, engineering design, freelance CAD" />
        <meta name="author" content="DesignAnything" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://designanything.com/" />
        <meta property="og:title" content={fullTitle ?? `${title} | DesignAnything`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/og-image.jpg" />


        {/* Model Viewer Script */}
        <script type="module" src="https://unpkg.com/@google/model-viewer@3.4.0/dist/model-viewer.min.js"></script>
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </Head>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="pt-16">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
