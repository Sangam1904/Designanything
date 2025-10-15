// Personal Profile Data
// This file contains personal information for the website

export const teamMembers = [
  {
    id: 'sangmeshwar-kanade',
    name: 'Sangmeshwar Kanade',
    role: 'Founder & Lead Designer',
    position: 'CEO',
    image: '/images/team/sangam.jpg',
    professionalEducation: 'B.E. Mechanical Engineering',
    university: 'DBATU University',
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