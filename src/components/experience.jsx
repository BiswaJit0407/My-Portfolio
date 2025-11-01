"use client"

import { useEffect, useRef } from "react"

export default function Experience({ id, onView }) {
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

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Ishvara Tech Consulting LLP",
      period: "March 2025 - Present",
      location: "Bhubaneswar",
      points: [
        "Developed and deployed end-to-end applications using Node.js, Express.js, and React.js",
        "Integrated complex third-party services and RESTful APIs for seamless data flow",
        "Collaborated actively in Agile team environment with daily standups and code reviews",
      ],
    },
    {
      role: "MERN Stack Intern",
      company: "Techzex Pvt Ltd.",
      period: "2024",
      location: "Bhubaneswar",
      points: [
        "Developed full-stack web applications focusing on MERN stack architecture",
        "Implemented reusable React.js components for enhanced modularity",
        "Managed backend services and routing with Node.js and Express.js",
        "Awarded Gold Medal in Internship award",
      ],
    },
  ]

  return (
    <section id={id} ref={sectionRef} className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
