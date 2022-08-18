import React from 'react'
import './about.css'
import ME from '../../assets/bellPhoto.jpg'
import {AiFillHourglass} from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know Me!</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt="about"/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card'>
                            <AiFillHourglass className = 'about__icon'/>
                            <h5>Internship at CCWRD</h5>
                            <small>6/22 - Present</small>
                        </article>
                        <article className='about__card'>
                            <AiFillHourglass className = 'about__icon'/>
                            <h5>Upcoming Graduate at UNLV</h5>
                            <small>BS Computer Science Degree</small>
                        </article>
                         {/* <article className='about__card'>
                            <AiFillHourglass className = 'about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years work</small>
                        </article>  */}
                    </div>
                    <p>Upcoming graduate of computer science at the University of Nevada Las Vegas. Experienced working across the full-stack of software development both professionaly and personally. Zeal for innovation where my creativity and desire align.</p>
                    <a href='#contact' className='btn btn-primary'>Contact Me</a>
                </div>
            </div>      
        </section>
           
    )
}

export default About
