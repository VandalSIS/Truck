import React from 'react'
import './Stats.css'

function Stats() {
  return (
    <section className="stats" id="stats">
      <div className="stats-bg">
        <img src="/images/image 5.png" alt="Logistics" className="stats-bg-image" />
      </div>
      <div className="container">
        <div className="stats-wrapper">
          <div className="stats-content">
            <div className="stat-number">354.158</div>
            <div className="stat-labels">
              <span className="stat-label-vertical">Delivered tons of products</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

