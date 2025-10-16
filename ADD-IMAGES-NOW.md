# 📸 ADD IMAGES NOW - Quick Guide

## ⚡ Fast Track - 3 Steps

Your website is **100% styled** to match the Figma design!  
**Only thing missing: The truck/logistics images!**

---

## Step 1: Export from Figma (5 minutes)

Open your Figma design and export these images:

### 🚛 1. Hero Truck Image
- **Location in Figma:** Main hero section (the big truck)
- **Export as:** PNG or JPG
- **Size:** 1200 x 800px (or larger)
- **Save as:** `truck-hero.png`

### 📦 2. About/Container Image  
- **Location in Figma:** About section (containers/shipping)
- **Export as:** PNG or JPG
- **Size:** 800 x 600px
- **Save as:** `about-containers.png`

### 📸 3. Six Gallery Images
- **Location in Figma:** Gallery/portfolio section
- **Export as:** PNG or JPG
- **Size:** 800 x 600px each
- **Save as:** `gallery-1.png`, `gallery-2.png`, ... `gallery-6.png`

---

## Step 2: Add to Project (1 minute)

1. Open the folder: `public/images/`
2. Drag and drop all your exported images
3. Make sure names match exactly:
   - `truck-hero.png` (or `.jpg`)
   - `about-containers.png` (or `.jpg`)
   - `gallery-1.png` through `gallery-6.png`

---

## Step 3: Update Code (2 minutes)

### A. Hero Image

**File:** `src/components/Hero.jsx`  
**Line:** Around 25

**Find this:**
```jsx
<div className="placeholder-image">
  <p>Hero Image</p>
  <span>Export from Figma</span>
</div>
```

**Replace with:**
```jsx
<img src="/images/truck-hero.png" alt="Logistics Truck" className="hero-img" />
```

---

### B. About Image

**File:** `src/components/About.jsx`  
**Line:** Around 10

**Find this:**
```jsx
<div className="placeholder-image">
  <p>About Image</p>
  <span>Export from Figma</span>
</div>
```

**Replace with:**
```jsx
<img src="/images/about-containers.png" alt="Container Logistics" className="about-img" />
```

---

### C. Gallery Images

**File:** `src/components/Gallery.jsx`  
**Line:** Around 18

**Find this:**
```jsx
<div className="gallery-placeholder">
  <p>Gallery Image {item}</p>
  <span>Export from Figma</span>
</div>
```

**Replace with:**
```jsx
<img 
  src={`/images/gallery-${item}.png`} 
  alt={`Logistics Project ${item}`} 
  className="gallery-img" 
/>
```

---

## ✅ Checklist

- [ ] Export hero truck image from Figma
- [ ] Export about section image from Figma
- [ ] Export 6 gallery images from Figma
- [ ] Add all images to `public/images/` folder
- [ ] Update `Hero.jsx` with image tag
- [ ] Update `About.jsx` with image tag
- [ ] Update `Gallery.jsx` with image tag
- [ ] Save all files
- [ ] Check browser - images should appear!

---

## 🎯 File Locations Quick Reference

```
TestTruck/
├── public/
│   └── images/           ← PUT IMAGES HERE
│       ├── truck-hero.png
│       ├── about-containers.png
│       ├── gallery-1.png
│       ├── gallery-2.png
│       ├── gallery-3.png
│       ├── gallery-4.png
│       ├── gallery-5.png
│       └── gallery-6.png
│
└── src/
    └── components/
        ├── Hero.jsx      ← UPDATE LINE ~25
        ├── About.jsx     ← UPDATE LINE ~10
        └── Gallery.jsx   ← UPDATE LINE ~18
```

---

## 🔧 If Using .jpg Instead of .png

Just change the file extensions in the code:

```jsx
// For JPG images
<img src="/images/truck-hero.jpg" alt="Logistics Truck" className="hero-img" />
<img src="/images/about-containers.jpg" alt="Container Logistics" className="about-img" />
```

And for gallery:
```jsx
<img 
  src={`/images/gallery-${item}.jpg`}  // Changed to .jpg
  alt={`Logistics Project ${item}`} 
  className="gallery-img" 
/>
```

---

## 💡 Pro Tips

1. **Compress images** at [TinyPNG](https://tinypng.com) before adding (faster website)
2. **Export at 2x size** from Figma for sharper images on retina displays
3. **Save files** after editing - browser auto-refreshes
4. **Check console** (F12) if images don't show

---

## ❓ Troubleshooting

### Images not showing?

1. **Check file names:** Must match exactly (case-sensitive)
   - ✅ `truck-hero.png`
   - ❌ `Truck-Hero.png`
   - ❌ `truck_hero.png`

2. **Check file location:** Must be in `public/images/`
   - ✅ `public/images/truck-hero.png`
   - ❌ `src/images/truck-hero.png`

3. **Check file extension:** .png vs .jpg
   - Make sure code matches your file type

4. **Clear cache:** Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

---

## 🎉 You're Almost Done!

**Everything else is complete:**
- ✅ Dark theme matching Figma
- ✅ Cyan blue accent color
- ✅ All logistics content
- ✅ Statistics section
- ✅ Mobile responsive
- ✅ All sections styled

**Only need:** The 8 images from Figma!

---

## ⏱️ Time Estimate

- **Export from Figma:** 5 minutes
- **Add to project:** 1 minute
- **Update code:** 2 minutes
- **Total:** ~8 minutes

---

**Your website will be 100% complete in less than 10 minutes!** 🚀

Start with Step 1 above! ☝️

