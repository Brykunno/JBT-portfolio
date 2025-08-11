import React from 'react'
import "./assets/about.css"
import Stacks from './Stacks'
function About() {
  return (
    <div className='flex gap-5'>
      <div className='right flex-1 '>
        <h1 className='px-5 '>
          Aspiring Junior Web Developer with a strong foundation in full-stack development using modern technologies such 
as PHP, Laravel, React.js, and Django REST Framework. Proficient in building scalable RESTful APIs, designing 
responsive UIs, and implementing secure authentication systems using JWT. Eager to apply clean code principles, 
optimize performance, and contribute to collaborative agile development environments that prioritize 
maintainability and user experience.
        </h1>

      </div>
      <div className='left flex-1'>
<Stacks></Stacks>
      </div>
        
    </div>
  )
}

export default About
