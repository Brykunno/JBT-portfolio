import React, { type ReactNode } from 'react'
import { Facebook,Instagram } from 'lucide-react';

interface ContactInterface{
    logo:ReactNode,
    link:string
}

const contacts:ContactInterface[] = [{
    logo:<Facebook/>,
    link:"fb.com"
}]

function Socials() {
  return (
    <div>{contacts[0].logo}</div>
  )
}

export default Socials