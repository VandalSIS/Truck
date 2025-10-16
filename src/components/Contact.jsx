import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Create Something Amazing Together!</h2>
        <p className="section-subtitle">
          Contact us today and let's discuss how we can help with your logistics needs.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Our Location</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>Head Office</p>
              <p style={{ color: 'var(--text-light)' }}>State 21, Street</p>
              <p style={{ color: 'var(--text-light)' }}>National City, USA 93950</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'var(--white)', marginBottom: '1rem' }}>Our Location</h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>Main Warehouse</p>
              <p style={{ color: 'var(--text-light)' }}>State 21, Street</p>
              <p style={{ color: 'var(--text-light)' }}>National City, USA 93950</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

