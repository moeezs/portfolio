'use client'

import { ChevronsDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Linkedin, Github, Mail } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";

export default function HomePage() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-2xl text-center space-y-8">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight md:pt-20 pt-30">
          👋 Hello, I&apos;m Moeez
        </h1>

        {/* Content below with appropriate spacing */}
        <div className="space-y-4">
          <h2 className="text-lg md:text-3xl text-muted-foreground font-medium">
            cs student | web developer | app developer
          </h2>
          <p className="text-base md:text-lg italic text-muted-foreground max-w-md mx-auto">
            &ldquo;The moment you doubt whether you can fly, you cease forever to be able to do it.&rdquo;
          </p>
          <div className="flex items-center justify-center space-x-2 md:hidden">
            <Link href="https://instagram.com/abdul_moeez_shaikh" target="_blank" className="p-2 rounded-md hover:bg-muted/80 transition-colors">
              <Instagram size={20} strokeWidth={1.5} className="hover:text-primary" />
            </Link>
            <Link href="https://linkedin.com/in/abdulmoeezshaikh" target="_blank" className="p-2 rounded-md hover:bg-muted/80 transition-colors">
              <Linkedin size={20} strokeWidth={1.5} className="hover:text-primary" />
            </Link>
            <Link href="https://github.com/moeezs" target="_blank" className="p-2 rounded-md hover:bg-muted/80 transition-colors">
              <Github size={20} strokeWidth={1.5} className="hover:text-primary" />
            </Link>
            <Link href="https://x.com/amoeezs" target="_blank" className="p-2 rounded-md hover:bg-muted/80 transition-colors">
              <FaXTwitter size={20} strokeWidth={1.5} className="hover:text-primary" />
            </Link>
            <Link href="mailto:abdulmoeezshaikh@gmail.com" target="_blank" className="p-2 rounded-md hover:bg-muted/80 transition-colors">
              <Mail size={20} strokeWidth={1.5} className="hover:text-primary" />
            </Link>
          </div>

          {/* Animated scroll icon */}
          <motion.a
            href="#projects"
            className="inline-block pt-2"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronsDown className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
