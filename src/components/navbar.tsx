"use client"

import React, { useState, useEffect } from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { HomeIcon, UserIcon, FolderIcon, BriefcaseIcon, FileTextIcon, MailIcon, Instagram, Linkedin, Github, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from 'next/link'

interface NavBarProps {
    scrollToSectionFunction?: (sectionId: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ scrollToSectionFunction }) => {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, {
            threshold: 0.4
        })

        const sections = document.querySelectorAll('#home, #about, #projects, #experience, #resume, #contact')
        sections.forEach(section => observer.observe(section))

        return () => {
            sections.forEach(section => observer.unobserve(section))
        }
    }, [])

    const scrollToSection = (sectionId: string) => {
        if (scrollToSectionFunction) {
            // Use the custom scroll function if provided (for mobile)
            scrollToSectionFunction(sectionId)
        } else {
            // Default behavior for desktop
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <div className='flex flex-col justify-between md:h-screen p-2 md:p-3'>
            {/* Name section - hidden on mobile, visible on desktop */}
            <div className="hidden md:block">
                <h1 className='text-2xl font-bold text-left md:text-5xl md:pt-[5vh] pb-3 pl-3'>Abdul <br className='hidden md:block' />Moeez <br className='hidden md:block' />Shaikh</h1>
            </div>
            <div className="h-full flex items-end justify-start">
                <div className="w-full md:pb-[10vh] md:w-auto">
                    <RadioGroup
                        value={activeSection}
                        className="md:flex md:flex-col md:gap-3 gap-2 flex justify-around p-2 md:p-3"
                    >
                        {/* Home nav item */}
                        <div className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => scrollToSection('home')}>
                            <div className={cn(
                                "md:hidden flex items-center justify-center rounded-md w-8 h-8 transition-colors",
                                activeSection === 'home'
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted hover:bg-muted/80"
                            )}>
                                <HomeIcon size={18} />
                            </div>
                            <div className="relative md:block hidden">
                                <RadioGroupItem value="home" id="home-nav" />
                            </div>
                            <Label htmlFor="home-nav" className="font-normal cursor-pointer md:block hidden text-sm">
                                Home
                            </Label>
                        </div>

                        {/* About nav item */}
                        <div className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => scrollToSection('about')}>
                            <div className={cn(
                                "md:hidden flex items-center justify-center rounded-md w-8 h-8 transition-colors",
                                activeSection === 'about'
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted hover:bg-muted/80"
                            )}>
                                <UserIcon size={18} />
                            </div>
                            <div className="relative md:block hidden">
                                <RadioGroupItem value="about" id="about-nav" />
                            </div>
                            <Label htmlFor="about-nav" className="font-normal cursor-pointer md:block hidden text-sm">
                                About
                            </Label>
                        </div>

                        {/* Projects nav item */}
                        <div className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => scrollToSection('projects')}>
                            <div className={cn(
                                "md:hidden flex items-center justify-center rounded-md w-8 h-8 transition-colors",
                                activeSection === 'projects'
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted hover:bg-muted/80"
                            )}>
                                <FolderIcon size={18} />
                            </div>
                            <div className="relative md:block hidden">
                                <RadioGroupItem value="projects" id="projects-nav" />
                            </div>
                            <Label htmlFor="projects-nav" className="font-normal cursor-pointer md:block hidden text-sm">
                                Projects
                            </Label>
                        </div>

                        {/* Experience nav item */}
                        <div className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => scrollToSection('experience')}>
                            <div className={cn(
                                "md:hidden flex items-center justify-center rounded-md w-8 h-8 transition-colors",
                                activeSection === 'experience'
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted hover:bg-muted/80"
                            )}>
                                <BriefcaseIcon size={18} />
                            </div>
                            <div className="relative md:block hidden">
                                <RadioGroupItem value="experience" id="experience-nav" />
                            </div>
                            <Label htmlFor="experience-nav" className="font-normal cursor-pointer md:block hidden text-sm">
                                Experience
                            </Label>
                        </div>

                        {/* Resume nav item */}
                        <div className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => scrollToSection('resume')}>
                            <div className={cn(
                                "md:hidden flex items-center justify-center rounded-md w-8 h-8 transition-colors",
                                activeSection === 'resume'
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted hover:bg-muted/80"
                            )}>
                                <FileTextIcon size={18} />
                            </div>
                            <div className="relative md:block hidden">
                                <RadioGroupItem value="resume" id="resume-nav" />
                            </div>
                            <Label htmlFor="resume-nav" className="font-normal cursor-pointer md:block hidden text-sm">
                                Resume
                            </Label>
                        </div>

                        {/* Contact nav item */}
                        <div className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => scrollToSection('contact')}>
                            <div className={cn(
                                "md:hidden flex items-center justify-center rounded-md w-8 h-8 transition-colors",
                                activeSection === 'contact'
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted hover:bg-muted/80"
                            )}>
                                <MailIcon size={18} />
                            </div>
                            <div className="relative md:block hidden">
                                <RadioGroupItem value="contact" id="contact-nav" />
                            </div>
                            <Label htmlFor="contact-nav" className="font-normal cursor-pointer md:block hidden text-sm">
                                Contact
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
            {/* Mobile name display below nav items */}
            <div className="md:hidden flex justify-center mt-1 mb-1">
                <h2 className='text-lg font-bold text-center'>Abdul Moeez Shaikh</h2>
            </div>
            <div className="flex-col items-center justify-center hidden md:flex">
                <div className="flex items-center justify-center">
                    <Link href="https://instagram.com/abdul_moeez_shaikh" target="_blank" className="p-2 rounded-md hover:bg-muted/80 transition-colors">
                        <Instagram size={30} strokeWidth={1.5} className="hover:text-primary" />
                    </Link>
                    <Link href="https://linkedin.com/in/abdulmoeezshaikh" target="_blank" className="p-2 rounded-md hover:bg-muted/80 transition-colors">
                        <Linkedin size={30} strokeWidth={1.5} className="hover:text-primary" />
                    </Link>
                    <Link href="https://github.com/moeezs" target="_blank" className="p-2 rounded-md hover:bg-muted/80 transition-colors">
                        <Github size={30} strokeWidth={1.5} className="hover:text-primary" />
                    </Link>
                    <Link href="mailto:abdulmoeezshaikh@gmail.com" target="_blank" className="p-2 rounded-md hover:bg-muted/80 transition-colors">
                        <Mail size={30} strokeWidth={1.5} className="hover:text-primary" />
                    </Link>
                </div>
                <p className="text-sm text-muted-foreground pt-3">© 2025 Moeez</p>
                <p className="text-sm text-muted-foreground pt-3">updated 13/05/2025</p>
            </div>
        </div>
    )
}

export default NavBar