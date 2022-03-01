import React from 'react'
import Header from '../../common/header/header'
import InfoUser from './userInformationBlock/infoBlock'
import './style.css'

const ProfilePage = () => {
  return (
        <div className='profile_info'>
          <Header/>
          <InfoUser/>
        </div>
  )
}

export default ProfilePage
