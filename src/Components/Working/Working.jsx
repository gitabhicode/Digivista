import React from 'react'
import './Working.css'
import Singleelement from './Singleelement'


const Working = (props) => {
  return (
    <div>
      <div className="cont4 ">
        <button className="but y">Our Working Process</button>
        <p id="xy">Step-by-Step Guide to Achieving your Buisness Goals</p>

    </div>
    {/* <div className="cont8">
        <div className="m"><span className="no">01</span><span className="head">Consultation</span>
        </div>
        <div className="border2"></div>
        <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and
            current marketing efforts. This will allow us to understand your needs and tailor our services to best fit
            your requirements.</p>
    </div> */}
    {/* <div className="cont9">
        <div className="grey2 "><span className="num">02</span><span className="head2">Research and strategy</span>
        </div>
        <div className="grey2 "><span className="num">03</span><span className="head2">Implimentation</span></div>
        <div className="grey2 "><span className="num">04</span><span className="head2">Monitoring and </span></div>
        <div className="grey2 "><span className="num">05</span><span className="head2">Reporting and </span></div>
        <div className="grey2 "><span className="num">06</span><span className="head2">Continual Improvement</span></div>
    </div> */}
    {props.working.map((e)=>{
        return <Singleelement working={e}/>
      })}
    
    </div>
  )
}

export default Working
