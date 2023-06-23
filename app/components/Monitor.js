import React, { useState } from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'
import Windows from './Windows'

const Monitor = () => {
    const [isZoomed, setisZoomed] = useState(false)
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
            <div style={{ border: "15px solid #333", height: isZoomed ? "97vh" : "300px", width: isZoomed ? "97vw" : "500px", borderRadius: "10px", transition: ".5s ease-in-out", background: "#000" }}>
                <Windows isZoomed={isZoomed} />
            </div>
            <div style={{ width: isZoomed ? "0px" : "150px", height: isZoomed ? "0px" : "50px", background: "#222", display: "flex", justifyContent: "center", alignItems: "center", transition: ".5s ease-in-out" }}>
                <AiOutlinePoweroff onClick={() => { setisZoomed(true) }} style={{ color: "aliceblue", cursor: "pointer" }} />
            </div>
            <div style={{ width: "300px", height: isZoomed ? "0px" : "15px", background: "#333", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", transition: ".5s ease-in-out" }}></div>
        </div>
    )
}

export default Monitor