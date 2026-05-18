import { useEffect, useState } from "react"
import SocialMedia from "./SocialMedia.jsx"

function Hero({ profile, stats, onNavigate }) {
  const [imageIndex, setImageIndex] = useState(0)
  const [styleIndex, setStyleIndex] = useState(0)
  const activeImage = profile.heroImages[imageIndex]
  const activeStyle = profile.nameStyles[styleIndex]
  const activeBgImage = profile.heroBgImages[0]

  useEffect(() => {
    const imageTimer = window.setInterval(() => {
      setImageIndex((current) => (current + 1) % profile.heroImages.length)
    }, 2000)

    const styleTimer = window.setInterval(() => {
      setStyleIndex((current) => (current + 1) % profile.nameStyles.length)
    }, 1200)

    return () => {
      window.clearInterval(imageTimer)
      window.clearInterval(styleTimer)
    }
  }, [profile.heroImages.length, profile.nameStyles.length])

  return (
    <section id="home" className="hero-section">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 18, 35, 0.58), rgba(10, 18, 35, 0.82)), url('${activeBgImage}')`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll",
        }}
      />
      <div className="hero-gradient" />
      <div className="hero-content">
        <div className="profile-image">
          <img src={activeImage} alt={profile.name} />
        </div>
        <p className="eyebrow">Hello, I am</p>
        <h1
          className="animated-name"
          style={{
            "--name-color": activeStyle.color,
            "--name-weight": activeStyle.weight,
            "--name-style": activeStyle.style,
            "--name-scale": activeStyle.scale,
          }}
        >
          {profile.name}
        </h1>
        <div className="role-ticker">
          {profile.roles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault()
              onNavigate("contact")
            }}
          >
            Contact Me
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer noopener">
            View Resume
          </a>
          <a
            className="secondary"
            href="/projects"
            onClick={(e) => {
              e.preventDefault()
              onNavigate("projects")
            }}
          >
            View Work
          </a>
        </div>
        <SocialMedia links={profile.links} />
        <div className="hero-stats">
          {stats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
