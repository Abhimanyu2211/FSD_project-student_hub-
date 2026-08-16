import FeatureCard from './FeatureCard'
import './Features.css'

// The 6 features — stored in an array so we can render them with map()
const features = [
  {
    icon: '📚',
    title: 'Organized Notes',
    description: 'Find notes according to semester, subject and unit.',
  },
  {
    icon: '🔎',
    title: 'Smart Search',
    description: 'Quickly find the resources you need.',
  },
  {
    icon: '📄',
    title: 'Previous Year Questions',
    description: 'Practice using previous-year papers.',
  },
  {
    icon: '🔖',
    title: 'Bookmarks',
    description: 'Save important resources for quick access.',
  },
  {
    icon: '🧠',
    title: 'Quizzes',
    description: 'Test your knowledge with subject-wise quizzes.',
  },
  {
    icon: '📊',
    title: 'Progress',
    description: 'Track your learning activity over time.',
  },
]

function Features() {
  return (
    <section className="section features-section">
      <div className="container">
        <h2 className="section-title">Why NotesHub?</h2>
        <p className="section-subtitle">Everything you need for your academic journey.</p>

        {/* Render each feature card using map() */}
        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
