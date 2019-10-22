import React from 'react';

import microphone from '../assets/images/skills/microphone.png';
import futuristic from '../assets/images/skills/futuristic.png';
import pythonLogo from '../assets/images/skills/python.png';
import jsLogo from '../assets/images/skills/javascript.png';
import coding from '../assets/images/skills/coding.png';
import digital from '../assets/images/skills/digital.png';
import hologram from '../assets/images/skills/hologram.png';
import diamond from '../assets/images/skills/diamond.png';


export default props =>{

    return(
        <section id='skills'>
            <h3>Skills</h3>
            <hr/>
            <div className="container">
                <div className="row">
                <div className="col s12 l6 skills">
                    <img className="col s3 htmlLogo" src={hologram} alt="hologram"/>
                    <img className="col s3 htmlLogo" src={futuristic} alt="futuristic"/>
                    <div className="col s6 skillsText"><strong>Organizational Leadership</strong> 
                        <p>As an entrepreneur and managing partner, I have been leading both for-profit and non-profit organizations, in developing product vision, roadmap, sourcing talent and driving initiatives forward through early growth stages.</p>
                    </div>

                </div>
                
                <div className="col s12 l6 skills">

                <div className="col s6 push-l6 skillsText"><strong>Public Speaking & Writing</strong> 
                    <p>I identify as a futurist and enjoy teaching technical workshops, giving lectures on the future of work and ethics of artificial intelligence, as well as sharing my experience as an engineer and entrpreneur in the tech industry.</p>
                </div>  
                    <img className="col s3 pull-l6 jsLogo" src={microphone} alt="Microphone"/>
                    <img className="col s3 pull-l6 oopLogo" src={coding} alt='Coding'/>
                </div>

                </div>

                <div className="row">
                <div className="col s12 l6 skills">
                    <img className="col s3 apiLogo" src={pythonLogo} alt='Python'/>
                    <img className="col s3 jsLogo" src={jsLogo} alt="Javascript"/>
                    <div className="col s6 skillsText"><strong>Software Engineering</strong> 
                        <p>Experienced full stack software engineer and AI Enthusiast. Have previously worked in Ruby, Python, JS, React & React Native. I enjoy libraries such as TensorFlow and Pytorch for work in AI including NLP and Computer Vision.</p>
                    </div>

                </div>
                
                <div className="col s12 l6 skills">

                <div className="col s6 push-l6 skillsText"><strong>Design, UX, Video</strong> 
                    <p>Experienced in graphic design and content creation using Adobe creative suite of products including Photoshop, Illustrator, and Premier Pro.</p>
                </div> 
                    <img className='col s3 pull-l6 reduxLogo' src={digital} alt='Digital'/> 
                    <img className='col s3 pull-l6 reactLogo' src={diamond} alt='diamond'/>
                </div>
                
                </div>


            </div>
        </section>
    );
}