import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            Designed & Built by <span className="footer-name">Muhammad Zulnaim</span> © 2026
          </p>
          <div className="footer-links">
            <a 
              href="https://github.com/zulnaim-IT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-zulnaim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
