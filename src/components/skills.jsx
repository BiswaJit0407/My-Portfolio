"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Network, Workflow, Smartphone, Users, Mail, Code2 } from "lucide-react"

const devicon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`
const wordmark = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original-wordmark.svg`

const iconMap = {
  "HTML": devicon("html5"),
  "CSS": devicon("css3"),
  "JavaScript": devicon("javascript"),
  "React.js": devicon("react"),
  "Tailwind CSS": devicon("tailwindcss"),
  "Node.js": devicon("nodejs"),
  "Express.js": devicon("express"),
  "MongoDB": devicon("mongodb"),
  "SQL": devicon("mysql"),
  "Supabase": "https://cdn.simpleicons.org/supabase/3FCF8E",
  "Prisma ORM": "https://cdn.simpleicons.org/prisma/FFFFFF",
  "AWS S3": wordmark("amazonwebservices"),
  "BullMQ": "https://cdn.simpleicons.org/redis/DC382D",
  "Git": devicon("git"),
  "GitHub": "https://cdn.simpleicons.org/github/FFFFFF",
  "Bitbucket": devicon("bitbucket"),
  "VS Code": devicon("vscode"),
  "Postman": devicon("postman"),
}

const fallbackIcons = {
  "RESTful API": Network,
  "JWT Authentication": ShieldCheck,
  "RBAC": Users,
  "Resend API": Mail,
  "SSE API Integration": Workflow,
  "Responsive Design": Smartphone,
  "Agile/Scrum": Code2,
}

export default function Skills({ id, onView }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onView()
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
    <section id={id} ref={sectionRef} className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.28em] text-primary">What I work with</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Skills <span className="hero-gradient-text">&amp; Expertise</span></h2>
          <p className="mt-4 leading-7 text-muted-foreground">Technologies and tools I use to turn ideas into reliable digital products.</p>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              className="group rounded-2xl border border-border bg-card/65 p-6 shadow-lg shadow-black/[.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/[.06]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-base font-semibold text-foreground">{category}</h3>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">{String(items.length).padStart(2, "0")}</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {items.map((skill) => {
                  const Icon = fallbackIcons[skill]
                  const logo = iconMap[skill]
                  return (
                    <motion.div
                      key={skill}
                      whileHover={{ y: -2, scale: 1.025 }}
                      className="flex min-h-[66px] items-center gap-3 rounded-xl border border-border/80 bg-background/65 px-3 py-3 transition-colors hover:border-primary/40 hover:bg-primary/[.045]"
                      title={skill}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-secondary/70 p-1.5">
                        {logo ? (
                          <img src={logo} alt={`${skill} logo`} loading="lazy" className="h-full w-full object-contain" />
                        ) : (
                          <Icon size={19} strokeWidth={1.8} className="text-primary" aria-hidden="true" />
                        )}
                      </span>
                      <span className="text-xs font-medium leading-4 text-foreground sm:text-sm">{skill}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}