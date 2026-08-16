import './PYQSection.css'

// Year and subject filter options — static for now
const years = ['2025', '2024', '2023', '2022']
const pyqSubjects = ['DBMS', 'OS', 'CN', 'DSA']

function PYQSection() {
  return (
    <section className="section pyq-section">
      <div className="container pyq-inner">

        {/* Left text */}
        <div className="pyq-content">
          <span className="tag">📄 Previous Year Questions</span>
          <h2 className="pyq-title">Practice With Previous Year Questions</h2>
          <p className="pyq-description">
            Prepare smarter by solving real exam papers from previous years.
          </p>
          <button className="btn-primary">Explore PYQs →</button>
        </div>

        {/* Right — filter preview */}
        <div className="pyq-filters-card">
          <p className="filter-label">Filter by Year</p>
          {/* Render year buttons using map() */}
          <div className="filter-row">
            {years.map((year) => (
              <button key={year} className="filter-btn">{year}</button>
            ))}
          </div>

          <p className="filter-label">Filter by Subject</p>
          {/* Render subject buttons using map() */}
          <div className="filter-row">
            {pyqSubjects.map((sub) => (
              <button key={sub} className="filter-btn">{sub}</button>
            ))}
          </div>

          <div className="pyq-preview-note">
            📝 240+ PYQ papers available
          </div>
        </div>

      </div>
    </section>
  )
}

export default PYQSection
