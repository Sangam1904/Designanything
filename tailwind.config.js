/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // New Color Palette
        primary: '#124E66',   // Deep Teal
        secondary: '#748D92', // Muted Blue-Gray
        accent: '#124E66',    // Same as primary (teal accent)
        muted: '#748D92',     // Muted Blue-Gray
        light: '#D3D9D4',     // Light Gray
        dark: '#212A31',      // Dark Blue-Gray
        tertiary: '#2E3944',  // Dark Secondary
        white: '#FFFFFF',

        // Custom palette based on provided colors
        custom: {
          darkest: '#212A31',  // Very dark blue-gray
          dark: '#2E3944',     // Dark blue-gray
          teal: '#124E66',     // Deep teal
          muted: '#748D92',    // Muted blue-gray
          light: '#D3D9D4',    // Light gray
        },

        // Updated gray scale to complement the new palette
        gray: {
          50: '#D3D9D4',   // Light gray
          100: '#C5CDCA',  // Slightly darker light gray
          200: '#B7C1C0',  // Light blue-gray
          300: '#A9B5B6',  // Medium light blue-gray
          400: '#9BA9AC',  // Medium blue-gray
          500: '#748D92',  // Muted blue-gray (secondary)
          600: '#5A6B70',  // Darker blue-gray
          700: '#40494E',  // Dark blue-gray
          800: '#2E3944',  // Dark secondary
          900: '#212A31',  // Darkest
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      textColor: {
        DEFAULT: '#212A31', // Dark blue-gray as default text
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
