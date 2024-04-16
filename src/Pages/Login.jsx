import React, { useState } from "react";


function Login(){
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append('password', password);

        try{
            const response = await fetch("https://localhost:7155/api/Identity/Login", {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                // navigate("/Book");
            } else {
                throw new Error('Failed to submit recipe');
            }
        }catch(error){
            console.error('Error submitting recipe: ', error);
        }

    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return(
        <div className="body">
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    type="text"
                    onChange={handleUsernameChange}
                    value={username}
                />
                <label>Password</label>
                <input 
                    type="text"
                    onChange={handlePasswordChange}
                    value={password}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;