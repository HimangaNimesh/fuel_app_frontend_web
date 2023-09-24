import axios from "axios";
import React, { useState } from "react";
import './UserLogin.css'
import { Link } from "react-router-dom";

export const UserLogin = () => {
    const [email, setEmail] =useState("");
    const [password, setPassword] = useState("");
    const [userLogin, setUserLogin] = useState(true);

    const handleUserLogin = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/user/signin", {email, password})
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const handleStationLogin = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/station/signin", {email, password})
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="UserLoginWrapper">
            <div className="topSection">
                <p>Chose a way u like to Login</p>
                <div className="buttons">
                    <button onClick={() => setUserLogin(true)}>Login as a User</button>
                    <button onClick={() => setUserLogin(false)}>Login as a Station</button>
                </div>
            </div>
                {userLogin ? (
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
                        <button onClick={handleUserLogin}>Login</button>
                        <div className="reg">
                            <Link to="/register">Register</Link> 
                        </div>
                    </div>
                ) : (
                    <div className="card">
                        <h1>Login as a Station</h1>
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
                        <button onClick={handleStationLogin}>Login</button>
                        <div className="reg">
                            <Link className="link" to="/register">Register</Link> 
                        </div>
                    </div>
                )}
        </div>
    )
}