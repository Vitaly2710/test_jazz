import React, { useState } from 'react'
import './style.css'
import logo from '../../../assets/header/Logo.png'
import { Link } from 'react-router-dom'
import { FetchUser } from '../../pages/profilePage/apiUserFoto/userFoto'

const Header = () => {
  const user = sessionStorage.getItem('state')
  const [userName, setUserName] = useState('')

  FetchUser(0)
    .then((res) => setUserName(res.first_name))

  function User () {
    if (user === null) {
      return (
          <Link to={'/login'}>
            <button>Профиль</button>
          </Link>)
    } else {
      return (
          <Link to={'/profile'}>
            <div className={'nameInHead'}>{userName}</div>
          </Link>
      )
    }
  }
  return (
        <section>
            <header className='header_container'>
                <div className='header_container_wrapper'>
                    <div className='logo'>
                         <Link to={'/'}>
                            <img src={logo} alt='undefined' />
                         </Link>
                    </div>
                    <div className={'infoAndProfile'}>
                        <Link to={'/info'}>
                            <button>Информация</button>
                        </Link>
                            {User()}
                    </div>
                </div>
            </header>
        </section>
  )
}

export default Header
