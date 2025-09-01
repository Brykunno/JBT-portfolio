
import './App.css'
import { ThemeProvider } from "@/components/theme-provider"

import Hero from './pages/Hero'
import NavigationBar from './components/navigation-bar'
import { useEffect, useState, type ReactNode } from 'react'
import About from './pages/About'
import { ArrowUp } from 'lucide-react'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import { motion } from "motion/react";
import { AnimatePresence } from 'motion/react'
import { Spotlight } from './components/ui/spotlight-new'
import { Toaster } from "@/components/ui/sonner"

function App() {

   const [scrolled,setScrolled] =useState(false);
  
    useEffect(()=>{
      const onScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", onScroll);
    },[])
  

  interface Sections{
    id:string,
    page: ReactNode,

  }

  const sections: Sections[] = [
 {
  id:"hero",
page:<Hero/>
 },

  {
  id:"about",
page:<About/>
 },
  {
  id:"projects",
page:<Projects/>
 },
  {
  id:"contact",
page:<Contact/>
 },


  ]


  return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          
   
<div>
<Spotlight></Spotlight>
  <NavigationBar/>

  {
    sections.map((item)=>{
      return(
        <div key={item.id} className='flex items-center h-lvh  justify-center ' id={item.id}>
{item.page}
</div>
      )
    })
  }

<AnimatePresence>
  {scrolled? 
<motion.div key="box" 
initial={{ opacity: 0, y:80 }}
            animate={{ opacity: 1, y:0 }}
            transition={{
                duration: 0.4,
                
            }}
exit={{ opacity: 0 }} className={`${scrolled?"show":"hidden"} bg-chart-4 fixed right-10 bottom-10 rounded-[50%] transition-all duration-300 ease-in `} >
  <a href="#hero" ><ArrowUp size={50}/></a>
</motion.div> : null}
</AnimatePresence>



</div>
 <Toaster/>
    </ThemeProvider>
  )
}

export default App
