import React from 'react'
import './Contact.css'
import contactimage from './Screenshot 2024-12-18 142702.png'

const Contact = () => {
    return (
        <div>
            <div class="cont4 ">
                <button class="but y">Contact Us</button>
                <p id="xyz">Connect with Us: Let's Discuss your Digital Marketing Needs</p>
            </div>
            <div class="cont11">
        <div class="inp">
            <div class="flex">
                <div><input type="radio" name="1"/>Say Hi!</div>
                <div><input type="radio" name="1"/>Get Quote</div>
            </div>
            <div class="i2">
                <label for="name">Name</label>
                <div class="space"></div>
                <input type="text" id="name" placeholder="Name"/>
            </div>
            <div class="i2">
                <label for="email">Email*</label>
                <div class="space"></div>
                <input type="email" id="email" placeholder="Email"/>
            </div>
            <div class="i2">
                <label for="mess">Message*</label>
                <div class="space"></div>
                <textarea name="mess" id="mess" cols="62" rows="10" placeholder="Enter the Message"></textarea>
            </div>
            <button>Send Message</button>
        </div>
        <div class="photo">
            <img src={contactimage} alt=""/>
        </div>
    </div>
        </div>
    )
}

export default Contact
