import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

export default function EntranceExam() {
  const [dataLoaded, setDataLoaded] = useState(true);
  const [subjectList, setSubjectList] = useState([]);
  const [loadingText, setLoadingText] = useState("Loading subjects...");

  useEffect(() => {
    async function fetchData() {
      if (window.localStorage.getItem("auth") !== "true") {
        window.location.replace("/login");
      }
      try {
        const response = await axios.get(
          "https://hro2ywog4d.execute-api.ap-south-1.amazonaws.com/latest/course/entranceExam",
          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          }
        );
        setSubjectList(response.data);
        setDataLoaded(true);
      } catch (error) {
        console.error(error);
        setLoadingText(
          "Could not fetch subjects. Please re-try or contact hello@iventorsinitiatives.com for support."
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
        <h3 className="text-center">Please choose the subject</h3>
        <div className="row justify-content-around pt-5">
          {subjectList.map((element) => {
            return (
              <div className="col-10 offset-1 col-md-3 offset-md-0 text-center">
                <Card
                  className="mx-3 my-3 my-md-4"
                  style={{ backgroundColor: "#a1aaf6", cursor: "pointer" }}
                >
                  <Card.Body style={{ fontSize: "1.6rem" }}>
                    {element}
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
