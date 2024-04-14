import React, { useState} from 'react';
import "./SearchStyles.css"
import { RecipeSearchDTO, RecipeIngredientsSearchDTO } from '../../Models/SearchingDTO/IngredientsSearchTypes.ts';
import IngredientSelector from './IngredientSelection.tsx';
import RatingsDisplay from './RatingSelection.tsx';
import IRecipeSearchService from '../../APIConsumers/IRecipeSearchService.ts';
import RecipeSearchManager from '../../APIConsumers/RecipeSearchManager.ts'

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
    const [selectedNav, setSelectedNav] = useState<'Ingredients' | 'Ratings'>('Ingredients');
    searchService = new RecipeSearchManager()
    console.log(searchService)
    
    const handleIngredientSearch = async (selectedIngredients: number[]) => {
        try {
            const recipes = await searchService.searchRecipeByIngredients(selectedIngredients);
            setRecipes(recipes)
            console.log('Recipes Data:', recipes);
            setRecipes(recipes);
        } catch (error) {
            console.log('Error Fetching Recipes', error);
        }
    };

    const handleRatingSearch = async(ratingVal:number)=>{
        try{
            const recipes = await searchService.searchRecipeByRating(ratingVal);
            setRecipes(recipes)
            console.log('Recipe Data',recipes);
            setRecipes(recipes);
        }catch(error){
            console.log('Error Fetching Recipes', error);
        }

    }

    return (
        <div className='wrapperT'>
            <nav>
                <button onClick={() => setSelectedNav('Ingredients')}>Ingredients</button>
                <button onClick={() => setSelectedNav('Ratings')}>Ratings</button>
            </nav>
            {selectedNav == 'Ingredients'? (
                <div>
                <h1 className='header1'>Ingredients</h1>
                
                <IngredientSelector onSelectionChange={handleIngredientSearch} />
                <div>
                    {recipes && recipes.map((recipe, index) => (
                        <div key={index}>
                            <h2 className='header1'>{recipe.RecipeName}</h2>
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
            ) : (
                <div>
                <h1 className='header1'>Ratings</h1>
                <RatingsDisplay onRatingSelected={handleRatingSearch}/>
                <div>
                    {recipes && recipes.map((recipe, index) => (
                        <div key={index}>
                            <h2 className='header1'>{recipe.RecipeName}</h2>
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
            
            )

            }
            
           
        </div>
        
    );
};

export default CriteriaSearchComponent;
   


 