'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  CodeIcon, Coffee, Headphones, Laptop, BookOpen, 
  GraduationCap, ChevronRight,
  Piano
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Marquee } from "@/components/magicui/marquee"
import { motion } from "framer-motion"

const dragTextAnimation = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

interface FunFactType {
  title: string;
  description: string;
  icon: React.ElementType;
  emoji: string;
}

const techLogos = [
  { name: "React", src: "/tech-logos/react.svg", alt: "React Logo" },
  { name: "Next.js", src: "/tech-logos/nextjs.png", alt: "Next.js Logo" },
  { name: "Tailwind", src: "/tech-logos/tailwind.png", alt: "Tailwind CSS Logo" },
  { name: "Node.js", src: "/tech-logos/nodejs.png", alt: "Node.js Logo" },
  { name: "MongoDB", src: "/tech-logos/mongodb.webp", alt: "MongoDB Logo" },
  { name: "Git", src: "/tech-logos/git.png", alt: "Git Logo" },
  { name: "Flask", src: "/tech-logos/flask.png", alt: "Flask Logo" },
  { name: "Express", src: "/tech-logos/express.png", alt: "Express Logo" },
  { name: "PostgreSQL", src: "/tech-logos/postgresql.png", alt: "PostgreSQL Logo" },
  { name: "Firebase", src: "/tech-logos/firebase.png", alt: "Firebase Logo" },
  { name: "Docker", src: "/tech-logos/docker.png", alt: "Docker Logo" },
  //{ name: "Nest.js", src: "/tech-logos/nestjs.png", alt: "Nest.js Logo" },
  //{ name: "GraphQL", src: "/tech-logos/graphql.png", alt: "GraphQL Logo" },
  { name: "Supabase", src: "/tech-logos/supabase.png", alt: "Supabase Logo" },
  { name: "Prisma", src: "/tech-logos/prisma.png", alt: "Prisma Logo" },
  //{ name: "AWS", src: "/tech-logos/aws.png", alt: "AWS Logo" },
  //{ name: "Azure", src: "/tech-logos/azure.png", alt: "Azure Logo" },
  { name: "TensorFlow", src: "/tech-logos/tensorflow.png", alt: "TensorFlow Logo" },
  //{ name: "PyTorch", src: "/tech-logos/pytorch.png", alt: "PyTorch Logo" },
]

const languages = [
  { name: "Python", src: "/tech-logos/python.png", alt: "Python Logo" },
  { name: "JavaScript", src: "/tech-logos/javascript2.png", alt: "JavaScript Logo" },
  { name: "TypeScript", src: "/tech-logos/typescript.png", alt: "TypeScript Logo" },
  { name: "HTML", src: "/tech-logos/html.png", alt: "HTML Logo" },
  { name: "CSS", src: "/tech-logos/css.png", alt: "CSS Logo" },
  { name: "PHP", src: "/tech-logos/php.png", alt: "PHP Logo" },
  { name: "Java", src: "/tech-logos/java.png", alt: "Java Logo" },
  //{ name: "C++", src: "/tech-logos/c++.png", alt: "C++ Logo" },
  //{ name: "C#", src: "/tech-logos/cs.png", alt: "C# Logo" },
  { name: "C", src: "/tech-logos/c.png", alt: "C Logo" },
  { name: "Swift", src: "/tech-logos/swift.svg", alt: "Swift Logo" },
  { name: "SQL", src: "/tech-logos/sql.png", alt: "SQL Logo" },
  { name: "MATLAB", src: "/tech-logos/matlab.png", alt: "MATLAB Logo" },
  { name: "Haskell", src: "/tech-logos/haskell.png", alt: "Haskell Logo" },
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
              src="/pfp.jpg" 
              alt="Moeez Shaikh"
              fill
              className="object-cover"
              priority
            />

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
            
            <div className="p-3 md:p-4 bg-background rounded-b-lg border-x border-b min-h-[90px] md:min-h-[110px] relative">
              <p className="text-xs md:text-sm text-muted-foreground pr-16">{funFacts[activeFact].description}</p>
              
              {/* Emoji Container */}
              <div className="absolute top-3 right-4 flex flex-col items-center">
                {/* Draggable Emoji */}
                <motion.div
                  drag
                  dragSnapToOrigin={true}
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  dragElastic={0.7}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                  whileTap={{ scale: 1.2 }}
                  whileDrag={{ scale: 1.2 }}
                  className="text-4xl md:text-5xl cursor-grab active:cursor-grabbing z-100"
                >
                  {funFacts[activeFact].emoji}
                </motion.div>
                
                {/* Static "Drag me!" text */}
                <motion.span 
                  {...dragTextAnimation} 
                  className="text-[10px] md:text-xs text-primary font-medium mt-3 z-99"
                >
                  Drag me!
                </motion.span>
              </div>
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
                <p className="text-muted-foreground text-[11px] md:text-xs">B.A.Sc. Computer Science • April 2028</p>
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
      
      <div className="space-y-3 md:space-y-5">
        <div>
          <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 flex items-center gap-2">
            <span className="h-4 w-1 bg-primary rounded-full"></span>
            Languages and Technologies
          </h3>
          
          <div className="bg-muted/30 rounded-lg p-1 md:p-2 w-full overflow-hidden">
            {/* Languages Marquee */}
            <Marquee className="py-1 md:py-1.5" pauseOnHover reverse>
              {languages.map((lang, index) => (
                <div key={index} className="flex flex-col items-center mx-4">
                  <div className="relative w-7 h-7 md:w-10 md:h-10 bg-background rounded-md flex items-center justify-center p-1.5 shadow-sm">
                    <Image
                      src={lang.src}
                      alt={lang.alt}
                      width={36}
                      height={36}
                      className="object-contain rounded-md m-0.1"
                    />
                  </div>
                  <span className="text-[10px] md:text-xs mt-1 font-medium hidden md:block">{lang.name}</span>
                </div>
              ))}
            </Marquee>
            
            <div className="w-full h-px bg-muted my-2 md:my-3"></div>
            
            {/* Tech Stack Marquee */}
            <Marquee className="py-1 md:py-1.5" pauseOnHover>
              {techLogos.map((tech, index) => (
                <div key={index} className="flex flex-col items-center mx-4">
                  <div className="relative w-7 h-7 md:w-10 md:h-10 bg-background rounded-md flex items-center justify-center p-1.5 shadow-sm">
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      width={36}
                      height={36}
                      className="object-contain rounded-md m-0.1"
                    />
                  </div>
                  <span className="text-[10px] md:text-xs mt-1 font-medium hidden md:block">{tech.name}</span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

const funFacts: FunFactType[] = [
  { 
    title: "Code Time", 
    description: "I wrote my first line of code when I was 10, using Atom (my first code editor) to make a simple circle that followed my mouse. That sparked my love for programming.",
    icon: CodeIcon,
    emoji: "💻"
  },
  { 
    title: "Coffee Fan", 
    description: "I consume at least 3 cups of coffee daily while programming. My favorite is a double-shot espresso.",
    icon: Coffee,
    emoji: "☕"
  },
  { 
    title: "Music", 
    description: "I have 20+ playlists for different coding moods & tasks. My favourite artists are Drake, Jeff Buckley, Radiohead, and Mac DeMarco.",
    icon: Headphones,
    emoji: "🎧"
  },
  { 
    title: "Reading", 
    description: "I absolutely love to read classic books. One recommendation I have for everyone is to read White Nights by Fyodor Dostoevsky once in their lives.",
    icon: Laptop,
    emoji: "📚"
  },
  { 
    title: "Learning", 
    description: "Currently diving deep into AI and machine learning concepts. I'm fascinated by these emerging technologies.",
    icon: BookOpen,
    emoji: "🤖"
  },
  { 
    title: "Piano", 
    description: "I learned to play the piano a year ago and can play a lot of my favorite songs. I'm still learning and improving.",
    icon: Piano,
    emoji: "🎹"
  }
]

export default AboutPage