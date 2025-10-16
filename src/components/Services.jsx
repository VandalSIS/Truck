import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      title: 'Benefit 1',
      description: 'Fast and reliable transportation services with comprehensive support and real-time tracking for all your logistics needs.',
      features: ['24/7 Support', 'Real-time Tracking', 'Insurance Coverage']
    },
    {
      title: 'Benefit 2',
      description: 'Quality service that helps you cover more ground in your transportation business with modern equipment.',
      features: ['Fast Delivery', 'Secure Transport', 'Global Network']
    },
    {
      title: 'Benefit 3',
      description: 'Professional logistics solutions with competitive rates and experienced team members dedicated to your success.',
      features: ['Professional Team', 'Modern Fleet', 'Competitive Rates']
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Benefits of working with IPIEXPRESS for your logistics needs
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn-secondary">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

