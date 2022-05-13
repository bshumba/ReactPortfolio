import React from 'react'
import './About.css'
import ME from'../../assets/fullstack.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { RiFolderZipLine } from 'react-icons/ri'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className='about__card'>
              <RiFolderZipLine className='about__icon' />
              <h5>Prjects</h5>
              <small>20+ Completed</small>
            </article>
          </div>

          <p>
            i am a fullstack developer who has more strength at the backend. I spend my days working on different areas of web development from backend worlking on APIs to frontend working with frameworks.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About