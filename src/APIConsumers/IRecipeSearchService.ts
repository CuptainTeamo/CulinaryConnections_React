import { RecipeSearchDTO } from "../Models/SearchingDTO/IngredientsSearchTypes";

interface IRecipeSearchService{
    searchRecipeByIngredients(selectedIngredients: number[]): Promise<RecipeSearchDTO[]>;
    searchRecipeByRating(selectedRating: number): Promise<RecipeSearchDTO[]>;
}

export default IRecipeSearchService