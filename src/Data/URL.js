const API_URL="https://localhost:44307/api";

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
    },
    identity: {
        Login: API_URL + '/Identity/Login',
        Register: API_URL + '/api/Identity/Register'
    },
    cookbook: {
        createCookbook: API_URL + '/Cookbook/CreateCookbook',
        requestToJoin: API_URL + '/Cookbook/RequestJoinCookbook/request-join?registrationCode=',
        respondToRequest: API_URL + '/Cookbook/RespondToJoinRequest/respond-to-request?requestId=&approve='
    }
    
};

export default urls;