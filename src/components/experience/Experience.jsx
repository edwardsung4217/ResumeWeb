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
                        <small className='text-light'>Proficient</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>CSS</h4>
                        </div>
                        <small className='text-light'>Intermediate</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>JavaScript</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>x86 Assembly</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article>
                        
                    </div>
                </div>
                <div className='experience__backend'>
                <h3>Backend Development</h3>
                    <div className='experience__context'>
                    <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>C</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>C++</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>C#</h4>
                        </div>
                        <small className='text-light'>Experienced</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>Python</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>SQL</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article>
                        
                    </div>
                </div>
                <div className='experience__frontend'>
                    <h3>Coursework</h3>
                    <div className='experience__context'>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>Linux</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>System Programming</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>Computer Organization</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>Data Structure</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>Operating System</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article><article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>Object-Oriented Programming</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article>
                        
                    </div>
                </div>
                <div className='experience__framework'>
                    <h3>Framework</h3>
                    <div className='experience__context'>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>ASP.NET Core</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>ASP.NET MVC</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>React Native</h4>
                        </div>
                        <small className='text-light'>Proficient</small>
                        </article>
                        <article className='experience__details'>
                        <AiFillCheckCircle className='experience__details-icon'/>                        
                        <div>
                            <h4>Node.js</h4>
                        </div>
                        <small className='text-light'>Intermediate</small>
                        </article>
                        
                        
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Experience
