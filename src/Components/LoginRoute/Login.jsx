import React, { useState, useContext } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Login = () => {
  const [invalidLoginMessage, setInvalidLoginMessage] = useState("");
  const [number, setnumber] = useState("");
  const inputEvent = (event) => {
    setnumber(event.target.value);
  };

  const loginFunction = async (e) => {
    e.preventDefault();
    const formFields = document.querySelectorAll("input");
    console.log({
      username: formFields[0].value,
      password: formFields[1].value,
    });
    try {
      const response = await axios.post(
        "https://hro2ywog4d.execute-api.ap-south-1.amazonaws.com/latest/student/login",
        {
          username: formFields[0].value,
          password: formFields[1].value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("auth", true);
      window.location.replace("/dashboard");
    } catch (error) {
      console.error(error);
      setInvalidLoginMessage("Invalid login details");
    }
  };

  return (
    <>
      <div className="container-fluid login-container">
        <form
          action="https://mnua40by72.execute-api.ap-south-1.amazonaws.com/latest/user/glogin"
          id="login-form"
        >
          <div className="container login ">
            <h1 className="loginHeading">Login to IVARA</h1>
            <p style={{ color: "yellow", fontWeight: "bold" }}>
              {invalidLoginMessage}
            </p>
            <div class="input-group inputContainer flex-nowrap">
              <input
                type="text"
                class="form-control inputNumber"
                placeholder="Enter your username"
                onChange={inputEvent}
                aria-label="Username"
                aria-describedby="addon-wrapping"
                name="username"
              />
            </div>
            <div class="input-group inputContainer flex-nowrap">
              <input
                type="password"
                class="form-control inputNumber"
                placeholder="Enter your password"
                onChange={inputEvent}
                aria-label="Password"
                aria-describedby="addon-wrapping"
                name="password"
              />
            </div>
            <button className=" submitButton" onClick={loginFunction}>
              Login
            </button>
            <button className="emailId  submitButton" type="submit">
              Continue with Google
            </button>
          </div>
        </form>
        <p className="contact">
          Having trouble? Please contact hello@iventorsinitiatives.com for
          further support
        </p>
      </div>
    </>
  );
};

export default Login;
