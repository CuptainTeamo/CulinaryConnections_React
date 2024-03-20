import React, { useState } from "react";

function DynamicTwoInput(){

    const [data,setData]=useState([{fname:"",lname:""}]);

    function handleClick(event){
        setData([...data, {fname:"",lname:""}]);

        event.preventDefault();
    }

    function handleDelete(event,index){
        const deleteVal = [...data];
        deleteVal.splice(index,1);
        setData(deleteVal);
    
        event.preventDefault();
    }

    function createInputBoxes(){
        return(
            <div>
                <input placeholder="Ingredients Name" />
                <input placeholder="Weight"/>
                <select>
                    <option value="">--Please choose an option--</option>
                    <option value="recipe1">ml</option>
                    <option value="recipe2">g</option>
                    <option value="recipe3">kg</option>
                    <option value="recipe4">Cup</option>
                    <option value="recipe5">teaspoon</option>
                    <option value="recipe6">tablespoon</option>
                    <option value="recipe7">slice</option>
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