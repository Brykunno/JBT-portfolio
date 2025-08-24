import { StickyScroll } from '@/components/sticky-scroll-reveal'
import React from 'react'
import { Card,CardContent } from '@/components/ui/card'

function Projects() {


  return (
    <div className=' '>
      <StickyScroll content={[
        
        {title: "Quexgen",
    description: "Developed a full-stack web application for AI-powered exam generation aligned with Bloom’s Taxonomy, featuring scalable REST APIs (Django REST Framework, MySQL), a dynamic React.js frontend, secure JWT authentication with Axios integration, and AI-driven question generation tailored to cognitive levels for effective assessments.",
    tags:["react","tailwind","django rest framework","mysql"],
    content:"/src/assets/test.png",},

     {title: "any1",
    description: "any1",
    tags:"react",
    content: "any1",},

     {title: "",
    description: "any1",
    content: "any1",}
    
    
    ]}/>
    </div>
  )
}

export default Projects
