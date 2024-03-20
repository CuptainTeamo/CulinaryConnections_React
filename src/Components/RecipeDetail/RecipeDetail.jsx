import "./RecipeDetail.css"
import React from "react";
import DynamicTwoInput from "../DynamicTwoInput/DynamicTwoInput";
import DynamicInput from "../DynamicInput/DynamicTwoInput";
import UploadImage from "../UploadImage/UploadImage";

function RecipeDetail(){
    return(
        <div className="form-container">
            <form>
                <div className="inputs-wrapper">
                    <div className="input-section">
                        <label>Dish Name</label>
                        <input 
                            type="text"
                            placeholder="Type the Dish Name"
                        />
                        <label>Description</label>
                        <textarea 
                            type="text"
                            placeholder="Type the Description"
                        />
                        <label>Ingredients</label>
                        <DynamicTwoInput />
                        <label>Steps</label>
                        <DynamicInput />
                    </div>
                    <div className="image-section">
                        <label>Add Image</label>
                        <UploadImage />
                    </div>
                </div>
                <div className="form-actions">
                    <button type="submit">Save</button>
                    <button type="button">Back</button>
                </div>
            </form>
        </div>
    );
}

export default RecipeDetail;