import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const containerClass = isDarkTheme
    ? 'home-container dark'
    : 'home-container light'
  const homeImageUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

  return (
    <div className={containerClass}>
      <Navbar />
      <div className="home-content">
        <h1>Home</h1>

        <img src={homeImageUrl} alt="home" className="home-image" />
      </div>
    </div>
  )
}

export default Home
