import React, { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import RecipeDetail from "../Components/RecipeDetail/RecipeDetail";
import Sandwich from "../Data/Sandwich";
import urls from "../Data/URL";
import { useParams } from "react-router-dom";

function RecipeDetailPage(){
    const [recipe, setRecipe] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchRecipe = async () =>{
            try{
                const recipeId = id? id: 8;
                const url = `${urls.recipe.GetByID}id?id=${recipeId}`;
                const response = await fetch(url);

                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setRecipe(data);
                // console.log(data);
            }catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchRecipe();
    }, []);
    return(
        <div className="body">
            <h1>Recipe Detail</h1>
            <Dropdown />
            <RecipeDetail recipe={recipe}/>
        </div>
    );
}

export default RecipeDetailPage;