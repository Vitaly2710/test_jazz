import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Redirect from 'react-router-dom/es/Redirect'
import LoginPage from './components/pages/loginPage/loginPage'
import ProfilePage from './components/pages/profilePage/profilePage'
import InformationPage from './components/pages/informationPage/infomationPage'
import MainPage from './components/pages/main/mainPage'
import CalendarPage from './components/pages/calendarPage/calendarPage'

export default function App () {
  sessionStorage.setItem('password', '123456789')
  sessionStorage.setItem('login', 'Admin')
  sessionStorage.setItem('userName', 'John')

  const loggedIn = sessionStorage.getItem('state')
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
              <li>
                <Link to="/calendar">Календарь</Link>
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
            <Route path="/calendar">
              {loggedIn ? <CalendarPage/> : <Redirect to ="/login"/> }
            </Route>
            <Route path="/">
              <MainPage/>
            </Route>
          </Switch >
        </div>
      </Router>
  )
}
