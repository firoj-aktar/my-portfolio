function Experience({ experiences }) {
  return (
    <section id="experience" className="section">
      <p className="section-label">Experience</p>
      <h2>Professional Timeline</h2>
      <div className="timeline">
        {experiences.map((item) => (
          <article key={item.timeline}>
            <span>{item.timeline}</span>
            <h3>{item.role}</h3>
            <p className="company">
              {item.company} | {item.location}
            </p>
            <p>{item.work}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
