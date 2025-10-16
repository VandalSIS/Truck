# 🎨 Figma Customization Guide

## Quick Start Checklist

Follow this guide to replace all placeholders with your actual Figma design.

### ✅ Step 1: Export Assets from Figma

1. **Logo**
   - Export your logo as PNG or SVG
   - Recommended size: 200x60px
   - Save as `logo.png` in `public/images/`

2. **Hero Section Image**
   - Export the main hero/banner image
   - Recommended size: 1200x800px
   - Save as `hero-banner.png` in `public/images/`

3. **About Section Image**
   - Export the about section image
   - Recommended size: 600x600px
   - Save as `about-image.png` in `public/images/`

4. **Gallery Images**
   - Export 6 portfolio/gallery images
   - Recommended size: 800x600px each
   - Save as `gallery-1.png` through `gallery-6.png`

5. **Icons** (optional)
   - Export any custom icons as SVG
   - Save in `public/images/icons/`

---

## 📝 Step 2: Update Components

### 1. Navbar - Update Logo
File: `src/components/Navbar.jsx`

Replace:
```jsx
<div className="logo">
  <h2>YourLogo</h2>
</div>
```

With:
```jsx
<div className="logo">
  <img src="/images/logo.png" alt="Your Company" />
</div>
```

### 2. Hero - Update Banner Image
File: `src/components/Hero.jsx`

Replace:
```jsx
<div className="placeholder-image">
  <p>Hero Image</p>
  <span>Export from Figma</span>
</div>
```

With:
```jsx
<img src="/images/hero-banner.png" alt="Hero Banner" className="hero-img" />
```

### 3. About - Update About Image
File: `src/components/About.jsx`

Replace:
```jsx
<div className="placeholder-image">
  <p>About Image</p>
  <span>Export from Figma</span>
</div>
```

With:
```jsx
<img src="/images/about-image.png" alt="About Us" className="about-img" />
```

### 4. Gallery - Update Gallery Images
File: `src/components/Gallery.jsx`

Replace the entire `gallery-placeholder` div with:
```jsx
<img 
  src={`/images/gallery-${item}.png`} 
  alt={`Project ${item}`} 
  className="gallery-img" 
/>
```

---

## 🎨 Step 3: Update Colors from Figma

1. **Get colors from Figma:**
   - Select an element with your brand color
   - Copy the HEX code from the Fill property

2. **Update CSS variables:**
   File: `src/index.css`

   ```css
   :root {
     --primary-color: #YOUR_PRIMARY_COLOR;
     --secondary-color: #YOUR_SECONDARY_COLOR;
     --text-dark: #YOUR_DARK_TEXT_COLOR;
     --text-light: #YOUR_LIGHT_TEXT_COLOR;
     --bg-light: #YOUR_BACKGROUND_COLOR;
   }
   ```

---

## 📱 Step 4: Update Content

### Update Text Content
Go through each component and replace placeholder text:

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update title
   - Update subtitle
   - Update button text

2. **Features** (`src/components/Features.jsx`)
   - Update feature titles and descriptions
   - Replace emoji icons with your custom icons if needed

3. **About** (`src/components/About.jsx`)
   - Update company description

4. **Services** (`src/components/Services.jsx`)
   - Update service names and descriptions

5. **Contact** (`src/components/Contact.jsx`)
   - Update contact information (address, email, phone)

6. **Footer** (`src/components/Footer.jsx`)
   - Update company name
   - Update social media links
   - Update footer links

---

## 🎯 Step 5: Match Figma Typography

1. **Get fonts from Figma:**
   - Check which fonts are used in your design
   - Add them via Google Fonts or download them

2. **Add to index.html:**
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;600;700&display=swap" rel="stylesheet">
   ```

3. **Update CSS:**
   File: `src/index.css`
   ```css
   body {
     font-family: 'Your Font', sans-serif;
   }
   ```

---

## 🔍 Step 6: Match Layout & Spacing

Compare your Figma design with the website:

1. **Section spacing:**
   - Adjust padding in `src/App.css`
   - Modify `section { padding: 80px 0; }`

2. **Container width:**
   - Adjust max-width in `src/App.css`
   - Modify `.container { max-width: 1200px; }`

3. **Grid layouts:**
   - Check Features, Services, and Gallery grids
   - Adjust `grid-template-columns` in respective CSS files

---

## 💡 Tips

- **Preview as you go:** The dev server updates automatically when you save files
- **Start with colors and typography:** This gives the biggest visual impact
- **Then add images:** Replace placeholders one section at a time
- **Fine-tune spacing last:** Match exact measurements from Figma

---

## 🚀 Need Help?

If something doesn't look right:

1. Check browser console for errors (F12)
2. Make sure image paths are correct
3. Verify CSS selectors are targeting the right elements
4. Compare with Figma design measurements

---

Good luck! Your website will look amazing! 🎉

