import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { getLayoutConfig } from '../config/siteConfig'

// Hover Animated Navigation Button
function NavButton({ children, href, onClick, baseSize = 40, maxSize = 50, distance = 100, spring = { mass: 0.1, stiffness: 150, damping: 12 } }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(Infinity);

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseSize };
    return val - rect.x - baseSize / 2;
  });

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseSize, maxSize, baseSize]);
  const size = useSpring(targetSize, spring);

  const content = (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onMouseMove={({ pageX }) => mouseX.set(pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex items-center justify-center rounded-lg transition-all duration-200"
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block w-full h-full">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="block">
      {content}
    </button>
  );
}

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

  // Get downloads section visibility from config
  const downloadsConfig = getLayoutConfig('downloadsSection')
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/about' },
    { name: 'Blog', href: '/blog' },
    ...(downloadsConfig.visible ? [{ name: 'Downloads', href: '/downloads' }] : []),
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
                        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                      ? darkMode 
                        ? 'bg-dark/90 backdrop-blur-md shadow-lg border-b border-light/10'
                        : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200'
                      : 'bg-transparent'
                  }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/images/icons/logo.svg" 
              alt="Solid Canvas Logo" 
              className="h-10 w-10"
            />
            
                                    <span className={`font-inter text-xl font-medium ${
                          scrolled 
                            ? darkMode ? 'text-light' : 'text-gray-800'
                            : 'text-light'
                        }`}>
                          Solid Canvas
                        </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <NavButton
                key={item.name}
                href={item.href}
                baseSize={44}
                maxSize={52}
                distance={90}
                spring={{ mass: 0.1, stiffness: 200, damping: 15 }}
              >
                <span className={`${
                  scrolled 
                    ? darkMode ? 'text-light hover:text-accent' : 'text-gray-600 hover:text-gray-800'
                    : 'text-light hover:text-accent'
                } transition-colors duration-200 font-medium text-base`}>
                  {item.name}
                </span>
              </NavButton>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-tertiary/20 hover:bg-tertiary/30 transition-colors duration-200"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-light" />
              )}
            </button>

            {/* CTA Button */}
            <a href="/contact" className="btn-primary px-4 py-2 text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
                                    className="md:hidden p-2 rounded-lg bg-tertiary/20"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-light" />
            ) : (
              <Menu className="w-6 h-6 text-light" />
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
                                    <div className="px-2 pt-2 pb-3 space-y-1 bg-light rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-dark hover:text-secondary hover:bg-tertiary/20 rounded-md transition-colors duration-200 w-full"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile dark mode toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                                    className="w-full flex items-center px-3 py-2 text-dark hover:text-secondary hover:bg-tertiary/20 rounded-md transition-colors duration-200"
              >
                {darkMode ? (
                  <>
                    <Sun className="w-5 h-5 mr-2 text-yellow-500" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 mr-2 text-dark" />
                    Dark Mode
                  </>
                )}
              </button>

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full text-center"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
