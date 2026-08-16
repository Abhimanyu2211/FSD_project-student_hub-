import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Semesters from './components/Semesters'
import Subjects from './components/Subjects'
import TrendingNotes from './components/TrendingNotes'
import PYQSection from './components/PYQSection'
import UploadSection from './components/UploadSection'
import QuizPreview from './components/QuizPreview'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

// App.jsx — the main component that puts all sections together
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Semesters />
      <Subjects />
      <TrendingNotes />
      <PYQSection />
      <UploadSection />
      <QuizPreview />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
