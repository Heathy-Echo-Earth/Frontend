import React from 'react'
import '../homePage/HomePage.css';

function About() {
    return (
        <div className='about-section'>
            <div className='about-head'>
                <h1>ABOUT US </h1>
                <p>We provide the best service.</p>
            </div>
            <div className='about-us-content'>
                <img src='../Rectangle 3.png' alt='about-us-logo' style={{ marginRight: '80px'}}/>
                <div className='about-us-text-wrap' style={{ textAlign: 'right', justifyContent: 'right'}}>
                <h1>Protect our earth against climate and change </h1>
                <p>To prevent irreversible harm to Earth’s life-support systems,
                    humanity must emit less climate-warming greenhouse
                    gases, including carbon dioxide, while also removing
                    excess carbon from the atmosphere.</p>
                <button>MORE</button>
                </div>
            </div> <br/><br/><br/>
            <div className='about-us-content'>
            <div className='about-us-text-wrap'>
            <h1>Protect our resources against climate and change </h1>
            <p>There is a need to drastically cut emissions and remove 
                    a significant amount of carbon from the  atmosphere. 
                    Natural  carbon storage and absorption are provided by 
                    plants.</p>
                    <button>MORE</button>
                    </div>
                <img src='../Rectangle 4.png' alt='about-us-logo' style={{ marginLeft: '80px'}}/>
            </div> <br/><br/><br/>
            <div className='about-us-content'>
                <img src='../Rectangle 5.png' alt='about-us-logo' style={{ marginRight: '80px'}}/>
                <div className='about-us-text-wrap' style={{ textAlign: 'right', justifyContent: 'right'}}>
                <h1>Your Little Effort can Make A Difference</h1>
                <p>Small collective and individual's actions can 
                    make a big difference in climate change</p>
                <button>MORE</button>
                </div>
            </div>
        </div>
    )
}

export default About