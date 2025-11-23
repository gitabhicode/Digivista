import React from 'react'
import './Team.css'
import team1 from './Screenshot 2024-12-21 163156.png'
import team2 from './Screenshot 2024-12-21 160200.png'
import team3 from './Screenshot 2024-12-21 163205.png'

const Team = () => {
    return (
        <div>
            <div class="cont4 ">
                <button class="but y">Team</button>
                <p id="xyz">Meet the skilled and experienced team behind our successful digital maketing stategies</p>
            </div>
            <div class="row5">
            
            <div class="cont14">
                <div class="flex2">
                    <img src={team1} alt=""/>
                    <div class="t2">Kapil Jain<div class="t3">CEO and Founder</div>
                    </div>
                </div>
                <div class="border2"></div>
                <div class="text5">20+ years of experience, seed investor, IIM graduate, founder of Vishisht Farms, and a contributor to Fortune 50 companies </div>
            </div>

            <div class="cont14">
                <div class="flex2">
                    <img src={team2} alt=""/>
                    <div class="t2">Mohit Bodhija<div class="t3">Cofounder and CTO</div>
                    </div>
                </div>
                <div class="border2"></div>
                <div class="text5">Web development professional with 4+ years of experience in building websites and leading dynamic teams.</div>
            </div>

            <div class="cont14">
                <div class="flex2">
                    <img src={team3} alt=""/>
                    <div class="t2">Abhishek Yadav<div class="t3">Software Developer</div>
                    </div>
                </div>
                <div class="border2"></div>
                <div class="text5"> Software Devlpoement</div>
            </div>
        </div>
        </div>
    )
}

export default Team
