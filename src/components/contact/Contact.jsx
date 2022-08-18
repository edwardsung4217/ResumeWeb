import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdEmail/>
                        <h4>Email</h4>
                        <h5>edwardsung4217@gmail.com</h5>
                    </article>
                    <article className='contact__option'>
                        <BsLinkedin/>
                        <h4>LinkedIn</h4>
                        {/* <h5>edwardusng@mgail.com</h5> */}
                        <a href="https://www.linkedin.com/in/edwardsung4217/">linkedin.com/in/edwardsung4217</a>
                    </article>
                    <article className='contact__option'>
                        <BsGithub/>
                        <h4>Github</h4>
                        <a href="https://github.com/edwardsung4217">github.com/edwardsung4217</a>
                    </article>
                    <article className='contact__option'>
                        <AiOutlinePhone/>
                        <h4>Phone Number</h4>
                        <h5>(702)-882-7011</h5>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact