import React from 'react'
import Nav from '../homePage/Nav'
import Mission from '../homePage/Mission'
import Footer from '../homePage/Footer'
import Contact from '../homePage/Contact'
import Contactabout from './Contactabout'

function ContactPage() {
  return (
    <div>
      <Nav />
      <Contactabout />
      <Mission />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage