import React from 'react'
import { useState } from 'react'
import './Singleelement.css'
import AddIcon from '@mui/icons-material/Add';

const Singleelement = (props) => {
    const [isOpen, setisOpen] = useState(true)
    const increaseheight = () => {
        setisOpen(!isOpen)
    }
    return (
        <div className="cont9">
            <div className={`grey2 ${isOpen ? 'decrease' : 'increase'}`}>
                <div className="initial-working">
                    <span className="working-sno">{props.working.sno}</span>
                    <span id="working-heading">{props.working.heading}</span>
                    <button className='working-button' onClick={increaseheight}>{<AddIcon/>}</button>
                </div>

                <div className={`a ${isOpen ? 'notsee' : 'see'}`}>
                    <div className="border2"></div>
                    <div className="working-para">{props.working.para}</div>
                </div>
            </div>
        </div>
    )
}

export default Singleelement
