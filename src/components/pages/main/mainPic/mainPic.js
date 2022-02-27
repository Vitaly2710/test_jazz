import React from 'react'
import first from './../../../../assets/main/mainPic_first.png'
import second from './../../../../assets/main/mainPic_second.png'
import './style.css'

const MainPic = () => {
  return <section className='mainPicBlock'>
    <img src={first} alt='undefined'/>
    <img src={second} alt='undefined picTwo'/>
  </section>
}

export default MainPic
