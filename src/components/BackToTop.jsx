function BackToTop({ onNavigate }) {
  const handleClick = (e) => {
    e.preventDefault()
    onNavigate("home")
  }

  return (
    <a className="back-to-top" href="/" aria-label="Back to top" onClick={handleClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 4L12 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 11L12 4L19 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}

export default BackToTop
