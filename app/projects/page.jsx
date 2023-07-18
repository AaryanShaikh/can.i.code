import React from 'react'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'
import Themes from '../components/Themes'

const page = () => {
    return (<>
        <Navbar name="Projects" />
        <Projects />
        <Themes />
    </>
    )
}

export default page