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

const socials = [{
 name:"facebook",
 image:"/icons/socials/icons8-facebook.svg",
 link:"https://www.facebook.com/john.bryan.tisado.2024"
},
{
 name:"instagram",
 image:"/icons/socials/icons8-instagram.svg",
  link:"https://www.instagram.com/brykunno/"
},

{
 name:"github",
 image:"/icons/socials/icons8-github.svg",
  link:"https://github.com/Brykunno"
},

{
 name:"linkedin",
 image:"/icons/socials/icons8-linkedin.svg",
  link:"https://www.linkedin.com/in/john-bryan-tisado-58450b2a9/"
},
{
 name:"discord",
 image:"/icons/socials/icons8-discord.svg",
  link:"https://discordapp.com/users/823379909480022086"
},
{
 name:"gmail",
 image:"/icons/socials/icons8-gmail.svg",
  link:"https://mail.google.com/mail/?view=cm&fs=1&to=johnbryantisado@gmail.com&su=Subject&body=Message"
},
]
  return (
    <div>


      <div className='flex flex-1 justify-center'>
        <div className='text-center'>

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
       
            <h1 className='md:text-4xl text-lg text-chart-2'>Hi, I'm<span className='font-bold text-chart-1'> John Bryan Tisado</span></h1>
            <h1 className='md:text-4xl text-lg text-chart-2'>A Passionate <span className='font-bold text-chart-1'>Full Stack Developer</span> </h1>
              <div className='flex justify-center mt-3 gap-3'>
                <Button onClick={downloadCV} className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl border-1 border-accent-foreground' variant={"outline"}>Download CV <Download/></Button>
               <a href="#projects">  <Button className='cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl border-1 border-accent-foreground' variant={"outline"}> My Projects <ArrowDown/></Button></a>
              </div>
              <div className='mt-4 flex gap-2 justify-center  '>
                {
                  socials.map((item,index)=>{
                    return(<div
  key={index}
  className='
    bg-accent 
    rounded-[50%] 
    h-[35px] w-[35px] 
    flex justify-center items-center
    cursor-pointer
    shadow-none
    transition-all duration-300 ease-in-out
    hover:shadow-lg hover:shadow-card-foreground 
    hover:bg-accent-foreground
    hover:scale-110
  '
>
  <a href={item.link} className='flex justify-center items-center'>
    <img src={item.image} alt={item.name} height="24" width="24" />
  </a>
</div>
)
                  })
                }
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
