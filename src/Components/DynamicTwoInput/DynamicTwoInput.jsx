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