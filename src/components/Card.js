import React from 'react'
import './card.css'

function Card(props)
{
    return(
        <div className={props.class}>
                <img src={props.icon} />
                <h1>{props.type}</h1>
                <p>{props.text}</p>
                <div className={props.btnClass}>Learn More</div>
        </div>
    )
}

export default Card