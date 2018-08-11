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
                type={item.type}
                date={item.date}
            />
        );
    });
    return(
        <section id='work'>
            <h3>Featured</h3>
            <hr/>
            <p className='text-faded featured'>Publications, Speaking Engagements, and Media Coverage</p>
            <div className="row">
            {cardList}
            </div>
        </section>
    );
}