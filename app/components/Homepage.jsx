"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const Homepage = () => {
    const [isColor, setisColor] = useState(false)

    useEffect(() => {
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
        }, 30)
    }

    return (
        <section className="home section grid">
            <img className='home__img' src='../assets/home.png' style={{ filter: `saturate(${isColor ? "1" : "0"})`, transition: ".3s ease-in-out" }} />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm <span id='hacked'>Aaryan</span> Shaik.</span> Web Wizard</h1>
                    <p className="home__description">
                        I am a web development wizard specializing in React and Next.js. With my spellbinding skills, I craft dynamic and responsive user interfaces that captivate and engage. My potions blend creativity, functionality, and performance to create enchanting web experiences. Join me on this magical journey as we unlock the secrets of React and Next.js!
                    </p>

                    <Link onMouseOver={() => { setisColor(true) }} onMouseOut={() => { setisColor(false) }} href="/about" className='button'>More About me <span className='button__icon'><MdOutlineKeyboardDoubleArrowRight /></span></Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Homepage