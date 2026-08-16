import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  // useState controls whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle the menu open/closed when hamburger is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">

        {/* Logo */}
        <a href="#" className="navbar-logo">
          📚 NotesHub
        </a>

        {/* Hamburger button — only shows on mobile */}
        <button className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Nav links — hidden on mobile unless menu is open */}
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">Explore Notes</a></li>
          <li><a href="#" className="nav-link">Subjects</a></li>
          <li><a href="#" className="nav-link">PYQs</a></li>
          <li><a href="#" className="nav-link">Quizzes</a></li>
          <li><a href="#" className="nav-link">About</a></li>
        </ul>

        {/* Login buttons */}
        <div className={`nav-buttons ${isMenuOpen ? 'open' : ''}`}>
          <button className="btn-outline">Student Login</button>
          <button className="btn-primary">Admin Login</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
