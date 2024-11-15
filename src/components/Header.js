import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header= ()=>{

    const [loginButton, setLoginButton] = useState("Login"); 
    const [onlineStatus, setOnlineStatus] = useState(false)

    return(
        <div>
        <div className="flex justify-center bg-green-100 shadow-lg">
        <div>
            <img className="w-56" src="" />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4"> Online status: {onlineStatus ? " ✅" : "🔴"}</li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <button className="login" onClick={()=>{
                    loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login")
                }}>{loginButton}</button>
            </ul>
        </div>
        </div>
        </div>

    )
}
export default Header;