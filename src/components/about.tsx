'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  CodeIcon, Coffee, Headphones, Laptop, BookOpen, Plane, 
  GraduationCap, ChevronRight,
  Piano
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Marquee } from "@/components/magicui/marquee"


interface FunFactType {
  title: string;
  description: string;
  icon: React.ElementType;
}

// Tech logos with their respective data
const techLogos = [
  { name: "React", src: "/tech-logos/react.svg", alt: "React Logo" },
  { name: "Next.js", src: "/tech-logos/nextjs.svg", alt: "Next.js Logo" },
  { name: "TypeScript", src: "/tech-logos/typescript.svg", alt: "TypeScript Logo" },
  { name: "JavaScript", src: "/tech-logos/javascript.svg", alt: "JavaScript Logo" },
  { name: "Tailwind", src: "/tech-logos/tailwind.svg", alt: "Tailwind CSS Logo" },
  { name: "Node.js", src: "/tech-logos/nodejs.svg", alt: "Node.js Logo" },
  { name: "MongoDB", src: "/tech-logos/mongodb.svg", alt: "MongoDB Logo" },
  { name: "Git", src: "/tech-logos/git.svg", alt: "Git Logo" }
]

const mcMasterRed = "#7A0019";

const AboutPage = () => {
  const [activeFact, setActiveFact] = useState(0)

  return (
    <div id='about' className="py-4 md:py-6 max-w-5xl mx-auto px-4 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-center">About Me</h2>
    
      <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-6 mb-3 md:mb-8">
        <div className="w-full md:w-1/4 flex-shrink-0 flex justify-center flex-col">
          <div className="relative w-full aspect-square max-w-[180px] mx-auto md:mx-0 rounded-xl overflow-hidden bg-muted/30 border border-muted shadow-sm">
            <Image 
              src="/Resume.pdf" 
              alt="Moeez Shaikh"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Your Photo
            </div>
          </div>
        </div>

        <div className="hidden md:block w-full md:w-3/4">
          <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center gap-2">
            <span className="h-4 w-1 bg-primary rounded-full"></span>
            Fun Facts
          </h3>
          
          <div className="h-full">
            <div className="flex flex-wrap bg-muted/30 rounded-t-lg p-1 md:p-2">
              {funFacts.map((fact, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFact(index)}
                  className={cn(
                    "py-1.5 px-3 md:py-2 md:px-4 text-xs md:text-sm font-medium transition-all rounded-md flex items-center gap-1.5 my-0.5 mx-0.5",
                    activeFact === index 
                      ? "bg-background text-primary shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
                  )}
                >
                  <fact.icon size={14} className={activeFact === index ? "text-primary" : "text-muted-foreground"} />
                  {fact.title}
                </button>
              ))}
            </div>
            
            <div className="p-3 md:p-4 bg-background rounded-b-lg border-x border-b min-h-[90px] md:min-h-[110px]">
              <p className="text-xs md:text-sm text-muted-foreground">{funFacts[activeFact].description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-3 md:mb-8">
        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center gap-2">
          <span className="h-4 w-1 bg-primary rounded-full"></span>
          Education
        </h3>
        
        <div className="bg-card rounded-lg overflow-hidden shadow-sm">
          <div style={{ background: `linear-gradient(to right, ${mcMasterRed}, ${mcMasterRed}10)` }} className="p-3 md:p-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div style={{ backgroundColor: `${mcMasterRed}30` }} className="p-1.5 md:p-2 rounded-full">
                <GraduationCap size={30} className="md:h-5 md:w-5" />
              </div>
              <div>
                <h4 className="text-sm md:text-base font-medium">McMaster University</h4>
                <p className="text-muted-foreground text-[11px] md:text-xs">B.A.Sc. Computer Science • Expected Grad: May 2028</p>
              </div>
            </div>
          </div>
          
          <div className="p-3 md:p-4">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] md:text-xs px-2 py-0.5 md:px-2.5 md:py-1 bg-muted/40 rounded-full">
                <ChevronRight size={10} className="md:h-3 md:w-3" style={{ color: mcMasterRed }} />
                McMaster Robosub Club
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] md:text-xs px-2 py-0.5 md:px-2.5 md:py-1 bg-muted/40 rounded-full">
                <ChevronRight size={10} className="md:h-3 md:w-3" style={{ color: mcMasterRed }} />
                McMaster Drone and Aerial Club
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center gap-2">
          <span className="h-4 w-1 bg-primary rounded-full"></span>
          Tech Stack
        </h3>
        
        <div className="bg-muted/30 rounded-lg p-1 md:p-2 w-full overflow-hidden">
          <Marquee className="py-2 md:py-3" pauseOnHover>
            {techLogos.map((tech, index) => (
              <div key={index} className="flex flex-col items-center mx-4 md:mx-5">
                <div className="relative w-8 h-8 md:w-10 md:h-10 bg-background rounded-md flex items-center justify-center p-1.5 md:p-2 shadow-sm">
                  <div className="flex items-center justify-center text-xs md:text-sm font-medium">
                    {tech.name.substring(0, 2)}
                  </div>
                </div>
                <span className="text-[10px] md:text-xs mt-1 md:mt-1.5 font-medium">{tech.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

const funFacts: FunFactType[] = [
  { 
    title: "Code Time", 
    description: "I wrote my first line of code when I was 10, using Atom (my first code editor) to make a simple circle that followed my mouse. That sparked my love for programming.",
    icon: CodeIcon 
  },
  { 
    title: "Coffee Fan", 
    description: "I consume at least 3 cups of coffee daily while programming. My favorite is a double-shot espresso.",
    icon: Coffee 
  },
  { 
    title: "Music", 
    description: "I have 20+ playlists for different coding moods & tasks. My favourite artists are Drake, Jeff Buckley, Radiohead, and Mac DeMarco.",
    icon: Headphones 
  },
  { 
    title: "Reading", 
    description: "I absolutely love to read classic books. One recommendation I have for everyone is to read White Nights by Fyodor Dostoevsky once in their lives.",
    icon: Laptop 
  },
  { 
    title: "Learning", 
    description: "Currently diving deep into AI and machine learning concepts. I'm fascinated by these emerging technologies.",
    icon: BookOpen 
  },
  { 
    title: "Piano", 
    description: "I learned to play the piano a year ago and can play a lot of my favorite songs. I'm still learning and improving.",
    icon: Piano 
  }
]

export default AboutPage