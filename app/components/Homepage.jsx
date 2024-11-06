"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import Loader from './Loader'
import { AnimatePresence, motion } from 'framer-motion'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleLoading, handleRouteSelected, handleIsIntro } from '@/store/actions/theme'
import { useRouter } from 'next/navigation'
import { SiAdobephotoshop, SiFramer, SiNextdotjs, SiRedux } from 'react-icons/si'

const Homepage = ({ loading, handleLoading, route, handleRouteSelected, handleIsIntro, isIntro }) => {
    const [isColor, setisColor] = useState(false)
    const router = useRouter()
    const [introLoadText, setintroLoadText] = useState(0)
    const [isLoadComplete, setisLoadComplete] = useState(false)
    const [isLoadStart, setisLoadStart] = useState(true)
    const [isLoad2Complete, setisLoad2Complete] = useState(false)
    const [isLoad3Complete, setisLoad3Complete] = useState(false)

    useEffect(() => {
        handleLoading(false)
        setTimeout(() => {
            startAnimation()
            setTimeout(() => {
                setisLoadStart(false)
                setisLoadComplete(true)
                setTimeout(() => {
                    setisLoad2Complete(true)
                    setTimeout(() => {
                        setisLoad3Complete(true)
                        setTimeout(() => {
                            handleIsIntro(false)
                        }, 1000);
                    }, 2000);
                }, 2000);
            }, 2000)
        }, 1500)
        let interval = setInterval(() => {
            onNameChangeAutomatically()
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const onNameChangeAutomatically = () => {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let orignal = "Aaryan"
        let iterations = 0
        let interval = setInterval(() => {
            if (document.getElementById("hacked") != null) {
                document.getElementById("hacked").innerHTML = document.getElementById("hacked").innerText.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return orignal[index]
                        }
                        return letters[Math.floor(Math.random() * 26)]
                    })
                    .join("")
                if (iterations >= orignal.length) clearInterval(interval)
                iterations += 1 / 5
            }
        }, 30)
    }

    const onRouteChange = (e, path, name) => {
        e.preventDefault()
        handleLoading(true)
        handleRouteSelected(name)
        setTimeout(() => {
            router.push(path)
        }, 900);
    }

    const startAnimation = () => {
        const animationDuration = 1500; // Duration of the animation in milliseconds
        const interval = 10; // Time interval in milliseconds
        const steps = 100; // Total number of steps from 0 to 100
        const stepValue = 100 / steps; // Value increment for each step

        let currentStep = 0;
        const intervalId = setInterval(() => {
            if (currentStep >= steps) {
                clearInterval(intervalId);
            } else {
                setintroLoadText((currentStep + 1) * stepValue);
                currentStep++;
            }
        }, animationDuration / steps);
    };

    return (<>
        {
            isIntro ? <>
                <div className='pageIntroMain' style={{ background: isLoad3Complete ? "transparent" : isLoad2Complete ? "#121212" : isLoadComplete ? "#DDD" : "#121212", pointerEvents: isLoad3Complete ? "none" : "all" }}>
                    <div className="pageIntroMain1">
                        <div className={`pageIntroTop ${isLoadComplete ? "over" : ""}`}></div>
                        <div className={`pageIntroBottom ${isLoadComplete ? "over" : ""}`}></div>
                        <div className="pageIntroCenter" style={{ opacity: isLoadStart ? "1" : "0" }}>
                            <div className="pageIntroCenterLoad" style={{ width: `${introLoadText}%` }}></div>
                            <div style={{ opacity: isLoadStart ? "1" : "0" }} className="pageIntroCenterLoadText">{introLoadText}%</div>
                        </div>
                    </div>
                    <div className="pageIntroMain2">
                        <div className={`pageIntroTop2 ${isLoad2Complete ? "over" : ""}`} style={{ background: isLoadComplete ? "#DDD" : "#121212" }}>
                            Coded & Designed By
                        </div>
                        <div className={`pageIntroBottom2 ${isLoad2Complete ? "over" : ""}`} style={{ background: isLoadComplete ? "#DDD" : "#121212" }}>
                            Aaryan Shaik
                        </div>
                    </div>
                    <div className="pageIntroMain3">
                        <div className={`pageIntroTop3 ${isLoad3Complete ? "over" : ""}`} style={{ background: isLoadComplete ? "#121212" : "#DDD" }}>
                            Tools Used
                        </div>
                        <div className={`pageIntroBottom3 ${isLoad3Complete ? "over" : ""}`} style={{ background: isLoadComplete ? "#121212" : "#DDD" }}>
                            <SiNextdotjs />
                            <SiRedux />
                            <SiFramer />
                            <SiAdobephotoshop />
                        </div>
                    </div>
                </div></> : ""
        }
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

        <section className="home section grid">
            <img loading="lazy" className='home__img' src='../assets/home.webp' style={{ filter: `saturate(${isColor ? "1" : "0"})`, transition: ".3s ease-in-out" }} />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm <span id='hacked'>Aaryan</span> Shaik.</span> Web Wizard</h1>
                    <p className="home__description">
                        <span>I</span> a<span>m a web</span> development <span>wizard</span> specializing in React and Next.js. <span>With</span> my <span>spellbinding skills</span>, I craft dynamic and responsive user interfaces <span>that</span> captivate and engage. My potions <span>blend creativity</span>, functionality, and performance <span>to</span> create enchanting web experiences. Join me on this magical journey as we <span>unlock</span> the <span>secrets of React and Next.js!</span>
                    </p>

                    <Link href="" onClick={(e) => { onRouteChange(e, "/about", "About") }} onMouseOver={() => { setisColor(true) }} onMouseOut={() => { setisColor(false) }} className='button'>More About me <span className='button__icon'><MdOutlineKeyboardDoubleArrowRight /></span></Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>

        <div className='homeMob'>
            <div className="textBx">
                {
                    "HOME".split("").reverse().join('').split("").map((ele, ind) => {
                        return <h4 key={ind} style={{ top: `${-100 * ind}px` }}>{ele}</h4>
                    })
                }
            </div>
            <div className="mobMainTxt">
                <img loading="lazy" src="../../assets/homemob.webp" alt="" />
                <div className="txts">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                        className="backTxt"
                    >
                        <h4>AARYAN</h4>
                        <h4>SHAIK</h4>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
                        className="frontTxt"
                    >
                        <h4>WEB</h4>
                        <h4>WIZARD</h4>
                    </motion.div>
                </div>
            </div>
            <div className="mobNxtBtnWrapper" onClick={(e) => { onRouteChange(e, "/about", "About") }}>
                <div className="mobNxtBtn">
                    Read More
                </div>
            </div>
        </div>
    </>
    )
}

Homepage.propTypes = {
    handleLoading: PropTypes.func.isRequired,
    handleRouteSelected: PropTypes.func.isRequired,
    handleIsIntro: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    loading: state.theme.loading,
    route: state.theme.route,
    isIntro: state.theme.isIntro
})

export default connect(mapStateToProps, { handleLoading, handleRouteSelected, handleIsIntro })(Homepage)