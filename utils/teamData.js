// Team Member Data
// This file contains all team member information for the website

export const teamMembers = [
  {
    id: 'sangmeshwar-kanade',
    name: 'Sangmeshwar Kanade',
    role: 'Founder & Lead Designer',
    position: 'CEO',
    image: '/images/team/sangam.jpg',
    professionalEducation: 'B.E. Mechanical Engineering',
    university: 'DBATU,unversity',
    graduationYear: '2024',
    description: 'Expert in SOLIDWORKS, CATIA, and Blender with over 2 years of experience in mechanical design and product development. I specialize in transforming complex ideas into precise, manufacturable designs.',
    detailedDescription: [
      'Expert in SOLIDWORKS, CATIA, and Blender with over 2 years of experience in mechanical design and product development. I specialize in transforming complex ideas into precise, manufacturable designs.',
      'My passion lies in creating innovative solutions that bridge the gap between concept and reality. From initial sketches to final production-ready models, I ensure every project meets the highest standards of quality and precision.',
      'I believe in the power of design to solve real-world problems and am committed to delivering exceptional results that exceed client expectations.'
    ],
    skills: [
      'SOLIDWORKS Professional',
      'CATIA Enthusiast', 
      'Blender Beginner',
      'ANSYS Simulation'
    ],
    expertise: [
      { name: 'SOLIDWORKS', level: 90 },
      { name: 'CATIA', level: 75 },
      { name: 'Blender', level: 65 },
      { name: 'ANSYS', level: 70 },
      { name: '3DEXPERIENCE', level: 55 }
    ],
    relatedImages: [
      '/images/projects/arc-reactor/images/arc-reactor-1.png',
      '/images/projects/arc-reactor/images/arc-reactor-2.png',
      '/images/projects/arc-reactor/images/arc-reactor-3.png'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sangmeshwar-kanade',
      email: 'sangmeshwar@solidcanvas.com'
    }
  },
  {
    id: 'rajesh-patel',
    name: 'Rajesh Patel',
    role: 'Senior CAD Engineer',
    position: 'CTO',
    image: '/images/team/sangam.jpg', // Placeholder - replace with actual image
    professionalEducation: 'M.Tech Mechanical Design',
    university: 'DBATU,unversity',
    graduationYear: '2024',
    description: 'Specialized in advanced CAD modeling and simulation with expertise in automotive and aerospace design. Passionate about pushing the boundaries of 3D design technology.',
    detailedDescription: [
      'Specialized in advanced CAD modeling and simulation with expertise in automotive and aerospace design. Passionate about pushing the boundaries of 3D design technology.',
      'With over 4 years of experience in the industry, I have worked on complex projects ranging from automotive components to aerospace structures.',
      'I am dedicated to continuous learning and implementing the latest design methodologies to deliver cutting-edge solutions.'
    ],
    skills: [
      'CATIA Expert',
      'SOLIDWORKS Professional',
      'ANSYS Advanced',
      'AutoCAD Specialist'
    ],
    expertise: [
      { name: 'CATIA', level: 95 },
      { name: 'SOLIDWORKS', level: 85 },
      { name: 'ANSYS', level: 90 },
      { name: 'AutoCAD', level: 80 },
      { name: 'NX', level: 70 }
    ],
    relatedImages: [
      '/images/projects/arc-reactor/images/arc-reactor-1.png',
      '/images/projects/arc-reactor/images/arc-reactor-2.png',
      '/images/projects/arc-reactor/images/arc-reactor-3.png'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/rajesh-patel',
      email: 'rajesh@solidcanvas.com'
    }
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: '3D Visualization Specialist',
    position: 'Lead Designer',
    image: '/images/team/sangam.jpg', // Placeholder - replace with actual image
    professionalEducation: 'B.Des Industrial Design',
    university: 'DBATU,unversity',
    graduationYear: '2024',
    description: 'Creative 3D artist and visualization expert with a keen eye for detail. Specializes in photorealistic rendering and product visualization that brings designs to life.',
    detailedDescription: [
      'Creative 3D artist and visualization expert with a keen eye for detail. Specializes in photorealistic rendering and product visualization that brings designs to life.',
      'I combine technical knowledge with artistic vision to create stunning visual representations of complex engineering concepts.',
      'My work helps clients visualize their products before manufacturing, reducing development time and costs significantly.'
    ],
    skills: [
      'Blender Expert',
      '3ds Max Professional',
      'Keyshot Specialist',
      'Photoshop Advanced'
    ],
    expertise: [
      { name: 'Blender', level: 95 },
      { name: '3ds Max', level: 85 },
      { name: 'Keyshot', level: 90 },
      { name: 'Photoshop', level: 80 },
      { name: 'After Effects', level: 70 }
    ],
    relatedImages: [
      '/images/projects/arc-reactor/images/arc-reactor-1.png',
      '/images/projects/arc-reactor/images/arc-reactor-2.png',
      '/images/projects/arc-reactor/images/arc-reactor-3.png'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/priya-sharma',
      email: 'priya@solidcanvas.com'
    }
  },
  {
    id: 'amit-kumar',
    name: 'Amit Kumar',
    role: 'Simulation Engineer',
    position: 'Technical Lead',
    image: '/images/team/sangam.jpg', // Placeholder - replace with actual image
    professionalEducation: 'M.E. Mechanical Engineering',
    university: 'DBATU,unversity',
    graduationYear: '2024',
    description: 'Expert in finite element analysis and computational fluid dynamics. Ensures designs meet performance requirements through rigorous simulation and testing.',
    detailedDescription: [
      'Expert in finite element analysis and computational fluid dynamics. Ensures designs meet performance requirements through rigorous simulation and testing.',
      'With extensive experience in structural analysis and fluid dynamics, I help optimize designs for maximum performance and reliability.',
      'I believe in data-driven design decisions and use advanced simulation tools to validate concepts before physical prototyping.'
    ],
    skills: [
      'ANSYS Expert',
      'CFD Specialist',
      'FEA Professional',
      'MATLAB Advanced'
    ],
    expertise: [
      { name: 'ANSYS', level: 95 },
      { name: 'CFD', level: 90 },
      { name: 'FEA', level: 95 },
      { name: 'MATLAB', level: 85 },
      { name: 'Python', level: 75 }
    ],
    relatedImages: [
      '/images/projects/arc-reactor/images/arc-reactor-1.png',
      '/images/projects/arc-reactor/images/arc-reactor-2.png',
      '/images/projects/arc-reactor/images/arc-reactor-3.png'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/amit-kumar',
      email: 'amit@solidcanvas.com'
    }
  }
]

// Helper functions
export const getTeamMember = (id) => {
  return teamMembers.find(member => member.id === id)
}

export const getTeamMembers = () => {
  return teamMembers
}

export const getTeamMemberByRole = (role) => {
  return teamMembers.find(member => member.role === role)
}

export const getTeamMembersByPosition = (position) => {
  return teamMembers.filter(member => member.position === position)
}
