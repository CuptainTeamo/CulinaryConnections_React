import "./RecipeDetail.css"
import React from "react";
import DynamicTwoInput from "../DynamicIngredientInput/DynamicIngredientInput";
import DynamicInput from "../DynamicStepInputBox/DynamicStepInputBox";
import UploadImage from "../UploadImage/UploadImage";

function RecipeDetail(props){
    return(
        <div className="form-container">
            <form>
                <div className="inputs-wrapper">
                    <div className="input-section">
                        <div className="innerWrap">
                            <label>Dish Name</label>
                            <input 
                                type="text"
                                value={props.recipe ?props.recipe.dishName : ""}
                                placeholder="Type the Dish Name"
                            />
                            <label>Description</label>
                            <textarea 
                                type="text"
                                value={props.recipe ?props.recipe.description : ""}
                                placeholder="Type the Description"
                            />
                            <label>Ingredients</label>
                            <DynamicTwoInput ingredients={props.recipe ? props.recipe.Ingredients : null}/>
                            <label>Steps</label>
                            <DynamicInput steps={props.recipe ? props.recipe.steps : null}/>
                        </div>
                    </div>
                    <div className="image-section">
                        <div className="innerWrap">
                           <label>Add Image</label>
                            <UploadImage image={props.recipe ? props.recipe.image : null}/> 
                        </div>
                    </div>
                </div>
                <div className="form-actions">
                    <button type="submit">{props.recipe ? "Edit" : "Save"}</button>
                    <button type="button">{props.recipe ? "Delete" : "Back"}</button>
                </div>
            </form>
        </div>
    );
}

export default RecipeDetail;