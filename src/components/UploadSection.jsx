import './UploadSection.css'

function UploadSection() {
  return (
    <section className="upload-section">
      <div className="container upload-inner">
        <div className="upload-icon-big">📤</div>
        <h2 className="upload-title">Have Great Notes?</h2>
        <p className="upload-description">
          Help other students by sharing your study material.<br />
          Your notes could be someone else's breakthrough.
        </p>
        <button className="btn-primary upload-btn">Upload Your Notes</button>
      </div>
    </section>
  )
}

export default UploadSection
