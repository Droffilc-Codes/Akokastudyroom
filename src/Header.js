import React from 'react'
import './Header.css'
import logo from './images/logo.png'
import HeaderOptions from './HeaderOptions'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
                
        
        </div>

        <div className="header__right">
           

            <Link to="/regulations">
                <HeaderOptions title="Regulations" />
            </Link>   
            <Link to="/Payment">
                <HeaderOptions title="Payment" />
            </Link>
            <Link to="/Others">
                <HeaderOptions title="Others" />
            </Link>
            <Link to="/Assessment">
                <HeaderOptions title="Onboarding Assesment" />
            </Link>

        </div>
    </div>
  )
}

export default Header
