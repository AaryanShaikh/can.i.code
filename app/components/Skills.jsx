import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { skills } from '../data';
import { SiNextdotjs } from 'react-icons/si'

const Skills = () => {
    const [chartColor, setchartColor] = useState("#8A2CE2")

    const options = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: ["HTML", "CSS", "JS", "REACT", "NEXT.js", "GITHUB"]
        },
        yaxis: {
            show: false
        },
        stroke: {
            show: true,
            width: 2,
            dashArray: 0,
            curve: 'smooth',
            lineCap: "round",
            colors: [chartColor]
        },
        fill: {
            opacity: 0
        },
        markers: {
            size: 0,
        },
        plotOptions: {
            radar: {
                polygons: {
                    connectorColors: "transparent",
                }
            }
        }
    }

    return (
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(2,1fr)", padding: "20px", alignItems: "center" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {
                    skills.map((ele, ind) => {
                        return <div className='skillsBx' key={ind} style={{ height: "150px", width: "150px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", margin: 0, padding: 0, borderRadius: "5px", boxShadow: "0px 0px 8px 0px #00000026" }}>
                            {ele.iconB}
                            <span>{ele.title}</span>
                            {ele.iconA}
                        </div>
                    })
                }
            </div>
            <Chart
                options={options}
                series={[{
                    name: "Skills",
                    data: skills.map(obj => obj.percentage)
                }]}
                type='radar'
            />
        </div>
    )
}

export default Skills