import {useState,useEffect} from 'react'
import { ModeToggle } from './mode-toggle'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer"

function NavigationBar() {

  const [scrolled,setScrolled] =useState(false);

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
  },[])


  interface NavItem{
    name:string,
    link:string
  }

  const navItem:NavItem[] = [
    {
      name: "About",
      link: "#about"
    },
    {
      name: "Projects",
      link: "#projects"
    },
    // {
    //   name: "Certificate",
    //   link: "#about"
    // },
    {
      name: "Contact",
      link: "#contact"
    },

  ]

  return (
    <nav className={`max-w-screen flex p-3  w-full fixed top-0 transition-all duration-300 ease-in z-50 ${scrolled?"border-b-1 bg-background shadow-lg shadow-accent ":""}`}>
   
  <div className='items-center flex flex-1 justify-center md:flex-[.20] 
     '>
         <a href="" className='text-2xl font-bold'>JBT</a>
     </div>

<div className=' flex justify-end md:hidden'>
{/* <DropdownMenu >
  <DropdownMenuTrigger className='cursor-pointer ' ><Menu/></DropdownMenuTrigger>
  <DropdownMenuContent className='w-lvh '>
  
    {
          navItem.map((item)=>{
            return(
              <DropdownMenuItem key={item.name}>
       <a href={item.link}  >{item.name}</a>
        </DropdownMenuItem>
       
            )
          })
        }
 
  </DropdownMenuContent>
</DropdownMenu> */}

<Drawer direction="right">
        <DrawerTrigger asChild>
          <div className='cursor-pointer flex justify-center items-center'><Menu/></div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-full w-full ">
           
            <div className="p-4">
               {
          navItem.map((item)=>{
            return(
              <div className='flex py-2 ps-3 hover:bg-accent'>

            
              <DrawerClose asChild key={item.name}>
       <a href={item.link}  >{item.name.toLocaleUpperCase()}</a>
        </DrawerClose>
          </div>
       
            )
          })
        }
 
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
</div>

      <ul className='hidden md:flex gap-10 flex-1 justify-center text-chart-2 ms-[-15%] '>
        {
          navItem.map((item)=>{
            return(
              <div key={`${item.name}-md`} className="relative inline-block mt-2
          transition-colors duration-300
         hover:text-accent-foreground
         after:content-[''] after:absolute 
         after:left-0 after:bottom-0 
         after:h-[2px] after:w-0 
         after:bg-accent-foreground 
         after:transition-all after:duration-300 
         hover:after:w-full">
       <a href={item.link} >{item.name}</a>
              </div>
       
            )
          })
        }
     
      </ul>

       <div className='ms-2 items-center flex justify-end '>
             <ModeToggle/>
     </div>
    </nav>
  )
}

export default NavigationBar
