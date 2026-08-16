import './NoteCard.css'

// NoteCard receives title, subject, unit, rating, views as props
function NoteCard({ title, subject, unit, rating, views }) {
  return (
    <div className="note-card">
      {/* Top section: subject tag + unit tag */}
      <div className="note-tags">
        <span className="tag">{subject}</span>
        <span className="note-unit">{unit}</span>
      </div>

      {/* Note title */}
      <h3 className="note-title">{title}</h3>

      {/* Rating and views row */}
      <div className="note-meta">
        <span className="note-rating">⭐ {rating}</span>
        <span className="note-views">👁 {views} views</span>
      </div>

      {/* View button */}
      <button className="btn-primary note-btn">View Note →</button>
    </div>
  )
}

export default NoteCard
