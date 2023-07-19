"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import Loader from './Loader'
import { AnimatePresence } from 'framer-motion'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleLoading } from '@/store/actions/theme'

const Homepage = ({ loading, handleLoading }) => {
    const [isColor, setisColor] = useState(false)

    useEffect(() => {
        handleLoading(false)
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

    return (
        <section className="home section grid">
            <AnimatePresence>
                {
                    loading ? <Loader /> : ""
                }
            </AnimatePresence>
            <img className='home__img' src='../assets/home.png' style={{ filter: `saturate(${isColor ? "1" : "0"})`, transition: ".3s ease-in-out" }} />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm <span id='hacked'>Aaryan</span> Shaik.</span> Web Wizard</h1>
                    <p className="home__description">
                        <span>I</span> a<span>m a web</span> development <span>wizard</span> specializing in React and Next.js. <span>With</span> my <span>spellbinding skills</span>, I craft dynamic and responsive user interfaces <span>that</span> captivate and engage. My potions <span>blend creativity</span>, functionality, and performance <span>to</span> create enchanting web experiences. Join me on this magical journey as we <span>unlock</span> the <span>secrets of React and Next.js!</span>
                    </p>

                    <Link onClick={() => { handleLoading(true) }} onMouseOver={() => { setisColor(true) }} onMouseOut={() => { setisColor(false) }} href="/about" className='button'>More About me <span className='button__icon'><MdOutlineKeyboardDoubleArrowRight /></span></Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

Homepage.propTypes = {
    handleLoading: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    loading: state.theme.loading
})

export default connect(mapStateToProps, { handleLoading })(Homepage)