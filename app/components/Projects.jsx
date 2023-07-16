import React from 'react'
import { portfolio } from '../data'
import PortfolioItem from './PortfolioItem'

const Projects = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Projects</span></h2>

      <div className="portfolio__container container grid">
        {portfolio.map((ele, ind) => {
          return <PortfolioItem key={ind} {...ele} />
        })}
      </div>
    </section>
  )
}

export default Projects