"use client"
import React, { useEffect, useState } from 'react'
import { portfolio } from '../data'
import Project from './Project'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact, FaUnity } from 'react-icons/fa'
import { SiAdobephotoshop, SiNextdotjs } from 'react-icons/si'
import { AiFillAndroid } from 'react-icons/ai'
import { motion, AnimatePresence } from "framer-motion"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Projects = ({ themeColor, themeStyle }) => {
  const [selFilter, setselFilter] = useState("all")
  const filterData = selFilter == "all" ? portfolio : portfolio.filter((x) => x.category == selFilter)

  useEffect(() => {
    const list = document.querySelectorAll('.list')
    function activeLink() {
      list.forEach((item) =>
        item.classList.remove('active'));
      this.classList.add('active')
    }
    list.forEach((item) =>
      item.addEventListener('click', activeLink))
  }, [])

  const handleClick = (event, type) => {
    event.preventDefault();
    setselFilter(type)
  };

  return (
    <section className="portfolio section">
      <h2 className="section__title">My <span>Projects</span></h2>

      <div className="filter-container container">
        <div className="navigation">
          <ul>
            <li className="list active" data-filter="all">
              <a href="" onClick={(e) => { handleClick(e, "all") }}>
                <span className="icon">
                  <span><HiOutlineSquares2X2 /></span>
                </span>
                <span className="text">All</span>
              </a>
            </li>
            <li className="list" data-filter=".web">
              <a href="" onClick={(e) => { handleClick(e, "vanilla") }}>
                <span className="icon"><TbBrandJavascript /></span>
                <span className="text">Vanilla</span>
              </a>
            </li>
            <li className="list" data-filter=".flyers">
              <a href="" onClick={(e) => { handleClick(e, "react") }}>
                <span className="icon"><FaReact /></span>
                <span className="text">React</span>
              </a>
            </li>
            <li className="list" data-filter=".bcards">
              <a href="" onClick={(e) => { handleClick(e, "next") }}>
                <span className="icon"><SiNextdotjs /></span>
                <span className="text">Next</span>
              </a>
            </li>
            <li className="list">
              <a href="" onClick={(e) => { handleClick(e, "unity") }}>
                <span className="icon"><FaUnity /></span>
                <span className="text">Unity</span>
              </a>
            </li>
            <li className="list">
              <a href="" onClick={(e) => { handleClick(e, "android") }}>
                <span className="icon"><AiFillAndroid /></span>
                <span className="text">Android</span>
              </a>
            </li>
            <li className="list" >
              <a href="" onClick={(e) => { handleClick(e, "photoshop") }}>
                <span className="icon"><SiAdobephotoshop /></span>
                <span className="text">Photoshop</span>
              </a>
            </li>
            <div className="indicator">

            </div>
          </ul>
        </div>
      </div>

      <motion.div layout className="portfolio__container container grid">
        <AnimatePresence>
          {
            filterData.map((ele, ind) => {
              return <Project key={ele.id} {...ele} />
            })
          }
        </AnimatePresence>
      </motion.div>


    </section>
  )
}

Projects.propTypes = {

}

const mapStateToProps = (state) => ({
  themeColor: state.theme.themeColor,
  themeStyle: state.theme.themeStyle
})

export default connect(mapStateToProps, {})(Projects)