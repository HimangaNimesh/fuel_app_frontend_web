import axios from "axios";
import React, { useState } from "react";
import './UserLogin.css'
import { Link } from "react-router-dom";

export const UserLogin = () => {
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/user/signin", {email, password})
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="UserLoginWrapper">
            <div>
                <button></button>
            </div>
            <div className="card">
                <h1>Login as a User</h1>
                <input 
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e=> {
                        setEmail(e.target.value)
                    }}
                />
                <input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e=> {
                        setPassword(e.target.value)
                    }}
                />
                <button onClick={handleLogin}>Login</button>
                <div className="reg">
                    <Link to="/register">Register</Link> 
                </div>
            </div>
        </div>
    )
}