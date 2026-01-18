import './Skills.css'

const Skills = () => {
  const skills = [
    'Python',
    'JavaScript',
    'TypeScript',
    'PHP',
    'C++',
    'SQL',
    'HTML/CSS',
    'SCSS',
    'Angular',
    'React',
    'E Charts',
    'PowerBI',
    'Oracle',
    'MATLAB',
    'Java',
    'Adobe Photoshop',
    'Adobe Premiere Pro',
    'Proxmox VE'
  ]

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, idx) => (
          <span key={idx} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  )
}

export default Skills
