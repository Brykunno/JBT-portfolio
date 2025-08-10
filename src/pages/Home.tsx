import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from './LandingPage'
import "../styles/layout.css"
function Home() {
  return (
    <div >
      <section className='border-1 border-blue-300 min-h-lvh landing-page'>

      <LandingPage/>

      </section>

      <section className='border-1 border-blue-300 min-h-lvh ' id='about'>
 <Navbar />
 

      </section>
    

    
    </div>
  )
}

export default Home
