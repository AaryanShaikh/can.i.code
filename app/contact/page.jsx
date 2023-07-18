import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Themes from '../components/Themes'

const page = () => {
    return (
        <>
            <Navbar name="Contact" />
            <Contact />
            <Themes />
        </>
    )
}

export default page