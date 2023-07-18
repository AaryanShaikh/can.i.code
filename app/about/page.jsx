import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Themes from '../components/Themes'

const page = () => {
    return (
        <>
            <Navbar name="About" />
            <About />
            <Themes />
        </>
    )
}

export default page