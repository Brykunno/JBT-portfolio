
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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
      <div className="min-h-screen max-w-screen flex flex-col bg-background">
        <Spotlight />
        <NavigationBar />
        <main className="flex-1 w-full flex flex-col gap-8 px-2 sm:px-4 md:px-8 lg:px-16 mx-auto ">
          {sections.map((item) => (
            <section
              key={item.id}
              id={item.id}
              className="flex flex-col items-center justify-center min-h-[80vh] py-8 sm:py-12 md:py-16 "
            >
              {item.page}
            </section>
          ))}
        </main>
        <AnimatePresence>
          {scrolled ? (
            <motion.div
              key="box"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
              className="bg-chart-4 fixed right-11 md:right-4 bottom-4 rounded-full transition-all duration-300 ease-in shadow-lg z-50"
            >
              <a href="#hero">
                <ArrowUp size={36} />
              </a>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App
