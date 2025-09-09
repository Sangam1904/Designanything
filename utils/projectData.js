// Portfolio Project Data Management System
// This file contains all project data in an organized, scalable structure

// Project categories for filtering
export const PROJECT_CATEGORIES = [
  'Mechanical Design',
  'Industrial Design', 
  'Product Design',
  'Automotive Design',
  'Aerospace Design',
]

// Software tools used
export const SOFTWARE_TOOLS = [
  'SOLIDWORKS',
  'CATIA',
  'Fusion 360',
  'Blender',
  'ANSYS',
  'AutoCAD',
]

// Project data structure - each project has its own folder
export const PROJECTS_DATA = {
  // Arc Reactor Project
  'arc-reactor': {
    id: 'arc-reactor',
    title: 'Arc Reactor Design',
    category: 'Mechanical Design',
    software: 'Solidworks',
    description: 'Advanced arc reactor design with detailed mechanical components and energy distribution systems.',
    shortDescription: 'Advanced energy reactor with precision engineering',
    
    // Media files - organized by type
    thumbnail: '/projects/arc-reactor/thumbnails/arc-reactor-thumbnail.png',
    heroImage: '/projects/arc-reactor/images/arc-reactor-hero.png',
    gallery: [
      '/projects/arc-reactor/images/arc-reactor-1.png',
      '/projects/arc-reactor/images/arc-reactor-2.png',
      '/projects/arc-reactor/images/arc-reactor-3.png',
      '/projects/arc-reactor/images/arc-reactor-4.png'
    ],
    models: [
      {
        name: 'Main Assembly',
        url: '/projects/arc-reactor/models/arc-reactor-main.glb',
        type: 'glb'
      },
      {
        name: 'Core Component',
        url: '/projects/arc-reactor/models/arc-reactor-core.glb', 
        type: 'glb'
      }
    ],
    videos: [
      {
        name: 'Assembly Animation',
        url: '/projects/arc-reactor/videos/arc-reactor-assembly.mp4',
        type: 'mp4'
      },
      {
        name: 'Exploded View',
        url: '/projects/arc-reactor/videos/arc-reactor-exploded.mp4',
        type: 'mp4'
      }
    ],
    
    // Project metadata
    tags: ['Energy Systems', 'Precision Engineering', 'Assembly Design', 'Mechanical'],
    featured: true,
    year: 2024,
    status: 'Completed',
    client: 'Internal Project',
    
    // Technical specifications
    specifications: {
      complexity: 'High',
      parts: '200+ components',
      analysis: 'Structural & Thermal',
      manufacturing: 'Production Ready',
      materials: ['Titanium Alloy', 'Stainless Steel', 'Ceramic Insulators'],
      dimensions: '300mm x 300mm x 150mm'
    },
    
    // Detailed information
    technicalDetails: [
      'Complete assembly modeling with 200+ precision components',
      'Advanced structural analysis for high-stress applications',
      'Thermal analysis for optimal heat distribution',
      'Manufacturing-ready design with detailed technical drawings',
      'Modular design for easy maintenance and upgrades'
    ],
    
    // Project timeline
    timeline: {
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      duration: '5.5 months'
    },
    
    // Skills demonstrated
    skills: ['3D Modeling', 'Assembly Design', 'FEA Analysis', 'Technical Drawing', 'Manufacturing Design']
  },

  // Solar Plant Project
  'solar-plant': {
    id: 'solar-plant',
    title: 'Solar Floating Plant',
    category: 'Industrial Design',
    software: 'CATIA',
    description: 'Innovative solar panel floating system design with structural analysis and optimization for renewable energy applications.',
    shortDescription: 'Floating solar energy system with structural optimization',
    
    thumbnail: '/projects/solar-plant/thumbnails/solar-plant-thumbnail.png',
    heroImage: '/projects/solar-plant/images/solar-plant-hero.png',
    gallery: [
      '/projects/solar-plant/images/solar-plant-1.png',
      '/projects/solar-plant/images/solar-plant-2.png',
      '/projects/solar-plant/images/solar-plant-3.png'
    ],
    models: [
      {
        name: 'Main Structure',
        url: '/projects/solar-plant/models/solar-plant-main.glb',
        type: 'glb'
      }
    ],
    videos: [
      {
        name: 'Installation Process',
        url: '/projects/solar-plant/videos/solar-plant-installation.mp4',
        type: 'mp4'
      }
    ],
    
    tags: ['Renewable Energy', 'Structural Design', 'Floating Systems', 'Industrial'],
    featured: true,
    year: 2024,
    status: 'Completed',
    client: 'Green Energy Solutions',
    
    specifications: {
      complexity: 'Medium-High',
      parts: '50+ components',
      analysis: 'Structural & Hydrodynamic',
      manufacturing: 'Production Ready',
      materials: ['Aluminum Frame', 'Fiberglass Float', 'Steel Cables'],
      dimensions: '10m x 10m x 2m'
    },
    
    technicalDetails: [
      'Floating platform design for water-based solar installation',
      'Structural analysis for wind and wave loads',
      'Modular design for scalable energy production',
      'Corrosion-resistant materials for marine environment',
      'Easy installation and maintenance procedures'
    ],
    
    timeline: {
      startDate: '2024-02-01',
      endDate: '2024-05-15',
      duration: '3.5 months'
    },
    
    skills: ['Structural Analysis', 'Marine Engineering', 'Renewable Energy', 'Modular Design', 'CAD Modeling']
  },

  // Hydrogen Bike Project
  'hydrogen-bike': {
    id: 'hydrogen-bike',
    title: 'Hydrogen-Powered Bicycle',
    category: 'Product Design',
    software: 'Blender',
    description: 'Revolutionary hydrogen fuel cell bicycle design with integrated energy storage and distribution system.',
    shortDescription: 'Next-generation hydrogen fuel cell bicycle',
    
    thumbnail: '/projects/hydrogen-bike/thumbnails/hydrogen-bike-thumbnail.jpg',
    heroImage: '/projects/hydrogen-bike/images/hydrogen-bike-hero.jpg',
    gallery: [
      '/projects/hydrogen-bike/images/hydrogen-bike-1.jpg',
      '/projects/hydrogen-bike/images/hydrogen-bike-2.jpg',
      '/projects/hydrogen-bike/images/hydrogen-bike-3.jpg'
    ],
    models: [
      {
        name: 'Complete Bike',
        url: '/projects/hydrogen-bike/models/hydrogen-bike-complete.glb',
        type: 'glb'
      },
      {
        name: 'Fuel Cell System',
        url: '/projects/hydrogen-bike/models/hydrogen-bike-fuel-cell.glb',
        type: 'glb'
      }
    ],
    videos: [
      {
        name: 'Design Overview',
        url: '/projects/hydrogen-bike/videos/hydrogen-bike-overview.mp4',
        type: 'mp4'
      }
    ],
    
    tags: ['Sustainable Transport', 'Fuel Cell Technology', 'Bicycle Design', 'Green Energy'],
    featured: true,
    year: 2024,
    status: 'In Development',
    client: 'EcoTransport Inc.',
    
    specifications: {
      complexity: 'High',
      parts: '150+ components',
      analysis: 'Structural & Thermal',
      manufacturing: 'Prototype',
      materials: ['Carbon Fiber', 'Aluminum Alloy', 'Stainless Steel'],
      dimensions: '1800mm x 600mm x 1000mm'
    },
    
    technicalDetails: [
      'Integrated hydrogen fuel cell system design',
      'Lightweight carbon fiber frame construction',
      'Advanced thermal management for fuel cells',
      'Ergonomic design for optimal rider comfort',
      'Modular battery and fuel cell integration'
    ],
    
    timeline: {
      startDate: '2024-03-01',
      endDate: '2024-08-31',
      duration: '6 months'
    },
    
    skills: ['Product Design', 'Fuel Cell Technology', 'Carbon Fiber Design', 'Ergonomics', 'Thermal Management']
  }, 
  
  // Car Surfacing Project
  'drone-design': {
    id: 'drone-design',
    title: 'Drone Design',
    category: 'Automotive Design',
    software: 'Fusion 360',
    description: 'Premium drone design with advanced aerodynamics and aesthetic optimization.',
    shortDescription: 'Luxury car body with advanced aerodynamics',
    
    thumbnail: '/projects/drone-design/thumbnails/drone-design-thumbnail.png',
    heroImage: '/projects/drone-design/images/drone-design-hero.png',
    gallery: [
      '/projects/drone-design/images/drone-design-1.png',
      '/projects/drone-design/images/drone-design-2.png',
      '/projects/drone-design/images/drone-design-3.png'
    ],
    models: [
      {
        name: 'Drone',
        url: '/projects/drone-design/models/drone-design-body.glb',
        type: 'glb'
      }
    ],
    videos: [
      {
        name: 'Design Process',
        url: '/projects/drone-design/videos/drone-design-process.mp4',
        type: 'mp4'
      }
    ],
    
    tags: ['Drone', 'Aerodynamics', 'Design'],
    featured: true,
    year: 2024,
    status: 'Completed',
    client: 'Drone Company',
    
    specifications: {
      complexity: 'Very High',
      parts: '25+ surface panels',
      analysis: 'Aerodynamic & Static',
      manufacturing: 'Production Ready',
      materials: ['Aluminum Body', 'Carbon Fiber Accents'],
      dimensions: '4800mm x 1900mm x 1400mm'
    },
    
    technicalDetails: [
      'Advanced surface modeling for luxury aesthetics',
      'Computational fluid dynamics for aerodynamics',
      'Manufacturing feasibility analysis',
      'Class-A surface quality standards',
      'Integration with existing vehicle platform'
    ],
    
    timeline: {
      startDate: '2023-06-01',
      endDate: '2023-12-15',
      duration: '6.5 months'
    },
    
    skills: ['Surface Modeling', 'Automotive Design', 'Aerodynamics', 'Static Analysis', 'CFD Analysis']
  },

  // Car Surfacing Project
  'car-surfacing': {
    id: 'car-surfacing',
    title: 'Luxury Car Body Design',
    category: 'Automotive Design',
    software: 'CATIA',
    description: 'Premium automotive body surfacing design with advanced aerodynamics and aesthetic optimization.',
    shortDescription: 'Luxury car body with advanced aerodynamics',
    
    thumbnail: '/projects/car-surfacing/thumbnails/car-surfacing-thumbnail.jpg',
    heroImage: '/projects/car-surfacing/images/car-surfacing-hero.jpg',
    gallery: [
      '/projects/car-surfacing/images/car-surfacing-1.jpg',
      '/projects/car-surfacing/images/car-surfacing-2.jpg',
      '/projects/car-surfacing/images/car-surfacing-3.jpg'
    ],
    models: [
      {
        name: 'Body Shell',
        url: '/projects/car-surfacing/models/car-surfacing-body.glb',
        type: 'glb'
      }
    ],
    videos: [
      {
        name: 'Design Process',
        url: '/projects/car-surfacing/videos/car-surfacing-process.mp4',
        type: 'mp4'
      }
    ],
    
    tags: ['Automotive', 'Surface Design', 'Aerodynamics', 'Luxury Design'],
    featured: false,
    year: 2023,
    status: 'Completed',
    client: 'Luxury Motors',
    
    specifications: {
      complexity: 'Very High',
      parts: '25+ surface panels',
      analysis: 'Aerodynamic & Aesthetic',
      manufacturing: 'Production Ready',
      materials: ['Aluminum Body', 'Carbon Fiber Accents'],
      dimensions: '4800mm x 1900mm x 1400mm'
    },
    
    technicalDetails: [
      'Advanced surface modeling for luxury aesthetics',
      'Computational fluid dynamics for aerodynamics',
      'Manufacturing feasibility analysis',
      'Class-A surface quality standards',
      'Integration with existing vehicle platform'
    ],
    
    timeline: {
      startDate: '2023-06-01',
      endDate: '2023-12-15',
      duration: '6.5 months'
    },
    
    skills: ['Surface Modeling', 'Automotive Design', 'Aerodynamics', 'Class-A Surfaces', 'CFD Analysis']
  }
}

// Helper functions for project management
export const getProjectById = (id) => {
  return PROJECTS_DATA[id] || null
}

export const getFeaturedProjects = () => {
  return Object.values(PROJECTS_DATA).filter(project => project.featured)
}

export const getProjectsByCategory = (category) => {
  return Object.values(PROJECTS_DATA).filter(project => project.category === category)
}

export const getProjectsBySoftware = (software) => {
  return Object.values(PROJECTS_DATA).filter(project => project.software === software)
}

export const getAllProjects = () => {
  return Object.values(PROJECTS_DATA)
}

export const searchProjects = (query) => {
  const searchTerm = query.toLowerCase()
  return Object.values(PROJECTS_DATA).filter(project => 
    project.title.toLowerCase().includes(searchTerm) ||
    project.description.toLowerCase().includes(searchTerm) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    project.category.toLowerCase().includes(searchTerm)
  )
}

// Get all unique categories
export const getAllCategories = () => {
  const categories = [...new Set(Object.values(PROJECTS_DATA).map(project => project.category))]
  return ['all', ...categories]
}

// Get all unique software tools
export const getAllSoftware = () => {
  const software = [...new Set(Object.values(PROJECTS_DATA).map(project => project.software))]
  return ['all', ...software]
}

// Get project statistics
export const getProjectStats = () => {
  const projects = Object.values(PROJECTS_DATA)
  return {
    total: projects.length,
    featured: projects.filter(p => p.featured).length,
    completed: projects.filter(p => p.status === 'Completed').length,
    inDevelopment: projects.filter(p => p.status === 'In Development').length,
    categories: getAllCategories().length,
    software: getAllSoftware().length
  }
}
