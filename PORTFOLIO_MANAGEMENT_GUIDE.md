# Portfolio Management Guide - DesignAnything Website

This guide explains how to manage and add new projects to the portfolio section of the DesignAnything website.

## 🌐 Current Website Overview

- **Brand**: DesignAnything
- **Tagline**: "Transform Ideas Into Reality"
- **Contact**: anythingcandesign@gmail.com | +91 7498441756
- **Location**: India
- **Technology**: Next.js 13+ | React Three Fiber | Tailwind CSS

## 📁 Project Folder Structure

Each project has its own dedicated folder in `public/projects/` with the following structure:

```
public/projects/
├── project-name/
│   ├── images/
│   │   ├── project-name-hero.png      # Main hero image
│   │   ├── project-name-1.png         # Gallery image 1
│   │   ├── project-name-2.png         # Gallery image 2
│   │   └── project-name-3.png         # Gallery image 3
│   ├── models/
│   │   └── project-name-main.glb      # Main 3D model (optional)
│   ├── videos/
│   │   ├── project-name-overview.mp4  # Overview video (optional)
│   │   └── project-name-process.mp4   # Process video (optional)
│   └── thumbnails/
│       └── project-name-thumbnail.png # Thumbnail for portfolio grid
```

**Note**: 3D models are stored in `/public/models/` directory for better organization.

## 🎯 Current Projects

### 1. Arc Reactor Design (`arc-reactor`)
- **Category**: Mechanical Design
- **Software**: SOLIDWORKS
- **Status**: Completed
- **Featured**: Yes
- **Year**: 2024
- **Model**: `/models/arc-reactor-im.glb`

### 2. Solar Floating Plant (`solar-plant`)
- **Category**: Industrial Design
- **Software**: CATIA
- **Status**: Completed
- **Featured**: Yes
- **Year**: 2024
- **Model**: `/models/solar-plant.glb`

### 3. Hydrogen-Powered Bicycle (`hydrogen-bike`)
- **Category**: Product Design
- **Software**: Blender
- **Status**: Completed
- **Featured**: Yes
- **Year**: 2024
- **Model**: `/models/hydrogen-bike.glb`

### 4. Drone Design (`drone-design`)
- **Category**: Aerospace Design
- **Software**: Fusion 360
- **Status**: Completed
- **Featured**: Yes
- **Year**: 2024
- **Model**: `/models/drone.glb`

### 5. Car Surfacing (`car-surfacing`)
- **Category**: Automotive Design
- **Software**: CATIA
- **Status**: Completed
- **Featured**: No
- **Year**: 2024
- **Model**: `/models/car-surfacing.glb`

## ➕ Adding a New Project

### Step 1: Create Project Folder Structure

1. Create a new folder in `public/projects/` with your project name (use kebab-case):
   ```bash
   mkdir public/projects/your-project-name
   mkdir public/projects/your-project-name/images
   mkdir public/projects/your-project-name/models
   mkdir public/projects/your-project-name/videos
   mkdir public/projects/your-project-name/thumbnails
   ```

### Step 2: Add Project Assets

#### Images
- **Hero Image**: `your-project-name-hero.jpg` (1200x800px recommended)
- **Thumbnail**: `your-project-name-thumbnail.jpg` (400x300px recommended)
- **Gallery Images**: `your-project-name-1.jpg`, `your-project-name-2.jpg`, etc.

#### 3D Models
- **Main Model**: `your-project-name-main.glb` (GLB format preferred)
- **Detail Models**: Additional models as needed

#### Videos
- **Overview Video**: `your-project-name-overview.mp4`
- **Process Videos**: Additional videos as needed

### Step 3: Update Project Data

Add your project to `utils/projectData.js` in the `PROJECTS_DATA` object:

```javascript
'your-project-name': {
  id: 'your-project-name',
  title: 'Your Project Title',
  category: 'Mechanical Design', // Choose from PROJECT_CATEGORIES
  software: 'SOLIDWORKS', // Choose from SOFTWARE_TOOLS
  description: 'Detailed description of your project...',
  shortDescription: 'Brief description for cards',
  
  // Media files
  thumbnail: '/projects/your-project-name/thumbnails/your-project-name-thumbnail.jpg',
  heroImage: '/projects/your-project-name/images/your-project-name-hero.jpg',
  gallery: [
    '/projects/your-project-name/images/your-project-name-1.jpg',
    '/projects/your-project-name/images/your-project-name-2.jpg',
    '/projects/your-project-name/images/your-project-name-3.jpg'
  ],
  models: [
    {
      name: 'Main Assembly',
      url: '/projects/your-project-name/models/your-project-name-main.glb',
      type: 'glb'
    }
  ],
  videos: [
    {
      name: 'Overview',
      url: '/projects/your-project-name/videos/your-project-name-overview.mp4',
      type: 'mp4'
    }
  ],
  
  // Project metadata
  tags: ['Tag1', 'Tag2', 'Tag3'],
  featured: true, // Set to true to show in featured section
  year: 2024,
  status: 'Completed', // 'Completed', 'In Development', 'Concept'
  client: 'Client Name',
  
  // Technical specifications
  specifications: {
    complexity: 'High', // 'Low', 'Medium', 'High', 'Very High'
    parts: '100+ components',
    analysis: 'Structural & Thermal',
    manufacturing: 'Production Ready',
    materials: ['Material1', 'Material2'],
    dimensions: '1000mm x 500mm x 300mm'
  },
  
  // Detailed information
  technicalDetails: [
    'Detail 1 about the project',
    'Detail 2 about the project',
    'Detail 3 about the project'
  ],
  
  // Project timeline
  timeline: {
    startDate: '2024-01-01',
    endDate: '2024-06-30',
    duration: '6 months'
  },
  
  // Skills demonstrated
  skills: ['Skill1', 'Skill2', 'Skill3']
}
```

## 🏷️ Available Categories

- Mechanical Design
- Industrial Design
- Product Design
- Automotive Design
- Aerospace Design
- Consumer Products
- Medical Devices
- Architecture

## 🛠️ Available Software Tools

- SOLIDWORKS
- CATIA
- Fusion 360
- Blender
- ANSYS
- AutoCAD
- Inventor
- Rhino
- Maya
- 3ds Max

## 📊 Project Status Options

- **Completed**: Project is finished and delivered
- **In Development**: Project is currently being worked on
- **Concept**: Project is in concept/planning phase

## 🎨 Image Guidelines

### Hero Images
- **Size**: 1200x800px minimum
- **Format**: JPG or PNG
- **Quality**: High resolution, professional quality
- **Content**: Best representation of the project

### Thumbnails
- **Size**: 400x300px
- **Format**: JPG
- **Quality**: Optimized for web
- **Content**: Clear, recognizable project image

### Gallery Images
- **Size**: 800x600px minimum
- **Format**: JPG or PNG
- **Quality**: High resolution
- **Content**: Different angles, details, or process shots

## 🎥 Video Guidelines

- **Format**: MP4
- **Resolution**: 1920x1080 minimum
- **Duration**: 30-120 seconds for overview videos
- **File Size**: Keep under 50MB for web performance
- **Content**: Show project in action, assembly process, or final result

## 🔧 3D Model Guidelines

- **Format**: GLB (preferred) or GLTF
- **File Size**: Keep under 10MB for web performance
- **Optimization**: Use appropriate LOD (Level of Detail)
- **Textures**: Include materials and textures
- **Animation**: Include animations if relevant

## 🚀 Best Practices

1. **Naming Convention**: Use kebab-case for all file and folder names
2. **File Organization**: Keep all project assets in their dedicated folder
3. **Image Optimization**: Compress images for web without losing quality
4. **Model Optimization**: Optimize 3D models for web performance
5. **Consistent Quality**: Maintain consistent image and video quality across all projects
6. **Descriptive Content**: Write clear, detailed descriptions and technical details
7. **Regular Updates**: Keep project status and information up to date

## 🔍 Testing Your Changes

After adding a new project:

1. **Build the project**: `npm run build`
2. **Test locally**: `npm run dev`
3. **Check portfolio page**: Navigate to `/portfolio`
4. **Verify featured section**: Check if featured projects display correctly
5. **Test search/filter**: Ensure new project appears in search results

## 📝 Maintenance

- **Regular Reviews**: Review and update project information quarterly
- **Asset Cleanup**: Remove unused or outdated assets
- **Performance Monitoring**: Monitor page load times with new assets
- **SEO Updates**: Update project descriptions for better search visibility

## 🆘 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **3D models not displaying**: Verify GLB format and file size
3. **Videos not playing**: Check MP4 format and file size
4. **Project not appearing**: Verify project is added to PROJECTS_DATA
5. **Build errors**: Check for syntax errors in project data

### Getting Help

- Check the console for error messages
- Verify all file paths are correct
- Ensure all required fields are filled
- Test with a simple project first

---

## 📋 Quick Checklist for New Projects

- [ ] Create project folder structure
- [ ] Add hero image (1200x800px)
- [ ] Add thumbnail (400x300px)
- [ ] Add gallery images (800x600px)
- [ ] Add 3D model (GLB format)
- [ ] Add overview video (MP4 format)
- [ ] Update projectData.js
- [ ] Test locally
- [ ] Verify in portfolio page
- [ ] Check featured section (if applicable)

This system makes it easy to add and manage projects while maintaining consistency and organization across the portfolio.
