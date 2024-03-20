import React from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import RecipeDetail from "../Components/RecipeDetail/RecipeDetail";
import Sandwich from "../Data/Sandwich";

function RecipeDetailPage(){
    return(
        <div className="body">
            <h1>Recipe Detail</h1>
            <Dropdown />
            <RecipeDetail recipe={Sandwich}/>
        </div>
    );
}

export default RecipeDetailPage;