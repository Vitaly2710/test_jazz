import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Header from './components/common/header/header'

export default function App () {
  return (
      <Router>
        <div>
          <nav style={{ display: 'none' }}>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/login">Авторизация</Link>
              </li>
              <li>
                <Link to="/profile">Профиль</Link>
              </li>
              <li>
                <Link to="/info">Информация</Link>
              </li>
            </ul>
          </nav>
          <Switch >
            <Route path="/login">

            </Route>
            <Route path="/profile">

            </Route>
            <Route path="/info">

            </Route>
            <Route path="/">
              <Header/>
            </Route>
          </Switch >
        </div>
      </Router>
  )
}
