import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/folio.jpg'
import IMG2 from '../../assets/java3.jpeg'
// import IMG3 from '../../assets/three.PNG'
import IMG4 from '../../assets/School-Management.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio" />
          </div>
          <h3>Portfolio in React</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/" className="btn" rel='noreferrer' target="_blank">GitHub</a>
            <a href="http://github.com/" className="btn btn-primary" rel='noreferrer' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Portfolio" />
          </div>
          <h3>Java Crud</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/" className="btn" rel='noreferrer' target="_blank">GitHub</a>
            <a href="http://github.com/" className="btn btn-primary" rel='noreferrer' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Portfolio" />
          </div>
          <h3>School Management Website</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com/" className="btn" rel='noreferrer' target="_blank">GitHub</a>
            <a href="http://github.com/" className="btn btn-primary" rel='noreferrer' target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio