"use client"

import { useEffect, useRef } from "react"

export default function Projects({ id, onView }) {
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

  const projects = [
    {
      title: "Jersey Hub",
      subtitle: "E-commerce Football Jersey Store",
      description:
        "Engineered a fully functional MERN stack e-commerce website for football jerseys using React.js, Node.js, and MongoDB. Implemented core e-commerce features including product listing, advanced filtering, cart management, user authentication, and secure checkout. Designed a modern, responsive, and user-friendly interface tailored for sports fans.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      type: "Personal Project",
      link: "https://jersy-store-frontend.vercel.app/",
    },
    {
      title: "Cafe Food Order Website",
      subtitle: "User-Friendly Food Delivery Platform",
      description:
        "Developed a user-friendly food delivery platform using React.js, enabling seamless menu browsing and order placement. Integrated an intuitive add-to-cart feature and a dynamic cart section, ensuring a smooth user experience. Designed with responsive layouts for optimal viewing across devices.",
      tech: ["React.js", "JavaScript (ES6+)", "HTML", "CSS", "REST API"],
      type: "Personal Project",
      link: "https://cafeorder.vercel.app/",
    },
  ]

  return (
    <section id={id} ref={sectionRef} className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline font-medium"
                      >
                        View Live →
                      </a>
                    )}
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-primary/20 text-primary rounded-full">
                    {project.type}
                  </span>
                </div>
                <p className="text-primary font-medium">{project.subtitle}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-secondary text-foreground rounded">
                    {tech}
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
