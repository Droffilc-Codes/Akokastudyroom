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
    
    // <div className='header'>

    //     <div className="header__left">
            
    //         <Link to="/">
    //             <img src={logo} alt="" />
    //         </Link>
                
        
    //     </div>

    //     <div className="header__right">
           
    //         <Link to="/regulations">
    //             <HeaderOptions title="Regulations" />
    //         </Link>   
            // <Link to="/Payment">
            //     <HeaderOptions title="Payment" />
            // </Link>
    //         <Link to="/Others">
    //             <HeaderOptions title="Others" />
    //         </Link>
    //         <Link to="/Assessment">
    //             <HeaderOptions title="Onboarding Assesment" />
    //         </Link>

    //     </div>

    // </div>
  )
}

export default Header
