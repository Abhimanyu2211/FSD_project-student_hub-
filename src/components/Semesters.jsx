import './Semesters.css'

// Array of semesters — easy to add more or change labels
const semesters = [1, 2, 3, 4, 5, 6, 7, 8]

function Semesters() {
  return (
    <section className="section semesters-section">
      <div className="container">
        <h2 className="section-title">Explore by Semester</h2>
        <p className="section-subtitle">Browse resources organized semester-wise.</p>

        {/* Render one card per semester using map() */}
        <div className="semesters-grid">
          {semesters.map((sem) => (
            <div key={sem} className="semester-card">
              <span className="semester-number">{sem}</span>
              <p className="semester-label">Semester {sem}</p>
              <span className="semester-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Semesters
