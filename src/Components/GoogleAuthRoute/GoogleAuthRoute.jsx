import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../HOC/LoginHOC";

function GoogleAuthRoute() {
  const { setAuth } = useContext(AuthContext);

  const [message, setMessage] = useState("Please wait while we log you in...");

  const queryObject = new URLSearchParams(window.location.search);
  const error = queryObject.get("error");
  const code = queryObject.get("code");
  useEffect(() => {
    if (error) setMessage(error);
    else {
      axios
        .post(
          "https://mnua40by72.execute-api.ap-south-1.amazonaws.com/latest/user",
          {
            code: code,
          }
        )
        .then((response) => {
          if (response.data.success !== true) {
            return setMessage(response.data.message);
          }
          window.localStorage.setItem("token", response.data.token);
          setAuth(true);
          window.location.replace("/dashboard");
        });
    }
  }, []);
  return <div>{message}</div>;
}

export default GoogleAuthRoute;
