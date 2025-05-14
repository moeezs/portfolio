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
      className={cn("overflow-hidden", liveUrl && "cursor-pointer", className)}
      onClick={liveUrl ? () => window.open(liveUrl, '_blank') : undefined}
      {...props}
    >
      <CardContent className="p-1.5 md:p-2">
        {/* Header */}
        <div className="flex justify-between items-start mb-1">
          {/* Left side */}
          <div className="flex items-center gap-1">
            <div className="h-5 w-5 md:h-6 md:w-6 rounded-md bg-muted flex items-center justify-center">
              {typeof icon === 'string' ? 
                <Image src={icon} alt={title} width={16} height={16} /> : 
                icon}
            </div>
            <div className="font-medium text-[10px] md:text-xs flex items-center">
              {title}
              {liveUrl && <ExternalLinkIcon className="ml-0.5 h-2 w-2 md:h-3 md:w-3" />}
            </div>
          </div>
          
          {/* Right side - buttons */}
          <div className="flex gap-1">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-0.5 text-[8px] md:text-[10px] text-muted-foreground px-1 rounded-sm">
                <Github className="h-2 w-2 md:h-3 md:w-3" /><span>GitHub</span>
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-0.5 text-[8px] md:text-[10px] text-muted-foreground px-1 rounded-sm">
                <Video className="h-2 w-2 md:h-3 md:w-3" /><span>Demo</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Description */}
        <div className="text-[8px] md:text-[10px] text-muted-foreground line-clamp-1 mb-1">{description}</div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="bg-muted text-muted-foreground px-1 text-[6px] md:text-[8px] rounded-sm">
              {tag}
            </span>
          ))}
          {tags.length > 2 && <span className="text-[6px] md:text-[8px] text-muted-foreground">+{tags.length - 2}</span>}
        </div>
      </CardContent>
    </Card>
  )
}