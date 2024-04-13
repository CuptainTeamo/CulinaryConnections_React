import "./DynamicIngredientInput.css"
import React, { useEffect, useState } from "react";

function DynamicIngredientInput({ ingredients, setIngredients }){

    //const [data,setData]=useState([{ingredientName:"",quantity:"", unit:""}]);

    //useEffect(() => {
    //    if (props.ingredients) {
    //        setData(props.ingredients);
    //    }
    //}, [props.ingredients]);

    function handleClick(event){
        event.preventDefault();
        const newIngredients = [...ingredients, {ingredientName:"", quantity:"",unit:""}]
        setIngredients(newIngredients);
    }


    function handleDelete(event, index){
        event.preventDefault();
        const deleteVal = [...ingredients];
        deleteVal.splice(index,1);
        setIngredients(deleteVal);
    }

    function handleChange(event, index, field){
        const newIngredients = ingredients.map((item, idx) =>{
            if(idx === index){
                return {...item, [field]:event.target.value};
            }
            return item;
        });
        setIngredients(newIngredients);

        //const newData = [...data];
        //newData[index] = {...newData[index], [field]: event.target.value};
        //setData(newData);
    }

    function createInputBoxes(ingredient, index){
        return(
            <div key={index}>
                <input 
                    value={ingredient? ingredient.Ingredient : ""} 
                    onChange={e => handleChange(e, index, 'ingredientName')}
                    placeholder="Ingredient Name" 
                />
                <input 
                    className="quantityBox" 
                    value={ingredient? ingredient.Qty : ""} 
                    onChange={e => handleChange(e, index, 'quantity')}
                    placeholder="Quantity"
                />
                <select 
                    className="unitBox" 
                    value={ingredient? ingredient.unit : ""}
                    onChange={e => handleChange(e, index, 'unit')}
                >
                    <option value="">--Please choose an unit--</option>
                    <option value="ml">ml</option>
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="Cup">Cup</option>
                    <option value="teaspoon">teaspoon</option>
                    <option value="tablespoon">tablespoon</option>
                    <option value="slice">slice</option>
                </select>
                <button onClick={(e) => handleDelete(e, index)}>Delete</button>
            </div>
        );
    }

    return(
        <div>
           <button onClick={handleClick}>Add</button>
           <>
            {ingredients && ingredients.map(createInputBoxes)}
           </> 
        </div>
    );
}

export default DynamicIngredientInput;