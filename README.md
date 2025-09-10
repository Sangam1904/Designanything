# DesignAnything - Professional Engineering Design Portfolio

A modern, responsive portfolio website showcasing engineering design projects with interactive 3D models, built with Next.js and React Three Fiber.

## 🌐 Live Website

**Website**: [DesignAnything Portfolio](https://your-website.com)  
**Brand**: DesignAnything  
**Tagline**: "Transform Ideas Into Reality"  
**Contact**: anythingcandesign@gmail.com | +91 7498441756

## ✨ Features

### 🎯 Core Features
- **Interactive 3D Models**: View projects in 3D with pan, zoom, and rotate controls
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Project Portfolio**: Showcase featured and all projects with filtering
- **Blog System**: Content management for articles and updates
- **Contact Forms**: Integrated contact and inquiry forms
- **SEO Optimized**: Meta tags, structured data, and performance optimization

### 🛠️ Technical Features
- **Next.js 13+**: Latest React framework with App Router
- **React Three Fiber**: 3D model rendering and interaction
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **GSAP**: Advanced scroll-triggered animations
- **TypeScript Ready**: Type-safe development
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/designanything-portfolio.git
   cd designanything-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# Export static files (optional)
npm run export
```

## 📁 Project Structure

```
designanything-portfolio/
├── components/           # React components
│   ├── CTASection.js    # Call-to-action sections
│   ├── Footer.js        # Website footer
│   ├── Hero.js          # Hero section
│   ├── ModelViewer.js   # 3D model viewer
│   ├── Navbar.js        # Navigation bar
│   ├── PortfolioPreview.js # Featured projects
│   └── ThreeViewer.js   # 3D viewer wrapper
├── pages/               # Next.js pages
│   ├── _app.js         # App configuration
│   ├── index.js        # Homepage
│   ├── about.js        # About page
│   ├── portfolio/      # Portfolio pages
│   ├── services.js     # Services page
│   └── blog/           # Blog pages
├── public/             # Static assets
│   ├── images/         # Images and logos
│   ├── models/         # 3D model files
│   └── videos/         # Video files
├── styles/             # CSS styles
│   └── globals.css     # Global styles
├── utils/              # Utility functions
│   ├── projectData.js  # Project data management
│   └── blogData.js     # Blog data management
└── config/             # Configuration files
    └── siteConfig.js   # Site configuration
```

## 🎨 Customization

### Brand Customization
- **Logo**: Replace files in `public/images/`
- **Brand Name**: Update in `components/Footer.js` and `components/Hero.js`
- **Colors**: Modify `tailwind.config.js`
- **Fonts**: Update in `pages/_app.js`

### Adding New Projects
1. Create project folder in `public/projects/`
2. Add project data to `utils/projectData.js`
3. Upload images and 3D models
4. Update featured projects list

### Content Management
- **Projects**: Edit `utils/projectData.js`
- **Blog Posts**: Edit `utils/blogData.js`
- **Services**: Update `pages/services.js`
- **About**: Update `pages/about.js`

## 📚 Documentation

### Guides
- **[Content Management Guide](CONTENT_MANAGEMENT_GUIDE.md)** - Complete content management reference
- **[Portfolio Management Guide](PORTFOLIO_MANAGEMENT_GUIDE.md)** - Adding and managing projects
- **[Brand Customization Guide](BRAND_CUSTOMIZATION_GUIDE.md)** - Changing logo, brand name, and colors
- **[3D Model Viewer Guide](3D_MODEL_VIEWER_GUIDE.md)** - 3D model integration and troubleshooting
- **[3D Model Troubleshooting](3D_MODEL_TROUBLESHOOTING.md)** - Common issues and solutions

### Technical Documentation
- **[Implementation Summary](IMPLEMENTATION_SUMMARY.md)** - Complete feature overview
- **[Deployment Guide](DEPLOYMENT_GUIDE.md)** - Deployment instructions
- **[Folder Structure Guide](FOLDER_STRUCTURE_GUIDE.md)** - Project organization

## 🛠️ Technology Stack

### Frontend
- **Next.js 13+** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Scroll animations

### 3D Graphics
- **React Three Fiber** - 3D rendering
- **@react-three/drei** - 3D utilities
- **Three.js** - 3D graphics library

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile Safari** 14+
- **Chrome Mobile** 90+

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure build settings
3. Deploy automatically

### Netlify
1. Connect repository
2. Set build command: `npm run build`
3. Set publish directory: `out`

### Other Platforms
- **AWS Amplify**
- **DigitalOcean App Platform**
- **Heroku**
- **Custom VPS**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: anythingcandesign@gmail.com
- **Phone**: +91 7498441756
- **Location**: India
- **Documentation**: Check the guides in the `/docs` folder

## 🙏 Acknowledgments

- **Three.js** - 3D graphics library
- **React Three Fiber** - React integration for Three.js
- **Next.js** - React framework
- **Tailwind CSS** - CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Animation library

---

## 📊 Project Status

- **Version**: 2.0
- **Last Updated**: January 2024
- **Status**: Production Ready
- **Maintenance**: Active

## 🔄 Changelog

### Version 2.0 (January 2024)
- ✅ Updated all documentation with current website data
- ✅ Added comprehensive brand customization guide
- ✅ Updated project data with current projects
- ✅ Enhanced 3D model viewer system
- ✅ Improved responsive design
- ✅ Added dark/light mode toggle
- ✅ Updated contact information

### Version 1.0 (Initial Release)
- ✅ Basic portfolio website
- ✅ 3D model viewer integration
- ✅ Responsive design
- ✅ Project showcase
- ✅ Contact forms

---

*Built with ❤️ by DesignAnything Team*