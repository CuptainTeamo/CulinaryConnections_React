import React, { useState } from "react";

function DynamicInput(){

    const [data,setData]=useState([{steps:""}]);

    function handleClick(event){
        setData([...data, {steps:""}]);

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
                <textarea placeholder="What to do next" />
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

export default DynamicInput;