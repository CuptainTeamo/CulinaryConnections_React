import "./RecipeDetail.css"
import React from "react";
import DynamicTwoInput from "../DynamicTwoInput/DynamicTwoInput";
import DynamicInput from "../DynamicInput/DynamicTwoInput";
import UploadImage from "../UploadImage/UploadImage";

function RecipeDetail(){
    return(
        <div>
            <h1>Add Recipe</h1>
            <form>
                <label>Dish Name</label>
                <input 
                    type="text"
                    placeholder="Type the Dish Name"
                />

                <label>Description</label>
                <input 
                    type="text"
                    placeholder="Type the Description"
                />
                <label>Ingredients</label>
                <DynamicTwoInput />
                <label>Steps</label>
                <DynamicInput />
                <label>Add Image</label>
                <UploadImage />
                <button type="submit">Save</button>
                <button >Back</button>
            </form>
        </div>
    );
}

export default RecipeDetail;