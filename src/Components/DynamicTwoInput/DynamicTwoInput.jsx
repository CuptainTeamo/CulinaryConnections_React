import React, { useEffect, useState } from "react";

function DynamicTwoInput(props){

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
        const deleteVal = [...data];
        deleteVal.splice(index,1);
        setData(deleteVal);
    
        event.preventDefault();
    }

    function createInputBoxes(ingredient){
        return(
            <div>
                <input value={ingredient? ingredient.ingredientName : ""} placeholder="Ingredients Name" />
                <input value={ingredient? ingredient.ingredientQuantity : ""} placeholder="Quantity"/>
                <select value={ingredient? ingredient.unit : ""}>
                    <option value="">--Please choose an unit--</option>
                    <option value="ml">ml</option>
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="Cup">Cup</option>
                    <option value="teaspoon">teaspoon</option>
                    <option value="tablespoon">tablespoon</option>
                    <option value="slice">slice</option>
                </select>
                <button onClick={handleDelete}>Delete</button>
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

export default DynamicTwoInput;