import React from 'react';

import about from '../assets/images/about/lnm-headshot.jpg';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Who Am I?</h3>
            <hr className='white-color'/>
            <p className='text-faded'>Laura is the Founder and Executive Director of Accel.AI, a global Non Profit Institute lowering the barriers to entry in engineering artificial intelligence, she also founded and co-Chairs the Latinx in AI Coalition. She has been described as a natural and versatile leader with a passion for AI, Computer Science, Research, and Psychology. She has a Bachelors of Science in Biology, Physical Science, and Human Development. She jumpstarted her career in software engineering at Intuit revamping their Quickbooks online platform. She is a Director with Women Who Code, a global non-profit dedicated to inspiring women to excel in technology careers.</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>“When I let go of what I am, I become what I might be.”</em> ~ Lao Tzu</div>
            <p className='text-faded'>Scientist and engineer turned serial entrepreneur and startup advisor. I appreciate the experimental process of startups, software engineering, data exploration, and optimizing neural networks. Recent work includes reducing bias data representations in machine learning models for facial recognition applications.</p>
        </div>
        </section>
    );
}