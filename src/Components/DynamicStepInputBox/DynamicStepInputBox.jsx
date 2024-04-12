import "./DynamicStepInputBox.css";
import React, { useEffect, useState } from "react";

function DynamicStepInputBox(props){

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
        event.preventDefault();
        const deleteVal = [...data];
        deleteVal.splice(index,1);
        setData(deleteVal);
    }

    function handleChange(event, index){
        const newData = [...data];
        newData[index] = event.target.value;
        setData(newData);
    }

    function createInputBoxes(stepObj, index){
        return(
            <div key={index}>
                <textarea 
                    value={stepObj ? stepObj.StepContent : ""}
                    onChange={(e)=>handleChange(e, index)}
                    placeholder="What to do next" 
                />
                <button onClick={(e)=>handleDelete(e, index)}>Delete</button>
            </div>
        );
    }

    return(
        <div className="stepInput">
           <button onClick={handleClick}>Add</button>
           <>
            {data.map(createInputBoxes)}
           </> 
        </div>
    );
}

export default DynamicStepInputBox;