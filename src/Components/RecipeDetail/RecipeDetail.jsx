import "./RecipeDetail.css"
import React, { useEffect, useState } from "react";
import DynamicTwoInput from "../DynamicIngredientInput/DynamicIngredientInput";
import DynamicInput from "../DynamicStepInputBox/DynamicStepInputBox";
import UploadImage from "../UploadImage/UploadImage";
import urls from "../../Data/URL";
import { useNavigate } from "react-router-dom";

function convertBase64ToFile(imageBase64, filename) {
    const arr = imageBase64.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}

function RecipeDetail(props){
    const navigate = useNavigate();

    const [id, setId] = useState(0);
    const [ownerId, setOwnerId] = useState(0);
    const [groupId, setGroupId] = useState(0);
    const [rating, setRating] = useState(null);
    const [dishName, setDishName] = useState(props.recipe ? props.recipe.RecipeName : "");
    const [description, setDescription] = useState(props.recipe ? props.recipe.Description : "");
    const [ingredients, setIngredients] = useState(props.recipe ? props.recipe.RecipeIngredients : []);
    const [steps, setSteps] = useState(props.recipe ? props.recipe.Steps : []);
    const [imageFile, setImageFile] = useState(null);
    const [imageSrc, setImageSrc] = useState('');

    const [errors, setErrors] = useState({});

    useEffect(()=>{
        if(props.recipe){
            console.log(props.recipe);
            setId(props.recipe.Id);
            setOwnerId(props.recipe.OwnerId);
            setGroupId(props.recipe.GroupId);
            setRating(props.recipe.Rating);
            setDishName(props.recipe.RecipeName);
            setDescription(props.recipe.Description);
            setIngredients(props.recipe.RecipeIngredients);
            setSteps(props.recipe.Steps);
            if(props.recipe.ImageBase64){
                // store in imagesrc
                setImageSrc(props.recipe.ImageBase64);
                // convert to file
                setImageFile(convertBase64ToFile(props.recipe.ImageBase64, "oldImage"))

            }
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

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("Id", id.toString());
        formData.append('OwnerId', ownerId.toString());
        formData.append('GroupId', groupId.toString());
        formData.append('Name', dishName);
        formData.append('Rating', rating.toString());
        formData.append('Description', description);
        formData.append('Created', new Date().toISOString());

    
        steps.forEach((step, index) => {
            formData.append(`Steps[${index}].id`, '0');
            formData.append(`Steps[${index}].StepContent`, step.stepContent);
        });

    
        ingredients.forEach((ingredient, index) => {
            formData.append(`Ingredients[${index}].id`, '0');
            formData.append(`Ingredients[${index}].name`, ingredient.Ingredient);
            formData.append(`Ingredients[${index}].qty`, ingredient.Qty);
            formData.append(`Ingredients[${index}].unit`, ingredient.Unit);
        });

        
        if (imageFile) {
            formData.append('Image', imageFile);
        }
        formData.append('Rating', '100');



        console.log(formData.values);
        // validate the data
        const validationErrors = {}
        if(!formData.get('Name').trim()){
            validationErrors.dishName = "* Dish Name is required."
        }else if(!/^[A-Za-z0-9\s_!-]+$/.test(formData.get('Name'))){
            validationErrors.dishName = "* Dish Name can only contains letters, numbers and '_', '-', '!'."
        }

        if(!formData.get('Rating').trim()){
            validationErrors.rating = "* Rating is required."
        }else if(!/^[1-5]$/.test(formData.get('Rating'))){
            validationErrors.rating = "* Rating can only be integer numbers from 1 - 5."
        }

        if(!formData.get('Description').trim()){
            validationErrors.description = "* Description is required."
        }else if(!/^[A-Za-z0-9\s_!,.-]+$/.test(formData.get('Description'))){
            validationErrors.description = "* Description can only contains letters, numbers and '_', '-', '!'."
        }
/*
        ingredients.forEach((ingredient, index) => {
            var test = formData.get(`Ingredients[${index}].name`);
            if(!formData.get(`Ingredients[${index}].name`).trim() || !(formData.get(`Ingredients[${index}].name`) === undefined)){
                validationErrors.ingredientName = "* Ingredient Name is required."
            }else if(!/^[A-Za-z0-9\s_!-]+$/.test(formData.get(`Ingredients[${index}].name`))){
                validationErrors.ingredientName = "* Ingredient Name can only contains letters, numbers and '_', '-', '!'."
            }

            if(!formData.get(`Ingredients[${index}].qty`).trim() || !(formData.get(`Ingredients[${index}].qty`) === undefined)){
                validationErrors.ingredientQty = "* Ingredient Quantity is required."
            }else if(!/^\d+(\.\d+)?$/.test(formData.get(`Ingredients[${index}].qty`))){
                validationErrors.ingredientQty = "* Ingredient Quantity can only be numbers larger than 0."
            }

            if(!formData.get(`Ingredients[${index}].unit`).trim() || !(formData.get(`Ingredients[${index}].unit`) === undefined)){
                validationErrors.ingredientUnit = "* Ingredient Unit is required."
            }
        });

        steps.forEach((step, index) => {
            if(!formData.get(`Steps[${index}].StepContent`).trim() || !(formData.get(`Steps[${index}].StepContent`) === undefined)){
                validationErrors.step = "* Step is required."
            }else if(!/^[A-Za-z0-9\s_!-]+$/.test(formData.get(`Steps[${index}].StepContent`))){
                validationErrors.step = "* Step content can only contains letters, numbers and '_', '-', '!'."
            }
        });
        */

        setErrors(validationErrors);
        if(Object.keys(validationErrors).length === 0){
            await sendRecipeData(formData);
        }
        
    }
    

    async function sendRecipeData(formData){
        
        try{
            const response = await fetch(urls.recipe.Update, {
                method: 'PUT',
                body: formData,
            });
            if (response.ok) {
                navigate("/Book");
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
                            {errors.dishName && <span className="error-message">{errors.dishName}</span>}
                            <label>Description</label>
                            <textarea 
                                type="text"
                                onChange={handleDescriptionChange}
                                value={description}
                                placeholder="Type the Description"
                            />
                            {errors.description && <span className="error-message">{errors.description}</span>}
                            <label>Rating</label>
                            <input 
                                type="text"
                                onChange={handleRatingChange}
                                value={rating}
                                placeholder="Type the rating 1-5"
                            />
                            {errors.rating && <span className="error-message">{errors.rating}</span>}
                            <label>Ingredients</label>
                            <DynamicTwoInput 
                                ingredients={ingredients}
                                setIngredients={setIngredients}
                            />
                            {errors.ingredientName && <span className="error-message">{errors.ingredientName}</span>}
                            {errors.ingredientQty && <span className="error-message">{errors.ingredientQty}</span>}
                            {errors.ingredientUnit && <span className="error-message">{errors.ingredientUnit}</span>}
                            <label>Steps</label>
                            <DynamicInput 
                                steps={steps}
                                setSteps={setSteps}
                            />
                            {errors.step && <span className="error-message">{errors.step}</span>}
                        </div>
                    </div>
                    <div className="image-section">
                        <div className="innerWrap">
                           <label>Add Image</label>
                            <UploadImage 
                                // image={props.recipe ? props.recipe.image : null}
                                imageData={imageSrc}
                                setImageData={setImageSrc}
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