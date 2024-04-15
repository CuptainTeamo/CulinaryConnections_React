import React from "react";
import Dropdown from "../Components/Dropdown/Dropdown";
import DishCard from "../Components/DishCard/DishCard";
import recipes from "../Data/Recipe";
import urls from "../Data/URL";
import { useState, useEffect } from "react";

function createDishCards(dishItem){
    return <DishCard 
        image = {dishItem.img}
        id = {dishItem.Id}
        title = {dishItem.RecipeName}
        description = {dishItem.RecipeDescription}
    />
}

function RecipeInBook(){
    // fetch data from server
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () =>{
            try{
                const groupId = 2;
                const url = `${urls.recipe.GetByGroupID}${groupId}`;
                const response = await fetch(url);

                console.log(response);
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setBooks(data);
                console.log(data);
            }catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchRecipe();
    }, []);

    // map the data
    return(
        <div className="body">
            <h1>Recipes</h1>
            <Dropdown />
            {books && books.map(createDishCards)}
            {!books && recipes.map(createDishCards)}
        </div>
    );
}

export default RecipeInBook;