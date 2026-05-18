import { useEffect, useRef, useState } from "react"
import About from "./components/About.jsx"
import BackToTop from "./components/BackToTop.jsx"
import Certifications from "./components/Certifications.jsx"
import Contact from "./components/Contact.jsx"
import Education from "./components/Education.jsx"
import Experience from "./components/Experience.jsx"
import Gallery from "./components/Gallery.jsx"
import Hero from "./components/Hero.jsx"
import Lightbox from "./components/Lightbox.jsx"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import Projects from "./components/Projects.jsx"
import Services from "./components/Services.jsx"
import Skills from "./components/Skills.jsx"
import {
  certifications,
  education,
  experiences,
  gallery,
  navItems,
  profile,
  projectFilters,
  projects,
  resumeHighlights,
  services,
  skills,
  stats,
} from "./data/portfolioData.js"
import "./App.css"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [activeProjectFilter, setActiveProjectFilter] = useState("All")
  const [activeGalleryImage, setActiveGalleryImage] = useState(null)
  const [copied, setCopied] = useState(false)
  const isProgrammaticScroll = useRef(false)

  const scrollToSection = (section, smooth = true) => {
    const el = document.getElementById(section)
    if (!el) return

    if (smooth) {
      isProgrammaticScroll.current = true
      el.scrollIntoView({ behavior: "smooth" })
      window.setTimeout(() => {
        isProgrammaticScroll.current = false
      }, 900)
    } else {
      el.scrollIntoView({ behavior: "auto" })
    }
  }

  const filteredProjects =
    activeProjectFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tech.toLowerCase().includes(activeProjectFilter.toLowerCase()),
        )

  function copyEmail() {
    navigator.clipboard?.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  useEffect(() => {
    const getSectionFromPath = () => {
      const path = window.location.pathname.replace(/^\/|\/$/g, "")
      return path || "home"
    }

    const updateActiveSection = () => {
      const current = getSectionFromPath()
      setActiveSection(current)
      scrollToSection(current, false)
    }

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return

      const sectionIds = navItems
      let closest = "home"
      let closestDistance = Infinity

      sectionIds.forEach((sectionId) => {
        const el = document.getElementById(sectionId)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const distance = Math.abs(rect.top - 96)
        if (distance < closestDistance) {
          closestDistance = distance
          closest = sectionId
        }
      })

      setActiveSection(closest)
      const newPath = closest === "home" ? "/" : `/${closest}`
      if (window.location.pathname !== newPath) {
        window.history.replaceState({}, "", newPath)
      }
    }

    updateActiveSection()
    window.addEventListener("popstate", updateActiveSection)
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("popstate", updateActiveSection)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navigateToSection = (section) => {
    const target = section || "home"
    setActiveSection(target)
    setMenuOpen(false)
    const newPath = target === "home" ? "/" : `/${target}`
    window.history.pushState({}, "", newPath)
    scrollToSection(target)
  }

  return (
    <main className={darkMode ? "portfolio-app dark-mode" : "portfolio-app"}>
      <Navbar
        darkMode={darkMode}
        menuOpen={menuOpen}
        navItems={navItems}
        activeSection={activeSection}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={navigateToSection}
        onThemeToggle={() => setDarkMode((mode) => !mode)}
      />
      <Hero profile={profile} stats={stats} onNavigate={navigateToSection} />
      <About profile={profile} resumeHighlights={resumeHighlights} />
      <Services services={services} />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
      <Projects
        activeFilter={activeProjectFilter}
        filters={projectFilters}
        projects={filteredProjects}
        onFilterChange={setActiveProjectFilter}
      />
      <Education education={education} />
      <Certifications certifications={certifications} />
      <Gallery gallery={gallery} onImageOpen={setActiveGalleryImage} />
      <Contact copied={copied} profile={profile} onCopyEmail={copyEmail} />
      <BackToTop onNavigate={navigateToSection} />
      <Lightbox image={activeGalleryImage} onClose={() => setActiveGalleryImage(null)} />
      <Footer profile={profile} />
    </main>
  )
}

export default App
