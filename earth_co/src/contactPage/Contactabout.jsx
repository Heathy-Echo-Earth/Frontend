import React from 'react';
import '../homePage/HomePage.css';

function Contactabout() {
    return (
        <div className='about-section'>
            <div className='about-us-content'>
                <img src='../Rectangle 3.png' alt='about-us-logo' style={{ marginRight: '80px' }} />
                <div className='about-us-text-wrap' style={{ textAlign: 'right', justifyContent: 'right' }}>
                    <h1>Protect our earth against climate and change </h1>
                    <p>To prevent irreversible harm to Earth’s life-support systems,
                        humanity must emit less climate-warming greenhouse
                        gases, including carbon dioxide, while also removing
                        excess carbon from the atmosphere.</p>
                </div>
            </div>
        </div>
    )
}

export default Contactabout