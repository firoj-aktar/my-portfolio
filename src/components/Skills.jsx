function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <p className="section-label">Skills</p>
      <h2>Technical Stack</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.name}>
            <div>
              <span>{skill.name}</span>
              <strong>{skill.value}%</strong>
            </div>
            <progress value={skill.value} max="100" />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
