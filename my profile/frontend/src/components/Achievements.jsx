import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Dean List Award Recipient',
      description: 'Achieved Dean List recognition at UiTM Kuala Terengganu for outstanding academic performance.',
      date: 'Dec 2023',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Vice President of MPK',
      description: 'Served as Vice President of Majlis Perwakilan Komander (MPK) at UiTM Kuala Terengganu, demonstrating leadership and organizational skills.',
      date: 'Feb 2020',
      icon: '⭐'
    },
    {
      id: 3,
      title: 'E-Sport KARISMA Competition',
      description: 'Achieved 4th place in team competition at E-Sport KARISMA competition held at UiTM.',
      date: 'June 2021',
      icon: '🎯'
    },
    {
      id: 4,
      title: 'Diploma CGPA Excellence',
      description: 'Graduated with Diploma in Computer Science with excellent CGPA of 3.58/4.00 from UiTM Kuala Terengganu.',
      date: '2022',
      icon: '🎓'
    }
  ]

  return (
    <section id="achievements" className="achievements">
      <h2 className="section-title">My Achievements</h2>
      <div className="achievements-grid">
        {achievements.map(achievement => (
          <div key={achievement.id} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-content">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
              <span className="achievement-date">{achievement.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements
