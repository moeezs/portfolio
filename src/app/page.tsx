"use client"

import React, { useEffect, useState } from 'react'
import NavBar from '@/components/navbar'
import HomePage from '@/components/home'
import AboutPage from '@/components/about'
import ProjectsPage from '@/components/projects'
import ExperiencePage from '@/components/experience'
import ResumePage from '@/components/resume'
import ContactPage from '@/components/contact'

const Main = () => {
  // Reference to the scroll container for mobile navigation
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Set up viewport height for iOS Safari
  useEffect(() => {
    // Update the CSS variable --vh to be based on the actual viewport height
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Initial calculation
    setViewportHeight();

    // Recalculate when the window resizes or orientation changes
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);
  
  // Function to scroll to a section on mobile with scroll locking
  const scrollToSectionMobile = (sectionId: string) => {
    if (scrollContainerRef.current) {
      // Prevent multiple scroll attempts
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      const sections = scrollContainerRef.current.querySelectorAll('.snap-center');
      const sectionIndex = Array.from(sections).findIndex(section => section.id === sectionId);
      
      if (sectionIndex !== -1) {
        const section = sections[sectionIndex] as HTMLElement;
        
        // Disable wheel events during scrolling
        scrollContainerRef.current.style.overflowY = 'hidden';
        
        scrollContainerRef.current.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
        
        // Re-enable scrolling and reset state after animation completes
        setTimeout(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.style.overflowY = 'auto';
          }
          setIsScrolling(false);
        }, 1000); // Adjust timeout to match scroll duration
      } else {
        setIsScrolling(false);
      }
    }
  };

  return (
    <>
      {/* Desktop Layout */}
      <div className='hidden md:flex md:flex-row h-screen'>
        <div className='md:basis-1/5 md:rounded-r-2xl bg-secondary'>
          <NavBar />
        </div>
        <div className='md:basis-4/5 overflow-y-auto scroll-smooth snap-y snap-mandatory'>
          <div className='min-h-screen w-full flex justify-center items-center snap-center'>
            <HomePage />
          </div>
          
          <div className='min-h-screen w-full flex justify-center items-center snap-center'>
            <AboutPage />
          </div>

          <div className='min-h-screen w-full flex justify-center items-center snap-center'>
            <ProjectsPage />
          </div>

          <div className='min-h-screen w-full flex justify-center items-center snap-center'>
            <ExperiencePage />
          </div>

          <div className='min-h-screen w-full flex justify-center items-center snap-center'>
            <ResumePage />
          </div>

          <div className='min-h-screen w-full flex justify-center items-center snap-center'>
            <ContactPage />
          </div>
        </div>
      </div>
      
      {/* Mobile Layout */}
      <div className='flex md:hidden flex-col h-mobile-screen'>
        {/* Content area takes all space except for the navbar */}
        <div 
          ref={scrollContainerRef}
          className='basis-[calc(100%-80px)] overflow-y-auto overscroll-none scroll-smooth snap-y snap-mandatory'
        >
          <div id="home" className='h-mobile-section w-full flex justify-center items-center snap-center'>
            <HomePage />
          </div>
          
          <div id="about" className='h-mobile-section w-full flex justify-center items-center snap-center'>
            <AboutPage />
          </div>

          <div id="projects" className='h-mobile-section w-full flex justify-center items-center snap-center'>
            <ProjectsPage />
          </div>

          <div id="experience" className='h-mobile-section w-full flex justify-center items-center snap-center'>
            <ExperiencePage />
          </div>

          <div id="resume" className='h-mobile-section w-full flex justify-center items-center snap-center'>
            <ResumePage />
          </div>

          <div id="contact" className='h-mobile-section w-full flex justify-center items-center snap-center'>
            <ContactPage />
          </div>
        </div>
        
        {/* Navbar at the bottom with background */}
        <div className='basis-[80px] bg-secondary rounded-t-2xl'>
          <NavBar scrollToSectionFunction={scrollToSectionMobile} />
        </div>
      </div>
    </>
  )
}

export default Main