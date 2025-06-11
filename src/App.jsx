import React from 'react'
import Nav from './components/Nav'

import Carousels from './components/Carousels'
import Aboutme from './components/Aboutme'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Nav />
      <Carousels />
      <Aboutme />
      <Tech />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
