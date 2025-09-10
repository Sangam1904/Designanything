# 🎨 Brand Customization Guide - DesignAnything Website

This comprehensive guide will help you change the logo, brand name, colors, and other branding elements of your DesignAnything website.

## 📋 Quick Reference

| Element | Current Value | File Location |
|---------|---------------|---------------|
| Brand Name | DesignAnything | `components/Footer.js`, `components/Hero.js` |
| Tagline | "Transform Ideas Into Reality" | `components/Hero.js` |
| Logo | `/images/logo.jpg` | `public/images/logo.jpg` |
| Contact Email | anythingcandesign@gmail.com | `components/Footer.js` |
| Phone | +91 7498441756 | `components/Footer.js` |
| Location | India | `components/Footer.js` |

---

## 🖼️ Logo Changes

### Step 1: Prepare Your Logo Files

Create these logo files in the specified formats:

```
public/images/
├── logo.svg          # Main logo (SVG format - scalable)
├── logo.jpg          # Footer logo (JPG format - 100x100px)
└── icons/
    └── logo.svg      # Icon version (SVG format - 50x50px)
```

### Step 2: Logo Specifications

#### Main Logo (`logo.svg`)
- **Format**: SVG (preferred) or PNG
- **Size**: 200x60px (recommended)
- **Background**: Transparent
- **Usage**: Navigation bar, hero section

#### Footer Logo (`logo.jpg`)
- **Format**: JPG or PNG
- **Size**: 100x100px (square)
- **Background**: Transparent or white
- **Usage**: Footer section

#### Icon Logo (`icons/logo.svg`)
- **Format**: SVG
- **Size**: 50x50px (square)
- **Background**: Transparent
- **Usage**: Favicon, mobile menu

### Step 3: Replace Logo Files

1. **Backup existing logos**:
   ```bash
   cp public/images/logo.svg public/images/logo-backup.svg
   cp public/images/logo.jpg public/images/logo-backup.jpg
   ```

2. **Replace with your logos**:
   ```bash
   # Copy your new logo files
   cp your-new-logo.svg public/images/logo.svg
   cp your-new-logo.jpg public/images/logo.jpg
   cp your-new-icon.svg public/images/icons/logo.svg
   ```

---

## 🏷️ Brand Name Changes

### Step 1: Update Footer Brand Name

**File**: `components/Footer.js`

```javascript
// Find this section (around line 15)
<div className="flex items-center space-x-2 mb-4">
  <img 
    src="/images/logo.jpg" 
    alt="DesignAnything Logo" 
    className="w-10 h-10"
  />
  <span className="font-playfair text-xl font-bold text-light">YourNewBrandName</span>
</div>

// Update the alt text as well
<img 
  src="/images/logo.jpg" 
  alt="YourNewBrandName Logo" 
  className="w-10 h-10"
/>
```

### Step 2: Update Hero Section Tagline

**File**: `components/Hero.js`

```javascript
// Find this section (around line 25)
<SplitText
  text="Transform Ideas Into Reality"
  tag="span"
  className="text-light"
  // ... rest of props
/>

// Change to:
<SplitText
  text="Your New Tagline"
  tag="span"
  className="text-light"
  // ... rest of props
/>
```

### Step 3: Update Page Titles and Meta Tags

**File**: `pages/_app.js`

```javascript
// Find the Head section
<Head>
  <title>DesignAnything - Professional Engineering Design</title>
  <meta name="description" content="Transform ideas into reality through expert engineering design..." />
  <meta property="og:title" content="DesignAnything" />
  <meta property="og:description" content="Transform ideas into reality..." />
</Head>

// Update to:
<Head>
  <title>YourNewBrandName - Professional Engineering Design</title>
  <meta name="description" content="Your new website description..." />
  <meta property="og:title" content="YourNewBrandName" />
  <meta property="og:description" content="Your new website description..." />
</Head>
```

### Step 4: Update Site Configuration

**File**: `config/siteConfig.js` (if exists)

```javascript
export const siteConfig = {
  name: 'YourNewBrandName',
  description: 'Your new website description',
  url: 'https://yourwebsite.com',
  // ... rest of config
}
```

---

## 📞 Contact Information Changes

### Update Footer Contact Details

**File**: `components/Footer.js`

```javascript
// Find the contact section (around line 25)
<div className="space-y-3">
  <div className="flex items-center space-x-3 text-light">
    <Mail className="w-5 h-5 text-secondary" />
    <span>anythingcandesign@gmail.com</span>
  </div>
  <div className="flex items-center space-x-3 text-light">
    <Phone className="w-5 h-5 text-secondary" />
    <span>+91 7498441756</span>
  </div>
  <div className="flex items-center space-x-3 text-light">
    <MapPin className="w-5 h-5 text-secondary" />
    <span>India</span>
  </div>
</div>

// Update to your information:
<div className="space-y-3">
  <div className="flex items-center space-x-3 text-light">
    <Mail className="w-5 h-5 text-secondary" />
    <span>your-email@domain.com</span>
  </div>
  <div className="flex items-center space-x-3 text-light">
    <Phone className="w-5 h-5 text-secondary" />
    <span>+1 (555) 123-4567</span>
  </div>
  <div className="flex items-center space-x-3 text-light">
    <MapPin className="w-5 h-5 text-secondary" />
    <span>Your City, Country</span>
  </div>
</div>
```

---

## 🎨 Color Scheme Changes

### Step 1: Update Tailwind Configuration

**File**: `tailwind.config.js`

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary brand color
        primary: '#your-primary-color',        // e.g., '#3B82F6' (blue)
        
        // Secondary brand color
        secondary: '#your-secondary-color',    // e.g., '#10B981' (green)
        
        // Accent color
        accent: '#your-accent-color',          // e.g., '#F59E0B' (amber)
        
        // Text colors
        'text-light': '#your-text-light',      // e.g., '#1F2937' (dark gray)
        'text-dark': '#your-text-dark',        // e.g., '#F9FAFB' (light gray)
        
        // Background colors
        'bg-light': '#your-bg-light',          // e.g., '#FFFFFF' (white)
        'bg-dark': '#your-bg-dark',            // e.g., '#111827' (dark gray)
      }
    }
  }
}
```

### Step 2: Update CSS Variables

**File**: `styles/globals.css`

```css
:root {
  --primary: #your-primary-color;
  --secondary: #your-secondary-color;
  --accent: #your-accent-color;
  --text-light: #your-text-light;
  --text-dark: #your-text-dark;
  --bg-light: #your-bg-light;
  --bg-dark: #your-bg-dark;
}

/* Dark mode variables */
.dark {
  --primary: #your-primary-color-dark;
  --secondary: #your-secondary-color-dark;
  --accent: #your-accent-color-dark;
}
```

### Step 3: Color Palette Examples

#### Professional Blue Theme
```javascript
primary: '#2563EB',      // Blue-600
secondary: '#059669',    // Emerald-600
accent: '#DC2626',       // Red-600
```

#### Modern Green Theme
```javascript
primary: '#10B981',      // Emerald-500
secondary: '#3B82F6',    // Blue-500
accent: '#F59E0B',       // Amber-500
```

#### Elegant Purple Theme
```javascript
primary: '#7C3AED',      // Violet-600
secondary: '#EC4899',    // Pink-500
accent: '#F59E0B',       // Amber-500
```

---

## 🔤 Font Changes

### Step 1: Update Google Fonts

**File**: `pages/_app.js`

```javascript
import { Inter, Playfair_Display, YourNewFont } from 'next/font/google'

// Current fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Add your new font
const yourNewFont = YourNewFont({ 
  subsets: ['latin'],
  variable: '--font-your-new',
  display: 'swap',
})
```

### Step 2: Update Tailwind Configuration

**File**: `tailwind.config.js`

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'your-new': ['var(--font-your-new)', 'sans-serif'],
      }
    }
  }
}
```

### Step 3: Update Component Classes

**File**: `components/Hero.js`

```javascript
// Change font classes
<div className="text-6xl sm:text-7xl lg:text-9xl font-your-new font-medium mb-8 leading-tight">
```

**File**: `components/Footer.js`

```javascript
// Change font classes
<span className="font-your-new text-xl font-bold text-light">YourNewBrandName</span>
```

---

## 📱 Favicon and Meta Tags

### Step 1: Create Favicon Files

Create these files in `public/`:

```
public/
├── favicon.ico        # 32x32px ICO format
├── favicon-16x16.png  # 16x16px PNG
├── favicon-32x32.png  # 32x32px PNG
├── apple-touch-icon.png # 180x180px PNG
└── android-chrome-192x192.png # 192x192px PNG
```

### Step 2: Update Meta Tags

**File**: `pages/_app.js`

```javascript
<Head>
  <title>YourNewBrandName - Professional Engineering Design</title>
  <meta name="description" content="Your new website description" />
  <meta name="keywords" content="your, keywords, here" />
  <meta name="author" content="Your Name" />
  
  {/* Open Graph */}
  <meta property="og:title" content="YourNewBrandName" />
  <meta property="og:description" content="Your new website description" />
  <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
  <meta property="og:url" content="https://yourwebsite.com" />
  <meta property="og:type" content="website" />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="YourNewBrandName" />
  <meta name="twitter:description" content="Your new website description" />
  <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />
  
  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</Head>
```

---

## 🔧 Testing Your Changes

### Step 1: Local Development

```bash
# Start development server
npm run dev

# Open in browser
open http://localhost:3000
```

### Step 2: Check All Pages

1. **Homepage**: Verify logo, tagline, and colors
2. **About Page**: Check brand name consistency
3. **Portfolio Page**: Ensure project cards display correctly
4. **Contact Page**: Verify contact information
5. **Footer**: Check all branding elements

### Step 3: Test Responsive Design

- **Desktop**: 1920x1080, 1440x900, 1366x768
- **Tablet**: 768x1024, 1024x768
- **Mobile**: 375x667, 414x896

### Step 4: Build and Deploy

```bash
# Build for production
npm run build

# Test production build
npm start

# Deploy to your hosting platform
npm run deploy
```

---

## 📋 Brand Change Checklist

### ✅ Logo Changes
- [ ] Main logo (`logo.svg`) replaced
- [ ] Footer logo (`logo.jpg`) replaced
- [ ] Icon logo (`icons/logo.svg`) replaced
- [ ] Alt text updated in all components
- [ ] Logo displays correctly on all pages

### ✅ Brand Name Changes
- [ ] Footer brand name updated
- [ ] Hero tagline updated
- [ ] Page titles updated
- [ ] Meta tags updated
- [ ] Site configuration updated

### ✅ Contact Information
- [ ] Email address updated
- [ ] Phone number updated
- [ ] Location updated
- [ ] All contact forms updated

### ✅ Color Scheme
- [ ] Primary colors updated
- [ ] Secondary colors updated
- [ ] Accent colors updated
- [ ] Dark mode colors updated
- [ ] CSS variables updated

### ✅ Fonts
- [ ] Google Fonts updated
- [ ] Tailwind configuration updated
- [ ] Component classes updated
- [ ] Fonts load correctly

### ✅ Meta Tags & SEO
- [ ] Page titles updated
- [ ] Meta descriptions updated
- [ ] Open Graph tags updated
- [ ] Twitter cards updated
- [ ] Favicon files created

### ✅ Testing
- [ ] Local development tested
- [ ] All pages checked
- [ ] Responsive design tested
- [ ] Production build tested
- [ ] Deployment successful

---

## 🆘 Troubleshooting

### Common Issues

#### Logo Not Displaying
- Check file path is correct
- Verify file format is supported
- Ensure file exists in public directory
- Check browser console for errors

#### Colors Not Updating
- Clear browser cache
- Restart development server
- Check Tailwind configuration
- Verify CSS variables are correct

#### Fonts Not Loading
- Check Google Fonts import
- Verify font name is correct
- Check Tailwind configuration
- Ensure font is available

#### Build Errors
- Check for typos in file names
- Verify all imports are correct
- Check for missing dependencies
- Review console errors

### Getting Help

- **Documentation**: Check this guide first
- **Code Comments**: Review inline documentation
- **Browser Console**: Check for JavaScript errors
- **Network Tab**: Verify file loading

---

## 🧭 Navigation Bar & Hero Section Changes

### Changing Logo in Navigation Bar

**File**: `components/Navbar.js`

#### Step 1: Update Logo File Path
```javascript
// Find this section (around line 87-91)
<img 
  src="/images/icons/logo.svg" 
  alt="DesignAnything Logo" 
  className="h-10 w-10"
/>

// Update to your new logo:
<img 
  src="/images/icons/your-new-logo.svg" 
  alt="YourNewBrandName Logo" 
  className="h-10 w-10"
/>
```

#### Step 2: Update Brand Name in Navigation
```javascript
// Find this section (around line 93-99)
<span className={`font-inter text-xl font-medium ${
  scrolled 
    ? darkMode ? 'text-light' : 'text-gray-800'
    : 'text-light'
}`}>
  DesignAnything
</span>

// Update to your new brand name:
<span className={`font-inter text-xl font-medium ${
  scrolled 
    ? darkMode ? 'text-light' : 'text-gray-800'
    : 'text-light'
}`}>
  YourNewBrandName
</span>
```

### Hero Section Notes

**Important**: The Hero section (`components/Hero.js`) does **NOT** contain any logo or brand name text. The main title "Transform Ideas Into Reality" is the only text in the hero section.

If you want to add a logo or brand name to the hero section, you would need to add it manually to the Hero component.

### Complete Navigation Bar Update Example

Here's a complete example of updating the navigation bar:

```javascript
// In components/Navbar.js
{/* Logo */}
<Link href="/" className="flex items-center space-x-2">
  <img 
    src="/images/icons/your-new-logo.svg" 
    alt="YourNewBrandName Logo" 
    className="h-10 w-10"
  />
  
  <span className={`font-inter text-xl font-medium ${
    scrolled 
      ? darkMode ? 'text-light' : 'text-gray-800'
      : 'text-light'
  }`}>
    YourNewBrandName
  </span>
</Link>
```

### Logo File Requirements

**Navigation Bar Logo** (`/images/icons/logo.svg`):
- **Format**: SVG (preferred) or PNG
- **Size**: 40x40px (h-10 w-10 class)
- **Background**: Transparent
- **Usage**: Navigation bar only

### Testing Your Changes

1. **Save the file** after making changes
2. **Refresh your browser** (Ctrl+F5 or Cmd+Shift+R)
3. **Check the navigation bar** for your new logo and brand name
4. **Test both light and dark modes** to ensure proper contrast
5. **Test on mobile** to ensure responsive design works

### Common Issues

#### Logo Not Displaying
- Check file path is correct: `/images/icons/logo.svg`
- Verify file exists in the public directory
- Check file format is supported (SVG, PNG, JPG)
- Clear browser cache

#### Brand Name Not Updating
- Check for typos in the brand name
- Ensure you're editing the correct file (`components/Navbar.js`)
- Restart development server if needed

#### Styling Issues
- Check if the brand name fits within the navigation bar
- Adjust font size if needed (currently `text-xl`)
- Test on different screen sizes

---

## 📞 Support

For technical support or questions about brand customization:
- **Email**: anythingcandesign@gmail.com
- **Documentation**: Refer to this guide
- **Issues**: Check browser console for errors
- **Updates**: Follow changelog for new features

---

*Last updated: January 2024*
*Version: 1.0*
