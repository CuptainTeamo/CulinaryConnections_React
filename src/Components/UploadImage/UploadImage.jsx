import "./UploadImage.css"
import React, { useEffect, useState } from "react";

//const initialFieldValues = {
//    imageSrc: '',
//    imageFile: null
//}

function UploadImage({ setImage }){
    const[imageSrc, setImageSrc] = useState('');
    //const [file, setFile] = useState(initialFieldValues);

    //useEffect(()=>{
    //    if(props.image){
    //        setFile(props.image);
    //    }
    //},[props.image]);

    function showPreview(e){
        if(e.target.files && e.target.files[0]){
            const imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x =>{
                setImageSrc(x.target.result);
                setImage(imageFile);
                console.log(imageFile);
                //setFile({
                //    imageFile: imageFile,
                //    imageSrc: x.target.result
                //});
            }
            reader.readAsDataURL(imageFile);
        }
        else{
            setImageSrc('');
            setImage(null); 
        }
        // setFile(URL.createObjectURL(event.target.files[0]));
    }
    
    return(
        <div>
            {imageSrc && <img className="uploadedImg" src={imageSrc} />}
            <input type="file" accept="image/*" onChange={showPreview}></input>
        </div>
    );
}

export default UploadImage;