"use client"

import React from 'react'
import NavBar from '@/components/navbar'
import HomePage from '@/components/home'
import AboutPage from '@/components/about'
import ProjectsPage from '@/components/projects'
import ExperiencePage from '@/components/experience'
import ResumePage from '@/components/resume'
import ContactPage from '@/components/contact'



const Main = () => {

  return (
    <div className='flex md:flex-row flex-col h-screen'>
      <div className='md:basis-1/5 basis-1/10 md:rounded-r-2xl rounded-b-2xl bg-secondary'>
        <NavBar />
      </div>
      <div className='md:basis-4/5 basis-9/10 content min-width-full flex flex-col overflow-y-scroll scroll-smooth snap-y snap-mandatory h-screen'>
        <div className='md:min-h-screen min-h-[90vh] w-full flex justify-center items-center snap-center'>
          <HomePage />
        </div>
        
        <div className='md:min-h-screen min-h-[90vh] w-full flex justify-center items-center snap-center'>
          <AboutPage />
        </div>

        <div className='md:min-h-screen min-h-[90vh] w-full flex justify-center items-center snap-center'>
          <ProjectsPage />
        </div>

        <div className='md:min-h-screen min-h-[90vh] w-full flex justify-center items-center snap-center'>
          <ExperiencePage />
        </div>

        <div className='md:min-h-screen min-h-[90vh] w-full flex justify-center items-center snap-center'>
          <ResumePage />
        </div>

        <div className='md:min-h-screen min-h-[90vh] w-full flex justify-center items-center snap-center'>
          <ContactPage />
        </div>
      </div>

    </div>
    
  )
}

export default Main