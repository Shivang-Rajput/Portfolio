import { useState } from 'react'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Background from './components/Background'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import ResumeModal from './components/ResumeModal'
import { useScrollProgress } from './hooks'

export default function App() {
  const progress = useScrollProgress()
  const [resumeOpen, setResumeOpen] = useState(false)

  return (
    <>
      <div id="progress" style={{ width: `${progress}%` }}></div>
      <Navbar onResumeClick={() => setResumeOpen(true)} />
      <Marquee />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Background />
      <Contact />
      <Footer />
      <FloatingCTA />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  )
}
