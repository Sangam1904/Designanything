# 🎯 Practical Example: Adding Your Content

This file shows you exactly how to add your own content to the website with real examples.

---

## 📝 Adding a New Project

### Step 1: Prepare Your Files
Before adding a project, prepare your files:

1. **3D Models:** Place in `public/models/`
   - `my-project.glb` (for 3D viewer)
   - `my-project.gltf` (alternative format)

2. **Images:** Place in `public/images/portfolio/`
   - `my-project-thumb.jpg` (thumbnail, 400x300px)
   - `my-project-1.jpg` (gallery image 1)
   - `my-project-2.jpg` (gallery image 2)

3. **STEP Files:** Place in `public/downloads/`
   - `my-project.step` (for CAD downloads)

### Step 2: Add Project Data
Open `utils/projectData.js` and add your project to the `PROJECTS_DATA` object (see Example 2 below for details).

### Step 3: Test Your Project
1. Save the file
2. Run: `npm run dev`
3. Go to: `http://localhost:3000/portfolio`
4. Click on your project to see the 3D model and gallery

---

## 🎮 Interactive 3D Model Viewer (Portfolio Only)

### Step 1: 3D Model Integration
The 3D Model Viewer is **exclusively integrated in the Portfolio section**:

1. **Portfolio Grid:** Each project card shows a 3D model preview
2. **Project Detail Modal:** Full-screen 3D model viewer with controls
3. **Model Management:** Models are added manually to the project data structure

### Step 2: Model Viewer Features
- **OrbitControls:** Rotate, zoom, and pan with mouse
- **Auto-resize:** Responsive to container size
- **HDRI Environment:** Realistic lighting and shadows
- **Loading States:** Smooth loading with spinners
- **Fallback:** "3D model not available" for projects without models

### Step 3: Data Structure
Projects use this structure for 3D models:

```javascript
{
  "title": "Hydrogen Bike Design",
  "category": "Mechanical Design", 
  "software": "SOLIDWORKS",
  "year": 2024,
  "modelUrl": "/models/hydrogen-bike.glb",  // 3D model path
  "image": "/images/portfolio/hydrogen-bike.jpg",  // Thumbnail
  "gallery": [
    "/images/portfolio/hydrogen-bike-1.jpg",
    "/images/portfolio/hydrogen-bike-2.jpg"
  ]
}
```

### Step 4: Model Viewer Usage
The ModelViewer component is used like this:

```javascript
// In Portfolio Grid
<ModelViewer 
  modelPath={project.modelUrl}
  className="h-full"
  height="h-64"
/>

// In Project Detail Modal  
<ModelViewer
  modelPath={project.modelUrl}
  className="w-full h-full"
  height="h-full"
/>
```

### Step 5: Supported Formats
- **GLB (.glb):** Binary format, recommended for web
- **GLTF (.gltf):** Text format with external resources
- **File size:** Keep under 10MB for best performance

---

## 📝 Example 1: Adding Your 

### Step 1: Prepare Your 
- Save your  as: `public/images/.png`
- Recommended size: 200x60 pixels
- Format: PNG (transparent background preferred)

### Step 2: Update the Navbar
Open `components/Navbar.js` and replace the  section:

**Current (Text ):**
```javascript
{/* OPTION 1: Text-based  (Current) */}
<div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-lg">ACD</span>
</div>
```

**New (Image ):**
```javascript
{/* OPTION 2: Image-based  */}
<img 
  src="/images/.png" 
  alt="DesignAnything" 
  className="h-8 w-auto"
/>
```

---

## 🎮 Example 2: Adding a 3D Model Project (Manual Method)

### Step 1: Prepare Your Files
1. **3D Model:** Save as `public/models/my-project.glb`
2. **Project Image:** Save as `public/images/portfolio/my-project.jpg`

### Step 2: Add to Portfolio
Open `utils/projectData.js` and add your project to the `PROJECTS_DATA` object:

```javascript
'my-custom-project': {
  id: 'my-custom-project',
  title: 'My Custom Project',
  category: 'Product Design',
  software: 'Fusion 360',
  description: 'This is my amazing project description that showcases my skills.',
  shortDescription: 'Brief description for cards',
  thumbnail: '/projects/my-custom-project/thumbnails/my-project-thumbnail.jpg',
  heroImage: '/projects/my-custom-project/images/my-project-hero.jpg',
  gallery: [
    '/projects/my-custom-project/images/my-project-1.jpg',
    '/projects/my-custom-project/images/my-project-2.jpg'
  ],
  models: [
    {
      name: 'Main Model',
      url: '/models/my-project.glb',
      type: 'glb'
    }
  ],
  videos: [
    {
      name: 'Project Overview',
      url: '/projects/my-custom-project/videos/my-project-overview.mp4',
      type: 'mp4'
    }
  ],
  tags: ['Custom Tag', 'Design', 'Innovation'],
  featured: true,
  year: 2024,
  status: 'Completed',
  specifications: {
    complexity: 'Medium',
    parts: '20+ components',
    analysis: 'Structural',
    manufacturing: 'Production Ready',
    materials: ['Aluminum', 'Steel'],
    dimensions: '150x100x50mm'
  },
  technicalDetails: [
    'Technical detail 1',
    'Technical detail 2',
    'Technical detail 3'
  ],
  timeline: {
    startDate: '2024-01-01',
    endDate: '2024-03-01',
    duration: '2 months'
  },
  skills: ['CAD Modeling', 'Product Design', 'Analysis']
}
```

### Step 3: Test Your Model
1. Save the file
2. Run: `npm run dev`
3. Go to: `http://localhost:3000/portfolio`
4. Click on your project to see the 3D model

---

## 📸 Example 3: Adding Team Member Photos

### Step 1: Prepare Photos
- Save photos as: `public/images/team/Sangmeshwar kanade.jpg`, `public/images/team/abhishek.jpg`, etc.
- Recommended size: 400x400 pixels
- Format: JPG or PNG

### Step 2: Update About Page
Open `pages/about.js` and find the team section:

```javascript
const team = [
  {
    name: 'Sangmeshwar kanade',
    role: 'Lead Designer',
    image: '/images/team/Sangmeshwar kanade.jpg', // Add your photo here
    bio: 'Expert in product design and 3D modeling with 5+ years experience.',
    skills: ['SOLIDWORKS', 'CATIA', 'Fusion 360'],
    linkedin: 'https://linkedin.com/in/Sangmeshwar kanade'
  },
  {
    name: 'Abhishek Raut',
    role: 'CAD Specialist',
    image: '/images/team/Abhishek.jpg', // Add your photo here
    bio: 'Specialized in mechanical design and engineering analysis.',
    skills: ['ANSYS', 'SOLIDWORKS', 'AutoCAD'],
    linkedin: 'https://linkedin.com/in/abhishek'
  }
]
```

---

## 🎥 Example 4: Adding a Video to Hero Section

### Step 1: Prepare Your Video
- Save your video as: `public/videos/product-animation.mp4`
- Recommended format: MP4
- Recommended size: Under 10MB for fast loading

### Step 2: Update Hero Component
The video is already configured in `components/Hero.js`. Just replace the video file:

1. Delete: `public/videos/product-animation.mp4`
2. Add your video with the same name: `public/videos/product-animation.mp4`

The video will automatically:
- Play on page load
- Loop continuously
- Be responsive
- Have rounded corners and shadow

---

## 📊 Example 5: Updating Contact Information

### Step 1: Update Contact Details
Open `pages/contact.js` and modify the `contactInfo` array:

```javascript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your-email@gmail.com', // Change this
    link: 'mailto:your-email@gmail.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 1234567890', // Change this
    link: 'tel:+911234567890'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Your City, India', // Change this
    link: '#'
  }
]
```

### Step 2: Update Social Links
In the same file, update the social links:

```javascript
const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/your-channel',
    icon: Youtube
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/your-company',
    icon: Linkedin
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/your-handle',
    icon: Instagram
  },
  {
    name: 'Pinterest',
    url: 'https://pinterest.com/your-profile',
    icon: Pin
  }
]
```

---

## 🔧 Example 6: Customizing Colors and Styling

### Step 1: Update Brand Colors
Open `tailwind.config.js` and modify the colors:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6', // Your primary blue
    600: '#2563eb',
    700: '#1d4ed8'
  },
  secondary: {
    50: '#f0fdf4',
    500: '#22c55e', // Your secondary green
    600: '#16a34a',
    700: '#15803d'
  }
}
```

### Step 2: Update CSS Variables
Open `styles/globals.css` and modify:

```css
:root {
  --primary: #3b82f6; /* Your primary color */
  --secondary: #22c55e; /* Your secondary color */
  --accent: #f59e0b; /* Your accent color */
}
```

---

## 📱 Example 7: Adding Mobile-Specific Features

### Step 1: Responsive Images
For better mobile performance, use different image sizes:

```javascript
// In your project data
{
  image: '/images/portfolio/my-project.jpg',
  imageMobile: '/images/portfolio/my-project-mobile.jpg', // Smaller version
  imageTablet: '/images/portfolio/my-project-tablet.jpg'  // Medium version
}
```

### Step 2: Mobile-Optimized 3D Models
- Keep GLB files under 5MB for mobile
- Use compressed textures
- Test on actual mobile devices

---

## 🚀 Quick Start Checklist

### Before Adding Content:
- [ ] Install dependencies: `npm install`
- [ ] Start development server: `npm run dev`
- [ ] Prepare your files in the `public/` folder

### For Each New Project:
- [ ] Create 3D model (.glb/.gltf)
- [ ] Create thumbnail image (400x300px)
- [ ] Create gallery images (1200x800px)
- [ ] Create STEP file for downloads (optional)
- [ ] Add project data to `utils/projectData.js`
- [ ] Test 3D viewer functionality in portfolio
- [ ] Test mobile responsiveness

### For Website Customization:
- [ ] Update  and branding
- [ ] Update contact information
- [ ] Update social media links
- [ ] Customize colors in Tailwind config
- [ ] Test all pages and functionality

---

## 🆘 Troubleshooting

### Common Issues:

**3D Model Not Loading:**
- Check file format (.glb/.gltf)
- Check file size (keep under 10MB)
- Check file path (must start with `/`)
- Check browser console for errors

**Project Not Appearing:**
- Check project data structure in `utils/projectData.js`
- Verify all file paths are correct
- Check browser console for errors
- Restart development server

**Images Not Displaying:**
- Check file paths start with `/`
- Check file exists in `public/` folder
- Check file format (JPG, PNG, WebP)
- Check file permissions

**Performance Issues:**
- Compress images (use WebP format)
- Compress 3D models
- Use lazy loading for images
- Test on different devices

---

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Ensure files are in the right folders
4. Test with smaller files first
5. Check the documentation in other .md files

The website is designed to be user-friendly and easy to customize. Follow the examples above to add your content!

---

## 🎯 **IMPORTANT: 3D Model Viewer Integration**

### **Component Placement:**
- ✅ **Portfolio Grid:** Each project card shows 3D model preview
- ✅ **Project Detail Modal:** Full-screen 3D model viewer
- ✅ **Model Management:** Models added via project data structure
- ✅ **Home Page:** Clean, no 3D viewer (as requested)

### **Data Flow:**
```javascript
// Project data structure
{
  title: "Hydrogen Bike Design",
  modelUrl: "/models/hydrogen-bike.glb",  // 3D model path
  image: "/images/portfolio/hydrogen-bike.jpg",  // Thumbnail
  // ... other fields
}

// ModelViewer usage
<ModelViewer 
  modelPath={project.modelUrl}  // Pass model path
  className="h-full"
  height="h-64"
/>
```

### **Features:**
- ✅ **OrbitControls:** Rotate, zoom, pan
- ✅ **Auto-resize:** Responsive to container
- ✅ **HDRI Environment:** Realistic lighting
- ✅ **Loading States:** Smooth loading
- ✅ **Fallback:** "3D model not available" message
- ✅ **Manual Management:** Models managed via project data structure

The 3D Model Viewer is now perfectly integrated into the Portfolio section with all the requested features!
