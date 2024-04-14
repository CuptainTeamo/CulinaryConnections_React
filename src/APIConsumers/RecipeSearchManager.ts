import axios from "axios";
import IRecipeSearchService from "./IRecipeSearchService";
import { RecipeIngredientsSearchDTO, RecipeSearchDTO } from "../Models/SearchingDTO/IngredientsSearchTypes";

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


class RecipeSearchManager implements IRecipeSearchService{
    async searchRecipeByRating(selectedRating: number): Promise<RecipeSearchDTO[]> {
        try{
            const ratingVal = selectedRating;
            const respone = await axios.get(`https://localhost:7155/api/Searching/GetAllRecipesByRating/rating?rating=${ratingVal}`);
            if(respone.status == 200){
                return respone.data
            }
            else{
                console.log("API Enpoint Inactive");
                return recipes_f;
            }
        }
        catch(ex){
            console.log('Error:', ex.message);
            return recipes_f;
        }
    }
    async searchRecipeByIngredients(selectedIngredients: number[]): Promise<RecipeSearchDTO[]> {
        
        try{
            const ingredientsIDs = selectedIngredients.map(id => `IngredientsIDs=${id}`).join('&');
            const respone = await axios.get(`https://localhost:7155/api/Searching/GetAllRecipesByIngredients/ingredients?${ingredientsIDs}`);

            if(respone.status == 200){
                return respone.data;
            }
            else{
                console.log("API Enpoint Inactive");
                return recipes_f;
            }
        }
        catch(ex){
            console.log('Error:', ex.message);
            return recipes_f;
        }
    }
}

export default RecipeSearchManager