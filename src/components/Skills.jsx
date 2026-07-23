import { useReveal } from '../hooks'
import { skills } from '../data'

export default function Skills() {
  const [ref, inView] = useReveal()

  return (
    <section id="skills">
      <div className={`wrap reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div className="sec-eyebrow">Toolkit</div>
        <h2 className="sec-title">What I work with</h2>
        <div className={`skill-grid stagger ${inView ? 'in' : ''}`}>
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <b>{skill.name}</b>
              <span>{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
