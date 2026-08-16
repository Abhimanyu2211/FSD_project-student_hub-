import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">

        {/* Brand column */}
        <div className="footer-brand">
          <p className="footer-logo">📚 NotesHub</p>
          <p className="footer-tagline">Academic resources, organized for students.</p>
        </div>

        {/* Platform links */}
        <div className="footer-column">
          <p className="footer-heading">Platform</p>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore Notes</a></li>
            <li><a href="#">Subjects</a></li>
            <li><a href="#">PYQs</a></li>
          </ul>
        </div>

        {/* Student links */}
        <div className="footer-column">
          <p className="footer-heading">Student</p>
          <ul className="footer-links">
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Bookmarks</a></li>
            <li><a href="#">Upload Notes</a></li>
          </ul>
        </div>

        {/* Admin links */}
        <div className="footer-column">
          <p className="footer-heading">Admin</p>
          <ul className="footer-links">
            <li><a href="#">Admin Login</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 NotesHub. Built for students.</p>
      </div>
    </footer>
  )
}

export default Footer
