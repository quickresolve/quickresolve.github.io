import React from 'react';


import LandingPage from './landing_page';
import About from './about';
import Seen from './seen';

export default props =>{
    return(
        <div className='home'>
            <LandingPage/>
            <About/>
            <Seen/>
        </div>
    )
}