import React from 'react'

const WindowsUI = () => {
    return (
        <div style={{ width: "100%", height: "100%", backgroundColor: "#508fd9", color: "#fff", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "100%", backgroundImage: "url('/img/bg.jpg')", width: "100%" }}>

            </div>
            <div style={{ height: "40px", background: "linear-gradient(to bottom, #245edb 0%, #3f8cf3 9%, #245edb 18%, #245edb 92%, #333 100%) center/cover no-repeat" }}>
                <div className='startBtn active'>Start</div>
            </div>
            <div className='startMenu'>

            </div>
        </div>
    )
}

export default WindowsUI