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
                        <p>As an entrepreneur and product manager, I have been leading both for profit and nonprofit organizations, in sourcing talent and driving initiatives forward through completion. Also, certified as a scrum master for agile software development techniques.</p>
                    </div>

                </div>
                
                <div className="col s12 l6 skills">

                <div className="col s6 push-l6 skillsText"><strong>Public Speaking & Writing</strong> 
                    <p>I enjoy teaching technical workshops, giving lectures on the future of work and ethics of artificial intelligence, as well as sharing my experience as an engineer and entrpreneur in the tech industry.</p>
                </div>  
                    <img className="col s3 pull-l6 jsLogo" src={microphone} alt="Microphone"/>
                    <img className="col s3 pull-l6 oopLogo" src={coding} alt='Coding'/>
                </div>

                </div>

                <div className="row">
                <div className="col s12 l6 skills">

                    <img className="col s3 jsLogo" src={jsLogo} alt="Javascript"/>
                    <img className="col s3 apiLogo" src={pythonLogo} alt='Python'/>
                    <div className="col s6 skillsText"><strong>Software Engineering</strong> 
                        <p>Experienced full stack engineer. Have previously worked in Ruby, Python, SQL, JS, React & React Native, HTML5 & CSS3</p>
                    </div>

                </div>
                
                <div className="col s12 l6 skills">

                <div className="col s6 push-l6 skillsText"><strong>Design, UX, Video</strong> 
                    <p>Experienced in Adobe creative suite of products including Photoshop, Illustrator, Premier Pro, etc for graphic design and video editing.</p>
                </div> 
                    <img className='col s3 pull-l6 reduxLogo' src={digital} alt='Digital'/> 
                    <img className='col s3 pull-l6 reactLogo' src={diamond} alt='diamond'/>
                </div>
                
                </div>


            </div>
        </section>
    );
}