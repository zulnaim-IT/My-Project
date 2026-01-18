import './Education.css'

const Education = () => {
  const educations = [
    {
      id: 1,
      title: 'Bachelor of Information System (Hons.)',
      school: 'Universiti Teknologi MARA (UiTM), Shah Alam',
      period: '2022 - 2024',
      description: 'Intelligent System Engineering (Big Data Analytics). Current CGPA: 3.43/4.00. Major in Big Data Analytics. MUET band: 4.',
    },
    {
      id: 2,
      title: 'Diploma in Computer Science',
      school: 'Universiti Teknologi MARA (UiTM), Kuala Terengganu',
      period: '2019 - 2022',
      description: 'Completed Diploma in Computer Science with CGPA: 3.58/4.00.',
    }
  ]

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educations.map(edu => (
            <div key={edu.id} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <h3 className="education-title">{edu.title}</h3>
                <p className="education-school">{edu.school}</p>
                <p className="education-period">{edu.period}</p>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
