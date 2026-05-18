function Navbar({ darkMode, menuOpen, navItems, activeSection, onMenuToggle, onThemeToggle, onNavigate }) {
  const handleClick = (e, item) => {
    e.preventDefault()
    onNavigate(item)
  }

  return (
    <nav className="site-nav">
      <a className="brand" href="/" onClick={(e) => handleClick(e, "home")}>
        <img src="/portfolio/Logo_FA.png" alt="" />
        <span>Firoj's Portfolio</span>
      </a>

      <div className="nav-controls">
        <button
          className={darkMode ? "theme-switch active" : "theme-switch"}
          type="button"
          onClick={onThemeToggle}
          aria-label="Toggle light and dark mode"
        >
          <span className="switch-track">
            <span className="switch-thumb" />
          </span>
          <span className="switch-text">{darkMode ? "Dark" : "Light"}</span>
        </button>

        <button
          className={menuOpen ? "menu-button open" : "menu-button"}
          type="button"
          onClick={onMenuToggle}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={menuOpen ? "nav-links open" : "nav-links"}>
        {navItems.map((item) => (
          <a
            key={item}
            href={item === "home" ? "/" : `/${item}`}
            className={item === activeSection ? "active" : ""}
            onClick={(e) => handleClick(e, item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

      <div
        className={menuOpen ? "nav-backdrop open" : "nav-backdrop"}
        onClick={onNavigate}
      />
    </nav>
  )
}

export default Navbar
