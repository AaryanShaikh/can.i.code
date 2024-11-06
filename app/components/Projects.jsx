"use client"
import React, { useEffect, useState } from 'react'
import { portfolio } from '../data'
import Project from './Project'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaReact, FaUnity } from 'react-icons/fa'
import { SiAdobephotoshop, SiNextdotjs } from 'react-icons/si'
import { AiFillAndroid } from 'react-icons/ai'
import { motion, AnimatePresence, useTransform, useViewportScroll } from "framer-motion"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loader from './Loader'
import { handleLoading } from '@/store/actions/theme'
import { BiUpArrow } from 'react-icons/bi'
import ReactLenis from '@studio-freight/react-lenis'
import { FixedSizeList as List } from 'react-window';

const ProjectList = ({ data }) => (
  <List
     height={2900}         // Adjust based on your viewport height
     itemCount={data.length}
     itemSize={9}       // Adjust based on your item size
     width={720}
  >
     {({ index, style }) => (
           <Project key={data[index].id} {...data[index]} />
     )}
  </List>
);

const Projects = ({ handleLoading, loading, route, themeColor }) => {
  const [selFilter, setselFilter] = useState("all")
  const filterData = selFilter == "all" ? portfolio : portfolio.filter((x) => x.category == selFilter)
  const { scrollY } = useViewportScroll();
  const divOffsetY = useTransform(scrollY, [0, 200], [0, -200]);
  const [showButton, setshowButton] = useState(false)
  const [scrollPercentage, setscrollPercentage] = useState(0)
  const [visibleItems, setVisibleItems] = useState(20);

  useEffect(() => {
    handleLoading(false)
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setshowButton(true);
      } else {
        setshowButton(false);
      }
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setscrollPercentage(scrolled);

      if (window.innerHeight + document.documentElement.scrollTop + 100 >= document.documentElement.offsetHeight) {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 10); // Increment items
     }
    };
    window.addEventListener('scroll', handleScroll);
    const list = document.querySelectorAll('.list')
    function activeLink() {
      list.forEach((item) =>
        item.classList.remove('active'));
      this.classList.add('active')
    }
    list.forEach((item) =>
      item.addEventListener('click', activeLink))

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const handleClick = (event, type) => {
    event.preventDefault();
    setselFilter(type)
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ReactLenis root>
      <div id="progress" onClick={handleScrollToTop} style={{ background: `conic-gradient(${themeColor} ${Math.floor(scrollPercentage) + 1}%, transparent 0%)`, opacity: showButton ? "1" : "0" }}>
        <span id="progress-value"><BiUpArrow /></span>
      </div>

      <div className='pageTransitionMain'>
        <div className='pageTransitionText'><h1 style={{ opacity: loading ? 1 : 0 }}>{route}</h1></div>
        <div
          className='pageTransitionLeft'
          style={{
            clipPath: loading ? "polygon(100% 0, 0 0, 0 100%, 100% 100%)" : "polygon(0 0, 0 0, 0 100%, 0 100%)",
            backdropFilter: loading ? "brightness(0)" : "brightness(1)"
          }}
        ></div>
        <div
          className='pageTransitionRight'
          style={{
            clipPath: loading ? "polygon(100% 0, 0 0, 0 100%, 100% 100%)" : "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            backdropFilter: loading ? "brightness(0)" : "brightness(1)"
          }}
        ></div>
      </div>
      <section className="portfolio section">
        <h2 className="section__title">My <span>{portfolio.length}</span> Projects</h2>

        <div className="filter-container container">
          <motion.div
            style={{
              position: "fixed", y: divOffsetY, zIndex: "99",
            }}
            className="navigation"
          >
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
          </motion.div>
        </div>

        <motion.div layout className="portfolio__container container grid">
          <AnimatePresence>
          {filterData.slice(0, visibleItems).map((ele) => (
            <Project key={ele.id} {...ele} />
         ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <div className='aboutMob'>
        <div className="textBx">
          {
            "PROJECTS".split("").reverse().join('').split("").map((ele, ind) => {
              return <h4 key={ind} style={{ top: `${-140 * ind}px` }}>{ele}</h4>
            })
          }
        </div>
      </div>
    </ReactLenis>
  )
}

Projects.propTypes = {
  handleLoading: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  loading: state.theme.loading,
  route: state.theme.route,
  themeColor: state.theme.themeColor
})

export default connect(mapStateToProps, { handleLoading })(Projects)