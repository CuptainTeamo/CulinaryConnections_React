import "./LoginCard.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import urls from "../../Data/URL"; // Adjust the path as needed

function LoginCard() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        console.log("Attempting to send login request to:", urls.identity.Login, "with data:", user);

        try {
            const response = await axios.post(urls.identity.Login, user);
            console.log("Login successful: Full response:", response);
            navigate("/home"); // Redirect to the home page
        } catch (err) {
            console.error("Login error:", err);
            setError(err.response ? err.response.data.message : "Login failed!");
        }
    };

    return (
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputs-wrapper">
                    <div className="input-section">
                        <label>E-Mail</label>
                        <input 
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Enter your E-Mail"
                            required
                        />
                        <label>Password</label>
                        <input 
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                </div>
                {error && <div className="error">{error}</div>}
                <div className="form-actions">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginCard;
