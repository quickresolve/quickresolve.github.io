import React from 'react';

import linkedinLogo from '../assets/images/footer/linkedin.png';
import githubLogo from '../assets/images/footer/github.png';
import mediumLogo from '../assets/images/footer/medium.png';
import facebookLogo from '../assets/images/footer/facebook.png';
import twitterLogo from '../assets/images/footer/twitter.png';

export default props =>{
    return(
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3 className='white-color'>Let's Connect!</h3>
                <hr className='white-color sub'/>
                <p className="text-faded contact"><em>"I like nonsense; it wakes up the brain cells."</em> - Dr. Seuss</p>
                
                <div className="row footerRow">
                <div className="footer-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lnmontoya/"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
                </div>
                <div className="footer-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@QuickResolve"><img id="blog-icon" src={mediumLogo} alt="Blog" /><br/>Medium</a>
                </div>
                <div className="footer-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/laura.montoya.biz"><img id="blog-icon" src={facebookLogo} alt="Blog" /><br/>Facebook</a>
                </div>
                <div className="footer-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/QuickResolute"><img id="blog-icon" src={twitterLogo} alt="Blog" /><br/>Twitter</a>
                </div>
                <div className="footer-links">
                  <a className="" target="_blank" rel="noopener noreferrer" href="https://github.com/quickresolve"><img id="github-logo" src={githubLogo} alt="Github" /><br/>Github</a>
                </div>
                </div>

              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container white-color">
            Laura N. Montoya © 2018-2019
            <div className="right white-color">Built with React and MaterializeCSS</div> 
            </div>
          </div>
        </section>
    );
}