
import './App.css'
import { ThemeProvider } from "@/components/theme-provider"

import Hero from './pages/Hero'
import NavigationBar from './components/navigation-bar'
import type { ReactNode } from 'react'
import About from './pages/About'
import { ArrowUp } from 'lucide-react'
import Projects from './pages/Projects'

function App() {

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


  ]


  return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
<div>

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



<div className='bg-chart-4 fixed right-10 bottom-10 rounded-[50%] '>
  <a href="#hero" ><ArrowUp size={50}/></a>
</div>



</div>
    </ThemeProvider>
  )
}

export default App
