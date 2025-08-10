import React from 'react'
import Button from '../components/Button'

function LandingPage() {
  return (
     <div className='  flex flex-col gap-2'>
       
        <div className='text-center '>
            <h1 style={{padding:5, textTransform:"uppercase", fontWeight:"bold"}}>
                     Code. Create. Innovate.
            </h1>
              
        </div>
  
        <div className='flex gap-3'>
                <Button >Download CV</Button>
                <Button >My Projects</Button>
        </div>
 
     </div>
  )
}

export default LandingPage
