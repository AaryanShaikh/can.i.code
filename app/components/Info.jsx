import React from 'react'
import { personalInfo } from '../data';

const Info = () => {
    return (
        <>
            {
                personalInfo.map((ele, ind) => {
                    return <li className="info__item" key={ind}>
                        <span className="info__title">{ele.title}</span>
                        <span className="info__description">{ele.description}</span>
                    </li>
                })
            }
        </>
    )
}

export default Info