import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import darkLogo from "/darklogo.png"
import lightLogo from "/lightlogo.png"

const sections = ["about", "skills", "experience", "projects", "contact"]

export default function Navigation({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState(() => typeof window !== "undefined" && !document.documentElement.classList.contains("dark") ? "light" : "dark")

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light"))
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 88, behavior: "smooth" })
      setActiveSection(id)
      setMobileOpen(false)
    }
  }

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-border/70 bg-background/85 shadow-lg shadow-black/5 backdrop-blur-2xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-3" aria-label="Back to top">
          <img src={theme === "dark" ? darkLogo : lightLogo} alt="Biswajit Padhan" className="h-11 w-11 object-contain" />
          <span className="hidden text-left sm:block"><span className="block text-sm font-bold tracking-tight text-foreground">Biswajit Padhan</span><span className="block text-[11px] text-muted-foreground">Full Stack Developer</span></span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {sections.map(section => <button key={section} onClick={() => scrollToSection(section)} className={`nav-link capitalize ${activeSection === section ? "nav-link-active" : ""}`}>{section}</button>)}
          <span className="mx-2 h-6 w-px bg-border" /><ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} className="social-link" aria-label={mobileOpen ? "Close menu" : "Open menu"}>{mobileOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
      {mobileOpen && <div className="border-t border-border/70 bg-background/95 px-6 py-4 backdrop-blur-2xl md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-1">{sections.map(section => <button key={section} onClick={() => scrollToSection(section)} className={`rounded-xl px-4 py-3 text-left text-sm font-medium capitalize transition-colors ${activeSection === section ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>{section}</button>)}</div></div>}
    </nav>
  )
}