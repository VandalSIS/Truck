import React from 'react'
import './Services.css'

function Services() {
  const features = [
    'Mundi disunt defini',
    'Mundi disunt defini',
    'Mundi disunt defini',
    'Mundi disunt defini',
    'Mundi disunt defini',
    'Mundi disunt defini'
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-content">
          <div className="services-image-container">
            <img src="/images/Rectangle 38.png" alt="Logistics Services" className="services-main-image" />
            <div className="services-overlay">
              <div className="services-stats-badge">
                <div className="stats-circle">
                  <img src="/images/28,134.png" alt="28,134" className="stats-number-img" />
                </div>
                <div className="stats-bottom">
                  <span className="stats-text">Project scope</span>
                  <span className="stats-bullet">•</span>
                  <span className="stats-value">4.5k</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="services-text">
            <h2 className="services-title">
              Build Better Future<br />
              For Your Company
            </h2>
            
            <div className="services-features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-checkmark">✓</span>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="btn-services">Read More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

