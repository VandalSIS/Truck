import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-image">
        <img src="/images/Frame 4.png" alt="Logistics Truck" className="hero-img" />
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-label" style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>INTERNATIONAL LOGISTICS</p>
            <h1 className="hero-title">
              Fastest &amp; Secured <span className="highlight">Logistics Solution &amp;</span> services
            </h1>
            <p className="hero-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatibus atque temporibus eaque aspernatur ipsum deleniti et ullam sint purus deleniti maxime fugiat, eum quibusque nulla vitae quasi a consectetur quas deleniti.
            </p>
            <div className="hero-buttons" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <button className="btn-primary">All Services</button>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ background: '#ffffff', padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  📞
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.75rem', color: '#ffffff' }}>Call Us Now</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#ffffff' }}>+025 757 575 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

