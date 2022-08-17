import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'
const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__context'>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>
                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article>
                        
                    </div>
                </div>
                <div className='experience__backend'>
                <h3>Backend Development</h3>
                    <div className='experience__context'>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
