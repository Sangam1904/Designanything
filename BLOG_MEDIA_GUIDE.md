# Blog Media Integration Guide

This guide explains how to add images and videos at random positions within your blog posts using the new media system.

## Overview

The blog system now supports inline media elements that can be placed anywhere within your blog content. You can add:
- **Images** with captions and lightbox functionality
- **Videos** with custom posters and controls
- **Image Galleries** with navigation and lightbox

## How It Works

1. **Define Media Elements**: Add media elements to your blog post's `mediaElements` array
2. **Place Media Markers**: Use `[MEDIA:id]` markers in your content to position media
3. **Automatic Rendering**: The system automatically renders media at the specified positions

## Adding Media to Blog Posts

### Step 1: Define Media Elements

In your blog post object in `utils/blogData.js`, add a `mediaElements` array:

```javascript
{
  id: 1,
  title: 'Your Blog Post Title',
  // ... other properties
  mediaElements: [
    {
      id: 1,
      type: 'image',
      src: '/images/blog/your-image.jpg',
      alt: 'Description of your image',
      caption: 'Optional caption for the image',
      className: 'w-full max-w-2xl mx-auto'
    },
    {
      id: 2,
      type: 'video',
      src: '/videos/your-video.mp4',
      poster: '/images/blog/video-poster.jpg',
      title: 'Your Video Title',
      autoplay: false,
      className: 'w-full max-w-4xl mx-auto'
    },
    {
      id: 3,
      type: 'gallery',
      title: 'Gallery Title',
      images: [
        {
          src: '/images/blog/image1.jpg',
          alt: 'First image description'
        },
        {
          src: '/images/blog/image2.jpg',
          alt: 'Second image description'
        }
      ],
      className: 'w-full'
    }
  ],
  content: `Your blog content here...`
}
```

### Step 2: Place Media Markers in Content

In your blog content, use `[MEDIA:id]` markers to position media:

```javascript
content: `
Introduction paragraph here...

[MEDIA:1]

More content here...

[MEDIA:2]

Even more content...

[MEDIA:3]

Conclusion here...
`
```

## Media Types

### 1. Images

```javascript
{
  id: 1,
  type: 'image',
  src: '/path/to/image.jpg',        // Required: Image source
  alt: 'Image description',         // Required: Alt text
  caption: 'Optional caption',      // Optional: Image caption
  className: 'custom-css-classes'   // Optional: CSS classes
}
```

**Features:**
- Click to open in lightbox
- Hover effects
- Responsive design
- Optional captions

### 2. Videos

```javascript
{
  id: 2,
  type: 'video',
  src: '/path/to/video.mp4',        // Required: Video source
  poster: '/path/to/poster.jpg',    // Optional: Video poster
  title: 'Video Title',             // Optional: Video title
  autoplay: false,                  // Optional: Auto-play (default: false)
  className: 'custom-css-classes'   // Optional: CSS classes
}
```

**Features:**
- Custom video controls
- Optional poster image
- Hover to show controls
- Responsive design
- Optional title overlay

### 3. Image Galleries

```javascript
{
  id: 3,
  type: 'gallery',
  title: 'Gallery Title',           // Optional: Gallery title
  images: [                         // Required: Array of images
    {
      src: '/path/to/image1.jpg',
      alt: 'First image description'
    },
    {
      src: '/path/to/image2.jpg',
      alt: 'Second image description'
    }
  ],
  className: 'custom-css-classes'   // Optional: CSS classes
}
```

**Features:**
- Grid layout (responsive)
- Click to open in lightbox
- Navigation between images
- Image counter
- Thumbnail navigation

## Positioning Media

### Method 1: Manual Placement
Place `[MEDIA:id]` markers anywhere in your content:

```javascript
content: `
First paragraph of content.

[MEDIA:1]

Second paragraph with an image above it.

More content here...

[MEDIA:2]

Final paragraph with a video above it.
`
```

### Method 2: Using Helper Functions

```javascript
import { addMediaToContent, createMediaMarker } from '../utils/blogContentParser'

// Add media at the end
let content = addMediaToContent(originalContent, 1, 'end')

// Add media at the beginning
content = addMediaToContent(content, 2, 'start')

// Add media at specific paragraph position
content = addMediaToContent(content, 3, 2) // After 2nd paragraph
```

## CSS Classes

You can customize the appearance of media elements using CSS classes:

### Common Classes
- `w-full` - Full width
- `max-w-2xl mx-auto` - Centered, max width 2xl
- `max-w-4xl mx-auto` - Centered, max width 4xl
- `my-8` - Vertical margin
- `rounded-lg` - Rounded corners

### Example
```javascript
{
  id: 1,
  type: 'image',
  src: '/images/blog/example.jpg',
  alt: 'Example image',
  className: 'w-full max-w-3xl mx-auto my-12 rounded-xl shadow-lg'
}
```

## File Organization

### Recommended Structure
```
public/
├── images/
│   └── blog/
│       ├── post1-image1.jpg
│       ├── post1-image2.jpg
│       ├── post1-gallery-1.jpg
│       └── post1-gallery-2.jpg
└── videos/
    └── blog/
        ├── post1-video1.mp4
        └── post1-video2.mp4
```

### Naming Convention
- Use descriptive names: `solidworks-interface.jpg`
- Include post identifier: `post1-workflow-video.mp4`
- Use hyphens for spaces: `before-after-comparison.jpg`

## Best Practices

### 1. Image Optimization
- Use WebP format when possible
- Optimize file sizes (aim for <500KB)
- Provide high-quality images for lightbox
- Use appropriate dimensions (max 1920px width)

### 2. Video Optimization
- Use MP4 format for compatibility
- Compress videos appropriately
- Provide poster images for better UX
- Keep videos under 50MB when possible

### 3. Content Flow
- Place media strategically to break up text
- Use captions to provide context
- Don't overload posts with too many media elements
- Ensure media enhances the content

### 4. Accessibility
- Always provide meaningful alt text
- Use descriptive captions
- Ensure videos have proper titles
- Test with screen readers

## Example: Complete Blog Post

```javascript
{
  id: 1,
  title: 'Complete Guide to 3D Modeling',
  excerpt: 'Learn the fundamentals of 3D modeling...',
  author: 'Your Name',
  date: '2025-01-15',
  readTime: '10 min read',
  category: 'Tutorials',
  image: '/images/blog/hero-image.jpg',
  slug: 'complete-guide-3d-modeling',
  mediaElements: [
    {
      id: 1,
      type: 'image',
      src: '/images/blog/software-interface.jpg',
      alt: '3D modeling software interface',
      caption: 'The main interface of modern 3D modeling software',
      className: 'w-full max-w-4xl mx-auto'
    },
    {
      id: 2,
      type: 'video',
      src: '/videos/modeling-workflow.mp4',
      poster: '/images/blog/video-poster.jpg',
      title: 'Complete Modeling Workflow',
      autoplay: false,
      className: 'w-full max-w-5xl mx-auto'
    },
    {
      id: 3,
      type: 'gallery',
      title: 'Before and After Examples',
      images: [
        {
          src: '/images/blog/before-1.jpg',
          alt: 'Wireframe model'
        },
        {
          src: '/images/blog/after-1.jpg',
          alt: 'Rendered final model'
        },
        {
          src: '/images/blog/before-2.jpg',
          alt: 'Basic geometry'
        },
        {
          src: '/images/blog/after-2.jpg',
          alt: 'Detailed final model'
        }
      ],
      className: 'w-full'
    }
  ],
  content: `
Introduction to 3D Modeling

3D modeling is the process of creating three-dimensional representations of objects using specialized software. This comprehensive guide will walk you through everything you need to know.

[MEDIA:1]

Understanding the Interface

Modern 3D modeling software provides powerful tools and an intuitive interface. The key is understanding how to navigate and use these tools effectively.

Getting Started with Basic Shapes

Every 3D model starts with basic shapes. Here's how to transform simple geometry into complex models:

[MEDIA:2]

Advanced Techniques

Once you've mastered the basics, you can move on to more advanced techniques that will take your models to the next level.

[MEDIA:3]

Conclusion

With practice and the right techniques, anyone can create stunning 3D models. Remember to start simple and gradually work your way up to more complex projects.
`,
  tags: ['3D Modeling', 'Tutorial', 'Design'],
  relatedPosts: [2, 3, 4]
}
```

## Troubleshooting

### Media Not Showing
1. Check that the media ID exists in `mediaElements`
2. Verify the file paths are correct
3. Ensure the `[MEDIA:id]` marker is properly formatted

### Images Not Loading
1. Check file paths are relative to the `public` folder
2. Verify image files exist
3. Check file permissions

### Videos Not Playing
1. Ensure video format is supported (MP4 recommended)
2. Check file size (large files may not load)
3. Verify video file exists and is accessible

### Layout Issues
1. Check CSS classes are valid
2. Ensure responsive classes are used
3. Test on different screen sizes

## Support

For additional help or questions about the blog media system, refer to:
- The main project documentation
- Component source code in `utils/blogContentParser.js`
- Example implementations in `utils/blogData.js`

