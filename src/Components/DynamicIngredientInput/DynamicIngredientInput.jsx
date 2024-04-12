import "./DynamicIngredientInput.css"
import React, { useEffect, useState } from "react";

function DynamicIngredientInput(props){

    const [data,setData]=useState([{ingredientName:"",quantity:"", unit:""}]);

    useEffect(() => {
        if (props.ingredients) {
            setData(props.ingredients);
        }
    }, [props.ingredients]);

    function handleClick(event){
        setData([...data, {ingredientName:"",quantity:"", unit:""}]);

        event.preventDefault();
    }


    function handleDelete(event,index){
        event.preventDefault();
        const deleteVal = [...data];
        deleteVal.splice(index,1);
        setData(deleteVal);
    }

    function handleChange(event, index, field){
        const newData = [...data];
        newData[index] = {...newData[index], [field]: event.target.value};
        setData(newData);
    }

    function createInputBoxes(ingredient, index){
        return(
            <div key={index}>
                <input 
                    value={ingredient? ingredient.Ingredient : ""} 
                    onChange={e => handleChange(e, index, 'ingredientName')}
                    placeholder="Ingredients Name" 
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
            {data.map(createInputBoxes)}
           </> 
        </div>
    );
}

export default DynamicIngredientInput;