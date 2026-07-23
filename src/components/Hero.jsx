import { useRef } from 'react'
import { useCounter, useReveal } from '../hooks'
import { stats } from '../data'

export default function Hero() {
  const heroRef = useRef(null)
  const [statsRef, statsIn] = useReveal(0.5)

  // moves the radial spotlight to follow the cursor within the hero
  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width) * 100
    const my = ((e.clientY - rect.top) / rect.height) * 100
    heroRef.current.style.setProperty('--mx', `${mx}%`)
    heroRef.current.style.setProperty('--my', `${my}%`)
  }

  return (
    <header className="hero" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="aura"></div>
      <div className="spotlight"></div>
      <div className="wrap hero-content">
        <div className="eyebrow">Open to SDE / Full-Stack roles</div>
        <h1>
          <span>Shivang Kumar</span>
          <span>Singh</span>
        </h1>
        <p className="sub">
          Full-stack developer building on the MERN stack from Noida, India — currently
          deepening into AI &amp; ML to build smarter products.
        </p>
        <div className="hero-cta">
          <a className="btn primary" href="#projects">
            <span className="shine"></span>View my work
          </a>
          <a className="btn ghost" href="#contact">
            <span className="shine"></span>Get in touch
          </a>
        </div>
        <div className="stats" ref={statsRef}>
          {stats.map((s) => (
            <Stat key={s.label} target={s.target} label={s.label} active={statsIn} />
          ))}
        </div>
      </div>
    </header>
  )
}

function Stat({ target, label, active }) {
  const count = useCounter(target, active)
  return (
    <div className="stat">
      <b>{count}</b>
      <span>{label}</span>
    </div>
  )
}
