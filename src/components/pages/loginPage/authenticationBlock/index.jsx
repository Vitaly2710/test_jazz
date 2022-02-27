import React, { useState } from 'react'
import logo from '../../../../assets/header/Logo.png'
import './style.css'
// import { Redirect } from 'react-router-dom'

export const AuthenticationBlock = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const loginUser = sessionStorage.getItem('login')
  const passwordUser = sessionStorage.getItem('password')
  console.log(loginUser, passwordUser)

  function check () {
    if (login === loginUser && password === passwordUser) {
      sessionStorage.setItem('state', 'true')
      // return (<Redirect to={'/profile'}/>)
    } else {
      alert('неверное имя пользователя или пароль')
    }
  }
  return (
        <section className='authentication'>
          <div>
              <img src={logo} alt={'undefined'}/>
          </div>
          <h2>Вход</h2>
          <form>
              <label className='authentication_login'>
                  Логин
                  <input placeholder='введите ваш логин' value={login} onChange={(e) => setLogin(e.target.value)}/>
              </label>
              <label className='authentication_password'>
                  Пароль
                  <input placeholder='введите ваш пароль' value={password} type='password' onChange={(e) => setPassword(e.target.value)}/>
              </label>
                  <button onClick={check}>Войти</button>
          </form>
        </section>
  )
}
