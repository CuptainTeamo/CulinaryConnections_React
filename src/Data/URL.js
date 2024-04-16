const API_URL="https://localhost:7155/api";

const urls = {
    recipe:{
        GetByGroupID: API_URL + '/Recipe/GetRecipeByGroupID/',
        GetByID: API_URL + '/Recipe/GetRecipeToUpdateByID/',
        Update: API_URL + '/Recipe/UpdateRecipe/UpdateRecipe',
        DeleteById: API_URL + '/Recipe/DeleteRecipeByID',
        GetBookView: API_URL + '/Cookbook/GetCurrentUserBooks'
    },
    searching:{

    }
};

export default urls;