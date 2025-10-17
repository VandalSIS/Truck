import React from 'react'
import './Gallery.css'

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-hero">
        <div className="gallery-bg-wrapper">
          <img src="/images/Rectangle 40.png" alt="Logistics" className="gallery-bg-image" />
          <div className="gallery-overlay"></div>
        </div>
        <div className="container">
          <div className="gallery-hero-content">
            <div className="gallery-title-wrapper">
              <img src="/images/Vector 10.png" alt="" className="arrow-icon" />
              <div className="gallery-title-group">
                <p className="gallery-subtitle">100+ Awards That</p>
                <h2 className="gallery-title">
                  Prove We're All About<br />
                  Making Good Decisions
                </h2>
              </div>
            </div>
            
            <div className="stats-wrapper">
              <div className="stat-box">
                <div className="stat-number">+145</div>
                <div className="stat-label">Land Transportation</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">+362</div>
                <div className="stat-label">Land Transportation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="gallery-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-left">
              <h3 className="form-title">
                Let's Create Something<br />
                Amazing Together!
              </h3>
              <p className="form-subtitle">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            
            <div className="form-right">
              <form>
                <div className="input-row">
                  <input type="text" placeholder="First name" className="input-field" />
                  <input type="text" placeholder="Last name" className="input-field" />
                </div>
                <div className="input-row">
                  <input type="email" placeholder="Email address" className="input-field" />
                  <input type="tel" placeholder="Phone" className="input-field" />
                </div>
                <textarea placeholder="Message" className="textarea-field" rows="3"></textarea>
              </form>
            </div>
          </div>
          
          <div className="form-footer">
            <div className="info-grid">
              <div className="info-item">
                <h4>Our Location</h4>
                <p>West 9th Street<br />New York NY City 10010</p>
              </div>
              <div className="info-item">
                <h4>Our Location</h4>
                <p>West 9th Street<br />New York NY City 10010</p>
              </div>
              <div className="info-item">
                <h4>Write to us</h4>
                <p>+707 575 765 00<br />info@ipiexpress.com</p>
              </div>
              <div className="info-item">
                <h4>Write to us</h4>
                <p>+707 575 765 00<br />info@ipiexpress.com</p>
              </div>
            </div>
            <button type="submit" className="submit-btn">Send a message</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

