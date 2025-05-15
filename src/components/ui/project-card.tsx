"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ExternalLinkIcon, Github, Video } from "lucide-react"
import Image from "next/image"

export interface ProjectCardProps {
  icon?: string | React.ReactNode
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  liveUrl?: string
  className?: string
}

export function ProjectCard({
  icon, title, description, tags, githubUrl, demoUrl, liveUrl, className, ...props
}: ProjectCardProps & React.ComponentProps<typeof Card>) {
  return (
    <Card 
      className={cn("overflow-hidden", liveUrl && "cursor-pointer", className, "py-1 md:py-6")}
      onClick={liveUrl ? () => window.open(liveUrl, '_blank') : undefined}
      {...props}
    >
      <CardContent className="p-1.5 md:p-2">
        {/* Header */}
        <div className="flex justify-between items-start mb-1">
          {/* Left side */}
          <div className="flex flex-col items-left gap-1">
            <div className="h-fit w-5 md:h-6 md:w-6 rounded-md bg-muted flex items-center justify-center">
              {typeof icon === 'string' ? 
                <Image src={icon} alt={title} width={22} height={22} /> : 
                icon}
            </div>
            <div className="font-bold text-[16px] md:text-[17px] flex items-center">
              {title}
              {liveUrl && <ExternalLinkIcon className="ml-1 h-4 w-4 md:h-6 md:w-6" />}
            </div>
          </div>
          
          {/* Right side - buttons */}
          <div className="flex md:flex-col gap-3">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-0.5 text-[8px] md:text-[10px] text-muted-foreground px-1 rounded-sm">
                <Github className="h-3 w-3 md:h-4 md:w-4" /><span>GitHub</span>
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-0.5 text-[8px] md:text-[10px] text-muted-foreground px-1 rounded-sm">
                <Video className="h-3 w-3 md:h-4 md:w-4" /><span>Demo</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Description */}
        <div className="text-[13px] md:text-[14px] text-muted-foreground mb-1">{description}</div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, i) => (
            <span key={i} className="bg-muted text-muted-foreground px-1 text-[9px] md:text-[11px] rounded-sm">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}