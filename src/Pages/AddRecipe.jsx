import React from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import RecipeDetail from "../Components/RecipeDetail/RecipeDetail";

function AddRecipe(){
    return(
        <div>
            <h1>Add Recipes</h1>
            <Dropdown />
            <RecipeDetail recipe={null}/>
        </div>
    );
}

export default AddRecipe;