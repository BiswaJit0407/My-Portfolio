"use client"

import { useEffect, useState } from "react"
import ThemeToggle from "./theme-toggle"

export default function Navigation({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = ["about", "skills", "experience", "projects", "contact"]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80 // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transform group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-lg">BP</span>
          </div>
          <div className="hidden md:block">
            <div className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
              Biswajit Padhan
            </div>
            <div className="text-xs text-muted-foreground">Full Stack Developer</div>
          </div>
        </button>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors capitalize ${activeSection === section ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {section}
              </button>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
