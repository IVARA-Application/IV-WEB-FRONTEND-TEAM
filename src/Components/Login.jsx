import React,{ useState } from "react";
import "./Login.css";

const Login = () => {

   const [number, setnumber] = useState("");
    const onSubmits=(event)=>{
        event.preventDefault();
        setnumber(number);
    }

    const inputEvent=(event)=>{
        setnumber(event.target.value);
    }

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={onSubmits}>
          <div className="container">
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
            <button className="btn submitButton" type="submit">Login</button>
            <p className="emailId">Continue with Google</p>
          </div>
        </form>
        <p className="contact">Having trouble? Please contact help@iventorsinitiatives.com for further support.</p>
      </div>
    </>
  );
};
export default Login;