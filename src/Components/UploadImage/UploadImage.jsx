import "./UploadImage.css"
import React, { useState } from "react";

function UploadImage(){
    const [file, setFile] = useState();

    function getFile(event){
        setFile(URL.createObjectURL(event.target.files[0]));
    }
    
    return(
        <div>
            <input type="file" onChange={getFile}></input>
            <img className="uploadedImg" src={file} />
        </div>
    );
}

export default UploadImage;