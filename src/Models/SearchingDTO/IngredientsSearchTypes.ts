export interface RecipeSearchDTO{
    RecipeName: string;
    RecipeIngredients: RecipeIngredientsSearchDTO[] 
}

export interface RecipeIngredientsSearchDTO{
    Ingredient: string;
    Qty: number;
    Unit: string;
}


export interface Ingredient{
    Name: string;
    Id: number;
}
