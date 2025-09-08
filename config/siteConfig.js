// Site Configuration
// This file contains all the configuration settings for the website

export const siteConfig = {
  theme: {
    light: {
      backgroundColor: "#FFFFFF",
      fontColor: "#181818",
      cardBackground: "#F7F9FB",
      headingColor: "#062842"
    },
    dark: {
      backgroundColor: "#181818",
      fontColor: "#FFFFFF",
      cardBackground: "#242B38",
      headingColor: "#2492db"
    }
  },
  layout: {
    downloadsSection: {
      visible: false
    },
    homePage: {
      heroVideo: {
        increaseSize: true,
        responsive: true,
        aspectRatio: "maintain"
      }
    },
    aboutPage: {
      readyToWorkTogetherSection: {
        visible: false
      },
      meetOurTeamSection: {
        profiles: [
          {
            name: "Sangmeshwar Kanade",
            title: "Founder & Lead Designer",
            description: "Expert in SOLIDWORKS, CATIA, and Blender with over 5 years of experience in mechanical design and product development.",
            certifications: [
              "SOLIDWORKS Expert",
              "CATIA Certified"
            ]
          },
          {
            name: "Abhishek Raut",
            title: "3D Artist & Animator",
            description: "Specialized in product visualization, rendering, and animation with expertise in Blender and advanced lighting techniques.",
            certifications: [
              "Blender Expert",
              "Animation"
            ]
          },
          {
            name: "Shubham Kore",
            title: "Simulation Engineer",
            description: "ANSYS specialist with deep knowledge in structural analysis, thermal analysis, and optimization for complex engineering problems.",
            certifications: [
              "ANSYS Expert",
              "FEA"
            ]
          },
          {
            name: "Abhi Jagtap",
            title: "Founder & Lead Designer",
            description: "Expert in SOLIDWORKS, CATIA, and Blender with over 5 years of experience in mechanical design and product development.",
            certifications: [
              "SOLIDWORKS Expert",
              "CATIA Certified"
            ]
          }
        ],
        layout: "horizontal_sequence"
      }
    }
  },
  typography: {
    headingFontFamily: "inherit",
    bodyFontFamily: "inherit",
    headingWeight: 700,
    bodyWeight: 400,
    headingSize: "2rem",
    bodySize: "1rem"
  },
  sections: {
    missionAndVision: {
      background: "transparent",
      alignment: "side_by_side",
      spacing: "regular"
    },
    values: {
      alignment: "center",
      icons: "enabled",
      background: "card"
    }
  }
}

// Helper functions to get configuration values
export const getThemeConfig = (isDark = false) => {
  return isDark ? siteConfig.theme.dark : siteConfig.theme.light
}

export const getLayoutConfig = (section) => {
  return siteConfig.layout[section] || {}
}

export const getTypographyConfig = () => {
  return siteConfig.typography
}

export const getSectionConfig = (section) => {
  return siteConfig.sections[section] || {}
}

// CSS Custom Properties generator
export const generateCSSVariables = (isDark = false) => {
  const theme = getThemeConfig(isDark)
  return {
    '--bg-color': theme.backgroundColor,
    '--font-color': theme.fontColor,
    '--card-bg': theme.cardBackground,
    '--heading-color': theme.headingColor,
    '--heading-size': siteConfig.typography.headingSize,
    '--body-size': siteConfig.typography.bodySize,
    '--heading-weight': siteConfig.typography.headingWeight,
    '--body-weight': siteConfig.typography.bodyWeight,
  }
}
