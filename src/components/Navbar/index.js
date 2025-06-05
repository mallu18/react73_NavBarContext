import {Link} from 'react-router-dom'
import {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => {
  const {isDarkTheme, toggleTheme} = useContext(ThemeContext)

  const logoUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

  const themeIconUrl = isDarkTheme
    ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

  const navClassName = isDarkTheme ? 'navbar dark' : 'navbar light'
  const linkClassName = isDarkTheme ? 'nav-link dark' : 'nav-link light'

  return (
    <nav className={navClassName}>
      <img src={logoUrl} alt="website logo" className="website-logo" />
      <ul className="nav-links">
        <li>
          <Link to="/" className={linkClassName}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={linkClassName}>
            About
          </Link>
        </li>
      </ul>
      <button
        type="button"
        data-testid="theme"
        onClick={toggleTheme}
        className="theme-button"
      >
        <img src={themeIconUrl} alt="theme" className="theme-icon" />
      </button>
    </nav>
  )
}

export default Navbar
