import NoteCard from './NoteCard'
import './TrendingNotes.css'

// Trending notes data — static for now, will come from API later
const trendingNotes = [
  {
    title: 'CPU Scheduling Complete Notes',
    subject: 'Operating Systems',
    unit: 'Unit 3',
    rating: '4.9',
    views: '1.2k',
  },
  {
    title: 'DBMS Normalization',
    subject: 'Database Management',
    unit: 'Unit 4',
    rating: '4.8',
    views: '980',
  },
  {
    title: 'Computer Networks TCP/IP',
    subject: 'Computer Networks',
    unit: 'Unit 2',
    rating: '4.7',
    views: '870',
  },
  {
    title: 'DSA Trees & Graphs',
    subject: 'Data Structures',
    unit: 'Unit 5',
    rating: '4.9',
    views: '1.5k',
  },
]

function TrendingNotes() {
  return (
    <section className="section trending-section">
      <div className="container">
        <h2 className="section-title">Trending Notes</h2>
        <p className="section-subtitle">The most-viewed notes this week.</p>

        {/* Render each NoteCard using map() */}
        <div className="trending-grid">
          {trendingNotes.map((note) => (
            <NoteCard
              key={note.title}
              title={note.title}
              subject={note.subject}
              unit={note.unit}
              rating={note.rating}
              views={note.views}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingNotes
