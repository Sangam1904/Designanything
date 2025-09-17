// Site Configuration
// This file contains all the configuration settings for the website

export const siteConfig = {
  theme: {
    light: {
      backgroundColor: "#D3D9D4",  // Light gray background
      fontColor: "#212A31",        // Dark blue-gray text
      cardBackground: "#FFFFFF",   // White cards
      headingColor: "#124E66",     // Teal headings
      accentColor: "#124E66",      // Teal accent
      mutedColor: "#748D92"        // Muted blue-gray
    },
    dark: {
      backgroundColor: "#212A31",  // Dark blue-gray background
      fontColor: "#D3D9D4",        // Light gray text
      cardBackground: "#2E3944",   // Dark secondary cards
      headingColor: "#124E66",     // Teal headings
      accentColor: "#124E66",      // Teal accent
      mutedColor: "#748D92"        // Muted blue-gray
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
        visible: true
      }
    },
    teamPage: {
      individualProfiles: {
        enabled: true
      },
      teamOverview: {
        enabled: true
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
