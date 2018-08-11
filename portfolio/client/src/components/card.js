import React from 'react';

export default props =>{
    let demoBtn = null;
    let codeBtn = null;
    
    if(props.demo !== ""){
        demoBtn = (<a className="waves-effect waves-light btn" target="_blank" href={props.demo}><i className="material-icons right">present_to_all</i> demo</a>);
    }
    if(props.code !== "") {
        codeBtn = (<a className="waves-effect waves-light btn" target="_blank" href={props.code}><i className="material-icons right">developer_mode</i> code</a>);
    }
    return(
    <div className="card col m6 s12 l4">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator work-img" src={props.src} alt={props.alt}/>
        </div>
        <div className="card-content">
            <span className="card-title activator">{props.title}<i className="material-icons right">add</i></span>
            <p><strong>{props.type}</strong></p>
            {codeBtn}
            {demoBtn}        
        </div>

        <div className="card-reveal">
            <span className="card-title card-open">{props.title}<i className="material-icons right">close</i></span>
            <p><strong>{props.type}</strong></p>
            <p>{props.info}</p>
            {codeBtn}
            {demoBtn}
        </div>
    </div>
    );
}