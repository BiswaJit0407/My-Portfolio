"use client"

import { useEffect, useRef } from "react"

export default function Skills({ id, onView }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onView()
        }
      },
      { threshold: 0.5 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [onView])

  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "REST API", "SSE API"],
    Database: ["MongoDB", "SQL", "Supabase"],
    "Tools & Other": ["Git", "GitHub", "Bitbucket", "VS Code", "BullMQ", "Responsive Design", "Agile/Scrum"],
  }

  return (
    <section id={id} ref={sectionRef} className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
