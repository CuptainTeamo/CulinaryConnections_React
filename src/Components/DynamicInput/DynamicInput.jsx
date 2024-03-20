import React, { useEffect, useState } from "react";

function DynamicInput(props){

    const [data,setData]=useState([""]);

    useEffect(()=> {
        if(props.steps) {
            setData(props.steps);
        }
    }, [props.steps]);

    function handleClick(event){
        setData([...data, ""]);

        event.preventDefault();
    }

    function handleDelete(event,index){
        const deleteVal = [...data];
        deleteVal.splice(index,1);
        setData(deleteVal);
    
        event.preventDefault();
    }

    function createInputBoxes(step){
        return(
            <div>
                <textarea 
                    value={step ? step : ""}
                    placeholder="What to do next" 
                />
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