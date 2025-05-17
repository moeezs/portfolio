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
      className={cn(
        "overflow-hidden relative transition-all duration-300 border-zinc-200/80 dark:border-zinc-800/80",
        liveUrl && "cursor-pointer", 
        className, 
        "py-1 md:py-6",
        "hover:border-primary hover:shadow-md hover:scale-[1.02]"
      )}
      onClick={liveUrl ? () => window.open(liveUrl, '_blank') : undefined}
      {...props}
    >
      <CardContent className="p-1.5 md:p-2">
        <div className="flex justify-between items-start mb-1">
          <div className="flex flex-col items-left gap-1">
            <div className="h-fit w-6 md:h-8 md:w-8 rounded-md bg-muted flex items-center justify-center">
              {typeof icon === 'string' ? 
                <Image src={icon} alt={title} width={40} height={40} className="rounded-sm" /> : 
                icon}
            </div>
            <div className="font-bold text-[16px] md:text-[17px] flex items-center">
              {title}
            </div>
          </div>
          
          <div className="flex md:flex-col gap-3 z-10">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-0.5 text-[9px] md:text-[11px] text-muted-foreground hover:text-primary px-1.5 py-0.5 rounded-sm transition-all hover:bg-primary/5 hover:scale-105 relative z-20">
                <Github className="h-3 w-3 md:h-4 md:w-4" /><span>GitHub</span>
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-0.5 text-[9px] md:text-[11px] text-muted-foreground hover:text-primary px-1.5 py-0.5 rounded-sm transition-all hover:bg-primary/5 hover:scale-105 relative z-20">
                <Video className="h-3 w-3 md:h-4 md:w-4" /><span>Demo</span>
              </a>
            )}
          </div>
        </div>
        
        <div className="text-[10px] md:text-[14px] text-muted-foreground mb-1">{description}</div>
        
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, i) => (
            <span key={i} className="bg-primary/10 text-primary px-1 text-[9px] md:text-[11px] rounded-sm">
              {tag}
            </span>
          ))}
        </div>
        
        {liveUrl && (
          <div className="absolute bottom-1.5 right-2 z-10">
            <ExternalLinkIcon className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground transition-all duration-200 group-hover:text-primary group-hover:translate-y-[-4px]" />
          </div>
        )}
        
        {liveUrl && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-primary/5 transition-all duration-300 z-0"></div>
        )}
      </CardContent>
    </Card>
  )
}