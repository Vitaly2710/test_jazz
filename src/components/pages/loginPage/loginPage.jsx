import React from 'react'
import Header from '../../common/header/header'
import { AuthenticationBlock } from './authenticationBlock'
import './styleLogin.css'

const LoginPage = () => {
  return (
        <section>
            <Header/>
            <section className='login'>
                <AuthenticationBlock/>
                <div className='login_background'>
                </div>
            </section>
        </section>
  )
}

export default LoginPage
