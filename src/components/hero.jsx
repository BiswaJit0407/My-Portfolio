import { ArrowRight, Github, Linkedin, Mail, Phone, FileText } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function useTypingEffect(text, speed = 50, startTyping = true) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!startTyping) {
      setDisplayedText("")
      setIsComplete(false)
      return
    }

    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, startTyping])

  return { displayedText, isComplete }
}

export default function Hero() {
  const name = "Biswajit Padhan"
  const description = "I build modern web applications with the MERN stack, specializing in scalable backend systems and intuitive user interfaces. Currently at Ishvara Tech, crafting solutions that matter."
  
  const { displayedText: displayedName, isComplete: nameComplete } = useTypingEffect(name, 100)
  const { displayedText: displayedDescription, isComplete: descriptionComplete } = useTypingEffect(
    description, 
    30, 
    nameComplete
  )

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background glowing orb */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[100px] -z-10 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
      
      <div className="max-w-4xl w-full relative z-10">
        <div className="space-y-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-pretty min-h-[5rem] flex items-center">
              {displayedName}
              {!nameComplete && (
                <span className="inline-block w-1 h-16 md:h-20 bg-primary ml-2 animate-pulse"></span>
              )}
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-light">Full Stack Developer</p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty min-h-[6rem]">
            {displayedDescription}
            {nameComplete && !descriptionComplete && (
              <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse"></span>
            )}
          </p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={descriptionComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-shadow"
          >
            View My Work
            <ArrowRight size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-md border border-white/10 text-foreground rounded-lg font-medium hover:border-primary/50 transition-colors"
          >
            Get In Touch
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`${import.meta.env.BASE_URL}Biswajit Padhan MERN STACK DEVELOPER.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-md border border-white/10 text-foreground rounded-lg font-medium hover:border-primary/50 transition-colors"
          >
            <FileText size={18} />
            Check My CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex gap-6 pb-8"
          initial={{ opacity: 0 }}
          animate={descriptionComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { icon: Github, href: "https://github.com/BiswaJit0407", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/biswajit-padhan-64b935298/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:biswajitpadhan2001@gmail.com", label: "Email" },
            { icon: Phone, href: "tel:+919348574287", label: "Phone" }
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2, rotate: 5, color: "#3b82f6" }}
              whileTap={{ scale: 0.9 }}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted-foreground transition-colors"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
