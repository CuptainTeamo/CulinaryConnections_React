import React from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import DishCard from "../Components/DishCard/DishCard";
import recipes from "../Data/Recipe";

function createDishCards(dishItem){
    return <DishCard 
        image = {dishItem.img}
        title = {dishItem.title}
        description = {dishItem.description}
    />
}

function RecipeInBook(){
    return(
        <div>
            <Dropdown />
            {recipes.map(createDishCards)}
        </div>
    );
}

export default RecipeInBook;