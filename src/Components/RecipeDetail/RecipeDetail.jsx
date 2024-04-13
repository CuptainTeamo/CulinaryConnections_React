import "./RecipeDetail.css"
import React, { useEffect, useState } from "react";
import DynamicTwoInput from "../DynamicIngredientInput/DynamicIngredientInput";
import DynamicInput from "../DynamicStepInputBox/DynamicStepInputBox";
import UploadImage from "../UploadImage/UploadImage";
import urls from "../../Data/URL";

function RecipeDetail(props){
    const [dishName, setDishName] = useState(props.recipe ? props.recipe.RecipeName : "");
    const [description, setDescription] = useState(props.recipe ? props.recipe.Description : "");
    const [ingredients, setIngredients] = useState(props.recipe ? props.recipe.RecipeIngredients : []);
    const [steps, setSteps] = useState(props.recipe ? props.recipe.Steps : []);
    const [imageFile, setImageFile] = useState(props.recipe ? props.recipe.image : null);

    useEffect(()=>{
        if(props.recipe){
            setDishName(props.recipe.RecipeName);
            setDescription(props.recipe.Description);
            setIngredients(props.recipe.RecipeIngredients);
            setSteps(props.recipe.Steps);
            setImageFile();

        }
    }, [props.recipe])

    // console.log(props);

    const handleDishNameChange = (event) => {
        setDishName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("Id", '0');
        formData.append('OwnerId', '0');
        formData.append('GroupId', '0');
        formData.append('Name', dishName);
        formData.append('Description', description);
        formData.append('Created', new Date().toISOString());

    
        steps.forEach((step, index) => {
            formData.append(`Steps[${index}].id`, '0');
            formData.append(`Steps[${index}].StepContent`, step.stepContent);
        });

    
        ingredients.forEach((ingredient, index) => {
            formData.append(`Ingredients[${index}].id`, '0');
            formData.append(`Ingredients[${index}].name`, ingredient.name);
            formData.append(`Ingredients[${index}].qty`, '1');
            formData.append(`Ingredients[${index}].unit`, ingredient.unit);
        });

        
        if (imageFile) {
            formData.append('Images', imageFile);
        }
        formData.append('Rating', '100');



console.log(formData);
        await sendRecipeData(formData);
    }

    async function sendRecipeData(formData){
        try{
            const response = await fetch(urls.recipe.Update, {
                method: 'PUT',
                body: formData,
            });
            if (response.ok) {
                console.log('Recipe submitted successfully');
            } else {
                throw new Error('Failed to submit recipe');
            }
        }catch(error){
            console.error('Error submitting recipe: ', error);
        }
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="inputs-wrapper">
                    <div className="input-section">
                        <div className="innerWrap">
                            <label>Dish Name</label>
                            <input 
                                type="text"
                                onChange={handleDishNameChange}
                                value={dishName}
                                placeholder="Type the Dish Name"
                            />
                            <label>Description</label>
                            <textarea 
                                type="text"
                                onChange={handleDescriptionChange}
                                value={description}
                                placeholder="Type the Description"
                            />
                            <label>Ingredients</label>
                            <DynamicTwoInput 
                                ingredients={ingredients}
                                setIngredients={setIngredients}
                            />
                            <label>Steps</label>
                            <DynamicInput 
                                steps={steps}
                                setSteps={setSteps}
                            />
                        </div>
                    </div>
                    <div className="image-section">
                        <div className="innerWrap">
                           <label>Add Image</label>
                            <UploadImage 
                                // image={props.recipe ? props.recipe.image : null}
                                setImage={setImageFile}
                            /> 
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