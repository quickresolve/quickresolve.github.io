import React from 'react';


import LandingPage from './landing_page';
import About from './about';

export default props =>{
    return(
        <div className='home'>
            <LandingPage/>
            <About/>
        </div>
    )
}