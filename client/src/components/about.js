import React from 'react';

import about from '../assets/images/about/LNM_Headshot.jpg';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>About</h3>
            <hr className='white-color'/>
            <p className='text-faded'>Lead on tech social impact and ethical AI development, Laura is the founder and Managing Partner of Accel Impact Organizations, including Accel AI Institute, Latinx in AI (LXAI), and Research Colab. Her academic background is in Biology, Physical Science, and Human Development. She relocated to the San Francisco Bay area to work at the Mathematical Sciences Research Institute before jump-starting her career in software engineering at Intuit revamping their Quickbooks online platform. She is a director with Women Who Code, advisor for Udacity’s AI and Data nano degree, and an affiliate with the Berkman Klein Center for Internet and Society at Harvard Law.</p>
            <p className='text-faded'>She chairs and serves on Program Committees for research workshops at AI and ML conferences including NeurIPS, ICLR, ICML, and ACM FAccT. Recent research areas include reducing bias data representations in machine learning models, the effects of artificial intelligence development for developing countries, and paralleling biological and synthetic neural networks seen in mycology, entomology, and computational science.</p>
            <p className='text-faded'>She has led sessions on social impact, tech diversity, and ethical AI development for Creative Mornings, Katapult Future Fest, Silicon Valley Future Forum, Tech Inclusion Conference, Thrival Summit, Global Hive Summit, and keynoted the “Future of Work” for the Data and Society Conference at UC Berkeley. Laura has given guest lectures and technical workshops at Google, Santa Clara University Law, Stanford University Computational Social Science, and GTC Deep Learning School. Recently she spoke at TEDx Santa Barbara and has been featured in WITtalks and CIIS podcasts, Xconomy, Verizon News, and Forbes Leadership.</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded subscript center-align"><em>“When I let go of what I am, I become what I might be.”</em> ~ Lao Tzu</div>
            <p className='text-faded'>Scientist and engineer turned serial entrepreneur and startup advisor. I appreciate the experimental process of startups, software engineering, data exploration, and optimizing neural networks. Recent work includes reducing bias data representations in machine learning models for facial recognition applications.</p>
        </div>
        </section>
    );
}