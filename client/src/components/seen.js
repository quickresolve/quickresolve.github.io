import React from 'react';

import forbesLogo from '../assets/images/featured/logos/forbes.png';
import tedxLogo from '../assets/images/featured/logos/tedx.png';
import ieeeLogo from '../assets/images/featured/logos/ieee.png';
import gtcLogo from '../assets/images/featured/logos/gtc.png';
import ciisLogo from '../assets/images/featured/logos/ciis.png';
import thrivalLogo from '../assets/images/featured/logos/Thrival.png';
import mitLogo from '../assets/images/featured/logos/mit.png';
import svaiLogo from '../assets/images/featured/logos/SVAI.png';
import xconomyLogo from '../assets/images/featured/logos/xconomy.png';
import wtmLogo from '../assets/images/featured/logos/wtm.png';
import cmLogo from '../assets/images/featured/logos/cm.png';
import kffLogo from '../assets/images/featured/logos/kff.png';

export default props =>{
    return(
        <section className="seen">
          <div className="seen-container">
            <div className="row">
              <div className="col s18">
                <h4>Featured In:</h4>
                <hr className='sub'/>
                <div className="row seenRow">
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="forbes-logo" src={forbesLogo} alt="Forbes" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="tedx-logo" src={tedxLogo} alt="TEDx" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="ieee-logo" src={ieeeLogo} alt="ieee" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="thrival-logo" src={thrivalLogo} alt="thrival" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="mit-logo" src={mitLogo} alt="mit" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="xconomy-logo" src={xconomyLogo} alt="xconomy" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="cm-logo" src={cmLogo} alt="creative mornings" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="kff-logo" src={kffLogo} alt="katapult future fest" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="gtc-logo" src={gtcLogo} alt="gtc" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="ciis-logo" src={ciisLogo} alt="ciis" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="wtm-logo" src={wtmLogo} alt="women tech makers" /></a>
                    </div>
                    <div className="seen-links">
                        <a target="_blank" rel="noopener noreferrer" href=""><img id="svai-logo" src={svaiLogo} alt="svai" /></a>
                    </div>
                </div>
              </div>
            </div>    
          </div>     
        </section>
    );
}