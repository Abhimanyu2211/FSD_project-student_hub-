import './SubjectCard.css'

// SubjectCard receives name, code, notes count, and color as props
function SubjectCard({ name, code, notes, color }) {
  return (
    <div className="subject-card">
      {/* Colored circle showing subject code */}
      <div
        className="subject-icon"
        style={{ backgroundColor: color }}
      >
        {code}
      </div>
      <h3 className="subject-name">{name}</h3>
      <p className="subject-notes">{notes} Notes</p>
      <button className="subject-btn">View Notes →</button>
    </div>
  )
}

export default SubjectCard
