import "./UploadImage.css"
import React, { useEffect, useState } from "react";

function UploadImage(props){
    const [file, setFile] = useState();

    useEffect(()=>{
        if(props.image){
            setFile(props.image);
        }
    },[props.image]);

    function getFile(event){
        setFile(URL.createObjectURL(event.target.files[0]));
    }
    
    return(
        <div>
            <img className="uploadedImg" src={file} />
            <input type="file" onChange={getFile}></input>
        </div>
    );
}

export default UploadImage;