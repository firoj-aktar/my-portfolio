function Certifications({ certifications }) {
  return (
    <section id="certifications" className="section">
      <p className="section-label">Certifications</p>
      <h2>Training and Credentials</h2>
      <div className="certification-grid">
        {certifications.map((certification) => (
          <article key={certification.title}>
            <div>
              <span>{certification.timeline}</span>
              <h3>{certification.title}</h3>
              <p className="company">
                {certification.provider} | {certification.location}
              </p>
            </div>
            <ul>
              {certification.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications
