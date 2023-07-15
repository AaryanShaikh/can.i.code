import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'

const Homepage = () => {
    return (
        <section className="home section grid">
            <img className='home__img' src='../assets/home.png' />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm Aaryan Shaik.</span> Web Wizard</h1>
                    <p className="home__description">
                        I am a web development wizard specializing in React and Next.js. With my spellbinding skills, I craft dynamic and responsive user interfaces that captivate and engage. My potions blend creativity, functionality, and performance to create enchanting web experiences. Join me on this magical journey as we unlock the secrets of React and Next.js!
                    </p>

                    <Link href="/about" className='button'>More About me <span className='button__icon'><MdOutlineKeyboardDoubleArrowRight /></span></Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Homepage