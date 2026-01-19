import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Junior Software Developer',
      company: 'Riajati Sdn. Bhd.',
      period: 'Feb 2024 - Feb 2025',
      description: 'Developed and maintained front-end components using Angular framework, HTML, CSS, JavaScript, and PHP. Implemented responsive UI designs based on project requirements and UX guidelines. Collaborated closely with back-end developers and system analysts to integrate APIs and system logic. Participated in debugging, testing, and performance optimization of web applications.',
      type: 'work'
    },
    {
      id: 2,
      title: 'Industrial Training - Website Developer',
      company: 'Universiti Teknologi MARA (UiTM) Puncak Alam',
      period: 'Sept 2021 - Feb 2022',
      description: 'Demonstrated expertise in graphic design software using HTML and PHP. Collaborated with cross-functional teams, including IT department and development, to ensure design alignment with overall project goals. Experience in handling and utilizing inventory database at UiTM Puncak Alam.',
      type: 'work'
    },
    {
      id: 3,
      title: 'Networking Installation',
      company: 'Network Installation Company',
      period: 'Mar 2019 - Apr 2019',
      description: 'Worked as a part-time network installation technician.',
      type: 'work'
    },
    {
      id: 4,
      title: 'Bachelor of Information System (Hons.)',
      company: 'Universiti Teknologi MARA (UiTM), Shah Alam',
      period: '2022 - 2024',
      description: 'Intelligent System Engineering (Big Data Analytics). Current CGPA: 3.43/4.00. Major in Big Data Analytics. MUET band: 4.',
      type: 'education'
    },
    {
      id: 5,
      title: 'Diploma in Computer Science',
      company: 'Universiti Teknologi MARA (UiTM), Kuala Terengganu',
      period: '2019 - 2022',
      description: 'Completed Diploma in Computer Science with CGPA: 3.58/4.00.',
      type: 'education'
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience & Education</h2>
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <span className="experience-type">{exp.type === 'work' ? 'Work' : 'Education'}</span>
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-period">{exp.period}</p>
              <p className="experience-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
