import './AnimatedText.css'

const AnimatedText = ({ text }) => {
  return (
    <h1 className="animated-text">
      {text.split('').map((char, index) => (
        <span key={index} className="char" style={{ '--char-index': index }}>
          {char}
        </span>
      ))}
    </h1>
  )
}

export default AnimatedText
