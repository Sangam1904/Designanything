# Content Management Guide - Complete Reference

## 📚 Table of Contents
1. [Adding New Projects](#adding-new-projects)
2. [Managing Images](#managing-images)
3. [Adding Videos](#adding-videos)
4. [3D Models Management](#3d-models-management)
5. [Services Management](#services-management)
6. [Logo and Branding](#logo-and-branding)
7. [Blog Content Management](#blog-content-management)
8. [File Organization](#file-organization)
9. [Content Guidelines](#content-guidelines)

---

## 🚀 Adding New Projects

### Step 1: Prepare Project Assets
```bash
# Create project folder structure
public/
├── images/
│   └── projects/
│       ├── project-name-1.jpg
│       ├── project-name-2.jpg
│       └── project-name-thumbnail.jpg
├── models/
│   └── project-name.glb
└── videos/
    └── project-name.mp4
```

### Step 2: Update Project Metadata
**File**: `utils/projectDiscovery.js`

```javascript
// Add new project to PROJECT_METADATA
'your-new-project': {
  id: 7, // Increment from existing projects
  title: 'Your New Project Title',
  category: 'Your Category',
  software: 'Your Software',
  description: 'Detailed description of your new project.',
  image: '/images/projects/your-new-project-thumbnail.jpg',
  gallery: [
    '/images/projects/your-new-project-1.jpg',
    '/images/projects/your-new-project-2.jpg',
    '/images/projects/your-new-project-3.jpg'
  ],
  modelUrl: '/models/your-new-project.glb',
  videoUrl: 'https://www.youtube.com/watch?v=your-video-id',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  featured: true, // Set to true for featured projects
  year: 2024,
  specifications: {
    complexity: 'High/Medium/Low',
    parts: 'Number of components',
    analysis: 'Type of analysis performed',
    manufacturing: 'Manufacturing status'
  },
  technicalDetails: [
    'Technical detail 1',
    'Technical detail 2',
    'Technical detail 3',
    'Technical detail 4',
    'Technical detail 5'
  ]
},

// Add to KNOWN_MODEL_FILES if you have a 3D model
{
  filename: 'your-new-project.glb',
  name: 'your-new-project',
  extension: '.glb',
  path: '/models/your-new-project.glb',
  size: 52428800 // File size in bytes
}
```

### Step 3: Image Requirements
- **Thumbnail**: 800x600px (4:3 ratio), JPG/PNG
- **Gallery Images**: 1200x900px (4:3 ratio), JPG/PNG
- **File Naming**: Use descriptive names with hyphens (e.g., `hydrogen-bike-thumbnail.jpg`)
- **File Size**: Keep under 500KB for thumbnails, 2MB for gallery images

---

## 🖼️ Managing Images

### Image Types and Locations

#### 1. Project Images
```bash
public/images/projects/
├── p1.jpg                    # Placeholder image
├── hydrogen-bike-1.jpg       # Project specific images
├── solar-plant-1.jpg
└── drone-1.jpg
```

#### 2. Blog Images
```bash
public/images/blog/
├── solar-trees.jpg
├── 3d-printing.jpg
├── catia-surfacing.jpg
└── blender-animation.jpg
```

#### 3. Hero and Background Images
```bash
public/images/hero/
├── main-hero.jpg
├── about-hero.jpg
└── services-hero.jpg
```

#### 4. Team and Profile Images
```bash
public/images/team/
├── Sangmeshwar kanade.jpg
├── abhishek.jpg
└── rahul.jpg
```

### Image Optimization Guidelines
- **Format**: Use JPG for photos, PNG for graphics with transparency
- **Compression**: Optimize images for web (70-80% quality)
- **Dimensions**: Use consistent aspect ratios (4:3 for projects, 16:9 for hero)
- **Alt Text**: Always include descriptive alt text for accessibility

---

## 🎥 Adding Videos

### Video Integration Methods

#### 1. YouTube Videos
```javascript
// In project metadata
videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID'

// In components
<a 
  href={project.videoUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="video-link"
>
  Watch Video
</a>
```

#### 2. Local Video Files
```bash
public/videos/
├── project-demo.mp4
├── tutorial.mp4
└── showcase.mp4
```

```javascript
// Video component usage
<video 
  controls
  className="w-full rounded-lg"
  poster="/images/video-thumbnail.jpg"
>
  <source src="/videos/project-demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Video Requirements
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1080p or 720p
- **Duration**: Keep under 5 minutes for project demos
- **Thumbnail**: Create custom thumbnail images for video previews

---

## 🎯 3D Models Management

### Model File Organization
```bash
public/models/
├── hydrogen-bike.glb         # 70.3 MB
├── solar-plant.glb          # 19.1 MB
├── drone.glb                # 15.2 MB
├── car-surfacing.glb        # 25.6 MB
└── your-new-model.glb       # Add your models here
```

### Model Requirements
- **Format**: GLB (recommended) or GLTF
- **File Size**: Keep under 100MB for web performance
- **Optimization**: Reduce polygon count for web viewing
- **Textures**: Embed textures in GLB files

### Adding New 3D Models
1. **Place model file** in `public/models/`
2. **Update metadata** in `projectDiscovery.js`
3. **Add to KNOWN_MODEL_FILES** array
4. **Test loading** in development mode

---

## 🛠️ Services Management

### Adding New Services
**File**: `pages/services.js`

   ```javascript
const services = [
     {
       id: 1,
    title: 'CAD Modeling',
    description: 'Professional CAD modeling services...',
    icon: 'CADIcon',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3'
    ],
    image: '/images/services/cad-modeling.jpg'
  },
  // Add your new service here
  {
    id: 6,
    title: 'Your New Service',
    description: 'Description of your new service...',
    icon: 'YourIcon',
    features: [
      'Your feature 1',
      'Your feature 2',
      'Your feature 3'
    ],
    image: '/images/services/your-service.jpg'
     }
   ]
   ```

### Service Images
```bash
public/images/services/
├── cad-modeling.jpg
├── 3d-design.jpg
├── product-animation.jpg
└── your-service.jpg
```

---

## 🎨 Logo and Branding

### Logo Management
```bash
public/images/icons/
├── logo.svg                 # Main logo (SVG recommended)
├── logo-white.svg          # White version for dark backgrounds
├── logo-dark.svg           # Dark version for light backgrounds
├── favicon.ico             # Browser favicon
└── apple-touch-icon.png    # iOS home screen icon
```

### Logo Requirements
- **Format**: SVG (vector) for logos, PNG for icons
- **Dimensions**: Logo should be scalable without quality loss
- **Colors**: Ensure contrast with background colors
- **Versions**: Create light and dark variants

### Updating Branding
1. **Replace logo files** in `public/images/icons/`
2. **Update color scheme** in `tailwind.config.js`
3. **Modify brand colors** in `styles/globals.css`
4. **Update favicon** and touch icons

---

## 📝 Blog Content Management

### Blog Post Structure
```javascript
const blogPost = {
  id: 8,
  title: 'Your Blog Post Title',
  excerpt: 'Brief description of the blog post...',
  author: 'Author Name',
  date: '2024-01-20',
  readTime: '10 min read',
  category: 'Category Name',
  image: '/images/blog/your-post-thumbnail.jpg',
  slug: 'your-blog-post-slug',
  content: `
    # Your Blog Post Content
    
    ## Introduction
    Your introduction content here...
    
    ## Main Content
    Your main content with markdown support...
    
    ## Conclusion
    Your conclusion here...
  `,
  tags: ['tag1', 'tag2', 'tag3'],
  relatedPosts: [1, 2, 3], // IDs of related posts
  videoUrl: 'https://www.youtube.com/watch?v=video-id', // Optional
  gallery: [
    '/images/blog/post-image-1.jpg',
    '/images/blog/post-image-2.jpg'
  ]
}
```

### Adding New Blog Posts

#### Step 1: Create Blog Post Data
**File**: `utils/blogData.js` (create if doesn't exist)

```javascript
export const blogPosts = [
  // Existing posts...
  {
    id: 8,
    title: 'Your New Blog Post',
    excerpt: 'Brief description...',
    author: 'Your Name',
    date: '2024-01-20',
    readTime: '10 min read',
    category: 'Your Category',
    image: '/images/blog/your-post.jpg',
    slug: 'your-blog-post',
    content: `
      # Your Blog Post Title
      
      ## Introduction
      Your introduction...
      
      ## Main Content
      Your content...
      
      ## Conclusion
      Your conclusion...
    `,
    tags: ['tag1', 'tag2'],
    relatedPosts: [1, 2, 3]
  }
]
```

#### Step 2: Add Blog Images
```bash
public/images/blog/
├── your-post-thumbnail.jpg    # 800x600px
├── your-post-hero.jpg         # 1200x600px
├── your-post-image-1.jpg      # Content images
└── your-post-image-2.jpg
```

#### Step 3: Create Individual Blog Post Page
**File**: `pages/blog/[slug].js`

```javascript
import { useRouter } from 'next/router'
import { blogPosts } from '../../utils/blogData'
import Layout from '../../components/Layout'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) return <div>Post not found</div>
  
  return (
    <Layout title={post.title} description={post.excerpt}>
      <article className="max-w-4xl mx-auto py-16">
        {/* Hero Image */}
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-600">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
            <span>{post.category}</span>
          </div>
        </header>
        
        {/* Post Content */}
        <div className="prose prose-lg max-w-none">
          {post.content}
        </div>
        
        {/* Gallery */}
        {post.gallery && (
          <div className="mt-12">
            <h3>Related Images</h3>
            <div className="grid grid-cols-2 gap-4">
              {post.gallery.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${post.title} image ${index + 1}`}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Video */}
        {post.videoUrl && (
          <div className="mt-12">
            <h3>Related Video</h3>
            <iframe
              src={post.videoUrl.replace('watch?v=', 'embed/')}
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        )}
      </article>
    </Layout>
  )
}
```

### Blog Categories
```javascript
const categories = [
  'All',
  'CAD Tutorials',
  'Industry Insights', 
  'Animation',
  'Simulation',
  'Case Studies',
  'Your New Category'
]
```

---

## 📁 File Organization

### Recommended Structure
```bash
public/
├── images/
│   ├── projects/          # Project images
│   ├── blog/             # Blog post images
│   ├── services/         # Service images
│   ├── team/             # Team member photos
│   ├── hero/             # Hero section images
│   └── icons/            # Logos and icons
├── models/               # 3D model files
├── videos/               # Video files
├── downloads/            # Downloadable files
└── documents/            # PDFs and documents
```

### File Naming Conventions
- **Use hyphens**: `project-name.jpg` not `project_name.jpg`
- **Be descriptive**: `hydrogen-bike-thumbnail.jpg` not `img1.jpg`
- **Include dimensions**: `hero-1200x600.jpg` for large images
- **Use lowercase**: All filenames should be lowercase

---

## 📋 Content Guidelines

### General Content Rules
1. **Quality**: Use high-quality, professional images
2. **Consistency**: Maintain consistent aspect ratios and styles
3. **Optimization**: Compress images and videos for web
4. **Accessibility**: Include alt text and descriptions
5. **Branding**: Follow brand guidelines for colors and fonts

### Image Specifications
- **Thumbnails**: 800x600px (4:3 ratio)
- **Hero Images**: 1200x600px (2:1 ratio)
- **Gallery Images**: 1200x900px (4:3 ratio)
- **Blog Images**: 800x600px (4:3 ratio)
- **Team Photos**: 400x400px (1:1 ratio)

### Content Update Workflow
1. **Prepare assets** (images, videos, models)
2. **Update metadata** in appropriate files
3. **Test locally** in development mode
4. **Commit changes** to version control
5. **Deploy** to production

---

## 🔧 Technical Notes

### Performance Optimization
- **Image compression**: Use tools like TinyPNG or ImageOptim
- **Lazy loading**: Implement for images below the fold
- **CDN**: Consider using a CDN for large assets
- **Caching**: Set appropriate cache headers for static assets

### SEO Considerations
- **Alt text**: Descriptive alt text for all images
- **File names**: SEO-friendly filenames
- **Meta descriptions**: Include in blog posts
- **Structured data**: Add JSON-LD for blog posts

### Maintenance
- **Regular audits**: Check for broken links and missing images
- **Backup**: Keep backups of all original assets
- **Version control**: Track changes to content files
- **Documentation**: Update this guide as needed

---

## 📞 Support and Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths and permissions
2. **3D models not displaying**: Verify file format and size
3. **Videos not playing**: Check format compatibility
4. **Performance issues**: Optimize file sizes

### Getting Help
- **Documentation**: Refer to this guide first
- **Code comments**: Check inline documentation
- **Version control**: Review recent changes
- **Team support**: Contact development team

---

*Last updated: January 2024*
*Version: 2.0*
