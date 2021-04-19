import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

import svg1 from "../../img/ebook.svg";
import svg2 from "../../img/study.svg";
import svg3 from "../../img/skill.svg";
import svg4 from "../../img/previous.svg";
import svg5 from "../../img/virtualtuition.svg";
import svg6 from "../../img/ebook.svg";
import svg7 from "../../img/doubts.svg";

const skillData = [
  {
    name: "Entrance Exam Courses",
    image: svg1,
  },
  {
    name: "Study Abroad Classes",
    image: svg2,
  },
  {
    name: "Skill Development Courses",
    image: svg3,
  },
  {
    name: "Previous Years Papers",
    image: svg4,
  },
  {
    name: "Virtual Tuition Classes",
    image: svg5,
  },
  {
    name: "E-Books and E-Test Series",
    image: svg6,
  },
  {
    name: "24X7 Doubts Portal",
    image: svg7,
  },
];

export default function Dashboard() {
  const [user, setUser] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [loadingText, setLoadingText] = useState("Loading data...");

  useEffect(() => {
    async function fetchData() {
      if (window.localStorage.getItem("auth") !== "true") {
        window.location.replace("/login");
      }
      try {
        const response = await axios.get(
          "https://hro2ywog4d.execute-api.ap-south-1.amazonaws.com/latest/student/profile",
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          }
        );
        setUser(response.data);
        setDataLoaded(true);
      } catch (error) {
        console.error(error);
        setLoadingText(
          "Could not fetch data. Please re-try or contact hello@iventorsinitiatives.com for support."
        );
      }
    }
    fetchData();
  });
  return (
    <div
      className="m-3 m-md-5 p-3 p-md-5"
      style={{ backgroundColor: "white", borderRadius: "25px" }}
    >
      <div
        className={["text-center", dataLoaded ? "d-none" : "d-block"].join(" ")}
      >
        {loadingText}
      </div>
      <div className={dataLoaded ? "d-block" : "d-none"}>
        <h4 className="text-center text-md-left">Hello {user.name}</h4>
        <div
          className="row justify-content-around pt-4"
          style={{ margin: "0 !important" }}
        >
          {skillData.map((element) => {
            return (
              <div
                className="col-10 col-md-3 offset-md-0 px-md-3 py-3 mb-2"
                style={{ margin: "0 !important" }}
              >
                <Card
                  title={element.name}
                  style={{
                    boxShadow: " 0px 20px 20px rgba(136, 136, 136, 0.25)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.location.href = "/entranceexam";
                  }}
                >
                  <Card.Img
                    variant="top"
                    className="photo d-block mx-auto img-fluid w-50 mt-3"
                    src={element.image}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      {element.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
