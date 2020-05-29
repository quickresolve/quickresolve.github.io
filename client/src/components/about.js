import React from 'react';

import about from '../assets/images/about/LNM_Headshot.jpg';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>About</h3>
            <hr className='white-color'/>
            <p className='text-faded'>Laura is the Founder and Managing Partner of Accel Impact, including Accel AI Institute, Latinx in AI (LXAI), and Research Colab. After receiving a B.S. in Biology, Physical Science, and Human Development from Eastern Michigan University where she conducted a behavioral study tracking tarantula movement during prey scent detection in the Spider Lab, she organized an annual lectureship for the orthopedic oncology residency program while at the University of Michigan Hospital. She moved to the San Francisco Bay area to work at the Mathematical Sciences Research Institute before jumpstarting her career in software engineering at Intuit revamping their Quickbooks online platform. She is a director with Women Who Code and advisor for Udacity’s AI and Data nano-degree. She chairs and serves on Program Committees for workshops at AI and ML research conferences including FAT*, NeurIPS, ICLR, and ICML.</p>
            <p className='text-faded'>She has led sessions on social impact, tech diversity, and ethical AI development at Creative Mornings, Katapult Future Fest, Silicon Valley Future Forum, Tech Inclusion Conference, Thrival Summit, Global Hive Summit, and keynoted the “Future of Work” for the Data and Society Conference at UC Berkeley. Laura has given guest lectures and technical workshops at Google, Santa Clara University Law, Stanford University Computational Social Science, and GTC Deep Learning School. Recently she spoke at TEDx Santa Barbara and has been featured in WITtalks and CIIS podcasts, Xconomy, Verizon News, and Forbes Leadership.</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded subscript center-align"><em>“When I let go of what I am, I become what I might be.”</em> ~ Lao Tzu</div>
            <p className='text-faded'>Scientist and engineer turned serial entrepreneur and startup advisor. I appreciate the experimental process of startups, software engineering, data exploration, and optimizing neural networks. Recent work includes reducing bias data representations in machine learning models for facial recognition applications.</p>
        </div>
        </section>
    );
}