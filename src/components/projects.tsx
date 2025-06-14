'use client'

import React from 'react'
import { ProjectCard } from './ui/project-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const projects = [
  {
    id: 0,
    title: 'Crave It',
    description: 'A easy and interactive way to cook. It gives you clean and easy to follow recipes with a simple and intuitive interface. You can also set timers, listen to the steps and share them with friends.',
    tags: ['Next.js', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/moeezs/craveit',
    icon: '/project-icons/craveit.png',
  },
  {
    id: 1,
    title: 'All Recipes RESTful API',
    description: 'A RESTful API for accessing a curated database of recipes from AllRecipes website. It allows users to extract all the information they need about recipes, including ingredients, instructions, and nutritional information.',
    tags: ['Node.js', 'React', 'Vite', 'TypeScript', 'Express', 'Puppeteer'],
    githubUrl: 'https://github.com/moeezs/recipes-api',
    icon: '/project-icons/recipes-api.png',
    liveUrl: 'https://recipes-api-production-6853.up.railway.app/',
    demoUrl: 'https://x.com/amoeezs/status/1929320049879240944',
  },
  {
    id: 2,
    title: 'Just Apply',
    description: 'An app to generate tailored resumes using Gemini AI, GitHub, and LinkedIn data.',
    tags: ['Next.js', 'TypeScript', 'React', 'Gemini API', 'Apify'],
    githubUrl: 'https://github.com/moeezs/just-apply',
    icon: '/project-icons/justapply.png',
    liveUrl: 'https://just-apply-eight.vercel.app/',
    demoUrl: 'https://x.com/amoeezs/status/1926812616313155746',
  },
  {
    id: 3,
    title: 'Hoops Dynasty',
    description: 'A fun and realistic basketball simulation game where you can create your own team and compete against others. The game features lifelike player stats, actions and plays.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Apache'],
    githubUrl: 'https://github.com/moeezs/HoopsDynasty',
    icon: '/project-icons/hoopsdynasty.png',
  },
  {
    id: 4,
    title: 'Yap & Yap',
    description: 'A really friendly pal of friends from Toy Story that help you answer any moral dillemma, burning question, or just a simple question you have.',
    tags: ['React', 'Tailwind', 'Gemini', 'JavaScript' ],
    githubUrl: 'https://github.com/moeezs/yapandyap',
    demoUrl: 'https://youtu.be/4SmDS0n6Go0',
    liveUrl: 'https://yapandyap.onrender.com',
    icon: '/project-icons/yap.png'
  },
  {
    id: 5,
    title: 'Commence',
    description: 'Upload your syllabus and let Commence do the rest. You will receive all of your course weightings and all the important dates for a course with an easily downloadable calendar.',
    tags: ['HTML', 'CSS', 'Flask', 'Python', 'Gemini'],
    githubUrl: 'https://github.com/moeezs/commence',
    liveUrl: 'https://commence.onrender.com',
    demoUrl: 'https://youtu.be/cmOyMfzMXG4',
    icon: '/project-icons/commence.png'
  },
  {
    id: 6,
    title: 'VocabBuddy',
    description: 'Master any language with VocabBuddy! This app helps you learn and practice vocabulary by letting you create dictionaries of words you find online on any website. Quiz yourself and quickly learn new words.',
    tags: ['TypeScript', 'IndexedDB', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/moeezs/VocabBuddy',
    demoUrl: 'https://youtu.be/iLDRERtZa4Y',
    icon: '/project-icons/vocabbuddy.png'
  },
  {
    id: 7,
    title: 'CareSync',
    description: 'A simple and intuitive app for managing patient records. Designed for healthcare professionals, it allows easy access to patient information.',
    tags: ['Java', 'SceneBuilder', 'JavaFX'],
    githubUrl: 'https://github.com/moeezs/CareSync',
    icon: '/project-icons/caresync.png'
  },
  {
    id: 8,
    title: 'GoPic',
    description: 'Take a picture of any place you visit, share with your friends where anyone can leave reviews to the place or book a cab or even a plane within the app.',
    tags: ['Swift', 'Xcode', 'SwiftUI'],
    githubUrl: 'https://github.com/moeezs/GoPic/',
    icon: '/project-icons/gopic.png'
  },
  {
    id: 9,
    title: 'Resume Analyzer',
    description: 'A web app that analyzes resumes and provides feedback on formatting, keywords, and ATS compatibility.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/moeezs/Resume-Analyzer',
    liveUrl: 'https://moeezs.github.io/Resume-Analyzer/',
    icon: '/project-icons/resume.png'
  },
  {
    id: 10,
    title: 'MedTrack',
    description: 'A python app that allows you to track your medications and gives you a visual calender of when to take your medications.',
    tags: ['Python', 'Tkinter'],
    githubUrl: 'https://github.com/moeezs/MedTrack',
    icon: '/project-icons/medtrack.png'
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
          A selection of projects I&apos;ve built throughout my development journey.
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