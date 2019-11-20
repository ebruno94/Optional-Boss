import React from 'react';

import Slider from '../Slider/Slider';
import About from '../About/About';
import Twitch from '../Twitch/Twitch';

const Home = (props) => {
    return (
        <div>
            <main style={{marginTop: '37px', marginBottom: '74px'}}>
                <Slider/>
            </main>
            <About/>
            <div className='social-media-container'>
                <h1>Who's online?</h1>
                <hr/>
                <Twitch/>
            </div>
        </div>
    )
}

export default Home;