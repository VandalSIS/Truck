# 📸 Example Image Exports from Figma

## What Images Do You Need?

Here's what to export from your Figma design:

### 1. Logo (Navbar)
- **Format:** PNG or SVG (SVG preferred for quality)
- **Recommended size:** 200px wide × 60px tall (approximately)
- **File name:** `logo.png` or `logo.svg`
- **Where it goes:** `public/images/logo.png`
- **Used in:** Navbar at the top

### 2. Hero Banner
- **Format:** PNG or JPG
- **Recommended size:** 1200px × 800px
- **File name:** `hero-banner.png`
- **Where it goes:** `public/images/hero-banner.png`
- **Used in:** Main hero section (first thing visitors see)

### 3. About Image
- **Format:** PNG or JPG
- **Recommended size:** 600px × 600px (square) or 800px × 600px
- **File name:** `about-image.png`
- **Where it goes:** `public/images/about-image.png`
- **Used in:** About section

### 4. Gallery/Portfolio Images
- **Format:** PNG or JPG
- **Recommended size:** 800px × 600px (or 1:1 ratio for squares)
- **File names:** 
  - `gallery-1.png`
  - `gallery-2.png`
  - `gallery-3.png`
  - `gallery-4.png`
  - `gallery-5.png`
  - `gallery-6.png`
- **Where they go:** `public/images/gallery-X.png`
- **Used in:** Gallery/Portfolio section

### 5. Feature Icons (Optional)
- **Format:** SVG (best) or PNG
- **Recommended size:** 64px × 64px
- **File names:** `icon-1.svg`, `icon-2.svg`, etc.
- **Where they go:** `public/images/icons/`
- **Used in:** Feature cards (currently using emojis)

### 6. Favicon (Optional but recommended)
- **Format:** ICO or PNG
- **Recommended size:** 32px × 32px
- **File name:** `favicon.ico`
- **Where it goes:** `public/favicon.ico`
- **Used in:** Browser tab icon

---

## How to Export from Figma

1. **Select the element** you want to export (click on it)
2. In the right panel, scroll to **Export** section
3. Click the **+** button if no export settings exist
4. Choose your format (PNG, JPG, or SVG)
5. Choose scale (1x, 2x, etc. - use 2x for retina displays)
6. Click **Export [element name]**
7. Save with the recommended filename above

---

## Image Optimization Tips

Before adding images to the website:

1. **Compress them** using:
   - [TinyPNG](https://tinypng.com) - for PNG/JPG
   - [SVGOMG](https://jakearchibald.github.io/svgomg/) - for SVG

2. **Choose the right format:**
   - **PNG** - for images with transparency, logos, icons
   - **JPG** - for photos, complex images
   - **SVG** - for logos, icons, simple graphics (best quality, small size)

3. **Use appropriate sizes:**
   - Don't upload 4000px images if you only need 800px
   - Export at 2x size for retina displays (but compress well)

---

## After Adding Images

Once you've added images to this folder:

1. Open the component files (see QUICK-REFERENCE.md)
2. Replace the placeholder divs with `<img>` tags
3. Point them to your images: `src="/images/your-image.png"`
4. Save the file - browser will auto-refresh!

---

## Example File Structure After Adding Images

```
public/images/
├── logo.png
├── hero-banner.png
├── about-image.png
├── gallery-1.png
├── gallery-2.png
├── gallery-3.png
├── gallery-4.png
├── gallery-5.png
├── gallery-6.png
└── icons/
    ├── icon-1.svg
    ├── icon-2.svg
    └── icon-3.svg
```

---

Need help? Check QUICK-REFERENCE.md for exact code to use!

