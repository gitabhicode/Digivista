import React from 'react'
import './Footer.css'

const Fotter = () => {
    return (
        <div>
            <div class="cont12">
                <div class="nav x">
                    <div class="left">Digivista</div>
                    <div id='right' class="right under ">
                        <div class="items">About Us</div>
                        <div class="items">Services</div>
                        <div class="items">Use Cases</div>
                        <div class="items">Pricing</div>
                        <div class="items">Blog</div>
                    </div>
                </div>
                <div class="last">
                    <div class="i">
                        <div id='k' class="but y f">Contact Us:</div>
                        <div class="text5">Email:info@digivista.com</div>
                        <div class="text5">Phone:9660384413</div>
                        <div class="text5">Address:Sahaj Farms, Manayta Tech park, Bengaluru, India</div>

                    </div>
                    <div class="email">
                        <input type="text" placeholder="Email"/>
                            <button class="but y f" id='subscribe' >Subscribe</button>
                    </div>
                </div>
                <div class="line"></div>
                <div class="footer">
                    <div>© 2025,Digivista. All Rights Reserved</div>
                    <div class="under">Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}

export default Fotter
