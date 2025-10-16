# 🚀 Quick Reference - Common Tasks

## 📸 Replace Images

### Replace Hero Image
**File:** `src/components/Hero.jsx` (around line 14-18)

```jsx
// BEFORE
<div className="placeholder-image">
  <p>Hero Image</p>
  <span>Export from Figma</span>
</div>

// AFTER
<img src="/images/hero-banner.png" alt="Hero Banner" className="hero-img" />
```

### Replace Logo
**File:** `src/components/Navbar.jsx` (around line 10-12)

```jsx
// BEFORE
<div className="logo">
  <h2>YourLogo</h2>
</div>

// AFTER
<div className="logo">
  <img src="/images/logo.png" alt="Company Name" />
</div>
```

### Replace About Image
**File:** `src/components/About.jsx` (around line 10-14)

```jsx
// BEFORE
<div className="placeholder-image">
  <p>About Image</p>
  <span>Export from Figma</span>
</div>

// AFTER
<img src="/images/about-image.png" alt="About Us" className="about-img" />
```

### Replace Gallery Images
**File:** `src/components/Gallery.jsx` (around line 17-21)

```jsx
// BEFORE
<div className="gallery-placeholder">
  <p>Gallery Image {item}</p>
  <span>Export from Figma</span>
</div>

// AFTER
<img 
  src={`/images/gallery-${item}.png`} 
  alt={`Project ${item}`} 
  className="gallery-img" 
/>
```

---

## 🎨 Change Colors

**File:** `src/index.css` (lines 11-17)

```css
:root {
  --primary-color: #2563eb;      /* Main brand color */
  --secondary-color: #1e40af;    /* Secondary/hover color */
  --text-dark: #1f2937;          /* Dark text */
  --text-light: #6b7280;         /* Light/gray text */
  --bg-light: #f9fafb;           /* Light background */
  --white: #ffffff;
}
```

---

## ✏️ Update Text Content

### Update Hero Title
**File:** `src/components/Hero.jsx` (line 8)

```jsx
<h1 className="hero-title">
  Your Title Here <span className="highlight">Highlighted Text</span>
</h1>
```

### Update Hero Subtitle
**File:** `src/components/Hero.jsx` (line 11)

```jsx
<p className="hero-subtitle">
  Your subtitle or description here...
</p>
```

### Update Features
**File:** `src/components/Features.jsx` (lines 5-25)

```jsx
const features = [
  {
    icon: '🚀',  // Replace with your icon
    title: 'Your Feature Title',
    description: 'Your feature description here.'
  },
  // Add more features...
]
```

### Update Services
**File:** `src/components/Services.jsx` (lines 5-22)

```jsx
const services = [
  {
    title: 'Your Service Name',
    description: 'Service description here.',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  // Add more services...
]
```

### Update Contact Info
**File:** `src/components/Contact.jsx` (lines 31-50)

```jsx
<div className="info-item">
  <div className="info-icon">📍</div>
  <div className="info-text">
    <h4>Address</h4>
    <p>Your actual address</p>
  </div>
</div>
// Similar for email and phone...
```

### Update Footer
**File:** `src/components/Footer.jsx` (lines 7-9)

```jsx
<h3>YourCompanyName</h3>
<p>Your company tagline or description.</p>
```

---

## 🔤 Change Fonts

### Add Google Font
**File:** `index.html` (in `<head>` section)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

### Apply Font
**File:** `src/index.css` (around line 7)

```css
body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

---

## 📏 Adjust Spacing

### Change Section Padding
**File:** `src/App.css` (line 6)

```css
section {
  padding: 80px 0;  /* Top/bottom padding for all sections */
}
```

### Change Container Width
**File:** `src/App.css` (line 10)

```css
.container {
  max-width: 1200px;  /* Maximum width of content */
}
```

---

## 🔗 Update Links

### Navigation Links
**File:** `src/components/Navbar.jsx` (lines 13-20)

```jsx
<a href="#home">Home</a>
<a href="#features">Features</a>
// etc...
```

### Social Media Links
**File:** `src/components/Footer.jsx` (lines 13-17)

```jsx
<div className="social-links">
  <a href="https://facebook.com/yourpage">📘</a>
  <a href="https://twitter.com/yourhandle">🐦</a>
  // etc...
</div>
```

---

## 🎯 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies (first time)
npm install
```

---

## 📱 File Structure Quick View

```
src/
├── components/
│   ├── Navbar.jsx/css     → Top navigation
│   ├── Hero.jsx/css       → First section with banner
│   ├── Features.jsx/css   → Features grid
│   ├── About.jsx/css      → About section
│   ├── Services.jsx/css   → Services cards
│   ├── Gallery.jsx/css    → Portfolio/work gallery
│   ├── Contact.jsx/css    → Contact form
│   └── Footer.jsx/css     → Bottom footer
├── App.jsx                → Main component
├── App.css                → Global app styles
├── main.jsx               → Entry point
└── index.css              → Global variables & resets

public/
└── images/                → Put your images here
```

---

## 💡 Pro Tips

1. **Save files** → Browser auto-refreshes
2. **Check console** (F12) for errors
3. **Use browser DevTools** to inspect elements
4. **Test on mobile** using DevTools device emulation
5. **Keep original files** as backup before major changes

---

Happy coding! 🎉

