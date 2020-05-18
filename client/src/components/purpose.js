import React from 'react';

import LAC from '../assets/images/purpose/lac.jpg';
import gest from '../assets/images/purpose/gesturing.jpg';
import aibiz from '../assets/images/featured/AIShowBiz.jpeg';


export default props =>{

    return(
        <section id='purpose'>
        <div className="container">
            <h3 className='color'>Purpose</h3>
            <hr className='color'/>
            <p className='text'>
            At my core, I am a technical social impact entrepreneur, who thrives in the creative energy of a team working to solve humanity's biggest challenges through technology and research. The cover letter buzzword of my generation, seeking meaningful work, is not merely a phrase to be thrown in casually but the root of my drive to find a mission worthy of the time I dedicate. 
            </p>
            <p className='text'>
                On my personal narrative, I am a daughter of a Colombian refugee who immigrated to the US to escape Guerilla warfare in the late 1980s. I was raised by a single mother in a low-income household, which imbued in me the directive and tenacity to graduate high school early at age 16, gaining the status of an emancipated minor. While working full time, I earned a degree in Biological and Physical Sciences, becoming the first in my family to graduate from University. I have over 10 years experience in professional institutions and private industry, with a varied background in scientific research, software engineering, and organizational leadership. I have been acquainted with the spectrum of the tech industry, having worked as a software engineer at one of the largest Fintech corporations in Silicon Valley, having built my own startups, and most recently running a non-profit organization, Accel AI Institute, with a mission of driving artificial intelligence for social impact initiatives. 
            </p>
            <div className='row'>
                <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={aibiz} alt="gesturing"/>
            </div>
            <div className="text center-align">
                <em>
                “I learned a long time ago the wisest thing I can do is be on my own side, be an advocate for myself and others like me.”
                </em> 
                ~ Maya Angelou
            </div>
            <p className='text'>
                To new ventures, I bring not only my non-traditional upbringing and genetic ethnic variation but also my principled education in the biological and physical sciences and seasoned professional career in tech which apogees in the attainment of knowledge, resources, and skill for the amelioration of others. Initiatives I have already launched in AI education and research include the Demystifying AI Symposiums and Latinx in AI (LXAI) organization in which I led the inaugural annual workshop at the Neural Information Processing Systems (NeurIPS) Conference for Latinx researchers. As the organization has grown, I now chair and serve on Program Committees for workshops at AI and ML research conferences including ACM FAcct, ICLR, and ICML as well. 
            </p>
            <div className='row'>
                <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={gest} alt="gesturing"/>
            </div>
            <div className="text center-align">
                <em>
                “By learning you will teach; By teaching you will learn”
                </em> 
                ~ Latin Proverb
            </div>
            <p className='text'>
                I have also led sessions on social impact, tech diversity, and ethical AI development at Creative Mornings, Katapult Future Fest, Silicon Valley Future Forum, Tech Inclusion Conference, Thrival Summit, Global Hive Summit, and keynoted the “Future of Work” for the Data and Society Conference at UC Berkeley. I have given guest lectures and technical tutorial sessions at Google, Santa Clara University Law, Stanford University Computational Social Science, and GTC Deep Learning School. Recently I spoke at TEDx Santa Barbara and have been featured in WITtalks and CIIS podcasts, Xconomy, Verizon News, and Forbes Leadership.
            </p>
            <p className='text'>
                The significance and culmination of my life’s work rest on my ability to understand and connect with those who strive for a better life. I understand that the essence of impact is not only comprehension but also recognition of others, their challenges and the opportunities for their advancement. I have made this the focus and influence of my research while ensuring others appreciate the advantages of investment where they may have previously only seen risk. 
            </p>

            <div className='row'>
            <img id="lacImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={LAC} alt="LATAM AI Conf"/>
            </div>
            <div className="text small center-align">
                Sharing My Research on Evolving AI Potential in Latin America
            </div>
            
        </div>
        </section>
    );
}