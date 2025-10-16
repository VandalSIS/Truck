import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="placeholder-image">
              <p>About Image</p>
              <span>Export from Figma</span>
            </div>
          </div>
          <div className="about-text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              IPIEXPRESS IS THE BEST TRANSPORTATION COMPANY IN OUR STATE
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
              Build Better Future For Your Company
            </p>
            <p className="about-description">
              With years of experience in logistics and transportation, we've helped countless businesses 
              streamline their supply chains. Our team of experts is dedicated to delivering 
              high-quality transport solutions that drive real results.
            </p>
            <p className="about-description">
              We believe in reliability, efficiency, and putting our clients first. Every shipment 
              is an opportunity to exceed expectations and deliver something truly remarkable.
            </p>
            <button className="btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

