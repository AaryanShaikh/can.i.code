import React, { useEffect, useState } from 'react'
import WindowLoading from './WindowLoading'
import WindowLogin from './WindowLogin'
import WindowsUI from './WindowsUI'

const Windows = ({ isZoomed }) => {
    const [showWindowsLoading, setshowWindowsLoading] = useState(true)
    const [showWindowsLogin, setshowWindowsLogin] = useState(false)
    const [showWindowsUI, setshowWindowsUI] = useState(false)

    useEffect(() => {
        if (isZoomed) {
            const timeoutId = setTimeout(() => {
                setshowWindowsLoading(false);
                setshowWindowsLogin(true)
            }, 4000);

            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isZoomed])

    useEffect(() => {
        if (showWindowsUI) {
            setshowWindowsLogin(false)
        }
    }, [showWindowsUI])

    return (
        <div style={{ background: "#000", height: "100%", width: "100%", display: "flex", justifyContent: 'center', alignItems: "center", position: "relative" }}>
            {showWindowsLoading ? <WindowLoading isZoomed={isZoomed} /> : ""}
            {showWindowsLogin ? <WindowLogin setshowWindowsUI={setshowWindowsUI} /> : ""}
            {showWindowsUI ? <WindowsUI /> : ""}
        </div>
    )
}

export default Windows