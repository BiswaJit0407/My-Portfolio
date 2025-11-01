import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl w-full">
        <div className="space-y-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-pretty">Biswajit Padhan</h1>
            <p className="text-2xl md:text-3xl text-primary font-light">Full Stack Developer</p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            I build modern web applications with the MERN stack, specializing in scalable backend systems and intuitive
            user interfaces. Currently at Ishvara Tech, crafting solutions that matter.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 pb-8">
          <a
            href="https://github.com/BiswaJit0407"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/biswajit-padhan-64b935298/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:biswajitpadhan2001@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+919348574287"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Phone"
          >
            <Phone size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
