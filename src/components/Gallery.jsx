import React from 'react'
import './Gallery.css'

function Gallery() {
  const galleryItems = [1, 2, 3, 4, 5, 6]

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">100+ Awards That Prove We're All About Making Good Decisions</h2>
        <p className="section-subtitle">
          Our achievements and success stories in logistics
        </p>
        
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-placeholder">
                <p>Gallery Image {item}</p>
                <span>Export from Figma</span>
              </div>
              <div className="gallery-overlay">
                <h4>Project Title {item}</h4>
                <p>Project Description</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

