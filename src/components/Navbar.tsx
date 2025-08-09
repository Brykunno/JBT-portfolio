import React from 'react'
import "../styles/navbar.css"

interface LinkItem{
    name: string;
    link: string;
}

const links:LinkItem[] = [
    {
        name:"About me",
        link:"#about"
    },
     {
        name:"Projects",
        link:"#project"
    },
         {
        name:"Certificates",
        link:"#certificate"
    },
    {
        name:"Contact",
        link:"#contact"
    }

]


function Navbar() {
  return (
    <nav>
      <ul className='links'>
    {
        links.map((items)=>{
            return (
                <li> <a href={items.link}>{items.name}</a></li>
            )
        })
    }
      </ul>

     


     
    </nav>
  )
}

export default Navbar
