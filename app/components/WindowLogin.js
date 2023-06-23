import React from 'react'
import { GrPowerForceShutdown } from 'react-icons/gr'

const WindowLogin = ({ setshowWindowsUI }) => {
    return (
        <div style={{ width: "100%", height: "100%", backgroundColor: "#508fd9", color: "#fff", display: "flex", flexDirection: "column" }}>
            <div style={{ background: "#004da3", flexBasis: "12.5%", borderStyle: "solid", borderImageSlice: "1", borderWidth: "0 0 4px 0", borderImageSource: "linear-gradient(91deg, #004da3 0%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0.9) 40%, rgba(255, 255, 255, 0.9) 50%, #004da3 100%)" }}></div>
            <div style={{ flex: "1", display: "flex", backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.6) -21%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0) 100%)", backgroundSize: "700px 700px", backgroundPosition: "-240px -210px", backgroundRepeat: "no-repeat", zIndex: "0" }}>
                <div style={{ flexBasis: "50%", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "30px", alignItems: "flex-end", borderRightWidth: "1px", borderImageSource: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 5%, rgba(255, 255, 255, 0.5) 15%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.5) 85%, rgba(255, 255, 255, 0) 95%, rgba(255, 255, 255, 0) 100%)", borderImageSlice: "0 1 0 0", borderRightStyle: "solid" }}>
                    <img src='/img/windows-xp-logo.png' style={{ width: "250px", marginBottom: "40px", display: "block", borderStyle: "none" }} />
                    <span style={{ textAlign: "right", fontSize: "24px" }}>To begin, click your user name</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flexBasis: "50%", paddingLeft: "20px" }}>
                    <div onClick={() => { setshowWindowsUI(true) }} className='accounts' style={{ display: "flex", gap: "20px", cursor: "pointer" }}>
                        <div style={{ border: "3px solid #fff", height: "80px", width: "80px", borderRadius: "8px", padding: "2px", overflow: "clip" }}>
                            <img src='/img/dp.png' style={{ width: "100%", marginBottom: "40px", display: "block", borderStyle: "none" }} />
                        </div>
                        <span style={{ marginBottom: "20px", fontSize: "24px" }}>Aaryan</span>
                    </div>
                </div>
            </div>
            <div style={{ padding: "40px 80px 40px 40px", display: "flex", justifyContent: "space-between", borderImageSource: "linear-gradient(90deg, #004da3 0%, #f09644 30%, #f09644 40%, #f09644 50%, #004da3 100%)", borderWidth: "4px 0 0 0", background: "#004da3", flexBasis: "12.5%", borderStyle: "solid", borderImageSlice: "1" }}>
                <div style={{ display: "flex", alignItems: "center", flexGrow: "0" }}>
                    <button className='turnOffBtn'></button>
                    <span style={{ marginLeft: "10px", fontSize: "24px" }}>Turn off computer</span>
                </div>
                <div style={{ alignSelf: "center" }}>
                    <span>After you log on, you can add or change accounts.<br />Just go to Control Panel and
                        click User Accounts.</span>
                </div>
            </div>
        </div>
    )
}

export default WindowLogin