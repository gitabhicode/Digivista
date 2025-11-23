import React from 'react'
import'./Container1.css'
import micro from './Screenshot 2024-12-13 002616.png'

const Container1 = () => {
  return (
    <>
     <div className="cont2">
        <div className="l">
            <div className="text">Navigating the digital landscape for sucess</div>
            <p className="p">Our digital marketing agency help businesses grow and succeed online through a range of
                services including SEO, PPC, social media marketing, and content creation.</p>
            <button className="button">Book a consultation</button>
        </div>
        <img src={micro} alt=""/>
    </div>
    </>
  )
}

export default Container1
