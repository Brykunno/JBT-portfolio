import React, { type ReactNode } from 'react'

import "./assets/socials.css"
interface ContactInterface{
    logo:ReactNode,
    link:string
}
import { FaFacebook,FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const contacts:ContactInterface[] = [
  {
    logo:<FaFacebook className='logos' style={{ color: 'blue' }} />,
    link:"https://www.fb.com"
  },
    {
    logo:<FaInstagram className='logos'/>,
    link:"https://www.fb.com"
  },
      {
    logo:<FaLinkedin className='logos'/>,
    link:"https://www.fb.com"
  },
      {
    logo:<FaXTwitter className='logos'/>,
    link:"https://www.fb.com"
  },
      {
    logo:<FaGithub className='logos'/>,
    link:"https://www.fb.com"
  },
]

function Socials() {
  return (
    <div className='flex gap-5 socials'  >
      {
        contacts.map((items)=>{
          return(
            <a href={items.link} target='blank' >
              {items.logo}
            </a>
          )
        })
      }
    </div>
  )
}

export default Socials