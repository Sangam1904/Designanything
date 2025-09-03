# Anything Can Design - Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing CAD modeling, 3D design, and product animation projects.

## ✨ Features

### 🎨 **Portfolio Showcase**
- **Image-Based Display**: Clean, professional project showcase with 4:3 aspect ratio
- **Project Galleries**: Multiple image support with lightbox functionality
- **Responsive Grid**: Systematic layout for both featured projects and portfolio sections
- **Project Details**: Comprehensive project information with technical specifications

### 📝 **Blog System**
- **Rich Content**: Detailed articles with markdown support
- **Image Galleries**: Related images with lightbox navigation
- **Video Integration**: YouTube video embedding support
- **Search & Filtering**: Advanced search and category filtering
- **Related Posts**: Intelligent content recommendations

### 🛠️ **Technical Features**
- **Next.js 13+**: Modern React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Mobile-first, cross-device compatibility
- **Dark Mode**: Built-in dark/light theme support
- **SEO Optimized**: Meta tags, structured data, and performance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd "anything can design"

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
├── components/           # Reusable UI components
│   ├── Layout.js        # Main layout wrapper
│   ├── Hero.js          # Hero section component
│   ├── PortfolioPreview.js # Featured projects display
│   ├── ImageVideoDisplay.js # Image gallery component
│   └── ProjectDetailModal.js # Project detail modal
├── pages/               # Next.js pages
│   ├── index.js         # Homepage
│   ├── portfolio/       # Portfolio pages
│   ├── blog/            # Blog system
│   ├── about.js         # About page
│   ├── services.js      # Services page
│   └── contact.js       # Contact page
├── public/              # Static assets
│   ├── images/          # Image assets
│   │   ├── projects/    # Project images
│   │   ├── blog/        # Blog post images
│   │   ├── team/        # Team member photos
│   │   └── icons/       # Logos and icons
│   ├── models/          # 3D model files
│   └── videos/          # Video files
├── utils/               # Utility functions
│   ├── projectDiscovery.js # Project data management
│   └── blogData.js      # Blog content management
└── styles/              # Global styles
    └── globals.css      # Tailwind CSS and custom styles
```

## 🎯 Content Management

### Adding New Projects
1. **Prepare Assets**: Add project images to `public/images/projects/`
2. **Update Metadata**: Add project data to `utils/projectDiscovery.js`
3. **Test Display**: Verify project appears correctly in portfolio

### Adding Blog Posts
1. **Create Content**: Add blog post data to `utils/blogData.js`
2. **Add Images**: Place blog images in `public/images/blog/`
3. **Update Categories**: Add new categories as needed

### Managing Images
- **Project Images**: 800x600px (4:3 ratio) for thumbnails
- **Blog Images**: 800x600px for blog post thumbnails
- **Gallery Images**: 1200x900px for detailed views
- **Format**: JPG/PNG with web optimization

## 🎨 Customization

### Colors and Branding
- **Primary Colors**: Update in `tailwind.config.js`
- **Custom CSS**: Modify `styles/globals.css`
- **Logo**: Replace files in `public/images/icons/`

### Layout and Components
- **Component Styling**: Modify individual component files
- **Page Layouts**: Update page components in `pages/`
- **Responsive Design**: Adjust breakpoints in Tailwind classes

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Optimized for smartphones and tablets
- **Desktop**: Enhanced layouts for larger screens
- **Touch-Friendly**: Optimized for touch interactions
- **Performance**: Fast loading on all devices

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Export static site
```

### Code Style
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **TypeScript**: Type safety (optional)
- **Component Structure**: Functional components with hooks

## 📊 Performance

### Optimization Features
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Caching**: Static generation and caching strategies

### SEO Features
- **Meta Tags**: Dynamic meta tags for all pages
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Performance**: Core Web Vitals optimization

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- **Netlify**: Static site hosting
- **AWS S3**: Cloud hosting
- **Custom Server**: Node.js deployment

## 📚 Documentation

- **Content Management Guide**: `CONTENT_MANAGEMENT_GUIDE.md`
- **Folder Structure Guide**: `FOLDER_STRUCTURE_GUIDE.md`
- **Deployment Guide**: `DEPLOYMENT_GUIDE.md`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the documentation files
- Review the code comments
- Contact the development team

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
