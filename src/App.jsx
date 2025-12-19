"use client"

import { useState } from "react"
import Snowfall from "react-snowfall"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function App() {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Snowfall 
        color="#3b82f6"
        snowflakeCount={200}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
      />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About id="about" onView={() => setActiveSection("about")} />
        <Skills id="skills" onView={() => setActiveSection("skills")} />
        <Experience id="experience" onView={() => setActiveSection("experience")} />
        <Projects id="projects" onView={() => setActiveSection("projects")} />
        <Contact id="contact" onView={() => setActiveSection("contact")} />
      </main>
      <Footer />
    </div>
  )
}
