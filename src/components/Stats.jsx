import './Stats.css'

// Static numbers for the homepage
const stats = [
  { number: '2,500+', label: 'Notes' },
  { number: '50+', label: 'Subjects' },
  { number: '10+', label: 'Branches' },
  { number: '5,000+', label: 'Students' },
]

function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {/* Use map() to render each stat card from the array */}
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <p className="stat-card-number">{stat.number}</p>
            <p className="stat-card-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
