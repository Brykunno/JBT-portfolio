import React, { useEffect, useState } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { animate,inView } from 'motion';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion";

function About() {

  
  interface Logos{
    name:string,
    logo:string
  }

  const logos:Logos[] = [
    {
      name:"html5",
      logo: "/icons/html.svg"
    },
      {
      name:"css3",
      logo: "/icons/css3-original.svg"
    },
         {
      name:"javascript",
      logo: "/icons/javascript-original.svg"
    },
         {
      name:"bootstrap",
      logo: "/icons/bootstrap-original.svg"
    },
     {
      name:"tailwindcss",
      logo: "/icons/tailwindcss-original.svg"
    },
         {
      name:"react",
      logo: "/icons/react-original.svg"
    },
       {
      name:"typescript",
      logo: "/icons/typescript-original.svg"
    },
    {
      name:"php",
      logo: "/icons/php-original.svg"
    },
    {
      name:"python",
      logo: "/icons/python-original.svg"
    },
     {
      name:"mysql",
      logo: "/icons/mysql-original.svg"
    },
      {
      name:"laravel",
      logo: "/icons/laravel-original.svg"
    },
      {
      name:"django-rest-framework",
      logo: "/icons/djangorest-plain-wordmark.svg"
    },
    {
      name:"axios",
      logo: "/icons/axios-plain-wordmark.svg"
    },
      {
      name:"postman",
      logo: "/icons/postman-original.svg"
    },
       {
      name:"git",
      logo: "/icons/git-original.svg"
    },
  ]

  return (
    
    <div className='text-center max-w-7xl min-w-2xs '>
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
      <div className=' max-w-dvh  px-5 mx-auto mb-3'>
  <h1 className='text-4xl font-bold my-5'>
          ABOUT ME
      </h1>
      {/* <p className='text-base'>
        Aspiring Junior Web Developer with a strong foundation in full-stack development using modern technologies such as PHP, Laravel, React.js, and Django REST Framework. Proficient in building scalable RESTful APIs, designing responsive UIs, and implementing secure authentication systems using JWT. Eager to apply clean code principles, optimize performance, and contribute to collaborative agile development environments that prioritize maintainability and user experience.
      </p> */}

      <div className=" gap-8 mt-5 w-full ">
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-none shadow-lg">
          <CardHeader>
            <CardTitle className='text-lg'>Hey, I'm John Bryan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base md:text-lg text-muted-foreground">
              Aspiring Junior Web Developer with a strong foundation in full-stack development using modern technologies such as PHP, Laravel, React.js, and Django REST Framework. Proficient in building scalable RESTful APIs, designing responsive UIs, and implementing secure authentication systems using JWT. Eager to apply clean code principles, optimize performance, and contribute to collaborative agile development environments that prioritize maintainability and user experience.
            </p>
          </CardContent>
        </Card>
      </div>
      </div>
    
     


    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
    <div
      className="relative overflow-hidden max-w-7xl p-4 group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div
        className="flex gap-5 w-full flex-nowrap"
        style={{
          animation: "marquee 20s linear infinite",
          animationPlayState: "running"
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
      >
        {[...logos, ...logos].map((item, index) => (
          <Tooltip>
           <TooltipTrigger><Card className="flex-shrink-0 w-28 p-4 cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl shadow-accent-foreground hover:ring-1  transition ease-in duration-200" key={`${item.name}-${index}}`}>
            <CardContent className="p-0 flex justify-center items-center">
              <img src={item.logo} alt={item.name} className=" h-8 w-8 md:h-12 md:w-12" />
            </CardContent>
          </Card>
          <TooltipContent>
    <p>{item.name}</p>
  </TooltipContent>
          </TooltipTrigger>
          </Tooltip>
        ))}
      </div>
    </div>


  {/* content */}
</motion.div>

    </div>
  )
}

export default About
