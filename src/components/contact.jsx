"use client"

import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs.config'

export default function Contact({ id, onView }) {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status message when user starts typing
    if (status.message) {
      setStatus({ type: '', message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ 
        type: 'error', 
        message: 'Please fill in all fields.' 
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({ 
        type: 'error', 
        message: 'Please enter a valid email address.' 
      })
      return
    }

    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email, // This sets the reply-to address to sender's email
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      console.log('Email sent successfully:', result.text)
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      })
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)
      
    } catch (error) {
      console.error('Email sending failed:', error)
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try emailing me directly.' 
      })
    } finally {
      setLoading(false)
    }
  }

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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                disabled={loading}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                disabled={loading}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                disabled={loading}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              />
              
              {/* Status Message */}
              {status.message && (
                <div className={`flex items-center gap-2 p-3 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 text-green-500 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-500 border border-red-500/20'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span className="text-sm">{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
