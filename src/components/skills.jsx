"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

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
    Backend: ["Node.js", "Express.js", "RESTful API", "JWT Authentication", "RBAC"],
    Database: ["MongoDB", "SQL", "Supabase", "Prisma ORM"],
    "Cloud & Infra": ["AWS S3", "BullMQ", "Resend API"],
    "Version Control": ["Git", "GitHub", "Bitbucket"],
    "Tools & Other": ["VS Code", "Postman", "SSE API Integration", "Responsive Design", "Agile/Scrum"],
  }

  return (
    <section id={id} ref={sectionRef} className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div 
              key={category} 
              className="space-y-4 p-6 bg-card/60 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 bg-secondary/80 backdrop-blur-sm border border-white/10 rounded-full text-sm text-foreground shadow-sm hover:shadow-primary/20 hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
