
import Button from '../../components/Button'
import { Download } from 'lucide-react';
import Socials from "./socials"


function LandingPage() {
  return (
     <div className='  flex flex-col gap-2 justify-center items-center  '>
       
        <div className='text-center '>

            <h1 style={{padding:5, textTransform:"uppercase", fontWeight:"bold", fontSize:"48px"}}>
                     Code. Create. Innovate.
            </h1>
            <h1 style={{padding:5, textTransform:"uppercase", fontWeight:"bold", fontSize:"24px"}}>
                     Hi, I'm John Bryan R. Tisado 
            </h1>    
        </div>
  
        <div className='flex gap-3'>
                <Button icon={<Download/>}>Download CV</Button>
                <Button >My Projects</Button>
        </div>
            <Socials/>
     </div>
  )
}

export default LandingPage
