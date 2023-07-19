"use client"
import React, { useEffect, useState } from 'react'
import { themes } from '../data'
import { FaCog } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import ThemItem from './ThemItem'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handlethemeSelected, handlethemeStyleSelected } from '@/store/actions/theme'

const getStorageColor = () => {
    let color = "hsl(252,35%,51%)";
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('color')) {
            color = localStorage.getItem('color')
        }
    }

    return color;
}

const getStorageTheme = () => {
    let theme = "dark-theme";
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('theme')) {
            theme = localStorage.getItem('theme')
        }
    }

    return theme;
}

const Themes = ({ handlethemeSelected, handlethemeStyleSelected }) => {
    const [showSwitcher, setshowSwitcher] = useState(false)
    const [color, setcolor] = useState(getStorageColor());
    const [theme, settheme] = useState(getStorageTheme())

    const onchangeColor = (color) => {
        setcolor(color)
    }

    const ontoggleTheme = () => {
        settheme(theme == "light-theme" ? "dark-theme" : "light-theme")
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.style.setProperty('--first-color', color)
            localStorage.setItem('color', color)
            handlethemeSelected(color)
        }
    }, [color])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.className = theme
            localStorage.setItem('theme', theme)
            handlethemeStyleSelected(theme)
        }
    }, [theme])

    return (
        <div>
            <div className={`style__switcher ${showSwitcher ? "show-switcher" : ""}`}>
                <div className="style__switcher-toggler" onClick={() => setshowSwitcher(!showSwitcher)}>
                    <FaCog />
                </div>
                <div className="theme__toggler" onClick={ontoggleTheme}>
                    {theme == "light-theme" ? <BsMoon /> : <BsSun />}
                </div>
                <h3 className="style__switcher-title">Style Switcher</h3>
                <div className="style__switcher-items">
                    {themes.map((ele, ind) => {
                        return <ThemItem key={ind} {...ele} onchangeColor={onchangeColor} />
                    })}
                </div>
                <div className="style__switcher-close" onClick={() => setshowSwitcher(!showSwitcher)}>&times;</div>
            </div>
        </div>
    )
}

Themes.propTypes = {
    handlethemeSelected: PropTypes.func.isRequired,
    handlethemeStyleSelected: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    themeColor: state.theme.themeColor
})

export default connect(mapStateToProps, { handlethemeSelected, handlethemeStyleSelected })(Themes)