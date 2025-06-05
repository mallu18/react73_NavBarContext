// import {Switch, Route} from 'react-router-dom'

// import {Component} from 'react'

// import Home from './components/Home'

// import About from './components/About'

// import NotFound from './components/NotFound'

// import './App.css'

// class App extends Component {
//   render() {
//     return (
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/about" component={About} />
//         <Route component={NotFound} />
//       </Switch>
//     )
//   }
// }

// export default App

import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'
// import Navbar from './components/Navbar'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <div className={`app-container ${isDarkTheme ? 'dark' : 'light'}`}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
