import React, { useState } from 'react'
import logo from '../../../../assets/header/Logo.png'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { correctUser } from '../../../../reduxToolkit/slice'

export const AuthenticationBlock = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const loginUser = useSelector((state) => state?.counter.username)
  const passwordUser = useSelector((state) => state?.counter.password)
  const dispatch = useDispatch()
  function check () {
    if (login === loginUser && password === passwordUser) {
      dispatch(correctUser())
    } else {
      alert('неверное имя пользователя или пароль')
    }
    setPassword('')
    setLogin('')
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
                  <input placeholder='введите ваш пароль' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </label>
              <button onClick={check}>Войти</button>
          </form>
        </section>
  )
}
