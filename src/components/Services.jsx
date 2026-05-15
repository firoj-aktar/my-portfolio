function Services({ services }) {
  return (
    <section className="section services-section">
      <p className="section-label">What I Do</p>
      <h2>Practical engineering for real product screens.</h2>
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title}>
            <span />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
