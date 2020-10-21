import React from 'react';
import {Card} from '../cards/card.components'
import './card-list.styles.css'

export const CardList = props => <div className='card-list'>{
props.monster.map((monster) => 
{return <Card  key={monster.key} monster={monster} />})}
</div>