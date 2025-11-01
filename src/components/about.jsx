"use client"

import { useEffect, useRef } from "react"

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
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate full-stack developer currently working at Ishvara Tech Consulting LLP. With a Master's
            degree in Computer Application (CGPA: 7.45) from GIFT Autonomous College, I specialize in building
            end-to-end applications using the MERN stack.
          </p>
          <p>
            My expertise spans frontend development with React and Tailwind CSS, robust backend services with Node.js
            and Express, and database management with MongoDB, SQL, and Supabase. I'm particularly skilled in
            integrating complex third-party APIs, managing application state, and working collaboratively in Agile
            environments.
          </p>
          <p>
            I received a Gold Medal in Internship award at Techzex Software Pvt. Ltd., and I'm MongoDB Certified in the
            Associate category. When I'm not coding, I enjoy exploring new technologies and working on challenging
            problems that push the boundaries of web development.
          </p>
        </div>
      </div>
    </section>
  )
}
