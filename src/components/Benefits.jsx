import React from 'react'
import './Benefits.css'

function Benefits() {
  const benefits = [
    {
      id: 1,
      image: '/images/Rectangle 2.png',
      title: 'Benefit 1',
      description: 'Pacific hake false trevally queen parrotfish black prickleback mola hake false trevally queen parrotfish black prickleback mossback moss parrotfish black prickleback mossback moss'
    },
    {
      id: 2,
      image: '/images/Rectangle 3.png',
      title: 'Benefit 2',
      description: 'Pacific hake false trevally queen parrotfish black prickleback mola hake false trevally queen parrotfish black prickleback black orchidae false trevally queen parrotfish black prickleback mossback oss'
    },
    {
      id: 3,
      image: '/images/Rectangle 4.png',
      title: 'Benefit 3',
      description: 'Pacific hake false trevally queen parrotfish black prickleback mola hake perhaps false trevally queen parrotfish black prickleback mossback oss'
    },
    {
      id: 4,
      image: '/images/Rectangle 5.png',
      title: 'Benefit 4',
      description: 'Pacific hake false trevally queen parrotfish black prickleback mola hake false trevally queen parrotfish black prickleback mossback moss parrotfish black'
    }
  ]

  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <p className="benefits-label">/ benefits /</p>
        <h2 className="benefits-title">
          IPIEXPRESS IS THE BEST TRANSPORTATION<br/>
          COMPANY IN OUR STATE
        </h2>
        
        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-image">
                <img src={benefit.image} alt={benefit.title} />
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-cta">
          <button className="btn-explore">
            Explore more
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Benefits

