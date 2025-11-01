"use client"

import { useEffect, useState } from "react"
import ThemeToggle from "./theme-toggle"
import darkLogo from "/darklogo.png"
import lightLogo from "/lightlogo.png"

export default function Navigation({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark") ? "dark" : "light"
    }
    return "dark"
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark")
      setTheme(isDark ? "dark" : "light")
    })
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    
    return () => observer.disconnect()
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
          className="flex items-center gap-3 group cursor-pointer"
        >
          {/* Logo image changes based on theme */}
          <div className="relative w-12 h-12 transform group-hover:scale-105 transition-all duration-300">
            <img 
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="Biswajit Padhan Logo"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
          {/* <div className="hidden md:block">
            <div className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
              Biswajit Padhan
            </div>
            <div className={`text-xs transition-colors ${
              theme === "dark" ? "text-muted-foreground" : "text-gray-600"
            }`}>
              Full Stack Developer
            </div>
          </div> */}
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
