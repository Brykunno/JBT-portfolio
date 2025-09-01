import { Button } from '@/components/ui/button'
import { ArrowDown, Download } from 'lucide-react'
import Typewriter from "typewriter-effect"

function Hero() {
  const downloadCV=()=>{
    const link = document.createElement("a")
    link.href = "/John Bryan Tisado CV.pdf"
    link.download = "John Bryan Tisado CV.pdf"
    link.click();
  }

  return (
    <div>


      <div className='flex flex-1 justify-center  '>
        <div className='text-center'>
          {/* <div className="text-5xl text-chart-2">
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          cursor: "_",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `Hi, I'm <span class="font-bold text-chart-1">John Bryan Tisado</span>`
            )
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              `A Passionate <span class="font-bold text-chart-1">Full Stack Developer</span>`
            )
            .pauseFor(1000)
            .deleteAll()
            .start();
        }}
      />
    </div> */}

    <div className="md:text-5xl text-3xl text-chart-2 my-3">
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
          cursor: "_",
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<span class="font-bold text-chart-1">CREATE</span>`
            )
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              `<span class="font-bold text-chart-1">CODE</span>`
            )
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              `<span class="font-bold text-chart-1">INNOVATE</span>`
            )
            .pauseFor(1000)
            .deleteAll()
            .start();
        }}
      />
    </div>
            <h1 className='md:text-4xl text-2xl text-chart-2'>Hi, I'm<span className='font-bold text-chart-1'> John Bryan Tisado</span></h1>
       
            <h1 className='md:text-4xl text-2xl text-chart-2'>A Passionate <span className='font-bold text-chart-1'>Full Stack Developer</span> </h1>
              <div className='flex justify-center mt-3 gap-3'>
                <Button onClick={downloadCV} className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl border-1 border-accent-foreground' variant={"outline"}>Download CV <Download/></Button>
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
