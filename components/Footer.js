import Link from 'next/link'
import { Pin, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Product Design & 3D Modeling', href: '/services/product-design-modeling' },
      { name: 'Technical Drawing + GD&T', href: '/services/technical-drawing-gdt' },
      { name: 'Simulation & Analysis', href: '/services/simulation-analysis' },
      { name: 'Animation & Rendering', href: '/services/animation-rendering' },
    ],
    portfolio: [
      { name: 'Mechanical Design', href: '/portfolio?category=Mechanical Design' },
      { name: 'Industrial Design', href: '/portfolio?category=Industrial Design' },
      { name: 'Product Design', href: '/portfolio?category=Product Design' },
      { name: 'Automotive Design', href: '/portfolio?category=Automotive Design' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Downloads', href: '/downloads' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/designanything/' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/channel/UCeKbTkZ2z_Rx-6f6uEUroMw' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_designanything_/' },
    { name: 'Pinterest', icon: Pin, href: 'https://in.pinterest.com/Designanything1904/' },
  ]

  return (
                    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/icons/logo.svg" 
                alt="DesignAnything Logo" 
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
              <span className="font-playfair text-xl font-bold text-white">DesignAnything</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg text-left">
              Transforming ideas into reality through expert engineering design. 
              Professional CAD modeling, 3D design, and product animation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>anythingcandesign@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>+91 7498441756</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">Portfolio</h3>
            <ul className="space-y-2">
              {footerLinks.portfolio.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-white">About</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
                              <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-200 text-gray-400"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>           
          </div>
        </div>

        {/* Bottom Bar */}
                              <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                                    <p className="text-gray-400 text-base">
              © {currentYear} DesignAnything. All rights reserved.
            </p>
            <div className="flex space-x-6 text-base">
              <Link href="/privacy" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
