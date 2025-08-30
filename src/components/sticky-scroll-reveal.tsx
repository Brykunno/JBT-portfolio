"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Card,CardContent } from '@/components/ui/card'
import { div } from "motion/react-client";
import { Button } from "./ui/button";

import {
  Dialog,
  DialogContent,
  DialogContentFull,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    tags?:React.ReactNode | any;
    link?:React.ReactNode | any;
    content?: React.ReactNode | any;
    deployed?:boolean;
    preview?:React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });





  return (
    <motion.div
  
      className="relative flex gap-10 h-[30rem] max-w-7xl justify-center space-x-10 overflow-y-auto rounded-md p-10 scrollbar-hide "
      ref={ref}

        initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold "
              >
                     <Card 
        className={cn(
          " mb-3  rounded-lg lg:hidden hover:shadow-lg group  p-0  cursor-pointer  hover:scale-[1.05] transition-all duration-300",
          contentClassName,
        )}>
 {/* <Card className='group relative h-full w-full p-0 overflow-hidden cursor-pointer '> */}
  <CardContent className='p-0 h-full w-full'>
    { content[activeCard].content?(
<img src={`${content[activeCard].content ?? null}`} alt="" className='rounded-xl h-full w-full' />
    ) : 
    (<div>NO IMAGE</div>)
    }
   
      <div className="absolute bottom-0 left-0 w-full h-1/3 
              bg-gradient-to-t from-accent/70 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
               <Dialog>
  <DialogTrigger><Button className="cursor-pointer">Preview</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        <img src="/src/assets/test.png"/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
                  </div>
  </CardContent>
</Card>

                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-lg text-justify "
              >
                {item.description}
                <div className="mt-3 flex gap-3 text-left">
                  {item.tags?
                  [...item.tags].map((data)=>(<div className="bg-chart-5 px-1 rounded-xl ring">{data}</div>))
                  :(<></>)}
                </div>
                
                {item.link||""}
      
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

        <Card 
        className={cn(
          "sticky top-10 hidden h-70 w-xl overflow-hidden rounded-lg lg:block hover:shadow-lg group  p-0  cursor-pointer  hover:scale-[1.05] transition-all duration-300",
          contentClassName,
        )}>
 {/* <Card className='group relative h-full w-full p-0 overflow-hidden cursor-pointer '> */}
  <CardContent className='p-0 h-full w-full'>
    { content[activeCard].content?(
<img src={`${content[activeCard].content ?? null}`} alt="" className='rounded-xl h-full w-full' />
    ) : 
    (<div>NO IMAGE</div>)
    }
   
      <div className="absolute bottom-0 left-0 w-full h-1/3 
              bg-gradient-to-t from-accent/70 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                

                {
                  content[activeCard].deployed?(<><a href={content[activeCard].preview} target="blank"> <Button className="cursor-pointer">Preview</Button></a></>):(<><Dialog>
  <DialogTrigger>
    <Button className="cursor-pointer">Preview</Button>
  </DialogTrigger>
  <DialogContentFull >
    <DialogHeader className="p-5">
      <DialogTitle className="text-center text-3xl">{content[activeCard].title}</DialogTitle>
      <DialogDescription className="grid grid-cols-3">
     {
      
  content[activeCard].preview?.map((data: any, index: number) => {
    return (
      <div
        key={index}
        className="relative m-3 hover:shadow-lg group cursor-pointer hover:scale-[1.05] transition-all duration-300"
      >
        <a href={data.image} target="_blank" rel="noopener noreferrer">
          <img src={data.image} alt={data.description} className="w-full h-auto object-cover" />

          <div className="absolute inset-0  bg-gradient-to-t from-accent/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
            <span className="font-bold text-2xl text-white text-center">
              {data.description}
            </span>
          </div>
        </a>
      </div>
    )
  })
}
      </DialogDescription>
    </DialogHeader>
  </DialogContentFull>
</Dialog></>)
                }

                
                  </div>
  </CardContent>
</Card>

     
      {/* <div
      
        className={cn(
          "sticky top-10 hidden h-70 w-100 overflow-hidden rounded-md lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div> */}
    </motion.div>
  );
};
