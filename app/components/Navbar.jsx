"use client"
import React, { useState } from 'react'
import { links } from '../data'
import Link from 'next/link'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleLoading, handleRouteSelected } from '@/store/actions/theme'
import { useRouter } from 'next/navigation'

const Navbar = ({ name, handleLoading, loading, handleRouteSelected }) => {
    const [isActive, setisActive] = useState(false)
    const [showMenu, setshowMenu] = useState(false)
    const router = useRouter()

    const onRouteChange = (e, path, name) => {
        e.preventDefault()
        handleLoading(true)
        handleRouteSelected(name)
        setTimeout(() => {
            router.push(path)
        }, 900);
    }

    return (<>
        <nav className="nav">
            <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
                <ul className="nav__list">
                    {links.map((ele, ind) => {
                        return <li className="nav__item" key={ind}>
                            <Link href="" onClick={(e) => { onRouteChange(e, ele.path, ele.name) }} className={ele.name == name ? 'nav__link active-nav' : 'nav__link'}>
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
    </>
    )
}

Navbar.propTypes = {
    handleLoading: PropTypes.func.isRequired,
    handleRouteSelected: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    themeColor: state.theme.themeColor,
    loading: state.theme.loading
})

export default connect(mapStateToProps, { handleLoading, handleRouteSelected })(Navbar)