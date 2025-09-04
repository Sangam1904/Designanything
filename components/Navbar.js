import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
                        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                      ? 'bg-dark/90 backdrop-blur-md shadow-lg border-b border-light/10'
                      : 'bg-transparent'
                  }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/images/icons/logo.svg" 
              alt="DesignAnything Logo" 
              className="h-10 w-10"
            />
            
                                    <span className="font-inter text-xl font-medium text-light">
                          DesignAnything
                        </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                                            className="text-tertiary hover:text-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
                                        className="p-2 rounded-lg bg-tertiary/20 dark:bg-gray-800 hover:bg-tertiary/30 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-metallic-200" />
              )}
            </button>

            {/* CTA Button */}
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
                                    className="md:hidden p-2 rounded-lg bg-tertiary/20 dark:bg-gray-800"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-metallic-200 dark:text-tertiary" />
            ) : (
              <Menu className="w-6 h-6 text-metallic-200 dark:text-tertiary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
                                    <div className="px-2 pt-2 pb-3 space-y-1 bg-light dark:bg-gray-800 rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                                      className="block px-3 py-2 text-metallic-200 hover:text-secondary hover:bg-tertiary/20 dark:text-tertiary dark:hover:text-secondary dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                                    className="w-full flex items-center px-3 py-2 text-metallic-200 hover:text-secondary hover:bg-tertiary/20 dark:text-tertiary dark:hover:text-secondary dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-5 h-5 mr-2 text-yellow-500" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 mr-2 text-metallic-200" />
                    Dark Mode
                  </>
                )}
              </button>

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors duration-200 text-center"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
