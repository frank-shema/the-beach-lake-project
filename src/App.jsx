import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Offers from './components/offers'
import Plan from './components/Plan'
import Room from './components/Room'
import ImageSlider from './components/ImageSlider'
import Footer from './components/Footer'

function App() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <Offers/>
   <Plan/>
   <ImageSlider/>
   <Room/>
   <Footer/>
    </div>
  )
}

export default App
