import React,{ useState, useContext } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";


import {baseUrl} from "../constants/index";
import axios from "axios";

import { AuthContext } from '../HOC/LoginHOC';

const Login = () => {
  const {
    setAuth,
    setUser,
    setToken
  } = useContext(AuthContext);

   const [number, setnumber] = useState("");

   const onGoogle = () =>{
    axios
    .get(baseUrl + "users/auth/google", {headers: {"Access-Control-Allow-Origin": true}})
    
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => {
      if (response.success) {
        localStorage.setItem("token", response.token);
        setUser(response.user);
        setAuth(true);
        setToken(response.token);
      } else {
        var error = new Error("Error " + response.status);
        error.response = response;
        throw error;
      }
    })
   }

    const onSubmits=(event)=>{
        event.preventDefault();
        setnumber(number);
    }
  
    const inputEvent=(event)=>{
        setnumber(event.target.value);
    }

  return (
    <> 
      <div className="container-fluid login-container">
        <form onSubmit={onSubmits}>
          <div className="container login ">
            <h1 className="loginHeading">Login</h1>
            <h4 className="subHeading">Or Create a new account</h4>
            <div class="input-group inputContainer flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                +91
              </span>
              <input
                type="number"
                class="form-control inputNumber"
                placeholder="Enter your registered number"
                onChange={inputEvent}
                aria-label="Usernumber"
                aria-describedby="addon-wrapping"
              />
            </div>
            <button className=" submitButton" type="submit">Login</button>
            <button className="emailId  submitButton" onClick={()=>{onGoogle()}}>Continue with Google</button>
          </div>
        </form>
        <p className="contact">Having trouble? Please contact help@iventorsinitiatives.com for further support.</p>
      </div>
    </>
  );
};

export default Login;
