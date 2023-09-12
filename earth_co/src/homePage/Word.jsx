import React from 'react'
import '../homePage/HomePage.css';

function Word() {
    return (
        <div className='word-wrap'>
                <h1>Words From Us</h1>
                <div className='word-flex'>
                    <img src='../wordImg.png' alt='word-img' />
                    <div className='word-content'>
                        <h1>Together We Can Make a Difference</h1>
                        <p>Our planet provides us with many gifts, including sunlight, air, water, soil,
                            minerals, plants, and wildlife. In order to preserve the environment and nature,
                            we must always keep them clean. An environment that is polluted causes diseases, toxic viruses and germs.
                            The health of our environment is crucial. In a clean and green ecosystem,
                            we have access to fresh air and pollution is reduced.</p>
                        <button>JOIN US NOW</button>
                    </div>
                </div>
        </div>
    )
}

export default Word