import React, { useEffect, useState } from 'react'

const WindowLoading = ({ isZoomed }) => {
    const [showLoader, setshowLoader] = useState(false)
    useEffect(() => {
        if (isZoomed) {
            const timeoutId = setTimeout(() => {
                setshowLoader(true);
            }, 700);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isZoomed])

    useEffect(()=>{
        if(showLoader){
            const timeoutId = setTimeout(() => {
                setshowLoader(false);
            }, 3000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    },[showLoader])

    return (
        <div className="window" style={{ opacity: showLoader ? "1" : "0", transition: ".5s ease-in-out" }}>
            <div className="logo">
                <p className="top">Microsoft</p>
                <p className="mid">Windows<span>XP</span></p>
                <p className="bottom">Professional</p>
            </div>
            <div className="container">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    )
}

export default WindowLoading