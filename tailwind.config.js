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
        // Lusion-inspired Color Palette
        primary: '#1A2FFB',      // Vivid Accent Blue
        secondary: '#F0F1FA',    // Light Text
        accent: '#1A2FFB',       // Accent Blue (same as primary)
        tertiary: '#B8BCC8',     // Muted Text
        light: '#F0F1FA',        // Light Text
        dark: '#0A0B0F',         // Dark Background
        white: '#FFFFFF',        // Pure white
        
        // Extended palette for gradients and variations
        'lusion': {
          50: '#F0F1FA',         // Light Text
          100: '#E8EAF2',        // Light Gray
          200: '#B8BCC8',        // Muted Text
          300: '#8A8FA3',        // Medium Gray
          400: '#5C6178',        // Dark Gray
          500: '#1A2FFB',        // Accent Blue
          600: '#1426D1',        // Darker Blue
          700: '#0F1FA7',        // Darkest Blue
          800: '#0A0B0F',        // Dark Background
          900: '#05060A',        // Darker Background
        },
        
        // Keep existing gray scale for compatibility
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
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
