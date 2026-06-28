"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Projects({ id, onView }) {
  const sectionRef = useRef(null)
  const [activeTab, setActiveTab] = useState("all")

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
      title: "HireMitra",
      subtitle: "AI Recruitment Platform",
      description:
        "Developed a comprehensive AI-powered recruitment platform connecting organizations and candidates through intelligent automation; showcased at the India AI Summit 2026 for its innovative AI-driven hiring solution. Developed an AI interview system with real-time video interviews and automated candidate evaluation. Engineered a job-matching algorithm achieving ~85% matching accuracy. Built scalable REST APIs using Node.js, Express.js, and PostgreSQL with <200ms response time. Integrated OpenAI GPT-4 for resume parsing, reducing manual screening time by ~50%.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "OpenAI GPT-4"],
      type: "Client Project",
    },
    {
      title: "Campaign Pulse",
      subtitle: "Multi-Platform Ad Marketing Manager",
      description:
        "Contributed to the development of a multi-platform campaign and ads marketing project focused on handling major ad channels (e.g., IQM platform, Meta, X Ads). Utilized the MERN stack for application logic while leveraging Supabase (PostgreSQL) for structured data storage and real-time synchronization. Managed application state across the front-end and back-end to handle complex advertising data streams and reporting.",
      tech: ["MERN Stack", "Supabase", "PostgreSQL"],
      type: "Client Project",
    },
    {
      title: "LeadNova",
      subtitle: "Lead and Marketing Automation Platform",
      description:
        "Engineered a robust lead and marketing platform using the MERN stack (MongoDB, Express.js, React.js, Node.js). Implemented complex email campaign scheduling functionality utilizing BullMQ to manage queues for reliable, large-scale email distribution. Developed a modern, user-friendly interface that allows users to effectively manage lead data and schedule automated campaigns.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "BullMQ"],
      type: "Client Project",
    },
    {
      title: "ECSE",
      subtitle: "School ERP Platform",
      description:
        "Built a full-featured School ERP platform to streamline academic and administrative workflows for schools. Implemented a role-based access control (RBAC) system supporting multiple user roles. Designed and integrated document management using AWS S3. Architected multiple user flows (admission, attendance, fee management) to support diverse stakeholder journeys. Implemented bulk email sending using the Resend API combined with BullMQ.",
      tech: ["MERN Stack", "AWS S3", "Resend API", "BullMQ", "RBAC"],
      type: "Client Project",
    },
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

  const filteredProjects = projects.filter(project => {
    if (activeTab === "all") return true;
    if (activeTab === "client") return project.type === "Client Project";
    if (activeTab === "personal") return project.type === "Personal Project";
    return true;
  });

  return (
    <section id={id} ref={sectionRef} className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <div className="flex bg-secondary p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "all" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("client")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "client" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Client
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === "personal" ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Personal
            </button>
          </div>
        </div>
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-card/60 backdrop-blur-lg border border-white/10 dark:border-white/10 rounded-xl hover:border-primary/50 transition-all duration-300 shadow-xl space-y-4"
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
                  <span key={tech} className="text-xs px-2 py-1 bg-secondary/80 backdrop-blur-sm text-foreground rounded border border-white/5 hover:bg-primary/20 hover:text-primary transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
