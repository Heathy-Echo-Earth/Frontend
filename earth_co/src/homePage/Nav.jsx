import React from 'react'
import { Link } from "react-router-dom";
import '../homePage/HomePage.css';

function Nav() {
    return (
        <div className='home-top-bar'>
            <div className='home-nav'>
                <div className='logo'>
                    <img src='../eathco_logo (4).png' alt='company-logo' />
                </div>
                <div className='nav-main'>
                    <Link to='#'>Home</Link>
                    <Link to='#'>Climate</Link>
                    <Link to='#'>Blog</Link>
                    <Link to='#'>About</Link>
                    <Link to='#' >Contact</Link>
                </div>
                <div className='nav-sign-up-in'>
                    <Link to='#' style={{ color:'#53C351', border: '1px solid #53C351', borderRadius: '7px' }}>Log in</Link>
                    <Link to='#' style={{  backgroundColor: '#53C351', borderRadius: '7px'}}>Register</Link>
                </div>
            </div>
            <div className='nav-content'>
                <h1>Let’s Make our Earth <br />
                    <span style={{ color: '#53C351'}}>Green</span>  and Clean </h1>
                <p>To get our global CLEAN... GO GREEN.</p>
                <div className='nav-button'>
                <button style={{ border: '1px solid #FFFFFF'}}>JOIN US</button>
                <button style={{  backgroundColor: '#53C351'}}>LEARN MORE</button>
            </div>
            </div>
        </div>
    )
}

export default Nav