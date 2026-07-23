import { useReveal } from '../hooks'
import { experience } from '../data'

export default function Experience() {
  const [ref, inView] = useReveal()

  return (
    <section id="experience">
      <div className={`wrap reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div className="sec-eyebrow">Experience</div>
        <h2 className="sec-title">Where I've worked</h2>
        <div className={`tl ${inView ? 'in' : ''}`}>
          <div className="tl-track"></div>
          <div className="tl-fill"></div>
          {experience.map((item) => (
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
