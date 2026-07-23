import { useReveal } from '../hooks'
import { about } from '../data'

export default function About() {
  const [ref, inView] = useReveal()

  return (
    <section id="about">
      <div className={`wrap reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div className="sec-eyebrow">About</div>
        <h2 className="sec-title">A bit about me</h2>

        <div className="about-grid">
          <div className="about-photo-frame">
            {/* drop your photo in the /public folder as profile.jpg — this is just a placeholder path */}
            <img src={about.photo} alt="Shivang Kumar Singh" />
          </div>

          <div className="about-details">
            <p className="about-bio">{about.bio}</p>

            <div className="about-list">
              <div>
                <div className="label">Role</div>
                <div className="value">{about.role}</div>
              </div>
              <div>
                <div className="label">Location</div>
                <div className="value">{about.location}</div>
              </div>
              <div>
                <div className="label">Education</div>
                <div className="value">{about.education}</div>
              </div>
              <div>
                <div className="label">Status</div>
                <div className="value">{about.status}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
