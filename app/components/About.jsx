"use client";
import React, { useEffect, useState } from 'react'
import Info from './Info';
import { FaDownload } from 'react-icons/fa';
import ImageStack from './ImageStack';
import Skills from './Skills';
import { resume } from '../data';
import ResumeItem from './ResumeItem';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './Loader';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleLoading } from '@/store/actions/theme';
import { BiUpArrow } from 'react-icons/bi';
import DownloadCV from './DownloadCV';

const About = ({ handleLoading, loading, route, themeColor }) => {
    const [showButton, setshowButton] = useState(false)
    const [scrollPercentage, setscrollPercentage] = useState(0)

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
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
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
            <main className="section container">
                <section className="about">
                    <h2 className="section__title">About <span>Me</span></h2>
                    <div className="about__container grid">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                            className="about__info"
                        >
                            <h3 className="section__subtitle">Personal Info</h3>
                            <ul className="info__list grid">
                                <Info />
                            </ul>
                            {/* <a href="../../assets/aaryan-resume.pdf" download="aaryan-resume.pdf" className="button">Download CV <span className='button__icon'><FaDownload /></span></a> */}
                            <DownloadCV />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", bounce: 0.2 }}
                            className="stats grid"
                        >
                            <ImageStack />
                        </motion.div>
                    </div>
                </section>

                <div className="seperator"></div>

                <motion.section
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                    className="skills"
                >
                    <h3 className="section__subtitle subtitle__center">My Skills</h3>

                    <div className="skills_container">
                        <Skills />
                    </div>
                </motion.section>

                <div className="seperator"></div>

                <motion.section
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                    className="resume"
                >
                    <h3 className="section__subtitle subtitle__center">Experience & Education</h3>

                    <div className="resume__container grid">
                        <div className="resume__data">
                            {
                                resume.map((ele, ind) => {
                                    if (ele.category == 'experience') {
                                        return <ResumeItem key={ind} {...ele} />
                                    }
                                })
                            }
                        </div>

                        <div className="resume__data">
                            {
                                resume.map((ele, ind) => {
                                    if (ele.category == 'education') {
                                        return <ResumeItem key={ind} {...ele} />
                                    }
                                })
                            }
                        </div>
                    </div>
                </motion.section>

            </main>
            <div className='aboutMob'>
                <div className="textBx">
                    {
                        "ABOUT".split("").reverse().join('').split("").map((ele, ind) => {
                            return <h4 key={ind} style={{ top: `${-100 * ind}px` }}>{ele}</h4>
                        })
                    }
                </div>
            </div>
        </>
    )
}

About.propTypes = {
    handleLoading: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    loading: state.theme.loading,
    route: state.theme.route,
    themeColor: state.theme.themeColor
})

export default connect(mapStateToProps, { handleLoading })(About)