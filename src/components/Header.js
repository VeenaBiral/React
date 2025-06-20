import React from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router"

const Header = () =>{
  const [loginBtn, setLoginBtn] = useState("Login")

    return(
      <div className="header">
        <div className="logo-container">
      <img className="logo" src={LOGO_URL}/> 
      </div>
      <div className="nav-items">
        <ul>
        <li><Link to = "/">Home </Link></li>
        <li><Link to = "/about">About us</Link> </li>
        <li> <Link to = "/contact">Contact us</Link></li>
        <li> cart </li>
        <button className="login" onClick={() =>{
          loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
        }}>
         {loginBtn}  
        </button>
        </ul>
      </div>
      </div>
    )
  }

  export default Header;