'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Building } from 'lucide-react'

// Type definitions for experience data
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  logo?: string;
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
          A summary of my professional journey and the skills I&apos;ve developed along the way.
        </p>
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
const ExpCard = ({ role, company, period, description, skills, logo, index }: ExpCardProps) => {
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
        <div className="flex items-start gap-3">
          {logo && (
            <div className="relative w-10 h-10 rounded-md overflow-hidden bg-background border border-muted flex-shrink-0 shadow-sm hidden sm:block">
              <Image
                src={logo}
                alt={`${company} logo`}
                fill
                className="object-contain p-1 rounded-md"
              />
            </div>
          )}
          
          <div className="flex-1">
            <h4 className="text-base md:text-lg font-medium">{role}</h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
              <div className="flex items-center gap-1.5">
                {logo ? (
                  <div className="relative w-4 h-4 rounded-md overflow-hidden bg-background flex-shrink-0 sm:hidden">
                    <Image
                      src={logo}
                      alt={`${company} logo`}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                ) : (
                  <Building size={14} className="text-muted-foreground" />
                )}
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
        </div>
      </div>
    </motion.div>
  )
}

const experiences: ExperienceItem[] = [
  {
    role: "Robotics Instructor",
    company: "Zebra Robotics",
    period: "2025-Present",
    description: "Teach robotics and programming to students aged 8-18. Develop curriculum and hands-on projects to enhance learning.",
    skills: ["Robotics", "Python", "C++", "Scratch", "STEM Education"],
    logo: "/company-logos/zebra-robotics.png"
  },
  {
    role: "iOS App Developer Intern",
    company: "Career Education Council",
    period: "2023",
    description: "Developed and maintained iOS applications. Collaborated with design and backend teams to implement new features and improve existing functionality.",
    skills: ["Swift", "Xcode", "UIKit", "APIs"],
    logo: "/company-logos/career-education-council.png"
  },
  
]

export default ExperiencePage