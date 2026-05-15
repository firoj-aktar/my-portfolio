function SocialMedia({ links, className = "" }) {
  const socialIcons = {
    GitHub: (
      <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M12 0.5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.78 8.2 11.37.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.23-3.24-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.76.84 1.23 1.92 1.23 3.24 0 4.63-2.82 5.66-5.5 5.96.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.26 0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"
        />
      </svg>
    ),
    LinkedIn: (
      <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm.02 6.86H2V21h3V10.36Zm7.34 0h-3V21h3v-5.71c0-1.54.55-2.59 1.92-2.59 1.36 0 1.38 1.22 1.38 2.66V21h3v-6.75c0-3.62-1.93-5.31-4.5-5.31-1.95 0-2.82 1.08-3.3 1.84h.02V10.36Z"
        />
      </svg>
    ),
    Instagram: (
      <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M7.75 2.75h8.5A4 4 0 0 1 20.5 6.75v8.5a4 4 0 0 1-4 4h-8.5a4 4 0 0 1-4-4v-8.5a4 4 0 0 1 4-4Z"
        />
        <path fill="currentColor" d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
    Facebook: (
      <svg viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h7.22V14.56H9.69V11.3h2.53V8.8c0-2.5 1.5-3.86 3.72-3.86 1.06 0 1.97.08 2.24.11v2.6h-1.54c-1.21 0-1.45.57-1.45 1.4v1.86h2.9l-.38 3.26h-2.52V24H19c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Z"
        />
      </svg>
    ),
  }

  const getLinkClass = (label) =>
    `social-link social-link-${label.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <div className={`social-links ${className}`.trim()}>
      {links.map((link) => (
        <a
          key={link.label}
          className={getLinkClass(link.label)}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          aria-label={link.label}
        >
          {socialIcons[link.label] || link.label}
        </a>
      ))}
    </div>
  )
}

export default SocialMedia
