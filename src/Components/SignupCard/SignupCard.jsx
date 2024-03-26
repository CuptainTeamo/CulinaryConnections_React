import "./SignupCard.css"
import React from "react";

function SignupCard(props){
    return(
        <div className="form-container">
            <h1>Create an Account</h1>
            <form>
                <div className="inputs-wrapper">
                    <div className="input-section">
                        <div className="innerWrap">
                            <label>Username</label>
                            <input 
                                type="text"
                                value={props.user ?props.user.username : ""}
                                placeholder="Enter your username"
                            />
                            <label>E-Mail</label>
                            <input 
                                type="text"
                                value={props.user ?props.user.email : ""}
                                placeholder="Enter your E-Mail"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-actions">
                    <button type="submit">{props.user ? "Register" : "Register"}</button>
                </div>
            </form>
        </div>
    );
}

export default SignupCard;