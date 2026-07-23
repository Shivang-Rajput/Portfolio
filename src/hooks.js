import { useEffect, useRef, useState } from 'react'

// tracks how far down the page we've scrolled, as a percentage — feeds the top progress bar
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop / (doc.scrollHeight - doc.clientHeight)
      setProgress(scrolled * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}

// fade-up-on-scroll, powered by IntersectionObserver. returns a ref to attach and whether it's visible yet
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // only needs to fire once
        }
      },
      { threshold }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

// counts up to a target number once it's active (usually once its section scrolls into view)
export function useCounter(target, active) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const step = Math.max(1, Math.round(target / 40))
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setCount(current)
    }, 30)

    return () => clearInterval(timer)
  }, [target, active])

  return count
}

// gentle 3D tilt that follows the cursor — used on the project cards
export function useTilt() {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'rotateY(0) rotateX(0) translateY(0)'
  }

  return { ref, handleMouseMove, handleMouseLeave }
}
