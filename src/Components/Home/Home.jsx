import React from 'react'
import About from '../About/About'
import Hero from '../Hero/Hero';
import Contacts from '../Contacts/Contact'
import Testimonials from '../Testimonials/Testimonials';
import Anniversary from '../Anniversary/Anniversary';
import Map from '../Map/Map';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
      <Anniversary />
      <Map />
      <Contacts />
    </>
  )
}

export default Home