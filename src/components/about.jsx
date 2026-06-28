"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function About({ id, onView }) {
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

  return (
    <section id={id} ref={sectionRef} className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>
        <motion.div 
          className="space-y-6 text-lg text-muted-foreground leading-relaxed relative p-8 bg-card/30 backdrop-blur-md border border-white/5 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
          <p>
            I'm a passionate Full Stack Developer currently working at Ishvara Tech Consulting LLP, with a Master's
            degree in Computer Application from GIFT Autonomous College. I have 1+ year of professional experience
            building scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
          </p>
          <p>
            I am skilled in JavaScript, RESTful API development, and modern frontend architectures with React and Tailwind CSS.
            My expertise includes building complex applications such as AI-powered platforms and comprehensive school ERP systems,
            while seamlessly integrating third-party APIs like AWS S3 and Resend.
          </p>
          <p>
            I am MongoDB Certified in the Associate category and received a Gold Medal Internship award at Techzex Software Pvt. Ltd.
            Passionate about creating efficient, user-centric digital products, I enjoy exploring new technologies and solving complex
            engineering challenges that push the boundaries of web development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
