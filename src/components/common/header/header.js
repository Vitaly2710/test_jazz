import React from 'react'
import './style.css'
import logo from '../../../assets/header/Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  function User () {
    return <button>Вход</button>
  }
  return (
        <section>
            <div className='header_container'>
                <div className='header_container_wrapper'>
                    <div className='logo'>
                        <Link to={'/login'}>
                            <img src={logo} alt='undefined'/>
                        </Link>
                    </div>
                    <div className={'infoAndProfile'}>
                        <Link to={'/info'}>
                            <button>Информация</button>

                        </Link>
                        <Link to={'/profile'}>
                            {User()}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Header
