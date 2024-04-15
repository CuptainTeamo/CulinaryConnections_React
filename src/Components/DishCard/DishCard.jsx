import React, { useState } from "react";
import "./DishCard.css";
import { useNavigate } from "react-router-dom";

function DishCard(props){
    const [id, setid] = useState(props.id);

    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/RecipeDetail/${id}`)
    }

    return(
        <div className="dishCard" onClick={handleClick}>
            <img src={props.image}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default DishCard;