import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
    return (
        <div className = 'cta'>
            <a href={CV} download className='btn'>Downloadmy shit bitch</a>
            <a href="#contact" className='btn btn-primary'>contact me</a>
        </div>

    )
        
}

export default CTA