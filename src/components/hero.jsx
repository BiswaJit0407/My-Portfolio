import { ArrowUpRight, Code2, FileText, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const socials = [
  { icon: Github, href: "https://github.com/BiswaJit0407", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/biswajit-padhan-64b935298/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:biswajitpadhan2001@gmail.com", label: "Email" },
]

export default function Hero() {
  return (
    <section id="home" className="hero-section relative flex min-h-[92vh] items-center overflow-hidden px-6 pb-20 pt-32">
      <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles size={15} /> Full Stack Developer · MERN Stack
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.28em] text-muted-foreground">Hello, I'm</p>
          <h1 className="max-w-3xl text-5xl font-bold leading-[1.04] tracking-[-.055em] text-foreground sm:text-6xl lg:text-7xl">
            Biswajit <span className="hero-gradient-text">Padhan.</span>
          </h1>
          <h2 className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-foreground/85 sm:text-2xl">I build digital experiences that feel as good as they work.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            I build modern web applications with the MERN stack, specializing in scalable backend systems and intuitive user interfaces. Currently at Ishvara Tech, crafting solutions that matter.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="primary-cta">Explore my work <ArrowUpRight size={18} /></a>
            <a href="#contact" className="secondary-cta">Let's talk</a>
            <a href={`${import.meta.env.BASE_URL}Biswajit Padhan MERN STACK DEVELOPER.pdf`} target="_blank" rel="noopener noreferrer" className="secondary-cta"><FileText size={17} /> View CV</a>
          </div>
          <div className="mt-10 flex items-center gap-5">
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="social-link"><Icon size={18} /></a>)}
            </div>
            <span className="h-7 w-px bg-border" />
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><MapPin size={15} className="text-primary" /> Bhubaneswar, India</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[440px]">
          <div className="hero-card relative overflow-hidden rounded-[2rem] border border-white/10 p-7 shadow-2xl sm:p-9">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
            <div className="relative">
              <div className="mb-10 flex items-center justify-between"><span className="text-xs font-semibold uppercase tracking-[.24em] text-muted-foreground">Developer profile</span><span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Building things</span></div>
              <div className="mx-auto flex aspect-square max-w-[230px] items-center justify-center rounded-[2rem] border border-primary/30 bg-gradient-to-br from-primary/25 via-slate-900 to-violet-500/20 shadow-[0_0_80px_rgba(59,130,246,.16)]">
                <div className="text-center"><div className="font-mono text-7xl font-bold tracking-[-.12em] text-white">BP<span className="text-sky-400">.</span></div><div className="mt-3 text-xs uppercase tracking-[.35em] text-slate-400">Code · Create · Solve</div></div>
              </div>
              <div className="mt-9 grid grid-cols-3 gap-3">
                {[["1+", "Year experience"], ["MERN", "Core stack"], ["6", "Featured projects"]].map(([value,label]) => <div key={label} className="rounded-2xl border border-white/10 bg-white/[.04] p-3 text-center"><div className="text-xl font-bold text-white sm:text-2xl">{value}</div><div className="mt-1 text-[10px] leading-4 text-slate-400 sm:text-xs">{label}</div></div>)}
              </div>
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm text-slate-400"><span className="inline-flex items-center gap-2"><Code2 size={15} className="text-sky-400" /> Full-stack engineering</span><ArrowUpRight size={16} /></div>
            </div>
          </div>
          <div className="pointer-events-none absolute -bottom-5 -left-6 -z-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}