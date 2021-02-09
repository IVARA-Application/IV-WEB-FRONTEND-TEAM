import React,{ useState, useContext } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Login = () => {


   const [number, setnumber] = useState("");



   

  
    const inputEvent=(event)=>{
        setnumber(event.target.value);
    }

  return (
    <> 
      <div className="container-fluid login-container">
        <form action="https://ivara-app.herokuapp.com/users/auth/google">
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
            <button className="emailId  submitButton" type="submit">Continue with Google</button>
          </div>
        </form>
        <p className="contact">Having trouble? Please contact help@iventorsinitiatives.com for further support.</p>
      </div>
    </>
  );
};

export default Login;
