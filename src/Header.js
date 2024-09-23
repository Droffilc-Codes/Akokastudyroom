import React from 'react'
import classes from './Header.module.css'
import logo from './images/logo.png'
import HeaderOptions from './HeaderOptions'
import { Link } from 'react-router-dom'

function Header() {
  return (
        <header className={classes.header}>
            <div className={classes.container}>

                <Link to="/">
                    <img src={logo} alt="" />
                </Link>

                <nav>
                    <ul>

                        <li>
                            <Link to="/regulations">
                                <HeaderOptions title="Regulations" />
                            </Link> 
                        </li>

                        <li>
                            <Link to="/Payment">
                                <HeaderOptions title="Payment" />
                            </Link>
                        </li>

                        <li>
                            <Link to="/Others">
                                <HeaderOptions title="Others" />
                            </Link>
                        </li>

                        <li>
                            <Link to="/Assessment">
                                <HeaderOptions title="Onboarding Assesment" />
                                {/* <HeaderOptions title="Onboarding" /> */}
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
      )
}

export default Header
