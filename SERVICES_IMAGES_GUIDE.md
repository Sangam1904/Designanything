# Services Images Management Guide

This guide explains how to add and manage images for the services section of your website.

## Overview

The services section displays background images for each service card. These images are defined in the `pages/services.js` file and should be placed in the `public/images/services/` directory.

## Current Services Structure

Your website currently has the following services:
1. **CAD Modeling** - `cad-modeling-bg.png`
2. **3D Design** - `3d-design-bg.jpg` (needs to be created)
3. **Product Animation** - `product-animation-bg.jpg` (needs to be created)
4. **Rendering** - `rendering-bg.jpg` (needs to be created)
5. **Simulation** - `simulation-bg.jpg` (needs to be created)
6. **Technical Documentation** - `technical-docs-bg.jpg` (needs to be created)

## Adding Images to Services

### Step 1: Prepare Your Images

**Image Requirements:**
- **Format**: PNG or JPG
- **Size**: Recommended 1920x1080px (16:9 aspect ratio)
- **File Size**: Under 500KB for optimal loading
- **Quality**: High resolution, professional appearance
- **Style**: Should match your brand aesthetic

### Step 2: File Naming Convention

Use the following naming pattern:
```
{service-id}-bg.{extension}
```

**Examples:**
- `cad-modeling-bg.png`
- `3d-design-bg.jpg`
- `product-animation-bg.png`
- `rendering-bg.jpg`
- `simulation-bg.png`
- `technical-docs-bg.jpg`

### Step 3: Place Images in Correct Directory

All service images should be placed in:
```
public/images/services/
```

**Directory Structure:**
```
public/
└── images/
    └── services/
        ├── cad-modeling-bg.png
        ├── 3d-design-bg.jpg
        ├── product-animation-bg.jpg
        ├── rendering-bg.jpg
        ├── simulation-bg.jpg
        └── technical-docs-bg.jpg
```

### Step 4: Update Services Configuration

In `pages/services.js`, update the `backgroundImage` property for each service:

```javascript
const services = [
  {
    id: 'cad-modeling',
    icon: Box,
    title: 'CAD Modeling',
    description: 'Professional 3D modeling using industry-standard software...',
    backgroundImage: '/images/services/cad-modeling-bg.png', // ✅ Correct path
    features: [...],
    software: [...],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: '3d-design',
    icon: Zap,
    title: '3D Design',
    description: 'Creative 3D design solutions...',
    backgroundImage: '/images/services/3d-design-bg.jpg', // ✅ Correct path
    features: [...],
    software: [...],
    color: 'from-purple-500 to-pink-500'
  },
  // ... other services
]
```

## Image Path Rules

### ✅ Correct Paths
```javascript
backgroundImage: '/images/services/cad-modeling-bg.png'
backgroundImage: '/images/services/3d-design-bg.jpg'
```

### ❌ Incorrect Paths
```javascript
backgroundImage: 'public/images/services/cad-modeling-bg.png'  // Don't include 'public'
backgroundImage: 'images/services/cad-modeling-bg.png'        // Missing leading slash
backgroundImage: './images/services/cad-modeling-bg.png'      // Don't use relative paths
```

## Adding New Services

### Step 1: Add Service Configuration

In `pages/services.js`, add a new service object:

```javascript
{
  id: 'new-service',
  icon: YourIcon, // Import from lucide-react
  title: 'New Service',
  description: 'Description of your new service...',
  backgroundImage: '/images/services/new-service-bg.jpg',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  software: ['Software 1', 'Software 2'],
  color: 'from-green-500 to-teal-500' // Choose appropriate gradient
}
```

### Step 2: Create Background Image

1. Create a professional background image
2. Name it `new-service-bg.jpg` (or `.png`)
3. Place it in `public/images/services/`
4. Ensure it follows the image requirements above

### Step 3: Update Footer Links (Optional)

If you want the new service to appear in the footer, update `components/Footer.js`:

```javascript
const footerLinks = {
  services: [
    { name: 'CAD Modeling', href: '/services/cad-modeling' },
    { name: '3D Design', href: '/services/3d-design' },
    { name: 'Product Animation', href: '/services/product-animation' },
    { name: 'Rendering', href: '/services/rendering' },
    { name: 'New Service', href: '/services/new-service' }, // Add here
  ],
  // ... other sections
}
```

## Image Optimization Tips

### 1. Compression
- Use tools like TinyPNG or ImageOptim to compress images
- Aim for 80-90% quality to balance size and appearance

### 2. Format Selection
- **PNG**: Use for images with transparency or sharp edges
- **JPG**: Use for photographs or images with many colors

### 3. Responsive Considerations
- Images will be displayed as background images with `object-cover`
- Ensure important content is centered and visible at different aspect ratios

### 4. Loading Performance
- Keep file sizes under 500KB
- Consider using WebP format for better compression (with JPG fallback)

## Troubleshooting

### Image Not Showing
1. **Check file path**: Ensure the path starts with `/images/services/`
2. **Verify file exists**: Check that the file is in `public/images/services/`
3. **Check file name**: Ensure exact spelling and case sensitivity
4. **Clear browser cache**: Hard refresh (Ctrl+F5) to see changes

### Image Quality Issues
1. **Resolution**: Use high-resolution images (1920x1080px minimum)
2. **Compression**: Don't over-compress images
3. **Format**: Use appropriate format (PNG for graphics, JPG for photos)

### Performance Issues
1. **File size**: Compress images to under 500KB
2. **Format**: Consider WebP for better compression
3. **Lazy loading**: Images are loaded as needed by the browser

## Example: Complete Service Setup

Here's a complete example of adding a new service:

### 1. Service Configuration
```javascript
{
  id: 'industrial-design',
  icon: Settings,
  title: 'Industrial Design',
  description: 'Comprehensive industrial design solutions for manufacturing and production.',
  backgroundImage: '/images/services/industrial-design-bg.jpg',
  features: [
    'Product concept development',
    'Manufacturing optimization',
    'Material selection',
    'Cost analysis',
    'Prototype development',
    'Quality assurance'
  ],
  software: ['SOLIDWORKS', 'CATIA', 'Fusion 360'],
  color: 'from-orange-500 to-red-500'
}
```

### 2. File Structure
```
public/
└── images/
    └── services/
        └── industrial-design-bg.jpg  (1920x1080px, <500KB)
```

### 3. Result
The service will appear on the services page with:
- Professional background image
- Gradient overlay matching the color scheme
- Hover effects and animations
- Responsive design across all devices

## Best Practices

1. **Consistency**: Use similar styling and quality across all service images
2. **Brand Alignment**: Ensure images match your brand colors and aesthetic
3. **Professional Quality**: Use high-quality, professional images
4. **Regular Updates**: Keep images current and relevant
5. **Testing**: Test on different devices and screen sizes
6. **Backup**: Keep original high-resolution versions of all images

## Support

For additional help with service images:
- Check the main project documentation
- Review the `pages/services.js` file for examples
- Test changes in a development environment first
- Use browser developer tools to debug image loading issues

Remember: All image paths in the `backgroundImage` property should start with `/images/services/` and the actual files should be placed in the `public/images/services/` directory.
