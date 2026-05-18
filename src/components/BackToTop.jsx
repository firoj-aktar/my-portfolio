function BackToTop() {
  const handleClick = (e) => {
    e.preventDefault()
    const id = "home"
    const path = "/"
    window.history.pushState({}, "", path)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <a className="back-to-top" href="/" aria-label="Back to top" onClick={handleClick}>
      Top
    </a>
  )
}

export default BackToTop
