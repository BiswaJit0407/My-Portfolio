"use client"

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Contact({ id, onView }) {
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
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-muted-foreground mb-12">
          I'm always interested in discussing new projects, opportunities, and ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href="mailto:biswajitpadhan2001@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  biswajitpadhan2001@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <a href="tel:+919348574287" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9348574287
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-muted-foreground">Bhubaneswar, Odisha, India</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Linkedin className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-medium text-foreground">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/biswajit-padhan-64b935298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Github className="text-primary mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <a
                  href="https://github.com/BiswaJit0407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  View my projects
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message */}
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Send me a message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
