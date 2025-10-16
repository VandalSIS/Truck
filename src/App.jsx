import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import Benefits from './components/Benefits'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Benefits />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

