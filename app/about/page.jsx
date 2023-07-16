import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'

const page = () => {
    return (
        <>
            <Navbar name="About" />
            <About />
        </>
    )
}

export default page