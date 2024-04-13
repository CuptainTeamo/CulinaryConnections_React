import "./DynamicStepInputBox.css";
import React, { useEffect, useState } from "react";

// function DynamicStepInputBox(props){
function DynamicStepInputBox({steps, setSteps}){

    // const [data,setData]=useState([""]);

    //useEffect(()=> {
    //    if(props.steps) {
    //        setData(props.steps);
    //    }
    //}, [props.steps]);

    function handleClick(event){
        event.preventDefault();

        const newSteps = [...steps, ""];
        setSteps(newSteps);
        //setData([...data, ""]);

    }

    function handleDelete(event,index){
        event.preventDefault();
        const deleteVal = [...steps];
        deleteVal.splice(index,1);
        setSteps(deleteVal);
    }

    function handleChange(event, index){
        const newSteps = [...steps];
        newSteps[index] = event.target.value;
        setSteps(newSteps);
    }

    function createInputBoxes(step, index){
        return(
            <div key={index}>
                <textarea 
                    value={step ? step.StepContent : ""}
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
            {steps && steps.map(createInputBoxes)}
           </> 
        </div>
    );
}

export default DynamicStepInputBox;