import { useState, useEffect } from 'react'
import './Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Recyclable and Non-Recyclable Solid Waste Using Image Recognition',
      description: 'Final Year Project: Developed an image recognition system to classify recyclable and non-recyclable solid waste using machine learning and computer vision techniques.',
      image: '/Recycle.png',
      document: '/document/MUHAMMAD ZULNAIM BIN ZAINUDDIN_FYP.pdf',
      technologies: ['Python', 'Image Recognition', 'Machine Learning']
    },
    {
      id: 2,
      title: 'Heart Disease Risk Diagnosis System',
      description: 'Developed a Fuzzy Logic System using MATLAB App Designer for heart disease risk diagnosis. Implemented intelligent decision-making algorithms to assess and diagnose heart disease risks.',
      image: '/Heart.png',
      document: '/document/HEART DISEASE DIAGNOSIS.pdf',
      technologies: ['MATLAB', 'Fuzzy Logic', 'Diagnosis System']
    },
    {
      id: 3,
      title: 'Personal Website Development',
      description: 'Developed a personal portfolio website using HTML, CSS, and JavaScript. Implemented responsive design and interactive features.',
      image: '/Personal.png',
      technologies: ['React', 'CSS', 'JavaScript', 'Jsx']
    },
  ])

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.document && (
                <a
                  href={project.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  View Document
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
