import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const containerClass = isDarkTheme
    ? 'about-container dark'
    : 'about-container light'
  const aboutImageUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

  return (
    <div className={containerClass}>
      <Navbar />
      <div className="about-content">
        <h1>About</h1>

        <img src={aboutImageUrl} alt="about" className="about-image" />
      </div>
    </div>
  )
}

export default About
