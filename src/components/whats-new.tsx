'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Eye, ChevronRight, Sparkle, Volleyball } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from './ui/dialog'
import Image from 'next/image'

interface Update {
  id: number
  title: string
  description: string
  fullContent: string
  date: string
  image?: string
  icon: React.ElementType
  rotation: number
  colorClass: string
}

const updateColors = {
  blue: "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800/30",
  purple: "bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-800/30",
  green: "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800/30",
  orange: "bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800/30",
  amber: "bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800/30",
  cyan: "bg-cyan-50 border-cyan-200 dark:bg-cyan-950/20 dark:border-cyan-800/30",
  emerald: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800/30",
  rose: "bg-rose-50 border-rose-200 dark:bg-rose-950/20 dark:border-rose-800/30",
  indigo: "bg-indigo-50 border-indigo-200 dark:bg-indigo-950/20 dark:border-indigo-800/30",
  teal: "bg-teal-50 border-teal-200 dark:bg-teal-950/20 dark:border-teal-800/30"
}

const mockUpdates: Update[] = [
  {
    id: 1,
    title: "What's New Section Launches",
    description: "Introducing the new 'What's New' section to keep you updated on my latest projects and learning journey.",
    fullContent: "This section will feature weekly updates on what I've been learning, building, and discovering in my coding journey. Expect insights into new technologies, project highlights, and personal growth milestones. Above you can see an image with the page filled with mock data. That is my goal to atleast fill this page before school starts.",
    date: "2025-07-25",
    icon: Sparkle,
    image: "/whats-new/whats-new.png",
    rotation: -2,
    colorClass: updateColors.blue
  },
  {
    id: 2,
    title: "New Projects Update and New Learning",
    description: "Added new projects to showcase my latest work and learning experiences.",
    fullContent: "This update includes new projects that highlight my newly learned skills in ML. I built a simple ML model to predict the world cup winner and a web app to use the model. Check out the projects section for the project code and demo. I made this in light of the upcoming world cup and to build a project that interests me. I still have a lot to learn in ML, but this is a good start.",
    date: "2025-07-26",
    icon: Volleyball,
    image: "/whats-new/world-cup.png",
    rotation: 2,
    colorClass: updateColors.green
  }

]

function WhatsNew() {
  const [selectedUpdate, setSelectedUpdate] = useState<Update | null>(null)
  const [showAllUpdates, setShowAllUpdates] = useState(false)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getIconStyle = (id: number) => {
    const styles = [
      'shadow-sm border border-primary/20',
      'shadow-md',
      'ring-2 ring-primary/30',
      'shadow-lg border border-muted',
      'ring-1 ring-muted-foreground/30',
      'shadow-sm bg-primary/5',
      'border border-accent/40',
      'shadow-md ring-1 ring-primary/20',
      'border-2 border-muted/50',
      'shadow-lg bg-muted/10',
      'ring-2 ring-accent/20',
      'shadow-sm border border-primary/30'
    ]
    return styles[id % styles.length] || styles[0]
  }

  const getMaxUpdatesForScreen = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 11
      if (window.innerWidth >= 768) return 8
    }
    return 5
  }
  
  const maxUpdates = getMaxUpdatesForScreen()
  const reversedUpdates = [...mockUpdates].reverse()
  const mainGridUpdates = reversedUpdates.slice(0, maxUpdates)
  const hasMoreUpdates = mockUpdates.length > maxUpdates

  return (
    <div id='whats-new' className="py-8 md:py-12 px-4 md:px-6 max-w-6xl mx-auto">
      <div className="mb-8 md:mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">What&apos;s New</h2>
        <p className="text-muted-foreground text-[10px] md:text-sm max-w-2xl mx-auto ">
          Weekly updates on what I&apos;ve been learning, building, and discovering in my coding journey.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {mainGridUpdates.map((update, index) => {
          let hideClasses = ''
          if (index >= 5) hideClasses += ' hidden md:block'
          if (index >= 8) hideClasses += ' hidden lg:block'
          
          return (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: update.rotation 
              }}
              whileHover={{ 
                scale: 1.02, 
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
              transition={{ delay: update.id * 0.1, duration: 0.3 }}
              className={`p-3 md:p-4 border-2 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 ${update.colorClass}${hideClasses}`}
              onClick={() => setSelectedUpdate(update)}
            >
              <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="relative flex-shrink-0">
                  <div className={`p-1.5 md:p-2 rounded-lg bg-background/80 ${getIconStyle(update.id)}`}>
                    <update.icon size={14} className="md:w-4 md:h-4 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-xs md:text-sm mb-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{update.title}</h3>
                </div>
              </div>
              
              <p className="text-[10px] md:text-xs text-muted-foreground mb-2 md:mb-3 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{update.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[9px] md:text-xs text-muted-foreground">
                  <Calendar size={8} className="md:w-2.5 md:h-2.5" />
                  <span>{formatDate(update.date)}</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] md:text-xs text-primary">
                  <Eye size={8} className="md:w-2.5 md:h-2.5" />
                  <span className="hidden sm:inline">Read</span>
                </div>
              </div>
            </motion.div>
          )
        })}

        {hasMoreUpdates && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 1 
            }}
            whileHover={{ 
              scale: 1.02, 
              rotate: 0,
              zIndex: 10,
              transition: { duration: 0.2 }
            }}
            transition={{ delay: 0.6, duration: 0.3 }}
            className="p-3 md:p-4 border-2 border-dashed border-muted-foreground/30 cursor-pointer hover:border-primary/50 transition-all duration-300 bg-muted/20 hover:bg-muted/40 flex flex-col items-center justify-center"
            onClick={() => setShowAllUpdates(true)}
          >
            <div className="p-2 md:p-3 rounded-lg bg-background/80 mb-2 md:mb-3">
              <ChevronRight size={16} className="md:w-5 md:h-5 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-xs md:text-sm mb-1 text-muted-foreground">View Older Updates</h3>
            <p className="text-[9px] md:text-xs text-muted-foreground/70">
              <span className="md:hidden">See {mockUpdates.length - 5} more</span>
              <span className="hidden md:inline lg:hidden">See {mockUpdates.length - 8} more</span>
              <span className="hidden lg:inline">See {mockUpdates.length - 11} more</span>
            </p>
          </motion.div>
        )}
      </div>

      <Dialog open={!!selectedUpdate} onOpenChange={() => setSelectedUpdate(null)}>
        {selectedUpdate && (
          <DialogContent className="max-w-2xl max-h-[85vh] md:max-h-[90vh]">
            <DialogClose onClick={() => setSelectedUpdate(null)} />
            <div className="space-y-4">
              {selectedUpdate.image && (
                <div className="w-full aspect-video bg-muted/30 rounded-lg overflow-hidden">
                  <Image
                    src={selectedUpdate.image}
                    alt={selectedUpdate.title}
                    width={600}
                    height={300}
                    className="w-full h-full object-contain bg-background/50"
                  />
                </div>
              )}
              
              <DialogHeader>
                <div className="flex items-start gap-3">
                  <div className={`p-3 rounded-lg ${selectedUpdate.colorClass} flex-shrink-0`}>
                    <selectedUpdate.icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <DialogTitle className="text-lg md:text-xl mb-2">{selectedUpdate.title}</DialogTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{formatDate(selectedUpdate.date)}</span>
                    </div>
                  </div>
                </div>
                
                <DialogDescription className="text-sm md:text-base leading-relaxed text-left pt-4">
                  {selectedUpdate.fullContent}
                </DialogDescription>
              </DialogHeader>
            </div>
          </DialogContent>
        )}
      </Dialog>

      <Dialog open={showAllUpdates} onOpenChange={setShowAllUpdates}>
        <DialogContent className="max-w-4xl max-h-[85vh] md:max-h-[90vh]">
          <DialogClose onClick={() => setShowAllUpdates(false)} />
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl mb-4">All Updates</DialogTitle>
            <div className="max-h-[65vh] md:max-h-[70vh] overflow-y-auto pr-2">
              <div className="space-y-3 md:space-y-4">
                {[...mockUpdates].reverse().map((update) => (
                  <motion.div
                    key={update.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: update.id * 0.05 }}
                    className={`p-3 md:p-4 border-2 cursor-pointer hover:shadow-lg transition-all duration-300 ${update.colorClass}`}
                    onClick={() => {
                      setShowAllUpdates(false)
                      setSelectedUpdate(update)
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative flex-shrink-0">
                        <div className={`p-2 rounded-lg bg-background/80 ${getIconStyle(update.id)}`}>
                          <update.icon size={18} className="md:w-5 md:h-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm md:text-base mb-1">{update.title}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground mb-2">{update.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar size={12} />
                            <span>{formatDate(update.date)}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-primary">
                            <Eye size={12} />
                            <span>Read more</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default WhatsNew