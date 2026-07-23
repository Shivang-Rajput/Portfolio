import { useReveal } from '../hooks'

export default function Contact() {
  const [ref, inView] = useReveal()

  return (
    <section id="contact">
      <div className={`wrap reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div className="contact-box">
          <h2>Let's build something.</h2>
          <p>Looking for SDE / Full-Stack roles — feel free to reach out.</p>
          <div className="contact-links">
            <a className="btn primary" href="mailto:singhshivang765@gmail.com">
              <span className="shine"></span>Email me
            </a>
            <a className="btn ghost" href="https://www.linkedin.com/in/-shivang-singh/">
              <span className="shine"></span>LinkedIn
            </a>
            <a className="btn ghost" href="https://github.com/Shivang-Rajput/">
              <span className="shine"></span>GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
