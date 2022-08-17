import React from 'react'
import './about.css'
import ME from '../../assets/bellPhoto.jpg'
import {AiFillHourglass} from 'react-icons/ai'

const About = () => {
    return (
        <section id='about'>
            <h5>hi get to know me abot me</h5>
            <h2>About me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt="about image"/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className="about__cards">
                        <article className='about__card'>
                            <AiFillHourglass className = 'about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years work</small>
                        </article>
                        <article className='about__card'>
                            <AiFillHourglass className = 'about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years work</small>
                        </article>
                        <article className='about__card'>
                            <AiFillHourglass className = 'about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years work</small>
                        </article>
                    </div>
                    <p>qwqeqweqweqweqweqweqweqeqweqweq</p>
                    <a href='#contact' className='btn btn-primary'>contac tme</a>
                </div>
            </div>      
        </section>
           
    )
}

export default About
