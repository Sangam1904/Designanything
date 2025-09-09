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
