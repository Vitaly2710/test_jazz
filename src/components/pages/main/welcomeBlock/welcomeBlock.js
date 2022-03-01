import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const WelcomeBlock = () => {
  return <section className='welcomeBlock'>
    <h1>Добро пожаловать</h1>
    <p>Один из лучших вариантов времяпровождения на природе — это конные прогулки.
    Волшебное действие лошадей на человека известно давно. Они помогают расслабиться и восстановить душевное равновесие.</p>
    <div>
      <Link to={'/login'}>
        <div className='welcomeBlock_button'>Войти</div>
      </Link>
    </div>
  </section>
}

export default WelcomeBlock
