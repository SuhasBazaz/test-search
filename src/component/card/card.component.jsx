import React from 'react'
import './card.style.css';

export default function Card(props) {
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=100x100`}></img>
            <h2> {props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}
