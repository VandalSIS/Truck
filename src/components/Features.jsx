import React from 'react'
import './Features.css'

function Features() {
  const features = [
    {
      image: '/images/Screenshot Capture - 2025-08-13 - 19-29-51 1.png',
      title: 'Refrigerator freight',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium black prolelaque molis hake lasse brevally.'
    },
    {
      image: '/images/Screenshot Capture - 2025-08-13 - 19-30-11 1.png',
      title: 'Trucks transportation',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium black prolelaque molis hake lasse brevally.'
    },
    {
      image: '/images/Screenshot Capture - 2025-08-13 - 19-30-16 1.png',
      title: 'Isotermal freight',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium black prolelaque molis hake lasse brevally.'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Professional logistics solutions tailored to your needs
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

