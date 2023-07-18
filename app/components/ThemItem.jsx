import React from 'react'

const ThemItem = ({ color, img, onchangeColor }) => {
    return (
        <img src={img} alt="" className="theme__img" onClick={() => { onchangeColor(color) }} />
    )
}

export default ThemItem