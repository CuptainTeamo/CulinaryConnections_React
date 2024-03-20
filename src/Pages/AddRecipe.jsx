import React from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import RecipeDetail from "../Components/RecipeDetail/RecipeDetail";

function AddRecipe(){
    return(
        <div>
            <Dropdown />
            <RecipeDetail />
        </div>
    );
}

export default AddRecipe;