import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from './landing_page/LandingPage'
import "../styles/layout.css"
import About from './about/About'

function Home() {
  return (
    <div >

      <section className='min-h-lvh landing-page'>

      <LandingPage/>

      </section>

      <section className='border-1 border-blue-300 min-h-lvh ' id='about'>
 {/* <Navbar /> */}
 
 <About/>

      </section>
    

    
    </div>
  )
}

export default Home
