import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => {
  const {isDarkTheme} = useContext(ThemeContext)

  const containerClass = isDarkTheme
    ? 'notfound-container dark'
    : 'notfound-container light'

  return (
    <div className={containerClass}>
      <Navbar />
      <div className="notfound-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
          className="notfound-image"
        />
        <h1 className="notfound-heading">Lost Your Way?</h1>
        <p>We cannot seem to find the page</p>
      </div>
    </div>
  )
}

export default NotFound
