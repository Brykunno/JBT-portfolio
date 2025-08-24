import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div>


      <div className='flex flex-1 justify-center  '>
        <div className='text-center'>
            <h1 className='text-3xl text-chart-2'>Hi, I'm<span className='font-bold text-chart-1'> John Bryan Tisado</span></h1>
       
            <h1 className='text-3xl text-chart-2'>A Passionate <span className='font-bold text-chart-1'>Full Stack Developer</span> </h1>
              <div className='flex justify-center mt-3 gap-3'>
                <Button className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl border-1 border-accent-foreground' variant={"outline"}>Download CV</Button>
               <a href="#projects">  <Button className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl border-1 border-accent-foreground' variant={"outline"}> My Projects <ArrowDown/></Button></a>
              </div>
        </div>
      </div>


      {/* <div className='flex flex-1 justify-center '>
  <div className='bg-blue-500 h-[500px] w-[500px] rounded-[50%]'>

  </div>
      </div> */}
    
    </div>
  )
}

export default Hero
