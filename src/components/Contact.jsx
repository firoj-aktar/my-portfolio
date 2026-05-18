import { useRef, useState } from "react"
import SocialMedia from "./SocialMedia.jsx"

function Contact({ profile }) {
  const formRef = useRef(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [sending, setSending] = useState(false)

  const sendEmail = async (event) => {
    event.preventDefault()
    if (!formRef.current) return

    setSending(true)
    setStatus("")

    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("message", message)
      formData.append("_subject", `Portfolio contact from ${name || "visitor"}`)
      formData.append("_captcha", "false")

      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        },
      )

      const result = await response.json()
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error(result.message || "Email send failed")
      }

      setStatus("Message sent successfully!")
      setName("")
      setEmail("")
      setMessage("")
      if (formRef.current) formRef.current.reset()
    } catch (error) {
      console.error("FormSubmit error", error)
      setStatus(
        "Something went wrong while sending. Please try again or contact me directly via email."
      )
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div>
        <p className="section-label">Contact</p>
        <h2>Let’s build something useful together.</h2>
        <p>
          I’m {profile.name}, a Sr. Software Engineer focused on Angular frontend development,
          responsive UI, REST API integration, dynamic forms, and enterprise systems.
          If your project needs a polished, scalable frontend experience, send me a message and
          let’s make it happen.
        </p>
      </div>
      <div className="contact-card">
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="user_name" value={name} placeholder="Your name" autoComplete="name" required onChange={(e) => setName(e.target.value)} />
          <input
            type="email"
            name="user_email"
            value={email}
            placeholder="Your email"
            autoComplete="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            value={message}
            placeholder="Your message"
            rows="6"
            autoComplete="off"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p className={`status-message ${status.includes("success") ? "success" : "error"}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
