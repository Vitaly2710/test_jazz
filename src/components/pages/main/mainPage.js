import React from 'react'
import Header from '../../common/header/header'
import './style.css'
import WelcomeBlock from './welcomeBlock/welcomeBlock'
import MainPic from './mainPic/mainPic'

const MainPage = () => {
  return <section>
      <Header/>
      <section className='mainPage'>
        <MainPic/>
        <WelcomeBlock/>
      </section>
    </section>
}

export default MainPage
