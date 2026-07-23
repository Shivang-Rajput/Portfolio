export default function Navbar({ onResumeClick }) {
  return (
    <nav>
      <div className="wrap">
        <div className="brand">Shivang<em>.Dev</em></div>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#background">Education</a>
          <a href="#contact">Contact</a>
          <button type="button" onClick={onResumeClick}>Resume</button>
          <a
            className="gh-btn"
            href="https://github.com/Shivang-Rajput/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.92 3.19 9.09 7.62 10.56.56.1.76-.24.76-.54 0-.27-.01-1.15-.02-2.09-3.1.67-3.76-1.32-3.76-1.32-.51-1.28-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.24.92.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.08 1.14a10.6 10.6 0 0 1 5.6 0c2.14-1.44 3.08-1.14 3.08-1.14.61 1.53.23 2.66.11 2.94.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.22-5.08 5.49.4.35.75 1.03.75 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.76.54A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
