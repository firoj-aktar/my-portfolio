import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import SocialMedia from "./SocialMedia.jsx"

function Contact({ profile }) {
  const formRef = useRef(null)
  const timeoutRef = useRef(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")
  const [sending, setSending] = useState(false)

  const sendEmail = async (event) => {
    event.preventDefault()
    if (!formRef.current) return

    setSending(true)
    setStatus("")

    try {
      const result = await emailjs.sendForm(
        "service_sk3ytgt",
        "template_h9rs46c",
        formRef.current,
        "s_7xukBLWKYqSY9QS"
      )

      if (result.status !== 200) {
        throw new Error("Email send failed")
      }

      setStatus("Message sent successfully!")
      timeoutRef.current = window.setTimeout(() => {
        setStatus("")
      }, 3000)
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
      if (formRef.current) formRef.current.reset()
    } catch (error) {
      console.error("EmailJS error", error)
      setStatus(
        "Something went wrong while sending. Please try again or contact me directly via email."
      )
    } finally {
      setSending(false)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

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
          <input
            type="tel"
            name="user_phone"
            value={phone}
            placeholder="Mobile number (optional)"
            autoComplete="tel"
            onChange={(e) => setPhone(e.target.value)}
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
