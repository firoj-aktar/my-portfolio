import SocialMedia from "./SocialMedia.jsx"

function Contact({ copied, profile, onCopyEmail }) {
  return (
    <section id="contact" className="section contact-section">
      <div>
        <p className="section-label">Contact</p>
        <h2>Let us build something useful.</h2>
        <p>
          Feel free to contact me for Angular frontend development, responsive UI, REST API
          integration, dynamic forms, and enterprise workflow opportunities.
        </p>
      </div>
      <div className="contact-card">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href="tel:+916296617079">{profile.phone}</a>
        <button type="button" onClick={onCopyEmail}>
          {copied ? "Email Copied" : "Copy Email"}
        </button>
        <SocialMedia links={profile.links} />
      </div>
    </section>
  )
}

export default Contact
