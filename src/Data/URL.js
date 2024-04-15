const API_URL="https://localhost:7155/api";

const urls = {
    recipe:{
        GetByGroupID: API_URL + '/Recipe/GetRecipeByGroupID/',
        GetByID: API_URL + '/Recipe/GetRecipeToUpdateByID/',
        Update: API_URL + '/Recipe/UpdateRecipe/UpdateRecipe'
    },
    searching:{

    }
};

export default urls;