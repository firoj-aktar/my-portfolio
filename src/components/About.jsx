function About({ profile, resumeHighlights }) {
  return (
    <section id="about" className="section about-grid">
      <div>
        <p className="section-label">About</p>
        <h2>Focused on clean UI, Angular migration, and practical full-stack growth.</h2>
        <p>
          Expertise in Angular, TypeScript, RxJS, NgRx, Angular Material, Tailwind CSS, HTML5,
          CSS3, SCSS, Bootstrap, REST APIs, JSON, Git, GitHub, SVN, Postman, and responsive UI
          development.
        </p>
        <p>
          I enjoy building reusable components, dynamic forms, lazy-loaded modules, and practical
          business workflows with clean, maintainable code.
        </p>
        <div className="highlight-list">
          {resumeHighlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      </div>
      <div className="info-card">
        <dl>
          <div>
            <dt>Email</dt>
            <dd>{profile.email}</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>{profile.phone}</dd>
          </div>
          <div>
            <dt>Date of Birth</dt>
            <dd>{profile.dob}</dd>
          </div>
          <div>
            <dt>Address</dt>
            <dd>Kolkata, West Bengal</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>Bengali, Hindi, Urdu, English</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

export default About
