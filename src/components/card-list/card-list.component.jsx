import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = props => (
// export means it can be used in other areas
// () means its a functional component
// displays for now <div>... 

    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key = {monster.id} monster={monster}/>
            //passes monster into the card component
        ))}
       
    </div>
);
