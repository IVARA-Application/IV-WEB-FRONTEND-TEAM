import React from "react";
import Login from "../Components/login/login";

export default function LoginPage() {
  return (
    <div
      style={{
        background:
          "linear-gradient(109.89deg, #4da0b0 24.67%, #4e5de1 101.3%)",
        minHeight: "100vh",
        overflow: "auto",
      }}
    >
      <Login />
    </div>
  );
}
