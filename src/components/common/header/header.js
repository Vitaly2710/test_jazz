import React from 'react'
import './style.css'
import logo from '../../../assets/header/Logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const user = useSelector((state) => state?.counter.value)
  const userName = useSelector((state) => state?.counter.username)

  function User () {
    if (user === '') {
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
