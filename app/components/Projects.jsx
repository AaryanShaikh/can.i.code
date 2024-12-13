"use client"
import React, { useEffect, useState } from 'react'
import { portfolio } from '../data'
import Project from './Project'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { TbBrandJavascript } from 'react-icons/tb'
import { FaArrowRight, FaReact, FaUnity } from 'react-icons/fa'
import { SiAdobephotoshop, SiNextdotjs } from 'react-icons/si'
import { AiFillAndroid } from 'react-icons/ai'
import { motion, AnimatePresence, useTransform, useViewportScroll } from "framer-motion"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Loader from './Loader'
import { handleLoading } from '@/store/actions/theme'
import { BiUpArrow } from 'react-icons/bi'
import ReactLenis from '@studio-freight/react-lenis'

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const Projects = ({ handleLoading, loading, route, themeColor }) => {
  const [selFilter, setselFilter] = useState("all")
  const filterData = selFilter == "all" ? portfolio : portfolio.filter((x) => x.category == selFilter)
  const { scrollY } = useViewportScroll();
  const divOffsetY = useTransform(scrollY, [0, 200], [0, -200]);
  const [showButton, setshowButton] = useState(false)
  const [scrollPercentage, setscrollPercentage] = useState(0)
  const [visibleItems, setVisibleItems] = useState(20);
  const [selectedProject, setselectedProject] = useState(null);

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
    <ReactLenis root options={{ duration: 2 }}>
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
        
        <div className="projects-container">
          {
            filterData.map((project) => {
              return <div key={project.id} className="project-card" onClick={() => { setselectedProject(project) }}>
                <motion.div
                  initial={{ clipPath: "polygon(20% 25%, 80% 25%, 80% 80%, 20% 80%)" }}
                  whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                  transition={{ duration: .6 }}
                  layoutId={`project-img-${project.id}`}
                  className="project-img-container">
                  <motion.img
                    initial={{ scale: 1.3 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: .4 }}
                    src={project.img} alt={project.title} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="project-type"
                  transition={{ duration: .8 }}
                  layoutId={`project-type-${project.id}`}
                >
                  <span>{project.type}</span>
                </motion.div>
                <div className="project-title">
                  <div className="selector"><FaArrowRight /></div>
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    layoutId={`project-title-${project.id}`}
                  >{project.title}</motion.span>
                </div>
              </div>
            })
          }
        </div>

        <AnimatePresence>
          {
            selectedProject == null ? <></> :
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                layout
                className="project-selected-container" onClick={() => { setselectedProject(null) }}>
                <div className="project-selected-card" onClick={(e) => e.stopPropagation()}>
                  <motion.div layoutId={`project-img-${selectedProject.id}`} className="project-selected-img-container">
                    <img src={selectedProject?.img} alt="" />
                  </motion.div>
                  <div className="project-selected-top">
                    <motion.div className="project-selected-title" layoutId={`project-title-${selectedProject.id}`}>{selectedProject?.title}</motion.div>
                    <motion.div layoutId={`project-type-${selectedProject.id}`} className="project-selected-type">{selectedProject?.type}</motion.div>
                  </div>
                  <div className="project-selected-bottom">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{duration:1.4}}
                    >{selectedProject?.desc}</motion.p>
                  </div>
                </div>
              </motion.div>
          }
        </AnimatePresence>

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