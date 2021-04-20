import { ArrowBack } from "@material-ui/icons";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

import ivaraLogo from "../../img/ivaraLogo.svg";

export default function Login() {
  const [actionText, setActionText] = useState("Login");
  const [invalidCreds, setInvalidCreds] = useState(false);

  async function submitFormData(event) {
    event.preventDefault();
    setActionText("Processing");
    const form = document.getElementsByTagName("form")[0];
    let dataMap = new Map();
    for (let i = 0; i < form.elements.length; i++) {
      let element = form.elements[i];
      dataMap.set(element.name, element.value);
    }
    const { username, password } = Object.fromEntries(dataMap);
    try {
      const response = await axios.post(
        "https://hro2ywog4d.execute-api.ap-south-1.amazonaws.com/latest/student/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      window.localStorage.setItem("token", response.data.token);
      window.localStorage.setItem("auth", true);
      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
      setInvalidCreds(true);
    }
  }
  return (
    <div
      className="mx-auto p-5"
      style={{
        backgroundColor: "white",
        display: "block",
        width: "fit-content",
        marginTop: "13rem",
      }}
    >
      <img
        src={ivaraLogo}
        alt="IVARA"
        className="d-block mx-auto"
        width="100"
      />
      <h2 style={{ textAlign: "center" }}>Login to IVARA</h2>
      <p
        style={{ color: "red", textAlign: "center" }}
        className={invalidCreds ? "d-block" : "d-none"}
      >
        Could not log you in. Are the credentials correct?
      </p>
      <form>
        <input
          type="text"
          name="username"
          className="my-3 mx-auto"
          placeholder="Enter your username"
          style={{ textAlign: "center", display: "block" }}
        ></input>
        <input
          type="password"
          name="password"
          className="mt-3 mx-auto"
          placeholder="Enter your password"
          style={{ textAlign: "center", display: "block" }}
        ></input>
        <Button
          disabled={actionText === "Processing" ? true : false}
          variant="primary"
          size="lg"
          className="d-block mx-auto mt-3"
          onClick={submitFormData}
        >
          {actionText}
        </Button>
      </form>
      <p className="text-center mt-3">
        If you are facing issues logging in, please
        <br />
        contact us at{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.href = "mailto:hello@iventorsinitiatives.com";
          }}
        >
          hello@iventorsinitiatives.com
        </span>
      </p>
      <p
        className="text-center mt-1"
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <ArrowBack /> Back to home
      </p>
    </div>
  );
}
