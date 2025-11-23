import React from 'react'
import './Service.css'
import img1 from './Screenshot 2024-12-14 015319.png'
import img2 from './Screenshot 2024-12-14 021938.png'
import img3 from './Screenshot 2024-12-14 021951.png'
import img4 from './Screenshot 2024-12-14 022154.png'
import img5 from './Screenshot 2024-12-14 022203.png'
import img6 from './Screenshot 2024-12-14 022219.png'

const Service = () => {
  return (
    <>
        <div className="cont4">
        <button className="but">Services</button>
        <p className="para">At our digital marketing agency, we offer a range of services to help at business grow and
            succeed online. These services include:</p>

    </div>
    <div className="cont5">
        <div className="lhs">
            <div className="poster grey">
                <div className="text2">
                    <p>Search engine</p>
                    <p>optimization</p>
                    <div className="lm">Learn More</div>
                </div>
                <img src={img1} alt=""/>
            </div>
            <div className="poster black">
                <div className="text2">
                    <p>Social Media</p>
                    <p>Marketing</p>
                    <div className="lm">Learn More</div>
                </div>
                <img src={img2} alt=""/>
            </div>
            <div className="poster green">
                <div className="text2">
                    <p>Content</p>
                    <p>Creation</p>
                    <div className="lm">Learn More</div>
                </div>
                <img src={img3} alt=""/>
            </div>
        </div>
        <div className="lhs">
            <div className="poster green">
                <div className="text2">
                    <p>Pay-per-click</p>
                    <p>Advertising</p>
                    <div className="lm">Learn More</div>
                </div>
                <img src={img4} alt=""/>
            </div>
            <div className="poster grey">
                <div className="text2">
                    <p>Email</p>
                    <p>Marketing</p>
                    <div className="lm">Learn More</div>
                </div>
                <img src={img5} alt=""/>
            </div>
            <div className="poster black">
                <div className="text2">
                    <p>Analytics and</p>
                    <p>Tracking</p>
                    <div className="lm">Learn More</div>
                </div>
                <img src={img6} alt=""/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Service
