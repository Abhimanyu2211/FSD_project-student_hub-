import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">

        {/* Left side — text content */}
        <div className="hero-content">
          <span className="hero-badge">🎓 Built for Students</span>

          <h1 className="hero-title">
            Your Notes. Your Subjects.<br />
            Your Semester.<br />
            All in One Place.
          </h1>

          <p className="hero-description">
            Find, organize and explore academic resources designed for students.
          </p>

          {/* Search bar */}
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search notes, subjects, topics..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>

          {/* Action buttons */}
          <div className="hero-buttons">
            <button className="btn-primary">Explore Notes</button>
            <button className="btn-outline">Browse Subjects</button>
          </div>
        </div>

        {/* Right side — fake dashboard preview */}
        <div className="dashboard-preview">
          <div className="dashboard-card">

            {/* Welcome header */}
            <div className="dashboard-header">
              <p className="dashboard-welcome">Welcome back 👋</p>
              <p className="dashboard-semester">5th Semester • CSE</p>
            </div>

            {/* Stats row */}
            <div className="dashboard-stats">
              <div className="dashboard-stat">
                <span className="stat-number">24</span>
                <span className="stat-label">Notes</span>
              </div>
              <div className="dashboard-stat">
                <span className="stat-number">8</span>
                <span className="stat-label">PYQs</span>
              </div>
            </div>

            {/* Recent notes */}
            <p className="dashboard-section-title">Recent Notes</p>
            <div className="dashboard-note-item">
              <span className="note-icon">📄</span>
              <div>
                <p className="note-name">Operating Systems</p>
                <p className="note-sub">CPU Scheduling</p>
              </div>
            </div>
            <div className="dashboard-note-item">
              <span className="note-icon">📄</span>
              <div>
                <p className="note-name">DBMS</p>
                <p className="note-sub">Normalization</p>
              </div>
            </div>

            {/* Popular subjects tags */}
            <p className="dashboard-section-title">Popular Subjects</p>
            <div className="dashboard-tags">
              <span className="tag">DBMS</span>
              <span className="tag">OS</span>
              <span className="tag">CN</span>
              <span className="tag">DSA</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
