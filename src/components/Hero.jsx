import { useEffect, useState } from "react"
import SocialMedia from "./SocialMedia.jsx"

function Hero({ profile, stats }) {
  const [imageIndex, setImageIndex] = useState(0)
  const [styleIndex, setStyleIndex] = useState(0)
  const activeImage = profile.heroImages[imageIndex]
  const activeStyle = profile.nameStyles[styleIndex]

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
      <div className="hero-bg" />
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
          <a href="#contact">Contact Me</a>
          <a href={profile.resume} download>
            Download Resume
          </a>
          <a className="secondary" href="#projects">
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
