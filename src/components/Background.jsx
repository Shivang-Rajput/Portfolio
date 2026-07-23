import { useReveal } from '../hooks'
import { education } from '../data'

export default function Background() {
  const [ref, inView] = useReveal()

  return (
    <section id="background">
      <div className={`wrap reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div className="sec-eyebrow">Background</div>
        <h2 className="sec-title">Education &amp; certifications</h2>
        <div className={`tl ${inView ? 'in' : ''}`}>
          <div className="tl-track"></div>
          <div className="tl-fill"></div>
          {education.map((item) => (
            <div className="tl-item" key={item.title}>
              <div className="yr">{item.year}</div>
              <b>{item.title}</b>
              <div className="meta">{item.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
