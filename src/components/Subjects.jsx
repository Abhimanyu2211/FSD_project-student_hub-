import SubjectCard from './SubjectCard'
import './Subjects.css'

// Subject data stored in an array with all needed info
const subjects = [
  {
    name: 'Data Structures & Algorithms',
    code: 'DSA',
    notes: 42,
    color: '#4f46e5',
  },
  {
    name: 'Database Management Systems',
    code: 'DBMS',
    notes: 36,
    color: '#0891b2',
  },
  {
    name: 'Operating Systems',
    code: 'OS',
    notes: 28,
    color: '#059669',
  },
  {
    name: 'Computer Networks',
    code: 'CN',
    notes: 31,
    color: '#d97706',
  },
  {
    name: 'Software Engineering',
    code: 'SE',
    notes: 24,
    color: '#dc2626',
  },
  {
    name: 'Computer Architecture',
    code: 'CA',
    notes: 19,
    color: '#7c3aed',
  },
]

function Subjects() {
  return (
    <section className="section subjects-section">
      <div className="container">
        <h2 className="section-title">Popular Subjects</h2>
        <p className="section-subtitle">Start with the most-studied subjects.</p>

        {/* Render each SubjectCard using map() */}
        <div className="subjects-grid">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.code}
              name={subject.name}
              code={subject.code}
              notes={subject.notes}
              color={subject.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Subjects
