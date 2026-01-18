import './Hero.css'
import AnimatedText from './AnimatedText'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-greeting">Hi, I'm</h1>
          <div className="hero-name-wrapper">
            <AnimatedText text="MUHAMMAD ZULNAIM" className="hero-name" />
          </div>
          <p className="hero-tagline">
            Junior Software Developer | Bachelor of Information Systems (Big Data Analytics)
          </p>
          <p className="hero-description">
            Bachelor of Information Systems graduate specializing in Intelligent Systems Engineering (Big Data) from UiTM. 
            Currently working as a Junior Software Front-End Developer with 1.5 years of experience in web development, 
            UI implementation, and data-driven applications. Passionate about AI, Big Data, and modern software development.
          </p>
          <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
          <div className="hero-social-links">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/photo_2024-01-11_08-53-09-removebg.png" 
            alt="Profile" 
            className="profile-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
