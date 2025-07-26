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
    id: 10,
    title: 'MedTrack',
    description: 'A Python application that helps you track medications with visual calendar reminders. Never miss a dose with clear scheduling and notification features.',
    tags: ['Python', 'Tkinter'],
    githubUrl: 'https://github.com/moeezs/MedTrack',
    icon: '/project-icons/medtrack.png'
  },
  {
    id: 9,
    title: 'Resume Analyzer',
    description: 'A web application that analyzes your resume and provides detailed feedback on formatting, keyword optimization, and ATS compatibility for better job applications.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/moeezs/Resume-Analyzer',
    liveUrl: 'https://moeezs.github.io/Resume-Analyzer/',
    icon: '/project-icons/resume.png'
  },
  {
    id: 8,
    title: 'GoPic',
    description: 'Take pictures of places you visit and share them with friends. Others can leave reviews, book transportation, or even flights directly within the app.',
    tags: ['Swift', 'Xcode', 'SwiftUI'],
    githubUrl: 'https://github.com/moeezs/GoPic/',
    icon: '/project-icons/gopic.png'
  },
  {
    id: 7,
    title: 'CareSync',
    description: 'A simple and intuitive patient management system designed for healthcare professionals. Easily access, update, and organize patient records with a clean interface.',
    tags: ['Java', 'SceneBuilder', 'JavaFX'],
    githubUrl: 'https://github.com/moeezs/CareSync',
    icon: '/project-icons/caresync.png'
  },
  {
    id: 6,
    title: 'VocabBuddy',
    description: 'Master any language with VocabBuddy! Create dictionaries from words you find online, quiz yourself on vocabulary, and accelerate your language learning journey.',
    tags: ['TypeScript', 'IndexedDB', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/moeezs/VocabBuddy',
    demoUrl: 'https://youtu.be/iLDRERtZa4Y',
    icon: '/project-icons/vocabbuddy.png'
  },
  {
    id: 5,
    title: 'Commence',
    description: 'Upload your course syllabus and let Commence extract all course weightings and important dates. Get a clean calendar view with downloadable course schedules.',
    tags: ['HTML', 'CSS', 'Flask', 'Python', 'Gemini'],
    githubUrl: 'https://github.com/moeezs/commence',
    liveUrl: 'https://commence.onrender.com',
    demoUrl: 'https://youtu.be/cmOyMfzMXG4',
    icon: '/project-icons/commence.png'
  },
  {
    id: 4,
    title: 'Yap & Yap',
    description: 'A really friendly pal of friends from Toy Story that help you answer any moral dilemma, burning question, or just a simple question you have.',
    tags: ['React', 'Tailwind', 'Gemini', 'JavaScript' ],
    githubUrl: 'https://github.com/moeezs/yapandyap',
    demoUrl: 'https://youtu.be/4SmDS0n6Go0',
    liveUrl: 'https://yapandyap.onrender.com',
    icon: '/project-icons/yap.png'
  },
  {
    id: 3,
    title: 'Hoops Dynasty',
    description: 'A realistic basketball simulation game where you create your own team and compete against others. Features lifelike player stats, dynamic actions, and strategic plays.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Apache'],
    githubUrl: 'https://github.com/moeezs/HoopsDynasty',
    icon: '/project-icons/hoopsdynasty.png',
  },
  {
    id: 2,
    title: 'Just Apply',
    description: 'An intelligent app that generates tailored resumes using Gemini AI, automatically pulling data from your GitHub profile and LinkedIn to create perfect applications.',
    tags: ['Next.js', 'TypeScript', 'React', 'Gemini API', 'Apify'],
    githubUrl: 'https://github.com/moeezs/just-apply',
    icon: '/project-icons/justapply.png',
    liveUrl: 'https://just-apply-eight.vercel.app/',
    demoUrl: 'https://x.com/amoeezs/status/1926812616313155746',
  },
  {
    id: 1,
    title: 'Recipes RESTful API',
    description: 'A RESTful API for accessing  recipes from AllRecipes. A web scraper that fetches recipes and provides endpoints for detailed recipe information.',
    tags: ['Node.js', 'React', 'Vite', 'TypeScript', 'Express', 'Puppeteer'],
    githubUrl: 'https://github.com/moeezs/recipes-api',
    icon: '/project-icons/recipes-api.png',
    liveUrl: 'https://recipes-api-production-6853.up.railway.app/',
    demoUrl: 'https://x.com/amoeezs/status/1929320049879240944',
  },
  {
    id: 0,
    title: 'Crave It',
    description: 'An interactive cooking app that provides clean and easy-to-follow recipes with a simple interface. Set timers, listen to step instructions, and share recipes with friends.',
    tags: ['Next.js', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/moeezs/craveit',
    icon: '/project-icons/craveit.png',
    liveUrl: 'https://craveit-zeta.vercel.app',
  },
  {
    id: 11,
    title: 'World Cup Predictor',
    description: 'A machine learning model that predicts the winner of the FIFA World Cup based on team statistics and historical data. Includes a web app for user interaction.',
    tags: ['Python', 'Flask', 'Machine Learning', 'scikit-learn', 'React'],
    icon: '/project-icons/world-cup.png',
    githubUrl: 'https://github.com/moeezs/world-cup-predictor',
    demoUrl: 'https://x.com/amoeezs/status/1946600379589804111',
    liveUrl: 'https://world-cup-predictor.vercel.app/',
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
  const reversedProjects = [...projects].reverse()
  const mobileProjectGroups = chunkArray(reversedProjects, 3);
  const desktopProjectGroups = chunkArray(reversedProjects, 8);

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
            {mobileProjectGroups.map((group, groupIndex) => (
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
      
      {/* Desktop view - Carousel with grid layout */}
      <div className="hidden md:block">
        <Carousel className="w-full overflow-hidden">
          <CarouselContent className="mx-0">
            {desktopProjectGroups.map((group, groupIndex) => (
              <CarouselItem key={groupIndex} className="basis-full p-0">
                <div className="grid grid-cols-4 gap-3 mx-3">
                  {group.map(project => (
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 left-0 h-8 w-8" />
            <CarouselNext className="relative inset-0 translate-y-0 right-0 h-8 w-8" />
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default ProjectsPage