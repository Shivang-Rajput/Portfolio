import { useReveal, useTilt } from '../hooks'
import { projects } from '../data'

export default function Projects() {
  const [ref, inView] = useReveal()

  return (
    <section id="projects">
      <div className={`wrap reveal ${inView ? 'in' : ''}`} ref={ref}>
        <div className="sec-eyebrow">Selected work</div>
        <h2 className="sec-title">Things I've built</h2>
        <div className={`proj-grid stagger ${inView ? 'in' : ''}`}>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ tag, title, desc, stack, demoUrl, githubUrl }) {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt()

  return (
    <div className="proj" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="proj-tag">{tag}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="stack">
        {stack.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="proj-links">
        <a href={demoUrl} target="_blank" rel="noreferrer">Live demo ↗</a>
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </div>
  )
}
