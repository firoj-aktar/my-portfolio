import { useEffect, useState } from "react"
import About from "./components/About.jsx"
import BackToTop from "./components/BackToTop.jsx"
import Certifications from "./components/Certifications.jsx"
import Contact from "./components/Contact.jsx"
import Education from "./components/Education.jsx"
import Experience from "./components/Experience.jsx"
import Gallery from "./components/Gallery.jsx"
import Hero from "./components/Hero.jsx"
import Lightbox from "./components/Lightbox.jsx"
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
    const updateActiveSection = () => {
      const current = window.location.hash.replace("#", "") || "home"
      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener("hashchange", updateActiveSection)

    return () => {
      window.removeEventListener("hashchange", updateActiveSection)
    }
  }, [])

  return (
    <main className={darkMode ? "portfolio-app dark-mode" : "portfolio-app"}>
      <Navbar
        darkMode={darkMode}
        menuOpen={menuOpen}
        navItems={navItems}
        activeSection={activeSection}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
        onThemeToggle={() => setDarkMode((mode) => !mode)}
      />
      <Hero profile={profile} stats={stats} />
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
      <BackToTop />
      <Lightbox image={activeGalleryImage} onClose={() => setActiveGalleryImage(null)} />
    </main>
  )
}

export default App
