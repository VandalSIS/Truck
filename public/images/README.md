# Images Folder

## 📸 How to Add Your Images from Figma

1. **Export from Figma:**
   - Select the image/banner you want to export
   - Right-click → Export → Choose format (PNG, JPG, or SVG)
   - Download the file

2. **Add to this folder:**
   - Place all exported images in this `public/images` folder
   - Use descriptive names (e.g., `hero-banner.png`, `about-image.jpg`)

3. **Update the components:**
   - Open the component file (e.g., `src/components/Hero.jsx`)
   - Find the placeholder div
   - Replace with: `<img src="/images/your-image.png" alt="Description" />`

## 📋 Suggested Image Names

Based on the components, you might need:

- `hero-banner.png` - Main hero image
- `about-image.png` - About section image
- `gallery-1.jpg` through `gallery-6.jpg` - Gallery images
- `logo.png` - Your logo for the navbar
- `favicon.ico` - Browser favicon

## 💡 Tips

- **Optimize images** before adding (use tools like TinyPNG)
- **Use appropriate formats:**
  - PNG for images with transparency
  - JPG for photos
  - SVG for logos and icons
- **Recommended sizes:**
  - Hero images: 1920x1080px
  - Gallery images: 800x600px
  - Logo: 200x60px (approx)

