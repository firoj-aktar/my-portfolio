import React from "react"

export default function Footer({ profile }) {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <small>© {year} {profile?.name}. All rights reserved.</small>
      </div>
    </footer>
  )
}
