export const skills = [
  { name: 'React.js', category: 'Frontend' },
  { name: 'Node / Express', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'SQL', category: 'Language' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Java', category: 'Language' },
  { name: 'AI / ML', category: 'Currently learning' },
  { name: 'HTML / CSS', category: 'Core' },
  { name: 'Git / Github', category: 'Tooling' },
  { name: 'Tailwind CSS', category: 'Framework' },
  { name: 'OOPs', category: 'Programming Paradigm' },
  { name: 'DBMS', category: 'Fundamentals' },
]

// swap these placeholder '#' values for your real repo/deployment links
export const projects = [
  {
    tag: 'MERN',
    title: 'Real-Time Chat Application',
    desc: 'Live messaging with instant delivery, built end-to-end on the MERN stack.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
    demoUrl: 'https://real-time-chat-application-psi-lac.vercel.app/',
    githubUrl: 'https://github.com/Shivang-Rajput/Real-Time-Chat-Application',
  },
  {
    tag: 'MERN',
    title: 'E-Commerce Web Application',
    desc: 'Full shopping flow — catalog, cart, and checkout — as a Frontend web app.',
    stack: ['React.js', 'EmailJS'],
    demoUrl: 'https://shivang-rajput.github.io/E-Shop/',
    githubUrl: 'https://github.com/Shivang-Rajput/E-Shop',
  },
  {
    tag: 'AI / ML',
    title: 'AI Resume Analyser',
    desc: 'Analyses resumes and returns structured feedback via AI-driven parsing.',
    stack: ['React.js', 'AI/ML', 'Puter.js'],
    demoUrl: 'https://shivang-rajput.github.io/Resume-Analyser/',
    githubUrl: 'https://github.com/Shivang-Rajput/Resume-Analyser',
  },
  {
    tag: 'DSA',
    title: 'Advanced Sorting Visualizer',
    desc: 'Visualizes multiple sorting algorithms and compares time complexity live.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://shivang-rajput.github.io/Advance-Sorting-Visualiser/',
    githubUrl: 'https://github.com/Shivang-Rajput/Advance-Sorting-Visualiser',
  },
  {
    tag: 'React',
    title: 'Resume Builder',
    desc: 'Build a resume from custom templates directly in the browser.',
    stack: ['React.js'],
    demoUrl: 'https://shivang-rajput.github.io/Resume_Builder/',
    githubUrl: 'https://github.com/Shivang-Rajput/Resume_Builder',
  },
]

// used by the About section — swap the photo in public/profile.jpg and fill in real details
export const about = {
  photo: '/profile.jpeg',
  role: 'Full-Stack Developer (MERN) · AI/ML Learner',
  location: 'Noida, India',
  education: 'B.Tech, Computer Science & Engineering',
  status: 'Open to SDE / Full-Stack roles',
  bio: "I'm a Computer Science graduate who likes building complete products — from the interface someone actually touches, down to the API and database behind it. Most of my work has been on the MERN stack, and lately I've been spending more time in AI/ML, figuring out how to bring that into the products I build.",
}

export const experience = [
  {
    year: '2025',
    title: 'Web Development Virtual Internship',
    meta: 'Edunet Foundation · remote',
  },
  
]

export const education = [
  {
    year: '2022 — 2026',
    title: 'B.Tech, Computer Science & Engineering',
    meta: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow · CGPA 7.87',
  },
  {
    year: '2025',
    title: 'OCI 2025 Certified AI Foundations Associate',
    meta: 'Oracle · valid through Sep 2027',
  },
  {
    year: '2023',
    title: 'Web Development Bootcamp',
    meta: 'Udemy',
  },
]

// swap this with the path to your uploaded resume once it's in /public
export const resumeUrl = '/resume.pdf'

export const stats = [
  { target: 5, label: 'Projects built' },
  { target: 2026, label: 'Graduating year' },
  { target: 1, label: 'AI certification' },
]
