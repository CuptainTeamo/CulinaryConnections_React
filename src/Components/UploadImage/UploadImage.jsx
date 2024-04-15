import "./UploadImage.css"
import React, { useEffect, useState } from "react";


function UploadImage({ imageData, setImageData, setImage }){

    function showPreview(e){
        if(e.target.files && e.target.files[0]){
            const imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x =>{
                setImageData(x.target.result);
                setImage(imageFile);
                console.log(imageFile);
            }
            reader.readAsDataURL(imageFile);
        }
        else{
            setImageData('');
            setImage(null); 
        }
    }
    
    return(
        <div>
            {imageData && <img className="uploadedImg" src={imageData} />}
            <input type="file" accept="image/*" onChange={showPreview}></input>
        </div>
    );
}

export default UploadImage;