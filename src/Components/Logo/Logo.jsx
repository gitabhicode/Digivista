import React from 'react'
import './Logo.css'
import amazon from './Screenshot 2024-12-13 032128.png'
import dribble from './Screenshot 2024-12-13 032136.png'
import hubspot from './Screenshot 2024-12-13 032143.png'
import notion from './Screenshot 2024-12-13 032150.png'
import netflix from './Screenshot 2024-12-13 032159.png'
import zoom from './Screenshot 2024-12-13 032208.png'
const Logo = () => {
  return (
    <div className="cont3">
        <img src={amazon} alt=""/>
        <img src={dribble} alt=""/>
        <img src={hubspot} alt=""/>
        <img src={notion} alt=""/>
        <img src={netflix} alt=""/>
        <img src={zoom} alt=""/>
        
    </div>
  )
}

export default Logo
