import React from 'react'
import "../../css/Components/factCard.css"

const FactCard = (props) =>
{
    return (
        <div className="fact-card" style={{"--p" : `${props.num-1}`, backgroundImage : `linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0.836)), url(${props.img})`}}>
            <h3>{props.num}</h3>
            <h4>{props.title}</h4>
            <p>{props.text} </p>
        </div>
    )
}

export default FactCard;
