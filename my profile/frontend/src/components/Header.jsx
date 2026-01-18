import { FaMoon, FaSun } from 'react-icons/fa'
import AnimatedText from './AnimatedText'
import './Header.css'

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <AnimatedText text="Muhammad Zulnaim" />
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  )
}

export default Header
