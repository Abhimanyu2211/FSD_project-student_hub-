import { useState } from 'react'
import './QuizPreview.css'

// The four answer options for the sample question
const options = [
  { label: 'A', text: 'Memory allocation' },
  { label: 'B', text: 'Process synchronization' },
  { label: 'C', text: 'File management' },
  { label: 'D', text: 'CPU scheduling' },
]

function QuizPreview() {
  // Track which option the user clicked
  const [selected, setSelected] = useState(null)

  return (
    <section className="section quiz-section">
      <div className="container quiz-inner">

        {/* Left — section text */}
        <div className="quiz-content">
          <span className="tag">🧠 Quiz Preview</span>
          <h2 className="quiz-title">Test Your Knowledge</h2>
          <p className="quiz-description">
            Practice with subject-wise quizzes to prepare for your exams.
          </p>
          <button className="btn-primary">Try a Quiz →</button>
        </div>

        {/* Right — fake quiz card */}
        <div className="quiz-card">
          {/* Progress indicator */}
          <div className="quiz-progress">
            <span className="quiz-score">8 / 10</span>
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: '80%' }}></div>
            </div>
          </div>

          <p className="quiz-question">
            What is the main purpose of a semaphore?
          </p>

          {/* Render answer options using map() */}
          <div className="quiz-options">
            {options.map((option) => (
              <button
                key={option.label}
                className={`quiz-option ${selected === option.label ? 'selected' : ''}`}
                onClick={() => setSelected(option.label)}
              >
                <span className="option-label">{option.label}</span>
                {option.text}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default QuizPreview
