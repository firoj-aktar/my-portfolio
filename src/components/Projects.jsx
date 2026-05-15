function Projects({ activeFilter, filters, projects, onFilterChange }) {
  return (
    <section id="projects" className="section">
      <p className="section-label">Projects</p>
      <h2>Project Highlights</h2>
      <div className="filter-row">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? "active" : ""}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title}>
            <p>{project.tech}</p>
            <h3>{project.title}</h3>
            <span>{project.desc}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
