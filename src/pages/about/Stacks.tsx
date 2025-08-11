import React from 'react'
import "./assets/about.css"

import Fbicon from "../../assets/socials/fb-logo.svg"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
function Stacks() {
  return (
    <div>
     

 <div className="top flex">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
        </div>
 <div className="middle flex">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            
        </div>
        <div className="bottom flex">
            <div className="hexagon"></div>
            <div className="hexagon"></div>
            <div className="hexagon"></div>
        </div>
  
    </div>
  )
}

export default Stacks
