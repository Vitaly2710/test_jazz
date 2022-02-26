import React from 'react'
import Header from '../../common/header/header'
import ImgBlock from './infoImg/containerForImg'
import InfoBlock from './infoBlock/infoBlock'
import './style.css'

const InformationPage = () => {
  return <div className='infoPage'>
            <Header/>
            <section className='infoPage_container'>
                <ImgBlock/>
                <InfoBlock/>
            </section>
        </div>
}
export default InformationPage
