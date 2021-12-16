import React from 'react';

import './card.styles.css';



export const Card = props => (  //new functional component
    //takes properties from props in 
    
    <div className='card-container'>
        <img 
        
            src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
            alt= 'monster' 

        />
        
        <h2> 
            {props.monster.name} 
            {/* get info from props and displays the name */}
        </h2>

        <p>
            {props.monster.email}
        </p>
    </div>

);