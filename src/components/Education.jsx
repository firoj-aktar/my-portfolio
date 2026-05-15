function Education({ education }) {
  return (
    <section id="education" className="section">
      <p className="section-label">Education</p>
      <h2>Academic Journey</h2>
      <div className="education-grid">
        {education.map((item) => (
          <article key={item.title}>
            <img src={item.image} alt="" />
            <div>
              <span>{item.timeline}</span>
              <h3>{item.title}</h3>
              <p className="company">{item.stream}</p>
              <p>{item.institution}</p>
              <p>{item.info}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
