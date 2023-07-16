"use client"
import React, { useState } from 'react'
import { links } from '../data'
import Link from 'next/link'

const Navbar = ({ name }) => {
    const [isActive, setisActive] = useState(false)
    const [showMenu, setshowMenu] = useState(false)

    return (
        <nav className="nav">
            <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
                <ul className="nav__list">
                    {links.map((ele, ind) => {
                        return <li className="nav__item" key={ind}>
                            <Link href={ele.path} className={ele.name == name ? 'nav__link active-nav' : 'nav__link'}>
                                {ele.icon}
                                <h3 className="nav__name">{ele.name}</h3>
                            </Link>
                        </li>
                    })}
                </ul>
            </div>
            <div
                className={`nav__toggle ${showMenu ? 'animate-toggle' : ''}`}
                onClick={() => { setshowMenu(!showMenu) }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default Navbar