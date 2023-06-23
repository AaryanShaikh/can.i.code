"use client"
import { Button } from 'antd'
import React, { useState } from 'react'
import Monitor from './Monitor'

const HomePage = () => {
  const [isZoomed, setisZoomed] = useState(false)

  return (
    <div style={{ display: "flex", height: "100vh", width: "100%", justifyContent: "center", alignItems: "center" }}>
      <Monitor />
    </div>
  )
}

export default HomePage