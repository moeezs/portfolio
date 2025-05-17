'use client'

import React from 'react'
import { ProjectCard } from './ui/project-card'
import { CodeIcon, GlobeIcon, ServerIcon, TerminalIcon, DatabaseIcon, BrainIcon, ShoppingBagIcon } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from '@/lib/utils'

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.',
    tags: ['Next.js', 'React', 'Tailwind'],
    githubUrl: 'https://github.com/username/portfolio',
    demoUrl: 'https://demo.portfolio.com',
    liveUrl: 'https://portfolio.com',
    icon: <GlobeIcon className="h-5 w-5" />
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings and payment processing.',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce.com',
    icon: <ShoppingBagIcon className="h-5 w-5" />
  },
  {
    id: 3,
    title: 'Task Management API',
    description: 'A RESTful API for managing tasks and projects with authentication.',
    tags: ['Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/username/task-api',
    icon: <ServerIcon className="h-5 w-5" />
  },
  {
    id: 4,
    title: 'Data Visualization',
    description: 'Interactive dashboard for visualizing complex data with customizable charts.',
    tags: ['D3.js', 'React', 'Firebase'],
    githubUrl: 'https://github.com/username/data-dashboard',
    demoUrl: 'https://demo.data-dashboard.com',
    icon: <DatabaseIcon className="h-5 w-5" />
  },
  {
    id: 5,
    title: 'CLI Tool Suite',
    description: 'Command-line tools for automating development workflows and productivity.',
    tags: ['Python', 'Node.js', 'Shell'],
    githubUrl: 'https://github.com/username/cli-tools',
    icon: <TerminalIcon className="h-5 w-5" />
  },
  {
    id: 6,
    title: 'Machine Learning Model',
    description: 'An image classification model trained on custom data with high accuracy.',
    tags: ['Python', 'TensorFlow', 'AWS'],
    githubUrl: 'https://github.com/username/ml-model',
    demoUrl: 'https://demo.ml-model.com',
    icon: <BrainIcon className="h-5 w-5" />
  },
  {
    id: 7,
    title: 'Code Snippet Manager',
    description: 'Web app for developers to store, organize, and share code snippets.',
    tags: ['React', 'GraphQL', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/snippet-manager',
    liveUrl: 'https://snippet-manager.com',
    icon: <CodeIcon className="h-5 w-5" />
  }
]

const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const ProjectsPage = () => {
  // Group projects into sets of 2 for mobile
  const projectGroups = chunkArray(projects, 3);

  return (
    <div id='projects' className="py-4 px-4 md:px-6 mx-auto overflow-hidden">
      <div className="mb-3 md:mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">My Projects</h2>
        <p className="text-muted-foreground text-[10px] md:text-sm max-w-2xl mx-auto">
          A selection of projects I've built throughout my development journey.
        </p>
      </div>
      
      {/* Mobile view - Carousel with compact cards */}
      <div className="md:hidden">
        <Carousel className="w-full overflow-hidden">
          <CarouselContent className="mx-0">
            {projectGroups.map((group, groupIndex) => (
              <CarouselItem key={groupIndex} className="basis-full p-0">
                <div className="flex flex-col gap-2 mx-3">
                  {group.map(project => (
                    <div key={project.id} className="w-full mx-auto">
                      <ProjectCard
                        icon={project.icon}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        githubUrl={project.githubUrl}
                        demoUrl={project.demoUrl}
                        liveUrl={project.liveUrl}
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-2">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0 h-6 w-6" />
            <CarouselNext className="relative inset-0 translate-y-0 right-0 h-6 w-6" />
          </div>
        </Carousel>
      </div>
      
      {/* Desktop view - Grid layout */}
      <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            icon={project.icon}
            title={project.title}
            description={project.description}
            tags={project.tags}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage