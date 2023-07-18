"use client"
import React from 'react'
import { AiOutlineCodepen } from 'react-icons/ai'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
import { FaFacebookF, FaHackerrank, FaLinkedinIn } from 'react-icons/fa'
import { SiSololearn } from 'react-icons/si'
import { RiMovie2Line } from 'react-icons/ri'

const Socials = () => {
    let links = {
        insta: "https://www.instagram.com/its.me.cypher/",
        face: "https://www.facebook.com/profile.php?id=100029720182339",
        link: "https://www.linkedin.com/in/aaryan-shaik-019034181/",
        solo: "https://www.sololearn.com/profile/10336248",
        code: "https://codepen.io/aaryanshaikh",
        gmail: "mailto:aaryanshaikh27638@gmail.com",
        memo: "https://cypher-watchlist.vercel.app/",
        hack: "https://www.hackerrank.com/Aaryan_Shaikh?hr_r=1",
        git: "https://github.com/AaryanShaikh"
    }

    const onlinkClick = (value) => {
        window.open(value, '_blank')
    }

    return (
        <>
            <div className="main">
                <div className="card" onClick={() => { onlinkClick(links.insta) }}>
                    <BsInstagram className='instagram' />
                </div>
                <div className="card" onClick={() => { onlinkClick(links.code) }}>
                    <AiOutlineCodepen className='twitter' />
                </div>
                <div className="card" onClick={() => { onlinkClick(links.gmail) }}>
                    <BiLogoGmail className='dribble' />
                </div>
                <div className="card" onClick={() => { onlinkClick(links.code) }}>
                    <FaFacebookF className='codepen' />
                </div>
                <div className="card" onClick={() => { onlinkClick(links.memo) }}>
                    <RiMovie2Line className='uiverse' />
                </div>
                <div className="card" onClick={() => { onlinkClick(links.git) }}>
                    <BsGithub className='discord' />
                </div>
                <div className="card" onClick={() => { onlinkClick(links.link) }}>
                    <FaLinkedinIn className='github' />
                </div>
                <div className="card" onClick={() => { onlinkClick(links.hack) }}>
                    <FaHackerrank className='telegram' />
                </div>
                <div className="card" onClick={() => { onlinkClick(links.solo) }}>
                    <SiSololearn className='reddit' />
                </div>
                <p className="text">HOVER<br /><br />FOR<br /><br />SOCIAL</p>
                <div className="main_back"></div>
            </div>
        </>
    )
}

export default Socials