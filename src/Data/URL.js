const API_URL="https://localhost:7155/api";

const urls = {
    recipe:{
        GetByGroupID: API_URL + '/Recipe/GetRecipesByGroupID/',
        GetByID: API_URL + '/Recipe/GetRecipeToUpdateByID/'
    },
    searching:{

    }
};

export default urls;