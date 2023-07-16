import React from 'react'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'

const page = () => {
    return (<>
        <Navbar name="Projects" />
        <Projects />
    </>
    )
}

export default page