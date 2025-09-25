// Portfolio Project Data Management System
// This file contains all project data in an organized, scalable structure

// Project categories for filtering
export const PROJECT_CATEGORIES = [
  'Mechanical Design',
  'Industrial Design', 
  'Product Design',
  'Automotive Design',

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
        name: 'Arc Reactor Model',
        url: '/models/arc-reactor-im.glb',
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

// Headphone Stand Project
'headphone-stand': {
  id: 'headphone-stand',
  title: 'Ergonomic Headphone Stand',
  category: 'Product Design',
  software: 'SolidWorks, Ansys',
  description: 'A sleek and ergonomic headphone stand designed using SolidWorks with structural optimization performed in Ansys to ensure durability, stability, and material efficiency.',
  shortDescription: 'Ergonomic headphone stand with design optimization in Ansys',
  
  thumbnail: '/projects/headphone-stand/thumbnails/headphone-stand-thumbnail.jpg',
  heroImage: '/projects/headphone-stand/images/headphone-stand-hero.jpg',
  gallery: [
    '/projects/headphone-stand/images/headphone-stand-1.jpg',
    '/projects/headphone-stand/images/headphone-stand-2.jpg',
    '/projects/headphone-stand/images/headphone-stand-3.jpg',
    '/projects/headphone-stand/images/headphone-stand-4.jpg'
    

  ],
    models: [
      {
        name: 'Headphone Stand Model',
        url: '/projects/headphone-stand/models/headphone-stand.glb',
        type: 'glb'
      }
    ],
  videos: [
    {
      name: 'Design & Optimization Process',
      url: '/projects/headphone-stand/videos/headphone-stand-process.mp4',
      type: 'mp4'
    }
  ],
  
  tags: ['Product Design', 'Ergonomics', 'Structural Optimization', 'Consumer Electronics'],
  featured: true,
  year: 2025,
  status: 'Completed',
  client: 'In-house Concept',
  
  specifications: {
    complexity: 'Medium',
    parts: 'Single main body with base support',
    analysis: 'Structural & Load Optimization',
    manufacturing: 'Prototype Ready',
    materials: ['ABS Plastic', 'Aluminum Alloy'],
    dimensions: '220mm x 120mm x 280mm'
  },
  
  technicalDetails: [
    'Designed for stable support of over-ear and on-ear headphones',
    'Structural optimization in Ansys for material reduction while maintaining strength',
    'Curved ergonomic profile for cable management',
    'Lightweight yet durable design for desktop use',
    'Minimalist form factor enhancing workspace aesthetics'
  ],
  
  timeline: {
    startDate: '2025-07-01',
    endDate: '2025-07-25',
    duration: '3.5 weeks'
  },
  
  skills: ['CAD Modeling', 'Structural Optimization', 'Product Ergonomics', 'Finite Element Analysis (FEA)', 'Design for Manufacturing']
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
        name: 'Hydrogen Bike Model',
        url: '/models/hydrogen-bike.glb',
        type: 'glb'
      },
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
        name: 'Drone Model',
        url: '/models/drone.glb',
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
        name: 'Car Surfacing Model',
        url: '/models/car-surfacing.glb',
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
  },
  // Mini Evaporative Cooler Project
   'mini-evap-cooler': {
    id: 'mini-evap-cooler',
    title: 'Mini Evaporative Cooler',
    category: 'Consumer Product Design',
    software: 'SolidWorks, Blender',
    description: 'Compact evaporative cooler designed for efficient personal cooling with ergonomic controls and modular housing.',
    shortDescription: 'Portable cooling device with modern design and efficient airflow.',
    
    // Media files - organized by type
    thumbnail: '/projects/mini-evap-cooler/thumbnails/cooler-thumbnail.png',
    heroImage: '/projects/mini-evap-cooler/images/cooler-hero.png',
    gallery: [
      '/projects/mini-evap-cooler/images/Cooler-1.png',
      '/projects/mini-evap-cooler/images/Cooler-2.png',
      '/projects/mini-evap-cooler/images/Cooler-3.png',
      '/projects/mini-evap-cooler/images/Cooler-4.png',
      '/projects/mini-evap-cooler/images/Cooler-5.png',
      '/projects/mini-evap-cooler/images/Cooler-6.png',
      ],
      models: [
      {
        name: 'Mini Cooler Model',
        url: 'projects/mini-evap-cooler/models/mini-evap-cooler.glb',
        type: 'glb'
      }
    ],
    videos: [
      {
        name: 'Product Visualization',
        url: '/projects/mini-evap-cooler/videos/mini-cooler-showcase.mp4',
        type: 'mp4'
      }
    ],
    
    // Project metadata
    tags: ['Consumer Electronics', 'Cooling System', 'Product Design', 'Portable Device'],
    featured: false,
    year: 2025,
    status: 'Concept Completed',
    client: 'Internal Project',
    
    // Technical specifications
    specifications: {
      complexity: 'Medium',
      parts: '15+ components',
      analysis: 'Airflow Optimization',
      manufacturing: 'Prototype Ready',
      materials: ['ABS Plastic', 'Aluminum Fan Blades (Concept)'],
      dimensions: '280mm x 120mm x 150mm'
    },
    
    // Detailed information
    technicalDetails: [
      'Compact housing with integrated water storage base',
      'Axial fan designed for balanced airflow and efficiency',
      'Front louvered grill for optimized air distribution',
      'Ergonomic angled control panel with rotary knobs',
      'Designed for portability and desktop/bedside use'
    ],
    
    // Project timeline
    timeline: {
      startDate: '2025-08-01',
      endDate: '2025-08-04',
      duration: '3 days'
    },
    
    // Skills demonstrated
    skills: ['3D CAD Modeling', 'Product Visualization', 'Design for Assembly', 'Rendering', 'Concept Development']
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
