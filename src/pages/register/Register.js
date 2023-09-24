import axios from "axios";
import React, { useState } from "react";
import './Register.css'
import { Link } from "react-router-dom";

export const Register = () => {
    const [userEmail, setUserEmail] =useState("");
    const [userName, setUserName] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] =useState("");
    const [userConformpassword, setUserConformPassword] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [stationEmail, setStationEmail] = useState("");
    const [statioinPassword, setStationPassword] =useState("");
    const [statioinConformPassword, setStationConformPassword] =useState("");
    const [stationName, setStationName] = useState("");
    const [stationRegNum, setStationRegNum] = useState("");
    const [stationPhoneNumber, setStationPhoneNumber] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [userReg, setUserReg] = useState(true);

    const handleUserRegister = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/user/signup", {
                name: userName,
                email : userEmail,
                phoneNumber: userPhoneNumber, 
                password: userPassword
            })
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const handleStationRegister = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post("auth/station/signup", {
                stationName: stationName,
                email: stationEmail, 
                phoneNumber: stationPhoneNumber,
                regNumber: stationRegNum,
                password: statioinPassword,
                district: district,
                city: city
            })
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="RegisterWrapper">
            <div className="topSection">
                <p>Chose a way u like to Register</p>
                <div className="buttons">
                    <button onClick={() => setUserReg(true)}>Register as a User</button>
                    <button onClick={() => setUserReg(false)}>Register as a Station</button>
                </div>
            </div>
                {userReg ? (
                    <div className="card">
                        <h1>Register as a User</h1>
                        <input 
                            type="text"
                            placeholder="Name"
                            value={userName}
                            onChange={e=> {
                                setUserName(e.target.value)
                            }}
                        />
                        <input 
                            type="text"
                            placeholder="Email"
                            value={userEmail}
                            onChange={e=> {
                                setUserEmail(e.target.value)
                            }}
                        />
                        <input 
                            type="number"
                            placeholder="Phone number"
                            value={userPhoneNumber}
                            onChange={e=> {
                                setUserPhoneNumber(e.target.value)
                            }}
                        />
                        <input 
                            type="password"
                            placeholder="password"
                            value={userConformpassword}
                            onChange={e=> {
                                setUserConformPassword(e.target.value)
                            }}
                        />
                        <input 
                            type="password"
                            placeholder="Conform password"
                            value={userPassword}
                            onChange={e=> {
                                setUserPassword(e.target.value)
                            }}
                        />
                        <button onClick={handleUserRegister}>Register</button>
                        <div className="reg">
                            <Link className="link" to="/login">Login</Link> 
                        </div>
                    </div>
                ) : (
                    <div className="card">
                        <h1>Register as a Station</h1>
                        <input 
                            type="text"
                            placeholder="Station Name"
                            value={stationName}
                            onChange={e=> {
                                setStationName(e.target.value)
                            }}
                        />
                        <input 
                            type="text"
                            placeholder="Station Register Number"
                            value={stationRegNum}
                            onChange={e=> {
                                setStationRegNum(e.target.value)
                            }}
                        />
                        <input 
                            type="text"
                            placeholder="Email"
                            value={stationEmail}
                            onChange={e=> {
                                setStationEmail(e.target.value)
                            }}
                        />
                        <input 
                            type="number"
                            placeholder="Station Phone Number"
                            value={stationPhoneNumber}
                            onChange={e=> {
                                setStationPhoneNumber(e.target.value)
                            }}
                        />
                        <input 
                            type="text"
                            placeholder="District"
                            value={district}
                            onChange={e=> {
                                setDistrict(e.target.value)
                            }}
                        />
                        <input 
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={e=> {
                                setCity(e.target.value)
                            }}
                        />
                        <input 
                            type="password"
                            placeholder="password"
                            value={statioinConformPassword}
                            onChange={e=> {
                                setStationConformPassword(e.target.value)
                            }}
                        />
                        <input 
                            type="password"
                            placeholder="Conform assword"
                            value={statioinPassword}
                            onChange={e=> {
                                setStationPassword(e.target.value)
                            }}
                        />
                        <button onClick={handleStationRegister}>Register</button>
                        <div className="reg">
                            <Link className="link" to="/login">Login</Link> 
                        </div>
                    </div>
                )}
        </div>
    )
}
