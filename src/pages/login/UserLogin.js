import axios from "axios";
import React, { useState } from "react";

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
        <div>
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
        </div>
    )
}