import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RecipeSearchDTO, RecipeIngredientsSearchDTO } from '../../Models/SearchingDTO/IngredientsSearchTypes.ts';
import IngredientSelector from './IngredientSelection.tsx';
import IRecipeSearchService from '../../APIConsumers/IRecipeSearchService.ts';

const ingredients1: RecipeIngredientsSearchDTO = {
    Ingredient: "Flour",
    Qty: 200,
    Unit: "grams"
};

const ingredients2: RecipeIngredientsSearchDTO = {
    Ingredient: "Sugar",
    Qty: 100,
    Unit: "grams"
};

// Fake Recipe Data 
const recipe1: RecipeSearchDTO = {
    RecipeName: "Chocolate Cake",
    RecipeIngredients: [ingredients1, ingredients2] 
};


const recipe2: RecipeSearchDTO = {
    RecipeName: "Apple Pie",
    RecipeIngredients: [ingredients1, ingredients2] 
};

const recipes_f: RecipeSearchDTO[] = [recipe1, recipe2];


const CriteriaSearchComponent: React.FC <{searchService : IRecipeSearchService}> = ({ searchService }) => {
    const [recipes, setRecipes] = useState<RecipeSearchDTO[]>(recipes_f);
    
    const handleSearch = async (selectedIngredients: number[]) => {
        try {
            const recipes = await searchService.searchRecipeByIngredients(selectedIngredients);
            console.log('Recipes Data:', recipes);
            setRecipes(recipes);
        } catch (error) {
            console.log('Error Fetching Recipes', error);
        }
    };

    return (
        <div>
            <h1>Recipe Search</h1>
            <IngredientSelector onSelectionChange={handleSearch} />
            <div>
                {recipes && recipes.map((recipe, index) => (
                    <div key={index}>
                        <h2>{recipe.RecipeName}</h2>
                        <ul>
                            {recipe.RecipeIngredients && recipe.RecipeIngredients.map((recipeIngredient, idx) => (
                                <li key={idx}>
                                    {recipeIngredient.Qty} {recipeIngredient.Unit} of {recipeIngredient.Ingredient}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CriteriaSearchComponent;
   


 