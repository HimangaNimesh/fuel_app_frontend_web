import axios from "axios";
import React, { useState } from "react";
import './Login.css'
import { Link } from "react-router-dom";

export const Login = () => {
    const [userEmail, setUserEmail] =useState("");
    const [userPassword, setUserPassword] = useState("");
    const [stationEmail, setStationEmail] = useState("");
    const [statioinPassword, setStationPassword] =useState("");
    const [userLogin, setUserLogin] = useState(true);

    const handleUserLogin = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/user/signin", {
                email: userEmail, 
                password: userPassword
            })
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const handleStationLogin = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/station/signin", {
                email: stationEmail, 
                password: statioinPassword
            })
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="LoginWrapper">
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
                            value={userEmail}
                            onChange={e=> {
                                setUserEmail(e.target.value)
                            }}
                        />
                        <input 
                            type="password"
                            placeholder="password"
                            value={userPassword}
                            onChange={e=> {
                                setUserPassword(e.target.value)
                            }}
                        />
                        <button onClick={handleUserLogin}>Login</button>
                        <div className="reg">
                            <Link className="link" to="/register">Register</Link> 
                        </div>
                    </div>
                ) : (
                    <div className="card">
                        <h1>Login as a Station</h1>
                        <input 
                            type="text"
                            placeholder="Email"
                            value={stationEmail}
                            onChange={e=> {
                                setStationEmail(e.target.value)
                            }}
                        />
                        <input 
                            type="password"
                            placeholder="password"
                            value={statioinPassword}
                            onChange={e=> {
                                setStationPassword(e.target.value)
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