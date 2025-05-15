'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building, Download } from 'lucide-react'
import { Button } from './ui/button'

// Type definitions for experience data
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

interface ExpCardProps extends ExperienceItem {
  index: number;
}

const ExperiencePage = () => {
  return (
    <div id='experience' className="py-8 max-w-4xl mx-auto px-4">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">My Experience</h2>
        <p className="text-muted-foreground text-xs md:text-sm max-w-md mx-auto">
          A summary of my professional journey and the skills I've developed along the way.
        </p>

        <Button variant="outline" size="sm" className="mt-4 text-xs">
          <Download className="mr-2 h-3 w-3" />
          Download Resume
        </Button>
      </div>
      
      {/* Experience Timeline */}
      <div className="relative pl-6 md:pl-8 border-l-2 border-muted ml-2 md:ml-4 space-y-8 md:space-y-12">
        {experiences.map((exp, index) => (
          <ExpCard key={index} {...exp} index={index} />
        ))}
        
        {/* Timeline start indicator */}
        <div className="absolute -top-2 -left-[5px] w-3 h-3 rounded-full bg-primary"></div>
        
        {/* Timeline end indicator */}
        <div className="absolute -bottom-2 -left-[5px] w-3 h-3 rounded-full bg-primary"></div>
      </div>
    </div>
  )
}

// Experience Card Component
const ExpCard = ({ role, company, period, description, skills, index }: ExpCardProps) => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[25px] md:-left-[29px] mt-1.5 w-3 md:w-4 h-3 md:h-4 rounded-full bg-primary border-2 md:border-4 border-background"></div>
      
      <div className="mb-4">
        <h4 className="text-base md:text-lg font-medium">{role}</h4>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
          <div className="flex items-center gap-1.5">
            <Building size={14} className="text-muted-foreground" />
            <span className="text-sm">{company}</span>
          </div>
          <span className="hidden sm:inline text-muted-foreground">•</span>
          <span className="bg-muted text-xs rounded-full px-2.5 py-0.5 w-fit">{period}</span>
        </div>
        <p className="text-muted-foreground text-xs md:text-sm mb-3">{description}</p>
        
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, i) => (
            <span 
              key={i} 
              className="text-[10px] md:text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// Experience data
const experiences: ExperienceItem[] = [
  {
    role: "Robotics Instructor",
    company: "Tech Solutions Inc.",
    period: "2024-Present",
    description: "Leading front-end development for client projects using React and TypeScript. Implemented responsive designs and optimized performance across multiple web applications.",
    skills: ["React", "TypeScript", "Next.js", "TailwindCSS", "REST APIs"]
  },
  {
    role: "Junior Full Stack Developer",
    company: "Digital Innovations",
    period: "2023-2024",
    description: "Developed and maintained full-stack web applications. Collaborated with design and backend teams to implement new features and improve existing functionality.",
    skills: ["JavaScript", "Node.js", "MongoDB", "Express", "React"]
  },
  
]

export default ExperiencePage