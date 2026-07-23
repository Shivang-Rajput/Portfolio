import { useEffect } from 'react'
import { resumeUrl } from '../data'

export default function ResumeModal({ open, onClose }) {
  // close on Escape, and stop the page scrolling behind the modal while it's open
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="resume-overlay" onClick={onClose}>
      <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-head">
          <span>Resume</span>
          <button type="button" className="resume-close" onClick={onClose} aria-label="Close resume">
            ✕
          </button>
        </div>

        <div className="resume-modal-body">
          <iframe src={resumeUrl} title="Shivang Kumar Singh — Resume" />
        </div>

        <div className="resume-modal-foot">
          <a className="btn primary" href={resumeUrl} download>
            <span className="shine"></span>Download resume
          </a>
        </div>
      </div>
    </div>
  )
}
