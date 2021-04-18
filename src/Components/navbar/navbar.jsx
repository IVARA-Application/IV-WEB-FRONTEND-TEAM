import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../img/ivaraLogo.svg";

export default function IvaraNavbar() {
  const [actionText, setActionText] = useState("Login");
  useEffect(() => {
    if (window.localStorage.getItem("auth") === "true") setActionText("Logout");
  });
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/" style={{ fontSize: "30px" }}>
        <img src={Logo} alt="Ivara Logo" className="pr-2" />
        IVARA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="/"
            className="px-3"
            style={{ fontWeight: "500", fontSize: "20px" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/faq"
            className="px-3"
            style={{ fontWeight: "500", fontSize: "20px" }}
          >
            FAQs
          </Nav.Link>
          <NavDropdown
            title="Other Products"
            className="px-3"
            id="basic-nav-dropdown"
            style={{ fontWeight: "500", fontSize: "20px" }}
          >
            <NavDropdown.Item href="https://www.mentorbaba.in/">
              MentorBaba
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.healmymind.in">
              HealMyMind
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            onClick={() => {
              if (window.localStorage.getItem("auth") === "true") {
                window.localStorage.setItem("auth", "");
                window.localStorage.setItem("token", "");
                window.location.reload();
              } else {
                window.location.href = "/login";
              }
            }}
            className="px-3 mx-3"
            style={{
              fontWeight: "700",
              fontSize: "20px",
              border: "2px solid #a1aaf6",
              borderRadius: "20px",
              color: "#a1aaf6",
              width: "fit-content",
            }}
          >
            {actionText}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
