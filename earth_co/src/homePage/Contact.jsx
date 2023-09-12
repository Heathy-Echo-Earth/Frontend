import React from 'react';
import { FaPhone } from "react-icons/fa";
import '../homePage/HomePage.css';

function Contact() {
  return (
    <div className='contact-wrap'>
        <div>
            <h1>Contact Us</h1>
            <div className='contact-flex'>
                <div className='contact-input'>
                  <p>Get In Touch with Us</p> <br/>
                  <input placeholder='Enter your name' type='text'/> <br/>
                  <input placeholder='Enter your email address' type='email'/> <br/>
                  <textarea placeholder='write a message...'/> <br/>
                  <button>SUBMIT</button> <br/>
                  <p className='telephone'><FaPhone/> +234 0202 000 00</p>
                </div>
                <img src='../conact.png' alt='conact-us'/>
            </div>
        </div>
    </div>
  )
}

export default Contact