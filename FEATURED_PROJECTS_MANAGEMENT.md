# Featured Projects Management Guide

This guide explains how to add, remove, and manage projects in the Featured Projects section of your portfolio website.

## Overview

The Featured Projects section displays up to 4 projects on the homepage. Projects are managed through the `utils/projectData.js` file, and the featured status is controlled by the `featured: true/false` property.

## Current Featured Projects

Currently, the following 4 projects are featured:
1. **Arc Reactor Design** - Mechanical Design
2. **Solar Floating Plant** - Industrial Design  
3. **Hydrogen-Powered Bicycle** - Product Design
4. **Drone Design** - Automotive Design

## How to Add a Project to Featured Section

### Step 1: Ensure Project Exists
Make sure your project is already defined in `utils/projectData.js`. If not, add it first following the project structure.

### Step 2: Set Featured Status
In `utils/projectData.js`, find your project and change:
```javascript
featured: false,  // Change this to true
```

To:
```javascript
featured: true,   // This will make it appear in featured section
```

### Step 3: Verify Project Structure
Ensure your project has all required fields:
- `id`: Unique identifier
- `title`: Project name
- `category`: One of the predefined categories
- `description`: Brief description
- `thumbnail`: Path to thumbnail image
- `heroImage`: Path to hero image
- `gallery`: Array of gallery images
- `tags`: Array of relevant tags
- `year`: Project year
- `featured`: true/false

## How to Remove a Project from Featured Section

### Step 1: Find the Project
Locate your project in `utils/projectData.js`.

### Step 2: Change Featured Status
Change the featured property to false:
```javascript
featured: false,  // This removes it from featured section
```

## How to Replace a Featured Project

### Option 1: Direct Replacement
1. Set the current featured project to `featured: false`
2. Set the new project to `featured: true`

### Option 2: Swap Projects
1. Temporarily set both projects to `featured: false`
2. Set the new project to `featured: true`
3. This ensures only 4 projects are featured at once

## Project Categories

Available categories for projects:
- Mechanical Design
- Industrial Design
- Product Design
- Automotive Design
- Aerospace Design

## Software Tools

Supported software tools:
- SOLIDWORKS
- CATIA
- Fusion 360
- Blender
- ANSYS
- AutoCAD

## File Structure for Project Assets

Each project should have its assets organized in the following structure:
```
public/projects/[project-id]/
├── images/
│   ├── [project-id]-hero.png
│   ├── [project-id]-1.png
│   ├── [project-id]-2.png
│   └── [project-id]-3.png
├── thumbnails/
│   └── [project-id]-thumbnail.png
├── models/
│   └── [project-id]-main.glb
└── videos/
    └── [project-id]-overview.mp4
```

## Example: Adding a New Featured Project

Here's a complete example of adding a new project to the featured section:

```javascript
// In utils/projectData.js, add this project object:
'new-project': {
  id: 'new-project',
  title: 'New Project Name',
  category: 'Mechanical Design',
  software: 'SOLIDWORKS',
  description: 'Brief description of the project.',
  shortDescription: 'Short description for cards',
  
  thumbnail: '/projects/new-project/thumbnails/new-project-thumbnail.png',
  heroImage: '/projects/new-project/images/new-project-hero.png',
  gallery: [
    '/projects/new-project/images/new-project-1.png',
    '/projects/new-project/images/new-project-2.png',
    '/projects/new-project/images/new-project-3.png'
  ],
  models: [
    {
      name: 'Main Model',
      url: '/projects/new-project/models/new-project-main.glb',
      type: 'glb'
    }
  ],
  videos: [
    {
      name: 'Project Overview',
      url: '/projects/new-project/videos/new-project-overview.mp4',
      type: 'mp4'
    }
  ],
  
  tags: ['Tag1', 'Tag2', 'Tag3'],
  featured: true,  // Set to true to feature this project
  year: 2024,
  status: 'Completed',
  client: 'Client Name',
  
  specifications: {
    complexity: 'High',
    parts: '100+ components',
    analysis: 'Structural',
    manufacturing: 'Production Ready',
    materials: ['Material1', 'Material2'],
    dimensions: '100mm x 100mm x 100mm'
  },
  
  technicalDetails: [
    'Detail 1',
    'Detail 2',
    'Detail 3'
  ],
  
  timeline: {
    startDate: '2024-01-01',
    endDate: '2024-06-30',
    duration: '6 months'
  },
  
  skills: ['Skill1', 'Skill2', 'Skill3']
}
```

## Best Practices

1. **Limit Featured Projects**: Keep only 4 projects featured at a time for optimal display
2. **High-Quality Images**: Use high-resolution images for thumbnails and galleries
3. **Consistent Naming**: Use consistent naming conventions for all project assets
4. **Complete Information**: Fill in all required fields for better project presentation
5. **Regular Updates**: Periodically rotate featured projects to showcase different work

## Troubleshooting

### Project Not Appearing in Featured Section
- Check that `featured: true` is set
- Verify the project ID is unique
- Ensure all required fields are present
- Check for syntax errors in the project object

### Images Not Loading
- Verify file paths are correct
- Check that image files exist in the specified locations
- Ensure image formats are supported (PNG, JPG, WEBP)

### 3D Models Not Loading
- Verify GLB file paths are correct
- Check that model files exist
- Ensure models are properly exported as GLB format

## Helper Functions

The project data file includes several helper functions:

- `getFeaturedProjects()`: Returns all featured projects
- `getProjectById(id)`: Returns a specific project by ID
- `getProjectsByCategory(category)`: Returns projects by category
- `getAllProjects()`: Returns all projects
- `searchProjects(query)`: Search projects by title, description, or tags

## Support

If you encounter issues while managing projects, check:
1. JavaScript console for errors
2. File paths and naming conventions
3. Project data structure completeness
4. Image and model file existence

For additional help, refer to the main project documentation or contact the development team.
