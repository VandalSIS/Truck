# 🏗️ Website Structure

## Visual Layout

```
┌─────────────────────────────────────────────┐
│            NAVBAR (Fixed Top)               │
│  Logo  [Home Features About Services...]   │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│              HERO SECTION                   │
│                                             │
│    [Title]           [Hero Image]          │
│    [Subtitle]                              │
│    [CTA Buttons]                           │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│           FEATURES SECTION                  │
│                                             │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  │
│  │ 🚀   │  │ 🎨   │  │ 🔒   │  │ ⚡   │  │
│  │Title │  │Title │  │Title │  │Title │  │
│  │Desc  │  │Desc  │  │Desc  │  │Desc  │  │
│  └──────┘  └──────┘  └──────┘  └──────┘  │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│            ABOUT SECTION                    │
│                                             │
│  ┌──────────┐     [Title]                  │
│  │  About   │     [Description]            │
│  │  Image   │     [Description]            │
│  │          │     [CTA Button]             │
│  └──────────┘                              │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│           SERVICES SECTION                  │
│                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌────┐ │
│  │  Service 1  │  │  Service 2  │  │Srv3│ │
│  │  ✓ Feature  │  │  ✓ Feature  │  │✓ F │ │
│  │  ✓ Feature  │  │  ✓ Feature  │  │✓ F │ │
│  │  ✓ Feature  │  │  ✓ Feature  │  │✓ F │ │
│  │  [Button]   │  │  [Button]   │  │[B] │ │
│  └─────────────┘  └─────────────┘  └────┘ │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│           GALLERY SECTION                   │
│                                             │
│  ┌──────┐  ┌──────┐  ┌──────┐             │
│  │Img 1 │  │Img 2 │  │Img 3 │             │
│  └──────┘  └──────┘  └──────┘             │
│  ┌──────┐  ┌──────┐  ┌──────┐             │
│  │Img 4 │  │Img 5 │  │Img 6 │             │
│  └──────┘  └──────┘  └──────┘             │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│           CONTACT SECTION                   │
│                                             │
│  [Contact Info]    [Contact Form]          │
│  📍 Address        ┌──────────────┐        │
│  📧 Email          │ Name         │        │
│  📱 Phone          │ Email        │        │
│                    │ Message      │        │
│                    └──[Submit]────┘        │
│                                             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│              FOOTER                         │
│                                             │
│  [Logo]      [Links]    [Links]  [Contact] │
│  [Desc]      About      Services Address   │
│  [Social]    Features   Mobile   Email     │
│              Gallery    Design   Phone     │
│                                             │
│  © 2024 YourCompany. All rights reserved.  │
└─────────────────────────────────────────────┘
```

---

## Component Breakdown

### 1. Navbar
**File:** `src/components/Navbar.jsx`  
**Style:** `src/components/Navbar.css`

- Sticky navigation bar
- Logo on the left
- Navigation links in center
- CTA button on right
- Mobile hamburger menu

**Customizable:**
- Logo
- Link names and destinations
- Colors
- Button text

---

### 2. Hero
**File:** `src/components/Hero.jsx`  
**Style:** `src/components/Hero.css`

- Full viewport height
- Two-column layout (text + image)
- Gradient background
- Call-to-action buttons

**Customizable:**
- Title and subtitle
- Hero image
- Button text
- Background gradient
- Colors

---

### 3. Features
**File:** `src/components/Features.jsx`  
**Style:** `src/components/Features.css`

- 4 feature cards in grid
- Icons (currently emojis)
- Hover animations
- Auto-responsive

**Customizable:**
- Number of features
- Icons
- Titles and descriptions
- Grid columns

---

### 4. About
**File:** `src/components/About.jsx`  
**Style:** `src/components/About.css`

- Two-column layout
- Image on left, text on right
- CTA button

**Customizable:**
- About image
- Description text
- Button text
- Image position (left/right)

---

### 5. Services
**File:** `src/components/Services.jsx`  
**Style:** `src/components/Services.css`

- 3 service cards
- Feature lists with checkmarks
- CTA buttons
- Hover effects

**Customizable:**
- Number of services
- Service names
- Feature lists
- Button text

---

### 6. Gallery
**File:** `src/components/Gallery.jsx`  
**Style:** `src/components/Gallery.css`

- 6-item grid
- Image placeholders
- Hover overlays
- Project titles

**Customizable:**
- Number of images
- Image files
- Project titles/descriptions
- Grid layout

---

### 7. Contact
**File:** `src/components/Contact.jsx`  
**Style:** `src/components/Contact.css`

- Two-column layout
- Contact information (left)
- Contact form (right)
- Form validation

**Customizable:**
- Contact details
- Form fields
- Submit action
- Email integration

---

### 8. Footer
**File:** `src/components/Footer.jsx`  
**Style:** `src/components/Footer.css`

- 4-column layout
- Company info
- Quick links
- Social media links
- Copyright notice

**Customizable:**
- Company name
- Link sections
- Social media URLs
- Copyright text

---

## File Organization

```
src/components/
│
├── Navbar.jsx + Navbar.css       → Navigation
├── Hero.jsx + Hero.css           → Hero/Banner
├── Features.jsx + Features.css   → Feature Cards
├── About.jsx + About.css         → About Section
├── Services.jsx + Services.css   → Service Cards
├── Gallery.jsx + Gallery.css     → Portfolio
├── Contact.jsx + Contact.css     → Contact Form
└── Footer.jsx + Footer.css       → Footer
```

Each component has:
- **JSX file** - HTML structure and logic
- **CSS file** - Styling for that component

---

## How Components Work Together

```
index.html
    ↓
  main.jsx (Entry point)
    ↓
  App.jsx (Main component)
    ↓
    ├─→ Navbar
    ├─→ Hero
    ├─→ Features
    ├─→ About
    ├─→ Services
    ├─→ Gallery
    ├─→ Contact
    └─→ Footer
```

All components are imported and rendered in `App.jsx` in order.

---

## Responsive Breakpoints

```
Mobile:      0px - 767px    (1 column layouts)
Tablet:    768px - 1023px   (2 column layouts)
Desktop:  1024px+           (Full multi-column)
```

Each component CSS file has media queries to handle responsiveness.

---

## Color System

Defined in `src/index.css`:

```css
:root {
  --primary-color: #2563eb      (Blue - main brand)
  --secondary-color: #1e40af    (Dark blue - hover)
  --text-dark: #1f2937          (Almost black)
  --text-light: #6b7280         (Gray)
  --bg-light: #f9fafb           (Very light gray)
  --white: #ffffff              (White)
}
```

These variables are used throughout all components for consistency.

---

## Navigation Flow

```
User clicks nav link
       ↓
Smooth scroll to section
       ↓
Section ID matches href (#features, #about, etc.)
```

All sections have `id` attributes that match the navbar links.

---

## Quick Edit Reference

| What to Change | File to Edit | Line Approx. |
|----------------|--------------|--------------|
| Logo | Navbar.jsx | 10-12 |
| Hero Title | Hero.jsx | 8 |
| Hero Image | Hero.jsx | 14-18 |
| Features | Features.jsx | 5-25 |
| About Text | About.jsx | 15-25 |
| Services | Services.jsx | 5-22 |
| Gallery Images | Gallery.jsx | 17-21 |
| Contact Info | Contact.jsx | 31-50 |
| Footer | Footer.jsx | 7-9, 40+ |
| Colors | index.css | 11-17 |

---

## Dependencies

```json
"dependencies": {
  "react": "^18.3.1",        // UI library
  "react-dom": "^18.3.1"     // React DOM
},
"devDependencies": {
  "vite": "^5.4.2",          // Build tool
  "@vitejs/plugin-react": "^4.3.1"  // React plugin
}
```

No heavy frameworks - lightweight and fast!

---

## Summary

- **8 sections** - All fully functional
- **Modular design** - Each component is independent
- **Easy to customize** - Well-organized and commented
- **Responsive** - Works on all devices
- **Modern** - Uses latest React practices
- **Fast** - Vite for lightning-fast development

---

Need specific details? Check:
- **QUICK-REFERENCE.md** - Code snippets
- **FIGMA-CUSTOMIZATION-GUIDE.md** - Step-by-step guide
- **CHECKLIST.md** - Task checklist

Happy building! 🚀

