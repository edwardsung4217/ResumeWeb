import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
    return (
        <section id='contact'>
            <h5>get on ctouch</h5>
            <h2>centoact me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdEmail/>
                        <h4>Emial</h4>
                        <h5>edwardusng@mgail.com</h5>
                    </article>
                    <article className='contact__option'>
                        <MdEmail/>
                        <h4>Linkedin</h4>
                        <h5>edwardusng@mgail.com</h5>
                        <a href="www.youtube.com">my linekdend</a>
                    </article>
                    <article className='contact__option'>
                        <MdEmail/>
                        <h4>Emisdfsdfal</h4>
                        <h5>edwardusng@mgail.com</h5>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact