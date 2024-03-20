import React from "react";
import "./DishCard.css";

function DishCard(props){
    return(
        <div className="dishCard">
            <img src={props.image}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>This is the contents of the description</p>
        </div>
    )
}

export default DishCard;