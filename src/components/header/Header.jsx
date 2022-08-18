import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/myFace.jpg'
import Socials from './Socials'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hi I'm</h5>
                <h1>Edward Sung</h1>
                <h5 className="text-light">Full Stack Developer</h5>
                <CTA/>
                <Socials/>
                
            <div className='me'>
                <img src={ME} alt="me"></img>
            </div>

            {/* <a href="#contact" className='scroll__down'>scroll down???</a> */}
        
            </div>

        </header>
    )
}

export default Header
