import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Header from './components/common/header/header'
import Redirect from 'react-router-dom/es/Redirect'
import LoginPage from './components/pages/loginPage/loginPage'
import { useSelector } from 'react-redux'
import ProfilePage from './components/pages/profilePage/profilePage'
import InformationPage from './components/pages/informationPage/infomationPage'

export default function App () {
  const loggedIn = useSelector((state) => state?.counter.value)
  console.log(loggedIn)
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
               {loggedIn ? <Redirect to ="/profile"/> : <LoginPage/>}
            </Route>
            <Route path="/profile">
              {loggedIn ? <ProfilePage/> : <Redirect to ="/login"/> }
            </Route>
            <Route path="/info">
              <InformationPage/>
            </Route>
            <Route path="/">
              <Header/>
            </Route>
          </Switch >
        </div>
      </Router>
  )
}
