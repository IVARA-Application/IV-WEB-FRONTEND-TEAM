import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import svg1 from "../images/entrance.svg";
import svg2 from "../images/study.svg";
import svg3 from "../images/skill.svg";
import svg4 from "../images/previous.svg";
import svg5 from "../images/virtualtuition.svg";
import svg6 from "../images/ebook.svg";
import svg7 from "../images/doubts.svg";
import "./Dashboard.css";
import Card from "react-bootstrap/Card";

import { AuthContext } from "../../HOC/LoginHOC";

const Dashboard = () => {
  const { setUser, user } = useContext(AuthContext);

  useEffect(async () => {
    console.log(window.localStorage.getItem("token"));
    if (window.localStorage.getItem("auth") !== "true") {
      window.location.replace("/login");
    }
    try {
      const user = await axios.get(
        "https://mnua40by72.execute-api.ap-south-1.amazonaws.com/latest/user",
        {
          headers: {
            authorization: window.localStorage.getItem("token"),
          },
        }
      );
      setUser(user.data);
    } catch (error) {
      window.location.replace("/login");
    }
  }, []);

  return (
    <div className="container-dashboard">
      <div className="row d-flex justify-content-center">
        <u className="heading1">IVARA</u>
      </div>

      <div className="row d-flex justify-content-end">
        <p className="heading2">Hey, {user.firstname}</p>
      </div>
      <div className="row" style={{ marginTop: "130px" }}>
        <div
          className="col-lg-3 d-flex justify-content-center"
          style={{ padding: "20px" }}
        >
          <Card
            style={{
              width: "18rem",
              boxShadow: " 0px 20px 20px rgba(136, 136, 136, 0.25)",
            }}
          >
            <Card.Img
              variant="top"
              className="photo d-block mx-auto img-fluid w-50 mt-3"
              src={svg1}
            />
            <Card.Body>
              <Card.Title className="t1" style={{ marginTop: "10px" }}>
                Entrance Exams Courses
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-lg-3 d-flex justify-content-center"
          style={{ padding: "20px" }}
        >
          <Card
            style={{
              width: "18rem",
              boxShadow: " 0px 20px 20px rgba(136, 136, 136, 0.25)",
            }}
          >
            <Card.Img
              variant="top"
              className="photo d-block mx-auto img-fluid w-50 mt-3"
              src={svg2}
            />
            <Card.Body>
              <Card.Title className="t1" style={{ marginTop: "10px" }}>
                Study Abroad Classes
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-lg-3 d-flex justify-content-center"
          style={{ padding: "20px" }}
        >
          <Card
            style={{
              width: "18rem",
              boxShadow: " 0px 20px 20px rgba(136, 136, 136, 0.25)",
            }}
          >
            <Card.Img
              variant="top"
              className="photo d-block mx-auto img-fluid w-50 mt-3"
              src={svg3}
            />
            <Card.Body>
              <Card.Title className="t1">Skill Development Courses</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-lg-3 d-flex justify-content-center"
          style={{ padding: "20px" }}
        >
          <Card
            style={{
              width: "18rem",
              boxShadow: " 0px 20px 20px rgba(136, 136, 136, 0.25)",
            }}
          >
            <Card.Img
              variant="top"
              className="photo d-block mx-auto img-fluid w-50 mt-3"
              src={svg4}
            />
            <Card.Body>
              <Card.Title className="t1" style={{ marginTop: "10px" }}>
                Previous Years Papers
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-4 d-flex justify-content-center"
          style={{ padding: "20px" }}
        >
          <Card
            style={{
              width: "17rem",
              boxShadow: " 0px 20px 20px rgba(136, 136, 136, 0.25)",
            }}
          >
            <Card.Img
              variant="top"
              className="photo d-block mx-auto img-fluid w-50 mt-3"
              src={svg5}
            />
            <Card.Body>
              <Card.Title className="t1">Virtual Tuition Classes</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-lg-4 d-flex justify-content-center"
          style={{ padding: "20px" }}
        >
          <Card
            style={{
              width: "17rem",
              boxShadow: " 0px 20px 20px rgba(136, 136, 136, 0.25)",
            }}
          >
            <Card.Img
              variant="top"
              className="photo d-block mx-auto img-fluid w-50 mt-3"
              src={svg6}
            />
            <Card.Body>
              <Card.Title className="t1">E-Books and E-Test Series</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div
          className="col-lg-4 d-flex justify-content-center"
          style={{ padding: "20px" }}
        >
          <Card
            style={{
              width: "17rem",
              boxShadow: " 0px 20px 20px rgba(136, 136, 136, 0.25)",
            }}
          >
            <Card.Img
              variant="top"
              className="photo d-block mx-auto img-fluid w-50 mt-3"
              src={svg7}
            />
            <Card.Body>
              <Card.Title className="t1">24X7 Doubts Portal</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Dashboard);
