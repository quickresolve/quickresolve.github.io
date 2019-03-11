import React from 'react';


import featuredDataArray from '../assets/data/featured_data';
import Card from './featured_card';

export default props=>{
    
    const cardList = featuredDataArray.map((item, index) =>{
        return(
            <Card
                title={item.name} 
                info={item.info} 
                src={item.img} 
                key={index} 
                alt={item.alt} 
                code={item.codeLink} 
                demo={item.eventLink}
                video={item.videoLink}
                type={item.type}
                date={item.date}
                time={item.time}
                location={item.location}
            />
        );
    });
    return(
        <section id='work'>
            <h3>Featured</h3>
            <hr/>
            <p className='text-faded featured'>Speaking Engagements, Publications, and Media Coverage</p>
            <div className="row center">
                {/* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0VEH518M_70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
            <div className="row">
            {cardList}
            </div>
        </section>
    );
}