export default function Marquee() {
  // duplicated once so the loop can scroll -50% and repeat seamlessly
  const item = (
    <span>
      Open to <b>SDE / Full-Stack</b> roles
    </span>
  )

  return (
    <div className="marquee">
      <div className="marquee-track">
        {item}
        <span>MERN Stack</span>
        <span>AI / ML Learner</span>
        <span>Noida, India</span>
        {item}
        <span>MERN Stack</span>
        <span>AI / ML Learner</span>
        <span>Noida, India</span>
      </div>
    </div>
  )
}
