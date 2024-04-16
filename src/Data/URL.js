const API_URL="https://localhost:7155/api";

const urls = {
    recipe:{
        GetByGroupID: API_URL + '/Recipe/GetRecipeByGroupID/',
        GetByID: API_URL + '/Recipe/GetRecipeToUpdateByID/',
        Update: API_URL + '/Recipe/UpdateRecipe/UpdateRecipe',
        DeleteById: API_URL + '/Recipe/DeleteRecipeByID'
    },
    searching:{
        GetByIngredient: API_URL + '/Searching/GetAllRecipesByIngredients/ingredients?',
        GetByRating: API_URL + '/Searching/GetAllRecipesByRating/rating?rating='
    }
};

export default urls;